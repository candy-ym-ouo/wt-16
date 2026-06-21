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
import { useGameStore } from './stores/gameStore'

export default function App() {
  const activePanel = useGameStore((s) => s.activePanel)
  const familyModeEnabled = useGameStore((s) => s.familyMode.enabled)

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

      <div className="pointer-events-none absolute top-0 left-0 w-full h-32
                      bg-gradient-to-b from-space-900/50 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40
                      bg-gradient-to-t from-space-900/80 to-transparent z-10" />
    </div>
  )
}
