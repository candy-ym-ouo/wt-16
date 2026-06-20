import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS } from '../data/constellations'
import { DIFFICULTY_CONFIG } from '../data/constants'

export default function ConstellationTasks() {
  const {
    discoveredConstellations,
    currentTargetConstellation,
    setTargetConstellation,
    setActivePanel,
    connectionPath,
    mistakes,
    clearConnectionPath,
    isConstellationComplete,
    currentTargetConstellation: targetId
  } = useGameStore()

  const currentConstellation = CONSTELLATIONS.find(
    (c) => c.id === targetId
  )

  const progress = currentConstellation
    ? Math.min(
        100,
        Math.round(
          (new Set(connectionPath).size / currentConstellation.stars.length) * 100
        )
      )
    : 0

  return (
    <div className="absolute left-0 right-0 top-0 p-4 z-20 pointer-events-none">
      {!currentTargetConstellation ? (
        <div className="max-w-md mx-auto pointer-events-auto">
          <div className="glass-panel p-4 animate-float">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-xl font-display text-white">星座图鉴</h2>
                <p className="text-xs text-white/50 mt-0.5">
                  已发现 {discoveredConstellations.length} / {CONSTELLATIONS.length}
                </p>
              </div>
              <button
                onClick={() => setActivePanel('tasks')}
                className="icon-btn"
                aria-label="打开任务面板"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {CONSTELLATIONS.slice(0, 4).map((c) => {
                const completed = isConstellationComplete(c.id)
                return (
                  <button
                    key={c.id}
                    onClick={() => setTargetConstellation(c.id)}
                    className={`p-3 rounded-xl border transition-all text-left card-hover ${
                      completed
                        ? 'border-nebula-purple/60 bg-nebula-purple/10'
                        : 'border-white/10 bg-space-700/40'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-display text-white">
                            {c.name}
                          </span>
                          {completed && <span className="text-star-gold">✓</span>}
                        </div>
                        <div className="text-[10px] text-white/40 mt-0.5">
                          {c.nameEn}
                        </div>
                      </div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        c.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                        c.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {DIFFICULTY_CONFIG[c.difficulty].label}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => setActivePanel('tasks')}
              className="w-full mt-3 btn-secondary text-sm py-2.5"
            >
              查看全部 {CONSTELLATIONS.length} 个星座 →
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-sm mx-auto pointer-events-auto">
          <div className="glass-panel p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-display text-white">
                    {currentConstellation?.name}
                  </h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    currentConstellation?.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                    currentConstellation?.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {DIFFICULTY_CONFIG[currentConstellation?.difficulty].label}
                  </span>
                  {isConstellationComplete(currentConstellation?.id) && (
                    <span className="text-star-gold text-sm animate-pulse-slow">
                      ★ 已完成
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-white/50 mt-0.5">
                  {currentConstellation?.description}
                </p>
              </div>
              <button
                onClick={() => {
                  clearConnectionPath()
                  setTargetConstellation(null)
                }}
                className="ml-2 w-9 h-9 flex items-center justify-center rounded-lg
                         bg-space-700/60 border border-white/10 text-white/70
                         hover:bg-red-500/30 hover:text-red-200 transition-all"
                aria-label="退出任务"
              >
                ✕
              </button>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[11px] mb-1.5">
                <span className="text-white/50">
                  连接进度: {new Set(connectionPath).size} / {currentConstellation?.stars.length}
                </span>
                <span className="text-red-300/70">
                  失误: {mistakes}
                </span>
              </div>
              <div className="h-2 bg-space-900/80 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={clearConnectionPath}
                className="flex-1 btn-secondary text-xs py-2"
                disabled={connectionPath.length === 0}
              >
                🔄 重连
              </button>
              <button
                onClick={() => setActivePanel('tasks')}
                className="flex-1 btn-secondary text-xs py-2"
              >
                📋 切换星座
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
