import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { getAchievementById } from '../data/achievements'
import { SEASONS, SEASON_PHASES, SEASON_REWARDS, SEASON_ACHIEVEMENTS } from '../data/seasonPlan'
import { ROUTE_TYPES } from '../data/starRoute'
import { EVENT_TYPES } from '../data/nightSkyEvents'
import { formatDate } from '../utils/math'

export default function ObservationLog() {
  const { observationLogs, setActivePanel, clearLogs, seasonRewardsClaimed, openAtlasList, openAtlasDetail } = useGameStore()

  const handleViewInAtlas = (constellationId) => {
    openAtlasDetail(constellationId)
  }

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
            <div className="flex items-start gap-3 flex-1">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${
                  isDiscovery
                    ? 'bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white'
                    : 'bg-space-600/50 text-white/70'
                }`}
              >
                {isDiscovery ? '✨' : '🔭'}
              </div>
              <div className="flex-1 min-w-0">
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
            <button
              onClick={() => handleViewInAtlas(log.constellationId)}
              className="ml-2 px-2 py-1 rounded-lg bg-space-600/50 text-white/50 text-[10px]
                       hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                       flex-shrink-0"
              title="在图鉴中查看"
            >
              📚
            </button>
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

    if (log.type === 'quiz_complete') {
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-nebula-cyan/20 bg-nebula-cyan/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nebula-purple to-nebula-cyan
                          flex items-center justify-center text-lg">
              📚
            </div>
            <div>
              <div className="font-display text-nebula-cyan text-sm">
                星座百科 · 完成答题
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                答对 {log.correct}/{log.total} 题 · 获得 +{log.points} 积分
                {log.isPerfect && <span className="text-star-gold ml-1">💯全对!</span>}
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'quiz_perfect') {
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-star-gold/20 bg-star-gold/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                          flex items-center justify-center text-lg">
              💯
            </div>
            <div>
              <div className="font-display text-star-gold text-sm">
                完美通关 · {log.questions}题全对！
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                额外奖励 +{log.bonusPoints} 积分
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'quiz_exchange') {
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-pink-400/20 bg-pink-400/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-nebula-purple
                          flex items-center justify-center text-lg">
              🎁
            </div>
            <div>
              <div className="font-display text-pink-300 text-sm">
                积分兑换 · {log.rewardName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                消耗 {log.cost} 积分
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'route_start') {
      const routeType = ROUTE_TYPES[log.routeType]
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400
                          flex items-center justify-center text-lg">
              {routeType?.icon || '🗺️'}
            </div>
            <div>
              <div className="font-display text-emerald-300 text-sm">
                启程 · {log.routeName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                共 {log.totalSteps} 个探索目标
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'route_complete') {
      const routeType = ROUTE_TYPES[log.routeType]
      return (
        <div
          key={index}
          className={`p-4 rounded-xl border transition-all ${
            log.perfect
              ? 'border-star-gold/30 bg-star-gold/5'
              : 'border-nebula-purple/30 bg-nebula-purple/5'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
              log.perfect
                ? 'bg-gradient-to-br from-star-gold to-nebula-orange'
                : 'bg-gradient-to-br from-nebula-purple to-nebula-cyan'
            }`}>
              {log.perfect ? '🏆' : (routeType?.icon || '✨')}
            </div>
            <div>
              <div className={`font-display text-sm ${
                log.perfect ? 'text-star-gold' : 'text-nebula-cyan'
              }`}>
                完成路线 · {log.routeName}
                {log.perfect && <span className="ml-1">💎 全完美!</span>}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                完成 {log.completedSteps} 步
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'route_abandon') {
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-white/10 bg-space-700/20"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-space-600/50
                          flex items-center justify-center text-lg">
              ⤫
            </div>
            <div>
              <div className="font-display text-white/60 text-sm">
                放弃路线 · {log.routeName}
              </div>
              <div className="text-[11px] text-white/40 mt-0.5">
                已完成 {log.completedSteps}/{log.totalSteps} 步
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'event_start') {
      const getEventColor = (eventType) => {
        switch (eventType) {
          case EVENT_TYPES.METEOR_SHOWER:
            return { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-300', gradient: 'from-blue-500 to-purple-500' }
          case EVENT_TYPES.SPECIAL_ASTRO:
            return { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-300', gradient: 'from-amber-500 to-orange-500' }
          case EVENT_TYPES.LIMITED_TASK:
            return { border: 'border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-300', gradient: 'from-green-500 to-teal-500' }
          default:
            return { border: 'border-white/10', bg: 'bg-space-700/20', text: 'text-white/60', gradient: 'from-gray-500 to-slate-500' }
        }
      }

      const colors = getEventColor(log.eventType)

      return (
        <div
          key={index}
          className={`p-4 rounded-xl border ${colors.border} ${colors.bg}`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${colors.gradient}`}>
              {log.icon || '🌟'}
            </div>
            <div>
              <div className={`font-display ${colors.text} text-sm`}>
                🌌 事件开始 · {log.eventName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {log.message || '新的夜空事件开始了！'}
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'event_end') {
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-white/10 bg-space-700/20"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-space-600/50 flex items-center justify-center text-lg">
              {log.icon || '🌙'}
            </div>
            <div>
              <div className="font-display text-white/60 text-sm">
                事件结束 · {log.eventName}
              </div>
              <div className="text-[11px] text-white/40 mt-0.5">
                {log.message || '该事件已结束'}
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'event_reward') {
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br from-yellow-500 to-orange-500">
              🎁
            </div>
            <div>
              <div className="font-display text-yellow-300 text-sm">
                🎉 事件奖励 · {log.eventName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {log.message || '获得事件奖励'}
                {log.stardust && <span className="text-yellow-300"> 💫 {log.stardust}</span>}
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'event_participate') {
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/10"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br from-purple-500 to-pink-500">
              {log.icon || '✨'}
            </div>
            <div>
              <div className="font-display text-purple-300 text-sm">
                参与事件 · {log.eventName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {log.message || '成功参与了夜空事件'}
                {log.progress && (
                  <span className="text-purple-300"> 进度 {log.progress}</span>
                )}
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

          <div className="mt-4 grid grid-cols-5 gap-2 text-center">
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
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-blue-400">
                {observationLogs.filter(l => l.type?.startsWith('event_')).length}
              </div>
              <div className="text-[10px] text-white/50">夜空事件</div>
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
              <span>浏览星空图鉴</span>
              <span className="text-nebula-cyan">→</span>
            </button>
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
