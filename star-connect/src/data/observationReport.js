import { ACHIEVEMENTS, getAchievementById } from './achievements'
import { SEASON_ACHIEVEMENTS } from './seasonPlan'
import { ROUTE_ACHIEVEMENTS } from './starRoute'
import { CONSTELLATIONS, getConstellationById } from './constellations'
import { SEASONS, SEASON_PHASES, SEASON_REWARDS } from './seasonPlan'

export const REPORT_TYPES = {
  WEEKLY: 'weekly',
  MONTHLY: 'monthly'
}

export const REPORT_TEMPLATES = {
  explorer: {
    id: 'explorer',
    name: '探索者',
    icon: '🧭',
    description: '侧重发现历程与探索轨迹',
    color: 'from-blue-500 to-cyan-400'
  },
  achiever: {
    id: 'achiever',
    name: '成就者',
    icon: '🏆',
    description: '侧重里程碑与荣誉记录',
    color: 'from-star-gold to-nebula-orange'
  },
  storyteller: {
    id: 'storyteller',
    name: '叙事者',
    icon: '📖',
    description: '侧重日志故事与情感记录',
    color: 'from-pink-500 to-purple-500'
  }
}

const ALL_ACHIEVEMENTS = [...ACHIEVEMENTS, ...SEASON_ACHIEVEMENTS, ...ROUTE_ACHIEVEMENTS]

export function getStartOfWeek(date = new Date()) {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  return new Date(d.setDate(diff))
}

export function getEndOfWeek(date = new Date()) {
  const start = getStartOfWeek(date)
  return new Date(start.getFullYear(), start.getMonth(), start.getDate() + 6, 23, 59, 59, 999)
}

export function getStartOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

export function getEndOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
}

export function getWeekRange(date = new Date()) {
  const start = getStartOfWeek(date)
  const end = getEndOfWeek(date)
  return { start, end }
}

export function getMonthRange(date = new Date()) {
  const start = getStartOfMonth(date)
  const end = getEndOfMonth(date)
  return { start, end }
}

export function formatDateRange(start, end) {
  const formatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return `${start.toLocaleDateString('zh-CN', formatOptions)} - ${end.toLocaleDateString('zh-CN', formatOptions)}`
}

export function filterLogsByRange(logs, start, end) {
  const startTime = start.getTime()
  const endTime = end.getTime()
  return logs.filter(log => log.timestamp >= startTime && log.timestamp <= endTime)
}

export function aggregateExplorationJourney(logs, start, end) {
  const rangeLogs = filterLogsByRange(logs, start, end)

  const discoveries = rangeLogs.filter(l => l.type === 'discovery')
  const reobservations = rangeLogs.filter(l => l.type === 'reobservation')
  const perfectRuns = rangeLogs.filter(l => l.perfect)
  const achievements = rangeLogs.filter(l => l.type === 'achievement')
  const seasonRewards = rangeLogs.filter(l => l.type === 'season_reward')
  const events = rangeLogs.filter(l => l.type?.startsWith('event_'))
  const quizzes = rangeLogs.filter(l => l.type?.startsWith('quiz_'))
  const routes = rangeLogs.filter(l => l.type?.startsWith('route_'))
  const expeditions = rangeLogs.filter(l => l.type?.startsWith('expedition_'))

  const discoveredConstellations = new Set()
  const reobservedConstellations = new Set()
  const perfectConstellations = new Set()

  discoveries.forEach(l => {
    if (l.constellationId) discoveredConstellations.add(l.constellationId)
  })
  reobservations.forEach(l => {
    if (l.constellationId) reobservedConstellations.add(l.constellationId)
  })
  perfectRuns.forEach(l => {
    if (l.constellationId) perfectConstellations.add(l.constellationId)
  })

  const dailyActivity = {}
  rangeLogs.forEach(log => {
    const date = new Date(log.timestamp).toDateString()
    if (!dailyActivity[date]) {
      dailyActivity[date] = { count: 0, types: new Set() }
    }
    dailyActivity[date].count++
    dailyActivity[date].types.add(log.type)
  })

  const activeDays = Object.keys(dailyActivity).length
  const mostActiveDay = Object.entries(dailyActivity)
    .sort((a, b) => b[1].count - a[1].count)[0]

  const timeline = [...rangeLogs]
    .sort((a, b) => a.timestamp - b.timestamp)
    .map(log => ({
      ...log,
      time: new Date(log.timestamp)
    }))

  return {
    totalActivities: rangeLogs.length,
    discoveries: discoveries.length,
    reobservations: reobservations.length,
    perfectRuns: perfectRuns.length,
    achievements: achievements.length,
    seasonRewards: seasonRewards.length,
    events: events.length,
    quizzes: quizzes.length,
    routes: routes.length,
    expeditions: expeditions.length,
    discoveredConstellations: Array.from(discoveredConstellations),
    reobservedConstellations: Array.from(reobservedConstellations),
    perfectConstellations: Array.from(perfectConstellations),
    activeDays,
    mostActiveDay: mostActiveDay ? {
      date: new Date(mostActiveDay[0]),
      count: mostActiveDay[1].count
    } : null,
    dailyActivity,
    timeline
  }
}

