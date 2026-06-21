import React, { useState, useEffect } from 'react'
import NightSky from './components/NightSky'
import ConstellationTasks from './components/ConstellationTasks'
import TasksPanel from './components/TasksPanel'
import ObservationLog from './components/ObservationLog'
import Achievements from './components/Achievements'
import SettingsPanel from './components/SettingsPanel'
import SeasonPlan from './components/SeasonPlan'
import StarAtlas from './components/StarAtlas'
import BottomNav from './components/BottomNav'
import AchievementToast from './components/AchievementToast'
import FamilyMode from './components/FamilyMode'
import NightExpedition from './components/NightExpedition'
import ObservationCalendar from './components/ObservationCalendar'
import StarQuiz from './components/StarQuiz'
import ObservationTeam from './components/ObservationTeam'
import StarGallery from './components/StarGallery'
import TutorialCamp from './components/TutorialCamp'
import StarRoute from './components/StarRoute'
import StoryChapter from './components/StoryChapter'
import NightSkyEvents from './components/NightSkyEvents'
import HomeEventBanner from './components/HomeEventBanner'
import ObservationDashboard from './components/ObservationDashboard'
import StarShop from './components/StarShop'
import ConstellationChallenge from './components/ConstellationChallenge'
import OfflineStatusBadge from './components/OfflineStatusBadge'
import StarWorkshop from './components/StarWorkshop'
import { useGameStore } from './stores/gameStore'
import { offlineManager } from './modules/offline/OfflineManager.js'
import { useOffline } from './modules/offline/useOffline.js'

