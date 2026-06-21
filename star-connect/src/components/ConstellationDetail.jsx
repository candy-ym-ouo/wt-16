import { useMemo } from 'react'
import { useGameStore } from '../stores/gameStore'
import { getConstellationById } from '../data/constellations'
import { DIFFICULTY_CONFIG } from '../data/constants'
import { SEASONS } from '../data/seasonPlan'
import { useI18n } from '../i18n/useI18n'

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
    getPhotosByConstellation
  } = useGameStore()
  const { t, tc } = useI18n()

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
