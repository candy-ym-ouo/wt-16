import { useState } from 'react'
import { useOffline } from '../modules/offline/useOffline.js'
import { DATA_CATEGORIES, CACHE_PRIORITY } from '../modules/offline/constants.js'

export default function OfflinePackagePanel({ onClose }) {
  const {
    status,
    installProgress,
    isOnline,
    isWeakConnection,
    installPackage,
    clearCache,
    exportData,
    importData,
    refreshStatus
  } = useOffline()

  const [exportDataResult, setExportDataResult] = useState(null)
  const [actionResult, setActionResult] = useState(null)

  const handleExport = async () => {
    try {
      const data = await exportData()
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `starconnect-backup-${new Date().toISOString().slice(0, 10)}.json`
      a.click()
      URL.revokeObjectURL(url)
      setActionResult({ type: 'success', message: '数据导出成功' })
    } catch (e) {
      setActionResult({ type: 'error', message: `导出失败: ${e.message}` })
    }
    setTimeout(() => setActionResult(null), 3000)
  }

  const handleImport = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (ev) => {
      try {
        const data = JSON.parse(ev.target.result)
        await importData(data)
        setActionResult({ type: 'success', message: '数据导入成功' })
      } catch (err) {
        setActionResult({ type: 'error', message: `导入失败: ${err.message}` })
      }
      setTimeout(() => setActionResult(null), 3000)
    }
    reader.readAsText(file)
  }

  const priorityLabels = {
    [CACHE_PRIORITY.CRITICAL]: { label: '核心', color: 'bg-red-500/20 text-red-300' },
    [CACHE_PRIORITY.HIGH]: { label: '高', color: 'bg-orange-500/20 text-orange-300' },
    [CACHE_PRIORITY.MEDIUM]: { label: '中', color: 'bg-yellow-500/20 text-yellow-300' },
    [CACHE_PRIORITY.LOW]: { label: '低', color: 'bg-emerald-500/20 text-emerald-300' }
  }

  const categories = Object.values(DATA_CATEGORIES)

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-display text-white">离线资料包管理</h3>
          <p className="text-xs text-white/50 mt-1">管理离线数据、缓存策略和数据备份</p>
        </div>
        <button
          onClick={onClose}
          className="icon-btn"
        >
          ✕
        </button>
      </div>

      {actionResult && (
        <div className={`p-3 rounded-xl text-xs ${
          actionResult.type === 'success'
            ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
            : 'bg-red-500/15 border border-red-500/30 text-red-300'
        }`}>
          {actionResult.message}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-space-700/40 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">
              {status?.backend === 'indexedDB' ? '🗄️' : status?.backend === 'localStorage' ? '💾' : '🧠'}
            </span>
            <span className="text-xs text-white/50">存储后端</span>
          </div>
          <div className="text-lg font-display text-white">
            {status?.backend === 'indexedDB' ? 'IndexedDB' : status?.backend === 'localStorage' ? 'LocalStorage' : '内存'}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-space-700/40 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">📦</span>
            <span className="text-xs text-white/50">数据包状态</span>
          </div>
          <div className="text-lg font-display">
            {status?.package?.isCurrent ? (
              <span className="text-emerald-300">✓ 最新</span>
            ) : status?.package?.installed ? (
              <span className="text-yellow-300">⚠ 需更新</span>
            ) : (
              <span className="text-red-300">✕ 未安装</span>
            )}
          </div>
        </div>
      </div>

      {installProgress && (
        <div className="p-4 rounded-2xl bg-nebula-purple/10 border border-nebula-purple/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-nebula-cyan font-medium">
              {installProgress.message || '安装中...'}
            </span>
            <span className="text-xs text-white/50 font-mono">
              {installProgress.progress || 0}%
            </span>
          </div>
          <div className="w-full h-2 bg-space-600/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan transition-all duration-300"
              style={{ width: `${installProgress.progress || 0}%` }}
            />
          </div>
        </div>
      )}

      <div className="p-4 rounded-2xl bg-space-700/40 border border-white/5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-white">数据安装</h4>
            <p className="text-[11px] text-white/40 mt-0.5">
              {isOnline
                ? isWeakConnection
                  ? '网络较弱，建议仅安装核心数据'
                  : '网络良好，可安装完整数据包'
                : '离线状态下无法安装更新'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => installPackage(true)}
              disabled={!isOnline}
              className="px-4 py-2 rounded-xl text-xs font-medium
                       bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {status?.package?.installed ? '更新数据包' : '安装离线包'}
            </button>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-white/5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-3">
                <span className={`px-2 py-0.5 rounded text-[10px] ${priorityLabels[cat.priority].color}`}>
                  {priorityLabels[cat.priority].label}
                </span>
                <div>
                  <div className="text-xs text-white/80">{cat.name}</div>
                  <div className="text-[10px] text-white/40">{cat.description} · {cat.size}</div>
                </div>
              </div>
              <span className="text-[10px] text-white/50 font-mono">
                {status?.storeCounts?.[cat.store] || 0} 条
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-space-700/40 border border-white/5 space-y-3">
        <h4 className="text-sm font-medium text-white">图片缓存</h4>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-white/70">
              {status?.imageCache?.totalItems || 0} 张图片 · {status?.imageCache?.totalSizeMB || 0} MB
            </div>
            <div className="w-40 h-1.5 mt-1 bg-space-600/60 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  parseFloat(status?.imageCache?.usagePercent || 0) > 80
                    ? 'bg-red-500'
                    : parseFloat(status?.imageCache?.usagePercent || 0) > 50
                    ? 'bg-yellow-500'
                    : 'bg-emerald-500'
                }`}
                style={{ width: `${status?.imageCache?.usagePercent || 0}%` }}
              />
            </div>
          </div>
          <button
            onClick={() => clearCache({ imagesOnly: true })}
            className="px-3 py-1.5 rounded-lg text-[11px] bg-space-600/60 text-white/70
                     hover:bg-red-500/20 hover:text-red-300 border border-white/5 transition-all"
          >
            清理图片
          </button>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-space-700/40 border border-white/5 space-y-3">
        <h4 className="text-sm font-medium text-white">数据备份</h4>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleExport}
            className="py-2.5 px-3 rounded-xl text-xs font-medium
                     bg-emerald-500/15 border border-emerald-500/30 text-emerald-300
                     hover:bg-emerald-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>📤</span> 导出备份
          </button>
          <label className="cursor-pointer">
            <input
              type="file"
              accept="application/json"
              onChange={handleImport}
              className="hidden"
            />
            <div className="py-2.5 px-3 rounded-xl text-xs font-medium text-center
                          bg-blue-500/15 border border-blue-500/30 text-blue-300
                          hover:bg-blue-500/25 transition-all flex items-center justify-center gap-2">
              <span>📥</span> 导入备份
            </div>
          </label>
        </div>
        <div className="pt-2 border-t border-white/5 flex gap-2">
          <button
            onClick={() => clearCache()}
            className="flex-1 py-2 rounded-xl text-[11px]
                     bg-space-600/60 text-white/60 hover:bg-orange-500/20 hover:text-orange-300
                     border border-white/5 transition-all"
          >
            清除临时缓存
          </button>
          <button
            onClick={() => {
              if (confirm('确定要清除所有离线数据吗？此操作不可恢复')) {
                clearCache({ allData: true })
              }
            }}
            className="flex-1 py-2 rounded-xl text-[11px]
                     bg-space-600/60 text-white/60 hover:bg-red-500/20 hover:text-red-300
                     border border-white/5 transition-all"
          >
            清除所有数据
          </button>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={refreshStatus}
          className="px-4 py-2 rounded-xl text-xs bg-space-600/60 text-white/70
                   hover:bg-space-500/60 border border-white/5 transition-all
                   flex items-center gap-2"
        >
          <span>↻</span> 刷新状态
        </button>
      </div>
    </div>
  )
}
