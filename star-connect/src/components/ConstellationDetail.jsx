import { useMemo, useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { getConstellationById } from '../data/constellations'
import { DIFFICULTY_CONFIG } from '../data/constants'
import { SEASONS, getCurrentSeason } from '../data/seasonPlan'
import { useI18n } from '../i18n/useI18n'

const VISIBILITY_LEVELS = {
  excellent: { label: '极佳', color: 'text-green-400', bg: 'bg-green-500/20', icon: '🌟' },
  good: { label: '良好', color: 'text-blue-400', bg: 'bg-blue-500/20', icon: '⭐' },
  moderate: { label: '一般', color: 'text-yellow-400', bg: 'bg-yellow-500/20', icon: '✨' },
  poor: { label: '困难', color: 'text-red-400', bg: 'bg-red-500/20', icon: '🌫️' }
}

const ADVICE_TYPE_ICONS = {
  location: '📍',
  equipment: '🔭',
  tip: '💡',
  weather: '🌤️',
  best_time: '⏰'
}

export default function ConstellationDetail({ constellationId }) {
  const {
    discoveredConstellations,
    favoriteConstellations,
    toggleFavorite,
    isConstellationComplete,
    totalObservations,
    perfectObservations,
    setTargetConstellation,
    setActivePanel,
    observationLogs,
    resetAtlasState,
    openAtlasList,
    openGalleryWithConstellation,
    getPhotosByConstellation,
    settings,
    getDailyCommissionProgressAll,
    getOrRefreshDailyCommissions
  } = useGameStore()
  const { t, tc } = useI18n()
  const [showSeasonTip, setShowSeasonTip] = useState(true)

  const constellation = useMemo(() =>
    getConstellationById(constellationId),
    [constellationId]
  )

  const completed = constellation ? isConstellationComplete(constellation.id) : false
  const isFavorite = constellation ? favoriteConstellations.includes(constellation.id) : false
  const obsCount = constellation ? (totalObservations[constellation.id] || 0) : 0
  const isPerfect = constellation ? (perfectObservations[constellation.id] || false) : false

  const seasonKey = constellation?.season === '春' || constellation?.season === 'Spring' ? 'spring' :
                   constellation?.season === '夏' || constellation?.season === 'Summer' ? 'summer' :
                   constellation?.season === '秋' || constellation?.season === 'Autumn' ? 'autumn' : 'winter'
  const seasonInfo = constellation ? SEASONS[seasonKey] : null

  const discoveryDate = useMemo(() => {
    if (!constellation) return null
    const log = observationLogs.find(
      l => l.type === 'discovery' && l.constellationId === constellation.id
    )
    return log ? new Date(log.timestamp) : null
  }, [constellation, observationLogs])

  const constellationPhotos = useMemo(() => {
    if (!constellation) return []
    return getPhotosByConstellation(constellation.id)
  }, [constellation, getPhotosByConstellation])

  const locName = tc('constellation', constellationId, 'name') || constellation?.name
  const locDesc = tc('constellation', constellationId, 'description') || constellation?.description
  const locMythology = tc('constellation', constellationId, 'mythologyDetail') || constellation?.mythologyDetail
  const locTips = tc('constellation', constellationId, 'observationTips') || constellation?.observationTips
  const locBestTime = tc('constellation', constellationId, 'bestTime') || constellation?.bestTime
  const locHemisphere = tc('constellation', constellationId, 'hemisphere') || constellation?.hemisphere
  const locSeason = tc('constellation', constellationId, 'season') || constellation?.season
  const locDifficulty = t(`difficulty.${constellation?.difficulty}`) || DIFFICULTY_CONFIG[constellation?.difficulty]?.label

  const currentSeason = getCurrentSeason()
  const seasonRecommendation = constellation?.seasonRecommendation

  const currentVisibility = useMemo(() => {
    if (!seasonRecommendation?.visibility) return null
    return seasonRecommendation.visibility[currentSeason] || null
  }, [seasonRecommendation, currentSeason])

  const dailyTasks = useMemo(() => {
    try {
      const allTasks = getDailyCommissionProgressAll()
      const bestSeason = seasonRecommendation?.bestSeason
      const constellationSeason = constellation?.season === '春' || constellation?.season === 'Spring' ? 'spring' :
                                 constellation?.season === '夏' || constellation?.season === 'Summer' ? 'summer' :
                                 constellation?.season === '秋' || constellation?.season === 'Autumn' ? 'autumn' : 'winter'

      const scoredTasks = allTasks.map(task => {
        let score = 0
        let matchReason = ''

        if (task.constellationId === constellationId) {
          score = 100
          matchReason = '指定星座'
        } else if (task.type === 'perfect' && task.constellationId == null && completed && !isPerfect) {
          score = 80
          matchReason = '完美观测'
        } else if (task.type === 'reobservation' && task.constellationId == null && completed) {
          score = 70
          matchReason = '再次观测'
        } else if (task.type === 'discovery' && task.constellationId == null && !completed) {
          score = 60
          matchReason = '新发现'
        } else if (task.type === 'season_discovery' && bestSeason && constellationSeason === bestSeason) {
          if (!completed) {
            score = 50
            matchReason = '当季未发现'
          } else {
            score = 30
            matchReason = '当季已发现'
          }
        }

        return { task, score, matchReason }
      }).filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 2)
        .map(item => ({
          ...item.task,
          matchReason: item.matchReason
        }))

      return scoredTasks
    } catch (e) {
      return []
    }
  }, [getDailyCommissionProgressAll, constellationId, constellation, seasonRecommendation, completed, isPerfect])

  const isBestSeason = seasonRecommendation?.bestSeason === currentSeason

  const observationAdvice = useMemo(() => {
    if (!seasonRecommendation?.observationAdvice) return []
    const advice = [...seasonRecommendation.observationAdvice]
    if (!completed) {
      advice.push({
        type: 'tip',
        title: '新手建议',
        content: `这是${locDifficulty}难度的星座，建议先从简单的星座开始练习，熟悉连线操作后再来挑战。`
      })
    } else if (!isPerfect) {
      advice.push({
        type: 'tip',
        title: '进阶建议',
        content: '你已经发现了这个星座，尝试完美完成它吧！注意观察星星的位置和连线顺序。'
      })
    } else {
      advice.push({
        type: 'tip',
        title: '大师建议',
        content: '你已经完美掌握了这个星座！可以尝试多次观测，或者探索相关的其他星座。'
      })
    }
    return advice
  }, [seasonRecommendation, completed, isPerfect, locDifficulty])

  useEffect(() => {
    getOrRefreshDailyCommissions()
  }, [getOrRefreshDailyCommissions])

  if (!constellation) {
    return (
      <div className="absolute inset-0 z-40 flex items-center justify-center p-4
                      bg-space-900/70 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-4xl mb-3">🌌</div>
          <p className="text-white/50">{t('detail.loadFailed')}</p>
          <button
            onClick={openAtlasList}
            className="mt-4 btn-secondary text-sm"
          >
            {t('detail.backToAtlas')}
          </button>
        </div>
      </div>
    )
  }

  const handleBack = () => {
    openAtlasList()
  }

  const handleStartObservation = () => {
    setTargetConstellation(constellation.id)
    resetAtlasState()
    setActivePanel(null)
  }

  const handleClose = () => {
    resetAtlasState()
    setActivePanel(null)
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className={`relative h-32 overflow-hidden ${
          seasonInfo ? `bg-gradient-to-br ${seasonInfo.color}` : 'bg-space-700'
        }`}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-30">
              {completed ? '✦' : '○'}
            </div>
          </div>

          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
            <button
              onClick={handleBack}
              className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-black/30 text-white/80 hover:bg-black/50 transition-all"
            >
              ←
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => toggleFavorite(constellation.id)}
                className={`w-10 h-10 flex items-center justify-center rounded-full
                          transition-all ${
                  isFavorite
                    ? 'bg-star-gold/30 text-star-gold'
                    : 'bg-black/30 text-white/50 hover:text-star-gold hover:bg-black/50'
                }`}
              >
                {isFavorite ? '★' : '☆'}
              </button>
              <button
                onClick={handleClose}
                className="w-10 h-10 flex items-center justify-center rounded-full
                         bg-black/30 text-white/80 hover:bg-black/50 transition-all"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-display text-white">
                {locName}
              </h1>
              {completed && (
                <span className="text-star-gold text-lg">✓</span>
              )}
              {isPerfect && (
                <span className="text-nebula-cyan text-xs px-2 py-0.5 rounded-full bg-nebula-cyan/20">
                  {t('detail.perfect')}
                </span>
              )}
            </div>
            <p className="text-sm text-white/70">
              {constellation.nameEn}
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="p-5 space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className={`text-xs px-3 py-1 rounded-full ${
                constellation.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                constellation.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {'⭐'.repeat(constellation.difficulty)} {locDifficulty}
              </span>
              {seasonInfo && (
                <span className={`text-xs px-3 py-1 rounded-full ${seasonInfo.bgColor} ${seasonInfo.textColor} ${seasonInfo.borderColor} border`}>
                  {seasonInfo.icon} {t('detail.seasonConstellation', { season: locSeason })}
                </span>
              )}
              {completed && (
                <span className="text-xs px-3 py-1 rounded-full bg-nebula-purple/20 text-nebula-purple border border-nebula-purple/30">
                  {t('detail.discovered')}
                </span>
              )}
              {obsCount > 1 && (
                <span className="text-xs px-3 py-1 rounded-full bg-space-700/60 text-white/70">
                  {t('detail.observeCount', { count: obsCount })}
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-space-700/40 text-center">
                <div className="text-lg font-bold text-white">
                  {constellation.stars.length}
                </div>
                <div className="text-[10px] text-white/50">{t('detail.mainStars')}</div>
              </div>
              <div className="p-3 rounded-xl bg-space-700/40 text-center">
                <div className="text-lg font-bold text-white">
                  {constellation.area}
                </div>
                <div className="text-[10px] text-white/50">{t('detail.areaRank')}</div>
              </div>
              <div className="p-3 rounded-xl bg-space-700/40 text-center">
                <div className="text-lg font-bold text-white">
                  {t('detail.rankFormat', { rank: constellation.ranking })}
                </div>
                <div className="text-[10px] text-white/50">{t('detail.skyRank')}</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-display text-white border-l-2 border-nebula-purple pl-3">
                {t('detail.introTitle')}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {locDesc}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-display text-white border-l-2 border-star-gold pl-3">
                {t('detail.mythologyTitle')}
              </h3>
              <div className="p-4 rounded-xl bg-space-700/30 border border-star-gold/10">
                <p className="text-sm text-white/70 leading-relaxed">
                  {locMythology}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-display text-white border-l-2 border-nebula-cyan pl-3">
                {t('detail.guideTitle')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-space-700/30">
                  <span className="text-xl">🌍</span>
                  <div>
                    <p className="text-xs text-white/50">{t('detail.visibleHemisphere')}</p>
                    <p className="text-sm text-white/80">{locHemisphere}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-space-700/30">
                  <span className="text-xl">⏰</span>
                  <div>
                    <p className="text-xs text-white/50">{t('detail.bestTime')}</p>
                    <p className="text-sm text-white/80">{locBestTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-space-700/30">
                  <span className="text-xl">💡</span>
                  <div>
                    <p className="text-xs text-white/50">{t('detail.observationTips')}</p>
                    <p className="text-sm text-white/80">{locTips}</p>
                  </div>
                </div>
              </div>
            </div>

            {seasonRecommendation && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-display text-white border-l-2 border-star-gold pl-3">
                    季节观测推荐
                  </h3>
                  {isBestSeason && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-star-gold/20 text-star-gold flex items-center gap-1">
                      <span className="animate-pulse">✨</span> 当季最佳
                    </span>
                  )}
                </div>

                {currentVisibility && showSeasonTip && (
                  <div className={`p-4 rounded-xl border ${
                    isBestSeason
                      ? 'bg-star-gold/10 border-star-gold/30'
                      : 'bg-space-700/30 border-white/10'
                  }`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">
                          {VISIBILITY_LEVELS[currentVisibility.level]?.icon || '✨'}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-sm font-medium ${
                              VISIBILITY_LEVELS[currentVisibility.level]?.color || 'text-white/80'
                            }`}>
                              当前{SEASONS[currentSeason]?.name}观测：{VISIBILITY_LEVELS[currentVisibility.level]?.label || '未知'}
                            </span>
                          </div>
                          <p className="text-xs text-white/60 leading-relaxed">
                            {currentVisibility.desc}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowSeasonTip(false)}
                        className="text-white/30 hover:text-white/60 text-sm flex-shrink-0"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}

                {seasonRecommendation.visibility && (
                  <div className="grid grid-cols-4 gap-2">
                    {Object.entries(SEASONS).map(([seasonId, season]) => {
                      const vis = seasonRecommendation.visibility[seasonId]
                      const level = vis?.level || 'poor'
                      const visInfo = VISIBILITY_LEVELS[level]
                      const isCurrent = seasonId === currentSeason
                      return (
                        <div
                          key={seasonId}
                          className={`p-2 rounded-lg text-center ${
                            isCurrent
                              ? `${season.bgColor} ${season.borderColor} border`
                              : 'bg-space-700/30 border border-transparent'
                          }`}
                        >
                          <div className="text-lg mb-1">{season.icon}</div>
                          <div className={`text-[10px] ${
                            isCurrent ? season.textColor : 'text-white/50'
                          }`}>
                            {season.name}
                          </div>
                          <div className={`text-[9px] mt-0.5 ${visInfo?.color || 'text-white/30'}`}>
                            {visInfo?.label || '未知'}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}

                {observationAdvice.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs text-white/60 font-medium">观测建议</h4>
                    {observationAdvice.map((advice, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-xl bg-space-700/30"
                      >
                        <span className="text-xl">
                          {ADVICE_TYPE_ICONS[advice.type] || '📌'}
                        </span>
                        <div>
                          <p className="text-xs text-white/50">{advice.title}</p>
                          <p className="text-sm text-white/80">{advice.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {seasonRecommendation.relatedConstellations && seasonRecommendation.relatedConstellations.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs text-white/60 font-medium">相关星座</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {seasonRecommendation.relatedConstellations.map((name, index) => (
                        <span
                          key={index}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-nebula-purple/10 text-nebula-purple/80 border border-nebula-purple/20"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {dailyTasks.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-display text-white border-l-2 border-nebula-purple pl-3">
                    相关任务
                  </h3>
                  <button
                    onClick={() => {
                      resetAtlasState()
                      setActivePanel('tasks')
                    }}
                    className="text-[11px] text-nebula-cyan hover:text-nebula-cyan/80 transition-colors"
                  >
                    查看全部 →
                  </button>
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
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          task.completed
                            ? 'bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white'
                            : 'bg-space-600/50 text-white/70'
                        }`}>
                          {task.completed ? '✓' : task.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className={`text-sm font-medium ${
                              task.completed ? 'text-white/90' : 'text-white/80'
                            }`}>
                              {task.name}
                            </p>
                            {task.matchReason && (
                              <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                                task.matchReason === '指定星座'
                                  ? 'bg-nebula-cyan/20 text-nebula-cyan border border-nebula-cyan/30'
                                  : task.matchReason === '完美观测'
                                  ? 'bg-star-gold/20 text-star-gold border border-star-gold/30'
                                  : task.matchReason === '再次观测'
                                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                  : task.matchReason === '新发现'
                                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                  : task.matchReason === '当季未发现'
                                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                                  : 'bg-space-600/50 text-white/60 border border-white/10'
                              }`}>
                                {task.matchReason}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-white/50 mt-0.5">
                            {task.description}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-white/40">
                              进度 {task.current}/{task.target}
                            </span>
                            <span className="text-[10px] text-star-gold">
                              💫 {task.reward}
                            </span>
                          </div>
                        </div>
                        {task.completed && !task.claimed && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-star-gold/20 text-star-gold animate-pulse">
                            可领取
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {settings && (
              <div className="space-y-3">
                <h3 className="text-sm font-display text-white border-l-2 border-nebula-cyan pl-3">
                  个性化提示
                </h3>
                <div className="p-4 rounded-xl bg-space-700/30 border border-white/5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🎯</span>
                    <div className="flex-1">
                      <p className="text-sm text-white/80 mb-1">
                        {!completed
                          ? `这是${locDifficulty}难度的星座，准备好开始你的星空探索了吗？`
                          : !isPerfect
                            ? '你已经发现了这个星座，再加把劲就能完美掌握！'
                            : '太棒了！你已经完美掌握了这个星座，可以去探索更多星座了。'
                        }
                      </p>
                      <p className="text-xs text-white/50">
                        {settings.showLabels
                          ? '已开启星星标签显示，有助于你快速识别星星。'
                          : '已关闭星星标签，更有挑战性哦！'
                        }
                        {settings.animationSpeed !== undefined && settings.animationSpeed < 0.8 && (
                          <span className="ml-1">动画速度较慢，适合仔细观察。</span>
                        )}
                        {settings.animationSpeed !== undefined && settings.animationSpeed > 1.2 && (
                          <span className="ml-1">动画速度较快，节奏更紧凑。</span>
                        )}
                        {!completed && settings.showLabels && (
                          <span className="ml-1">建议先完成入门难度的星座熟悉操作。</span>
                        )}
                        {completed && !isPerfect && (
                          <span className="ml-1">尝试放慢速度，仔细观察星星的位置关系。</span>
                        )}
                        {isPerfect && (
                          <span className="ml-1">可以尝试挑战更高难度的星座哦！</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-sm font-display text-white border-l-2 border-nebula-orange pl-3">
                {t('detail.starsTitle')}
              </h3>
              <div className="space-y-2">
                {constellation.stars.map((star, index) => (
                  <div
                    key={star.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-space-700/30 hover:bg-space-700/50 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: star.color + '30',
                        boxShadow: `0 0 10px ${star.color}40`
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: star.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white font-medium">
                        {star.name}
                      </p>
                      <p className="text-[10px] text-white/40">
                        {t('detail.starMagnitude')}: {star.mag}
                      </p>
                    </div>
                    <span className="text-[10px] text-white/40">
                      #{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {constellation.tags && constellation.tags.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-display text-white border-l-2 border-white/30 pl-3">
                  {t('detail.tagsTitle')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {constellation.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-space-700/50 text-white/60 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {discoveryDate && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20 border border-nebula-purple/20">
                <p className="text-xs text-white/50 text-center">
                  {t('detail.discoveryTime')}
                </p>
                <p className="text-sm text-white/80 text-center font-medium mt-1">
                  {discoveryDate.toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            )}

            {completed && (
              <div className="space-y-3">
                <h3 className="text-sm font-display text-white border-l-2 border-star-gold pl-3 flex items-center justify-between">
                  <span>{t('detail.photoTitle')}</span>
                  <span className="text-[10px] text-white/40 font-normal">
                    {t('detail.photoCount', { count: constellationPhotos.length })}
                  </span>
                </h3>

                {constellationPhotos.length > 0 ? (
                  <div>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {constellationPhotos.slice(0, 4).map(photo => (
                        <div
                          key={photo.id}
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-star-gold/50 transition-all"
                          onClick={() => openGalleryWithConstellation(constellation.id)}
                        >
                          <img
                            src={photo.thumbnailUrl}
                            alt={photo.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          {photo.featured && (
                            <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-star-gold/90 flex items-center justify-center text-[8px]">
                              ⭐
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => openGalleryWithConstellation(constellation.id)}
                      className="w-full py-2 rounded-xl bg-white/5 text-white/70 text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-1"
                    >
                      <span>📷</span>
                      <span>{t('detail.viewAllPhotos', { count: constellationPhotos.length })}</span>
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-space-700/30 border border-dashed border-white/10 text-center">
                    <div className="text-3xl mb-2 opacity-50">📷</div>
                    <p className="text-xs text-white/50 mb-1">
                      {t('detail.noPhoto')}
                    </p>
                    <p className="text-[10px] text-white/30 mb-3">
                      {t('detail.noPhotoDesc', { name: locName })}
                    </p>
                    <button
                      onClick={() => openGalleryWithConstellation(constellation.id)}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-star-gold to-nebula-orange text-white text-xs font-medium hover:shadow-lg transition-all"
                    >
                      {t('detail.addPhoto')}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="p-5 border-t border-white/10">
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 btn-secondary"
            >
              {t('detail.backToAtlas')}
            </button>
            {completed && (
              <button
                onClick={() => openGalleryWithConstellation(constellation.id)}
                className="flex-1 py-2.5 rounded-xl bg-star-gold/20 text-star-gold text-sm font-medium border border-star-gold/30 hover:bg-star-gold/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>📷</span>
                <span>{t('detail.photoArchive')}</span>
              </button>
            )}
            <button
              onClick={handleStartObservation}
              className="flex-1 btn-primary"
            >
              {completed ? t('detail.reobserve') : t('detail.startObserve')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
