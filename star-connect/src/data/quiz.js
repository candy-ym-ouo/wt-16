import { CONSTELLATIONS, getConstellationById } from './constellations'
import { ACHIEVEMENTS, getAchievementById } from './achievements'

export const QUIZ_TYPES = {
  CONSTELLATION_NAME: 'constellation_name',
  CONSTELLATION_EN: 'constellation_en',
  MYTHOLOGY: 'mythology',
  OBSERVATION: 'observation',
  SEASON: 'season',
  DIFFICULTY: 'difficulty',
  MAIN_STAR: 'main_star',
  FEATURE: 'feature',
  ACHIEVEMENT: 'achievement',
  LOG_REVIEW: 'log_review'
}

export const DIFFICULTY_POINTS = {
  1: 10,
  2: 20,
  3: 35,
  achievement: 50,
  log: 30
}

const shuffleArray = (arr) => {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const getRandomItems = (arr, count, exclude = []) => {
  const pool = arr.filter(item => !exclude.includes(item))
  return shuffleArray(pool).slice(0, count)
}

const generateConstellationNameQuestion = (constellation) => {
  const others = getRandomItems(CONSTELLATIONS, 3, [constellation])
  const options = shuffleArray([
    constellation.name,
    ...others.map(c => c.name)
  ])
  return {
    id: `q_name_${constellation.id}_${Date.now()}`,
    type: QUIZ_TYPES.CONSTELLATION_NAME,
    constellationId: constellation.id,
    difficulty: constellation.difficulty,
    question: `以下哪个是"${constellation.description.slice(0, 20)}..."所描述的星座？`,
    options,
    correctAnswer: constellation.name,
    explanation: `${constellation.name}（${constellation.nameEn}）：${constellation.description}`,
    points: DIFFICULTY_POINTS[constellation.difficulty]
  }
}

const generateConstellationEnQuestion = (constellation) => {
  const others = getRandomItems(CONSTELLATIONS, 3, [constellation])
  const options = shuffleArray([
    constellation.nameEn,
    ...others.map(c => c.nameEn)
  ])
  return {
    id: `q_en_${constellation.id}_${Date.now()}`,
    type: QUIZ_TYPES.CONSTELLATION_EN,
    constellationId: constellation.id,
    difficulty: constellation.difficulty,
    question: `"${constellation.name}"的英文名是？`,
    options,
    correctAnswer: constellation.nameEn,
    explanation: `${constellation.name}的国际通用拉丁名为${constellation.nameEn}。`,
    points: DIFFICULTY_POINTS[constellation.difficulty]
  }
}

const generateMythologyQuestion = (constellation) => {
  const others = getRandomItems(CONSTELLATIONS, 3, [constellation])
  const options = shuffleArray([
    constellation.name,
    ...others.map(c => c.name)
  ])
  const mythHint = constellation.mythology.slice(0, 30)
  return {
    id: `q_myth_${constellation.id}_${Date.now()}`,
    type: QUIZ_TYPES.MYTHOLOGY,
    constellationId: constellation.id,
    difficulty: constellation.difficulty,
    question: `神话故事"${mythHint}..."与哪个星座有关？`,
    options,
    correctAnswer: constellation.name,
    explanation: `${constellation.mythologyDetail.slice(0, 80)}...`,
    points: DIFFICULTY_POINTS[constellation.difficulty] + 5
  }
}

const generateObservationQuestion = (constellation) => {
  const others = getRandomItems(CONSTELLATIONS, 3, [constellation])
  const options = shuffleArray([
    constellation.bestTime,
    ...others.map(c => c.bestTime)
  ])
  return {
    id: `q_obs_${constellation.id}_${Date.now()}`,
    type: QUIZ_TYPES.OBSERVATION,
    constellationId: constellation.id,
    difficulty: constellation.difficulty,
    question: `观测${constellation.name}的最佳时间是？`,
    options,
    correctAnswer: constellation.bestTime,
    explanation: `${constellation.name}观测提示：${constellation.observationTips}`,
    points: DIFFICULTY_POINTS[constellation.difficulty]
  }
}

const generateSeasonQuestion = (constellation) => {
  const allSeasons = ['春', '夏', '秋', '冬']
  const options = shuffleArray(allSeasons)
  return {
    id: `q_season_${constellation.id}_${Date.now()}`,
    type: QUIZ_TYPES.SEASON,
    constellationId: constellation.id,
    difficulty: constellation.difficulty,
    question: `${constellation.name}是哪个季节的代表星座？`,
    options,
    correctAnswer: constellation.season,
    explanation: `${constellation.name}属于${constellation.season}季星座，最佳观测时间为${constellation.bestTime}。`,
    points: DIFFICULTY_POINTS[constellation.difficulty]
  }
}

const generateDifficultyQuestion = (constellation) => {
  const options = shuffleArray(['入门（1星）', '进阶（2星）', '挑战（3星）', '大师（4星）'])
  const difficultyMap = {
    1: '入门（1星）',
    2: '进阶（2星）',
    3: '挑战（3星）'
  }
  return {
    id: `q_diff_${constellation.id}_${Date.now()}`,
    type: QUIZ_TYPES.DIFFICULTY,
    constellationId: constellation.id,
    difficulty: constellation.difficulty,
    question: `在星座探索中，${constellation.name}的难度等级是？`,
    options,
    correctAnswer: difficultyMap[constellation.difficulty],
    explanation: `${constellation.name}包含${constellation.stars.length}颗主要亮星，难度为${difficultyMap[constellation.difficulty]}。`,
    points: DIFFICULTY_POINTS[constellation.difficulty]
  }
}

const generateMainStarQuestion = (constellation) => {
  const mainStar = constellation.stars[0]
  const otherStars = CONSTELLATIONS.flatMap(c => c.stars).filter(s => s.id !== mainStar.id)
  const wrongOptions = getRandomItems(otherStars, 3).map(s => s.name)
  const options = shuffleArray([mainStar.name, ...wrongOptions])
  return {
    id: `q_star_${constellation.id}_${Date.now()}`,
    type: QUIZ_TYPES.MAIN_STAR,
    constellationId: constellation.id,
    difficulty: constellation.difficulty,
    question: `下列哪颗星属于${constellation.name}？`,
    options,
    correctAnswer: mainStar.name,
    explanation: `${mainStar.name}是${constellation.name}的主要亮星之一，星等约${mainStar.mag}。`,
    points: DIFFICULTY_POINTS[constellation.difficulty] + 5
  }
}

const generateFeatureQuestion = (constellation) => {
  const features = [
    `面积：${constellation.area}`,
    `排名：第${constellation.ranking}位`,
    `半球：${constellation.hemisphere}`,
    `包含${constellation.stars.length}颗亮星`
  ]
  const correct = features[0]
  const allConstellationsFeatures = CONSTELLATIONS.flatMap(c => [
    `面积：${c.area}`,
    `排名：第${c.ranking}位`
  ])
  const wrongFeatures = getRandomItems(allConstellationsFeatures, 3, [correct])
  const options = shuffleArray([correct, ...wrongFeatures])
  return {
    id: `q_feat_${constellation.id}_${Date.now()}`,
    type: QUIZ_TYPES.FEATURE,
    constellationId: constellation.id,
    difficulty: constellation.difficulty,
    question: `以下关于${constellation.name}的描述，正确的是？`,
    options,
    correctAnswer: correct,
    explanation: `${constellation.name}面积${constellation.area}，在全天88星座中排名第${constellation.ranking}位，${constellation.hemisphere}可见。`,
    points: DIFFICULTY_POINTS[constellation.difficulty] + 10
  }
}

const generateAchievementQuestion = (achievement) => {
  const others = getRandomItems(ACHIEVEMENTS, 3, [achievement])
  const options = shuffleArray([
    achievement.description,
    ...others.map(a => a.description)
  ])
  return {
    id: `q_ach_${achievement.id}_${Date.now()}`,
    type: QUIZ_TYPES.ACHIEVEMENT,
    difficulty: 3,
    question: `成就"${achievement.name}"的解锁条件是？`,
    options,
    correctAnswer: achievement.description,
    explanation: `${achievement.icon} ${achievement.name}：${achievement.description}，属于${achievement.category}类成就。`,
    points: DIFFICULTY_POINTS.achievement
  }
}

const generateLogReviewQuestion = (observationLogs, discoveredConstellations) => {
  if (observationLogs.length === 0 || discoveredConstellations.length === 0) return null

  const recentDiscoveries = observationLogs.filter(
    l => l.type === 'discovery' && discoveredConstellations.includes(l.constellationId)
  )
  if (recentDiscoveries.length === 0) return null

  const targetLog = recentDiscoveries[Math.floor(Math.random() * recentDiscoveries.length)]
  const constellation = getConstellationById(targetLog.constellationId)
  if (!constellation) return null

  const others = getRandomItems(CONSTELLATIONS, 3, [constellation])
  const options = shuffleArray([
    constellation.name,
    ...others.map(c => c.name)
  ])
  const logDate = new Date(targetLog.timestamp).toLocaleDateString('zh-CN')
  return {
    id: `q_log_${targetLog.constellationId}_${Date.now()}`,
    type: QUIZ_TYPES.LOG_REVIEW,
    constellationId: constellation.id,
    difficulty: 2,
    question: `你在${logDate}首次发现了哪个星座？`,
    options,
    correctAnswer: constellation.name,
    explanation: `回顾你的观星日志：${logDate}发现了${constellation.name}！${targetLog.perfect ? '而且是完美连线！' : ''}`,
    points: DIFFICULTY_POINTS.log
  }
}

const questionGeneratorsByType = {
  [QUIZ_TYPES.CONSTELLATION_NAME]: generateConstellationNameQuestion,
  [QUIZ_TYPES.CONSTELLATION_EN]: generateConstellationEnQuestion,
  [QUIZ_TYPES.MYTHOLOGY]: generateMythologyQuestion,
  [QUIZ_TYPES.OBSERVATION]: generateObservationQuestion,
  [QUIZ_TYPES.SEASON]: generateSeasonQuestion,
  [QUIZ_TYPES.DIFFICULTY]: generateDifficultyQuestion,
  [QUIZ_TYPES.MAIN_STAR]: generateMainStarQuestion,
  [QUIZ_TYPES.FEATURE]: generateFeatureQuestion
}

export const generateQuestion = (constellation, allowedTypes = null) => {
  const types = allowedTypes || Object.keys(questionGeneratorsByType)
  const availableTypes = types.filter(t => questionGeneratorsByType[t])
  if (availableTypes.length === 0) return null

  const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)]
  return questionGeneratorsByType[randomType](constellation)
}

