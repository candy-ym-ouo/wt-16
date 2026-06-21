import { useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { EVENT_TYPES } from '../data/nightSkyEvents'
import { formatTimeRemaining, getEventTypeLabel } from '../data/nightSkyEvents'

export default function NightSkyEvents({ onClose }) {
  const [activeTab, setActiveTab] = useState('active')

  const nightSkyEvents = useGameStore((s) => s.nightSkyEvents)
  const getActiveNightSkyEvents = useGameStore((s) => s.getActiveNightSkyEvents)
  const claimEventReward = useGameStore((s) => s.claimEventReward)
  const refreshNightSkyEvents = useGameStore((s) => s.refreshNightSkyEvents)
  const stardust = useGameStore((s) => s.stardust)
  const achievements = useGameStore((s) => s.achievements)

  const [, forceUpdate] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      refreshNightSkyEvents()
      forceUpdate((n) => n + 1)
    }, 60000)
    return () => clearInterval(interval)
  }, [refreshNightSkyEvents])

  const activeEvents = getActiveNightSkyEvents()
  const eventHistory = nightSkyEvents.eventHistory
  const eventNotifications = nightSkyEvents.eventNotifications

  const getEventTypeIcon = (type) => {
    switch (type) {
      case EVENT_TYPES.METEOR_SHOWER:
        return '🌠'
      case EVENT_TYPES.SPECIAL_ASTRO:
        return '✨'
      case EVENT_TYPES.LIMITED_TASK:
        return '📋'
      default:
        return '🌟'
    }
  }

  const getEventTypeColor = (type) => {
    switch (type) {
      case EVENT_TYPES.METEOR_SHOWER:
        return 'from-blue-500 to-purple-500'
      case EVENT_TYPES.SPECIAL_ASTRO:
        return 'from-amber-500 to-orange-500'
      case EVENT_TYPES.LIMITED_TASK:
        return 'from-green-500 to-teal-500'
      default:
        return 'from-gray-500 to-slate-500'
    }
  }

  const getProgressColor = (progress) => {
    if (progress >= 100) return 'bg-green-500'
    if (progress >= 50) return 'bg-yellow-500'
    return 'bg-blue-500'
  }

  const formatDateTime = (timestamp) => {
    if (!timestamp) return '进行中'
    const date = new Date(timestamp)
    return date.toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleClaimReward = (eventId) => {
    claimEventReward(eventId)
    forceUpdate((n) => n + 1)
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden border border-white/10 shadow-2xl">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌌</span>
              <div>
                <h2 className="text-xl font-bold text-white">夜空事件</h2>
                <p className="text-white/70 text-sm">探索宇宙奇观，获取丰厚奖励</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              ×
            </button>
          </div>

          <div className="flex items-center gap-6 mt-3">
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1.5">
              <span className="text-lg">💫</span>
              <span className="text-white font-semibold">{stardust}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1.5">
              <span className="text-lg">🏆</span>
              <span className="text-white font-semibold">{achievements.filter((a) => a.unlocked).length} 成就</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1.5">
              <span className="text-lg">📅</span>
              <span className="text-white font-semibold">{eventHistory.length} 记录</span>
            </div>
          </div>
        </div>

        <div className="flex border-b border-white/10">
          {[
            { id: 'active', label: '进行中', icon: '🔥', count: activeEvents.length },
            { id: 'history', label: '历史记录', icon: '📜', count: eventHistory.length },
            { id: 'notifications', label: '通知', icon: '🔔', count: eventNotifications.length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'text-white bg-white/10 border-b-2 border-indigo-400'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.count > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[20px] text-center">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="p-4 overflow-y-auto max-h-[55vh]">
          {activeTab === 'active' && (
            <div className="space-y-4">
              {activeEvents.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🌙</div>
                  <p className="text-white/50 text-lg">暂无进行中的事件</p>
                  <p className="text-white/30 text-sm mt-2">请稍后再来查看夜空奇观</p>
                </div>
              ) : (
                activeEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all"
                  >
                    <div className={`bg-gradient-to-r ${getEventTypeColor(event.type)} p-4`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{event.icon || getEventTypeIcon(event.type)}</span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-white font-bold text-lg">{event.name}</h3>
                              {event.isPeak && (
                                <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-0.5 rounded-full font-semibold">
                                  高峰期
                                </span>
                              )}
                            </div>
                            <p className="text-white/80 text-sm">{getEventTypeLabel(event.type)}</p>
                          </div>
                        </div>
                        {event.endTime && (
                          <div className="text-right">
                            <p className="text-white/70 text-xs">剩余时间</p>
                            <p className="text-white font-mono font-semibold">
                              {formatTimeRemaining(event.endTime)}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-white/70 text-sm mb-4">{event.description}</p>

                      {event.progress && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white/60 text-sm">任务进度</span>
                            <span className="text-white font-semibold text-sm">
                              {event.progress.current} / {event.progress.target}
                            </span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getProgressColor((event.progress.current / event.progress.target) * 100)} transition-all duration-500`}
                              style={{
                                width: `${Math.min(100, (event.progress.current / event.progress.target) * 100)}%`
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {event.rewards && (
                        <div className="mb-4">
                          <p className="text-white/60 text-xs mb-2">🎁 奖励</p>
                          <div className="flex flex-wrap gap-2">
                            {event.rewards.stardust && (
                              <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                                💫 {event.rewards.stardust}
                                {event.rewards.multiplier && ` ×${event.rewards.multiplier}`}
                              </span>
                            )}
                            {event.rewards.achievement && (
                              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                                🏆 专属成就
                              </span>
                            )}
                            {event.rewards.title && (
                              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                                👑 {event.rewards.title}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {event.progress && event.progress.current >= event.progress.target && !event.rewardClaimed && (
                        <button
                          onClick={() => handleClaimReward(event.id)}
                          className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                          🎉 领取奖励
                        </button>
                      )}

                      {event.rewardClaimed && (
                        <div className="text-center py-3 bg-green-500/20 text-green-300 rounded-lg">
                          ✅ 奖励已领取
                        </div>
                      )}

                      {event.relatedConstellation && (
                        <p className="text-white/40 text-xs mt-3 text-center">
                          相关星座提示：{event.relatedConstellation}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-3">
              {eventHistory.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">📖</div>
                  <p className="text-white/50 text-lg">暂无历史记录</p>
                  <p className="text-white/30 text-sm mt-2">参与夜空事件将在这里留下足迹</p>
                </div>
              ) : (
                [...eventHistory].reverse().map((event, index) => (
                  <div
                    key={`${event.id}-${index}`}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{event.icon || getEventTypeIcon(event.type)}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-semibold">{event.name}</h4>
                          <span className="text-white/40 text-xs">
                            {event.expiredAt ? formatDateTime(event.expiredAt) : formatDateTime(event.startTime)}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm mt-1">{event.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          {event.participated && (
                            <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded">已参与</span>
                          )}
                          {event.rewardClaimed && (
                            <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded">奖励已领</span>
                          )}
                          {event.progress && (
                            <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                              进度 {event.progress.current}/{event.progress.target}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-3">
              {eventNotifications.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🔕</div>
                  <p className="text-white/50 text-lg">暂无通知</p>
                  <p className="text-white/30 text-sm mt-2">新的事件开始时将在这里提醒您</p>
                </div>
              ) : (
                [...eventNotifications].reverse().map((notif, index) => (
                  <div
                    key={`${notif.id}-${index}`}
                    className={`rounded-xl p-4 border transition-all ${
                      notif.read
                        ? 'bg-white/5 border-white/5 opacity-60'
                        : 'bg-white/10 border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{notif.icon || '📢'}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-semibold">{notif.title}</h4>
                          <span className="text-white/40 text-xs">
                            {formatDateTime(notif.timestamp)}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm mt-1">{notif.message}</p>
                        {!notif.read && (
                          <span className="inline-block mt-2 w-2 h-2 bg-red-500 rounded-full" />
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
