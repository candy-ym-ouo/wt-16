import { useEffect, useRef } from 'react'
import { useGameStore } from '../stores/gameStore'
import { NightSkyRenderer } from '../modules/NightSkyRenderer'

export default function NightSky() {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)

  const settings = useGameStore((s) => s.settings)
  const targetConstellationId = useGameStore((s) => s.currentTargetConstellation)
  const connectionPath = useGameStore((s) => s.connectionPath)
  const connectStar = useGameStore((s) => s.connectStar)

  useEffect(() => {
    if (!containerRef.current) return

    const handleStarClick = (starId) => {
      connectStar(starId)
      if (navigator.vibrate && settings.hapticFeedback) {
        navigator.vibrate(10)
      }
    }

    const renderer = new NightSkyRenderer(
      containerRef.current,
      settings,
      handleStarClick
    )
    rendererRef.current = renderer

    const handleTouchStart = (e) => {
      renderer.handlePinchStart(e)
    }
    const handleTouchMove = (e) => {
      renderer.handlePinchMove(e)
    }
    const handleTouchEnd = () => {
      renderer.handlePinchEnd()
    }

    const canvas = renderer.renderer.domElement
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false })
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
      renderer.dispose()
      rendererRef.current = null
    }
  }, [])

  useEffect(() => {
    if (rendererRef.current && targetConstellationId) {
      rendererRef.current.loadConstellation(targetConstellationId)
    } else if (rendererRef.current && !targetConstellationId) {
      rendererRef.current.clearConstellation()
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

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full touch-none"
      style={{ touchAction: 'none' }}
    />
  )
}
