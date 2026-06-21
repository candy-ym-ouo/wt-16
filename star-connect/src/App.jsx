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
import StarRoute from './components/StarRoute'
import StoryChapter from './components/StoryChapter'
import ObservationReport from './components/ObservationReport'
import { useGameStore } from './stores/gameStore'

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
  const addLog = useGameStore((s) => s.addLog)

  const [activeStory, setActiveStory] = useState(null)
  const [currentUnlockIndex, setCurrentUnlockIndex] = useState(0)

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
