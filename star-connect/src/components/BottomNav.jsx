import { useGameStore } from '../stores/gameStore'
import { audioManager } from '../modules/AudioManager'
import { getCurrentSeason, SEASONS } from '../data/seasonPlan'

export default function BottomNav() {
  const { activePanel, setActivePanel, getProgress, unlockedAchievements, observationLogs, seasonRewardsClaimed, getSeasonStats } = useGameStore()
  const progress = getProgress()
  const currentSeason = getCurrentSeason()
  const seasonStats = getSeasonStats()
  const currentSeasonProgress = seasonStats[currentSeason]
  const totalSeasonRewards = Object.keys(SEASONS).length * 3

  const items = [
    {
      id: 'tasks',
      label: '星座',
      icon: '✨',
      badge: progress.totalConstellations - progress.constellations > 0
        ? (progress.totalConstellations - progress.constellations).toString()
        : null
    },
    {
      id: 'log',
      label: '日志',
      icon: '📖',
      badge: observationLogs.length > 0 ? observationLogs.length.toString() : null
    },
    {
      id: 'seasons',
      label: '四季',
      icon: SEASONS[currentSeason].icon,
      badge: seasonRewardsClaimed.length < totalSeasonRewards && currentSeasonProgress?.overallPercentage > 0
        ? `${currentSeasonProgress?.overallPercentage || 0}%`
        : null
    },
    {
      id: null,
      label: '夜空',
      icon: '🌌',
      isHome: true
    },
    {
      id: 'achievements',
      label: '成就',
      icon: '🏆',
      badge: unlockedAchievements.length > 0 ? unlockedAchievements.length.toString() : null
    },
    {
      id: 'settings',
      label: '设置',
      icon: '⚙️'
    }
  ]

  const handleNavClick = (panelId) => {
    audioManager.ensureContext()
    const isClosing = activePanel === panelId || (panelId === null && activePanel === null)
    if (isClosing && panelId !== null) {
      audioManager.playPanelClose()
    } else {
      audioManager.playPanelOpen()
    }
    setActivePanel(activePanel === panelId ? null : panelId)
  }

  return (
    <div className="absolute left-0 right-0 bottom-0 z-20 p-3 pb-safe pointer-events-none">
      <div className="max-w-lg mx-auto pointer-events-auto">
        <div className="glass-panel p-1.5 flex items-center justify-around relative">
          {items.map((item) => {
            const isActive = activePanel === item.id || (item.isHome && activePanel === null)
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex flex-col items-center justify-center rounded-xl px-2 py-2
                          transition-all duration-200 min-w-[44px] ${
                  isActive
                    ? item.isHome
                      ? 'bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white shadow-lg -mt-5'
                      : 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                <span className={`${item.isHome ? 'text-2xl' : 'text-lg'}`}>
                  {item.icon}
                </span>
                <span className={`mt-0.5 ${
                  item.isHome ? 'text-[10px] font-medium' : 'text-[9px]'
                }`}>
                  {item.label}
                </span>
                {item.badge && !isActive && (
                  <span className="absolute -top-0.5 -right-0.5 px-1 h-4 min-w-[16px] rounded-full
                                 bg-star-gold text-space-900 text-[8px] font-bold
                                 flex items-center justify-center">
                    {item.badge.length > 3 ? '99+' : item.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
