import { CONSTELLATIONS, getConstellationById } from './constellations'

export const EVENT_TYPES = {
  METEOR_SHOWER: 'meteor_shower',
  SPECIAL_ASTRO: 'special_astro',
  LIMITED_TASK: 'limited_task',
}

export const METEOR_SHOWERS = [
  {
    id: 'quadrantids',
    name: '象限仪座流星雨',
    icon: '🌠',
    description: '新年第一场流星雨，每小时可达120颗',
    startMonth: 1,
    startDay: 1,
    endMonth: 1,
    endDay: 10,
    peakMonth: 1,
    peakDay: 4,
    zhr: 120,
    color: '#64b5f6',
    relatedConstellation: 'ursa_major',
    rewards: { stardust: 50, multiplier: 1.5 },
  },
  {
    id: 'lyrids',
    name: '天琴座流星雨',
    icon: '🌠',
    description: '春季最亮的流星雨，火流星较多',
    startMonth: 4,
    startDay: 16,
    endMonth: 4,
    endDay: 30,
    peakMonth: 4,
    peakDay: 22,
    zhr: 18,
    color: '#90caf9',
    relatedConstellation: 'lyra',
    rewards: { stardust: 30, multiplier: 1.3 },
  },
  {
    id: 'eta_aquariids',
    name: '宝瓶座η流星雨',
    icon: '🌠',
    description: '哈雷彗星的尘埃，速度极快',
    startMonth: 4,
    startDay: 19,
    endMonth: 5,
    endDay: 28,
    peakMonth: 5,
    peakDay: 6,
    zhr: 50,
    color: '#81d4fa',
    relatedConstellation: 'aquarius',
    rewards: { stardust: 40, multiplier: 1.4 },
  },
  {
    id: 'delta_aquariids',
    name: '宝瓶座δ流星雨',
    icon: '🌠',
    description: '夏季稳定的流星雨，南方观测更佳',
    startMonth: 7,
    startDay: 12,
    endMonth: 8,
    endDay: 23,
    peakMonth: 7,
    peakDay: 30,
    zhr: 25,
    color: '#b2ebf2',
    relatedConstellation: 'aquarius',
    rewards: { stardust: 30, multiplier: 1.3 },
  },
  {
    id: 'perseids',
    name: '英仙座流星雨',
    icon: '🌠',
    description: '北半球三大流星雨之首，每小时100+颗',
    startMonth: 7,
    startDay: 17,
    endMonth: 8,
    endDay: 24,
    peakMonth: 8,
    peakDay: 13,
    zhr: 110,
    color: '#ffd54f',
    relatedConstellation: 'perseus',
    rewards: { stardust: 60, multiplier: 2.0 },
  },
  {
    id: 'orionids',
    name: '猎户座流星雨',
    icon: '🌠',
    description: '哈雷彗星的馈赠，流星速度快',
    startMonth: 10,
    startDay: 2,
    endMonth: 11,
    endDay: 7,
    peakMonth: 10,
    peakDay: 21,
    zhr: 20,
    color: '#ffcc80',
    relatedConstellation: 'orion',
    rewards: { stardust: 30, multiplier: 1.3 },
  },
  {
    id: 'taurids',
    name: '金牛座流星雨',
    icon: '🌠',
    description: '火流星雨，颜色偏橙红',
    startMonth: 9,
    startDay: 10,
    endMonth: 11,
    endDay: 20,
    peakMonth: 11,
    peakDay: 5,
    zhr: 10,
    color: '#ffab91',
    relatedConstellation: 'taurus',
    rewards: { stardust: 25, multiplier: 1.2 },
  },
  {
    id: 'leonids',
    name: '狮子座流星雨',
    icon: '🌠',
    description: '曾出现流星暴，每小时数千颗',
    startMonth: 11,
    startDay: 6,
    endMonth: 11,
    endDay: 30,
    peakMonth: 11,
    peakDay: 18,
    zhr: 15,
    color: '#ff8a65',
    relatedConstellation: 'leo',
    rewards: { stardust: 35, multiplier: 1.4 },
  },
  {
    id: 'geminids',
    name: '双子座流星雨',
    icon: '🌠',
    description: '年度最稳定流星雨，每小时150颗',
    startMonth: 12,
    startDay: 4,
    endMonth: 12,
    endDay: 17,
    peakMonth: 12,
    peakDay: 14,
    zhr: 150,
    color: '#a5d6a7',
    relatedConstellation: 'gemini',
    rewards: { stardust: 80, multiplier: 2.0 },
  },
  {
    id: 'ursids',
    name: '小熊座流星雨',
    icon: '🌠',
    description: '年度谢幕流星雨，北方观测更佳',
    startMonth: 12,
    startDay: 17,
    endMonth: 12,
    endDay: 26,
    peakMonth: 12,
    peakDay: 22,
    zhr: 10,
    color: '#ce93d8',
    relatedConstellation: 'ursa_minor',
    rewards: { stardust: 25, multiplier: 1.2 },
  },
]

