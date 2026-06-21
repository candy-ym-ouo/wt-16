import { CONSTELLATIONS } from './constellations'
import { ACHIEVEMENTS } from './achievements'

export const SEASONS = {
  spring: {
    id: 'spring',
    name: '春季',
    nameEn: 'Spring',
    icon: '🌸',
    color: 'from-pink-500 to-rose-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-300',
    months: '3月 - 5月',
    description: '万物复苏，北斗七星指引方向'
  },
  summer: {
    id: 'summer',
    name: '夏季',
    nameEn: 'Summer',
    icon: '☀️',
    color: 'from-orange-500 to-amber-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-300',
    months: '6月 - 8月',
    description: '银河璀璨，天蝎与天琴交相辉映'
  },
  autumn: {
    id: 'autumn',
    name: '秋季',
    nameEn: 'Autumn',
    icon: '🍂',
    color: 'from-amber-600 to-yellow-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-300',
    months: '9月 - 11月',
    description: '秋高气爽，仙后与天鹅展翅翱翔'
  },
  winter: {
    id: 'winter',
    name: '冬季',
    nameEn: 'Winter',
    icon: '❄️',
    color: 'from-cyan-500 to-blue-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-300',
    months: '12月 - 2月',
    description: '寒夜深沉，猎户座闪耀星空'
  }
}

export const SEASON_PHASES = {
  beginner: {
    id: 'beginner',
    name: '入门探索',
    description: '熟悉当季星座的基本形态',
    requirement: 1,
    multiplier: 1
  },
  intermediate: {
    id: 'intermediate',
    name: '深度观测',
    description: '完美完成当季所有星座',
    requirement: 2,
    multiplier: 1.5
  },
  master: {
    id: 'master',
    name: '季节大师',
    description: '反复观测，解锁隐藏成就',
    requirement: 3,
    multiplier: 2
  }
}

const SEASON_CONSTELLATION_MAP = {
  spring: CONSTELLATIONS.filter(c => c.season === '春').map(c => c.id),
  summer: CONSTELLATIONS.filter(c => c.season === '夏').map(c => c.id),
  autumn: CONSTELLATIONS.filter(c => c.season === '秋').map(c => c.id),
  winter: CONSTELLATIONS.filter(c => c.season === '冬').map(c => c.id)
}

export const SEASON_REWARDS = {
  spring: {
    beginner: {
      id: 'spring_beginner',
      name: '春之萌芽',
      type: 'title',
      icon: '🌱',
      description: '完成春季入门探索的称号'
    },
    intermediate: {
      id: 'spring_intermediate',
      name: '花开满庭',
      type: 'badge',
      icon: '🌸',
      description: '完美完成春季所有星座的徽章'
    },
    master: {
      id: 'spring_master',
      name: '春日守望者',
      type: 'achievement',
      icon: '🌺',
      description: '春季观测大师的终极成就',
      achievementId: 'spring_master'
    }
  },
  summer: {
    beginner: {
      id: 'summer_beginner',
      name: '夏之初阳',
      type: 'title',
      icon: '🌞',
      description: '完成夏季入门探索的称号'
    },
    intermediate: {
      id: 'summer_intermediate',
      name: '繁星漫天',
      type: 'badge',
      icon: '⭐',
      description: '完美完成夏季所有星座的徽章'
    },
    master: {
      id: 'summer_master',
      name: '银河守护者',
      type: 'achievement',
      icon: '🌌',
      description: '夏季观测大师的终极成就',
      achievementId: 'summer_master'
    }
  },
  autumn: {
    beginner: {
      id: 'autumn_beginner',
      name: '秋之寄语',
      type: 'title',
      icon: '🍁',
      description: '完成秋季入门探索的称号'
    },
    intermediate: {
      id: 'autumn_intermediate',
      name: '金风送爽',
      type: 'badge',
      icon: '🌾',
      description: '完美完成秋季所有星座的徽章'
    },
    master: {
      id: 'autumn_master',
      name: '秋水共长天',
      type: 'achievement',
      icon: '🦢',
      description: '秋季观测大师的终极成就',
      achievementId: 'autumn_master'
    }
  },
  winter: {
    beginner: {
      id: 'winter_beginner',
      name: '冬之静谧',
      type: 'title',
      icon: '⛄',
      description: '完成冬季入门探索的称号'
    },
    intermediate: {
      id: 'winter_intermediate',
      name: '傲雪凌霜',
      type: 'badge',
      icon: '❄️',
      description: '完美完成冬季所有星座的徽章'
    },
    master: {
      id: 'winter_master',
      name: '极夜追光人',
      type: 'achievement',
      icon: '💎',
      description: '冬季观测大师的终极成就',
      achievementId: 'winter_master'
    }
  }
}

