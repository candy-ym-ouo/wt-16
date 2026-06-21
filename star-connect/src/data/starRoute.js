import { CONSTELLATIONS, getConstellationById } from './constellations'
import { SEASONS, getSeasonConstellations, getCurrentSeason } from './seasonPlan'

export const DIFFICULTY_PREFERENCE = {
  easy: { id: 'easy', label: '轻松探索', description: '以入门难度为主，循序渐进', weight: { 1: 0.7, 2: 0.3, 3: 0 } },
  balanced: { id: 'balanced', label: '均衡挑战', description: '入门与进阶搭配，适度挑战', weight: { 1: 0.4, 2: 0.5, 3: 0.1 } },
  challenging: { id: 'challenging', label: '迎难而上', description: '优先高难度，挑战自我极限', weight: { 1: 0.1, 2: 0.4, 3: 0.5 } }
}

export const ROUTE_TYPES = {
  seasonal: {
    id: 'seasonal',
    name: '季节漫游',
    icon: '🌸',
    description: '跟随季节脚步，探索当季最璀璨的星座',
    color: 'from-pink-500 to-rose-400'
  },
  progressive: {
    id: 'progressive',
    name: '进阶之路',
    icon: '📈',
    description: '从易到难，逐步提升观星技巧',
    color: 'from-emerald-500 to-teal-400'
  },
  mythology: {
    id: 'mythology',
    name: '神话之旅',
    icon: '🏛️',
    description: '沿着神话故事的脉络探索星空',
    color: 'from-violet-500 to-purple-400'
  },
  quick: {
    id: 'quick',
    name: '快速打卡',
    icon: '⚡',
    description: '精选易观测星座，快速积累成就',
    color: 'from-amber-500 to-yellow-400'
  }
}

export const ROUTE_ACHIEVEMENTS = [
  {
    id: 'route_first',
    name: '初次启程',
    description: '完成第一条观星路线',
    icon: '🚀',
    category: 'route',
    condition: { type: 'route_complete', value: 1 }
  },
  {
    id: 'route_seasonal',
    name: '季节行者',
    description: '完成一条季节漫游路线',
    icon: '🌿',
    category: 'route',
    condition: { type: 'route_type_complete', value: 'seasonal' }
  },
  {
    id: 'route_master',
    name: '路线大师',
    description: '完成5条观星路线',
    icon: '🏆',
    category: 'route',
    condition: { type: 'route_complete', value: 5 }
  },
  {
    id: 'route_perfect',
    name: '完美路线',
    description: '以全完美成绩完成一条路线',
    icon: '💎',
    category: 'route',
    condition: { type: 'route_perfect', value: 1 }
  }
]

export function getRouteAchievementById(id) {
  return ROUTE_ACHIEVEMENTS.find(a => a.id === id)
}

function calculateScore(constellation, discovered, perfect, totalObs, preference) {
  let score = 0

  if (discovered) {
    if (perfect) {
      score -= 50
    } else {
      score -= 20
    }
    if (totalObs > 2) {
      score -= (totalObs - 2) * 10
    }
  }

  const difficulty = constellation.difficulty
  const weight = preference.weight[difficulty] || 0
  score += weight * 100

  const brightnessBonus = constellation.stars.filter(s => s.mag < 2).length * 5
  score += brightnessBonus

  return Math.max(0, score + Math.random() * 20)
}

function sortByDifficulty(constellations, ascending = true) {
  return [...constellations].sort((a, b) => {
    const diffA = a.difficulty
    const diffB = b.difficulty
    return ascending ? diffA - diffB : diffB - diffA
  })
}

export function generateRoute(routeType, preferenceId, discoveredConstellations, perfectObservations, totalObservations) {
  const preference = DIFFICULTY_PREFERENCE[preferenceId] || DIFFICULTY_PREFERENCE.balanced
  const currentSeason = getCurrentSeason()
  const seasonConstIds = getSeasonConstellations(currentSeason)

  let candidateConstellations = []

  switch (routeType) {
    case 'seasonal': {
      candidateConstellations = seasonConstIds
        .map(id => getConstellationById(id))
        .filter(Boolean)
      break
    }
    case 'progressive': {
      const undiscovered = CONSTELLATIONS.filter(c => !discoveredConstellations.includes(c.id))
      const discoveredNotPerfect = CONSTELLATIONS.filter(c =>
        discoveredConstellations.includes(c.id) && !perfectObservations[c.id]
      )
      candidateConstellations = [...undiscovered, ...discoveredNotPerfect]
      break
    }
    case 'mythology': {
      const withMythology = CONSTELLATIONS.filter(c => c.mythology && c.mythology.length > 0)
      candidateConstellations = withMythology
      break
    }
    case 'quick': {
      const easyOnes = CONSTELLATIONS.filter(c => c.difficulty <= 2)
      candidateConstellations = easyOnes
      break
    }
    default:
      candidateConstellations = [...CONSTELLATIONS]
  }

  const scored = candidateConstellations.map(c => ({
    ...c,
    score: calculateScore(
      c,
      discoveredConstellations.includes(c.id),
      perfectObservations[c.id] || false,
      totalObservations[c.id] || 0,
      preference
    )
  }))

  scored.sort((a, b) => b.score - a.score)

  const routeLength = Math.min(5, scored.length)
  let selected = scored.slice(0, routeLength)

  if (routeType === 'progressive') {
    selected = sortByDifficulty(selected, true)
  } else if (routeType === 'quick') {
    selected = sortByDifficulty(selected, true)
  }

  const steps = selected.map((c, index) => ({
    id: `step_${index}`,
    constellationId: c.id,
    order: index + 1,
    status: 'pending',
    perfect: false,
    completedAt: null
  }))

  return {
    id: `route_${Date.now()}`,
    type: routeType,
    name: `${ROUTE_TYPES[routeType]?.name || '观星路线'} · ${SEASONS[currentSeason]?.name || ''}`,
    description: ROUTE_TYPES[routeType]?.description || '',
    icon: ROUTE_TYPES[routeType]?.icon || '✨',
    color: ROUTE_TYPES[routeType]?.color || 'from-nebula-purple to-nebula-cyan',
    preference: preferenceId,
    steps,
    currentStepIndex: 0,
    status: 'active',
    createdAt: Date.now(),
    completedAt: null
  }
}

export function calculateRouteProgress(route) {
  if (!route || !route.steps) return { completed: 0, total: 0, percentage: 0 }

  const total = route.steps.length
  const completed = route.steps.filter(s => s.status === 'completed').length
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return { completed, total, percentage }
}

export function isRoutePerfect(route) {
  if (!route || !route.steps) return false
  const completedSteps = route.steps.filter(s => s.status === 'completed')
  if (completedSteps.length === 0) return false
  return completedSteps.every(s => s.perfect)
}

export function getRouteStats(routeHistory) {
  const completed = routeHistory.filter(r => r.status === 'completed')
  const perfectCount = completed.filter(r => isRoutePerfect(r)).length

  const totalSteps = completed.reduce((sum, r) => sum + r.steps.length, 0)
  const perfectSteps = completed.reduce((sum, r) =>
    sum + r.steps.filter(s => s.perfect).length, 0
  )

  const typeStats = {}
  Object.keys(ROUTE_TYPES).forEach(typeId => {
    typeStats[typeId] = completed.filter(r => r.type === typeId).length
  })

  return {
    totalCompleted: completed.length,
    perfectRoutes: perfectCount,
    totalSteps,
    perfectSteps,
    perfectRate: totalSteps > 0 ? Math.round((perfectSteps / totalSteps) * 100) : 0,
    typeStats
  }
}
