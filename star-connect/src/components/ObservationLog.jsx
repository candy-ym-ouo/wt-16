import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { getAchievementById } from '../data/achievements'
import { SEASONS, SEASON_PHASES, SEASON_REWARDS, SEASON_ACHIEVEMENTS } from '../data/seasonPlan'
import { ROUTE_TYPES } from '../data/starRoute'
import { EVENT_TYPES } from '../data/nightSkyEvents'
import { formatDate } from '../utils/math'
import { useI18n } from '../i18n/useI18n'

export default function ObservationLog() {
  const { observationLogs, setActivePanel, clearLogs, seasonRewardsClaimed, openAtlasList, openAtlasDetail } = useGameStore()
  const { t, tc } = useI18n()

  const handleViewInAtlas = (constellationId) => {
    openAtlasDetail(constellationId)
  }

  const getLocalizedConstellationName = (constellationId) => {
    const c = getConstellationById(constellationId)
    if (!c) return constellationId
    return tc('constellation', constellationId, 'name') || c.name
  }

  const getLocalizedConstellationNameEn = (constellationId) => {
    const c = getConstellationById(constellationId)
    return c?.nameEn || ''
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
                    {getLocalizedConstellationName(log.constellationId)}
                  </span>
                  {log.perfect && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-star-gold/20 text-star-gold">
                      {t('log.perfect')}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-white/40 mt-0.5">
                  {getLocalizedConstellationNameEn(log.constellationId)} · {isDiscovery ? t('log.firstDiscovery') : t('log.reobservation')}
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
              title={t('detail.backToAtlas')}
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
      const achName = tc('achievement', achievement.id, 'name') || achievement.name
      const achDesc = tc('achievement', achievement.id, 'description') || achievement.description
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
                {t('log.achievementUnlocked')} · {achName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {achDesc}
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
      const seasonName = tc('season', log.seasonId, 'name') || s.name
      const phaseName = tc('seasonPhase', log.phaseId, 'name') || phase.name
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
                {t('log.seasonReward')} · {log.rewardName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {t('log.stageComplete', { name: seasonName, phase: phaseName })}
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
                {t('log.quizComplete')}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {t('log.correctCount', { correct: log.correct, total: log.total })} · {t('log.earnedPoints', { points: log.points })}
                {log.isPerfect && <span className="text-star-gold ml-1">{t('log.allCorrect')}</span>}
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
                {t('log.quizPerfect')} · {t('log.questionsAllCorrect', { count: log.questions })}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {t('log.bonusPoints', { points: log.bonusPoints })}
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
                {t('log.quizExchange')} · {log.rewardName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {t('log.costPoints', { cost: log.cost })}
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
                {t('log.routeStart')} · {log.routeName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {t('log.totalSteps', { count: log.totalSteps })}
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
                {t('log.routeComplete')} · {log.routeName}
                {log.perfect && <span className="ml-1">💎 {t('log.perfect')}!</span>}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {t('log.completedSteps', { count: log.completedSteps })}
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
                {t('log.routeAbandon')} · {log.routeName}
              </div>
              <div className="text-[11px] text-white/40 mt-0.5">
                {t('log.abandonedSteps', { completed: log.completedSteps, total: log.totalSteps })}
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
                {t('log.eventStart')} · {log.eventName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {log.message || t('log.newEventStarted')}
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
                {t('log.eventEnd')} · {log.eventName}
              </div>
              <div className="text-[11px] text-white/40 mt-0.5">
                {log.message || t('log.eventEnded')}
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
                {t('log.eventReward')} · {log.eventName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {log.message || t('log.gotEventReward')}
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
                {t('log.eventParticipate')} · {log.eventName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {log.message || t('log.participated')}
                {log.progress && (
                  <span className="text-purple-300"> {log.progress}</span>
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

    if (log.type === 'daily_commission_complete') {
      const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
          case 'easy':
            return { border: 'border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-300', gradient: 'from-green-500 to-emerald-500' }
          case 'normal':
            return { border: 'border-yellow-500/30', bg: 'bg-yellow-500/10', text: 'text-yellow-300', gradient: 'from-yellow-500 to-amber-500' }
          case 'hard':
            return { border: 'border-red-500/30', bg: 'bg-red-500/10', text: 'text-red-300', gradient: 'from-red-500 to-rose-500' }
          default:
            return { border: 'border-white/10', bg: 'bg-space-700/20', text: 'text-white/60', gradient: 'from-gray-500 to-slate-500' }
        }
      }
      const colors = getDifficultyColor(log.difficulty)
      return (
        <div
          key={index}
          className={`p-4 rounded-xl border ${colors.border} ${colors.bg}`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${colors.gradient}`}>
              📋
            </div>
            <div>
              <div className={`font-display ${colors.text} text-sm`}>
                委托完成 · {log.commissionName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                完成每日观测委托，可领取 💫 {log.reward} 星尘
              </div>
              <div className="text-[10px] text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'daily_commission_claim') {
      return (
        <div
          key={index}
          className="p-4 rounded-xl border border-star-gold/30 bg-star-gold/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br from-star-gold to-nebula-orange">
              🎁
            </div>
            <div>
              <div className="font-display text-star-gold text-sm">
                委托奖励领取 · {log.commissionName}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                获得 💫 {log.reward} 星尘
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
              <h2 className="text-xl font-display text-white">{t('log.title')}</h2>
              <p className="text-xs text-white/50 mt-1">
                {t('log.subtitle')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {observationLogs.length > 0 && (
                <button
                  onClick={() => {
                    if (confirm(t('log.clearConfirm'))) clearLogs()
                  }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20
                           text-red-300 hover:bg-red-500/20 transition-all"
                >
                  {t('log.clearAll')}
                </button>
              )}
              <button
                onClick={() => setActivePanel(null)}
                className="icon-btn"
                aria-label={t('settings.close')}
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
              <div className="text-[10px] text-white/50">{t('log.firstDiscovery')}</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-nebula-cyan">
                {observationLogs.filter(l => l.type === 'reobservation').length}
              </div>
              <div className="text-[10px] text-white/50">{t('log.reobservation')}</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-star-gold">
                {observationLogs.filter(l => l.type === 'achievement').length}
              </div>
              <div className="text-[10px] text-white/50">{t('log.achievementUnlocked')}</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-pink-300">
                {seasonRewardsClaimed.length}
              </div>
              <div className="text-[10px] text-white/50">{t('log.seasonReward')}</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-blue-400">
                {observationLogs.filter(l => l.type?.startsWith('event_')).length}
              </div>
              <div className="text-[10px] text-white/50">{t('log.nightEvents')}</div>
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
              <span>{t('log.browseAtlas')}</span>
              <span className="text-nebula-cyan">→</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {observationLogs.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="text-5xl mb-4 opacity-30">📖</div>
              <h3 className="text-white/70 font-display mb-2">{t('log.emptyTitle')}</h3>
              <p className="text-xs text-white/40 max-w-xs leading-relaxed">
                {t('log.emptyDesc')}
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
