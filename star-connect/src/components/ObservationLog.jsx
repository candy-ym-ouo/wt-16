import { useState, useMemo } from 'react'
import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { getAchievementById } from '../data/achievements'
import { SEASONS, SEASON_PHASES, SEASON_REWARDS, SEASON_ACHIEVEMENTS } from '../data/seasonPlan'
import { ROUTE_TYPES } from '../data/starRoute'
import { EVENT_TYPES } from '../data/nightSkyEvents'
import { formatDate } from '../utils/math'
import { useI18n } from '../i18n/useI18n'
import {
  LOG_TAG_CATEGORIES,
  TIME_RANGES,
  getLogTags,
  getAllTags,
  getTagById,
  getCategoryByTagId
} from '../data/logTags'

export default function ObservationLog() {
  const {
    observationLogs,
    setActivePanel,
    clearLogs,
    seasonRewardsClaimed,
    openAtlasList,
    openAtlasDetail,
    unlockedAchievements,
    getProgress,
    getSeasonStats,
    filterLogs,
    getLogSummary,
    addTagToLog,
    removeTagFromLog,
    customTags
  } = useGameStore()
  const { t, tc } = useI18n()

  const [viewMode, setViewMode] = useState('logs')
  const [selectedLogIndex, setSelectedLogIndex] = useState(null)
  const [showTagSelector, setShowTagSelector] = useState(null)

  const [filters, setFilters] = useState({
    type: 'all',
    tags: [],
    timeRange: 'all',
    searchText: '',
    perfectOnly: false
  })

  const progress = getProgress()
  const seasonStats = getSeasonStats()

  const filteredLogs = useMemo(() => {
    return filterLogs(filters)
  }, [observationLogs, filters, filterLogs])

  const logSummary = useMemo(() => {
    return getLogSummary(filteredLogs)
  }, [filteredLogs, getLogSummary])

  const hasActiveFilters = filters.type !== 'all' ||
    filters.tags.length > 0 ||
    filters.timeRange !== 'all' ||
    filters.searchText.trim() !== '' ||
    filters.perfectOnly

  const logTypes = [
    { id: 'all', name: t('log.allTypes'), icon: '📋' },
    { id: 'discovery', name: t('log.firstDiscovery'), icon: '✨' },
    { id: 'reobservation', name: t('log.reobservation'), icon: '🔭' },
    { id: 'achievement', name: t('log.achievementUnlocked'), icon: '🏆' },
    { id: 'season_reward', name: t('log.seasonReward'), icon: '🎁' },
    { id: 'quiz_complete', name: t('log.quizComplete'), icon: '📚' },
    { id: 'route_complete', name: t('log.routeComplete'), icon: '🗺️' },
    { id: 'expedition_complete', name: '夜间远征', icon: '🌙' },
    { id: 'event_reward', name: t('log.eventReward'), icon: '🌟' },
  ]

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

  const toggleTagFilter = (tagId) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tagId)
        ? prev.tags.filter(t => t !== tagId)
        : [...prev.tags, tagId]
    }))
  }

  const clearAllFilters = () => {
    setFilters({
      type: 'all',
      tags: [],
      timeRange: 'all',
      searchText: '',
      perfectOnly: false
    })
  }

  const handleAddTagToLog = (logIndex, tagId) => {
    addTagToLog(logIndex, tagId)
    setShowTagSelector(null)
  }

  const handleRemoveTagFromLog = (logIndex, tagId) => {
    removeTagFromLog(logIndex, tagId)
  }

  const renderLogTags = (log, index) => {
    const tags = getLogTags(log)
    if (tags.length === 0) return null

    return (
      <div className="flex flex-wrap gap-1 mt-2">
        {tags.slice(0, 5).map(tagId => {
          const tag = getTagById(tagId)
          if (!tag) return null
          const category = getCategoryByTagId(tagId)
          return (
            <span
              key={tagId}
              className={`fs-9 px-1.5 py-0.5 rounded-full flex items-center gap-0.5
                         bg-gradient-to-r ${category?.color || 'from-gray-500 to-slate-400'}
                         text-white/80 cursor-pointer hover:opacity-80 transition-opacity`}
              onClick={(e) => {
                e.stopPropagation()
                toggleTagFilter(tagId)
              }}
              title={`${t('log.filterByTag')}: ${tag.name}`}
            >
              <span>{tag.icon}</span>
              <span>{tag.name}</span>
            </span>
          )
        })}
        {tags.length > 5 && (
          <span className="fs-9 px-1.5 py-0.5 rounded-full bg-white/10 text-white/50">
            +{tags.length - 5}
          </span>
        )}
      </div>
    )
  }

  const renderLogEntry = (log, originalIndex, displayIndex) => {
    if (log.type === 'discovery' || log.type === 'reobservation') {
      const c = getConstellationById(log.constellationId)
      if (!c) return null
      const isDiscovery = log.type === 'discovery'
      return (
        <div
          key={displayIndex}
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
                    <span className="fs-10 px-1.5 py-0.5 rounded-full bg-star-gold/20 text-star-gold">
                      {t('log.perfect')}
                    </span>
                  )}
                </div>
                <div className="fs-11 text-white/40 mt-0.5">
                  {getLocalizedConstellationNameEn(log.constellationId)} · {isDiscovery ? t('log.firstDiscovery') : t('log.reobservation')}
                </div>
                <div className="fs-10 text-white/30 mt-1 font-mono">
                  {formatDate(log.timestamp)}
                </div>
                {renderLogTags(log, originalIndex)}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowTagSelector(showTagSelector === originalIndex ? null : originalIndex)
                }}
                className="px-2 py-1 rounded-lg bg-space-600/50 text-white/50 fs-10
                         hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                         flex-shrink-0"
                title={t('log.addTag')}
              >
                🏷️
              </button>
              <button
                onClick={() => handleViewInAtlas(log.constellationId)}
                className="px-2 py-1 rounded-lg bg-space-600/50 text-white/50 fs-10
                         hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                         flex-shrink-0"
                title={t('detail.backToAtlas')}
              >
                📚
              </button>
            </div>
          </div>
          {showTagSelector === originalIndex && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="fs-10 text-white/50 mb-2">{t('log.addTag')}:</div>
              <div className="flex flex-wrap gap-1">
                {getAllTags().map(tag => {
                  const logTags = getLogTags(log)
                  const isSelected = logTags.includes(tag.id)
                  return (
                    <button
                      key={tag.id}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (isSelected) {
                          handleRemoveTagFromLog(originalIndex, tag.id)
                        } else {
                          handleAddTagToLog(originalIndex, tag.id)
                        }
                      }}
                      className={`fs-10 px-2 py-1 rounded-full flex items-center gap-1
                                 transition-all ${
                        isSelected
                          ? `bg-gradient-to-r ${tag.color} text-white`
                          : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <span>{tag.icon}</span>
                      <span>{tag.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}
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
          key={displayIndex}
          className="p-4 rounded-xl border border-star-gold/20 bg-star-gold/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                          flex items-center justify-center text-lg">
              {achievement.icon}
            </div>
            <div className="flex-1">
              <div className="font-display text-star-gold text-sm">
                {t('log.achievementUnlocked')} · {achName}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                {achDesc}
              </div>
              <div className="fs-10 text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
              {renderLogTags(log, originalIndex)}
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
          key={displayIndex}
          className={`p-4 rounded-xl border ${s.borderColor} ${s.bgColor}`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg
                            bg-gradient-to-br ${s.color}`}>
              {s.icon}
            </div>
            <div className="flex-1">
              <div className={`font-display text-sm ${s.textColor}`}>
                {t('log.seasonReward')} · {log.rewardName}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                {t('log.stageComplete', { name: seasonName, phase: phaseName })}
              </div>
              <div className="fs-10 text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
              {renderLogTags(log, originalIndex)}
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'quiz_complete') {
      return (
        <div
          key={displayIndex}
          className="p-4 rounded-xl border border-nebula-cyan/20 bg-nebula-cyan/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nebula-purple to-nebula-cyan
                          flex items-center justify-center text-lg">
              📚
            </div>
            <div className="flex-1">
              <div className="font-display text-nebula-cyan text-sm">
                {t('log.quizComplete')}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                {t('log.correctCount', { correct: log.correct, total: log.total })} · {t('log.earnedPoints', { points: log.points })}
                {log.isPerfect && <span className="text-star-gold ml-1">{t('log.allCorrect')}</span>}
              </div>
              <div className="fs-10 text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
              {renderLogTags(log, originalIndex)}
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'quiz_perfect') {
      return (
        <div
          key={displayIndex}
          className="p-4 rounded-xl border border-star-gold/20 bg-star-gold/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                          flex items-center justify-center text-lg">
              💯
            </div>
            <div className="flex-1">
              <div className="font-display text-star-gold text-sm">
                {t('log.quizPerfect')} · {t('log.questionsAllCorrect', { count: log.questions })}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                {t('log.bonusPoints', { points: log.bonusPoints })}
              </div>
              <div className="fs-10 text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
              {renderLogTags(log, originalIndex)}
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'quiz_exchange') {
      return (
        <div
          key={displayIndex}
          className="p-4 rounded-xl border border-pink-400/20 bg-pink-400/5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-nebula-purple
                          flex items-center justify-center text-lg">
              🎁
            </div>
            <div className="flex-1">
              <div className="font-display text-pink-300 text-sm">
                {t('log.quizExchange')} · {log.rewardName}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                {t('log.costPoints', { cost: log.cost })}
              </div>
              <div className="fs-10 text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
              {renderLogTags(log, originalIndex)}
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'route_complete') {
      const routeType = ROUTE_TYPES[log.routeType]
      return (
        <div
          key={displayIndex}
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
            <div className="flex-1">
              <div className={`font-display text-sm ${
                log.perfect ? 'text-star-gold' : 'text-nebula-cyan'
              }`}>
                {t('log.routeComplete')} · {log.routeName}
                {log.perfect && <span className="ml-1">💎 {t('log.perfect')}!</span>}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                {t('log.completedSteps', { count: log.completedSteps })}
              </div>
              <div className="fs-10 text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
              {renderLogTags(log, originalIndex)}
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'event_reward') {
      return (
        <div
          key={displayIndex}
          className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br from-yellow-500 to-orange-500">
              🎁
            </div>
            <div className="flex-1">
              <div className="font-display text-yellow-300 text-sm">
                {t('log.eventReward')} · {log.eventName}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                {log.message || t('log.gotEventReward')}
                {log.stardust && <span className="text-yellow-300"> 💫 {log.stardust}</span>}
              </div>
              <div className="fs-10 text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
              {renderLogTags(log, originalIndex)}
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
          key={displayIndex}
          className={`p-4 rounded-xl border ${colors.border} ${colors.bg}`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${colors.gradient}`}>
              📋
            </div>
            <div className="flex-1">
              <div className={`font-display ${colors.text} text-sm`}>
                委托完成 · {log.commissionName}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                完成每日观测委托，可领取 💫 {log.reward} 星尘
              </div>
              <div className="fs-10 text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
              {renderLogTags(log, originalIndex)}
            </div>
          </div>
        </div>
      )
    }

    if (log.type === 'expedition_complete') {
      return (
        <div
          key={displayIndex}
          className={`p-4 rounded-xl border transition-all ${
            log.perfectCount > 0
              ? 'border-star-gold/30 bg-star-gold/5'
              : 'border-cyan-500/30 bg-cyan-500/10'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
              log.perfectCount > 0
                ? 'bg-gradient-to-br from-star-gold to-nebula-orange'
                : 'bg-gradient-to-br from-cyan-500 to-blue-500'
            }`}>
              🌙
            </div>
            <div className="flex-1">
              <div className={`font-display text-sm ${
                log.perfectCount > 0 ? 'text-star-gold' : 'text-cyan-300'
              }`}>
                夜间远征完成 · 通关 {log.stagesCleared}/{log.totalStages} 关
                {log.perfectCount > 0 && <span className="ml-1">💎 {log.perfectCount}次完美!</span>}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                获得 💫 {log.stardustEarned} 星尘
              </div>
              <div className="fs-10 text-white/30 mt-1 font-mono">
                {formatDate(log.timestamp)}
              </div>
              {renderLogTags(log, originalIndex)}
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  const renderSummary = () => (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📊</span>
          <h3 className="font-display text-white/90 text-sm">{t('log.statistics')}</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-space-800/40 text-center">
            <div className="text-xl font-bold text-nebula-purple">
              {logSummary.stats.total}
            </div>
            <div className="fs-10 text-white/50 mt-1">{t('log.totalLogs')}</div>
          </div>
          <div className="p-3 rounded-xl bg-space-800/40 text-center">
            <div className="text-xl font-bold text-nebula-cyan">
              {logSummary.stats.activeDays}
            </div>
            <div className="fs-10 text-white/50 mt-1">{t('log.activeDays')}</div>
          </div>
          <div className="p-3 rounded-xl bg-space-800/40 text-center">
            <div className="text-xl font-bold text-star-gold">
              {logSummary.stats.uniqueConstellations.length}
            </div>
            <div className="fs-10 text-white/50 mt-1">{t('log.uniqueConstellations')}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="p-3 rounded-xl bg-space-800/40 text-center">
            <div className="text-xl font-bold text-purple-400">
              {logSummary.stats.discoveries}
            </div>
            <div className="fs-10 text-white/50 mt-1">{t('log.firstDiscovery')}</div>
          </div>
          <div className="p-3 rounded-xl bg-space-800/40 text-center">
            <div className="text-xl font-bold text-cyan-400">
              {logSummary.stats.reobservations}
            </div>
            <div className="fs-10 text-white/50 mt-1">{t('log.reobservation')}</div>
          </div>
          <div className="p-3 rounded-xl bg-space-800/40 text-center">
            <div className="text-xl font-bold text-yellow-400">
              {logSummary.stats.perfectRuns}
            </div>
            <div className="fs-10 text-white/50 mt-1">{t('log.perfect')}</div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl border border-nebula-purple/30 bg-nebula-purple/5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">💡</span>
          <h3 className="font-display text-white/90 text-sm">{t('log.insights')}</h3>
        </div>
        <div className="space-y-2">
          {logSummary.insights.map((insight, i) => (
            <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white/5">
              <span className="text-base">{insight.icon}</span>
              <div>
                <div className={`text-xs font-medium ${insight.color}`}>
                  {insight.title}
                </div>
                <div className="fs-11 text-white/50 mt-0.5">
                  {insight.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-2xl border border-star-gold/30 bg-star-gold/5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <h3 className="font-display text-white/90 text-sm">{t('log.achievementsProgress')}</h3>
          </div>
          <span className="fs-10 text-white/40">
            {progress.achievements} / {progress.totalAchievements}
          </span>
        </div>
        <div className="h-2.5 bg-space-900/60 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-star-gold via-nebula-orange to-nebula-purple rounded-full transition-all duration-700"
            style={{
              width: `${progress.totalAchievements > 0
                ? (progress.achievements / progress.totalAchievements) * 100
                : 0}%`
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 fs-10 text-white/50">
          <div className="flex items-center gap-1">
            <span>✨</span>
            <span>发现: {progress.constellations}/{progress.totalConstellations}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>💎</span>
            <span>完美: {progress.perfect}/{progress.totalConstellations}</span>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🌸</span>
          <h3 className="font-display text-white/90 text-sm">{t('log.seasonProgress')}</h3>
        </div>
        <div className="space-y-2">
          {Object.entries(SEASONS).map(([seasonId, season]) => {
            const stats = seasonStats[seasonId]
            return (
              <div key={seasonId} className="flex items-center gap-2">
                <span className="text-base">{season.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between fs-10 mb-0.5">
                    <span className="text-white/70">{season.name}</span>
                    <span className="text-white/50 font-mono">{stats.overallPercentage}%</span>
                  </div>
                  <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${season.color} rounded-full transition-all duration-500`}
                      style={{ width: `${stats.overallPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {logSummary.topTags.length > 0 && (
        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🏷️</span>
            <h3 className="font-display text-white/90 text-sm">{t('log.topTags')}</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {logSummary.topTags.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-r ${item.tag.color} text-white fs-10`}
              >
                <span>{item.tag.icon}</span>
                <span>{item.tag.name}</span>
                <span className="ml-1 opacity-70">×{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {logSummary.stats.mostActiveDay && (
        <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">📅</span>
            <h3 className="font-display text-white/90 text-sm">{t('log.mostActiveDay')}</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-emerald-300 font-medium">
                {formatDate(logSummary.stats.mostActiveDay.date.getTime())}
              </div>
              <div className="fs-11 text-white/50 mt-0.5">
                共 {logSummary.stats.mostActiveDay.count} 条记录
              </div>
            </div>
            <span className="text-2xl">🔥</span>
          </div>
        </div>
      )}
    </div>
  )

  const renderFilters = () => (
    <div className="space-y-4">
      <div>
        <div className="text-xs text-white/60 mb-2">{t('log.search')}</div>
        <input
          type="text"
          value={filters.searchText}
          onChange={(e) => setFilters(prev => ({ ...prev, searchText: e.target.value }))}
          placeholder={t('log.searchPlaceholder')}
          className="w-full px-3 py-2 rounded-xl bg-space-800/50 border border-white/10 text-white text-sm
                   placeholder:text-white/30 focus:border-nebula-purple/50 focus:outline-none
                   transition-all"
        />
      </div>

      <div>
        <div className="text-xs text-white/60 mb-2">{t('log.filterByTime')}</div>
        <div className="grid grid-cols-3 gap-1.5">
          {Object.values(TIME_RANGES).map((range) => (
            <button
              key={range.id}
              onClick={() => setFilters(prev => ({ ...prev, timeRange: range.id }))}
              className={`py-1.5 px-2 rounded-lg fs-11 transition-all ${
                filters.timeRange === range.id
                  ? 'bg-nebula-purple/30 text-nebula-cyan border border-nebula-purple/50'
                  : 'bg-space-800/40 text-white/60 border border-transparent hover:bg-space-700/50'
              }`}
            >
              {t(`log.${range.id === 'all' ? 'allTime' :
                range.id === 'today' ? 'today' :
                range.id === 'week' ? 'thisWeek' :
                range.id === 'month' ? 'thisMonth' :
                range.id === 'season' ? 'thisSeason' : 'thisYear'}`)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs text-white/60 mb-2">{t('log.filterByType')}</div>
        <div className="grid grid-cols-3 gap-1.5">
          {logTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setFilters(prev => ({ ...prev, type: type.id }))}
              className={`py-1.5 px-2 rounded-lg fs-10 transition-all flex items-center justify-center gap-1 ${
                filters.type === type.id
                  ? 'bg-nebula-purple/30 text-nebula-cyan border border-nebula-purple/50'
                  : 'bg-space-800/40 text-white/60 border border-transparent hover:bg-space-700/50'
              }`}
            >
              <span>{type.icon}</span>
              <span className="truncate">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs text-white/60 mb-2">{t('log.filterByTag')}</div>
        {Object.entries(LOG_TAG_CATEGORIES).filter(([id]) => id !== 'custom').map(([categoryId, category]) => (
          <div key={categoryId} className="mb-3">
            <div className="fs-10 text-white/40 mb-1.5 flex items-center gap-1">
              <span>{category.icon}</span>
              <span>{t(`log.tagCategories.${categoryId}`)}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {category.tags.map((tag) => {
                const isSelected = filters.tags.includes(tag.id)
                return (
                  <button
                    key={tag.id}
                    onClick={() => toggleTagFilter(tag.id)}
                    className={`fs-10 px-2 py-1 rounded-full flex items-center gap-1
                               transition-all ${
                      isSelected
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <span>{tag.icon}</span>
                    <span>{tag.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.perfectOnly}
            onChange={(e) => setFilters(prev => ({ ...prev, perfectOnly: e.target.checked }))}
            className="w-4 h-4 rounded border-white/20 bg-space-800 text-star-gold
                     focus:ring-star-gold/50"
          />
          <span className="text-xs text-white/60">{t('log.filterByPerfect')}</span>
        </label>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearAllFilters}
          className="w-full py-2 px-4 rounded-xl bg-red-500/10 border border-red-500/30
                   text-red-300 text-sm hover:bg-red-500/20 transition-all"
        >
          {t('log.clearFilters')}
        </button>
      )}
    </div>
  )

  const renderLogs = () => {
    if (filteredLogs.length === 0) {
      if (hasActiveFilters) {
        return (
          <div className="h-full flex flex-col items-center justify-center text-center py-12">
            <div className="text-5xl mb-4 opacity-30">🔍</div>
            <h3 className="text-white/70 font-display mb-2">{t('log.noResults')}</h3>
            <p className="text-xs text-white/40 max-w-xs leading-relaxed">
              尝试调整筛选条件或清除筛选
            </p>
          </div>
        )
      }
      return (
        <div className="h-full flex flex-col items-center justify-center text-center py-12">
          <div className="text-5xl mb-4 opacity-30">📖</div>
          <h3 className="text-white/70 font-display mb-2">{t('log.emptyTitle')}</h3>
          <p className="text-xs text-white/40 max-w-xs leading-relaxed">
            {t('log.emptyDesc')}
          </p>
        </div>
      )
    }

    return (
      <div className="space-y-3">
        {hasActiveFilters && (
          <div className="fs-11 text-white/40 mb-2">
            显示 {filteredLogs.length} 条结果
            {filteredLogs.length !== observationLogs.length && ` / 共 ${observationLogs.length} 条`}
          </div>
        )}
        {filteredLogs.map((log, displayIndex) => {
          const originalIndex = observationLogs.indexOf(log)
          return renderLogEntry(log, originalIndex, displayIndex)
        })}
      </div>
    )
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
              <div className="fs-10 text-white/50">{t('log.firstDiscovery')}</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-nebula-cyan">
                {observationLogs.filter(l => l.type === 'reobservation').length}
              </div>
              <div className="fs-10 text-white/50">{t('log.reobservation')}</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-star-gold">
                {observationLogs.filter(l => l.type === 'achievement').length}
              </div>
              <div className="fs-10 text-white/50">{t('log.achievementUnlocked')}</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-pink-300">
                {seasonRewardsClaimed.length}
              </div>
              <div className="fs-10 text-white/50">{t('log.seasonReward')}</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-blue-400">
                {observationLogs.filter(l => l.type?.startsWith('event_')).length}
              </div>
              <div className="fs-10 text-white/50">{t('log.nightEvents')}</div>
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

          <div className="mt-3 flex gap-2">
            {[
              { id: 'logs', label: t('log.overview'), icon: '📋' },
              { id: 'filters', label: t('log.filters'), icon: '🔍' },
              { id: 'summary', label: t('log.summary'), icon: '📊' }
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
          {viewMode === 'logs' && renderLogs()}
          {viewMode === 'filters' && renderFilters()}
          {viewMode === 'summary' && renderSummary()}
        </div>
      </div>
    </div>
  )
}
