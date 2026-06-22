import { useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { STAMINA_CONFIG, TOLERANCE_CONFIG, EXPEDITION_REWARD_TIERS } from '../data/nightExpedition'
import { formatDate } from '../utils/math'

export default function NightExpedition() {
  const {
    setActivePanel,
    nightExpedition,
    syncExpeditionStamina,
    startExpedition,
    abandonExpedition,
    getExpeditionProgress,
    connectionPath,
    mistakes,
    currentTargetConstellation,
    setTargetConstellation
  } = useGameStore()

  const [viewMode, setViewMode] = useState('overview')
  const [showResult, setShowResult] = useState(null)

  const ne = nightExpedition
  const expeditionProgress = getExpeditionProgress()
  const run = ne.currentRun

  useEffect(() => {
    syncExpeditionStamina()
    const timer = setInterval(syncExpeditionStamina, 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (ne.currentRun === null && ne.history.length > 0 && showResult === null) {
      const latestHistory = ne.history[0]
      if (latestHistory) {
        setShowResult(latestHistory)
      }
    }
  }, [ne.currentRun, ne.history.length, showResult])

  const getNextRecoveryTime = () => {
    if (ne.stamina >= STAMINA_CONFIG.maxStamina) return null
    const now = Date.now()
    const elapsed = now - ne.lastStaminaUpdate
    const remaining = STAMINA_CONFIG.recoveryIntervalMs - (elapsed % STAMINA_CONFIG.recoveryIntervalMs)
    return Math.ceil(remaining / 60000)
  }

  const renderStaminaBar = () => {
    const nextRecovery = getNextRecoveryTime()
    return (
      <div className="p-3 rounded-xl border border-indigo-500/30 bg-indigo-500/10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-base">⚡</span>
            <span className="text-xs font-display text-indigo-200">远征体力</span>
          </div>
          <span className="text-sm font-mono text-indigo-100">
            {ne.stamina} / {STAMINA_CONFIG.maxStamina}
          </span>
        </div>
        <div className="h-2.5 bg-space-900/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-400 rounded-full transition-all duration-500"
            style={{ width: `${(ne.stamina / STAMINA_CONFIG.maxStamina) * 100}%` }}
          />
        </div>
        {nextRecovery !== null && (
          <div className="fs-10 text-indigo-300/60 mt-1.5 text-right">
            下次恢复: {nextRecovery} 分钟
          </div>
        )}
      </div>
    )
  }

  const renderOverview = () => (
    <div className="space-y-4">
      <div className="p-4 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-500/10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🌙</span>
          <div>
            <h3 className="font-display text-lg text-violet-200">夜间远征</h3>
            <p className="fs-11 text-white/50">连续闯关，挑战星空极限</p>
          </div>
        </div>
        <p className="text-xs text-white/60 leading-relaxed">
          在夜间远征中，你将依次挑战随机排列的星座连线关卡。每关有限定的容错次数，
          失误过多将结束远征。体力会随时间恢复，合理规划远征节奏！
        </p>
      </div>

      {renderStaminaBar()}

      <button
        onClick={() => {
          const success = startExpedition()
          if (success) {
            setViewMode('expedition')
            setShowResult(null)
          }
        }}
        disabled={ne.stamina < STAMINA_CONFIG.stageCost}
        className={`w-full py-3.5 rounded-xl text-sm font-display font-medium transition-all
                   ${ne.stamina >= STAMINA_CONFIG.stageCost
                     ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 active:scale-[0.98]'
                     : 'bg-space-700/40 text-white/30 cursor-not-allowed'
                   }`}
      >
        {ne.stamina >= STAMINA_CONFIG.stageCost ? (
          <span className="flex items-center justify-center gap-2">
            <span>🚀</span>
            <span>开始远征</span>
            <span className="fs-10 opacity-70">（消耗 {STAMINA_CONFIG.stageCost} 体力）</span>
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <span>⏳</span>
            <span>体力不足</span>
          </span>
        )}
      </button>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 rounded-xl border border-white/10 bg-space-700/20 text-center">
          <div className="text-lg font-mono text-violet-300">{expeditionProgress.totalCompleted}</div>
          <div className="fs-10 text-white/40 mt-0.5">远征次数</div>
        </div>
        <div className="p-3 rounded-xl border border-white/10 bg-space-700/20 text-center">
          <div className="text-lg font-mono text-indigo-300">{expeditionProgress.highestStagesCleared}</div>
          <div className="fs-10 text-white/40 mt-0.5">最高关卡</div>
        </div>
        <div className="p-3 rounded-xl border border-white/10 bg-space-700/20 text-center">
          <div className="text-lg font-mono text-amber-300">{expeditionProgress.totalPerfectStages}</div>
          <div className="fs-10 text-white/40 mt-0.5">完美通关</div>
        </div>
        <div className="p-3 rounded-xl border border-white/10 bg-space-700/20 text-center">
          <div className="text-lg font-mono text-star-gold">{expeditionProgress.totalStardustEarned}</div>
          <div className="fs-10 text-white/40 mt-0.5">星尘总计</div>
        </div>
      </div>

      <div className="p-3 rounded-xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">🎯</span>
          <span className="text-xs font-display text-white/80">容错规则</span>
        </div>
        <div className="space-y-1.5">
          {Object.entries(TOLERANCE_CONFIG).map(([diff, config]) => (
            <div key={diff} className="flex items-center justify-between fs-11">
              <span className="text-white/50">难度 {diff}</span>
              <span className="text-white/70">
                允许 {config.allowedMistakes} 次失误 · {config.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 rounded-xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">🏅</span>
          <span className="text-xs font-display text-white/80">里程碑奖励</span>
        </div>
        <div className="space-y-2">
          {EXPEDITION_REWARD_TIERS.map((tier) => (
            <div key={tier.id} className="flex items-center gap-2">
              <span className="text-base">{tier.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="fs-11 text-white/80">{tier.name}</span>
                  <span className="fs-10 text-white/40">通过 {tier.stagesCleared} 关</span>
                </div>
                <div className="fs-10 text-white/40">{tier.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderExpedition = () => {
    if (!run || !run.active) {
      return (
        <div className="h-40 flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-3 opacity-30">🌙</div>
          <h4 className="text-white/60 font-display mb-1">未在远征中</h4>
          <p className="text-xs text-white/40">返回概览开始新的远征</p>
        </div>
      )
    }

    const currentStage = run.route[run.stageIndex]
    const mistakesLeft = currentStage.allowedMistakes - run.mistakesInStage
    const stageProgress = run.stageIndex + 1
    const totalStages = run.route.length

    return (
      <div className="space-y-4">
        <div className="p-4 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-500/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌙</span>
              <span className="font-display text-sm text-violet-200">
                第 {stageProgress} / {totalStages} 关
              </span>
            </div>
            <span className="fs-10 px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300">
              远征进行中
            </span>
          </div>

          <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full transition-all duration-500"
              style={{ width: `${(stageProgress / totalStages) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-space-900/40 text-center">
              <div className="text-sm font-mono text-violet-200">{run.clearedStages.length}</div>
              <div className="fs-9 text-white/40">已通过</div>
            </div>
            <div className="p-2 rounded-lg bg-space-900/40 text-center">
              <div className={`text-sm font-mono ${mistakesLeft > 0 ? 'text-amber-300' : 'text-red-400'}`}>
                {mistakesLeft}
              </div>
              <div className="fs-9 text-white/40">容错剩余</div>
            </div>
            <div className="p-2 rounded-lg bg-space-900/40 text-center">
              <div className="text-sm font-mono text-star-gold">{run.perfectCount}</div>
              <div className="fs-9 text-white/40">完美通关</div>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl border border-white/10 bg-space-700/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">⭐</span>
            <span className="text-xs text-white/80">当前关卡</span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm
                            ${currentStage.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                              currentStage.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                              'bg-red-500/20 text-red-300'}`}>
              {currentStage.difficulty}×
            </div>
            <div className="flex-1">
              <p className="text-sm text-white">{currentStage.constellationName}</p>
              <p className="fs-10 text-white/40">
                容错 {currentStage.allowedMistakes} 次 · {TOLERANCE_CONFIG[currentStage.difficulty].label}
              </p>
            </div>
            {run.mistakesInStage > 0 && (
              <span className="fs-10 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                已失误 {run.mistakesInStage}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 flex-wrap">
          {run.route.map((stage, idx) => {
            const cleared = idx < run.stageIndex
            const isCurrent = idx === run.stageIndex
            const isFuture = idx > run.stageIndex
            return (
              <div
                key={idx}
                className={`w-7 h-7 rounded-lg flex items-center justify-center fs-10 font-mono border transition-all ${
                  cleared
                    ? 'bg-violet-500/20 border-violet-500/40 text-violet-200'
                    : isCurrent
                    ? 'bg-indigo-500/30 border-indigo-400/50 text-indigo-200 ring-1 ring-indigo-400/30'
                    : 'bg-space-800/40 border-white/5 text-white/20'
                }`}
              >
                {cleared ? '✓' : idx + 1}
              </div>
            )
          })}
        </div>

        <button
          onClick={() => {
            abandonExpedition()
            setViewMode('overview')
          }}
          className="w-full py-2.5 rounded-xl bg-red-500/10 border border-red-500/30
                   text-red-300 text-xs font-medium
                   hover:bg-red-500/20 transition-all"
        >
          🏴 放弃远征
        </button>
      </div>
    )
  }

  const renderResult = () => {
    if (!showResult) {
      return (
        <div className="h-40 flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-3 opacity-30">📋</div>
          <h4 className="text-white/60 font-display mb-1">暂无远征记录</h4>
          <p className="text-xs text-white/40">完成一次远征后查看结算</p>
        </div>
      )
    }

    const r = showResult
    return (
      <div className="space-y-4">
        <div className="p-4 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 text-center">
          <div className="text-4xl mb-2">
            {r.stagesCleared === r.totalStages ? '🏆' : r.stagesCleared >= 4 ? '🥇' : r.stagesCleared >= 2 ? '🥈' : '🌟'}
          </div>
          <h3 className="font-display text-lg text-white mb-1">
            {r.stagesCleared === r.totalStages ? '完美远征' : '远征结束'}
          </h3>
          <p className="text-xs text-white/50">
            通过 {r.stagesCleared} / {r.totalStages} 关
            {r.staminaOut && ' · 体力耗尽'}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 rounded-xl border border-white/10 bg-space-700/20 text-center">
            <div className="text-lg font-mono text-star-gold">{r.rewards.stardust}</div>
            <div className="fs-9 text-white/40 mt-0.5">星尘</div>
          </div>
          <div className="p-3 rounded-xl border border-white/10 bg-space-700/20 text-center">
            <div className="text-lg font-mono text-indigo-300">{r.rewards.xp}</div>
            <div className="fs-9 text-white/40 mt-0.5">经验</div>
          </div>
          <div className="p-3 rounded-xl border border-white/10 bg-space-700/20 text-center">
            <div className="text-lg font-mono text-violet-300">{r.perfectCount}</div>
            <div className="fs-9 text-white/40 mt-0.5">完美</div>
          </div>
        </div>

        {r.rewards.tierRewards.length > 0 && (
          <div className="p-3 rounded-xl border border-star-gold/30 bg-star-gold/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">🏅</span>
              <span className="text-xs font-display text-star-gold">里程碑达成</span>
            </div>
            <div className="space-y-1.5">
              {r.rewards.tierRewards.map((tier) => (
                <div key={tier.id} className="flex items-center gap-2">
                  <span className="text-base">{tier.icon}</span>
                  <span className="fs-11 text-white/80">{tier.name}</span>
                  {tier.bonus.stardust > 0 && (
                    <span className="fs-10 text-star-gold ml-auto">+{tier.bonus.stardust} 星尘</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {r.rewards.bonusStardust > 0 && (
          <div className="flex items-center gap-2 p-3 rounded-xl border border-amber-500/20 bg-amber-500/5">
            <span className="text-sm">✨</span>
            <span className="text-xs text-amber-200">低失误奖励</span>
            <span className="text-xs text-star-gold ml-auto font-mono">+{r.rewards.bonusStardust}</span>
          </div>
        )}

        <div className="p-3 rounded-xl border border-white/10 bg-space-700/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">📊</span>
            <span className="text-xs font-display text-white/80">关卡明细</span>
          </div>
          <div className="space-y-1.5">
            {r.clearedStages.map((stage, idx) => (
              <div key={idx} className="flex items-center gap-2 fs-11">
                <span className={`w-5 h-5 rounded flex items-center justify-center fs-9
                                ${stage.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                                  stage.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                                  'bg-red-500/20 text-red-300'}`}>
                  {stage.stage}
                </span>
                <span className="flex-1 text-white/70">{stage.constellationName}</span>
                <span className="text-white/40">{stage.mistakes} 误</span>
                {stage.perfect && <span className="text-violet-300">★</span>}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            setShowResult(null)
            setViewMode('overview')
          }}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500
                   text-white text-xs font-medium hover:shadow-lg transition-all"
        >
          返回远征
        </button>
      </div>
    )
  }

  const renderHistory = () => {
    if (ne.history.length === 0) {
      return (
        <div className="h-40 flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-3 opacity-30">🗓️</div>
          <h4 className="text-white/60 font-display mb-1">暂无远征记录</h4>
          <p className="text-xs text-white/40">开始你的第一次夜间远征吧</p>
        </div>
      )
    }

    return (
      <div className="space-y-2">
        {ne.history.map((entry, index) => (
          <div
            key={index}
            className="p-3 rounded-xl border border-white/10 bg-space-700/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl
                            bg-gradient-to-br from-violet-500/20 to-indigo-500/20">
                {entry.stagesCleared === entry.totalStages ? '🏆' :
                 entry.stagesCleared >= 4 ? '🥇' :
                 entry.stagesCleared >= 2 ? '🥈' : '🌙'}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-display text-white">
                    通过 {entry.stagesCleared} / {entry.totalStages} 关
                  </span>
                  {entry.perfectCount > 0 && (
                    <span className="fs-10 text-violet-300">★ {entry.perfectCount}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="fs-11 text-star-gold">✦ {entry.rewards.stardust}</span>
                  <span className="fs-11 text-white/40">
                    {formatDate(entry.endTime)}
                  </span>
                </div>
              </div>
            </div>

            {entry.rewards.tierRewards.length > 0 && (
              <div className="flex items-center gap-1 mt-2 pt-2 border-t border-white/5">
                {entry.rewards.tierRewards.map((tier) => (
                  <span key={tier.id} className="text-sm">{tier.icon}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  const isInExpedition = run?.active

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">夜间远征</h2>
              <p className="text-xs text-white/50 mt-1">
                连续闯关，挑战容错极限
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

          <div className="mt-4 flex gap-2">
            {[
              { id: 'overview', label: '概览', icon: '🌙' },
              { id: 'expedition', label: '远征', icon: '🚀' },
              { id: 'result', label: '结算', icon: '🏆' },
              { id: 'history', label: '记录', icon: '🗓️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setViewMode(tab.id)}
                className={`flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${
                  viewMode === tab.id
                    ? 'bg-white/10 text-white border border-white/10'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {viewMode === 'overview' && renderOverview()}
          {viewMode === 'expedition' && renderExpedition()}
          {viewMode === 'result' && renderResult()}
          {viewMode === 'history' && renderHistory()}
        </div>
      </div>
    </div>
  )
}
