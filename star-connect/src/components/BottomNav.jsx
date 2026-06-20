import { useGameStore } from '../stores/gameStore'

export default function BottomNav() {
  const { activePanel, setActivePanel, getProgress, unlockedAchievements, observationLogs } = useGameStore()
  const progress = getProgress()

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

  return (
    <div className="absolute left-0 right-0 bottom-0 z-20 p-4 pb-safe pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <div className="glass-panel p-2 flex items-center justify-around relative">
          {items.map((item) => {
            const isActive = activePanel === item.id || (item.isHome && activePanel === null)
            return (
              <button
                key={item.label}
                onClick={() => setActivePanel(item.id)}
                className={`relative flex flex-col items-center justify-center rounded-xl px-3 py-2
                          transition-all duration-200 min-w-[52px] ${
                  isActive
                    ? item.isHome
                      ? 'bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white shadow-lg -mt-6'
                      : 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                <span className={`${item.isHome ? 'text-2xl' : 'text-xl'}`}>
                  {item.icon}
                </span>
                <span className={`mt-0.5 ${
                  item.isHome ? 'text-[10px] font-medium' : 'text-[10px]'
                }`}>
                  {item.label}
                </span>
                {item.badge && !isActive && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full
                                 bg-star-gold text-space-900 text-[9px] font-bold
                                 flex items-center justify-center">
                    {item.badge.length > 2 ? '99+' : item.badge}
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