export const generateQuizSet = (discoveredConstellations, observationLogs = [], unlockedAchievements = [], count = 5) => {
  const questions = []
  const usedConstellations = new Set()

  const availableConstellations = discoveredConstellations.length > 0
    ? CONSTELLATIONS.filter(c => discoveredConstellations.includes(c.id))
    : CONSTELLATIONS.filter(c => c.difficulty === 1)

  const baseTypes = [QUIZ_TYPES.CONSTELLATION_NAME, QUIZ_TYPES.SEASON, QUIZ_TYPES.OBSERVATION]
  const advancedTypes = [QUIZ_TYPES.MYTHOLOGY, QUIZ_TYPES.MAIN_STAR, QUIZ_TYPES.CONSTELLATION_EN, QUIZ_TYPES.DIFFICULTY]
  const expertTypes = [QUIZ_TYPES.FEATURE]

  for (let i = 0; i < count && availableConstellations.length > 0; i++) {
    let constellation
    const freshConstellations = availableConstellations.filter(c => !usedConstellations.has(c.id))
    
    if (freshConstellations.length > 0) {
      constellation = freshConstellations[Math.floor(Math.random() * freshConstellations.length)]
    } else {
      constellation = availableConstellations[Math.floor(Math.random() * availableConstellations.length)]
    }
    usedConstellations.add(constellation.id)

    let allowedTypes
    if (i < 2) {
      allowedTypes = baseTypes
    } else if (i < 4) {
      allowedTypes = [...baseTypes, ...advancedTypes]
    } else {
      allowedTypes = [...baseTypes, ...advancedTypes, ...expertTypes]
    }

    const question = generateQuestion(constellation, allowedTypes)
    if (question) questions.push(question)
  }

  if (observationLogs.length >= 5 && questions.length < count) {
    const logQ = generateLogReviewQuestion(observationLogs, discoveredConstellations)
    if (logQ) questions.push(logQ)
  }

  if (unlockedAchievements.length >= 3 && questions.length < count) {
    const unlockedList = unlockedAchievements
      .map(id => getAchievementById(id))
      .filter(Boolean)
    if (unlockedList.length > 0) {
      const randomAchievement = unlockedList[Math.floor(Math.random() * unlockedList.length)]
      const achQ = generateAchievementQuestion(randomAchievement)
      if (achQ) questions.push(achQ)
    }
  }

  return questions.slice(0, count)
}