export const SPECIAL_ASTRO_EVENTS = [
  {
    id: 'total_lunar_eclipse',
    name: '月全食',
    icon: '🌕',
    description: '月球进入地球本影，呈现神秘的红铜色',
    rarity: 'rare',
    color: '#ef5350',
    duration: 180,
    rewards: { stardust: 100, achievement: 'blood_moon_watcher' },
    condition: { type: 'reobservation', count: 3 },
  },
  {
    id: 'total_solar_eclipse',
    name: '日全食',
    icon: '🌑',
    description: '月球完全遮挡太阳，白昼如夜',
    rarity: 'legendary',
    color: '#7c4dff',
    duration: 240,
    rewards: { stardust: 300, achievement: 'corona_hunter' },
    condition: { type: 'discovery', count: 2 },
  },
  {
    id: 'super_moon',
    name: '超级月亮',
    icon: '🌕',
    description: '满月运行至近地点，比平时大14%',
    rarity: 'common',
    color: '#fff59d',
    duration: 120,
    rewards: { stardust: 30, multiplier: 1.2 },
    condition: { type: 'any', count: 1 },
  },
  {
    id: 'blue_moon',
    name: '蓝月亮',
    icon: '🌕',
    description: '一个月内的第二次满月，稀有的蓝色光辉',
    rarity: 'rare',
    color: '#64b5f6',
    duration: 120,
    rewards: { stardust: 80, achievement: 'once_in_blue_moon' },
    condition: { type: 'perfect', count: 2 },
  },
  {
    id: 'planetary_alignment',
    name: '行星连珠',
    icon: '🪐',
    description: '多颗行星连成一线，罕见的天文奇观',
    rarity: 'rare',
    color: '#ffb74d',
    duration: 180,
    rewards: { stardust: 120, achievement: 'planetary_aligner' },
    condition: { type: 'reobservation', count: 4 },
  },
  {
    id: 'aurora_borealis',
    name: '极光',
    icon: '🌌',
    description: '太阳风与大气碰撞，绿色的光之舞蹈',
    rarity: 'uncommon',
    color: '#81c784',
    duration: 150,
    rewards: { stardust: 60, multiplier: 1.5 },
    condition: { type: 'any', count: 2 },
  },
  {
    id: 'comet_visit',
    name: '彗星来访',
    icon: '☄️',
    description: '来自深空的旅者，拖着长长的彗尾',
    rarity: 'legendary',
    color: '#4fc3f7',
    duration: 300,
    rewards: { stardust: 200, achievement: 'comet_chaser' },
    condition: { type: 'discovery', count: 1, perfect: true },
  },
]

export const LIMITED_TASKS = [
  {
    id: 'meteor_photographer',
    name: '流星摄影师',
    icon: '📷',
    description: '在流星雨期间完美完成3个星座',
    eventType: EVENT_TYPES.METEOR_SHOWER,
    requirements: { perfectCount: 3 },
    rewards: { stardust: 100, title: '流星猎手' },
  },
  {
    id: 'night_watcher',
    name: '守夜人',
    icon: '🌙',
    description: '在特殊天象期间完成5次观测',
    eventType: EVENT_TYPES.SPECIAL_ASTRO,
    requirements: { observationCount: 5 },
    rewards: { stardust: 150, title: '暗夜守望者' },
  },
  {
    id: 'constellation_sprinter',
    name: '星座冲刺者',
    icon: '⚡',
    description: '在限时任务期间发现2个新星座',
    eventType: EVENT_TYPES.LIMITED_TASK,
    requirements: { discoveryCount: 2 },
    rewards: { stardust: 80, multiplier: 1.3 },
  },
  {
    id: 'perfect_streak',
    name: '完美连击',
    icon: '💎',
    description: '连续5次无错误完成星座连线',
    eventType: EVENT_TYPES.LIMITED_TASK,
    requirements: { perfectStreak: 5 },
    rewards: { stardust: 200, achievement: 'flawless_night' },
  },
  {
    id: 'seasonal_chaser',
    name: '季节追逐者',
    icon: '🍂',
    description: '完成本季节所有星座的观测',
    eventType: EVENT_TYPES.LIMITED_TASK,
    requirements: { seasonComplete: true },
    rewards: { stardust: 250, title: '四季星语者' },
  },
]