export function aggregateAchievementMilestones(unlockedAchievements, logs, start, end) {
  const rangeLogs = filterLogsByRange(logs, start, end)
  const achievementLogs = rangeLogs.filter(l => l.type === 'achievement')

  const newlyUnlocked = achievementLogs.map(log => {
    const achievement = getAchievementById(log.achievementId) || 
      ALL_ACHIEVEMENTS.find(a => a.id === log.achievementId)
    return {
      ...achievement,
      unlockedAt: log.timestamp
    }
  }).filter(Boolean)

  const seasonRewardLogs = rangeLogs.filter(l => l.type === 'season_reward')
  const seasonMilestones = seasonRewardLogs.map(log => {
    const season = SEASONS[log.seasonId]
    const phase = SEASON_PHASES[log.phaseId]
    const reward = SEASON_REWARDS[log.seasonId]?.[log.phaseId]
    return {
      id: `${log.seasonId}_${log.phaseId}`,
      name: log.rewardName,
      description: `${season?.name || ''} · ${phase?.name || ''} 阶段完成`,
      icon: season?.icon || '🎁',
      reward,
      unlockedAt: log.timestamp
    }
  })

  const categories = {}
  newlyUnlocked.forEach(a => {
    const cat = a.category || 'other'
    if (!categories[cat]) categories[cat] = []
    categories[cat].push(a)
  })

  const totalUnlocked = unlockedAchievements.length
  const totalAchievements = ALL_ACHIEVEMENTS.length
  const progressPercentage = totalAchievements > 0 
    ? Math.round((totalUnlocked / totalAchievements) * 100) 
    : 0

  return {
    newlyUnlocked,
    seasonMilestones,
    categories,
    totalUnlocked,
    totalAchievements,
    progressPercentage,
    newlyUnlockedCount: newlyUnlocked.length,
    seasonMilestonesCount: seasonMilestones.length
  }
}

export function aggregateLogSummary(logs, customLogs = {}, start, end) {
  const rangeLogs = filterLogsByRange(logs, start, end)

  const constellationLogs = rangeLogs.filter(l => 
    l.type === 'discovery' || l.type === 'reobservation'
  )

  const constellationStats = {}
  constellationLogs.forEach(log => {
    if (!log.constellationId) return
    if (!constellationStats[log.constellationId]) {
      constellationStats[log.constellationId] = {
        id: log.constellationId,
        count: 0,
        perfect: 0,
        discoveries: 0,
        reobservations: 0,
        firstObserved: log.timestamp,
        lastObserved: log.timestamp
      }
    }
    const stats = constellationStats[log.constellationId]
    stats.count++
    if (log.perfect) stats.perfect++
    if (log.type === 'discovery') stats.discoveries++
    if (log.type === 'reobservation') stats.reobservations++
    stats.firstObserved = Math.min(stats.firstObserved, log.timestamp)
    stats.lastObserved = Math.max(stats.lastObserved, log.timestamp)
  })

  const topConstellations = Object.values(constellationStats)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .map(s => ({
      ...s,
      constellation: getConstellationById(s.id)
    }))

  const notes = []
  Object.entries(customLogs).forEach(([dateKey, dayLogs]) => {
    const logDate = new Date(dateKey)
    if (logDate >= start && logDate <= end) {
      dayLogs.forEach(log => {
        if (log.note || log.type === 'note') {
          notes.push({
            ...log,
            date: logDate
          })
        }
      })
    }
  })

  const notableMoments = []
  constellationLogs.forEach(log => {
    if (log.perfect || log.type === 'discovery') {
      notableMoments.push({
        type: log.type,
        constellation: getConstellationById(log.constellationId),
        perfect: log.perfect,
        timestamp: log.timestamp
      })
    }
  })

  const eventLogs = rangeLogs.filter(l => 
    l.type === 'event_reward' || l.type === 'event_participate'
  )
  eventLogs.forEach(log => {
    notableMoments.push({
      type: 'event',
      eventName: log.eventName,
      message: log.message,
      timestamp: log.timestamp
    })
  })

  notableMoments.sort((a, b) => a.timestamp - b.timestamp)

  return {
    constellationStats,
    topConstellations,
    notes,
    notableMoments,
    totalObservations: constellationLogs.length,
    uniqueConstellations: Object.keys(constellationStats).length,
    notesCount: notes.length
  }
}

