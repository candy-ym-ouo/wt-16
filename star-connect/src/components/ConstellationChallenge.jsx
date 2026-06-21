import { useState, useEffect, useRef } from 'react'
import { useGameStore } from '../stores/gameStore'
import { CHALLENGE_DIFFICULTIES, CHALLENGE_SEASON_TIERS, CHALLENGE_SEASON_REWARDS } from '../data/constellationChallenge'
import { getCurrentSeason, SEASONS } from '../data/seasonPlan'
import { getConstellationById } from '../data/constellations'

function ChallengeHome({ onStart }) {
  const { getChallengeStats, getChallengeRemainingAttempts, constellationChallenge } = useGameStore()
  const stats = getChallengeStats()
  const currentSeason = getCurrentSeason()
  const season = SEASONS[currentSeason]
  const seasonScore = stats.seasonScore
  const currentTier = stats.currentTier
  const nextTier = stats.nextTier

  return (
    <div className="space-y-4">
      <div className={`p-4 rounded-2xl border ${season.borderColor} ${season.bgColor}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{currentTier ? currentTier.icon : '🌑'}</span>
            <div>
              <h3 className={`font-display text-lg ${season.textColor}`}>
                {season.name}挑战赛
              </h3>
              <p className="text-[11px] text-white/50">
                {currentTier ? `${currentTier.name}段位` : '尚未参赛'} · 累计 {seasonScore} 分
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/60">
              {nextTier ? `${currentTier?.name || '无'} → ${nextTier.name}` : '已达最高段位'}
            </span>
            <span className={`font-mono ${season.textColor}`}>
              {seasonScore} / {nextTier?.minScore || seasonScore}
            </span>
          </div>
          <div className="h-2.5 bg-space-900/60 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${season.color} rounded-full transition-all duration-700`}
              style={{ width: `${nextTier ? Math.min((seasonScore / nextTier.minScore) * 100, 100) : 100}%` }}
            />
          </div>
        </div>
        <div className="mt-3 flex gap-1.5 overflow-x-auto scrollbar-thin pb-1">
          {Object.entries(CHALLENGE_SEASON_TIERS).map(([tierId, tier]) => {
            const reached = seasonScore >= tier.minScore
            return (
              <div
                key={tierId}
                className={`flex-shrink-0 px-2.5 py-1.5 rounded-lg text-center border ${
                  reached ? `bg-gradient-to-r ${tier.color} border-white/20` : 'bg-space-800/40 border-white/5 opacity-40'
                }`}
              >
                <div className="text-lg">{tier.icon}</div>
                <div className={`text-[9px] ${reached ? 'text-white' : 'text-white/40'}`}>
                  {tier.name}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="space-y-3">
        {Object.entries(CHALLENGE_DIFFICULTIES).map(([diffId, diff]) => {
          const remaining = getChallengeRemainingAttempts(diffId)
          const bestScore = stats.bestScores[diffId] || 0
          const isLocked = remaining <= 0

          return (
            <div
              key={diffId}
              className={`p-4 rounded-2xl border transition-all ${
                isLocked
                  ? 'border-white/5 bg-space-800/30 opacity-60'
                  : `border-white/10 bg-space-700/20`
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl
                                  bg-gradient-to-br ${diff.color} shadow-lg`}>
                    {diff.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-white text-sm">{diff.name}</h4>
                    <p className="text-[10px] text-white/40 mt-0.5">
                      {diff.constellationCount}关 · {diff.timeLimit}秒 · 允许{diff.allowedMistakes}次失误
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/50">最高分</div>
                  <div className={`font-mono font-bold bg-gradient-to-r ${diff.color} bg-clip-text text-transparent`}>
                    {bestScore}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-white/40">剩余次数</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: diff.dailyAttempts }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < remaining ? `bg-gradient-to-r ${diff.color}` : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] text-white/40">
                    基础分 {diff.baseScore} · 连胜+{diff.streakBonus}
                  </div>
                </div>
                <button
                  onClick={() => !isLocked && onStart(diffId)}
                  disabled={isLocked}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                    isLocked
                      ? 'bg-white/5 text-white/30 cursor-not-allowed'
                      : `bg-gradient-to-r ${diff.color} text-white hover:shadow-lg`
                  }`}
                >
                  {isLocked ? '已用完' : '挑战'}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {stats.totalChallenges > 0 && (
        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <h4 className="text-xs text-white/60 font-display mb-3">📊 挑战统计</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-xl font-bold text-white">{stats.totalChallenges}</div>
              <div className="text-[10px] text-white/40">总挑战次数</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-star-gold">{stats.totalScore}</div>
              <div className="text-[10px] text-white/40">累计得分</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-nebula-cyan">{stats.perfectStages}</div>
              <div className="text-[10px] text-white/40">完美通关</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ChallengeInPlay({ onResult }) {
  const { constellationChallenge } = useGameStore()
  const challenge = constellationChallenge.currentChallenge
  const config = CHALLENGE_DIFFICULTIES[challenge?.difficultyId]
  const stage = challenge?.route?.[challenge?.stageIndex]
  const constellation = stage ? getConstellationById(stage.constellationId) : null
  const [timeLeft, setTimeLeft] = useState(config?.timeLimit || 60)
  const [lastStageIdx, setLastStageIdx] = useState(challenge?.stageIndex ?? -1)

  useEffect(() => {
    if (!challenge?.active || !config) return
    if (challenge.stageIndex !== lastStageIdx) {
      setTimeLeft(config.timeLimit)
      setLastStageIdx(challenge.stageIndex)
    }
  }, [challenge?.active, challenge?.stageIndex, config?.timeLimit, lastStageIdx])

  useEffect(() => {
    if (!challenge?.active) return
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return prev
        const next = prev - 0.1
        if (next <= 0) {
          queueMicrotask(() => {
            const state = useGameStore.getState()
            if (state.constellationChallenge.currentChallenge?.active) {
              state.failChallengeStage()
            }
          })
          return 0
        }
        return next
      })
    }, 100)
    return () => clearInterval(interval)
  }, [challenge?.active, challenge?.stageIndex])

  useEffect(() => {
    if (!challenge?.active) {
      const records = useGameStore.getState().constellationChallenge.records
      if (records.length > 0) {
        onResult(records[0])
      }
    }
  }, [challenge?.active])

  if (!challenge || !config) return null

  const progressPct = ((challenge.stageIndex) / challenge.route.length) * 100
  const timePct = (timeLeft / config.timeLimit) * 100
  const isUrgent = timeLeft < 10

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${config.color} text-white text-xs font-bold`}>
          {config.icon} {config.name}
        </div>
        <div className="flex items-center gap-2">
          <div className={`text-lg font-mono font-bold ${isUrgent ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            {Math.ceil(Math.max(0, timeLeft))}s
          </div>
        </div>
      </div>

      <div className="w-full h-1.5 rounded-full bg-space-700/50 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            isUrgent ? 'bg-red-500' : `bg-gradient-to-r ${config.color}`
          }`}
          style={{ width: `${Math.max(0, timePct)}%` }}
        />
      </div>

      <div className="w-full h-1 rounded-full bg-space-700/50 overflow-hidden mb-1">
        <div
          className={`h-full bg-gradient-to-r ${config.color} transition-all duration-300`}
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-white/40">
        <span>关卡进度</span>
        <span>{challenge.stageIndex + 1} / {challenge.route.length}</span>
      </div>

      <div className={`p-5 rounded-2xl border ${config.borderColor} ${config.bgColor} text-center`}>
        <div className="text-4xl mb-3">⭐</div>
        <h3 className="font-display text-white text-lg">
          {constellation?.name || '???'}
        </h3>
        <p className="text-[11px] text-white/50 mt-1">
          {constellation?.description?.slice(0, 40) || ''}...
        </p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <div className="text-center">
            <div className={`text-sm font-bold ${challenge.mistakesInStage === 0 ? 'text-green-400' : 'text-red-400'}`}>
              {challenge.mistakesInStage} / {stage?.allowedMistakes || config.allowedMistakes}
            </div>
            <div className="text-[9px] text-white/40">失误</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-white">
              {challenge.results.filter(r => r.perfect).length}
            </div>
            <div className="text-[9px] text-white/40">完美</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-star-gold">
              ×{challenge.results.filter(r => r.perfect).length + 1}
            </div>
            <div className="text-[9px] text-white/40">连胜</div>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-space-700/30 border border-white/5">
        <p className="text-xs text-white/50 text-center">
          在夜空中完成 <span className="text-white font-medium">{constellation?.name}</span> 的星座连线
        </p>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 grid grid-cols-2 gap-2">
          {challenge.route.map((s, idx) => {
            const c = getConstellationById(s.constellationId)
            const result = challenge.results[idx]
            return (
              <div
                key={idx}
                className={`p-2 rounded-lg text-center border text-[10px] ${
                  idx < challenge.stageIndex
                    ? result?.perfect
                      ? 'border-green-500/30 bg-green-500/10 text-green-300'
                      : 'border-white/10 bg-white/5 text-white/50'
                    : idx === challenge.stageIndex
                    ? `${config.borderColor} ${config.bgColor} ${config.textColor} font-bold`
                    : 'border-white/5 bg-space-800/30 text-white/30'
                }`}
              >
                {c?.name?.slice(0, 3) || '???'}
                {result?.perfect && ' ✓'}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ChallengeResult({ result, onHome }) {
  const { getChallengeStats } = useGameStore()
  const stats = getChallengeStats()
  const config = CHALLENGE_DIFFICULTIES[result?.difficultyId]

  if (!result) return null

  const allPerfect = result.perfectStages === result.totalStages
  const accuracy = result.totalStages > 0
    ? Math.round((result.completedStages / result.totalStages) * 100)
    : 0

  return (
    <div className="space-y-4">
      <div className={`p-6 rounded-3xl bg-gradient-to-br ${config.color}/20 border border-white/10 text-center`}>
        <div className="text-6xl mb-3">{allPerfect ? '🏆' : accuracy >= 80 ? '🌟' : accuracy >= 50 ? '👍' : '💪'}</div>
        <div className={`text-2xl font-display font-bold bg-gradient-to-r ${config.color} bg-clip-text text-transparent mb-2`}>
          {allPerfect ? '完美通关！' : accuracy >= 80 ? '非常优秀！' : accuracy >= 50 ? '表现不错！' : '继续加油！'}
        </div>
        <div className="text-white/60 text-sm">
          {config.name} · 通关 {result.completedStages}/{result.totalStages} 关
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-star-gold/10 border border-star-gold/20 text-center">
          <div className="text-3xl mb-1">⭐</div>
          <div className="text-2xl font-bold text-star-gold">{result.score}</div>
          <div className="text-[11px] text-white/50">得分</div>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-to-br from-nebula-purple/10 border border-nebula-purple/20 text-center">
          <div className="text-3xl mb-1">💫</div>
          <div className="text-2xl font-bold text-nebula-purple">{Math.floor(result.score / 10)}</div>
          <div className="text-[11px] text-white/50">星尘奖励</div>
        </div>
      </div>

      {result.results && result.results.length > 0 && (
        <div className="p-4 rounded-2xl bg-space-700/30 border border-white/10">
          <div className="text-xs text-white/50 mb-3 font-medium">📝 各关详情</div>
          <div className="space-y-2">
            {result.results.map((r, idx) => {
              const c = getConstellationById(r.constellationId)
              return (
                <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${
                      r.completed ? (r.perfect ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300') : 'bg-red-500/20 text-red-300'
                    }`}>
                      {r.completed ? (r.perfect ? '✓' : '~') : '✗'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-white/70">{c?.name || '???'}</div>
                      <div className="text-[10px] text-white/40">
                        {r.completed ? `用时 ${r.timeUsed}s · 失误 ${r.mistakes}` : '未完成'}
                        {r.perfect && ' · 完美!'}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <button
        onClick={onHome}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-cyan
                 text-white font-bold text-sm hover:shadow-lg transition-all active:scale-[0.98]"
      >
        返回挑战赛
      </button>
    </div>
  )
}

function LeaderboardTab() {
  const { getChallengeLeaderboard } = useGameStore()
  const [activeDiff, setActiveDiff] = useState('novice')

  const leaderboard = getChallengeLeaderboard(activeDiff)
  const config = CHALLENGE_DIFFICULTIES[activeDiff]

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {Object.entries(CHALLENGE_DIFFICULTIES).map(([id, diff]) => (
          <button
            key={id}
            onClick={() => setActiveDiff(id)}
            className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all ${
              activeDiff === id
                ? `bg-gradient-to-r ${diff.color} text-white`
                : 'bg-white/5 text-white/50 hover:bg-white/10'
            }`}
          >
            {diff.icon} {diff.name}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {leaderboard.slice(0, 10).map((entry) => (
          <div
            key={entry.rank}
            className={`p-3 rounded-xl border transition-all ${
              entry.isPlayer
                ? `${config.borderColor} ${config.bgColor} ring-1 ring-white/10`
                : 'border-white/5 bg-space-800/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                entry.rank === 1 ? 'bg-yellow-500/20 text-yellow-300' :
                entry.rank === 2 ? 'bg-gray-300/20 text-gray-300' :
                entry.rank === 3 ? 'bg-amber-600/20 text-amber-300' :
                'bg-white/5 text-white/50'
              }`}>
                {entry.rank <= 3 ? ['🥇','🥈','🥉'][entry.rank - 1] : entry.rank}
              </div>
              <div className="text-lg">{entry.avatar}</div>
              <div className="flex-1">
                <div className={`text-xs font-medium ${entry.isPlayer ? config.textColor : 'text-white/70'}`}>
                  {entry.name} {entry.isPlayer && '(你)'}
                </div>
              </div>
              <div className={`font-mono text-sm font-bold ${entry.isPlayer ? config.textColor : 'text-white/50'}`}>
                {entry.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RewardsTab() {
  const { getChallengeStats, claimChallengeSeasonReward } = useGameStore()
  const stats = getChallengeStats()
  const currentSeason = getCurrentSeason()
  const seasonRewards = CHALLENGE_SEASON_REWARDS[currentSeason] || {}

  return (
    <div className="space-y-4">
      {Object.entries(seasonRewards).map(([tierId, reward]) => {
        const tier = CHALLENGE_SEASON_TIERS[tierId]
        const reached = stats.seasonScore >= tier.minScore
        const claimed = stats.seasonRewardsClaimed.includes(reward.id)

        return (
          <div
            key={tierId}
            className={`p-4 rounded-2xl border transition-all ${
              claimed
                ? 'bg-green-500/5 border-green-500/20'
                : reached
                ? `bg-gradient-to-r ${tier.color}/10 border-white/10 ring-1 ring-star-gold/10`
                : 'bg-space-800/30 border-white/5 opacity-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${
                reached ? '' : 'grayscale'
              } ${claimed ? 'bg-green-500/10' : `bg-gradient-to-br ${tier.color}/20`}`}>
                {reward.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${claimed ? 'text-green-300' : reached ? 'text-white' : 'text-white/40'}`}>
                    {reward.name}
                  </span>
                  <span className="text-[9px] text-white/30">{tier.icon} {tier.name}</span>
                </div>
                <p className="text-[10px] text-white/40 mt-0.5">{reward.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-star-gold/70">💫 +{reward.stardust} 星尘</span>
                  <span className="text-[10px] text-white/30">· 需要 {tier.minScore} 分</span>
                </div>
              </div>
              <div>
                {claimed ? (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/20 text-green-300">
                    已领取
                  </span>
                ) : reached ? (
                  <button
                    onClick={() => claimChallengeSeasonReward(reward.id)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold
                               bg-gradient-to-r ${tier.color} text-white
                               hover:shadow-lg active:scale-95 transition-all`}
                  >
                    领取
                  </button>
                ) : (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/30">
                    未达成
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function RecordsTab() {
  const { getChallengeStats } = useGameStore()
  const stats = getChallengeStats()

  if (stats.records.length === 0) {
    return (
      <div className="h-40 flex flex-col items-center justify-center text-center">
        <div className="text-4xl mb-3 opacity-30">🏅</div>
        <h4 className="text-white/60 font-display mb-1">暂无挑战记录</h4>
        <p className="text-xs text-white/40 max-w-xs leading-relaxed">
          参加挑战赛，你的成绩将记录在这里
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {stats.records.map((record) => {
        const config = CHALLENGE_DIFFICULTIES[record.difficultyId]
        const date = new Date(record.timestamp)
        return (
          <div
            key={record.id}
            className={`p-3 rounded-xl border border-white/5 bg-space-800/30`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg
                              bg-gradient-to-br ${config.color}`}>
                {config.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-white">{config.name}</span>
                  <span className="text-[9px] text-white/30">
                    {date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <div className="text-[10px] text-white/40 mt-0.5">
                  通关 {record.completedStages}/{record.totalStages}
                  {record.perfectStages > 0 && ` · 完美 ${record.perfectStages}`}
                </div>
              </div>
              <div className={`font-mono text-sm font-bold bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                {record.score}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function ConstellationChallenge() {
  const { setActivePanel, startChallenge, abandonChallenge, constellationChallenge } = useGameStore()
  const [view, setView] = useState('home')
  const [challengeResult, setChallengeResult] = useState(null)
  const prevChallengeRef = useRef(null)

  const challenge = constellationChallenge.currentChallenge

  useEffect(() => {
    const prev = prevChallengeRef.current
    const curr = challenge

    if (prev?.active && !curr && view === 'playing') {
      const records = useGameStore.getState().constellationChallenge.records
      if (records.length > 0) {
        setChallengeResult(records[0])
        setView('result')
      }
    }
    prevChallengeRef.current = curr
  }, [challenge, view])

  const handleStart = (difficultyId) => {
    const result = startChallenge(difficultyId)
    if (result?.success) {
      setView('playing')
      setChallengeResult(null)
    }
  }

  const handleResult = (result) => {
    if (result) {
      setChallengeResult(result)
      setView('result')
    }
  }

  const handleAbandon = () => {
    if (confirm('确定要放弃本次挑战吗？已完成的关卡将保存成绩。')) {
      prevChallengeRef.current = null
      abandonChallenge()
      setView('home')
      setChallengeResult(null)
    }
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[90vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white flex items-center gap-2">
                <span>⚔️</span>
                <span>星座挑战赛</span>
              </h2>
              <p className="text-xs text-white/50 mt-1">
                {view === 'home' && '限时连线挑战，争夺赛季段位'}
                {view === 'playing' && '挑战进行中...'}
                {view === 'result' && '挑战结束'}
                {view === 'leaderboard' && '分难度排行榜'}
                {view === 'rewards' && '赛季段位奖励'}
                {view === 'records' && '历史成绩记录'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {view === 'playing' && challenge && (
                <div className={`px-2.5 py-1 rounded-lg bg-gradient-to-r ${CHALLENGE_DIFFICULTIES[challenge.difficultyId].color}
                              text-white text-[10px] font-bold`}>
                  第 {challenge.stageIndex + 1} 关
                </div>
              )}
              <button
                onClick={() => {
                  if (view === 'playing') {
                    handleAbandon()
                  } else {
                    setActivePanel(null)
                  }
                }}
                className="icon-btn"
                aria-label="关闭"
              >
                ✕
              </button>
            </div>
          </div>

          {view !== 'playing' && view !== 'result' && (
            <div className="mt-4 flex gap-2">
              {[
                { id: 'home', label: '挑战', icon: '⚔️' },
                { id: 'leaderboard', label: '排行', icon: '🏅' },
                { id: 'rewards', label: '奖励', icon: '🎁' },
                { id: 'records', label: '记录', icon: '📋' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setView(tab.id)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${
                    view === tab.id
                      ? 'bg-white/10 text-white border border-white/10'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {view === 'home' && <ChallengeHome onStart={handleStart} />}
          {view === 'playing' && challenge && (
            <ChallengeInPlay onResult={handleResult} />
          )}
          {view === 'result' && challengeResult && (
            <ChallengeResult result={challengeResult} onHome={() => { setView('home'); setChallengeResult(null) }} />
          )}
          {view === 'leaderboard' && <LeaderboardTab />}
          {view === 'rewards' && <RewardsTab />}
          {view === 'records' && <RecordsTab />}
        </div>
      </div>
    </div>
  )
}
