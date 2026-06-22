import { useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS } from '../data/constellations'
import { DIFFICULTY_CONFIG } from '../data/constants'
import { COMMISSION_DIFFICULTY } from '../data/dailyCommissions'
import { useI18n } from '../i18n/useI18n'

export default function TasksPanel() {
  const { tc, t } = useI18n()
  const {
    discoveredConstellations,
    currentTargetConstellation,
    setTargetConstellation,
    setActivePanel,
    isConstellationComplete,
    openAtlasList,
    openAtlasDetail,
    getOrRefreshDailyCommissions,
    getDailyCommissionProgressAll,
    claimDailyCommission,
    getDailyCommissionStats
  } = useGameStore()

  const [dailyTasks, setDailyTasks] = useState([])
  const [dailyStats, setDailyStats] = useState(null)

  useEffect(() => {
    getOrRefreshDailyCommissions()
    setDailyTasks(getDailyCommissionProgressAll())
    setDailyStats(getDailyCommissionStats())
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDailyTasks(getDailyCommissionProgressAll())
      setDailyStats(getDailyCommissionStats())
    }, 1000)
    return () => clearInterval(interval)
  }, [getDailyCommissionProgressAll, getDailyCommissionStats])

  const handleClaim = (taskId) => {
    const result = claimDailyCommission(taskId)
    if (result.success) {
      setDailyTasks(getDailyCommissionProgressAll())
      setDailyStats(getDailyCommissionStats())
    }
  }

  const getDifficultyStyle = (difficulty) => {
    switch (difficulty) {
      case COMMISSION_DIFFICULTY.EASY:
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case COMMISSION_DIFFICULTY.NORMAL:
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case COMMISSION_DIFFICULTY.HARD:
        return 'bg-red-500/20 text-red-300 border-red-500/30'
      default:
        return 'bg-space-600/50 text-white/50 border-white/10'
    }
  }

  const getDifficultyLabel = (difficulty) => {
    switch (difficulty) {
      case COMMISSION_DIFFICULTY.EASY:
        return '简单'
      case COMMISSION_DIFFICULTY.NORMAL:
        return '普通'
      case COMMISSION_DIFFICULTY.HARD:
        return '困难'
      default:
        return ''
    }
  }

  const handleViewInAtlas = (constellationId, e) => {
    e.stopPropagation()
    openAtlasDetail(constellationId)
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">星座探索</h2>
              <p className="text-xs text-white/50 mt-1">
                点击星座开始连线，点亮夜空的奥秘
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

          <div className="mt-4 grid grid-cols-4 gap-2 text-center">
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-nebula-cyan">
                {discoveredConstellations.length}
              </div>
              <div className="fs-10 text-white/50">已发现</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-white/80">
                {CONSTELLATIONS.length}
              </div>
              <div className="fs-10 text-white/50">总星座</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-star-gold">
                {CONSTELLATIONS.filter(c => c.season === '春').length}
              </div>
              <div className="fs-10 text-white/50">春·冬</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-nebula-orange">
                {CONSTELLATIONS.filter(c => c.season === '夏' || c.season === '秋').length}
              </div>
              <div className="fs-10 text-white/50">夏·秋</div>
            </div>
          </div>

          <div className="mt-3">
            <button
              onClick={openAtlasList}
              className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2"
            >
              <span>📚</span>
              <span>查看完整星空图鉴</span>
              <span className="text-nebula-cyan">→</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">📋</span>
                <h3 className="font-display text-white/90 text-sm">每日观测委托</h3>
              </div>
              {dailyStats && (
                <div className="flex items-center gap-3 fs-10">
                  <span className="text-white/40">
                    完成 <span className="text-nebula-cyan font-mono">{dailyStats.completedToday}/{dailyStats.tasksToday}</span>
                  </span>
                  {dailyStats.streakDays > 0 && (
                    <span className="text-star-gold">
                      🔥 {dailyStats.streakDays}天
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-2">
              {dailyTasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-3 rounded-xl border transition-all ${
                    task.completed
                      ? 'border-nebula-purple/40 bg-nebula-purple/8'
                      : 'border-white/10 bg-space-700/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${
                        task.completed
                          ? 'bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white'
                          : 'bg-space-600/50 text-white/70'
                      }`}>
                        {task.completed ? '✓' : task.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-white text-sm">
                            {task.name}
                          </span>
                          <span className={`fs-9 px-1.5 py-0.5 rounded border ${getDifficultyStyle(task.difficulty)}`}>
                            {getDifficultyLabel(task.difficulty)}
                          </span>
                        </div>
                        <div className="fs-11 text-white/50 mt-0.5">
                          {task.description}
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between fs-10 mb-1">
                            <span className="text-white/40">进度</span>
                            <span className="text-white/60 font-mono">
                              {task.current} / {task.target}
                            </span>
                          </div>
                          <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                task.completed
                                  ? 'bg-gradient-to-r from-nebula-purple to-nebula-cyan'
                                  : 'bg-white/30'
                              }`}
                              style={{ width: `${task.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1">
                        <span className="text-star-gold text-sm">💫</span>
                        <span className="text-star-gold text-xs font-medium">{task.reward}</span>
                      </div>
                      {task.completed && !task.claimed && (
                        <button
                          onClick={() => handleClaim(task.id)}
                          className="px-3 py-1 rounded-lg fs-11 font-medium
                                   bg-gradient-to-r from-star-gold/80 to-nebula-orange/80 text-white
                                   hover:shadow-lg hover:shadow-star-gold/20 active:scale-95
                                   transition-all animate-pulse"
                        >
                          领取
                        </button>
                      )}
                      {task.claimed && (
                        <span className="fs-10 text-green-400/80">✓ 已领取</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {dailyStats && dailyStats.allCompleted && (
              <div className="p-3 rounded-xl border border-star-gold/30 bg-star-gold/5 text-center">
                <div className="text-2xl mb-1">🎉</div>
                <p className="text-xs text-star-gold font-medium">今日委托全部完成！</p>
                <p className="fs-10 text-white/40 mt-0.5">
                  已获得 {dailyStats.claimedReward} / {dailyStats.totalReward} 星尘
                </p>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 pt-2">
            <h3 className="font-display text-white/90 text-sm mb-3">全部星座</h3>
          </div>

          {CONSTELLATIONS.map((c) => {
            const completed = isConstellationComplete(c.id)
            const isActive = currentTargetConstellation === c.id
            const locName = tc('constellation', c.id, 'name') || c.name
            const locDesc = tc('constellation', c.id, 'description') || c.description
            const locSeason = tc('constellation', c.id, 'season') || c.season
            const locDifficulty = t(`difficulty.${c.difficulty}`) || DIFFICULTY_CONFIG[c.difficulty]?.label
            const locBrightestName = tc('constellation', c.id, 'brightnessHints_brightestStar_name')
            const locBrightestMag = tc('constellation', c.id, 'brightnessHints_brightestStar_mag')
            const locBestHours = tc('constellation', c.id, 'observationWindow_bestHours')
            const hasBrightest = locBrightestName && !locBrightestName.startsWith('constellation.')
            const hasBestHours = locBestHours && !locBestHours.startsWith('constellation.')
            return (
              <button
                key={c.id}
                onClick={() => {
                  setTargetConstellation(c.id)
                  setActivePanel(null)
                }}
                className={`w-full p-4 rounded-2xl border text-left transition-all card-hover ${
                  isActive
                    ? 'border-nebula-cyan/60 bg-nebula-cyan/10 ring-2 ring-nebula-cyan/30'
                    : completed
                    ? 'border-nebula-purple/50 bg-nebula-purple/8'
                    : 'border-white/10 bg-space-700/30'
                }`}
              >
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-display text-white">
                          {locName}
                        </h3>
                        {completed && (
                          <span className="text-star-gold animate-pulse-slow">★</span>
                        )}
                        <span className={`fs-10 px-1.5 py-0.5 rounded ${
                          c.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                          c.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {locDifficulty}
                        </span>
                        <span className="fs-10 px-1.5 py-0.5 rounded bg-space-600/50 text-white/50">
                          {locSeason}
                        </span>
                      </div>
                      <div className="fs-11 text-white/40 mt-0.5">
                        {c.nameEn}
                      </div>
                      <p className="text-xs text-white/60 mt-2 leading-relaxed">
                        {locDesc}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="fs-10 px-1.5 py-0.5 rounded bg-space-600/50 text-white/50">
                          ✦ {c.stars.length}
                        </span>
                        {hasBrightest && (
                          <span className="fs-10 px-1.5 py-0.5 rounded bg-nebula-orange/10 text-nebula-orange/80 border border-nebula-orange/20">
                            ✨ {locBrightestName} ({locBrightestMag})
                          </span>
                        )}
                        {hasBestHours && (
                          <span className="fs-10 px-1.5 py-0.5 rounded bg-nebula-cyan/10 text-nebula-cyan/80 border border-nebula-cyan/20">
                            🌙 {locBestHours}
                          </span>
                        )}
                        <span className="fs-10 px-1.5 py-0.5 rounded bg-star-gold/10 text-star-gold/80 border border-star-gold/20">
                          📖 4
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => handleViewInAtlas(c.id, e)}
                      className="ml-2 px-2 py-1 rounded-lg bg-space-600/50 text-white/50 fs-10
                               hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                               flex-shrink-0"
                    >
                      📚
                    </button>
                  </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
