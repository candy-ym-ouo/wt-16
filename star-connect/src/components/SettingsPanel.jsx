import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import { DEFAULT_SETTINGS } from '../data/constants'
import { audioManager } from '../modules/AudioManager'
import { useI18n } from '../i18n/useI18n'
import OfflinePackagePanel from './OfflinePackagePanel'

export default function SettingsPanel() {
  const {
    settings,
    updateSettings,
    resetSettings,
    resetProgress,
    setActivePanel,
    getProgress,
    manualSave
  } = useGameStore()
  const { t, language, changeLanguage, supportedLanguages, isLoading } = useI18n()
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [showSavedToast, setShowSavedToast] = useState(false)
  const [showOfflinePanel, setShowOfflinePanel] = useState(false)
  const progress = getProgress()

  const handleSettingChange = (key, value) => {
    audioManager.ensureContext()
    audioManager.playClick()
    updateSettings({ [key]: value })
  }

  const handleLanguageChange = async (code) => {
    audioManager.ensureContext()
    audioManager.playClick()
    await changeLanguage(code)
    updateSettings({ language: code })
  }

  const handleResetSettings = () => {
    audioManager.ensureContext()
    audioManager.playReset()
    resetSettings()
  }

  const handleResetAll = () => {
    audioManager.ensureContext()
    audioManager.playReset()
    resetProgress()
    resetSettings()
    setShowResetConfirm(false)
  }

  const handleManualSave = () => {
    audioManager.ensureContext()
    audioManager.playConnectSuccess()
    manualSave()
    setShowSavedToast(true)
    setTimeout(() => setShowSavedToast(false), 1500)
  }

  const handleClose = () => {
    audioManager.ensureContext()
    audioManager.playPanelClose()
    setActivePanel(null)
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      {showSavedToast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50
                      px-4 py-2 rounded-xl bg-nebula-cyan/20 border border-nebula-cyan/40
                      text-nebula-cyan text-sm font-medium animate-bounce-in">
          {t('settings.saved')}
        </div>
      )}

      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">{t('settings.title')}</h2>
              <p className="text-xs text-white/50 mt-1">
                {t('settings.subtitle')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {settings.autoSave && (
                <div className="flex items-center gap-1.5 fs-10 text-nebula-cyan/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-nebula-cyan animate-pulse" />
                  {t('settings.autoSaving')}
                </div>
              )}
              {!settings.autoSave && (
                <button
                  onClick={handleManualSave}
                  className="text-xs px-3 py-1.5 rounded-lg bg-nebula-cyan/20 border border-nebula-cyan/30
                           text-nebula-cyan hover:bg-nebula-cyan/30 transition-all"
                >
                  {t('settings.manualSave')}
                </button>
              )}
              <button
                onClick={handleClose}
                className="icon-btn"
                aria-label={t('settings.close')}
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-6">
          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              {t('settings.languageSection')}
            </h3>
            <div className="p-4 rounded-xl bg-space-700/30 border border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🌐</span>
                <div>
                  <div className="text-sm text-white">{t('settings.languageLabel')}</div>
                  <div className="fs-10 text-white/40 mt-0.5">{t('settings.languageDesc')}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    disabled={isLoading}
                    className={`py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                      language === lang.code
                        ? 'bg-nebula-purple text-white'
                        : 'bg-space-800/60 text-white/60 hover:bg-space-700/60'
                    } ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {isLoading && language !== lang.code ? (
                      <span className="animate-spin">⏳</span>
                    ) : (
                      <span>{lang.icon}</span>
                    )}
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              {t('settings.experienceSection')}
            </h3>
            <div className="space-y-3">
              <SettingSlider
                label={t('settings.mainVolume')}
                icon="🔊"
                value={settings.volume}
                min={0}
                max={1}
                step={0.1}
                onChange={(v) => handleSettingChange('volume', v)}
                displayValue={`${Math.round(settings.volume * 100)}%`}
              />

              <SettingSlider
                label={t('settings.sfxVolume')}
                icon="🎵"
                value={settings.sfxVolume}
                min={0}
                max={1}
                step={0.1}
                onChange={(v) => handleSettingChange('sfxVolume', v)}
                displayValue={`${Math.round(settings.sfxVolume * 100)}%`}
              />

              <SettingToggle
                label={t('settings.hapticFeedback')}
                icon="📳"
                description={t('settings.hapticFeedbackDesc')}
                value={settings.hapticFeedback}
                onChange={(v) => handleSettingChange('hapticFeedback', v)}
              />

              <SettingToggle
                label={t('settings.autoSave')}
                icon="💾"
                description={t('settings.autoSaveDesc')}
                value={settings.autoSave}
                onChange={(v) => handleSettingChange('autoSave', v)}
              />
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              {t('settings.visualSection')}
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-space-700/30 border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🖼️</span>
                  <div>
                    <div className="text-sm text-white">{t('settings.graphicsQuality')}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['low', 'medium', 'high'].map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSettingChange('graphicsQuality', q)}
                      className={`py-2 rounded-lg text-xs font-medium transition-all ${
                        settings.graphicsQuality === q
                          ? 'bg-nebula-purple text-white'
                          : 'bg-space-800/60 text-white/60 hover:bg-space-700/60'
                      }`}
                    >
                      {q === 'low' ? t('settings.qualityLow') : q === 'medium' ? t('settings.qualityMedium') : t('settings.qualityHigh')}
                    </button>
                  ))}
                </div>
              </div>

              <SettingSlider
                label={t('settings.starDensity')}
                icon="✨"
                value={settings.starDensity}
                min={0.3}
                max={1.5}
                step={0.1}
                onChange={(v) => handleSettingChange('starDensity', v)}
                displayValue={`${Math.round(settings.starDensity * 100)}%`}
              />

              <SettingSlider
                label={t('settings.animationSpeed')}
                icon="🌙"
                value={settings.animationSpeed}
                min={0.2}
                max={2.0}
                step={0.1}
                onChange={(v) => handleSettingChange('animationSpeed', v)}
                displayValue={`${Math.round(settings.animationSpeed * 100)}%`}
              />

              <SettingToggle
                label={t('settings.nebulaEffect')}
                icon="🌌"
                description={t('settings.nebulaEffectDesc')}
                value={settings.showNebula}
                onChange={(v) => handleSettingChange('showNebula', v)}
              />

              <SettingToggle
                label={t('settings.showLabels')}
                icon="🏷️"
                description={t('settings.showLabelsDesc')}
                value={settings.showLabels}
                onChange={(v) => handleSettingChange('showLabels', v)}
              />

              <SettingToggle
                label={t('settings.eyeCareMode')}
                icon="👁️"
                description={t('settings.eyeCareModeDesc')}
                value={settings.eyeCareMode}
                onChange={(v) => handleSettingChange('eyeCareMode', v)}
              />

              <SettingSlider
                label={t('settings.textScale')}
                icon="🔤"
                value={settings.textScale}
                min={0.8}
                max={1.4}
                step={0.05}
                onChange={(v) => handleSettingChange('textScale', v)}
                displayValue={`${Math.round(settings.textScale * 100)}%`}
              />

              <div className="p-4 rounded-xl bg-space-700/30 border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">💡</span>
                  <div>
                    <div className="text-sm text-white">{t('settings.hintIntensity')}</div>
                    <div className="fs-10 text-white/40 mt-0.5">{t('settings.hintIntensityDesc')}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['low', 'medium', 'high'].map((level) => (
                    <button
                      key={level}
                      onClick={() => handleSettingChange('hintIntensity', level)}
                      className={`py-2 rounded-lg text-xs font-medium transition-all ${
                        settings.hintIntensity === level
                          ? 'bg-nebula-purple text-white'
                          : 'bg-space-800/60 text-white/60 hover:bg-space-700/60'
                      }`}
                    >
                      {level === 'low' ? t('settings.hintLow') : level === 'medium' ? t('settings.hintMedium') : t('settings.hintHigh')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              {t('settings.progressSection')}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-nebula-cyan">
                  {progress.constellations}/{progress.totalConstellations}
                </div>
                <div className="fs-10 text-white/50 mt-1">{t('settings.constellations')}</div>
              </div>
              <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-star-gold">
                  {progress.achievements}/{progress.totalAchievements}
                </div>
                <div className="fs-10 text-white/50 mt-1">{t('settings.achievements')}</div>
              </div>
              <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-nebula-purple">
                  {progress.logs}
                </div>
                <div className="fs-10 text-white/50 mt-1">{t('settings.logs')}</div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              离线资料包
            </h3>
            <button
              onClick={() => {
                audioManager.ensureContext()
                audioManager.playClick()
                setShowOfflinePanel(true)
              }}
              className="w-full p-4 rounded-xl bg-space-700/30 border border-white/5
                       hover:border-nebula-purple/30 hover:bg-nebula-purple/5
                       transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📦</span>
                  <div>
                    <div className="text-sm text-white">离线数据管理</div>
                    <div className="fs-11 text-white/40 mt-0.5">
                      管理星座数据、图鉴、成就的离线缓存，保证弱网环境下核心功能可用
                    </div>
                  </div>
                </div>
                <span className="text-nebula-cyan">→</span>
              </div>
            </button>
          </section>

          {showOfflinePanel && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4
                            bg-space-900/80 backdrop-blur-md animate-in fade-in">
              <div className="w-full max-w-md glass-panel max-h-[85vh] overflow-y-auto">
                <OfflinePackagePanel onClose={() => setShowOfflinePanel(false)} />
              </div>
            </div>
          )}

          <section>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1">
              {t('settings.dangerSection')}
            </h3>
            <div className="space-y-2">
              <button
                onClick={handleResetSettings}
                className="w-full p-3 rounded-xl bg-space-700/30 border border-white/5
                         hover:border-yellow-500/30 hover:bg-yellow-500/5
                         transition-all text-sm text-white/80"
              >
                {t('settings.resetSettings')}
              </button>

              {!showResetConfirm ? (
                <button
                  onClick={() => {
                    audioManager.ensureContext()
                    audioManager.playClick()
                    setShowResetConfirm(true)
                  }}
                  className="w-full p-3 rounded-xl bg-space-700/30 border border-red-500/20
                           hover:bg-red-500/10 transition-all text-sm text-red-300"
                >
                  {t('settings.clearAllData')}
                </button>
              ) : (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                  <p className="text-xs text-red-200 mb-3">
                    {t('settings.clearConfirmText')}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={handleResetAll}
                      className="flex-1 py-2 rounded-lg bg-red-500 text-white text-sm font-medium
                               hover:bg-red-600 transition-all"
                    >
                      {t('settings.confirmClear')}
                    </button>
                    <button
                      onClick={() => {
                        audioManager.playClick()
                        setShowResetConfirm(false)
                      }}
                      className="flex-1 py-2 rounded-lg bg-space-800 text-white/80 text-sm
                               hover:bg-space-700 transition-all"
                    >
                      {t('settings.cancel')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          <div className="text-center fs-10 text-white/20 py-2">
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
            <div className="fs-10 text-white/40 mt-0.5">{description}</div>
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
