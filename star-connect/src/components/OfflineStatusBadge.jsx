import { useEffect, useState } from 'react'
import { useOffline } from '../modules/offline/useOffline.js'

export default function OfflineStatusBadge({ onClick }) {
  const {
    networkStatus,
    isOnline,
    isWeakConnection,
    status,
    installProgress,
    installPackage,
    refreshStatus
  } = useOffline()

  const [showDetails, setShowDetails] = useState(false)

  const getStatusConfig = () => {
    if (!isOnline) {
      return {
        icon: '📡',
        label: '离线',
        sublabel: '网络不可用',
        bgColor: 'bg-red-500/20',
        borderColor: 'border-red-500/40',
        textColor: 'text-red-300',
        dotColor: 'bg-red-400'
      }
    }
    if (isWeakConnection) {
      return {
        icon: '⚠️',
        label: '弱网',
        sublabel: '使用缓存数据',
        bgColor: 'bg-yellow-500/20',
        borderColor: 'border-yellow-500/40',
        textColor: 'text-yellow-300',
        dotColor: 'bg-yellow-400 animate-pulse'
      }
    }
    return {
      icon: '✓',
      label: '在线',
      sublabel: '网络正常',
      bgColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-500/40',
      textColor: 'text-emerald-300',
      dotColor: 'bg-emerald-400'
    }
  }

  const config = getStatusConfig()

  const handleClick = () => {
    setShowDetails(v => !v)
    if (onClick) onClick()
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all
                    hover:scale-105 active:scale-95 ${config.bgColor} ${config.borderColor}`}
      >
        <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />
        <span className={`text-xs font-medium ${config.textColor}`}>
          {config.icon} {config.label}
        </span>
      </button>

      {showDetails && (
        <div className="absolute top-full mt-2 right-0 w-72 rounded-2xl border border-white/10
                        bg-space-800/95 backdrop-blur-xl p-4 z-50 shadow-2xl animate-in fade-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-display text-white">离线状态</h4>
            <button
              onClick={() => setShowDetails(false)}
              className="w-6 h-6 rounded-full bg-space-700/60 text-white/50
                       hover:text-white text-xs transition-colors"
            >
              ✕
            </button>
          </div>

          <div className={`p-3 rounded-xl mb-3 ${config.bgColor} border ${config.borderColor}`}>
            <div className={`text-sm font-medium ${config.textColor}`}>
              {config.icon} 网络状态：{config.label}
            </div>
            <div className="text-xs text-white/50 mt-0.5">{config.sublabel}</div>
            {networkStatus.quality !== 'unknown' && (
              <div className="fs-10 text-white/40 mt-1 font-mono">
                连接类型: {networkStatus.quality?.toUpperCase()}
              </div>
            )}
          </div>

          {status?.package && (
            <div className="mb-3 p-3 rounded-xl bg-space-700/40 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/70">离线数据包</span>
                {status.package.isCurrent ? (
                  <span className="fs-10 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    ✓ 最新
                  </span>
                ) : status.package.installed ? (
                  <span className="fs-10 px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300">
                    需更新
                  </span>
                ) : (
                  <span className="fs-10 px-2 py-0.5 rounded-full bg-red-500/20 text-red-300">
                    未安装
                  </span>
                )}
              </div>
              {status.package.version && (
                <div className="fs-10 text-white/40 font-mono mb-2">
                  版本: {status.package.version}
                </div>
              )}
              <div className="grid grid-cols-3 gap-2 text-center fs-10">
                <div className="p-1.5 rounded-lg bg-space-600/40">
                  <div className="text-nebula-cyan font-bold">{status.package.constellationCount || 0}</div>
                  <div className="text-white/40">星座</div>
                </div>
                <div className="p-1.5 rounded-lg bg-space-600/40">
                  <div className="text-star-gold font-bold">{status?.storeCounts?.achievements || 0}</div>
                  <div className="text-white/40">成就</div>
                </div>
                <div className="p-1.5 rounded-lg bg-space-600/40">
                  <div className="text-nebula-purple font-bold">{status?.storeCounts?.storyChapters || 0}</div>
                  <div className="text-white/40">章节</div>
                </div>
              </div>
            </div>
          )}

          {installProgress && (
            <div className="mb-3 p-3 rounded-xl bg-nebula-purple/10 border border-nebula-purple/30">
              <div className="text-xs text-nebula-cyan mb-2">
                {installProgress.message || '安装中...'}
              </div>
              <div className="w-full h-1.5 bg-space-600/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan transition-all duration-300"
                  style={{ width: `${installProgress.progress || 0}%` }}
                />
              </div>
            </div>
          )}

          {status?.imageCache && (
            <div className="mb-3 p-3 rounded-xl bg-space-700/40 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/70">图片缓存</span>
                <span className="fs-10 text-white/40">
                  {status.imageCache.totalSizeMB} / {status.imageCache.maxSizeMB} MB
                </span>
              </div>
              <div className="w-full h-1 bg-space-600/60 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full transition-all ${
                    parseFloat(status.imageCache.usagePercent) > 80
                      ? 'bg-red-500'
                      : parseFloat(status.imageCache.usagePercent) > 50
                      ? 'bg-yellow-500'
                      : 'bg-emerald-500'
                  }`}
                  style={{ width: `${status.imageCache.usagePercent}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 fs-10 text-white/50">
                <div>📦 {status.imageCache.totalItems} 张图片</div>
                <div>⏰ {status.imageCache.expiredCount} 张过期</div>
              </div>
            </div>
          )}

          {status?.sync && (
            <div className="mb-3 p-3 rounded-xl bg-space-700/40 border border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">数据同步</span>
                {status.sync.pendingCount === 0 ? (
                  <span className="fs-10 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    已同步
                  </span>
                ) : (
                  <span className="fs-10 px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300">
                    {status.sync.pendingCount} 待同步
                  </span>
                )}
              </div>
              {status.sync.lastSync && (
                <div className="fs-10 text-white/40 mt-1">
                  上次同步: {new Date(status.sync.lastSync).toLocaleString('zh-CN', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              )}
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={async () => {
                await installPackage()
                await refreshStatus()
              }}
              className="flex-1 py-2 px-3 rounded-xl text-xs
                       bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all"
            >
              {status?.package?.installed ? '更新数据包' : '安装离线包'}
            </button>
            <button
              onClick={refreshStatus}
              className="py-2 px-3 rounded-xl text-xs bg-space-700/60
                       border border-white/10 text-white/70 hover:text-white
                       hover:bg-space-600/60 transition-all"
            >
              ↻
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
