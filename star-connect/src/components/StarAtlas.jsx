import { useState, useMemo } from 'react'
import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS } from '../data/constellations'
import { DIFFICULTY_CONFIG } from '../data/constants'
import { SEASONS } from '../data/seasonPlan'
import ConstellationDetail from './ConstellationDetail'

export default function StarAtlas() {
  const {
    discoveredConstellations,
    favoriteConstellations,
    toggleFavorite,
    isConstellationComplete,
    setTargetConstellation,
    activeAtlasPanel,
    setActiveAtlasPanel,
    selectedConstellationDetail,
    setSelectedConstellationDetail,
    setActivePanel
  } = useGameStore()

  const [searchQuery, setSearchQuery] = useState('')
  const [filterSeason, setFilterSeason] = useState('all')
  const [filterDifficulty, setFilterDifficulty] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState('grid')

  const filteredConstellations = useMemo(() => {
    let result = [...CONSTELLATIONS]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.nameEn.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        c.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    if (filterSeason !== 'all') {
      result = result.filter(c => c.season === filterSeason)
    }

    if (filterDifficulty !== 'all') {
      result = result.filter(c => c.difficulty === parseInt(filterDifficulty))
    }

    if (filterStatus === 'discovered') {
      result = result.filter(c => isConstellationComplete(c.id))
    } else if (filterStatus === 'undiscovered') {
      result = result.filter(c => !isConstellationComplete(c.id))
    } else if (filterStatus === 'favorites') {
      result = result.filter(c => favoriteConstellations.includes(c.id))
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'difficulty':
          return a.difficulty - b.difficulty
        case 'season':
          return a.season.localeCompare(b.season)
        case 'newest':
          return discoveredConstellations.indexOf(b.id) - discoveredConstellations.indexOf(a.id)
        default:
          return 0
      }
    })

    return result
  }, [searchQuery, filterSeason, filterDifficulty, filterStatus, sortBy, discoveredConstellations, favoriteConstellations, isConstellationComplete])

  const stats = useMemo(() => {
    const total = CONSTELLATIONS.length
    const discovered = discoveredConstellations.length
    const favorites = favoriteConstellations.length
    const bySeason = {
      '春': CONSTELLATIONS.filter(c => c.season === '春').length,
      '夏': CONSTELLATIONS.filter(c => c.season === '夏').length,
      '秋': CONSTELLATIONS.filter(c => c.season === '秋').length,
      '冬': CONSTELLATIONS.filter(c => c.season === '冬').length
    }
    const byDifficulty = {
      1: CONSTELLATIONS.filter(c => c.difficulty === 1).length,
      2: CONSTELLATIONS.filter(c => c.difficulty === 2).length,
      3: CONSTELLATIONS.filter(c => c.difficulty === 3).length
    }
    return { total, discovered, favorites, bySeason, byDifficulty }
  }, [discoveredConstellations, favoriteConstellations])

  const seasonOptions = [
    { value: 'all', label: '全部季节' },
    { value: '春', label: '🌸 春季' },
    { value: '夏', label: '☀️ 夏季' },
    { value: '秋', label: '🍂 秋季' },
    { value: '冬', label: '❄️ 冬季' }
  ]

  const difficultyOptions = [
    { value: 'all', label: '全部难度' },
    { value: '1', label: '⭐ 入门' },
    { value: '2', label: '⭐⭐ 进阶' },
    { value: '3', label: '⭐⭐⭐ 挑战' }
  ]

  const statusOptions = [
    { value: 'all', label: '全部状态' },
    { value: 'discovered', label: '✓ 已发现' },
    { value: 'undiscovered', label: '○ 未发现' },
    { value: 'favorites', label: '★ 收藏' }
  ]

  const sortOptions = [
    { value: 'name', label: '按名称' },
    { value: 'difficulty', label: '按难度' },
    { value: 'season', label: '按季节' },
    { value: 'newest', label: '最近发现' }
  ]

  const handleViewConstellation = (constellationId) => {
    setSelectedConstellationDetail(constellationId)
    setActiveAtlasPanel('detail')
  }

  const handleStartObservation = (constellationId) => {
    setTargetConstellation(constellationId)
    setActiveAtlasPanel(null)
    setSelectedConstellationDetail(null)
    setActivePanel(null)
  }

  if (activeAtlasPanel === 'detail' && selectedConstellationDetail) {
    return <ConstellationDetail constellationId={selectedConstellationDetail} />
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">
                <span className="text-gradient">星空图鉴</span>
              </h2>
              <p className="text-xs text-white/50 mt-1">
                探索星座奥秘，记录你的星空发现
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
                {stats.discovered}
              </div>
              <div className="text-[10px] text-white/50">已发现</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-white/80">
                {stats.total}
              </div>
              <div className="text-[10px] text-white/50">总星座</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-star-gold">
                {stats.favorites}
              </div>
              <div className="text-[10px] text-white/50">收藏</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-nebula-purple">
                {Math.round((stats.discovered / stats.total) * 100)}%
              </div>
              <div className="text-[10px] text-white/50">完成度</div>
            </div>
          </div>

          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="搜索星座名称、描述或标签..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 bg-space-700/50 border border-white/10 rounded-xl
                       text-white placeholder-white/40 text-sm focus:outline-none focus:border-nebula-purple/50
                       focus:ring-1 focus:ring-nebula-purple/30 transition-all"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 text-sm"
              >
                ✕
              </button>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <div className="flex items-center gap-1">
              <select
                value={filterSeason}
                onChange={(e) => setFilterSeason(e.target.value)}
                className="px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50"
              >
                {seasonOptions.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-space-800">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50"
              >
                {difficultyOptions.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-space-800">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50"
              >
                {statusOptions.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-space-800">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-space-800">
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="flex bg-space-700/50 rounded-lg border border-white/10">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-2 py-1.5 text-xs rounded-l-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-nebula-purple/30 text-white'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  ▦
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-2 py-1.5 text-xs rounded-r-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-nebula-purple/30 text-white'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {filteredConstellations.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-3 opacity-50">🌌</div>
              <p className="text-white/50 text-sm">
                {searchQuery ? '没有找到匹配的星座' : '暂无符合条件的星座'}
              </p>
              {(searchQuery || filterSeason !== 'all' || filterDifficulty !== 'all' || filterStatus !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setFilterSeason('all')
                    setFilterDifficulty('all')
                    setFilterStatus('all')
                  }}
                  className="mt-3 text-xs text-nebula-cyan hover:underline"
                >
                  清除筛选条件
                </button>
              )}
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredConstellations.map((c) => {
                const completed = isConstellationComplete(c.id)
                const isFavorite = favoriteConstellations.includes(c.id)
                const seasonKey = c.season === '春' ? 'spring' : c.season === '夏' ? 'summer' : c.season === '秋' ? 'autumn' : 'winter'
                const seasonInfo = SEASONS[seasonKey]

                return (
                  <div
                    key={c.id}
                    className={`relative rounded-2xl border overflow-hidden transition-all card-hover cursor-pointer ${
                      completed
                        ? 'border-nebula-purple/50 bg-nebula-purple/8'
                        : 'border-white/10 bg-space-700/30'
                    }`}
                    onClick={() => handleViewConstellation(c.id)}
                  >
                    <div className={`h-20 relative overflow-hidden ${
                      seasonInfo ? `bg-gradient-to-br ${seasonInfo.color} opacity-20` : 'bg-space-600/30'
                    }`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-3xl opacity-60">
                          {completed ? '✦' : '○'}
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 flex gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(c.id)
                          }}
                          className={`w-6 h-6 flex items-center justify-center rounded-full
                                    transition-all text-xs ${
                            isFavorite
                              ? 'bg-star-gold/20 text-star-gold'
                              : 'bg-space-900/40 text-white/30 hover:text-star-gold'
                          }`}
                        >
                          {isFavorite ? '★' : '☆'}
                        </button>
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-display text-white truncate flex-1">
                          {c.name}
                        </h3>
                        {completed && (
                          <span className="text-star-gold text-xs">✓</span>
                        )}
                      </div>
                      <p className="text-[10px] text-white/40 truncate">
                        {c.nameEn}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                          c.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                          c.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {DIFFICULTY_CONFIG[c.difficulty].label}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50">
                          {seasonInfo?.icon} {c.season}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredConstellations.map((c) => {
                const completed = isConstellationComplete(c.id)
                const isFavorite = favoriteConstellations.includes(c.id)
                const seasonKey = c.season === '春' ? 'spring' : c.season === '夏' ? 'summer' : c.season === '秋' ? 'autumn' : 'winter'
                const seasonInfo = SEASONS[seasonKey]

                return (
                  <div
                    key={c.id}
                    className={`p-4 rounded-2xl border transition-all card-hover cursor-pointer ${
                      completed
                        ? 'border-nebula-purple/50 bg-nebula-purple/8'
                        : 'border-white/10 bg-space-700/30'
                    }`}
                    onClick={() => handleViewConstellation(c.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        seasonInfo ? `bg-gradient-to-br ${seasonInfo.color} opacity-30` : 'bg-space-600/30'
                      }`}>
                        <span className="text-2xl">{completed ? '✦' : '○'}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-display text-white truncate">
                            {c.name}
                          </h3>
                          {completed && (
                            <span className="text-star-gold text-sm">✓</span>
                          )}
                        </div>
                        <p className="text-[11px] text-white/40">
                          {c.nameEn}
                        </p>
                        <p className="text-xs text-white/60 mt-1 line-clamp-2">
                          {c.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2 flex-wrap">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                            c.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                            c.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-red-500/20 text-red-300'
                          }`}>
                            {DIFFICULTY_CONFIG[c.difficulty].label}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50">
                            {seasonInfo?.icon} {c.season}季
                          </span>
                          <span className="text-[10px] text-white/40">
                            ✦ {c.stars.length} 星
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(c.id)
                          }}
                          className={`w-8 h-8 flex items-center justify-center rounded-full
                                    transition-all ${
                            isFavorite
                              ? 'bg-star-gold/20 text-star-gold'
                              : 'bg-space-700/60 text-white/30 hover:text-star-gold hover:bg-space-600/60'
                          }`}
                        >
                          {isFavorite ? '★' : '☆'}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleStartObservation(c.id)
                          }}
                          className="w-8 h-8 flex items-center justify-center rounded-full
                                   bg-nebula-purple/20 text-nebula-cyan hover:bg-nebula-purple/30
                                   transition-all"
                          title="开始观测"
                        >
                          ▶
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
