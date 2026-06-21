import { useMemo } from 'react'
import { useGameStore } from '../stores/gameStore'
import { getConstellationById } from '../data/constellations'
import { DIFFICULTY_CONFIG } from '../data/constants'
import { SEASONS } from '../data/seasonPlan'

export default function ConstellationDetail({ constellationId }) {
  const {
    discoveredConstellations,
    favoriteConstellations,
    toggleFavorite,
    isConstellationComplete,
    totalObservations,
    perfectObservations,
    setTargetConstellation,
    setActiveAtlasPanel,
    setSelectedConstellationDetail,
    setActivePanel,
    observationLogs
  } = useGameStore()

  const constellation = useMemo(() => 
    getConstellationById(constellationId), 
    [constellationId]
  )

  const completed = constellation ? isConstellationComplete(constellation.id) : false
  const isFavorite = constellation ? favoriteConstellations.includes(constellation.id) : false
  const obsCount = constellation ? (totalObservations[constellation.id] || 0) : 0
  const isPerfect = constellation ? (perfectObservations[constellation.id] || false) : false

  const seasonKey = constellation?.season === '春' ? 'spring' : 
                   constellation?.season === '夏' ? 'summer' : 
                   constellation?.season === '秋' ? 'autumn' : 'winter'
  const seasonInfo = constellation ? SEASONS[seasonKey] : null

  const discoveryDate = useMemo(() => {
    if (!constellation) return null
    const log = observationLogs.find(
      l => l.type === 'discovery' && l.constellationId === constellation.id
    )
    return log ? new Date(log.timestamp) : null
  }, [constellation, observationLogs])

  if (!constellation) {
    return (
      <div className="absolute inset-0 z-40 flex items-center justify-center p-4
                      bg-space-900/70 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-4xl mb-3">🌌</div>
          <p className="text-white/50">星座信息加载失败</p>
          <button
            onClick={() => {
              setActiveAtlasPanel(null)
              setSelectedConstellationDetail(null)
            }}
            className="mt-4 btn-secondary text-sm"
          >
            返回图鉴
          </button>
        </div>
      </div>
    )
  }

  const handleBack = () => {
    setActiveAtlasPanel('list')
    setSelectedConstellationDetail(null)
  }

  const handleStartObservation = () => {
    setTargetConstellation(constellation.id)
    setActiveAtlasPanel(null)
    setSelectedConstellationDetail(null)
    setActivePanel(null)
  }

  const handleClose = () => {
    setActiveAtlasPanel(null)
    setSelectedConstellationDetail(null)
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
                {constellation.name}
              </h1>
              {completed && (
                <span className="text-star-gold text-lg">✓</span>
              )}
              {isPerfect && (
                <span className="text-nebula-cyan text-xs px-2 py-0.5 rounded-full bg-nebula-cyan/20">
                  完美
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
                {'⭐'.repeat(constellation.difficulty)} {DIFFICULTY_CONFIG[constellation.difficulty].label}
              </span>
              {seasonInfo && (
                <span className={`text-xs px-3 py-1 rounded-full ${seasonInfo.bgColor} ${seasonInfo.textColor} ${seasonInfo.borderColor} border`}>
                  {seasonInfo.icon} {constellation.season}季星座
                </span>
              )}
              {completed && (
                <span className="text-xs px-3 py-1 rounded-full bg-nebula-purple/20 text-nebula-purple border border-nebula-purple/30">
                  已发现
                </span>
              )}
              {obsCount > 1 && (
                <span className="text-xs px-3 py-1 rounded-full bg-space-700/60 text-white/70">
                  观测 {obsCount} 次
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-space-700/40 text-center">
                <div className="text-lg font-bold text-white">
                  {constellation.stars.length}
                </div>
                <div className="text-[10px] text-white/50">主要恒星</div>
              </div>
              <div className="p-3 rounded-xl bg-space-700/40 text-center">
                <div className="text-lg font-bold text-white">
                  {constellation.area}
                </div>
                <div className="text-[10px] text-white/50">面积排名</div>
              </div>
              <div className="p-3 rounded-xl bg-space-700/40 text-center">
                <div className="text-lg font-bold text-white">
                  第{constellation.ranking}位
                </div>
                <div className="text-[10px] text-white/50">全天排名</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-display text-white border-l-2 border-nebula-purple pl-3">
                星座简介
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {constellation.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-display text-white border-l-2 border-star-gold pl-3">
                神话故事
              </h3>
              <div className="p-4 rounded-xl bg-space-700/30 border border-star-gold/10">
                <p className="text-sm text-white/70 leading-relaxed">
                  {constellation.mythologyDetail}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-display text-white border-l-2 border-nebula-cyan pl-3">
                观测指南
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-space-700/30">
                  <span className="text-xl">🌍</span>
                  <div>
                    <p className="text-xs text-white/50">可见半球</p>
                    <p className="text-sm text-white/80">{constellation.hemisphere}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-space-700/30">
                  <span className="text-xl">⏰</span>
                  <div>
                    <p className="text-xs text-white/50">最佳观测时间</p>
                    <p className="text-sm text-white/80">{constellation.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-space-700/30">
                  <span className="text-xl">💡</span>
                  <div>
                    <p className="text-xs text-white/50">观测技巧</p>
                    <p className="text-sm text-white/80">{constellation.observationTips}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-display text-white border-l-2 border-nebula-orange pl-3">
                主要恒星
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
                        星等: {star.mag}
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
                  标签
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
                  发现时间
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
          </div>
        </div>

        <div className="p-5 border-t border-white/10">
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 btn-secondary"
            >
              返回图鉴
            </button>
            <button
              onClick={handleStartObservation}
              className="flex-1 btn-primary"
            >
              {completed ? '再次观测' : '开始观测'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
