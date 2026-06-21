import { useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { formatDate } from '../utils/math'
import {
  MONTH_NAMES,
  WEEKDAY_NAMES,
  getDaysInMonth,
  getFirstDayOfMonth,
  formatDateKey,
  isSameDay,
  ZODIAC_SIGNS,
  getZodiacByDate,
} from '../data/observationCalendar'

const LOG_TYPES = [
  { id: 'observation', label: '观测记录', icon: '🔭', color: 'text-nebula-cyan' },
  { id: 'discovery', label: '新发现', icon: '✨', color: 'text-nebula-purple' },
  { id: 'journal', label: '观星笔记', icon: '📝', color: 'text-star-gold' },
  { id: 'photo', label: '拍照留念', icon: '📷', color: 'text-pink-300' },
  { id: 'sharing', label: '与他人分享', icon: '👥', color: 'text-green-300' },
  { id: 'other', label: '其他', icon: '⭐', color: 'text-white/70' },
]

export default function ObservationCalendar() {
  const {
    setActivePanel,
    observationCalendar,
    checkin,
    getCheckinStatus,
    getStreakInfo,
    getOrCreateDailyData,
    addCustomLog,
    updateCustomLog,
    deleteCustomLog,
    getDateLogs,
    getMonthlyStats,
    setTargetConstellation,
    openAtlasDetail,
  } = useGameStore()

  const today = new Date()
  const [viewMode, setViewMode] = useState('calendar')
  const [currentMonth, setCurrentMonth] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [selectedDate, setSelectedDate] = useState(today)
  const [checkinResult, setCheckinResult] = useState(null)
  const [showLogEditor, setShowLogEditor] = useState(false)
  const [editingLog, setEditingLog] = useState(null)
  const [logForm, setLogForm] = useState({ type: 'journal', constellationId: null, title: '', content: '', mood: 3, weather: 'clear' })

  const dailyData = getOrCreateDailyData()
  const streakInfo = getStreakInfo()
  const todayStatus = getCheckinStatus(today)
  const monthlyStats = getMonthlyStats(currentMonth.year, currentMonth.month)
  const selectedDateLogs = getDateLogs(selectedDate)

  const handleCheckin = () => {
    const result = checkin()
    if (result.success) {
      setCheckinResult(result)
      setTimeout(() => setCheckinResult(null), 5000)
    }
  }

  const goToPrevMonth = () => {
    setCurrentMonth(prev => {
      let { year, month } = prev
      month--
      if (month < 0) {
        month = 11
        year--
      }
      return { year, month }
    })
  }

  const goToNextMonth = () => {
    setCurrentMonth(prev => {
      let { year, month } = prev
      month++
      if (month > 11) {
        month = 0
        year++
      }
      return { year, month }
    })
  }

  const goToToday = () => {
    const t = new Date()
    setCurrentMonth({ year: t.getFullYear(), month: t.getMonth() })
    setSelectedDate(t)
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth.year, currentMonth.month)
    const firstDay = getFirstDayOfMonth(currentMonth.year, currentMonth.month)
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.year, currentMonth.month, day)
      const dayData = monthlyStats.dailyData.find(d => d.day === day)
      const isToday = isSameDay(date, today)
      const isSelected = isSameDay(date, selectedDate)

      days.push({ day, date, dayData, isToday, isSelected })
    }

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <button onClick={goToPrevMonth} className="w-8 h-8 rounded-lg bg-space-700/50 text-white/70 hover:bg-white/10 transition-all flex items-center justify-center">
            ‹
          </button>
          <div className="text-center">
            <h3 className="font-display text-white text-lg">
              {currentMonth.year}年 {MONTH_NAMES[currentMonth.month]}
            </h3>
            {!isSameDay(new Date(currentMonth.year, currentMonth.month, 1), new Date(today.getFullYear(), today.getMonth(), 1)) && (
              <button onClick={goToToday} className="text-[10px] text-nebula-cyan mt-0.5 hover:underline">
                回到今天
              </button>
            )}
          </div>
          <button onClick={goToNextMonth} className="w-8 h-8 rounded-lg bg-space-700/50 text-white/70 hover:bg-white/10 transition-all flex items-center justify-center">
            ›
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-white/40 mb-1">
          {WEEKDAY_NAMES.map((w, i) => (
            <div key={i} className={`py-1 ${i === 0 || i === 6 ? 'text-red-300/50' : ''}`}>
              {w}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((cell, idx) => {
            if (!cell) return <div key={idx} className="aspect-square" />
            
            const { day, date, dayData, isToday, isSelected } = cell
            const weekend = date.getDay() === 0 || date.getDay() === 6
            const isFuture = date > today

            return (
              <button
                key={idx}
                onClick={() => !isFuture && setSelectedDate(date)}
                disabled={isFuture}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center p-0.5 transition-all relative
                  ${isSelected ? 'bg-nebula-purple/30 ring-1 ring-nebula-purple' : 'hover:bg-white/5'}
                  ${isToday && !isSelected ? 'ring-1 ring-star-gold/50' : ''}
                  ${isFuture ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                <span className={`text-xs font-medium ${
                  isSelected ? 'text-white' :
                  isToday ? 'text-star-gold' :
                  weekend ? 'text-red-300/60' : 'text-white/70'
                }`}>
                  {day}
                </span>
                <div className="flex gap-0.5 mt-0.5 min-h-[6px]">
                  {dayData?.checkedIn && (
                    <span className="w-1 h-1 rounded-full bg-star-gold" title="已签到" />
                  )}
                  {dayData?.discoveries > 0 && (
                    <span className="w-1 h-1 rounded-full bg-nebula-purple" title="新发现" />
                  )}
                  {dayData?.reobservations > 0 && (
                    <span className="w-1 h-1 rounded-full bg-nebula-cyan" title="再次观测" />
                  )}
                  {dayData?.customLogs > 0 && (
                    <span className="w-1 h-1 rounded-full bg-pink-400" title="有笔记" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap gap-3 justify-center pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-[10px] text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-star-gold" /> 签到
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-nebula-purple" /> 新发现
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-nebula-cyan" /> 再观测
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> 笔记
          </div>
        </div>
      </div>
    )
  }

  const renderCheckinSection = () => (
    <div className={`p-4 rounded-2xl border ${
      todayStatus.checkedIn
        ? 'border-star-gold/30 bg-star-gold/5'
        : 'border-nebula-purple/30 bg-nebula-purple/5'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{todayStatus.checkedIn ? '✅' : '🌟'}</span>
            <h3 className={`font-display text-sm ${todayStatus.checkedIn ? 'text-star-gold' : 'text-white'}`}>
              {todayStatus.checkedIn ? '今日已签到' : '立即签到'}
            </h3>
          </div>
          <div className="text-[11px] text-white/50 mb-2">
            连续签到 <span className="text-nebula-cyan font-bold">{streakInfo.currentStreak}</span> 天
            {streakInfo.nextMilestone && streakInfo.daysToNext > 0 && (
              <span className="text-white/40 ml-2">
                · 再 {streakInfo.daysToNext} 天获得 {streakInfo.nextMilestone.icon} {streakInfo.nextMilestone.label}
              </span>
            )}
          </div>

          <div className="flex gap-1 flex-wrap mb-2">
            {streakInfo.milestones.slice(0, 4).map((m, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center text-center transition-all ${
                  m.achieved
                    ? 'bg-star-gold/20 border border-star-gold/30'
                    : 'bg-space-700/50 border border-white/5 opacity-60'
                }`}
                title={`${m.days}天 - ${m.label}`}
              >
                <span className="text-sm">{m.icon}</span>
                <span className={`text-[8px] ${m.achieved ? 'text-star-gold' : 'text-white/40'}`}>
                  {m.days}天
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="ml-3">
          <button
            onClick={handleCheckin}
            disabled={todayStatus.checkedIn}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
              ${todayStatus.checkedIn
                ? 'bg-star-gold/10 text-star-gold/60 cursor-not-allowed'
                : 'bg-gradient-to-r from-star-gold to-nebula-orange text-white shadow-lg hover:shadow-xl active:scale-95 animate-pulse'
              }`}
          >
            {todayStatus.checkedIn ? '已签到' : '+签到'}
          </button>
          <div className="text-center mt-1.5">
            <span className="text-[10px] text-star-gold/70 flex items-center justify-center gap-0.5">
              💫 {observationCalendar.stardust} 星尘
            </span>
          </div>
        </div>
      </div>

      {checkinResult && (
        <div className="mt-3 pt-3 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange flex items-center justify-center text-xl">
              🎉
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white font-medium">签到成功！连续 {checkinResult.streak} 天</p>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {checkinResult.rewards.map((r, i) => (
                  <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full ${
                    r.type === 'stardust'
                      ? 'bg-star-gold/15 text-star-gold'
                      : 'bg-nebula-purple/20 text-nebula-purple'
                  }`}>
                    {r.icon} {r.type === 'stardust' ? `+${r.amount}` : r.name}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-white/60 mt-1.5">
                {checkinResult.zodiac?.icon} {checkinResult.zodiac?.name} ·{' '}
                {'⭐'.repeat(checkinResult.luckyStars)}{'☆'.repeat(5 - checkinResult.luckyStars)}
                {' '}<span className="text-nebula-cyan">{checkinResult.luckyMessage}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderRecommendation = () => {
    const rec = dailyData.recommendation
    const zodiac = dailyData.zodiac
    if (!rec) return null

    return (
      <div className={`p-4 rounded-2xl border ${rec.season.borderColor} ${rec.season.bgColor}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <h3 className={`font-display text-sm ${rec.season.textColor}`}>今日推荐</h3>
          </div>
          <div className={`text-[10px] px-2 py-0.5 rounded-full ${rec.season.bgColor} ${rec.season.textColor} border ${rec.season.borderColor}`}>
            {rec.season.icon} {rec.season.name}
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                          bg-gradient-to-br ${rec.season.color} text-white flex-shrink-0`}>
            ⭐
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-display text-white text-base">{rec.constellationName}</span>
              {rec.isNew && (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-nebula-purple/30 text-nebula-purple">
                  待发现
                </span>
              )}
              {rec.isPerfect && (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-star-gold/20 text-star-gold">
                  完美 ✓
                </span>
              )}
              {!rec.isNew && !rec.isPerfect && (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-nebula-cyan/20 text-nebula-cyan">
                  已发现
                </span>
              )}
              {rec.observedCount > 1 && (
                <span className="text-[9px] text-white/40">×{rec.observedCount}</span>
              )}
            </div>
            <p className="text-[11px] text-white/70 leading-relaxed mb-2">
              {rec.description}
            </p>
            <p className="text-[10px] text-white/40">
              💡 {rec.tips}
            </p>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-white/10 flex gap-2">
          <button
            onClick={() => {
              setTargetConstellation(rec.constellationId)
              setActivePanel(null)
            }}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all
                       bg-gradient-to-r ${rec.season.color} text-white
                       hover:shadow-lg active:scale-95`}
          >
            🚀 开始观测
          </button>
          <button
            onClick={() => openAtlasDetail(rec.constellationId)}
            className={`px-3 py-2 rounded-xl text-xs transition-all
                       bg-white/5 border border-white/10 text-white/70
                       hover:bg-white/10 hover:text-white`}
          >
            📚 图鉴
          </button>
        </div>

        {zodiac && todayStatus.record && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xl">{zodiac.icon}</span>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] text-white/60">
                  {zodiac.name} {zodiac.period}
                </span>
                <div className="text-[10px] text-white/40 mt-0.5">
                  {zodiac.element}象 · {zodiac.ruler}守护
                  {' '}· 今日幸运指数：{'⭐'.repeat(todayStatus.record.luckyStars)}
                </div>
              </div>
            </div>
            {todayStatus.record.luckyMessage && (
              <p className="text-[11px] text-nebula-cyan/80 mt-2 pl-9">
                "{todayStatus.record.luckyMessage}"
              </p>
            )}
          </div>
        )}
      </div>
    )
  }

  const renderSelectedDateDetail = () => {
    const dateKey = formatDateKey(selectedDate)
    const isToday = isSameDay(selectedDate, today)
    const logs = selectedDateLogs
    const status = getCheckinStatus(selectedDate)
    const zodiac = getZodiacByDate(selectedDate)

    const openNewLog = () => {
      setEditingLog(null)
      setLogForm({ type: 'journal', constellationId: null, title: '', content: '', mood: 3, weather: 'clear' })
      setShowLogEditor(true)
    }

    const openEditLog = (log) => {
      setEditingLog(log)
      setLogForm({
        type: log.type,
        constellationId: log.constellationId || null,
        title: log.title || '',
        content: log.content || '',
        mood: log.mood || 3,
        weather: log.weather || 'clear',
      })
      setShowLogEditor(true)
    }

    return (
      <div className="space-y-4">
        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-display text-white text-sm">
                {isToday ? '今天 · ' : ''}{dateKey.replace(/-/g, '.')}
              </h3>
              <p className="text-[10px] text-white/40 mt-0.5">
                {zodiac?.icon} {zodiac?.name} · 星期{['日','一','二','三','四','五','六'][selectedDate.getDay()]}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {status.checkedIn && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-star-gold/15 text-star-gold">
                  ✓ 已签到
                </span>
              )}
              {!status.checkedIn && !isToday && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/40">
                  未签到
                </span>
              )}
              {!status.checkedIn && isToday && status.canCheckin && (
                <button
                  onClick={handleCheckin}
                  className="text-[10px] px-2 py-1 rounded-full bg-star-gold/20 text-star-gold hover:bg-star-gold/30 transition-all"
                >
                  签到 +
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-2 rounded-lg bg-space-800/40">
              <div className="text-sm font-bold text-nebula-purple">
                {logs.observationLogs.filter(l => l.type === 'discovery').length +
                 logs.customLogs.filter(l => l.type === 'discovery').length}
              </div>
              <div className="text-[9px] text-white/40">新发现</div>
            </div>
            <div className="p-2 rounded-lg bg-space-800/40">
              <div className="text-sm font-bold text-nebula-cyan">
                {logs.observationLogs.filter(l => l.type === 'reobservation').length +
                 logs.customLogs.filter(l => l.type === 'observation').length}
              </div>
              <div className="text-[9px] text-white/40">再观测</div>
            </div>
            <div className="p-2 rounded-lg bg-space-800/40">
              <div className="text-sm font-bold text-star-gold">
                {logs.observationLogs.filter(l => l.perfect).length +
                 logs.customLogs.filter(l => (l.type === 'discovery' || l.type === 'observation') && l.perfect).length}
              </div>
              <div className="text-[9px] text-white/40">完美</div>
            </div>
            <div className="p-2 rounded-lg bg-space-800/40">
              <div className="text-sm font-bold text-pink-300">
                {logs.customLogs.length}
              </div>
              <div className="text-[9px] text-white/40">笔记</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h4 className="font-display text-white/80 text-xs flex items-center gap-1.5">
            <span>📖</span> 当日记录
            <span className="text-white/30">({logs.observationLogs.length + logs.customLogs.length})</span>
          </h4>
          <button
            onClick={openNewLog}
            className="text-[11px] px-3 py-1.5 rounded-lg bg-nebula-purple/20 text-nebula-purple
                     hover:bg-nebula-purple/30 transition-all flex items-center gap-1"
          >
            + 补录笔记
          </button>
        </div>

        <div className="space-y-2">
          {logs.observationLogs.length === 0 && logs.customLogs.length === 0 ? (
            <div className="py-8 text-center">
              <div className="text-3xl mb-2 opacity-30">🌙</div>
              <p className="text-xs text-white/40">这一天还没有记录</p>
              {isToday || selectedDate < today ? (
                <button
                  onClick={openNewLog}
                  className="mt-2 text-[11px] text-nebula-cyan hover:underline"
                >
                  补录一条观星笔记 →
                </button>
              ) : null}
            </div>
          ) : (
            <>
              {logs.observationLogs.map((log, i) => {
                if (log.type === 'discovery' || log.type === 'reobservation') {
                  const c = getConstellationById(log.constellationId)
                  if (!c) return null
                  const isDisc = log.type === 'discovery'
                  return (
                    <div
                      key={`obs-${i}`}
                      className={`p-3 rounded-xl border transition-all ${
                        isDisc
                          ? 'border-nebula-purple/30 bg-nebula-purple/5'
                          : 'border-white/10 bg-space-700/20'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${
                          isDisc
                            ? 'bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white'
                            : 'bg-space-600/50 text-white/70'
                        }`}>
                          {isDisc ? '✨' : '🔭'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-medium text-white">{c.name}</span>
                            <span className={`text-[9px] px-1 py-0.5 rounded ${
                              isDisc ? 'bg-nebula-purple/20 text-nebula-purple' : 'bg-white/10 text-white/60'
                            }`}>
                              {isDisc ? '首次发现' : '再次观测'}
                            </span>
                            {log.perfect && (
                              <span className="text-[9px] px-1 py-0.5 rounded bg-star-gold/20 text-star-gold">
                                完美
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-white/30 mt-0.5 font-mono">
                            {formatDate(log.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }
                if (log.type === 'checkin') {
                  return (
                    <div key={`checkin-${i}`} className="p-3 rounded-xl border border-star-gold/20 bg-star-gold/5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-star-gold to-nebula-orange flex items-center justify-center text-sm">
                          🌟
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-medium text-star-gold">每日签到</span>
                          <span className="text-[9px] text-white/40 ml-2">连续 {log.streak} 天</span>
                          <div className="flex gap-1 mt-1">
                            {log.rewards?.map((r, ri) => (
                              <span key={ri} className="text-[9px] px-1.5 py-0.5 rounded bg-star-gold/10 text-star-gold/80">
                                {r.icon} {r.type === 'stardust' ? `+${r.amount}` : r.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              })}

              {logs.customLogs.map((log) => {
                const logType = LOG_TYPES.find(t => t.id === log.type) || LOG_TYPES[5]
                const c = log.constellationId ? getConstellationById(log.constellationId) : null
                return (
                  <div key={log.id} className="p-3 rounded-xl border border-pink-400/15 bg-pink-400/5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-pink-400/15 flex items-center justify-center text-sm flex-shrink-0">
                        {logType.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                            <span className={`text-xs font-medium ${logType.color}`}>
                              {log.title || logType.label}
                            </span>
                            {c && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/60">
                                {c.name}
                              </span>
                            )}
                            {log.mood && (
                              <span className="text-[10px]">{'😊'.repeat(log.mood)}{'😐'.repeat(Math.max(0, 3 - log.mood))}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <button
                              onClick={() => openEditLog(log)}
                              className="w-6 h-6 rounded-md bg-white/5 text-white/50 text-[10px]
                                       hover:bg-white/10 hover:text-white transition-all"
                            >
                              ✏️
                            </button>
                            <button
                              onClick={() => {
                                if (confirm('确定删除这条记录吗？')) {
                                  deleteCustomLog(selectedDate, log.id)
                                }
                              }}
                              className="w-6 h-6 rounded-md bg-red-500/5 text-red-300/60 text-[10px]
                                       hover:bg-red-500/10 hover:text-red-300 transition-all"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                        {log.content && (
                          <p className="text-[11px] text-white/60 mt-1.5 leading-relaxed whitespace-pre-wrap">
                            {log.content}
                          </p>
                        )}
                        <p className="text-[10px] text-white/30 mt-1 font-mono">
                          {formatDate(log.createdAt)}
                          {log.weather && ` · ${log.weather}`}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>
    )
  }

  const renderStats = () => {
    const s = monthlyStats
    const todayMonth = today.getMonth()
    const todayYear = today.getFullYear()
    const isCurrentMonth = currentMonth.year === todayYear && currentMonth.month === todayMonth

    const maxActivity = Math.max(...s.dailyData.map(d => d.discoveries + d.reobservations + (d.checkedIn ? 1 : 0)), 1)

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-2">
          <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
            <div className="text-2xl font-bold text-star-gold">{s.checkinDays}</div>
            <div className="text-[10px] text-white/50 mt-0.5">签到天数</div>
            <div className="text-[9px] text-white/30 mt-0.5">{s.checkinRate}%</div>
          </div>
          <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
            <div className="text-2xl font-bold text-nebula-purple">{s.discoveryCount}</div>
            <div className="text-[10px] text-white/50 mt-0.5">新发现</div>
            <div className="text-[9px] text-white/30 mt-0.5">首次</div>
          </div>
          <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
            <div className="text-2xl font-bold text-nebula-cyan">{s.reobservationCount}</div>
            <div className="text-[10px] text-white/50 mt-0.5">再次观测</div>
            <div className="text-[9px] text-white/30 mt-0.5">累计</div>
          </div>
          <div className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
            <div className="text-2xl font-bold text-pink-300">{s.activeDays}</div>
            <div className="text-[10px] text-white/50 mt-0.5">活跃天数</div>
            <div className="text-[9px] text-white/30 mt-0.5">{s.activityRate}%</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-display text-white/80 text-xs flex items-center gap-1.5">
              <span>📊</span> 月度活动热力图
            </h4>
            <span className="text-[10px] text-white/40">
              {isCurrentMonth ? `进行中 ${s.daysInMonth - today.getDate() + 1}天` : '已结束'}
            </span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {s.dailyData.map((d, i) => {
              const level = Math.min(4, Math.round(((d.discoveries + d.reobservations + (d.checkedIn ? 0.5 : 0)) / maxActivity) * 4))
              const weekend = new Date(s.year, s.month, d.day).getDay() % 6 === 0
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-md flex items-center justify-center text-[8px] relative
                    ${level === 0 ? 'bg-space-800/40' : ''}
                    ${level === 1 ? 'bg-nebula-cyan/15' : ''}
                    ${level === 2 ? 'bg-nebula-cyan/30' : ''}
                    ${level === 3 ? 'bg-nebula-purple/40' : ''}
                    ${level === 4 ? 'bg-nebula-purple/60' : ''}
                    ${d.day === today.getDate() && isCurrentMonth ? 'ring-1 ring-star-gold' : ''}
                  `}
                  title={`${d.date}: ${d.checkedIn ? '签到 ' : ''}${d.discoveries}发现 ${d.reobservations}再观测`}
                >
                  <span className={level >= 3 ? 'text-white/80' : weekend ? 'text-red-300/40' : 'text-white/30'}>
                    {d.day}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-between mt-2 px-1">
            <span className="text-[9px] text-white/30">少</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(l => (
                <div key={l} className={`w-3 h-3 rounded-sm ${
                  l === 0 ? 'bg-space-800/40' :
                  l === 1 ? 'bg-nebula-cyan/15' :
                  l === 2 ? 'bg-nebula-cyan/30' :
                  l === 3 ? 'bg-nebula-purple/40' : 'bg-nebula-purple/60'
                }`} />
              ))}
            </div>
            <span className="text-[9px] text-white/30">多</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 rounded-xl bg-gradient-to-br from-star-gold/10 to-transparent border border-star-gold/20">
            <div className="text-lg mb-1">🏆</div>
            <div className="text-xs text-star-gold font-bold">{s.summary.perfectRate}%</div>
            <div className="text-[9px] text-white/40">完美率</div>
            <div className="text-[9px] text-white/30 mt-0.5">{s.perfectCount} 次完美</div>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-nebula-cyan/10 to-transparent border border-nebula-cyan/20">
            <div className="text-lg mb-1">🔭</div>
            <div className="text-xs text-nebula-cyan font-bold">{s.summary.avgObservationsPerActiveDay}</div>
            <div className="text-[9px] text-white/40">日均观测</div>
            <div className="text-[9px] text-white/30 mt-0.5">次/活跃天</div>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-nebula-purple/10 to-transparent border border-nebula-purple/20">
            <div className="text-lg mb-1">🌌</div>
            <div className="text-xs text-nebula-purple font-bold">{s.uniqueConstellations}</div>
            <div className="text-[9px] text-white/40">探索星座</div>
            <div className="text-[9px] text-white/30 mt-0.5">{s.totalCustomLogs} 篇笔记</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-display text-white/80 text-xs flex items-center gap-1.5">
              <span>💫</span> 本月星尘收支
            </h4>
            <span className="text-[10px] text-star-gold">余额 {observationCalendar.stardust}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2.5 bg-space-900/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-star-gold to-nebula-orange rounded-full transition-all"
                style={{ width: `${Math.min(100, s.stardustEarned)}%` }}
              />
            </div>
            <span className="text-xs text-star-gold font-bold flex-shrink-0 w-16 text-right">
              +{s.stardustEarned}
            </span>
          </div>
          <p className="text-[10px] text-white/40 mt-1.5">通过签到获得星尘，用于解锁更多奖励和功能</p>
        </div>

        {s.totalObservations > 0 && (
          <div className="p-4 rounded-2xl border border-nebula-purple/20 bg-nebula-purple/5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display text-nebula-purple text-xs flex items-center gap-1.5">
                <span>✨</span> 本月观测最多的星座
              </h4>
            </div>
            <MonthlyTopConstellations year={s.year} month={s.month} />
          </div>
        )}
      </div>
    )
  }

  const MonthlyTopConstellations = ({ year, month }) => {
    const { observationLogs, observationCalendar } = useGameStore()
    const counts = {}
    observationLogs.forEach(log => {
      if (!log.timestamp || !log.constellationId) return
      if (log.type !== 'discovery' && log.type !== 'reobservation') return
      const d = new Date(log.timestamp)
      if (d.getFullYear() !== year || d.getMonth() !== month) return
      counts[log.constellationId] = (counts[log.constellationId] || 0) + 1
    })
    Object.entries(observationCalendar.customLogs).forEach(([dateKey, logs]) => {
      const d = new Date(dateKey)
      if (d.getFullYear() !== year || d.getMonth() !== month) return
      logs.forEach(log => {
        if (!log.constellationId) return
        if (log.type !== 'discovery' && log.type !== 'observation') return
        counts[log.constellationId] = (counts[log.constellationId] || 0) + 1
      })
    })
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5)
    const maxCount = sorted[0]?.[1] || 1

    if (sorted.length === 0) return <div className="text-[10px] text-white/40">暂无数据</div>

    return (
      <div className="space-y-1.5">
        {sorted.map(([id, count], i) => {
          const c = getConstellationById(id)
          return (
            <div key={id} className="flex items-center gap-2">
              <span className="text-[10px] text-white/40 w-4 flex-shrink-0">{i + 1}</span>
              <span className="text-xs text-white/80 w-14 truncate flex-shrink-0">{c?.name || id}</span>
              <div className="flex-1 h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan rounded-full"
                  style={{ width: `${(count / maxCount) * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-nebula-cyan font-bold w-6 text-right flex-shrink-0">{count}</span>
            </div>
          )
        })}
      </div>
    )
  }

  const LogEditor = () => {
    const handleSave = () => {
      if (!logForm.title && !logForm.content) {
        alert('请至少填写标题或内容')
        return
      }
      if (editingLog) {
        updateCustomLog(selectedDate, editingLog.id, { ...logForm })
      } else {
        addCustomLog(selectedDate, { ...logForm })
      }
      setShowLogEditor(false)
    }

    return (
      <div className="fixed inset-0 z-50 bg-space-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="w-full max-w-md glass-panel max-h-[90vh] flex flex-col overflow-hidden">
          <div className="p-5 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-white text-lg">
                {editingLog ? '编辑笔记' : '补录观星笔记'}
              </h3>
              <button onClick={() => setShowLogEditor(false)} className="icon-btn">✕</button>
            </div>
            <p className="text-[11px] text-white/40 mt-1">
              {formatDateKey(selectedDate).replace(/-/g, '.')} · 星期{['日','一','二','三','四','五','六'][selectedDate.getDay()]}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            <div>
              <label className="text-[11px] text-white/60 mb-1.5 block">类型</label>
              <div className="grid grid-cols-3 gap-1.5">
                {LOG_TYPES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setLogForm(f => ({ ...f, type: t.id }))}
                    className={`p-2 rounded-lg text-[11px] transition-all flex flex-col items-center gap-0.5 ${
                      logForm.type === t.id
                        ? 'bg-white/10 border border-white/20 text-white'
                        : 'bg-space-800/40 border border-transparent text-white/50 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-base">{t.icon}</span>
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] text-white/60 mb-1.5 block">关联星座 (可选)</label>
              <select
                value={logForm.constellationId || ''}
                onChange={(e) => setLogForm(f => ({ ...f, constellationId: e.target.value || null }))}
                className="w-full px-3 py-2 rounded-lg bg-space-800/60 border border-white/10 text-white text-xs
                         focus:border-nebula-purple/50 focus:outline-none transition-all"
              >
                <option value="">不关联</option>
                {CONSTELLATIONS.map(c => (
                  <option key={c.id} value={c.id}>{c.icon || '⭐'} {c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] text-white/60 mb-1.5 block">标题</label>
              <input
                type="text"
                value={logForm.title}
                onChange={(e) => setLogForm(f => ({ ...f, title: e.target.value }))}
                placeholder="给这篇笔记起个标题..."
                className="w-full px-3 py-2 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm
                         placeholder-white/20 focus:border-nebula-purple/50 focus:outline-none transition-all"
                maxLength={50}
              />
            </div>

            <div>
              <label className="text-[11px] text-white/60 mb-1.5 block">内容</label>
              <textarea
                value={logForm.content}
                onChange={(e) => setLogForm(f => ({ ...f, content: e.target.value }))}
                placeholder="记录你的观星感受、发现的趣事、拍摄的照片描述..."
                rows={5}
                className="w-full px-3 py-2 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm
                         placeholder-white/20 focus:border-nebula-purple/50 focus:outline-none transition-all
                         resize-none"
                maxLength={500}
              />
              <div className="text-right text-[10px] text-white/30 mt-1">
                {logForm.content.length}/500
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-white/60 mb-1.5 block">心情指数</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      onClick={() => setLogForm(f => ({ ...f, mood: n }))}
                      className={`flex-1 py-1.5 rounded-lg text-base transition-all ${
                        logForm.mood >= n ? 'bg-star-gold/20 scale-110' : 'bg-space-800/40 opacity-40'
                      }`}
                    >
                      {n <= logForm.mood ? '😊' : '😐'}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[11px] text-white/60 mb-1.5 block">天气状况</label>
                <select
                  value={logForm.weather}
                  onChange={(e) => setLogForm(f => ({ ...f, weather: e.target.value }))}
                  className="w-full px-2 py-1.5 rounded-lg bg-space-800/60 border border-white/10 text-white text-xs
                           focus:border-nebula-purple/50 focus:outline-none transition-all"
                >
                  <option value="clear">☀️ 晴朗</option>
                  <option value="cloudy">☁️ 多云</option>
                  <option value="hazy">🌫️ 有薄雾</option>
                  <option value="rainy">🌧️ 雨后</option>
                  <option value="windy">💨 大风</option>
                  <option value="cold">🥶 寒冷</option>
                  <option value="warm">🌡️ 温暖</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <button
              onClick={() => setShowLogEditor(false)}
              className="flex-1 py-2 px-4 rounded-xl text-sm bg-white/5 border border-white/10 text-white/70
                       hover:bg-white/10 transition-all"
            >
              取消
            </button>
            <button
              onClick={handleSave}
              className="flex-1 py-2 px-4 rounded-xl text-sm font-medium
                       bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white
                       hover:shadow-lg active:scale-95 transition-all"
            >
              {editingLog ? '保存修改' : '添加笔记'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[88vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">📅 观测日历</h2>
              <p className="text-xs text-white/50 mt-1">
                每日签到 · 星座推荐 · 记录每一次观星时刻
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

          <div className="mt-3 flex items-center justify-between p-3 rounded-xl bg-space-800/40 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-star-gold leading-none">
                  {streakInfo.currentStreak}
                </div>
                <div className="text-[9px] text-white/40 mt-0.5">连续签到</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-nebula-cyan leading-none">
                  {streakInfo.totalDays}
                </div>
                <div className="text-[9px] text-white/40 mt-0.5">累计天数</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-nebula-purple leading-none">
                  💫{observationCalendar.stardust}
                </div>
                <div className="text-[9px] text-white/40 mt-0.5">星尘</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {streakInfo.milestones.slice(0, 3).map((m, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all ${
                    m.achieved
                      ? 'bg-star-gold/20 ring-1 ring-star-gold/30'
                      : 'bg-space-700/40 opacity-50'
                  }`}
                  title={`${m.days}天 · ${m.label}`}
                >
                  {m.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex gap-1.5 p-1 rounded-xl bg-space-800/30">
            {[
              { id: 'calendar', label: '日历', icon: '📅' },
              { id: 'detail', label: '详情', icon: '📖' },
              { id: 'stats', label: '统计', icon: '📊' },
            ].map(tab => (
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

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-4">
          {viewMode === 'calendar' && (
            <>
              {renderCheckinSection()}
              {renderRecommendation()}
              {renderCalendar()}
            </>
          )}
          {viewMode === 'detail' && (
            <>
              {renderCalendar()}
              <div className="pt-2 border-t border-white/5">
                {renderSelectedDateDetail()}
              </div>
            </>
          )}
          {viewMode === 'stats' && (
            <>
              <div className="flex items-center justify-between px-1 mb-1">
                <button onClick={goToPrevMonth} className="w-8 h-8 rounded-lg bg-space-700/50 text-white/70 hover:bg-white/10 transition-all flex items-center justify-center">
                  ‹
                </button>
                <span className="font-display text-white/80 text-sm">
                  {currentMonth.year}年 {MONTH_NAMES[currentMonth.month]} 统计
                </span>
                <button onClick={goToNextMonth} className="w-8 h-8 rounded-lg bg-space-700/50 text-white/70 hover:bg-white/10 transition-all flex items-center justify-center">
                  ›
                </button>
              </div>
              {renderStats()}
            </>
          )}
        </div>
      </div>

      {showLogEditor && <LogEditor />}
    </div>
  )
}