export function generateInsights(journey, milestones, summary) {
  const insights = []

  if (journey.discoveries > 0) {
    const constellationNames = journey.discoveredConstellations
      .map(id => getConstellationById(id)?.name)
      .filter(Boolean)
    if (constellationNames.length > 0) {
      insights.push({
        type: 'discovery',
        icon: '✨',
        title: '新发现',
        content: `你发现了 ${journey.discoveries} 个新星座：${constellationNames.join('、')}`,
        color: 'text-nebula-purple'
      })
    }
  }

  if (journey.perfectRuns > 0) {
    insights.push({
      type: 'perfect',
      icon: '💎',
      title: '完美表现',
      content: `完成了 ${journey.perfectRuns} 次完美观测，零失误的精准连线！`,
      color: 'text-star-gold'
    })
  }

  if (milestones.newlyUnlockedCount > 0) {
    const achievementNames = milestones.newlyUnlocked
      .slice(0, 3)
      .map(a => a.name)
    insights.push({
      type: 'achievement',
      icon: '🏆',
      title: '里程碑解锁',
      content: `解锁了 ${milestones.newlyUnlockedCount} 个成就${achievementNames.length > 0 ? `，包括${achievementNames.join('、')}` : ''}`,
      color: 'text-nebula-orange'
    })
  }

  if (journey.activeDays >= 5) {
    insights.push({
      type: 'consistency',
      icon: '🔥',
      title: '坚持不懈',
      content: `本周有 ${journey.activeDays} 天在探索星空，保持这份热情！`,
      color: 'text-red-400'
    })
  } else if (journey.activeDays >= 3) {
    insights.push({
      type: 'consistency',
      icon: '🌱',
      title: '稳步前进',
      content: `本周探索了 ${journey.activeDays} 天，继续保持这个节奏！`,
      color: 'text-green-400'
    })
  }

  if (summary.topConstellations.length > 0) {
    const top = summary.topConstellations[0]
    if (top.constellation) {
      insights.push({
        type: 'favorite',
        icon: '⭐',
        title: '最常观测',
        content: `${top.constellation.name} 是你观测最多的星座，共 ${top.count} 次`,
        color: 'text-nebula-cyan'
      })
    }
  }

  if (journey.totalActivities === 0) {
    insights.push({
      type: 'empty',
      icon: '🌙',
      title: '等待探索',
      content: '这段时间还没有观测记录，开始你的星空之旅吧！',
      color: 'text-white/50'
    })
  }

  return insights
}

