import { useEffect, useRef } from 'react'
import { useGameStore } from '../stores/gameStore'
import { NightSkyRenderer } from '../modules/NightSkyRenderer'
import { audioManager } from '../modules/AudioManager'
import { getConstellationById } from '../data/constellations'

export default function NightSky() {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const lastMistakesRef = useRef(0)
  const replayTimerRef = useRef(null)

  const settings = useGameStore((s) => s.settings)
  const targetConstellationId = useGameStore((s) => s.currentTargetConstellation)
  const connectionPath = useGameStore((s) => s.connectionPath)
  const mistakes = useGameStore((s) => s.mistakes)
  const connectStar = useGameStore((s) => s.connectStar)
  const isConstellationComplete = useGameStore((s) => s.isConstellationComplete)
  const getActiveNightSkyEvents = useGameStore((s) => s.getActiveNightSkyEvents) || (() => [])
  const refreshNightSkyEvents = useGameStore((s) => s.refreshNightSkyEvents) || (() => {})
  const replayState = useGameStore((s) => s.replayState)
  const advanceReplayStep = useGameStore((s) => s.advanceReplayStep)

  const discoveredConstellations = useGameStore((s) => s.discoveredConstellations)
  const perfectObservations = useGameStore((s) => s.perfectObservations)
  const getGuideConstellations = useGameStore((s) => s.getGuideConstellations)
  const setTargetConstellation = useGameStore((s) => s.setTargetConstellation)

  useEffect(() => {
    if (!containerRef.current) return

    audioManager.init()

    const handleStarClick = (starId, starUserData) => {
      const state = useGameStore.getState()
      if (state.replayState.active) return

      if (starUserData?.isDiscovered || starUserData?.isGuide) {
        const constellationId = starUserData?.constellationId
        if (constellationId) {
          const c = getConstellationById(constellationId)
          if (c) {
            audioManager.ensureContext()
            audioManager.playClick()
            setTargetConstellation(constellationId)
            return
          }
        }
        return
      }

      audioManager.ensureContext()
      const result = connectStar(starId)

      setTimeout(() => {
        if (rendererRef.current) {
          const isComplete = targetConstellationId && isConstellationComplete(targetConstellationId)
          rendererRef.current.notifyConnectResult(result, isComplete)
        }
      }, 10)
    }

    const renderer = new NightSkyRenderer(
      containerRef.current,
      settings,
      handleStarClick
    )
    rendererRef.current = renderer

    const guideIds = getGuideConstellations ? getGuideConstellations(3) : []
    if (discoveredConstellations.length > 0) {
      renderer.loadDiscoveredConstellations(discoveredConstellations, perfectObservations)
    }
    if (guideIds.length > 0) {
      renderer.setGuideConstellations(guideIds)
    }

    const handleTouchStart = (e) => {
      audioManager.ensureContext()
      renderer.handlePinchStart(e)
    }
    const handleTouchMove = (e) => {
      renderer.handlePinchMove(e)
    }
    const handleTouchEnd = () => {
      renderer.handlePinchEnd()
    }

    const handleWheel = () => {
      audioManager.playZoom()
    }

    const canvas = renderer.renderer.domElement
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false })
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
    canvas.addEventListener('touchend', handleTouchEnd)
    canvas.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
      canvas.removeEventListener('wheel', handleWheel)
      renderer.dispose()
      rendererRef.current = null
    }
  }, [])

  useEffect(() => {
    if (rendererRef.current && targetConstellationId) {
      rendererRef.current.loadConstellation(targetConstellationId)
      lastMistakesRef.current = 0

      const remainingDiscovered = discoveredConstellations.filter(id => id !== targetConstellationId)
      rendererRef.current.loadDiscoveredConstellations(remainingDiscovered, perfectObservations)

      const guideIds = getGuideConstellations ? getGuideConstellations(3).filter(id => id !== targetConstellationId) : []
      rendererRef.current.setGuideConstellations(guideIds)
    } else if (rendererRef.current && !targetConstellationId) {
      rendererRef.current.clearConstellation()
      lastMistakesRef.current = 0

      if (discoveredConstellations.length > 0) {
        rendererRef.current.loadDiscoveredConstellations(discoveredConstellations, perfectObservations)
      }
      const guideIds = getGuideConstellations ? getGuideConstellations(3) : []
      rendererRef.current.setGuideConstellations(guideIds)
    }
  }, [targetConstellationId])

  useEffect(() => {
    if (replayState.active) return
    if (rendererRef.current) {
      rendererRef.current.updateConnectionPath(connectionPath)
    }
  }, [connectionPath, replayState.active])

  useEffect(() => {
    if (!replayState.active) {
      if (replayTimerRef.current) {
        clearInterval(replayTimerRef.current)
        replayTimerRef.current = null
      }
      return
    }

    if (rendererRef.current && replayState.constellationId) {
      if (!rendererRef.current.constellationMeshes.has(replayState.constellationId)) {
        rendererRef.current.loadConstellation(replayState.constellationId)
      }
    }

    const displayPath = replayState.path.slice(0, replayState.step + 1)
    if (rendererRef.current) {
      rendererRef.current.updateConnectionPath(displayPath)
    }

    if (replayState.playing) {
      if (replayTimerRef.current) {
        clearInterval(replayTimerRef.current)
      }
      replayTimerRef.current = setInterval(() => {
        const rs = useGameStore.getState().replayState
        if (!rs.active || !rs.playing) {
          clearInterval(replayTimerRef.current)
          replayTimerRef.current = null
          return
        }
        const advanced = advanceReplayStep()
        if (!advanced) {
          clearInterval(replayTimerRef.current)
          replayTimerRef.current = null
        }
      }, 600)
    } else {
      if (replayTimerRef.current) {
        clearInterval(replayTimerRef.current)
        replayTimerRef.current = null
      }
    }

    return () => {
      if (replayTimerRef.current) {
        clearInterval(replayTimerRef.current)
        replayTimerRef.current = null
      }
    }
  }, [replayState.active, replayState.step, replayState.playing, replayState.constellationId])

  useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.updateSettings(settings)
    }
  }, [settings])

  useEffect(() => {
    if (mistakes > lastMistakesRef.current && rendererRef.current) {
      rendererRef.current.notifyConnectResult(false, false)
    }
    lastMistakesRef.current = mistakes
  }, [mistakes])

  useEffect(() => {
    if (!rendererRef.current) return
    rendererRef.current.loadDiscoveredConstellations(discoveredConstellations, perfectObservations)
    const guideIds = getGuideConstellations ? getGuideConstellations(3) : []
    const filteredGuideIds = targetConstellationId
      ? guideIds.filter(id => id !== targetConstellationId)
      : guideIds
    rendererRef.current.setGuideConstellations(filteredGuideIds)
  }, [discoveredConstellations, perfectObservations])

  useEffect(() => {
    const updateEvents = () => {
      if (rendererRef.current) {
        refreshNightSkyEvents()
        const activeEvents = getActiveNightSkyEvents()
        rendererRef.current.setActiveEvents(activeEvents)
      }
    }

    updateEvents()
    const interval = setInterval(updateEvents, 60000)

    return () => clearInterval(interval)
  }, [refreshNightSkyEvents, getActiveNightSkyEvents])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full touch-none"
      style={{ touchAction: 'none' }}
    />
  )
}