export const EVENT_ACHIEVEMENTS = [
  {
    id: 'blood_moon_watcher',
    name: '血月守望者',
    description: '在月全食期间完成观测任务',
    icon: '🌕',
    category: 'event',
    condition: { type: 'event_participation', value: 'total_lunar_eclipse' },
  },
  {
    id: 'corona_hunter',
    name: '日冕猎人',
    description: '见证日全食的壮丽景象',
    icon: '🌑',
    category: 'event',
    condition: { type: 'event_participation', value: 'total_solar_eclipse' },
  },
  {
    id: 'once_in_blue_moon',
    name: '蓝月之约',
    description: '在蓝月亮出现时完美观测',
    icon: '🌕',
    category: 'event',
    condition: { type: 'event_participation', value: 'blue_moon' },
  },
  {
    id: 'planetary_aligner',
    name: '星辰连线',
    description: '在行星连珠时完成特殊任务',
    icon: '🪐',
    category: 'event',
    condition: { type: 'event_participation', value: 'planetary_alignment' },
  },
  {
    id: 'comet_chaser',
    name: '彗星追逐者',
    description: '捕捉到访的彗星',
    icon: '☄️',
    category: 'event',
    condition: { type: 'event_participation', value: 'comet_visit' },
  },
  {
    id: 'meteor_master',
    name: '流星雨大师',
    description: '参与过5次不同的流星雨',
    icon: '🌠',
    category: 'event',
    condition: { type: 'meteor_shower_count', value: 5 },
  },
  {
    id: 'flawless_night',
    name: '无瑕之夜',
    description: '完成「完美连击」限时任务',
    icon: '💎',
    category: 'event',
    condition: { type: 'limited_task_complete', value: 'perfect_streak' },
  },
  {
    id: 'event_enthusiast',
    name: '天文爱好者',
    description: '累计参与10次夜空事件',
    icon: '⭐',
    category: 'event',
    condition: { type: 'total_events', value: 10 },
  },
  {
    id: 'night_owl',
    name: '夜猫子',
    description: '在凌晨时段参与3次夜空事件',
    icon: '🦉',
    category: 'event',
    condition: { type: 'late_night_events', value: 3 },
  },
]

export const isDateInRange = (date, startMonth, startDay, endMonth, endDay) => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  
  if (startMonth <= endMonth) {
    if (month < startMonth || month > endMonth) return false
    if (month === startMonth && day < startDay) return false
    if (month === endMonth && day > endDay) return false
  } else {
    if (month > endMonth && month < startMonth) return false
    if (month === startMonth && day < startDay) return false
    if (month === endMonth && day > endDay) return false
  }
  return true
}

export const getCurrentMeteorShower = (date = new Date()) => {
  return METEOR_SHOWERS.find(shower =>
    isDateInRange(date, shower.startMonth, shower.startDay, shower.endMonth, shower.endDay)
  )
}

export const getPeakMeteorShower = (date = new Date()) => {
  return METEOR_SHOWERS.find(shower =>
    date.getMonth() + 1 === shower.peakMonth && date.getDate() === shower.peakDay
  )
}

export const getUpcomingMeteorShowers = (date = new Date(), daysAhead = 30) => {
  const upcoming = []
  const targetDate = new Date(date)
  
  for (let i = 0; i < daysAhead; i++) {
    const checkDate = new Date(targetDate)
    checkDate.setDate(targetDate.getDate() + i)
    
    const shower = getCurrentMeteorShower(checkDate)
    if (shower && !upcoming.find(s => s.id === shower.id)) {
      const daysToPeak = getDaysToPeak(shower, checkDate)
      upcoming.push({
        ...shower,
        daysToPeak,
        daysToStart: i,
        isActive: i === 0,
        isPeak: daysToPeak === 0,
      })
    }
  }
  
  return upcoming
}

export const getDaysToPeak = (shower, date = new Date()) => {
  const now = new Date(date)
  const peak = new Date(now.getFullYear(), shower.peakMonth - 1, shower.peakDay)
  
  if (peak < now) {
    peak.setFullYear(peak.getFullYear() + 1)
  }
  
  return Math.ceil((peak - now) / (1000 * 60 * 60 * 24))
}

