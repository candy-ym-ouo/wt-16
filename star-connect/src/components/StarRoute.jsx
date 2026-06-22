import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import {
  ROUTE_TYPES,
  DIFFICULTY_PREFERENCE,
  calculateRouteProgress,
  isRoutePerfect
} from '../data/starRoute'
import { getConstellationById } from '../data/constellations'
import { DIFFICULTY_CONFIG } from '../data/constants'
import { formatDate } from '../utils/math'

export default function StarRoute() {
  const {
    setActivePanel,
    setTargetConstellation,
    starRoute,
    generateNewRoute,
    abandonRoute,
    setDifficultyPreference,
    getCurrentRouteProgress,
    getRouteStats,
    getRouteHistory,
    openAtlasDetail
  } = useGameStore()

  const [viewMode, setViewMode] = useState('current')
  const [selectedType, setSelectedType] = useState(null)

  const currentRoute = starRoute.currentRoute
  const routeProgress = getCurrentRouteProgress()
  const routeStats = getRouteStats()
  const routeHistory = getRouteHistory()
  const preference = DIFFICULTY_PREFERENCE[starRoute.difficultyPreference]

  const handleStartRoute = (typeId) => {
    generateNewRoute(typeId)
    setSelectedType(null)
    setViewMode('current')
  }

  const handleStartStep = (constellationId) => {
    setTargetConstellation(constellationId)
    setActivePanel(null)
  }

  const handleViewInAtlas = (constellationId, e) => {
    e.stopPropagation()
    openAtlasDetail(constellationId)
  }

  const renderCurrentRoute = () => {
    if (!currentRoute) {
      return (
        <div className="space-y-5">
          <div className="p-6 rounded-2xl border border-white/10 bg-space-700/20 text-center">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="font-display text-white text-lg mb-2">开启你的观星之旅</h3>
            <p className="text-xs text-white/50 max-w-xs mx-auto leading-relaxed">
              选择一条路线，跟随指引探索星空，每完成一步都有惊喜
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-display text-white/80 flex items-center gap-2">
              <span>✨</span>
              <span>选择路线类型</span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(ROUTE_TYPES).map(([id, type]) => (
                <button
                  key={id}
                  onClick={() => setSelectedType(id)}
                  className={`p-4 rounded-xl border text-left transition-all card-hover ${
                    selectedType === id
                      ? 'border-nebula-cyan/50 bg-nebula-cyan/10'
                      : 'border-white/10 bg-space-800/40'
                  }`}
                >
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <h5 className="text-sm font-display text-white mb-1">{type.name}</h5>
                  <p className="fs-10 text-white/40 leading-tight">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          {selectedType && (
            <div className={`p-4 rounded-2xl border border-white/10 bg-space-700/30 animate-in fade-in slide-in-from-bottom-2`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ROUTE_TYPES[selectedType].color}
                                flex items-center justify-center text-2xl`}>
                  {ROUTE_TYPES[selectedType].icon}
                </div>
                <div>
                  <h4 className="font-display text-white">{ROUTE_TYPES[selectedType].name}</h4>
                  <p className="fs-11 text-white/50">难度偏好：{preference.label}</p>
                </div>
              </div>
              <p className="text-xs text-white/60 mb-4">{ROUTE_TYPES[selectedType].description}</p>
              <button
                onClick={() => handleStartRoute(selectedType)}
                className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all
                           bg-gradient-to-r ${ROUTE_TYPES[selectedType].color} text-white
                           hover:shadow-lg active:scale-[0.98]`}
              >
                开始探索
              </button>
            </div>
          )}

          <div className="space-y-3">
            <h4 className="text-sm font-display text-white/80 flex items-center gap-2">
              <span>⚙️</span>
              <span>难度偏好</span>
            </h4>
            <div className="space-y-2">
              {Object.entries(DIFFICULTY_PREFERENCE).map(([id, pref]) => (
                <button
                  key={id}
                  onClick={() => setDifficultyPreference(id)}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    starRoute.difficultyPreference === id
                      ? 'border-nebula-purple/50 bg-nebula-purple/10'
                      : 'border-white/10 bg-space-800/30 hover:bg-space-700/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-medium text-white">{pref.label}</h5>
                      <p className="fs-10 text-white/40 mt-0.5">{pref.description}</p>
                    </div>
                    {starRoute.difficultyPreference === id && (
                      <span className="text-nebula-cyan">✓</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    }

    const routeType = ROUTE_TYPES[currentRoute.type]

    return (
      <div className="space-y-5">
        <div className={`p-4 rounded-2xl border ${routeType ? '' : 'border-white/10'} bg-space-700/20`}
             style={{
               borderColor: routeType ? undefined : undefined,
               background: routeType ? undefined : undefined
             }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentRoute.color}
                              flex items-center justify-center text-2xl`}>
                {currentRoute.icon}
              </div>
              <div>
                <h3 className="font-display text-white text-base">{currentRoute.name}</h3>
                <p className="fs-11 text-white/50">
                  {routeProgress.completed} / {routeProgress.total} 步 · {routeProgress.percentage}%
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                if (confirm('确定要放弃当前路线吗？进度将不会保存。')) {
                  abandonRoute()
                }
              }}
              className="fs-10 px-2 py-1 rounded-lg bg-red-500/10 text-red-400
                       hover:bg-red-500/20 transition-all"
            >
              放弃
            </button>
          </div>
          <div className="h-2.5 bg-space-900/60 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${currentRoute.color} rounded-full transition-all duration-700`}
              style={{ width: `${routeProgress.percentage}%` }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-display text-white/80 flex items-center gap-2">
            <span>📍</span>
            <span>探索步骤</span>
          </h4>
          <div className="space-y-2">
            {currentRoute.steps.map((step, index) => {
              const c = getConstellationById(step.constellationId)
              if (!c) return null
              const isCompleted = step.status === 'completed'
              const isCurrent = index === currentRoute.currentStepIndex && !isCompleted
              const isLocked = index > currentRoute.currentStepIndex && !isCompleted

              return (
                <div
                  key={step.id}
                  className={`relative p-3 rounded-xl border transition-all ${
                    isCompleted
                      ? 'border-nebula-purple/40 bg-nebula-purple/5'
                      : isCurrent
                      ? 'border-nebula-cyan/50 bg-nebula-cyan/5 ring-1 ring-nebula-cyan/30'
                      : 'border-white/10 bg-space-800/30 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${
                      isCompleted
                        ? `bg-gradient-to-br ${currentRoute.color} text-white`
                        : isCurrent
                        ? 'bg-nebula-cyan/20 text-nebula-cyan'
                        : 'bg-space-600/50 text-white/30'
                    }`}>
                      {isCompleted ? '✓' : step.order}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h5 className={`text-sm font-medium truncate ${
                          isCompleted || isCurrent ? 'text-white' : 'text-white/50'
                        }`}>
                          {c.name}
                        </h5>
                        {step.perfect && (
                          <span className="fs-9 px-1 py-0.5 rounded bg-star-gold/20 text-star-gold">
                            完美
                          </span>
                        )}
                        <span className={`fs-9 px-1.5 py-0.5 rounded ${
                          c.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                          c.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {DIFFICULTY_CONFIG[c.difficulty].label}
                        </span>
                      </div>
                      <p className="fs-10 text-white/40 truncate mt-0.5">
                        {c.description}
                      </p>
                    </div>

                    {isCurrent && (
                      <button
                        onClick={() => handleStartStep(step.constellationId)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                                   bg-gradient-to-r ${currentRoute.color} text-white
                                   hover:shadow-md active:scale-95 flex-shrink-0`}
                      >
                        开始
                      </button>
                    )}

                    {!isCurrent && !isLocked && (
                      <button
                        onClick={(e) => handleViewInAtlas(step.constellationId, e)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg
                                 bg-space-600/30 text-white/40 text-xs
                                 hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                                 flex-shrink-0"
                        title="在图鉴中查看"
                      >
                        📚
                      </button>
                    )}
                  </div>

                  {index < currentRoute.steps.length - 1 && (
                    <div className={`absolute left-5 top-full w-0.5 h-2 -translate-y-0 ${
                      isCompleted ? 'bg-nebula-purple/40' : 'bg-white/10'
                    }`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setActivePanel('tasks')}
            className="p-3 rounded-xl border border-white/10 bg-space-700/20
                     hover:bg-space-700/40 transition-all text-left"
          >
            <div className="text-lg mb-1">📋</div>
            <h5 className="text-xs font-medium text-white">任务面板</h5>
            <p className="fs-10 text-white/40 mt-0.5">查看所有星座任务</p>
          </button>
          <button
            onClick={() => setActivePanel('log')}
            className="p-3 rounded-xl border border-white/10 bg-space-700/20
                     hover:bg-space-700/40 transition-all text-left"
          >
            <div className="text-lg mb-1">📖</div>
            <h5 className="text-xs font-medium text-white">观测日志</h5>
            <p className="fs-10 text-white/40 mt-0.5">查看探索记录</p>
          </button>
        </div>
      </div>
    )
  }

  const renderHistory = () => {
    if (routeHistory.length === 0) {
      return (
        <div className="h-60 flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-3 opacity-30">📜</div>
          <h4 className="text-white/60 font-display mb-2">暂无路线记录</h4>
          <p className="text-xs text-white/40 max-w-xs leading-relaxed">
            完成第一条路线后，记录将显示在这里
          </p>
        </div>
      )
    }

    return (
      <div className="space-y-3">
        {routeHistory.map((route, index) => {
          const routeType = ROUTE_TYPES[route.type]
          const perfect = isRoutePerfect(route)
          const progress = calculateRouteProgress(route)

          return (
            <div
              key={route.id}
              className={`p-4 rounded-xl border transition-all ${
                perfect
                  ? 'border-star-gold/30 bg-star-gold/5'
                  : 'border-white/10 bg-space-700/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${route.color}
                                flex items-center justify-center text-xl flex-shrink-0`}>
                  {route.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-display text-white truncate">{route.name}</h5>
                    {perfect && (
                      <span className="fs-10 px-1.5 py-0.5 rounded-full bg-star-gold/20 text-star-gold">
                        完美路线
                      </span>
                    )}
                  </div>
                  <p className="fs-10 text-white/40 mt-0.5">
                    {progress.completed}/{progress.total} 步 · {formatDate(route.completedAt)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${route.color} rounded-full`}
                        style={{ width: `${progress.percentage}%` }}
                      />
                    </div>
                    <span className="fs-10 text-white/50 font-mono">
                      {progress.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const renderStats = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl border border-white/10 bg-space-700/20">
          <div className="text-2xl font-bold text-nebula-cyan mb-1">
            {routeStats.totalCompleted}
          </div>
          <div className="fs-11 text-white/50">完成路线</div>
        </div>
        <div className="p-4 rounded-xl border border-white/10 bg-space-700/20">
          <div className="text-2xl font-bold text-star-gold mb-1">
            {routeStats.perfectRoutes}
          </div>
          <div className="fs-11 text-white/50">完美路线</div>
        </div>
        <div className="p-4 rounded-xl border border-white/10 bg-space-700/20">
          <div className="text-2xl font-bold text-nebula-purple mb-1">
            {routeStats.totalSteps}
          </div>
          <div className="fs-11 text-white/50">总步数</div>
        </div>
        <div className="p-4 rounded-xl border border-white/10 bg-space-700/20">
          <div className="text-2xl font-bold text-emerald-400 mb-1">
            {routeStats.perfectRate}%
          </div>
          <div className="fs-11 text-white/50">完美率</div>
        </div>
      </div>

      <div className="p-4 rounded-xl border border-white/10 bg-space-700/20">
        <h4 className="text-sm font-display text-white/80 mb-3 flex items-center gap-2">
          <span>🗂️</span>
          <span>路线类型分布</span>
        </h4>
        <div className="space-y-2">
          {Object.entries(ROUTE_TYPES).map(([id, type]) => {
            const count = routeStats.typeStats[id] || 0
            const maxCount = Math.max(1, ...Object.values(routeStats.typeStats))
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0

            return (
              <div key={id} className="flex items-center gap-3">
                <span className="text-lg">{type.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-white/70">{type.name}</span>
                    <span className="fs-10 text-white/40">{count} 条</span>
                  </div>
                  <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${type.color} rounded-full`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">观星路线</h2>
              <p className="text-xs text-white/50 mt-1">
                跟随指引，探索属于你的星空之路
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

          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-base font-bold text-nebula-cyan">
                {routeStats.totalCompleted}
              </div>
              <div className="fs-9 text-white/50">已完成</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-base font-bold text-star-gold">
                {routeStats.perfectRoutes}
              </div>
              <div className="fs-9 text-white/50">完美</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-base font-bold text-emerald-400">
                {routeStats.perfectRate}%
              </div>
              <div className="fs-9 text-white/50">完美率</div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            {[
              { id: 'current', label: '当前路线', icon: '📍' },
              { id: 'history', label: '历史记录', icon: '📜' },
              { id: 'stats', label: '数据统计', icon: '📊' }
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
          {viewMode === 'current' && renderCurrentRoute()}
          {viewMode === 'history' && renderHistory()}
          {viewMode === 'stats' && renderStats()}
        </div>
      </div>
    </div>
  )
}
