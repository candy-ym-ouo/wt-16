import { useEffect, useRef } from 'react'
import { useGameStore } from '../stores/gameStore'
import { NightSkyRenderer } from '../modules/NightSkyRenderer'
import { audioManager } from '../modules/AudioManager'

export default function NightSky() {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const lastMistakesRef = useRef(0)

  const settings = useGameStore((s) => s.settings)
  const targetConstellationId = useGameStore((s) => s.currentTargetConstellation)
  const connectionPath = useGameStore((s) => s.connectionPath)
  const mistakes = useGameStore((s) => s.mistakes)
  const connectStar = useGameStore((s) => s.connectStar)
  const isConstellationComplete = useGameStore((s) => s.isConstellationComplete)
  const getActiveNightSkyEvents = useGameStore((s) => s.getActiveNightSkyEvents)
  const refreshNightSkyEvents = useGameStore((s) => s.refreshNightSkyEvents)

  useEffect(() => {
    if (!containerRef.current) return

    audioManager.init()

    const handleStarClick = (starId) => {
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
    } else if (rendererRef.current && !targetConstellationId) {
      rendererRef.current.clearConstellation()
      lastMistakesRef.current = 0
    }
  }, [targetConstellationId])

  useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.updateConnectionPath(connectionPath)
    }
  }, [connectionPath])

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