export const generateRandomSpecialEvent = () => {
  const now = Date.now()
  const random = Math.random()
  
  if (random < 0.05) {
    const legendary = SPECIAL_ASTRO_EVENTS.filter(e => e.rarity === 'legendary')
    const event = legendary[Math.floor(Math.random() * legendary.length)]
    return {
      ...event,
      startTime: now,
      endTime: now + event.duration * 60 * 1000,
      type: EVENT_TYPES.SPECIAL_ASTRO,
    }
  } else if (random < 0.2) {
    const rare = SPECIAL_ASTRO_EVENTS.filter(e => e.rarity === 'rare')
    const event = rare[Math.floor(Math.random() * rare.length)]
    return {
      ...event,
      startTime: now,
      endTime: now + event.duration * 60 * 1000,
      type: EVENT_TYPES.SPECIAL_ASTRO,
    }
  } else if (random < 0.5) {
    const uncommon = SPECIAL_ASTRO_EVENTS.filter(e => e.rarity === 'uncommon')
    const event = uncommon[Math.floor(Math.random() * uncommon.length)]
    return {
      ...event,
      startTime: now,
      endTime: now + event.duration * 60 * 1000,
      type: EVENT_TYPES.SPECIAL_ASTRO,
    }
  }
  
  return null
}

export const generateLimitedTask = (eventType = EVENT_TYPES.LIMITED_TASK) => {
  const now = Date.now()
  const availableTasks = LIMITED_TASKS.filter(t => t.eventType === eventType)
  const task = availableTasks[Math.floor(Math.random() * availableTasks.length)]
  
  return {
    ...task,
    startTime: now,
    endTime: now + 60 * 60 * 1000,
    type: EVENT_TYPES.LIMITED_TASK,
    progress: {
      perfectCount: 0,
      observationCount: 0,
      discoveryCount: 0,
      perfectStreak: 0,
    },
    completed: false,
    claimed: false,
  }
}

export const getEventMultiplier = (activeEvents) => {
  let multiplier = 1.0
  activeEvents.forEach(event => {
    if (event.rewards?.multiplier) {
      multiplier = Math.max(multiplier, event.rewards.multiplier)
    }
  })
  return multiplier
}

export const getTotalStardustBonus = (activeEvents) => {
  let bonus = 0
  activeEvents.forEach(event => {
    if (event.rewards?.stardust && event.type !== EVENT_TYPES.LIMITED_TASK) {
      bonus += event.rewards.stardust
    }
  })
  return bonus
}

export const getRarityColor = (rarity) => {
  switch (rarity) {
    case 'legendary': return 'from-purple-500 to-pink-500'
    case 'rare': return 'from-blue-500 to-cyan-500'
    case 'uncommon': return 'from-green-500 to-emerald-500'
    default: return 'from-gray-500 to-gray-600'
  }
}

export const getRarityBorderColor = (rarity) => {
  switch (rarity) {
    case 'legendary': return 'border-purple-400/40'
    case 'rare': return 'border-blue-400/40'
    case 'uncommon': return 'border-green-400/40'
    default: return 'border-white/10'
  }
}

export const getRarityBgColor = (rarity) => {
  switch (rarity) {
    case 'legendary': return 'bg-purple-500/10'
    case 'rare': return 'bg-blue-500/10'
    case 'uncommon': return 'bg-green-500/10'
    default: return 'bg-space-700/20'
  }
}

export const getRarityLabel = (rarity) => {
  switch (rarity) {
    case 'legendary': return '传说'
    case 'rare': return '稀有'
    case 'uncommon': return '不凡'
    default: return '普通'
  }
}

export const getEventById = (id) => {
  return METEOR_SHOWERS.find(e => e.id === id) ||
         SPECIAL_ASTRO_EVENTS.find(e => e.id === id) ||
         LIMITED_TASKS.find(e => e.id === id)
}

export const formatTimeRemaining = (endTime) => {
  if (!endTime) return ''
  const diff = endTime - Date.now()
  if (diff <= 0) return '即将结束'

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  if (days > 0) {
    return `${days}天${hours}时${minutes}分`
  }
  if (hours > 0) {
    return `${hours}时${minutes}分`
  }
  return `${minutes}分钟`
}

export const getEventTypeLabel = (type) => {
  switch (type) {
    case EVENT_TYPES.METEOR_SHOWER:
      return '🌠 流星雨'
    case EVENT_TYPES.SPECIAL_ASTRO:
      return '✨ 特殊天象'
    case EVENT_TYPES.LIMITED_TASK:
      return '📋 限时任务'
    default:
      return '🌟 夜空事件'
  }
}
