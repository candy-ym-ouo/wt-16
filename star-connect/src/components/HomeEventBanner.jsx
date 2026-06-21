import { useState, useEffect, useRef } from 'react'
import { useGameStore } from '../stores/gameStore'
import { EVENT_TYPES } from '../data/nightSkyEvents'

export default function HomeEventBanner({ onOpenEvents }) {
  const [isVisible, setIsVisible] = useState(true)
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const [, forceTick] = useState(0)

  const activeEvents = useGameStore((s) => s.nightSkyEvents.activeEvents)
  const refreshNightSkyEvents = useGameStore((s) => s.refreshNightSkyEvents)
  const activeEventsRef = useRef(activeEvents)
  activeEventsRef.current = activeEvents

  useEffect(() => {
    refreshNightSkyEvents()
    const interval = setInterval(() => {
      refreshNightSkyEvents()
    }, 60000)
    return () => clearInterval(interval)
  }, [refreshNightSkyEvents])

  useEffect(() => {
    const tickInterval = setInterval(() => {
      forceTick((t) => t + 1)
    }, 1000)
    return () => clearInterval(tickInterval)
  }, [])

  useEffect(() => {
    setCurrentEventIndex(0)
  }, [activeEvents.length])

  useEffect(() => {
    if (activeEvents.length > 1) {
      const interval = setInterval(() => {
        setCurrentEventIndex((prev) => (prev + 1) % activeEventsRef.current.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [activeEvents.length])

  if (activeEvents.length === 0 || !isVisible) {
    return (
      <button
        onClick={onOpenEvents}
        className="absolute top-4 right-4 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all hover:scale-110"
      >
        <span className="text-2xl">🌌</span>
      </button>
    )
  }

  const currentEvent = activeEvents[currentEventIndex] || activeEvents[0]

  const getEventTypeColor = (type) => {
    switch (type) {
      case EVENT_TYPES.METEOR_SHOWER:
        return 'from-blue-500/80 to-purple-500/80'
      case EVENT_TYPES.SPECIAL_ASTRO:
        return 'from-amber-500/80 to-orange-500/80'
      case EVENT_TYPES.LIMITED_TASK:
        return 'from-green-500/80 to-teal-500/80'
      default:
        return 'from-gray-500/80 to-slate-500/80'
    }
  }

  const getEventTypeIcon = (type) => {
    switch (type) {
      case EVENT_TYPES.METEOR_SHOWER:
        return '🌠'
      case EVENT_TYPES.SPECIAL_ASTRO:
        return '✨'
      case EVENT_TYPES.LIMITED_TASK:
        return '📋'
      default:
        return '🌟'
    }
  }

  const formatTimeRemaining = (endTime) => {
    if (!endTime) return ''
    const diff = endTime - Date.now()
    if (diff <= 0) return '即将结束'

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (hours > 24) {
      return `${Math.floor(hours / 24)}天${hours % 24}时`
    }
    if (hours > 0) {
      return `${hours}时${minutes}分`
    }
    return `${minutes}分钟`
  }

  return (
    <div className="absolute top-4 left-4 right-4 z-30">
      <div
        onClick={onOpenEvents}
        className={`bg-gradient-to-r ${getEventTypeColor(currentEvent.type)} backdrop-blur-lg rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/20 shadow-lg`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl animate-pulse">{currentEvent.icon || getEventTypeIcon(currentEvent.type)}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold text-lg">{currentEvent.name}</h3>
                {currentEvent.isPeak && (
                  <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-0.5 rounded-full font-semibold animate-pulse">
                    高峰
                  </span>
                )}
              </div>
              <p className="text-white/80 text-sm truncate max-w-[200px]">{currentEvent.description}</p>
              {currentEvent.progress && (
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden max-w-[150px]">
                    <div
                      className="h-full bg-white rounded-full transition-all"
                      style={{
                        width: `${Math.min(100, (currentEvent.progress.current / currentEvent.progress.target) * 100)}%`
                      }}
                    />
                  </div>
                  <span className="text-white/70 text-xs">
                    {currentEvent.progress.current}/{currentEvent.progress.target}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentEvent.endTime && (
              <div className="text-right bg-black/30 rounded-lg px-3 py-2">
                <p className="text-white/60 text-xs">剩余</p>
                <p className="text-white font-mono font-bold text-sm">
                  {formatTimeRemaining(currentEvent.endTime)}
                </p>
              </div>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsVisible(false)
              }}
              className="text-white/60 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        {activeEvents.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-3">
            {activeEvents.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentEventIndex ? 'bg-white w-6' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {currentEvent.rewards && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/20">
            <span className="text-white/60 text-xs">🎁 奖励：</span>
            <div className="flex flex-wrap gap-1">
              {currentEvent.rewards.stardust && (
                <span className="bg-yellow-400/30 text-yellow-200 px-2 py-0.5 rounded text-xs">
                  💫 {currentEvent.rewards.stardust}
                </span>
              )}
              {currentEvent.rewards.achievement && (
                <span className="bg-purple-400/30 text-purple-200 px-2 py-0.5 rounded text-xs">
                  🏆 成就
                </span>
              )}
              {currentEvent.rewards.title && (
                <span className="bg-pink-400/30 text-pink-200 px-2 py-0.5 rounded text-xs">
                  👑 称号
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