export const QUIZ_ACHIEVEMENTS = [
  {
    id: 'quiz_first',
    name: '初窥星典',
    description: '完成第一次星座问答',
    icon: '📝',
    category: 'quiz',
    condition: { type: 'quiz_complete', value: 1 }
  },
  {
    id: 'quiz_10',
    name: '好学不倦',
    description: '累计完成10次问答',
    icon: '📚',
    category: 'quiz',
    condition: { type: 'quiz_complete', value: 10 }
  },
  {
    id: 'quiz_perfect_5',
    name: '全对达人',
    description: '单次问答全对5题',
    icon: '💯',
    category: 'quiz',
    condition: { type: 'quiz_perfect', value: 5 }
  },
  {
    id: 'quiz_streak_5',
    name: '连胜五局',
    description: '连续答对5题',
    icon: '🔥',
    category: 'quiz',
    condition: { type: 'quiz_streak', value: 5 }
  },
  {
    id: 'quiz_streak_10',
    name: '对答如流',
    description: '连续答对10题',
    icon: '⚡',
    category: 'quiz',
    condition: { type: 'quiz_streak', value: 10 }
  },
  {
    id: 'quiz_master',
    name: '星典大师',
    description: '累计答对50题',
    icon: '🎓',
    category: 'quiz',
    condition: { type: 'quiz_correct', value: 50 }
  },
  {
    id: 'quiz_exchange_first',
    name: '以识换物',
    description: '首次使用积分兑换奖励',
    icon: '🎁',
    category: 'quiz',
    condition: { type: 'quiz_exchange', value: 1 }
  }
]

