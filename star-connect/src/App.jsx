import { useState, useEffect } from 'react'
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
import GuidedHintOverlay from './components/GuidedHintOverlay'
import StarRoute from './components/StarRoute'
import StoryChapter from './components/StoryChapter'
import ObservationReport from './components/ObservationReport'
import ConstellationResearch from './components/ConstellationResearch'
import { useGameStore } from './stores/gameStore'
import { HINT_INTENSITY_OPTIONS } from './data/constants'

export default function App() {
  const activePanel = useGameStore((s) => s.activePanel)
  const settings = useGameStore((s) => s.settings)
  const familyModeEnabled = useGameStore((s) => s.familyMode.enabled)
  const storyProgress = useGameStore((s) => s.storyProgress)
  const clearPendingStoryUnlock = useGameStore((s) => s.clearPendingStoryUnlock)
  const markChapterAsRead = useGameStore((s) => s.markChapterAsRead)
  const markPrologueAsRead = useGameStore((s) => s.markPrologueAsRead)
  const markEpilogueAsRead = useGameStore((s) => s.markEpilogueAsRead)
  const markFinalChapterAsRead = useGameStore((s) => s.markFinalChapterAsRead)
  const setNarrativeChoice = useGameStore((s) => s.setNarrativeChoice)
  const addStardust = useGameStore((s) => s.addStardust)
  const addLog = useGameStore((s) => s.addLog)

  const [activeStory, setActiveStory] = useState(null)
  const [currentUnlockIndex, setCurrentUnlockIndex] = useState(0)

  useEffect(() => {
    const trackPanelVisit = useGameStore.getState().trackPanelVisit
    if (activePanel) {
      trackPanelVisit(activePanel)
    }
  }, [activePanel])

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--text-scale', settings.textScale.toString())

    if (settings.eyeCareMode) {
      root.style.setProperty('--eyecare-filter', 'sepia(0.15) saturate(0.9) contrast(0.95) brightness(0.95)')
      root.style.setProperty('--eyecare-overlay', 'rgba(255, 200, 120, 0.08)')
    } else {
      root.style.setProperty('--eyecare-filter', 'none')
      root.style.setProperty('--eyecare-overlay', 'transparent')
    }

    const hintConfig = HINT_INTENSITY_OPTIONS[settings.hintIntensity] || HINT_INTENSITY_OPTIONS.medium
    root.style.setProperty('--hint-glow-opacity', hintConfig.glowOpacity.toString())
    root.style.setProperty('--hint-pulse-speed', hintConfig.pulseSpeed.toString() + 's')
    root.style.setProperty('--hint-value', hintConfig.value.toString())
  }, [settings.textScale, settings.eyeCareMode, settings.hintIntensity])

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
      <div className="eyecare-overlay" />
      <NightSky />

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
      {activePanel === 'report' && <ObservationReport />}
      {activePanel === 'research' && <ConstellationResearch />}

      <GuidedHintOverlay />

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
