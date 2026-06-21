import { CONSTELLATIONS, getConstellationById } from './constellations'
import { getCurrentSeason, SEASONS } from './seasonPlan'

export const CHALLENGE_DIFFICULTIES = {
  novice: {
    id: 'novice',
    name: '新手赛',
    icon: '🌟',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-300',
    constellationDifficulty: 1,
    timeLimit: 60,
    allowedMistakes: 3,
    constellationCount: 3,
    baseScore: 100,
    timeBonusRate: 2,
    streakBonus: 10,
    dailyAttempts: 5
  },
  elite: {
    id: 'elite',
    name: '精英赛',
    icon: '⚡',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-300',
    constellationDifficulty: 2,
    timeLimit: 45,
    allowedMistakes: 2,
    constellationCount: 4,
    baseScore: 200,
    timeBonusRate: 3,
    streakBonus: 20,
    dailyAttempts: 3
  },
  master: {
    id: 'master',
    name: '大师赛',
    icon: '👑',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-300',
    constellationDifficulty: 3,
    timeLimit: 30,
    allowedMistakes: 1,
    constellationCount: 5,
    baseScore: 350,
    timeBonusRate: 5,
    streakBonus: 35,
    dailyAttempts: 2
  }
}

export const CHALLENGE_SEASON_TIERS = {
  bronze: { id: 'bronze', name: '青铜', icon: '🥉', minScore: 300, color: 'from-amber-600 to-yellow-700' },
  silver: { id: 'silver', name: '白银', icon: '🥈', minScore: 800, color: 'from-gray-300 to-gray-400' },
  gold: { id: 'gold', name: '黄金', icon: '🥇', minScore: 1500, color: 'from-yellow-400 to-amber-500' },
  platinum: { id: 'platinum', name: '铂金', icon: '💎', minScore: 3000, color: 'from-cyan-300 to-blue-400' },
  diamond: { id: 'diamond', name: '钻石', icon: '💠', minScore: 5000, color: 'from-purple-400 to-pink-400' }
}

export const CHALLENGE_SEASON_REWARDS = {
  spring: {
    bronze: { id: 'ch_spring_bronze', name: '春风初芽', icon: '🌱', description: '春季挑战赛青铜段位奖励', stardust: 50 },
    silver: { id: 'ch_spring_silver', name: '繁花似锦', icon: '🌷', description: '春季挑战赛白银段位奖励', stardust: 120 },
    gold: { id: 'ch_spring_gold', name: '春日星辉', icon: '🌸', description: '春季挑战赛黄金段位奖励', stardust: 250 },
    platinum: { id: 'ch_spring_platinum', name: '春华秋实', icon: '🌺', description: '春季挑战赛铂金段位奖励', stardust: 500 },
    diamond: { id: 'ch_spring_diamond', name: '春之守护神', icon: '🏆', description: '春季挑战赛钻石段位奖励', stardust: 1000 }
  },
  summer: {
    bronze: { id: 'ch_summer_bronze', name: '夏夜初光', icon: '🌅', description: '夏季挑战赛青铜段位奖励', stardust: 50 },
    silver: { id: 'ch_summer_silver', name: '星河长明', icon: '⭐', description: '夏季挑战赛白银段位奖励', stardust: 120 },
    gold: { id: 'ch_summer_gold', name: '银河之星', icon: '🌟', description: '夏季挑战赛黄金段位奖励', stardust: 250 },
    platinum: { id: 'ch_summer_platinum', name: '夏夜守望者', icon: '💫', description: '夏季挑战赛铂金段位奖励', stardust: 500 },
    diamond: { id: 'ch_summer_diamond', name: '银河之主', icon: '🏆', description: '夏季挑战赛钻石段位奖励', stardust: 1000 }
  },
  autumn: {
    bronze: { id: 'ch_autumn_bronze', name: '秋叶初黄', icon: '🍂', description: '秋季挑战赛青铜段位奖励', stardust: 50 },
    silver: { id: 'ch_autumn_silver', name: '金风送爽', icon: '🍁', description: '秋季挑战赛白银段位奖励', stardust: 120 },
    gold: { id: 'ch_autumn_gold', name: '秋水星辰', icon: '🌾', description: '秋季挑战赛黄金段位奖励', stardust: 250 },
    platinum: { id: 'ch_autumn_platinum', name: '秋月无涯', icon: '🦢', description: '秋季挑战赛铂金段位奖励', stardust: 500 },
    diamond: { id: 'ch_autumn_diamond', name: '秋之贤者', icon: '🏆', description: '秋季挑战赛钻石段位奖励', stardust: 1000 }
  },
  winter: {
    bronze: { id: 'ch_winter_bronze', name: '初雪微光', icon: '🌨️', description: '冬季挑战赛青铜段位奖励', stardust: 50 },
    silver: { id: 'ch_winter_silver', name: '霜华满天', icon: '❄️', description: '冬季挑战赛白银段位奖励', stardust: 120 },
    gold: { id: 'ch_winter_gold', name: '冰晶星河', icon: '💠', description: '冬季挑战赛黄金段位奖励', stardust: 250 },
    platinum: { id: 'ch_winter_platinum', name: '极夜行者', icon: '🔮', description: '冬季挑战赛铂金段位奖励', stardust: 500 },
    diamond: { id: 'ch_winter_diamond', name: '冬之帝皇', icon: '🏆', description: '冬季挑战赛钻石段位奖励', stardust: 1000 }
  }
}

