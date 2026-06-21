import { useGameStore } from '../stores/gameStore'
import { audioManager } from '../modules/AudioManager'
import { getCurrentSeason, SEASONS } from '../data/seasonPlan'

export default function BottomNav() {
  const { activePanel, setActivePanel, openAtlasList, getProgress, unlockedAchievements, observationLogs, seasonRewardsClaimed, getSeasonStats, favoriteConstellations, familyMode, getFamilyProgress, nightExpedition } = useGameStore()
  const progress = getProgress()
  const familyProgress = getFamilyProgress()
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
      id: 'atlas',
      label: '图鉴',
      icon: '📚',
      badge: favoriteConstellations.length > 0 ? favoriteConstellations.length.toString() : null
    },
    {
      id: 'family',
      label: '亲子',
      icon: '👨‍👩‍👧',
      badge: familyProgress.unlockedAchievements > 0 && !familyMode.enabled
        ? familyProgress.unlockedAchievements.toString()
        : familyMode.enabled ? 'ON' : null,
      badgeColor: familyMode.enabled ? 'bg-green-500 text-white' : null
    },
    {
      id: 'expedition',
      label: '远征',
      icon: '🌙',
      badge: nightExpedition.currentRun?.active
        ? `${nightExpedition.currentRun.stageIndex + 1}`
        : nightExpedition.stamina < 5 ? `${nightExpedition.stamina}` : null,
      badgeColor: nightExpedition.currentRun?.active ? 'bg-violet-500 text-white' : null
    },
    {
      id: null,
      label: '夜空',
      icon: '🌌',
      isHome: true
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
    const isClosingAtlas = panelId === 'atlas' && activePanel === 'atlas'
    
    if (panelId === 'family') {
      if (activePanel === 'family') {
        setActivePanel(null)
      } else {
        setActivePanel('family')
      }
      return
    }
    
    if (isClosingAtlas) {
      setActivePanel(null)
    } else if (panelId === 'atlas') {
      openAtlasList()
    } else {
      setActivePanel(activePanel === panelId ? null : panelId)
    }
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
                  <span className={`absolute -top-0.5 -right-0.5 px-1 h-4 min-w-[16px] rounded-full
                                 text-[8px] font-bold flex items-center justify-center
                                 ${item.badgeColor || 'bg-star-gold text-space-900'}`}>
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