export const SEASON_ACHIEVEMENTS = [
  {
    id: 'spring_master',
    name: '春日守望者',
    description: '成为春季观测大师',
    icon: '🌺',
    category: 'season',
    season: 'spring'
  },
  {
    id: 'summer_master',
    name: '银河守护者',
    description: '成为夏季观测大师',
    icon: '🌌',
    category: 'season',
    season: 'summer'
  },
  {
    id: 'autumn_master',
    name: '秋水共长天',
    description: '成为秋季观测大师',
    icon: '🦢',
    category: 'season',
    season: 'autumn'
  },
  {
    id: 'winter_master',
    name: '极夜追光人',
    description: '成为冬季观测大师',
    icon: '💎',
    category: 'season',
    season: 'winter'
  },
  {
    id: 'four_seasons',
    name: '四季轮回',
    description: '完成所有四季的观测计划',
    icon: '🔄',
    category: 'season',
    season: 'all'
  }
]

export function getSeasonConstellations(seasonId) {
  return SEASON_CONSTELLATION_MAP[seasonId] || []
}

export function getCurrentSeason() {
  const month = new Date().getMonth()
  if (month >= 2 && month <= 4) return 'spring'
  if (month >= 5 && month <= 7) return 'summer'
  if (month >= 8 && month <= 10) return 'autumn'
  return 'winter'
}

export function getSeasonPhaseProgress(seasonId, phaseId, discovered, perfectObservations, totalObservations) {
  const constellationIds = getSeasonConstellations(seasonId)
  const discoveredCount = constellationIds.filter(id => discovered.includes(id)).length

  if (phaseId === 'beginner') {
    return {
      current: Math.min(discoveredCount, SEASON_PHASES.beginner.requirement),
      target: SEASON_PHASES.beginner.requirement,
      percentage: Math.min((discoveredCount / SEASON_PHASES.beginner.requirement) * 100, 100),
      completed: discoveredCount >= SEASON_PHASES.beginner.requirement
    }
  }

  if (phaseId === 'intermediate') {
    const perfectCount = constellationIds.filter(id => perfectObservations[id] || false).length
    return {
      current: Math.min(perfectCount, constellationIds.length),
      target: constellationIds.length,
      percentage: constellationIds.length > 0
        ? Math.min((perfectCount / constellationIds.length) * 100, 100)
        : 0,
      completed: perfectCount >= constellationIds.length
    }
  }

  if (phaseId === 'master') {
    const reObservationCount = constellationIds.reduce((sum, id) => {
      return sum + Math.max(0, (totalObservations[id] || 0) - 1)
    }, 0)
    const target = constellationIds.length * SEASON_PHASES.master.requirement
    return {
      current: Math.min(reObservationCount, target),
      target,
      percentage: target > 0 ? Math.min((reObservationCount / target) * 100, 100) : 0,
      completed: reObservationCount >= target
    }
  }

  return { current: 0, target: 1, percentage: 0, completed: false }
}

export function getAllSeasonAchievements() {
  return [...ACHIEVEMENTS, ...SEASON_ACHIEVEMENTS]
}
