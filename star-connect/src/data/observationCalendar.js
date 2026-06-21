import { CONSTELLATIONS, getConstellationById } from './constellations'
import { getCurrentSeason, SEASONS, getSeasonConstellations } from './seasonPlan'

export const CHECKIN_REWARDS = {
  day1: { type: 'stardust', amount: 10, label: '签到1天', icon: '💫' },
  day3: { type: 'stardust', amount: 30, label: '连续签到3天', icon: '⭐' },
  day7: { type: 'stardust', amount: 80, label: '连续签到7天', icon: '🌟' },
  day14: { type: 'stardust', amount: 200, label: '连续签到14天', icon: '✨' },
  day30: { type: 'badge', id: 'monthly_checkin', name: '月度观星达人', icon: '🏅' },
}

export const ZODIAC_SIGNS = [
  { id: 'aries', name: '白羊座', nameEn: 'Aries', period: '3.21-4.19', icon: '♈', element: '火', ruler: '火星' },
  { id: 'taurus', name: '金牛座', nameEn: 'Taurus', period: '4.20-5.20', icon: '♉', element: '土', ruler: '金星' },
  { id: 'gemini', name: '双子座', nameEn: 'Gemini', period: '5.21-6.21', icon: '♊', element: '风', ruler: '水星' },
  { id: 'cancer', name: '巨蟹座', nameEn: 'Cancer', period: '6.22-7.22', icon: '♋', element: '水', ruler: '月亮' },
  { id: 'leo', name: '狮子座', nameEn: 'Leo', period: '7.23-8.22', icon: '♌', element: '火', ruler: '太阳' },
  { id: 'virgo', name: '处女座', nameEn: 'Virgo', period: '8.23-9.22', icon: '♍', element: '土', ruler: '水星' },
  { id: 'libra', name: '天秤座', nameEn: 'Libra', period: '9.23-10.23', icon: '♎', element: '风', ruler: '金星' },
  { id: 'scorpio', name: '天蝎座', nameEn: 'Scorpio', period: '10.24-11.22', icon: '♏', element: '水', ruler: '冥王星' },
  { id: 'sagittarius', name: '射手座', nameEn: 'Sagittarius', period: '11.23-12.21', icon: '♐', element: '火', ruler: '木星' },
  { id: 'capricorn', name: '摩羯座', nameEn: 'Capricorn', period: '12.22-1.19', icon: '♑', element: '土', ruler: '土星' },
  { id: 'aquarius', name: '水瓶座', nameEn: 'Aquarius', period: '1.20-2.18', icon: '♒', element: '风', ruler: '天王星' },
  { id: 'pisces', name: '双鱼座', nameEn: 'Pisces', period: '2.19-3.20', icon: '♓', element: '水', ruler: '海王星' },
]

export const getZodiacByDate = (date) => {
  const d = date || new Date()
  const month = d.getMonth() + 1
  const day = d.getDate()
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return ZODIAC_SIGNS[0]
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return ZODIAC_SIGNS[1]
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return ZODIAC_SIGNS[2]
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return ZODIAC_SIGNS[3]
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return ZODIAC_SIGNS[4]
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return ZODIAC_SIGNS[5]
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return ZODIAC_SIGNS[6]
  if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return ZODIAC_SIGNS[7]
  if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return ZODIAC_SIGNS[8]
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return ZODIAC_SIGNS[9]
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return ZODIAC_SIGNS[10]
  return ZODIAC_SIGNS[11]
}

const RECOMMENDATION_TEMPLATES = {
  beginner: [
    '今天天气晴朗，适合观测亮星星座，推荐从{constellation}开始练习。',
    '{constellation}当前位置绝佳，是入门观测的好时机！',
    '新的一天，从认识{constellation}开始你的观星之旅吧。',
  ],
  intermediate: [
    '{constellation}正在夜空中闪耀，尝试完美连接它的所有星星！',
    '挑战一下{constellation}，提升你的观星技巧。',
    '{constellation}是今晚的主角，快去探索它的奥秘吧。',
  ],
  advanced: [
    '再次观测{constellation}，深入了解它的神话故事。',
    '{constellation}是当季重点，反复观测可解锁更多奖励。',
    '完美观测{constellation}，挑战你的极限！',
  ],
}

