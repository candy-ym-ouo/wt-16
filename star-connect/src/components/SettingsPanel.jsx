import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import { DEFAULT_SETTINGS } from '../data/constants'

export default function SettingsPanel() {
  const {
    settings,
    updateSettings,
    resetSettings,
    resetProgress,
    setActivePanel,
    getProgress
  } = useGameStore()
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const progress = getProgress()

  const handleResetAll = () => {
    resetProgress()
    resetSettings()
    setShowResetConfirm(false)
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">设置</h2>
              <p className="text-xs text-white/50 mt-1">
                定制你的观星体验
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
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-6">
          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              🎮 体验设置
            </h3>
            <div className="space-y-3">
              <SettingSlider
                label="音效音量"
                icon="🔊"
                value={settings.sfxVolume}
                min={0}
                max={1}
                step={0.1}
                onChange={(v) => updateSettings({ sfxVolume: v })}
                displayValue={`${Math.round(settings.sfxVolume * 100)}%`}
              />

              <SettingToggle
                label="触控反馈"
                icon="📳"
                description="点击时触发震动反馈"
                value={settings.hapticFeedback}
                onChange={(v) => updateSettings({ hapticFeedback: v })}
              />

              <SettingToggle
                label="自动保存"
                icon="💾"
                description="自动保存进度到本地"
                value={settings.autoSave}
                onChange={(v) => updateSettings({ autoSave: v })}
              />
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              🎨 画面设置
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-space-700/30 border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🖼️</span>
                  <div>
                    <div className="text-sm text-white">画质等级</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['low', 'medium', 'high'].map((q) => (
                    <button
                      key={q}
                      onClick={() => updateSettings({ graphicsQuality: q })}
                      className={`py-2 rounded-lg text-xs font-medium transition-all ${
                        settings.graphicsQuality === q
                          ? 'bg-nebula-purple text-white'
                          : 'bg-space-800/60 text-white/60 hover:bg-space-700/60'
                      }`}
                    >
                      {q === 'low' ? '省电' : q === 'medium' ? '均衡' : '极致'}
                    </button>
                  ))}
                </div>
              </div>

              <SettingSlider
                label="星星密度"
                icon="✨"
                value={settings.starDensity}
                min={0.3}
                max={1.5}
                step={0.1}
                onChange={(v) => updateSettings({ starDensity: v })}
                displayValue={`${Math.round(settings.starDensity * 100)}%`}
              />

              <SettingSlider
                label="动画速度"
                icon="🌙"
                value={settings.animationSpeed}
                min={0.2}
                max={2.0}
                step={0.1}
                onChange={(v) => updateSettings({ animationSpeed: v })}
                displayValue={`${Math.round(settings.animationSpeed * 100)}%`}
              />

              <SettingToggle
                label="星云效果"
                icon="🌌"
                description="显示背景中的彩色星云"
                value={settings.showNebula}
                onChange={(v) => updateSettings({ showNebula: v })}
              />

              <SettingToggle
                label="显示星名"
                icon="🏷️"
                description="悬停时显示星星名称"
                value={settings.showLabels}
                onChange={(v) => updateSettings({ showLabels: v })}
              />
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              📊 当前进度
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-nebula-cyan">
                  {progress.constellations}/{progress.totalConstellations}
                </div>
                <div className="text-[10px] text-white/50 mt-1">星座</div>
              </div>
              <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-star-gold">
                  {progress.achievements}/{progress.totalAchievements}
                </div>
                <div className="text-[10px] text-white/50 mt-1">成就</div>
              </div>
              <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-nebula-purple">
                  {progress.logs}
                </div>
                <div className="text-[10px] text-white/50 mt-1">日志</div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              ⚠️ 危险操作
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  resetSettings()
                }}
                className="w-full p-3 rounded-xl bg-space-700/30 border border-white/5
                         hover:border-yellow-500/30 hover:bg-yellow-500/5
                         transition-all text-sm text-white/80"
              >
                🔄 恢复默认设置
              </button>

              {!showResetConfirm ? (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="w-full p-3 rounded-xl bg-space-700/30 border border-red-500/20
                           hover:bg-red-500/10 transition-all text-sm text-red-300"
                >
                  🗑️ 清空所有数据
                </button>
              ) : (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                  <p className="text-xs text-red-200 mb-3">
                    确定要清空所有进度、成就和日志吗？此操作无法撤销。
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={handleResetAll}
                      className="flex-1 py-2 rounded-lg bg-red-500 text-white text-sm font-medium
                               hover:bg-red-600 transition-all"
                    >
                      确认清空
                    </button>
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      className="flex-1 py-2 rounded-lg bg-space-800 text-white/80 text-sm
                               hover:bg-space-700 transition-all"
                    >
                      取消
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          <div className="text-center text-[10px] text-white/20 py-2">
            StarConnect v1.0.0 · Made with ✨ for stargazers
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingSlider({ label, icon, value, min, max, step, onChange, displayValue }) {
  return (
    <div className="p-4 rounded-xl bg-space-700/30 border border-white/5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-sm text-white">{label}</span>
        </div>
        <span className="text-xs font-mono text-nebula-cyan">{displayValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 rounded-full bg-space-900 appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-gradient-to-r
                   [&::-webkit-slider-thumb]:from-nebula-purple [&::-webkit-slider-thumb]:to-nebula-cyan
                   [&::-webkit-slider-thumb]:shadow-lg"
      />
    </div>
  )
}

function SettingToggle({ label, icon, description, value, onChange }) {
  return (
    <div className="p-4 rounded-xl bg-space-700/30 border border-white/5
                    flex items-center justify-between">
      <div className="flex items-start gap-2">
        <span className="text-lg">{icon}</span>
        <div>
          <div className="text-sm text-white">{label}</div>
          {description && (
            <div className="text-[10px] text-white/40 mt-0.5">{description}</div>
          )}
        </div>
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`w-12 h-6 rounded-full transition-all duration-300 relative ${
          value ? 'bg-gradient-to-r from-nebula-purple to-nebula-cyan' : 'bg-space-900/80'
        }`}
      >
        <div
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md
                      transition-all duration-300 ${
                        value ? 'left-[26px]' : 'left-0.5'
                      }`}
        />
      </button>
    </div>
  )
}
