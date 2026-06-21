import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS } from '../data/constellations'
import { DIFFICULTY_CONFIG } from '../data/constants'

export default function TasksPanel() {
  const {
    discoveredConstellations,
    currentTargetConstellation,
    setTargetConstellation,
    setActivePanel,
    isConstellationComplete,
    openAtlasList,
    openAtlasDetail
  } = useGameStore()

  const handleViewInAtlas = (constellationId, e) => {
    e.stopPropagation()
    openAtlasDetail(constellationId)
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">星座探索</h2>
              <p className="text-xs text-white/50 mt-1">
                点击星座开始连线，点亮夜空的奥秘
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
                {discoveredConstellations.length}
              </div>
              <div className="text-[10px] text-white/50">已发现</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-white/80">
                {CONSTELLATIONS.length}
              </div>
              <div className="text-[10px] text-white/50">总星座</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-star-gold">
                {CONSTELLATIONS.filter(c => c.season === '春').length}
              </div>
              <div className="text-[10px] text-white/50">春·冬</div>
            </div>
            <div className="p-2 rounded-lg bg-space-700/40">
              <div className="text-lg font-bold text-nebula-orange">
                {CONSTELLATIONS.filter(c => c.season === '夏' || c.season === '秋').length}
              </div>
              <div className="text-[10px] text-white/50">夏·秋</div>
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
              <span>查看完整星空图鉴</span>
              <span className="text-nebula-cyan">→</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-3">
          {CONSTELLATIONS.map((c) => {
            const completed = isConstellationComplete(c.id)
            const isActive = currentTargetConstellation === c.id
            return (
              <button
                key={c.id}
                onClick={() => {
                  setTargetConstellation(c.id)
                  setActivePanel(null)
                }}
                className={`w-full p-4 rounded-2xl border text-left transition-all card-hover ${
                  isActive
                    ? 'border-nebula-cyan/60 bg-nebula-cyan/10 ring-2 ring-nebula-cyan/30'
                    : completed
                    ? 'border-nebula-purple/50 bg-nebula-purple/8'
                    : 'border-white/10 bg-space-700/30'
                }`}
              >
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-display text-white">
                          {c.name}
                        </h3>
                        {completed && (
                          <span className="text-star-gold animate-pulse-slow">★</span>
                        )}
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                          c.difficulty === 1 ? 'bg-green-500/20 text-green-300' :
                          c.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {DIFFICULTY_CONFIG[c.difficulty].label}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50">
                          {c.season}季
                        </span>
                      </div>
                      <div className="text-[11px] text-white/40 mt-0.5">
                        {c.nameEn}
                      </div>
                      <p className="text-xs text-white/60 mt-2 leading-relaxed">
                        {c.description}
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-[10px] text-white/40">
                        <span>✦ {c.stars.length} 颗主要星</span>
                        <span>⊶ {c.connections.length} 条连线</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => handleViewInAtlas(c.id, e)}
                      className="ml-2 px-2 py-1 rounded-lg bg-space-600/50 text-white/50 text-[10px]
                               hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                               flex-shrink-0"
                      title="在图鉴中查看详情"
                    >
                      📚 详情
                    </button>
                  </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
