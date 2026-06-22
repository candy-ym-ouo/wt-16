import { useState, useRef } from 'react'
import { useGameStore } from '../stores/gameStore'
import { SAVE_SLOT_CONFIG } from '../data/constants'
import { audioManager } from '../modules/AudioManager'
import { useI18n } from '../i18n/useI18n'

const formatDate = (timestamp) => {
  if (!timestamp) return '-'
  const date = new Date(timestamp)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default function SaveSlotManager() {
  const {
    saveSlots,
    currentSaveId,
    createSave,
    switchSave,
    deleteSave,
    renameSave,
    duplicateSave,
    exportSave,
    importSave
  } = useGameStore()
  
  const { t, language } = useI18n()
  const [toast, setToast] = useState(null)
  const [editingSaveId, setEditingSaveId] = useState(null)
  const [editName, setEditName] = useState('')
  const [confirmDialog, setConfirmDialog] = useState(null)
  const fileInputRef = useRef(null)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 2000)
  }

  const handleCreateSave = () => {
    audioManager.ensureContext()
    audioManager.playClick()
    const name = prompt(t('settings.enterSaveName'), `${t('settings.newSaveName')} ${saveSlots.length + 1}`)
    if (name === null) return
    
    const result = createSave(name.trim() || `${t('settings.newSaveName')} ${saveSlots.length + 1}`)
    if (result.success) {
      showToast(t('settings.createSuccess'))
    } else {
      showToast(result.error, 'error')
    }
  }

  const handleSwitchSave = (saveId) => {
    if (saveId === currentSaveId) return
    
    audioManager.ensureContext()
    audioManager.playClick()
    
    if (!confirm(t('settings.confirmSwitch'))) return
    
    const result = switchSave(saveId)
    if (result.success) {
      const slot = saveSlots.find(s => s.id === saveId)
      showToast(`${t('settings.switchSuccess')}: ${slot?.name}`)
    } else {
      showToast(result.error, 'error')
    }
  }

  const handleDeleteSave = (saveId) => {
    audioManager.ensureContext()
    audioManager.playReset()
    
    setConfirmDialog({
      type: 'delete',
      saveId,
      message: t('settings.confirmDelete')
    })
  }

  const confirmDelete = () => {
    if (!confirmDialog) return
    
    const result = deleteSave(confirmDialog.saveId)
    if (result.success) {
      showToast(t('settings.deleteSuccess'))
    } else {
      showToast(result.error, 'error')
    }
    setConfirmDialog(null)
  }

  const handleStartRename = (slot) => {
    audioManager.ensureContext()
    audioManager.playClick()
    setEditingSaveId(slot.id)
    setEditName(slot.name)
  }

  const handleFinishRename = () => {
    if (!editingSaveId || !editName.trim()) {
      setEditingSaveId(null)
      return
    }
    
    const result = renameSave(editingSaveId, editName.trim())
    if (result.success) {
      showToast(t('settings.renameSuccess'))
    } else {
      showToast(result.error, 'error')
    }
    setEditingSaveId(null)
    setEditName('')
  }

  const handleDuplicateSave = (saveId) => {
    audioManager.ensureContext()
    audioManager.playClick()
    
    const slot = saveSlots.find(s => s.id === saveId)
    const result = duplicateSave(saveId)
    if (result.success) {
      showToast(t('settings.duplicateSuccess'))
    } else {
      showToast(result.error, 'error')
    }
  }

  const handleExportSave = (saveId) => {
    audioManager.ensureContext()
    audioManager.playConnectSuccess()
    
    const result = exportSave(saveId)
    if (result.success) {
      const dataStr = JSON.stringify(result.data, null, 2)
      const blob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      const slot = saveSlots.find(s => s.id === saveId)
      a.download = `starconnect_save_${slot?.name || 'export'}_${Date.now()}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      showToast(t('settings.exportSuccess'))
    } else {
      showToast(result.error, 'error')
    }
  }

  const handleImportClick = () => {
    audioManager.ensureContext()
    audioManager.playClick()
    fileInputRef.current?.click()
  }

  const handleImportFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result)
        const result = importSave(data)
        if (result.success) {
          showToast(t('settings.importSuccess'))
        } else {
          showToast(result.error, 'error')
        }
      } catch (err) {
        showToast(t('settings.importError'), 'error')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const canCreateSave = saveSlots.length < SAVE_SLOT_CONFIG.MAX_SLOTS

  return (
    <div className="space-y-4">
      {toast && (
        <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl text-sm font-medium animate-bounce-in
          ${toast.type === 'error' ? 'bg-red-500/20 border border-red-500/40 text-red-400' : 'bg-nebula-cyan/20 border border-nebula-cyan/40 text-nebula-cyan'}`}>
          {toast.message}
        </div>
      )}

      {confirmDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-space-900/80 backdrop-blur-sm">
          <div className="glass-panel p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-display text-white mb-4">⚠️ 确认操作</h3>
            <p className="text-white/70 text-sm mb-6">{confirmDialog.message}</p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDialog(null)}
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 transition-all text-sm"
              >
                {t('settings.cancel')}
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 hover:bg-red-500/30 transition-all text-sm"
              >
                {t('settings.confirmClear')}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-white">{t('settings.saveSlotsTitle')}</h3>
          <p className="text-xs text-white/50 mt-0.5">{t('settings.saveSlotsDesc')}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40">
            {saveSlots.length} / {SAVE_SLOT_CONFIG.MAX_SLOTS}
          </span>
        </div>
      </div>

      <div className="grid gap-3">
        {saveSlots.map((slot) => (
          <div
            key={slot.id}
            className={`p-4 rounded-xl border transition-all ${
              slot.id === currentSaveId
                ? 'bg-nebula-purple/20 border-nebula-purple/40 ring-2 ring-nebula-purple/30'
                : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {slot.id === currentSaveId && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-nebula-purple/30 text-nebula-purple font-medium">
                      {t('settings.currentSave')}
                    </span>
                  )}
                  {editingSaveId === slot.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      onBlur={handleFinishRename}
                      onKeyDown={(e) => e.key === 'Enter' && handleFinishRename()}
                      className="flex-1 bg-transparent border border-nebula-cyan/40 rounded px-2 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-nebula-cyan/50"
                      autoFocus
                    />
                  ) : (
                    <h4 className="text-white font-medium truncate">{slot.name}</h4>
                  )}
                </div>
                
                <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                  <div className="text-white/50">
                    <span className="block text-white/30">{t('settings.saveCreatedAt')}</span>
                    {formatDate(slot.createdAt)}
                  </div>
                  <div className="text-white/50">
                    <span className="block text-white/30">{t('settings.saveLastPlayed')}</span>
                    {formatDate(slot.lastPlayedAt)}
                  </div>
                </div>

                {slot.preview && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-xs text-white/40 mb-2">{t('settings.savePreview')}</p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="flex items-center gap-1 text-white/60">
                        <span>✨</span>
                        {t('settings.discoveredConstellations')}: {slot.preview.discoveredConstellations || 0}
                      </span>
                      <span className="flex items-center gap-1 text-white/60">
                        <span>🏆</span>
                        {t('settings.unlockedAchievements')}: {slot.preview.unlockedAchievements || 0}
                      </span>
                      <span className="flex items-center gap-1 text-white/60">
                        <span>📝</span>
                        {t('settings.observationLogs')}: {slot.preview.observationLogs || 0}
                      </span>
                      {slot.preview.observationCalendar && (
                        <>
                          <span className="flex items-center gap-1 text-white/60">
                            <span>💫</span>
                            {t('settings.totalStardust')}: {slot.preview.observationCalendar.stardust || 0}
                          </span>
                          <span className="flex items-center gap-1 text-white/60">
                            <span>📅</span>
                            {t('settings.totalCheckinDays')}: {slot.preview.observationCalendar.totalCheckinDays || 0}
                          </span>
                        </>
                      )}
                      <span className="flex items-center gap-1 text-white/60">
                        <span>🌟</span>
                        {t('settings.totalObservations')}: {slot.preview.totalObservations || 0}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                {slot.id !== currentSaveId && (
                  <button
                    onClick={() => handleSwitchSave(slot.id)}
                    className="px-3 py-1.5 text-xs rounded-lg bg-nebula-cyan/20 border border-nebula-cyan/30 text-nebula-cyan hover:bg-nebula-cyan/30 transition-all"
                  >
                    {t('settings.switchSave')}
                  </button>
                )}
                <div className="flex gap-1">
                  <button
                    onClick={() => handleStartRename(slot)}
                    className="p-1.5 text-xs rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all"
                    title={t('settings.renameSave')}
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDuplicateSave(slot.id)}
                    className="p-1.5 text-xs rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all"
                    title={t('settings.duplicateSave')}
                  >
                    📋
                  </button>
                  <button
                    onClick={() => handleExportSave(slot.id)}
                    className="p-1.5 text-xs rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all"
                    title={t('settings.exportSave')}
                  >
                    📤
                  </button>
                  {slot.id !== 'default' && slot.id !== currentSaveId && (
                    <button
                      onClick={() => handleDeleteSave(slot.id)}
                      className="p-1.5 text-xs rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
                      title={t('settings.deleteSave')}
                    >
                      🗑️
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {Array.from({ length: Math.max(0, SAVE_SLOT_CONFIG.MAX_SLOTS - saveSlots.length) }).map((_, i) => (
          <div
            key={`empty-${i}`}
            className="p-4 rounded-xl border border-dashed border-white/10 bg-white/[0.02] flex items-center justify-center"
          >
            <span className="text-sm text-white/30">{t('settings.saveSlotEmpty')}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={handleCreateSave}
          disabled={!canCreateSave}
          className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
            canCreateSave
              ? 'bg-nebula-purple/20 border border-nebula-purple/40 text-nebula-purple hover:bg-nebula-purple/30'
              : 'bg-white/5 border border-white/10 text-white/30 cursor-not-allowed'
          }`}
        >
          {t('settings.createSave')}
        </button>
        <button
          onClick={handleImportClick}
          disabled={!canCreateSave}
          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
            canCreateSave
              ? 'bg-nebula-cyan/20 border border-nebula-cyan/40 text-nebula-cyan hover:bg-nebula-cyan/30'
              : 'bg-white/5 border border-white/10 text-white/30 cursor-not-allowed'
          }`}
        >
          {t('settings.importSave')}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleImportFile}
          className="hidden"
        />
      </div>
    </div>
  )
}