export const generateDailyRecommendation = (discoveredIds, perfectIds, totalObservations) => {
  const currentSeason = getCurrentSeason()
  const seasonConstellations = getSeasonConstellations(currentSeason)
  const season = SEASONS[currentSeason]
  
  const discoveredInSeason = seasonConstellations.filter(id => discoveredIds.includes(id))
  const undiscoveredInSeason = seasonConstellations.filter(id => !discoveredIds.includes(id))
  const allDiscovered = discoveredInSeason.length === seasonConstellations.length
  
  let targetId
  let difficulty
  
  if (undiscoveredInSeason.length > 0) {
    targetId = undiscoveredInSeason[Math.floor(Math.random() * undiscoveredInSeason.length)]
    const c = getConstellationById(targetId)
    difficulty = c.difficulty <= 1 ? 'beginner' : c.difficulty === 2 ? 'intermediate' : 'advanced'
  } else {
    const imperfectInSeason = seasonConstellations.filter(id => !perfectIds[id])
    if (imperfectInSeason.length > 0) {
      targetId = imperfectInSeason[Math.floor(Math.random() * imperfectInSeason.length)]
      difficulty = 'intermediate'
    } else {
      const leastObserved = [...seasonConstellations].sort((a, b) => 
        (totalObservations[a] || 0) - (totalObservations[b] || 0)
      )[0]
      targetId = leastObserved
      difficulty = 'advanced'
    }
  }
  
  const target = getConstellationById(targetId)
  const templates = RECOMMENDATION_TEMPLATES[difficulty]
  const template = templates[Math.floor(Math.random() * templates.length)]
  const description = template.replace('{constellation}', target.name)
  
  return {
    constellationId: targetId,
    constellationName: target.name,
    constellationIcon: '⭐',
    description,
    difficulty,
    isNew: !discoveredIds.includes(targetId),
    isPerfect: !!perfectIds[targetId],
    observedCount: totalObservations[targetId] || 0,
    season,
    tips: target.observationTips,
    bestTime: target.bestTime,
  }
}

export const generateLuckyMessage = (zodiac) => {
  const messages = {
    aries: ['今天精力充沛，适合挑战高难度星座！', '火星守护的你，今晚定有新发现。'],
    taurus: ['慢慢来，享受观星的宁静时刻。', '金星守护，耐心会带来惊喜发现。'],
    gemini: ['好奇心旺盛的你，适合探索多个星座。', '水星加持，学习效率超高的一天。'],
    cancer: ['月亮守护着你，内心平静易有感悟。', '适合家庭一起观星，温馨又浪漫。'],
    leo: ['太阳守护，你就是今晚最亮的星！', '领导力爆棚，适合带领朋友一起观星。'],
    virgo: ['观察力敏锐，细节之处见真章。', '水星加持，今天特别容易完美观测。'],
    libra: ['金星守护，审美在线，感受星空之美。', '平衡与和谐，适合和伴侣一起观星。'],
    scorpio: ['直觉敏锐，容易发现隐藏的奥秘。', '冥王星加持，深入探索的好时机。'],
    sagittarius: ['木星守护，好运连连，发现概率UP！', '热爱冒险的你，适合远征模式。'],
    capricorn: ['土星守护，脚踏实地，稳扎稳打。', '坚持就是胜利，累计进度吧。'],
    aquarius: ['天王星加持，创意无限，独特视角。', '适合尝试新的观测方式。'],
    pisces: ['海王星守护，想象力丰富，感受星空的诗意。', '灵感迸发，适合记录观星感悟。'],
  }
  const msgList = messages[zodiac.id] || messages.aries
  return msgList[Math.floor(Math.random() * msgList.length)]
}

export const generateLuckyStars = () => {
  const count = Math.floor(Math.random() * 3) + 3
  return count
}

export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate()
}

export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay()
}

export const formatDateKey = (date) => {
  const d = date instanceof Date ? date : new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export const isSameDay = (date1, date2) => {
  const d1 = date1 instanceof Date ? date1 : new Date(date1)
  const d2 = date2 instanceof Date ? date2 : new Date(date2)
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate()
}

export const MONTH_NAMES = [
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月'
]

export const WEEKDAY_NAMES = ['日', '一', '二', '三', '四', '五', '六']
