import { useState, useMemo } from 'react'
import { useGameStore } from '../stores/gameStore'
import { ACHIEVEMENTS } from '../data/achievements'
import { SEASON_ACHIEVEMENTS } from '../data/seasonPlan'
import { ROUTE_ACHIEVEMENTS } from '../data/starRoute'
import { DAILY_ACHIEVEMENTS } from '../data/dailyCommissions'
import { QUIZ_ACHIEVEMENTS } from '../data/quiz'

const CATEGORY_INFO = {
  all: { name: '全部成就', icon: '🏆', color: 'from-star-gold to-nebula-orange' },
  beginner: { name: '初心者', icon: '🌱', color: 'from-green-500 to-emerald-400' },
  explorer: { name: '探索家', icon: '🧭', color: 'from-blue-500 to-cyan-400' },
  challenge: { name: '挑战者', icon: '🔥', color: 'from-orange-500 to-red-400' },
  collector: { name: '收藏家', icon: '📚', color: 'from-purple-500 to-pink-400' },
  special: { name: '特别成就', icon: '💫', color: 'from-yellow-500 to-orange-400' },
  expedition: { name: '远征成就', icon: '🌙', color: 'from-indigo-500 to-purple-400' },
  season: { name: '四季成就', icon: '🌸', color: 'from-pink-500 to-cyan-400' },
  route: { name: '路线成就', icon: '🗺️', color: 'from-emerald-500 to-teal-400' },
  daily: { name: '每日委托', icon: '📋', color: 'from-amber-500 to-yellow-400' },
  quiz: { name: '知识问答', icon: '❓', color: 'from-sky-500 to-blue-400' },
  event: { name: '活动成就', icon: '🎆', color: 'from-fuchsia-500 via-purple-500 to-indigo-400' },
  hidden: { name: '隐藏成就', icon: '🔮', color: 'from-indigo-500 via-purple-500 to-fuchsia-400' },
  streak: { name: '坚持观测', icon: '🔥', color: 'from-orange-400 to-red-500' }
}

const PANEL_ICONS = {
  atlas: '📚',
  log: '📝',
  seasons: '🌸',
  expedition: '🌙',
  quiz: '❓',
  route: '🗺️',
  tasks: '📋',
  calendar: '📅'
}