export function generateReport(type, date, storeState) {
  const isWeekly = type === REPORT_TYPES.WEEKLY
  const range = isWeekly ? getWeekRange(date) : getMonthRange(date)
  const { start, end } = range

  const {
    observationLogs,
    unlockedAchievements,
    observationCalendar = {},
    totalObservations = {},
    perfectObservations = {},
    discoveredConstellations = [],
    seasonHistory = [],
    seasonRewardsClaimed = [],
    nightExpedition = {},
    starRoute = {}
  } = storeState

  const journey = aggregateExplorationJourney(observationLogs, start, end)
  const milestones = aggregateAchievementMilestones(
    unlockedAchievements, 
    observationLogs, 
    start, 
    end
  )
  const summary = aggregateLogSummary(
    observationLogs, 
    observationCalendar.customLogs || {}, 
    start, 
    end
  )
  const insights = generateInsights(journey, milestones, summary)

  const totalObs = Object.values(totalObservations).reduce((a, b) => a + b, 0)
  const totalPerfect = Object.keys(perfectObservations).length

  const overallStats = {
    totalConstellationsDiscovered: discoveredConstellations.length,
    totalObservations: totalObs,
    totalPerfect: totalPerfect,
    totalAchievements: unlockedAchievements.length,
    totalSeasonRewards: seasonRewardsClaimed.length,
    totalExpeditions: nightExpedition.totalCompleted || 0,
    totalRoutes: starRoute.history?.length || 0
  }

  return {
    id: `report_${type}_${start.getTime()}_${end.getTime()}`,
    type,
    title: isWeekly ? '星空周报' : '星空月报',
    subtitle: formatDateRange(start, end),
    dateRange: { start, end },
    generatedAt: Date.now(),
    journey,
    milestones,
    summary,
    insights,
    overallStats,
    isEmpty: journey.totalActivities === 0
  }
}

export function exportReportAsText(report) {
  const lines = []

  lines.push(`🌟 ${report.title}`)
  lines.push(`📅 ${report.subtitle}`)
  lines.push('═'.repeat(40))
  lines.push('')

  lines.push('📊 探索数据概览')
  lines.push('─'.repeat(20))
  lines.push(`• 新发现星座: ${report.journey.discoveries} 个`)
  lines.push(`• 再次观测: ${report.journey.reobservations} 次`)
  lines.push(`• 完美观测: ${report.journey.perfectRuns} 次`)
  lines.push(`• 解锁成就: ${report.milestones.newlyUnlockedCount} 个`)
  lines.push(`• 活跃天数: ${report.journey.activeDays} 天`)
  lines.push('')

  if (report.journey.discoveredConstellations.length > 0) {
    lines.push('✨ 新发现的星座')
    lines.push('─'.repeat(20))
    report.journey.discoveredConstellations.forEach(id => {
      const c = getConstellationById(id)
      if (c) lines.push(`  • ${c.name} (${c.nameEn})`)
    })
    lines.push('')
  }

  if (report.milestones.newlyUnlocked.length > 0) {
    lines.push('🏆 解锁的成就')
    lines.push('─'.repeat(20))
    report.milestones.newlyUnlocked.forEach(a => {
      lines.push(`  ${a.icon} ${a.name}: ${a.description}`)
    })
    lines.push('')
  }

  if (report.summary.topConstellations.length > 0) {
    lines.push('⭐ 最常观测的星座')
    lines.push('─'.repeat(20))
    report.summary.topConstellations.slice(0, 3).forEach((s, i) => {
      if (s.constellation) {
        lines.push(`  ${i + 1}. ${s.constellation.name}: ${s.count} 次`)
      }
    })
    lines.push('')
  }

  if (report.insights.length > 0) {
    lines.push('💡 观测洞察')
    lines.push('─'.repeat(20))
    report.insights.forEach(insight => {
      lines.push(`  ${insight.icon} ${insight.title}: ${insight.content}`)
    })
    lines.push('')
  }

  lines.push('📈 累计数据')
  lines.push('─'.repeat(20))
  lines.push(`• 累计发现星座: ${report.overallStats.totalConstellationsDiscovered} 个`)
  lines.push(`• 累计观测次数: ${report.overallStats.totalObservations} 次`)
  lines.push(`• 累计完美观测: ${report.overallStats.totalPerfect} 次`)
  lines.push(`• 累计解锁成就: ${report.overallStats.totalAchievements} 个`)
  lines.push('')

  lines.push(`— 由 Star Connect 生成于 ${new Date(report.generatedAt).toLocaleString('zh-CN')}`)

  return lines.join('\n')
}

export function shareReport(report, templateId = 'explorer') {
  const template = REPORT_TEMPLATES[templateId] || REPORT_TEMPLATES.explorer
  
  return {
    ...report,
    template,
    shareUrl: null,
    shareableContent: {
      title: `${template.icon} 我的${report.title}`,
      text: exportReportAsText(report),
      hashtags: ['StarConnect', '星空观测', templateId === 'achiever' ? '成就解锁' : '探索记录']
    }
  }
}
