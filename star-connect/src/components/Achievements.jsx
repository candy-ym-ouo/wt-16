import { useGameStore } from '../stores/gameStore'
import { ACHIEVEMENTS } from '../data/achievements'
import { SEASON_ACHIEVEMENTS } from '../data/seasonPlan'
import { ROUTE_ACHIEVEMENTS } from '../data/starRoute'
import { DAILY_ACHIEVEMENTS } from '../data/dailyCommissions'

const CATEGORY_INFO = {
  beginner: { name: '初心者', icon: '🌱', color: 'from-green-500 to-emerald-400' },
  explorer: { name: '探索家', icon: '🧭', color: 'from-blue-500 to-cyan-400' },
  challenge: { name: '挑战者', icon: '🔥', color: 'from-orange-500 to-red-400' },
  collector: { name: '收藏家', icon: '📚', color: 'from-purple-500 to-pink-400' },
  special: { name: '特别成就', icon: '💫', color: 'from-yellow-500 to-orange-400' },
  season: { name: '四季成就', icon: '🌸', color: 'from-pink-500 to-cyan-400' },
  route: { name: '路线成就', icon: '🗺️', color: 'from-emerald-500 to-teal-400' },
  daily: { name: '每日委托', icon: '📋', color: 'from-amber-500 to-yellow-400' },
  hidden: { name: '隐藏成就', icon: '🔮', color: 'from-indigo-500 via-purple-500 to-fuchsia-400' }
}

export default function Achievements() {
  const { unlockedAchievements, setActivePanel, getProgress } = useGameStore()
  const progress = getProgress()

  const allAchievements = [...ACHIEVEMENTS, ...SEASON_ACHIEVEMENTS, ...ROUTE_ACHIEVEMENTS, ...DAILY_ACHIEVEMENTS]

  const grouped = allAchievements.reduce((acc, a) => {
    if (!acc[a.category]) acc[a.category] = []
    acc[a.category].push(a)
    return acc
  }, {})

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">成就系统</h2>
              <p className="text-xs text-white/50 mt-1">
                解锁你的星空里程碑
              </p>
            </div>
            <button
              onClick={() => setActivePanel(null)}
              className="icon-btn"
              aria-label="关闭"
            >
              ✕
            </button>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-white/60">总体进度</span>
              <span className="text-star-gold font-mono">
                {progress.achievements} / {progress.totalAchievements}
              </span>
            </div>
            <div className="h-3 bg-space-900/80 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-star-gold via-nebula-orange to-nebula-purple rounded-full transition-all duration-700"
                style={{
                  width: `${progress.totalAchievements > 0
                    ? (progress.achievements / progress.totalAchievements) * 100
                    : 0}%`
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-5">
          {Object.entries(grouped).map(([category, list]) => {
            const info = CATEGORY_INFO[category]
            const unlocked = list.filter(a => unlockedAchievements.includes(a.id)).length
            return (
              <div key={category}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{info.icon}</span>
                  <h3 className="font-display text-white/90 text-sm">
                    {info.name}
                  </h3>
                  <span className="fs-10 text-white/40 ml-auto">
                    {unlocked} / {list.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {list.map((a) => {
                    const isUnlocked = unlockedAchievements.includes(a.id)
                    const isHiddenLocked = a.hidden && !isUnlocked
                    const displayIcon = isHiddenLocked ? '❓' : a.icon
                    const displayName = isHiddenLocked ? '???' : a.name
                    const displayDesc = isHiddenLocked ? '解锁后揭晓神秘成就' : a.description
                    return (
                      <div
                        key={a.id}
                        className={`p-3 rounded-xl border transition-all ${
                          isUnlocked
                            ? 'border-white/20 bg-space-700/40'
                            : isHiddenLocked
                            ? 'border-purple-500/20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20'
                            : 'border-white/5 bg-space-900/40 opacity-50'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${
                              isUnlocked
                                ? `bg-gradient-to-br ${info.color}`
                                : isHiddenLocked
                                ? 'bg-gradient-to-br from-indigo-700/60 to-purple-700/60 animate-pulse'
                                : 'bg-space-800 grayscale'
                            }`}
                          >
                            {displayIcon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-xs font-semibold ${
                              isUnlocked
                                ? 'text-white'
                                : isHiddenLocked
                                ? 'text-purple-200'
                                : 'text-white/50'
                            }`}>
                              {displayName}
                            </div>
                            <div className={`fs-10 mt-0.5 leading-tight ${
                              isUnlocked
                                ? 'text-white/40'
                                : isHiddenLocked
                                ? 'text-purple-300/60 italic'
                                : 'text-white/40'
                            }`}>
                              {displayDesc}
                            </div>
                          </div>
                        </div>
                        {a.hidden && isUnlocked && (
                          <div className="mt-2 flex items-center gap-1">
                            <span className="fs-9 px-1.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                              🔮 隐藏成就
                            </span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
