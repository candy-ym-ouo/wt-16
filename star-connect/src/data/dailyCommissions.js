import { CONSTELLATIONS, getConstellationById } from './constellations'
import { getCurrentSeason, getSeasonConstellations, SEASONS } from './seasonPlan'

export const COMMISSION_TYPES = {
  DISCOVERY: 'discovery',
  PERFECT: 'perfect',
  REOBSERVATION: 'reobservation',
  SEASON_DISCOVERY: 'season_discovery',
  STREAK: 'streak',
  MULTI_OBSERVE: 'multi_observe'
}

export const COMMISSION_DIFFICULTY = {
  EASY: 'easy',
  NORMAL: 'normal',
  HARD: 'hard'
}

const COMMISSION_TEMPLATES = {
  [COMMISSION_TYPES.DISCOVERY]: {
    [COMMISSION_DIFFICULTY.EASY]: [
      { name: '初识星光', desc: '发现1个新星座', target: 1, reward: 30, icon: '✨' },
    ],
    [COMMISSION_DIFFICULTY.NORMAL]: [
      { name: '星空探险家', desc: '发现2个新星座', target: 2, reward: 60, icon: '🌠' },
    ],
    [COMMISSION_DIFFICULTY.HARD]: [
      { name: '星座猎手', desc: '发现3个新星座', target: 3, reward: 100, icon: '🌟' },
    ]
  },
  [COMMISSION_TYPES.PERFECT]: {
    [COMMISSION_DIFFICULTY.EASY]: [
      { name: '精准观测', desc: '完美完成1个星座', target: 1, reward: 40, icon: '🎯' },
    ],
    [COMMISSION_DIFFICULTY.NORMAL]: [
      { name: '完美主义者', desc: '完美完成2个星座', target: 2, reward: 80, icon: '💎' },
    ],
    [COMMISSION_DIFFICULTY.HARD]: [
      { name: '零失误大师', desc: '完美完成3个星座', target: 3, reward: 120, icon: '🏆' },
    ]
  },
  [COMMISSION_TYPES.REOBSERVATION]: {
    [COMMISSION_DIFFICULTY.EASY]: [
      { name: '重温经典', desc: '再次观测2个已知星座', target: 2, reward: 25, icon: '🔭' },
    ],
    [COMMISSION_DIFFICULTY.NORMAL]: [
      { name: '熟能生巧', desc: '再次观测4个已知星座', target: 4, reward: 50, icon: '📡' },
    ],
    [COMMISSION_DIFFICULTY.HARD]: [
      { name: '观测常客', desc: '再次观测6个已知星座', target: 6, reward: 90, icon: '🛰️' },
    ]
  },
  [COMMISSION_TYPES.SEASON_DISCOVERY]: {
    [COMMISSION_DIFFICULTY.EASY]: [
      { name: '当季初探', desc: '观测1个当季星座', target: 1, reward: 35, icon: '🌸' },
    ],
    [COMMISSION_DIFFICULTY.NORMAL]: [
      { name: '季节行者', desc: '观测2个当季星座', target: 2, reward: 70, icon: '🍂' },
    ],
    [COMMISSION_DIFFICULTY.HARD]: [
      { name: '季节大师', desc: '累计观测当季星座4次', target: 4, reward: 150, icon: '👑' },
    ]
  },
  [COMMISSION_TYPES.MULTI_OBSERVE]: {
    [COMMISSION_DIFFICULTY.EASY]: [
      { name: '勤奋观星', desc: '累计观测3次', target: 3, reward: 20, icon: '⭐' },
    ],
    [COMMISSION_DIFFICULTY.NORMAL]: [
      { name: '星空漫步', desc: '累计观测5次', target: 5, reward: 45, icon: '🌌' },
    ],
    [COMMISSION_DIFFICULTY.HARD]: [
      { name: '观星狂人', desc: '累计观测8次', target: 8, reward: 80, icon: '💫' },
    ]
  }
}

export const DAILY_ACHIEVEMENTS = [
  {
    id: 'daily_first',
    name: '每日启程',
    description: '完成第一个每日委托',
    icon: '🌅',
    category: 'daily',
    condition: { type: 'daily_complete', value: 1 },
    reward: { type: 'stardust', amount: 50 }
  },
  {
    id: 'daily_7',
    name: '周常达人',
    description: '累计完成7个每日委托',
    icon: '📅',
    category: 'daily',
    condition: { type: 'daily_complete', value: 7 },
    reward: { type: 'stardust', amount: 100 }
  },
  {
    id: 'daily_30',
    name: '月度观星者',
    description: '累计完成30个每日委托',
    icon: '🗓️',
    category: 'daily',
    condition: { type: 'daily_complete', value: 30 },
    reward: { type: 'stardust', amount: 300 }
  },
  {
    id: 'daily_streak_3',
    name: '三日连续',
    description: '连续3天完成所有每日委托',
    icon: '🔥',
    category: 'daily',
    condition: { type: 'daily_streak', value: 3 },
    reward: { type: 'stardust', amount: 80 }
  },
  {
    id: 'daily_streak_7',
    name: '周周坚持',
    description: '连续7天完成所有每日委托',
    icon: '💪',
    category: 'daily',
    condition: { type: 'daily_streak', value: 7 },
    reward: { type: 'stardust', amount: 200 }
  },
  {
    id: 'daily_perfect_10',
    name: '完美委托',
    description: '累计完成10个困难难度委托',
    icon: '🏅',
    category: 'daily',
    condition: { type: 'daily_hard_complete', value: 10 },
    reward: { type: 'stardust', amount: 150 }
  }
]