export default function App() {
  const activePanel = useGameStore((s) => s.activePanel)
  const familyModeEnabled = useGameStore((s) => s.familyMode.enabled)
  const storyProgress = useGameStore((s) => s.storyProgress)
  const clearPendingStoryUnlock = useGameStore((s) => s.clearPendingStoryUnlock)
  const markChapterAsRead = useGameStore((s) => s.markChapterAsRead)
  const markPrologueAsRead = useGameStore((s) => s.markPrologueAsRead)
  const markEpilogueAsRead = useGameStore((s) => s.markEpilogueAsRead)
  const markFinalChapterAsRead = useGameStore((s) => s.markFinalChapterAsRead)
  const setNarrativeChoice = useGameStore((s) => s.setNarrativeChoice)
  const addStardust = useGameStore((s) => s.addStardust)
  const refreshNightSkyEvents = useGameStore((s) => s.refreshNightSkyEvents)
  const observationLogs = useGameStore((s) => s.observationLogs)

  const offline = useOffline()
  const [activeStory, setActiveStory] = useState(null)
  const [currentUnlockIndex, setCurrentUnlockIndex] = useState(0)
  const [showNightSkyEvents, setShowNightSkyEvents] = useState(false)

  useEffect(() => {
    const init = async () => {
      try {
        await offlineManager.init()
      } catch (e) {
        console.warn('Offline module init failed:', e)
      }
    }
    init()
  }, [])

  const lastSyncedObservationLength = React.useRef(0)
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        await offlineManager.init()
        if (cancelled || !observationLogs || observationLogs.length === 0) return

        if (lastSyncedObservationLength.current === 0) {
          const result = await offlineManager.bulkSaveObservationLogs(observationLogs)
          if (result.saved > 0 || result.duplicated > 0) {
            lastSyncedObservationLength.current = observationLogs.length
          }
        } else {
          const newCount = observationLogs.length - lastSyncedObservationLength.current
          if (newCount > 0) {
            const newLogs = observationLogs.slice(lastSyncedObservationLength.current)
            await offlineManager.bulkSaveObservationLogs(newLogs)
            lastSyncedObservationLength.current = observationLogs.length
          } else if (newCount < 0) {
            const result = await offlineManager.bulkSaveObservationLogs(observationLogs)
            lastSyncedObservationLength.current = observationLogs.length
          }
        }
      } catch (e) {}
    })()
    return () => { cancelled = true }
  }, [observationLogs])

  useEffect(() => {
    refreshNightSkyEvents()
    const interval = setInterval(() => {
      refreshNightSkyEvents()
    }, 60000)
    return () => clearInterval(interval)
  }, [refreshNightSkyEvents])

  useEffect(() => {
    if (storyProgress.pendingUnlock &&
        storyProgress.pendingUnlock.length > 0 &&
        !activeStory &&
        activePanel !== 'seasons') {
      const firstUnlock = storyProgress.pendingUnlock[0]
      setCurrentUnlockIndex(0)

      if (firstUnlock.type === 'chapter') {
        setActiveStory({ type: 'chapter', id: firstUnlock.chapterId })
      } else if (firstUnlock.type === 'prologue') {
        setActiveStory({ type: 'prologue', id: firstUnlock.seasonId })
      } else if (firstUnlock.type === 'epilogue') {
        setActiveStory({ type: 'epilogue', id: firstUnlock.seasonId })
      } else if (firstUnlock.type === 'final') {
        setActiveStory({ type: 'final', id: 'final' })
      }
    }
  }, [storyProgress.pendingUnlock, activeStory, activePanel])

  const handleCloseStory = () => {
    const pending = storyProgress.pendingUnlock
    if (pending && currentUnlockIndex < pending.length - 1) {
      const nextIndex = currentUnlockIndex + 1
      setCurrentUnlockIndex(nextIndex)
      const nextStory = pending[nextIndex]
      if (nextStory) {
        setTimeout(() => {
          if (nextStory.type === 'chapter') {
            setActiveStory({ type: 'chapter', id: nextStory.chapterId })
          } else if (nextStory.type === 'prologue') {
            setActiveStory({ type: 'prologue', id: nextStory.seasonId })
          } else if (nextStory.type === 'epilogue') {
            setActiveStory({ type: 'epilogue', id: nextStory.seasonId })
          } else if (nextStory.type === 'final') {
            setActiveStory({ type: 'final', id: 'final' })
          }
        }, 300)
      }
    } else {
      setActiveStory(null)
      clearPendingStoryUnlock()
      setCurrentUnlockIndex(0)
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-space-900">
      <NightSky />

      <div className="absolute top-3 right-3 z-30">
        <OfflineStatusBadge />
      </div>

      {offline.installProgress && offline.installProgress.step !== 'complete' && offline.installProgress.step !== 'error' && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-xl
                        bg-space-800/90 backdrop-blur border border-nebula-purple/30 text-xs text-white
                        flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <span className="w-4 h-4 border-2 border-nebula-purple border-t-transparent rounded-full animate-spin" />
          <div>
            <div className="font-medium">{offline.installProgress.message}</div>
            <div className="w-32 h-1 mt-1 bg-space-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan transition-all"
                style={{ width: `${offline.installProgress.progress || 0}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {!offline.isOnline && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full
                        bg-red-500/20 border border-red-500/40 backdrop-blur-sm">
          <span className="text-xs text-red-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            当前处于离线模式，已启用缓存数据
          </span>
        </div>
      )}

      {offline.isWeakConnection && offline.isOnline && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full
                        bg-yellow-500/20 border border-yellow-500/40 backdrop-blur-sm">
          <span className="text-xs text-yellow-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            网络信号较弱，使用缓存提升体验
          </span>
        </div>
      )}

      <HomeEventBanner onOpenEvents={() => setShowNightSkyEvents(true)} />

      <ConstellationTasks />

      <BottomNav />

      <AchievementToast />

      {activePanel === 'tasks' && <TasksPanel />}
      {activePanel === 'atlas' && <StarAtlas />}
      {activePanel === 'log' && <ObservationLog />}
      {activePanel === 'achievements' && <Achievements />}
      {activePanel === 'settings' && <SettingsPanel />}
      {activePanel === 'seasons' && <SeasonPlan />}
      {activePanel === 'family' && <FamilyMode />}
      {activePanel === 'expedition' && <NightExpedition />}
      {activePanel === 'calendar' && <ObservationCalendar />}
      {activePanel === 'quiz' && <StarQuiz />}
      {activePanel === 'team' && <ObservationTeam />}
      {activePanel === 'gallery' && <StarGallery />}
      {activePanel === 'tutorial' && <TutorialCamp />}
      {activePanel === 'route' && <StarRoute />}
      {activePanel === 'dashboard' && <ObservationDashboard />}
      {activePanel === 'shop' && <StarShop />}
      {activePanel === 'challenge' && <ConstellationChallenge />}
      {activePanel === 'workshop' && <StarWorkshop />}

      {showNightSkyEvents && (
        <NightSkyEvents onClose={() => setShowNightSkyEvents(false)} />
      )}

      <div className="pointer-events-none absolute top-0 left-0 w-full h-32
                      bg-gradient-to-b from-space-900/50 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40
                      bg-gradient-to-t from-space-900/80 to-transparent z-10" />

      {activeStory && activePanel !== 'seasons' && (
        <StoryChapter
          storyType={activeStory.type}
          storyId={activeStory.id}
          onClose={handleCloseStory}
        />
      )}
    </div>
  )
}