export const REWARD_ITEMS = [
  {
    id: 'reward_hint_3',
    name: '连线提示 x3',
    description: '在星座连线时使用，自动显示下一步',
    icon: '💡',
    cost: 100,
    type: 'hint',
    amount: 3
  },
  {
    id: 'reward_hint_10',
    name: '连线提示 x10',
    description: '在星座连线时使用，自动显示下一步',
    icon: '💡',
    cost: 280,
    type: 'hint',
    amount: 10
  },
  {
    id: 'reward_stamina_5',
    name: '体力恢复 +5',
    description: '立即恢复5点远征体力',
    icon: '⚡',
    cost: 150,
    type: 'stamina',
    amount: 5
  },
  {
    id: 'reward_stamina_full',
    name: '体力全满',
    description: '立即恢复全部远征体力',
    icon: '🔋',
    cost: 400,
    type: 'stamina_full',
    amount: 999
  },
  {
    id: 'reward_stardust_200',
    name: '星尘 x200',
    description: '获得200星尘',
    icon: '💫',
    cost: 200,
    type: 'stardust',
    amount: 200
  },
  {
    id: 'reward_theme_cosmic',
    name: '宇宙主题',
    description: '解锁专属深空宇宙主题背景',
    icon: '🌌',
    cost: 500,
    type: 'theme',
    amount: 1,
    unique: true
  },
  {
    id: 'reward_badge_scholar',
    name: '星典学者徽章',
    description: '专属成就徽章，彰显你的学识',
    icon: '🏅',
    cost: 800,
    type: 'badge',
    amount: 1,
    unique: true
  },
  {
    id: 'reward_stardust_1000',
    name: '星尘 x1000',
    description: '获得1000星尘豪华礼包',
    icon: '✨',
    cost: 900,
    type: 'stardust',
    amount: 1000
  }
]

export const getRewardById = (id) => REWARD_ITEMS.find(r => r.id === id)
export const getQuizAchievementById = (id) => QUIZ_ACHIEVEMENTS.find(a => a.id === id)
