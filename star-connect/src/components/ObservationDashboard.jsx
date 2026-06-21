import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'

const TIME_RANGES = [
  { id: 'today', label: '今日', icon: '📅' },
  { id: 'week', label: '本周', icon: '📊' },
  { id: 'month', label: '本月', icon: '📆' },
  { id: 'all', label: '全部', icon: '🌟' }
]

const STAT_CARDS = [
  { id: 'discovery', label: '发现进度', icon: '✨', color: 'from-nebula-purple to-nebula-cyan' },
  { id: 'mistakes', label: '错误分布', icon: '⚠️', color: 'from-orange-500 to-red-400' },
  { id: 'activity', label: '活跃天数', icon: '🔥', color: 'from-amber-500 to-yellow-400' },
  { id: 'achievement', label: '成就完成', icon: '🏆', color: 'from-star-gold to-amber-400' }
]

export default function ObservationDashboard() {
  const { setActivePanel, getObservationStats } = useGameStore()
  const [timeRange, setTimeRange] = useState('week')
  const [activeTab, setActiveTab] = useState('overview')

  const stats = getObservationStats(timeRange)
  const { overview, timeRangeData, dailyData, difficultyDistribution, seasonDistribution } = stats

  const maxDailyValue = Math.max(...dailyData.map(d => d.total), 1)

  const renderStatCard = (card) => {
    let value, subValue, percentage
    switch (card.id) {
      case 'discovery':
        value = `${overview.discoveredConstellations}/${overview.totalConstellations}`
        subValue = `${overview.discoveryRate}% 发现率`
        percentage = overview.discoveryRate
        break
      case 'mistakes':
        value = overview.totalMistakes.toString()
        subValue = `平均 ${overview.avgMistakesPerObservation} 次/观测`
        percentage = Math.min(100, Math.round((overview.totalMistakes / Math.max(1, overview.totalObservations * 5)) * 100))
        break
      case 'activity':
        value = `${overview.activeDays}天`
        subValue = `连续 ${overview.checkinStreak} 天`
        percentage = Math.min(100, overview.activeDays * 3.3)
        break
      case 'achievement':
        value = `${overview.unlockedAchievements}/${overview.totalAchievements}`
        subValue = `${overview.achievementRate}% 完成率`
        percentage = overview.achievementRate
        break
      default:
        value = '0'
        subValue = ''
        percentage = 0
    }

    return (
      <div
        key={card.id}
        className="p-4 rounded-2xl border border-white/10 bg-space-700/20 hover:border-white/20 transition-all"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br ${card.color}`}>
            {card.icon}
          </div>
          <span className="text-xs text-white/60">{card.label}</span>
        </div>
        <div className="text-2xl font-display text-white mb-1">{value}</div>
        <div className="text-[11px] text-white/40 mb-3">{subValue}</div>
        <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${card.color} rounded-full transition-all duration-700`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }

  const renderTrendChart = () => {
    if (dailyData.length === 0) return null

    return (
      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">📈</span>
            <h3 className="font-display text-white/90 text-sm">观测趋势</h3>
          </div>
          <div className="flex items-center gap-3 text-[10px]">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-nebula-purple"></span>
              <span className="text-white/50">新发现</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-nebula-cyan"></span>
              <span className="text-white/50">复观测</span>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-1 h-32">
          {dailyData.map((day, index) => {
            const discoveryHeight = day.discoveries > 0
              ? Math.max(4, (day.discoveries / maxDailyValue) * 100)
              : 0
            const reobservationHeight = day.reobservations > 0
              ? Math.max(4, (day.reobservations / maxDailyValue) * 100)
              : 0
            const dateLabel = timeRange === 'today'
              ? '今天'
              : timeRange === 'week'
              ? new Date(day.date).toLocaleDateString('zh-CN', { weekday: 'short' }).replace('周', '')
              : new Date(day.date).getDate()

            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-1">
                <div className="flex items-end gap-0.5 h-24">
                  <div
                    className="w-2 bg-gradient-to-t from-nebula-purple/60 to-nebula-purple rounded-t transition-all duration-500"
                    style={{ height: `${discoveryHeight}%` }}
                  />
                  <div
                    className="w-2 bg-gradient-to-t from-nebula-cyan/60 to-nebula-cyan rounded-t transition-all duration-500"
                    style={{ height: `${reobservationHeight}%` }}
                  />
                </div>
                <span className="text-[9px] text-white/40">{dateLabel}</span>
              </div>
            )
          })}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
          <div className="text-center">
            <div className="text-lg font-display text-nebula-purple">{timeRangeData.discoveries}</div>
            <div className="text-[10px] text-white/40">新发现</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-display text-nebula-cyan">{timeRangeData.reobservations}</div>
            <div className="text-[10px] text-white/40">复观测</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-display text-star-gold">{timeRangeData.perfect}</div>
            <div className="text-[10px] text-white/40">完美观测</div>
          </div>
        </div>
      </div>
    )
  }

  const renderDifficultyDistribution = () => {
    const items = [
      { key: 'easy', ...difficultyDistribution.easy, color: 'from-green-500 to-emerald-400' },
      { key: 'medium', ...difficultyDistribution.medium, color: 'from-amber-500 to-orange-400' },
      { key: 'hard', ...difficultyDistribution.hard, color: 'from-red-500 to-rose-400' }
    ]

    return (
      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🎯</span>
          <h3 className="font-display text-white/90 text-sm">难度分布</h3>
        </div>

        <div className="space-y-3">
          {items.map((item) => {
            const percentage = item.count > 0 ? Math.round((item.discovered / item.count) * 100) : 0
            const perfectPercentage = item.count > 0 ? Math.round((item.perfect / item.count) * 100) : 0

            return (
              <div key={item.key}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-white/70">{item.label}</span>
                  <span className="text-white/50 font-mono">
                    {item.discovered}/{item.count} · {percentage}%
                  </span>
                </div>
                <div className="relative h-2 bg-space-900/60 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} rounded-full transition-all duration-700`}
                    style={{ width: `${percentage}%` }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 bg-white/30 rounded-full transition-all duration-700"
                    style={{ width: `${perfectPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-white/30 mt-0.5">
                  <span>已发现</span>
                  <span>完美: {item.perfect}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderSeasonDistribution = () => {
    return (
      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🌸</span>
          <h3 className="font-display text-white/90 text-sm">季节分布</h3>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {Object.values(seasonDistribution).map((season) => {
            const percentage = season.total > 0 ? Math.round((season.discovered / season.total) * 100) : 0

            return (
              <div
                key={season.id}
                className={`p-3 rounded-xl border ${season.borderColor} ${season.bgColor}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{season.icon}</span>
                  <span className={`text-xs ${season.textColor}`}>{season.name}</span>
                </div>
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-white/60">已发现</span>
                  <span className="text-white/80 font-mono">{season.discovered}/{season.total}</span>
                </div>
                <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${season.color} rounded-full transition-all duration-700`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderErrorStats = () => {
    return (
      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">⚠️</span>
          <h3 className="font-display text-white/90 text-sm">错误统计</h3>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-space-900/40 text-center">
            <div className="text-2xl font-display text-orange-400">{overview.totalMistakes}</div>
            <div className="text-[10px] text-white/40 mt-1">总错误次数</div>
          </div>
          <div className="p-3 rounded-xl bg-space-900/40 text-center">
            <div className="text-2xl font-display text-amber-400">{overview.avgMistakesPerObservation}</div>
            <div className="text-[10px] text-white/40 mt-1">平均每次观测</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/50">完美率</span>
            <span className="text-star-gold font-mono">{overview.perfectRate}%</span>
          </div>
          <div className="h-2 bg-space-900/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-star-gold to-amber-400 rounded-full transition-all duration-700"
              style={{ width: `${overview.perfectRate}%` }}
            />
          </div>
          <p className="text-[10px] text-white/30 leading-relaxed mt-2">
            减少错误连线可以提高完美观测率，解锁更多成就和奖励。
          </p>
        </div>
      </div>
    )
  }

  const renderActivityStats = () => {
    return (
      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🔥</span>
          <h3 className="font-display text-white/90 text-sm">活跃统计</h3>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="p-2 rounded-xl bg-space-900/40 text-center">
            <div className="text-xl font-display text-amber-400">{overview.activeDays}</div>
            <div className="text-[9px] text-white/40 mt-0.5">活跃天数</div>
          </div>
          <div className="p-2 rounded-xl bg-space-900/40 text-center">
            <div className="text-xl font-display text-yellow-400">{overview.checkinDays}</div>
            <div className="text-[9px] text-white/40 mt-0.5">签到天数</div>
          </div>
          <div className="p-2 rounded-xl bg-space-900/40 text-center">
            <div className="text-xl font-display text-orange-400">{overview.checkinStreak}</div>
            <div className="text-[9px] text-white/40 mt-0.5">连续签到</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-white/50">本月活跃度</span>
          <span className="text-amber-400 font-mono">{Math.min(100, overview.activeDays * 3.3)}%</span>
        </div>
        <div className="h-2 bg-space-900/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-700"
            style={{ width: `${Math.min(100, overview.activeDays * 3.3)}%` }}
          />
        </div>
      </div>
    )
  }

  const renderConstellationList = () => {
    return (
      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <h3 className="font-display text-white/90 text-sm">星座详情</h3>
          </div>
          <span className="text-[10px] text-white/40">
            共 {stats.constellationStats.length} 个
          </span>
        </div>

        <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-thin">
          {stats.constellationStats.map((c) => (
            <div
              key={c.id}
              className={`p-3 rounded-xl border transition-all ${
                c.discovered
                  ? 'border-white/10 bg-space-800/40'
                  : 'border-white/5 bg-space-900/30 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${c.discovered ? '' : 'grayscale opacity-50'}`}>
                    {c.discovered ? '⭐' : '☆'}
                  </span>
                  <div>
                    <p className={`text-xs font-medium ${c.discovered ? 'text-white' : 'text-white/50'}`}>
                      {c.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[9px] text-white/30">
                        难度 {c.difficulty}
                      </span>
                      {c.perfect && (
                        <span className="text-[9px] px-1 py-0.5 rounded bg-star-gold/20 text-star-gold">
                          完美
                        </span>
                      )}
                      {c.totalObservations > 1 && (
                        <span className="text-[9px] text-white/30">
                          ×{c.totalObservations}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {c.discovered && (
                  <div className="text-right">
                    <div className="text-xs text-white/60 font-mono">
                      {c.perfect ? '完美' : '已发现'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
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
              <h2 className="text-xl font-display text-white">观测数据中心</h2>
              <p className="text-xs text-white/50 mt-1">
                追踪你的观星旅程，见证每一步成长
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

          <div className="mt-4 flex gap-1.5 p-1 bg-space-800/50 rounded-xl">
            {TIME_RANGES.map((range) => (
              <button
                key={range.id}
                onClick={() => setTimeRange(range.id)}
                className={`flex-1 py-2 px-2 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${
                  timeRange === range.id
                    ? 'bg-white/10 text-white border border-white/10'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                <span>{range.icon}</span>
                <span>{range.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-3 flex gap-1">
            {[
              { id: 'overview', label: '总览', icon: '📊' },
              { id: 'trend', label: '趋势', icon: '📈' },
              { id: 'detail', label: '详情', icon: '📋' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] transition-all flex items-center justify-center gap-1 ${
                  activeTab === tab.id
                    ? 'bg-nebula-purple/20 text-nebula-cyan border border-nebula-purple/30'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-4">
          {activeTab === 'overview' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                {STAT_CARDS.map(card => renderStatCard(card))}
              </div>
              {renderTrendChart()}
              <div className="grid grid-cols-2 gap-3">
                {renderDifficultyDistribution()}
                {renderSeasonDistribution()}
              </div>
            </>
          )}

          {activeTab === 'trend' && (
            <>
              {renderTrendChart()}
              {renderActivityStats()}
              {renderErrorStats()}
            </>
          )}

          {activeTab === 'detail' && (
            <>
              {renderConstellationList()}
              {renderDifficultyDistribution()}
              {renderSeasonDistribution()}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
