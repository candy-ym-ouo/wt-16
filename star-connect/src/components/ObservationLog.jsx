import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { getAchievementById } from '../data/achievements'
import { SEASONS, SEASON_PHASES, SEASON_REWARDS, SEASON_ACHIEVEMENTS } from '../data/seasonPlan'
import { formatDate } from '../utils/math'

export default function ObservationLog() {
  const { observationLogs, setActivePanel, clearLogs, seasonRewardsClaimed } = useGameStore()

  const renderLogEntry = (log, index) => {
    if (log.type === 'discovery' || log.type === 'reobservation') {
      const c = getConstellationById(log.constellationId)
      if (!c) return null
      const isDiscovery = log.type === 'discovery'
      return (
        <div
          key={index}
          className={`p-4 rounded-xl border transition-all ${
            isDiscovery
              ? 'border-nebula-purple/30 bg-nebula-purple/5'
              : 'border-white/10 bg-space-700/20'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                  isDiscovery
                    ? 'bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white'
                    : 'bg-space-600/50 text-white/70'
                }`}
              >
                {isDiscovery ? '✨' : '🔭'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-white text-sm">
                    {c.name}
                  </span>
                  {log.perfect && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-star-gold/20 text-star-gold">
                      完美
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-white/40 mt-0.5">
                  {c.nameEn} · {isDiscovery ? '首次发现' : '再次观测'}
                </div>
                <div className="text-[10px] text-white/30 mt-1 font-mono">
                  {formatDate(log.timestamp)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'achievement') {
      const a = getAchievementById(log.achievementId)
      const seasonAchievement = SEASON_ACHIEVEMENTS?.find(a => a.id === log.achievementId)
      const achievement = a || seasonAchievement
      if (!achievement) return null
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-star-gold/20 bg-star-gold/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                          flex items-center justify-center text-lg">
              {achievement.icon}
            </div>
            <div>
              <div className="font-display text-star-gold text-sm">
                成就解锁 · {achievement.name}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {achievement.description}
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'season_reward') {
      const s = SEASONS[log.seasonId]
      const phase = SEASON_PHASES[log.phaseId]
      if (!s || !phase) return null
      return (
        <div
          key={index}
          className={`p-4 rounded-xl border ${s.borderColor} ${s.bgColor}`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg
                            bg-gradient-to-br ${s.color}`}>
              {s.icon}
            </div>
            <div>
              <div className={`font-display text-sm ${s.textColor}`}>
                季节奖励 · {log.rewardName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {s.name} · {phase.name}阶段完成
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">观测日志</h2>
              <p className="text-xs text-white/50 mt-1">
                记录每一次与星空的相遇
              </p>
            </div>
            <div className="flex items-center gap-2">
              {observationLogs.length > 0 && (
                <button
                  onClick={() => {
                    if (confirm('确定要清空所有观测日志吗？')) clearLogs()
                  }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20
                           text-red-300 hover:bg-red-500/20 transition-all"
                >
                  清空
                </button>
              )}
              <button
                onClick={() => setActivePanel(null)}
                className="icon-btn"
                aria-label="关闭"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2 text-center">
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-nebula-purple">
                {observationLogs.filter(l => l.type === 'discovery').length}
              </div>
              <div className="text-[10px] text-white/50">首次发现</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-nebula-cyan">
                {observationLogs.filter(l => l.type === 'reobservation').length}
              </div>
              <div className="text-[10px] text-white/50">再次观测</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-star-gold">
                {observationLogs.filter(l => l.type === 'achievement').length}
              </div>
              <div className="text-[10px] text-white/50">成就解锁</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-pink-300">
                {seasonRewardsClaimed.length}
              </div>
              <div className="text-[10px] text-white/50">季节奖励</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {observationLogs.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="text-5xl mb-4 opacity-30">📖</div>
              <h3 className="text-white/70 font-display mb-2">暂无观测记录</h3>
              <p className="text-xs text-white/40 max-w-xs leading-relaxed">
                开始探索星座，你的每一次发现都将记录在这里
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {observationLogs.map((log, i) => renderLogEntry(log, i))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
