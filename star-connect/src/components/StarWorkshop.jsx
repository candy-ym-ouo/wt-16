import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import {
  BACKGROUND_STYLES,
  STAR_DENSITY_OPTIONS,
  CONNECTION_EFFECTS,
  PANEL_STYLES,
  PRESET_THEMES
} from '../data/constants'

export default function StarWorkshop() {
  const {
    settings,
    setActivePanel,
    updateWorkshopSettings,
    applyPresetTheme,
    resetWorkshopSettings
  } = useGameStore()

  const [activeTab, setActiveTab] = useState('presets')
  const workshop = settings.workshop

  const handlePresetApply = (presetId) => {
    applyPresetTheme(presetId)
  }

  const handleBackgroundChange = (styleId) => {
    updateWorkshopSettings({ backgroundStyle: styleId })
  }

  const handleStarDensityChange = (density) => {
    updateWorkshopSettings({ starDensity: density })
  }

  const handleConnectionEffectChange = (effectId) => {
    updateWorkshopSettings({ connectionEffect: effectId })
  }

  const handlePanelStyleChange = (styleId) => {
    updateWorkshopSettings({ panelStyle: styleId })
  }

  const handleReset = () => {
    resetWorkshopSettings()
  }

  const tabs = [
    { id: 'presets', label: '主题预设', icon: '🎨' },
    { id: 'background', label: '背景风格', icon: '🌌' },
    { id: 'stars', label: '星点密度', icon: '⭐' },
    { id: 'connections', label: '连线特效', icon: '✨' },
    { id: 'panel', label: '面板样式', icon: '🖼️' }
  ]

  const renderPresets = () => (
    <div className="space-y-4">
      <div className="p-4 rounded-2xl glass-panel-inner">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🎨</span>
          <h4 className="font-display text-white/90 text-sm">快速应用主题</h4>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {PRESET_THEMES.map((preset) => {
            const isActive =
              workshop.backgroundStyle === preset.backgroundStyle &&
              workshop.starDensity === preset.starDensity &&
              workshop.connectionEffect === preset.connectionEffect &&
              workshop.panelStyle === preset.panelStyle

            return (
              <button
                key={preset.id}
                onClick={() => handlePresetApply(preset.id)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'border-nebula-purple/50 bg-nebula-purple/15 ring-1 ring-nebula-purple/30'
                    : 'border-white/10 bg-space-800/40 hover:bg-space-700/40 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nebula-purple/30 to-nebula-cyan/30 flex items-center justify-center text-2xl">
                    {preset.icon}
                  </div>
                  <div className="flex-1">
                    <h5 className={`font-display text-sm ${isActive ? 'text-nebula-cyan' : 'text-white/90'}`}>
                      {preset.name}
                    </h5>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-white/40">
                        {BACKGROUND_STYLES[preset.backgroundStyle]?.name}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-[10px] text-white/40">
                        {Object.values(STAR_DENSITY_OPTIONS).find(d => d.value === preset.starDensity)?.name}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-[10px] text-white/40">
                        {CONNECTION_EFFECTS[preset.connectionEffect]?.name}
                      </span>
                    </div>
                  </div>
                  {isActive && (
                    <span className="text-nebula-cyan text-lg">✓</span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-4 rounded-2xl glass-panel-inner">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚙️</span>
            <h4 className="font-display text-white/90 text-sm">自定义配置</h4>
          </div>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg text-[11px] text-white/60 bg-white/5 hover:bg-white/10 transition-all"
          >
            恢复默认
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {tabs.slice(1).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="p-3 rounded-xl text-left border border-white/10 bg-space-800/40 hover:bg-space-700/40 hover:border-white/20 transition-all"
            >
              <div className="text-xl mb-1">{tab.icon}</div>
              <div className="text-xs text-white/80">{tab.label}</div>
              <div className="text-[10px] text-white/40 mt-0.5">
                {tab.id === 'background' && BACKGROUND_STYLES[workshop.backgroundStyle]?.name}
                {tab.id === 'stars' && Object.values(STAR_DENSITY_OPTIONS).find(d => d.value === workshop.starDensity)?.name}
                {tab.id === 'connections' && CONNECTION_EFFECTS[workshop.connectionEffect]?.name}
                {tab.id === 'panel' && PANEL_STYLES[workshop.panelStyle]?.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderBackgroundStyles = () => (
    <div className="space-y-3">
      {Object.values(BACKGROUND_STYLES).map((style) => {
        const isActive = workshop.backgroundStyle === style.id
        return (
          <button
            key={style.id}
            onClick={() => handleBackgroundChange(style.id)}
            className={`w-full p-4 rounded-xl text-left transition-all border ${
              isActive
                ? 'border-nebula-purple/50 ring-1 ring-nebula-purple/30'
                : 'border-white/10 hover:border-white/20'
            }`}
            style={{
              background: `linear-gradient(135deg, ${style.colors[0]}dd, ${style.colors[1]}dd, ${style.colors[2]}dd)`
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl">
                {style.icon}
              </div>
              <div className="flex-1">
                <h5 className={`font-display text-sm ${isActive ? 'text-nebula-cyan' : 'text-white/90'}`}>
                  {style.name}
                </h5>
                <p className="text-[10px] text-white/50 mt-0.5">{style.description}</p>
              </div>
              {isActive && (
                <span className="text-nebula-cyan text-lg">✓</span>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )

  const renderStarDensity = () => (
    <div className="space-y-3">
      <div className="p-4 rounded-2xl glass-panel-inner">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">⭐</span>
          <h4 className="font-display text-white/90 text-sm">星点密度</h4>
        </div>
        <div className="space-y-3">
          {Object.values(STAR_DENSITY_OPTIONS).map((option) => {
            const isActive = Math.abs(workshop.starDensity - option.value) < 0.01
            return (
              <button
                key={option.id}
                onClick={() => handleStarDensityChange(option.value)}
                className={`w-full p-4 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'border-nebula-purple/50 bg-nebula-purple/15 ring-1 ring-nebula-purple/30'
                    : 'border-white/10 bg-space-800/40 hover:bg-space-700/40 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nebula-purple/20 to-nebula-cyan/20 flex items-center justify-center">
                    <div className="flex gap-0.5">
                      {[...Array(Math.min(5, Math.round(option.value * 2.5)))].map((_, i) => (
                        <span key={i} className="text-xs">·</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className={`font-display text-sm ${isActive ? 'text-nebula-cyan' : 'text-white/90'}`}>
                      {option.name}
                    </h5>
                    <p className="text-[10px] text-white/50 mt-0.5">{option.description}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs font-mono ${isActive ? 'text-nebula-cyan' : 'text-white/60'}`}>
                      ×{option.value}
                    </div>
                  </div>
                  {isActive && (
                    <span className="text-nebula-cyan text-lg">✓</span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-4 rounded-2xl glass-panel-inner">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🎚️</span>
          <h4 className="font-display text-white/90 text-sm">精细调节</h4>
        </div>
        <div className="px-2">
          <input
            type="range"
            min="0.2"
            max="3"
            step="0.1"
            value={workshop.starDensity}
            onChange={(e) => handleStarDensityChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-space-800 rounded-lg appearance-none cursor-pointer accent-nebula-purple"
          />
          <div className="flex justify-between text-[10px] text-white/40 mt-2">
            <span>0.2×</span>
            <span className="text-white/60 font-mono">{workshop.starDensity.toFixed(1)}×</span>
            <span>3.0×</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderConnectionEffects = () => (
    <div className="space-y-3">
      {Object.values(CONNECTION_EFFECTS).map((effect) => {
        const isActive = workshop.connectionEffect === effect.id
        return (
          <button
            key={effect.id}
            onClick={() => handleConnectionEffectChange(effect.id)}
            className={`w-full p-4 rounded-xl text-left transition-all border ${
              isActive
                ? 'border-nebula-purple/50 bg-nebula-purple/15 ring-1 ring-nebula-purple/30'
                : 'border-white/10 bg-space-800/40 hover:bg-space-700/40 hover:border-white/20'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: effect.gradient
                    ? `linear-gradient(135deg, ${effect.gradient[0]}, ${effect.gradient[effect.gradient.length - 1]})`
                    : `${effect.color}20`
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <line
                    x1="4" y1="12" x2="20" y2="12"
                    stroke={effect.color || '#ffffff'}
                    strokeWidth={effect.lineWidth}
                    strokeLinecap="round"
                    opacity={effect.opacity}
                  />
                  <circle cx="4" cy="12" r="3" fill={effect.color || '#ffffff'} />
                  <circle cx="20" cy="12" r="3" fill={effect.color || '#ffffff'} />
                </svg>
              </div>
              <div className="flex-1">
                <h5 className={`font-display text-sm ${isActive ? 'text-nebula-cyan' : 'text-white/90'}`}>
                  {effect.name}
                </h5>
                <p className="text-[10px] text-white/50 mt-0.5">{effect.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  {effect.animate && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-nebula-cyan/20 text-nebula-cyan">
                      动画
                    </span>
                  )}
                  {effect.particles && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-star-gold/20 text-star-gold">
                      粒子
                    </span>
                  )}
                  {effect.dotted && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-400">
                      闪烁
                    </span>
                  )}
                </div>
              </div>
              {isActive && (
                <span className="text-nebula-cyan text-lg">✓</span>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )

  const renderPanelStyles = () => (
    <div className="space-y-3">
      <div className="p-4 rounded-2xl glass-panel-inner">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🖼️</span>
          <h4 className="font-display text-white/90 text-sm">面板外观</h4>
          <span className="text-[10px] text-white/40 ml-auto">
            切换后所有面板同步生效
          </span>
        </div>
      </div>

      {Object.values(PANEL_STYLES).map((style) => {
        const isActive = workshop.panelStyle === style.id
        return (
          <button
            key={style.id}
            onClick={() => handlePanelStyleChange(style.id)}
            className={`w-full p-4 rounded-xl text-left transition-all ${
              isActive ? 'ring-2 ring-nebula-cyan/50' : ''
            }`}
            style={{
              background: style.vars['--panel-bg'],
              border: `1px solid ${style.vars['--panel-border']}`,
              backdropFilter: `blur(${style.vars['--panel-blur']})`,
              WebkitBackdropFilter: `blur(${style.vars['--panel-blur']})`,
              boxShadow: style.vars['--panel-shadow']
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: style.vars['--panel-inner-bg'],
                  border: `1px solid ${style.vars['--panel-inner-border']}`
                }}
              >
                <span className="text-lg">🖼️</span>
              </div>
              <div className="flex-1">
                <h5 className={`font-display text-sm ${isActive ? 'text-nebula-cyan' : 'text-white/90'}`}>
                  {style.name}
                </h5>
                <p className="text-[10px] text-white/50 mt-0.5">{style.description}</p>
              </div>
              {isActive && (
                <span className="text-nebula-cyan text-lg">✓</span>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white flex items-center gap-2">
                <span>🎨</span>
                星空工坊
              </h2>
              <p className="text-xs text-white/50 mt-1">
                打造属于你的专属星空体验
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

          <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-thin pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-white/15 text-white border border-white/20'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {activeTab === 'presets' && renderPresets()}
          {activeTab === 'background' && renderBackgroundStyles()}
          {activeTab === 'stars' && renderStarDensity()}
          {activeTab === 'connections' && renderConnectionEffects()}
          {activeTab === 'panel' && renderPanelStyles()}
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="text-[10px] text-white/40 text-center">
            💡 所有设置将自动保存，立即生效
          </div>
        </div>
      </div>
    </div>
  )
}
