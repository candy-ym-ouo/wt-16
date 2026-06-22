import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS } from '../data/constellations'
import { DIFFICULTY_CONFIG } from '../data/constants'
import { getCurrentSeason, SEASONS } from '../data/seasonPlan'

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
    currentTargetConstellation: targetId,
    undoLastStep,
    replayState,
    startReplay,
    stopReplay,
    advanceReplayStep,
    resetReplay,
    setReplayPlaying,
    completedPaths,
    connectionSnapshots,
    perfectObservations,
    getGuideConstellations,
    getSeasonStats
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

  const hasCompletedPath = targetId && completedPaths[targetId]
  const isComplete = targetId ? isConstellationComplete(targetId) : false
  const canUndo = connectionSnapshots.length > 0 && !replayState.active
  const canReplay = isComplete && hasCompletedPath && !replayState.active
  const replayProgress = replayState.active
    ? Math.round(((replayState.step + 1) / replayState.path.length) * 100)
    : 0

  const guideIds = getGuideConstellations ? getGuideConstellations(4) : []
  const seasonStats = getSeasonStats ? getSeasonStats() : null
  const currentSeason = getCurrentSeason()
  const currentSeasonLabel = SEASONS[currentSeason]?.name || '春季'
  const currentSeasonIcon = SEASONS[currentSeason]?.icon || '🌸'

  const featuredConstellations = guideIds.length > 0
    ? guideIds.map(id => CONSTELLATIONS.find(c => c.id === id)).filter(Boolean)
    : CONSTELLATIONS.slice(0, 4)

  return (
    <div className="absolute left-0 right-0 top-0 p-4 z-20 pointer-events-none">
      {!currentTargetConstellation && !replayState.active ? (
        <div className="max-w-md mx-auto pointer-events-auto">
          <div className="glass-panel p-4 animate-float">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-xl font-display text-white">星座图鉴</h2>
                <p className="text-xs text-white/50 mt-0.5">
                  已发现 <span className="text-nebula-cyan font-mono">{discoveredConstellations.length}</span> / {CONSTELLATIONS.length}
                  {perfectObservations && Object.keys(perfectObservations).length > 0 && (
                    <span className="text-star-gold ml-2">
                      ★ {Object.keys(perfectObservations).length} 完美
                    </span>
                  )}
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

            {seasonStats && seasonStats[currentSeason] && (
              <div className={`mb-3 p-2.5 rounded-xl border ${
                SEASONS[currentSeason]?.borderColor || 'border-white/10'
              } ${SEASONS[currentSeason]?.bgColor || 'bg-space-700/30'}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{currentSeasonIcon}</span>
                    <span className={`text-xs ${SEASONS[currentSeason]?.textColor || 'text-white/60'}`}>
                      {currentSeasonLabel}进度
                    </span>
                    {guideIds.length > 0 && (
                      <span className="fs-9 px-1.5 py-0.5 rounded bg-nebula-cyan/15 text-nebula-cyan border border-nebula-cyan/20">
                        ✦ 推荐
                      </span>
                    )}
                  </div>
                  <span className={`fs-10 font-mono ${SEASONS[currentSeason]?.textColor || 'text-white/60'}`}>
                    {seasonStats[currentSeason]?.discovered || 0} / {seasonStats[currentSeason]?.constellations || 0}
                  </span>
                </div>
                <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${
                      SEASONS[currentSeason]?.color || 'from-nebula-cyan to-nebula-purple'
                    }`}
                    style={{ width: `${seasonStats[currentSeason]?.overallPercentage || 0}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="fs-9 text-white/40">
                    {seasonStats[currentSeason]?.overallPercentage || 0}%
                  </span>
                  <span className="fs-9 text-white/40">
                    完美 {seasonStats[currentSeason]?.perfectCount || 0}
                  </span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              {featuredConstellations.map((c, index) => {
                if (!c) return null
                const completed = isConstellationComplete(c.id)
                const isPerfect = perfectObservations?.[c.id]
                const isRecommended = guideIds.includes(c.id)
                return (
                  <button
                    key={c.id}
                    onClick={() => setTargetConstellation(c.id)}
                    className={`p-3 rounded-xl border transition-all text-left card-hover relative overflow-hidden ${
                      completed
                        ? isPerfect
                          ? 'border-star-gold/40 bg-star-gold/8'
                          : 'border-nebula-purple/60 bg-nebula-purple/10'
                        : isRecommended
                          ? 'border-nebula-cyan/40 bg-nebula-cyan/8 ring-1 ring-nebula-cyan/20'
                          : 'border-white/10 bg-space-700/40'
                    }`}
                  >
                    {isRecommended && !completed && (
                      <div className="absolute top-1.5 right-1.5">
                        <span className="inline-flex items-center gap-0.5 fs-9 px-1.5 py-0.5 rounded-full
                                         bg-nebula-cyan/20 text-nebula-cyan border border-nebula-cyan/30
                                         animate-pulse">
                          ✦ 推荐
                        </span>
                      </div>
                    )}
                    {index === 0 && !completed && (
                      <div className="absolute -top-0.5 -left-0.5 w-2 h-2 rounded-full bg-nebula-cyan animate-ping" />
                    )}
                    <div className="flex items-start justify-between pr-6">
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-display text-white">
                            {c.name}
                          </span>
                          {completed && (
                            <span className={isPerfect ? 'text-star-gold' : 'text-nebula-cyan'}>
                              {isPerfect ? '★' : '✓'}
                            </span>
                          )}
                        </div>
                        <div className="fs-10 text-white/40 mt-0.5">
                          {c.nameEn}
                        </div>
                        {!completed && (
                          <div className="fs-9 text-white/30 mt-1">
                            {c.stars.length} 星 · {c.season}季
                          </div>
                        )}
                        {completed && isPerfect && (
                          <div className="fs-9 text-star-gold/70 mt-1">
                            完美观测
                          </div>
                        )}
                      </div>
                      <span className={`fs-10 px-1.5 py-0.5 rounded flex-shrink-0 ${
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

            <div className="mt-2 flex gap-2">
              <button
                onClick={() => setActivePanel('seasons')}
                className="flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5
                         bg-space-700/40 border border-white/10 text-white/70
                         hover:bg-nebula-purple/20 hover:border-nebula-purple/30 hover:text-white"
              >
                <span>🗓️</span>
                <span>四季计划</span>
              </button>
              <button
                onClick={() => setActivePanel('calendar')}
                className="flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5
                         bg-space-700/40 border border-white/10 text-white/70
                         hover:bg-star-gold/20 hover:border-star-gold/30 hover:text-white"
              >
                <span>📅</span>
                <span>每日签到</span>
              </button>
            </div>
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
                  <span className={`fs-10 px-1.5 py-0.5 rounded ${
                    currentConstellation?.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                    currentConstellation?.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {DIFFICULTY_CONFIG[currentConstellation?.difficulty].label}
                  </span>
                  {isComplete && !replayState.active && (
                    <span className={`text-sm animate-pulse-slow ${
                      perfectObservations?.[targetId] ? 'text-star-gold' : 'text-nebula-cyan'
                    }`}>
                      {perfectObservations?.[targetId] ? '★ 完美完成' : '✓ 已完成'}
                    </span>
                  )}
                  {replayState.active && (
                    <span className="text-nebula-cyan text-xs px-2 py-0.5 rounded-full bg-nebula-cyan/20 animate-pulse">
                      ▶ 重播中
                    </span>
                  )}
                </div>
                <p className="fs-11 text-white/50 mt-0.5">
                  {currentConstellation?.description}
                </p>
              </div>
              <button
                onClick={() => {
                  if (replayState.active) stopReplay()
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

            {!replayState.active ? (
              <div className="mt-3">
                <div className="flex justify-between fs-11 mb-1.5">
                  <span className="text-white/50">
                    连接进度: {new Set(connectionPath).size} / {currentConstellation?.stars.length}
                  </span>
                  <span className="text-red-300/70">
                    失误: {mistakes}
                  </span>
                </div>
                <div className="h-2 bg-space-900/80 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      perfectObservations?.[targetId] || (mistakes === 0 && progress > 0)
                        ? 'bg-gradient-to-r from-star-gold to-nebula-orange'
                        : 'bg-gradient-to-r from-nebula-purple to-nebula-cyan'
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {mistakes === 0 && progress > 0 && !isComplete && (
                  <p className="fs-9 text-star-gold/60 mt-1.5 text-center">
                    ✦ 保持零失误，冲击完美观测！
                  </p>
                )}
              </div>
            ) : (
              <div className="mt-3">
                <div className="flex justify-between fs-11 mb-1.5">
                  <span className="text-nebula-cyan">
                    重播步骤: {replayState.step + 1} / {replayState.path.length}
                  </span>
                  <span className="text-white/50">
                    {replayProgress}%
                  </span>
                </div>
                <div className="h-2 bg-space-900/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-nebula-cyan to-star-gold rounded-full transition-all duration-300"
                    style={{ width: `${replayProgress}%` }}
                  />
                </div>
              </div>
            )}

            {!replayState.active ? (
              <div className="mt-3 flex gap-2">
                <button
                  onClick={undoLastStep}
                  className={`flex-1 text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-1 ${
                    canUndo
                      ? 'bg-space-700/60 border border-white/10 text-white/70 hover:bg-amber-500/20 hover:text-amber-200 hover:border-amber-500/30'
                      : 'bg-space-800/30 border border-white/5 text-white/20 cursor-not-allowed'
                  }`}
                  disabled={!canUndo}
                >
                  <span>↩</span>
                  <span>回退</span>
                </button>
                <button
                  onClick={clearConnectionPath}
                  className="flex-1 btn-secondary text-xs py-2"
                  disabled={connectionPath.length === 0}
                >
                  🔄 重连
                </button>
                {canReplay && (
                  <button
                    onClick={() => startReplay(targetId)}
                    className="flex-1 text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-1
                             bg-nebula-cyan/10 border border-nebula-cyan/30 text-nebula-cyan
                             hover:bg-nebula-cyan/20"
                  >
                    <span>▶</span>
                    <span>重播</span>
                  </button>
                )}
                <button
                  onClick={() => setActivePanel('tasks')}
                  className="flex-1 btn-secondary text-xs py-2"
                >
                  📋 切换
                </button>
              </div>
            ) : (
              <div className="mt-3 space-y-2">
                <div className="flex gap-2">
                  <button
                    onClick={resetReplay}
                    className="flex-1 text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-1
                             bg-space-700/60 border border-white/10 text-white/70
                             hover:bg-space-600/60"
                  >
                    <span>⏮</span>
                    <span>重新开始</span>
                  </button>
                  <button
                    onClick={() => setReplayPlaying(!replayState.playing)}
                    className={`flex-1 text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      replayState.playing
                        ? 'bg-amber-500/20 border border-amber-500/30 text-amber-200'
                        : 'bg-nebula-cyan/20 border border-nebula-cyan/30 text-nebula-cyan'
                    }`}
                  >
                    <span>{replayState.playing ? '⏸' : '▶'}</span>
                    <span>{replayState.playing ? '暂停' : '播放'}</span>
                  </button>
                  <button
                    onClick={advanceReplayStep}
                    className="flex-1 text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-1
                             bg-space-700/60 border border-white/10 text-white/70
                             hover:bg-space-600/60"
                    disabled={replayState.step >= replayState.path.length - 1}
                  >
                    <span>⏭</span>
                    <span>下一步</span>
                  </button>
                </div>
                <button
                  onClick={stopReplay}
                  className="w-full text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-1
                           bg-red-500/10 border border-red-500/20 text-red-300/80
                           hover:bg-red-500/20 hover:text-red-200"
                >
                  <span>⏹</span>
                  <span>退出重播</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
