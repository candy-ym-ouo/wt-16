import { CONSTELLATIONS } from './constellations'

export const STAMINA_CONFIG = {
  maxStamina: 5,
  recoveryIntervalMs: 30 * 60 * 1000,
  recoveryAmount: 1,
  initialStamina: 5,
  stageCost: 1
}

export const TOLERANCE_CONFIG = {
  1: { allowedMistakes: 3, label: '宽容' },
  2: { allowedMistakes: 2, label: '标准' },
  3: { allowedMistakes: 1, label: '严苛' }
}

export function generateExpeditionRoute() {
  const shuffled = [...CONSTELLATIONS].sort(() => Math.random() - 0.5)
  return shuffled.map((c, index) => {
    const stage = index + 1
    const tolerance = TOLERANCE_CONFIG[c.difficulty]
    return {
      stage,
      constellationId: c.id,
      constellationName: c.name,
      difficulty: c.difficulty,
      allowedMistakes: tolerance.allowedMistakes,
      staminaCost: STAMINA_CONFIG.stageCost,
      bonusThreshold: c.difficulty === 3 ? 0 : c.difficulty === 2 ? 1 : 2,
      reward: getStageReward(stage, c.difficulty)
    }
  })
}

function getStageReward(stage, difficulty) {
  const base = stage * 10
  const multiplier = difficulty === 3 ? 2.0 : difficulty === 2 ? 1.5 : 1.0
  return {
    stardust: Math.round(base * multiplier),
    bonusStardust: Math.round(base * 0.5),
    xp: Math.round(base * 0.3 * multiplier)
  }
}

export const EXPEDITION_REWARD_TIERS = [
  {
    id: 'expedition_bronze',
    name: '远征铜星',
    icon: '🥉',
    stagesCleared: 2,
    description: '成功通过2关',
    bonus: { stardust: 50 }
  },
  {
    id: 'expedition_silver',
    name: '远征银星',
    icon: '🥈',
    stagesCleared: 4,
    description: '成功通过4关',
    bonus: { stardust: 150 }
  },
  {
    id: 'expedition_gold',
    name: '远征金星',
    icon: '🥇',
    stagesCleared: 6,
    description: '成功通过全部6关',
    bonus: { stardust: 300 }
  }
]

export const PERFECT_CLEAR_BONUS = {
  stardustPerPerfect: 20,
  xpPerPerfect: 10
}

export function calculateExpeditionRewards(clearedStages, perfectCount, totalStages) {
  let totalStardust = 0
  let totalXP = 0
  let totalBonusStardust = 0

  clearedStages.forEach((stage) => {
    totalStardust += stage.reward.stardust
    totalXP += stage.reward.xp
    if (stage.mistakes <= stage.bonusThreshold) {
      totalBonusStardust += stage.reward.bonusStardust
    }
  })

  const perfectBonus = perfectCount * PERFECT_CLEAR_BONUS.stardustPerPerfect
  totalStardust += perfectBonus
  totalStardust += totalBonusStardust
  totalXP += perfectCount * PERFECT_CLEAR_BONUS.xpPerPerfect

  const tierRewards = []
  EXPEDITION_REWARD_TIERS.forEach((tier) => {
    if (clearedStages.length >= tier.stagesCleared) {
      tierRewards.push(tier)
      totalStardust += tier.bonus.stardust || 0
    }
  })

  const allPerfect = perfectCount === totalStages && totalStages > 0

  return {
    stardust: totalStardust,
    bonusStardust: totalBonusStardust,
    xp: totalXP,
    perfectBonus,
    tierRewards,
    allPerfect
  }
}

export function getRecoveredStamina(lastUpdateTimestamp, currentStamina) {
  if (currentStamina >= STAMINA_CONFIG.maxStamina) return 0
  const now = Date.now()
  const elapsed = now - lastUpdateTimestamp
  const recovered = Math.floor(elapsed / STAMINA_CONFIG.recoveryIntervalMs) * STAMINA_CONFIG.recoveryAmount
  return Math.min(recovered, STAMINA_CONFIG.maxStamina - currentStamina)
}