export default function Achievements() {
  const {
    unlockedAchievements,
    setActivePanel,
    getProgress,
    getAchievementProgress
  } = useGameStore()

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showLocked, setShowLocked] = useState(true)
  const [hoveredAchievement, setHoveredAchievement] = useState(null)

  const progress = getProgress()
  const allAchievements = [...ACHIEVEMENTS, ...SEASON_ACHIEVEMENTS, ...ROUTE_ACHIEVEMENTS, ...DAILY_ACHIEVEMENTS, ...QUIZ_ACHIEVEMENTS]

  const categoriesInUse = useMemo(() => {
    const cats = new Set(allAchievements.map(a => a.category))
    return ['all', ...Object.keys(CATEGORY_INFO).filter(c => c !== 'all' && cats.has(c))]
  }, [allAchievements])

  const grouped = useMemo(() => {
    let filtered = allAchievements
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(a => a.category === selectedCategory)
    }
    if (!showLocked) {
      filtered = filtered.filter(a => unlockedAchievements.includes(a.id))
    }
    return filtered.reduce((acc, a) => {
      if (!acc[a.category]) acc[a.category] = []
      acc[a.category].push(a)
      return acc
    }, {})
  }, [allAchievements, selectedCategory, showLocked, unlockedAchievements])

  const filteredCount = useMemo(() => {
    return Object.values(grouped).reduce((sum, list) => sum + list.length, 0)
  }, [grouped])

  const getProgressColor = (percentage) => {
    if (percentage >= 100) return 'from-green-400 to-emerald-400'
    if (percentage >= 75) return 'from-nebula-cyan to-teal-400'
    if (percentage >= 50) return 'from-star-gold to-nebula-orange'
    if (percentage >= 25) return 'from-orange-400 to-amber-400'
    return 'from-gray-400 to-gray-500'
  }

  const handleGoToPanel = (panel, e) => {
    e?.stopPropagation()
    setActivePanel(panel)
  }

  const renderAchievementCard = (a, info) => {
    const isUnlocked = unlockedAchievements.includes(a.id)
    const isHiddenLocked = a.hidden && !isUnlocked
    const achProgress = !isUnlocked && !isHiddenLocked ? getAchievementProgress(a) : null
    const displayIcon = isHiddenLocked ? '❓' : a.icon
    const displayName = isHiddenLocked ? '???' : a.name
    const displayDesc = isHiddenLocked ? '解锁后揭晓神秘成就' : a.description
    const isHovered = hoveredAchievement === a.id

    const nearComplete = achProgress && achProgress.percentage >= 75 && achProgress.percentage < 100

    return (
      <div
        key={a.id}
        onMouseEnter={() => setHoveredAchievement(a.id)}
        onMouseLeave={() => setHoveredAchievement(null)}
        onClick={(e) => {
          if (!isUnlocked && !isHiddenLocked && achProgress?.relatedPanel) {
            handleGoToPanel(achProgress.relatedPanel, e)
          }
        }}
        className={`p-3 rounded-xl border transition-all duration-300 relative overflow-hidden ${
          isUnlocked
            ? 'border-white/20 bg-space-700/40 hover:border-nebula-purple/50 hover:shadow-lg hover:shadow-nebula-purple/10'
            : isHiddenLocked
            ? 'border-purple-500/20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 hover:border-purple-500/40'
            : nearComplete
            ? 'border-star-gold/40 bg-gradient-to-br from-star-gold/5 to-nebula-orange/5 hover:border-star-gold/60 hover:shadow-lg hover:shadow-star-gold/10 cursor-pointer'
            : `border-white/5 bg-space-900/40 hover:border-white/15 ${
                achProgress?.relatedPanel ? 'cursor-pointer' : ''
              }`
        }`}
      >
        {nearComplete && !isUnlocked && !isHiddenLocked && (
          <div className="absolute -top-1 -right-1 px-2 py-0.5 rounded-bl-lg rounded-tr-lg bg-gradient-to-r from-star-gold to-nebula-orange text-space-900 fs-9 font-bold animate-pulse">
            即将达成!
          </div>
        )}

        <div className="flex items-start gap-2">
          <div className="relative">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 ${
                isUnlocked
                  ? `bg-gradient-to-br ${info.color} shadow-md`
                  : isHiddenLocked
                  ? 'bg-gradient-to-br from-indigo-700/60 to-purple-700/60 animate-pulse'
                  : `bg-gradient-to-br ${info.color} opacity-30 saturate-50`
              }`}
            >
              {displayIcon}
            </div>
            {!isUnlocked && !isHiddenLocked && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-space-900 border border-white/10 flex items-center justify-center">
                <span className="fs-8 text-white/40">🔒</span>
              </div>
            )}
            {isUnlocked && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border border-space-900 flex items-center justify-center">
                <span className="fs-8 text-white">✓</span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className={`text-xs font-semibold ${
              isUnlocked
                ? 'text-white'
                : isHiddenLocked
                ? 'text-purple-200'
                : 'text-white/70'
            }`}>
              {displayName}
              {a.reward && !isHiddenLocked && (
                <span className="ml-1.5 fs-9 text-star-gold/70">
                  +{a.reward.amount}✨
                </span>
              )}
            </div>
            <div className={`fs-10 mt-0.5 leading-tight ${
              isUnlocked
                ? 'text-white/40'
                : isHiddenLocked
                ? 'text-purple-300/60 italic'
                : 'text-white/40'
            }`}>
              {displayDesc}
            </div>
          </div>
        </div>

        {!isUnlocked && !isHiddenLocked && achProgress && (
          <div className="mt-2.5 space-y-1.5">
            <div className="flex items-center justify-between fs-9">
              <span className={`${
                achProgress.percentage >= 75 ? 'text-star-gold' : 'text-white/40'
              }`}>
                {achProgress.hint}
              </span>
              <span className={`font-mono ${
                achProgress.percentage >= 75 ? 'text-star-gold font-bold' : 'text-white/50'
              }`}>
                {achProgress.current}/{achProgress.target}
              </span>
            </div>
            <div className="h-1.5 bg-space-800/80 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${getProgressColor(achProgress.percentage)} rounded-full transition-all duration-500 ${
                  nearComplete ? 'animate-pulse' : ''
                }`}
                style={{ width: `${achProgress.percentage}%` }}
              />
            </div>
            {achProgress.relatedPanel && (
              <button
                onClick={(e) => handleGoToPanel(achProgress.relatedPanel, e)}
                className={`mt-1 w-full py-1 rounded-md fs-9 flex items-center justify-center gap-1 transition-all ${
                  nearComplete
                    ? 'bg-gradient-to-r from-star-gold/20 to-nebula-orange/20 text-star-gold border border-star-gold/30 hover:from-star-gold/30 hover:to-nebula-orange/30'
                    : 'bg-nebula-purple/10 text-nebula-cyan/80 border border-nebula-purple/20 hover:bg-nebula-purple/20'
                } ${isHovered ? 'opacity-100' : 'opacity-80'}`}
              >
                <span>{PANEL_ICONS[achProgress.relatedPanel] || '→'}</span>
                <span>
                  {achProgress.relatedPanel === 'atlas' && '前往图鉴观测'}
                  {achProgress.relatedPanel === 'log' && '记录观测日志'}
                  {achProgress.relatedPanel === 'seasons' && '查看季节计划'}
                  {achProgress.relatedPanel === 'expedition' && '开始夜间远征'}
                  {achProgress.relatedPanel === 'quiz' && '前往百科问答'}
                  {achProgress.relatedPanel === 'route' && '规划观星路线'}
                  {achProgress.relatedPanel === 'tasks' && '完成每日委托'}
                  {achProgress.relatedPanel === 'calendar' && '查看观测日历'}
                </span>
              </button>
            )}
          </div>
        )}

        {a.hidden && isUnlocked && (
          <div className="mt-2 flex items-center gap-1">
            <span className="fs-9 px-1.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
              🔮 隐藏成就
            </span>
          </div>
        )}

        {isUnlocked && a.reward && (
          <div className="mt-2 flex items-center gap-1">
            <span className="fs-9 px-1.5 py-0.5 rounded-md bg-star-gold/15 text-star-gold/80 border border-star-gold/20">
              🎁 奖励: {a.reward.amount} 星尘
            </span>
          </div>
        )}
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
              <h2 className="text-xl font-display text-white">成就系统</h2>
              <p className="text-xs text-white/50 mt-1">
                解锁你的星空里程碑
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

          <div className="mt-4">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-white/60">总体进度</span>
              <span className="text-star-gold font-mono">
                {progress.achievements} / {progress.totalAchievements}
              </span>
            </div>
            <div className="h-3 bg-space-900/80 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-star-gold via-nebula-orange to-nebula-purple rounded-full transition-all duration-700"
                style={{
                  width: `${progress.totalAchievements > 0
                    ? (progress.achievements / progress.totalAchievements) * 100
                    : 0}%`
                }}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {categoriesInUse.map(catId => {
              const catInfo = CATEGORY_INFO[catId]
              if (!catInfo) return null
              const isActive = selectedCategory === catId
              const catList = catId === 'all'
                ? allAchievements
                : allAchievements.filter(a => a.category === catId)
              const catUnlocked = catList.filter(a => unlockedAchievements.includes(a.id)).length
              return (
                <button
                  key={catId}
                  onClick={() => setSelectedCategory(catId)}
                  className={`px-2.5 py-1.5 rounded-lg fs-10 flex items-center gap-1 transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${catInfo.color} text-white shadow-md`
                      : 'bg-space-700/30 text-white/50 border border-transparent hover:bg-space-600/30 hover:text-white/70'
                  }`}
                >
                  <span>{catInfo.icon}</span>
                  <span>{catInfo.name}</span>
                  <span className={`ml-0.5 px-1 rounded opacity-80 ${
                    isActive ? 'bg-white/20' : 'bg-white/5'
                  }`}>
                    {catUnlocked}/{catList.length}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3 fs-10 text-white/40">
              <span>显示 {filteredCount} 个成就</span>
              {selectedCategory !== 'all' && (
                <span className="text-nebula-cyan/60">
                  分类进度 {Object.values(grouped).flat().filter(a => unlockedAchievements.includes(a.id)).length}
                  /{Object.values(grouped).flat().length}
                </span>
              )}
            </div>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={showLocked}
                onChange={(e) => setShowLocked(e.target.checked)}
                className="w-3.5 h-3.5 rounded bg-space-700 border-white/20 text-nebula-purple focus:ring-nebula-purple"
              />
              <span className="fs-10 text-white/50">显示未解锁</span>
            </label>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-5">
          {Object.entries(grouped).length === 0 ? (
            <div className="h-40 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3 opacity-30">🏆</div>
              <p className="text-sm text-white/40">
                {showLocked ? '该分类暂无成就' : '还没有解锁任何成就，开始探索星空吧！'}
              </p>
            </div>
          ) : (
            Object.entries(grouped).map(([category, list]) => {
              const info = CATEGORY_INFO[category]
              if (!info) return null
              const unlocked = list.filter(a => unlockedAchievements.includes(a.id)).length
              const inProgress = list.filter(a => {
                if (unlockedAchievements.includes(a.id) || a.hidden) return false
                const p = getAchievementProgress(a)
                return p && p.percentage > 0 && p.percentage < 100
              }).length
              return (
                <div key={category}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{info.icon}</span>
                    <h3 className="font-display text-white/90 text-sm">
                      {info.name}
                    </h3>
                    <span className="fs-10 text-white/40 ml-auto flex items-center gap-2">
                      <span>{unlocked} / {list.length}</span>
                      {inProgress > 0 && (
                        <span className="px-1.5 py-0.5 rounded bg-star-gold/15 text-star-gold/70">
                          进行中 {inProgress}
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="mb-3 h-1 bg-space-800/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${info.color} rounded-full transition-all duration-500`}
                      style={{ width: `${list.length > 0 ? (unlocked / list.length) * 100 : 0}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {list.map((a) => renderAchievementCard(a, info))}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