function getSeasonIcon() {
  const season = getCurrentSeason()
  return SEASONS[season]?.icon || '⭐'
}

function pickRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function generateDailyCommissions(discoveredIds, perfectIds, totalObservations) {
  const currentSeason = getCurrentSeason()
  const seasonConstellations = getSeasonConstellations(currentSeason)
  const discoveredInSeason = seasonConstellations.filter(id => discoveredIds.includes(id))
  const undiscoveredInSeason = seasonConstellations.filter(id => !discoveredIds.includes(id))
  const totalDiscovered = discoveredIds.length
  const totalConstellations = CONSTELLATIONS.length

  const availableTypes = [COMMISSION_TYPES.MULTI_OBSERVE]

  if (totalDiscovered < totalConstellations) {
    availableTypes.push(COMMISSION_TYPES.DISCOVERY)
  }

  if (undiscoveredInSeason.length > 0 || discoveredInSeason.length > 0) {
    availableTypes.push(COMMISSION_TYPES.SEASON_DISCOVERY)
  }

  if (totalDiscovered > 0) {
    availableTypes.push(COMMISSION_TYPES.PERFECT)
    availableTypes.push(COMMISSION_TYPES.REOBSERVATION)
  }

  const selectedTypes = pickRandomItems(availableTypes, Math.min(3, availableTypes.length))

  const commissions = selectedTypes.map((type, index) => {
    let difficulty
    if (totalDiscovered < 2) {
      difficulty = COMMISSION_DIFFICULTY.EASY
    } else if (totalDiscovered < 4) {
      difficulty = COMMISSION_DIFFICULTY.NORMAL
    } else {
      const diffOptions = [COMMISSION_DIFFICULTY.EASY, COMMISSION_DIFFICULTY.NORMAL, COMMISSION_DIFFICULTY.HARD]
      difficulty = diffOptions[Math.floor(Math.random() * diffOptions.length)]
    }

    const templates = COMMISSION_TEMPLATES[type][difficulty]
    const template = templates[Math.floor(Math.random() * templates.length)]

    let target = template.target
    let constellationId = null
    let constellationName = null

    if (type === COMMISSION_TYPES.PERFECT) {
      const imperfect = CONSTELLATIONS.filter(c => discoveredIds.includes(c.id) && !perfectIds[c.id])
      if (imperfect.length > 0) {
        const pick = imperfect[Math.floor(Math.random() * imperfect.length)]
        constellationId = pick.id
        constellationName = pick.name
      }
    }

    return {
      id: `daily_${Date.now()}_${index}`,
      type,
      difficulty,
      name: template.name,
      description: template.desc,
      icon: type === COMMISSION_TYPES.SEASON_DISCOVERY ? getSeasonIcon() : template.icon,
      target,
      current: 0,
      reward: template.reward,
      constellationId,
      constellationName,
      seasonId: currentSeason,
      completed: false,
      claimed: false
    }
  })

  return commissions
}

export function getDailyCommissionProgress(commission, observationLogs, discoveredIds, perfectIds, totalObservations) {
  let current = 0
  let completed = false

  switch (commission.type) {
    case COMMISSION_TYPES.DISCOVERY: {
      const todayDiscoveries = observationLogs.filter(log => {
        if (log.type !== 'discovery') return false
        const today = new Date().toDateString()
        const logDate = new Date(log.timestamp).toDateString()
        return logDate === today
      })
      current = todayDiscoveries.length
      completed = current >= commission.target
      break
    }

    case COMMISSION_TYPES.PERFECT: {
      const todayPerfect = observationLogs.filter(log => {
        if (!log.perfect) return false
        if (log.type !== 'discovery' && log.type !== 'reobservation') return false
        const today = new Date().toDateString()
        const logDate = new Date(log.timestamp).toDateString()
        return logDate === today
      })
      current = todayPerfect.length
      completed = current >= commission.target
      break
    }

    case COMMISSION_TYPES.REOBSERVATION: {
      const todayReobs = observationLogs.filter(log => {
        if (log.type !== 'reobservation') return false
        const today = new Date().toDateString()
        const logDate = new Date(log.timestamp).toDateString()
        return logDate === today
      })
      current = todayReobs.length
      completed = current >= commission.target
      break
    }

    case COMMISSION_TYPES.SEASON_DISCOVERY: {
      const today = new Date().toDateString()
      const seasonConst = getSeasonConstellations(commission.seasonId)
      const todaySeasonObs = observationLogs.filter(log => {
        if (log.type !== 'discovery' && log.type !== 'reobservation') return false
        if (!seasonConst.includes(log.constellationId)) return false
        const logDate = new Date(log.timestamp).toDateString()
        return logDate === today
      })
      current = todaySeasonObs.length
      completed = current >= commission.target
      break
    }

    case COMMISSION_TYPES.MULTI_OBSERVE: {
      const todayObservations = observationLogs.filter(log => {
        if (log.type !== 'discovery' && log.type !== 'reobservation') return false
        const today = new Date().toDateString()
        const logDate = new Date(log.timestamp).toDateString()
        return logDate === today
      })
      current = todayObservations.length
      completed = current >= commission.target
      break
    }

    default:
      break
  }

  return {
    current: Math.min(current, commission.target),
    target: commission.target,
    percentage: commission.target > 0 ? Math.min((current / commission.target) * 100, 100) : 0,
    completed
  }
}

export function getDailyAchievementById(id) {
  return DAILY_ACHIEVEMENTS.find(a => a.id === id)
}