const GHOST_PLAYERS = [
  { name: '星河旅人', avatar: '🧑‍🚀', baseScore: { novice: 400, elite: 700, master: 1100 } },
  { name: '夜空守望', avatar: '🦉', baseScore: { novice: 550, elite: 900, master: 1400 } },
  { name: '追光少年', avatar: '👦', baseScore: { novice: 300, elite: 500, master: 800 } },
  { name: '银河诗人', avatar: '✍️', baseScore: { novice: 650, elite: 1100, master: 1800 } },
  { name: '星辰导师', avatar: '👨‍🏫', baseScore: { novice: 500, elite: 850, master: 1300 } },
  { name: '逐梦少女', avatar: '👧', baseScore: { novice: 350, elite: 600, master: 950 } },
  { name: '北极星使', avatar: '⭐', baseScore: { novice: 700, elite: 1200, master: 2000 } },
  { name: '天际猎人', avatar: '🏹', baseScore: { novice: 450, elite: 750, master: 1200 } },
  { name: '星云画家', avatar: '🎨', baseScore: { novice: 380, elite: 650, master: 1050 } },
  { name: '苍穹行者', avatar: '🚶', baseScore: { novice: 520, elite: 950, master: 1600 } }
]

export function generateChallengeRoute(difficultyId) {
  const config = CHALLENGE_DIFFICULTIES[difficultyId]
  if (!config) return []

  let pool = CONSTELLATIONS.filter(c => c.difficulty <= config.constellationDifficulty)
  if (pool.length < config.constellationCount) {
    pool = [...CONSTELLATIONS]
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, config.constellationCount).map(c => ({
    constellationId: c.id,
    allowedMistakes: config.allowedMistakes
  }))
}

export function calculateChallengeScore(difficultyId, results) {
  const config = CHALLENGE_DIFFICULTIES[difficultyId]
  if (!config) return 0

  let totalScore = 0
  let streakCount = 0

  results.forEach((result, index) => {
    if (!result.completed) return

    let stageScore = config.baseScore

    const timeUsed = result.timeUsed || 0
    const timeRemaining = Math.max(0, config.timeLimit - timeUsed)
    stageScore += Math.round(timeRemaining * config.timeBonusRate)

    if (result.perfect) {
      streakCount++
      stageScore += config.streakBonus * streakCount
    } else {
      streakCount = 0
    }

    const mistakePenalty = (result.mistakes || 0) * 20
    stageScore = Math.max(0, stageScore - mistakePenalty)

    totalScore += stageScore
  })

  return totalScore
}

export function getSeasonTier(seasonScore) {
  const tiers = Object.values(CHALLENGE_SEASON_TIERS).reverse()
  for (const tier of tiers) {
    if (seasonScore >= tier.minScore) return tier
  }
  return null
}

export function getNextTier(seasonScore) {
  const tiers = Object.values(CHALLENGE_SEASON_TIERS)
  for (const tier of tiers) {
    if (seasonScore < tier.minScore) return tier
  }
  return null
}

export function generateLeaderboard(difficultyId, playerScore, playerName = '我') {
  const leaderboard = GHOST_PLAYERS.map((player, idx) => {
    const base = player.baseScore[difficultyId] || 500
    const variance = Math.floor(Math.random() * base * 0.3)
    return {
      rank: 0,
      name: player.name,
      avatar: player.avatar,
      score: base + variance,
      isPlayer: false
    }
  })

  leaderboard.push({
    rank: 0,
    name: playerName,
    avatar: '🌟',
    score: playerScore,
    isPlayer: true
  })

  leaderboard.sort((a, b) => b.score - a.score)

  return leaderboard.map((entry, idx) => ({
    ...entry,
    rank: idx + 1
  }))
}

export function getChallengeDateKey() {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

export function getSeasonChallengeRewards(seasonId) {
  return CHALLENGE_SEASON_REWARDS[seasonId] || {}
}
