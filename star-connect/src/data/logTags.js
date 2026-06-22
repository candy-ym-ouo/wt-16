export const LOG_TAG_CATEGORIES = {
  observation: {
    id: 'observation',
    name: '观测类型',
    nameEn: 'Observation Type',
    icon: '🔭',
    color: 'from-nebula-purple to-nebula-cyan',
    tags: [
      { id: 'discovery', name: '首次发现', nameEn: 'Discovery', icon: '✨' },
      { id: 'reobservation', name: '重复观测', nameEn: 'Reobservation', icon: '🔄' },
      { id: 'perfect', name: '完美观测', nameEn: 'Perfect', icon: '💎' },
    ]
  },
  achievement: {
    id: 'achievement',
    name: '成就奖励',
    nameEn: 'Achievement',
    icon: '🏆',
    color: 'from-star-gold to-nebula-orange',
    tags: [
      { id: 'achievement', name: '成就解锁', nameEn: 'Achievement', icon: '🏆' },
      { id: 'season_reward', name: '季节奖励', nameEn: 'Season Reward', icon: '🎁' },
      { id: 'quiz_reward', name: '问答奖励', nameEn: 'Quiz Reward', icon: '🎯' },
      { id: 'event_reward', name: '活动奖励', nameEn: 'Event Reward', icon: '🌟' },
    ]
  },
  activity: {
    id: 'activity',
    name: '活动类型',
    nameEn: 'Activity',
    icon: '🎮',
    color: 'from-emerald-500 to-teal-400',
    tags: [
      { id: 'quiz', name: '星座问答', nameEn: 'Quiz', icon: '📚' },
      { id: 'route', name: '观星路线', nameEn: 'Route', icon: '🗺️' },
      { id: 'expedition', name: '夜间远征', nameEn: 'Expedition', icon: '🌙' },
      { id: 'event', name: '夜空事件', nameEn: 'Event', icon: '⚡' },
      { id: 'commission', name: '每日委托', nameEn: 'Commission', icon: '📋' },
      { id: 'checkin', name: '签到打卡', nameEn: 'Checkin', icon: '📅' },
    ]
  },
  season: {
    id: 'season',
    name: '季节',
    nameEn: 'Season',
    icon: '🌸',
    color: 'from-pink-500 to-rose-400',
    tags: [
      { id: 'spring', name: '春季', nameEn: 'Spring', icon: '🌸' },
      { id: 'summer', name: '夏季', nameEn: 'Summer', icon: '☀️' },
      { id: 'autumn', name: '秋季', nameEn: 'Autumn', icon: '🍂' },
      { id: 'winter', name: '冬季', nameEn: 'Winter', icon: '❄️' },
    ]
  },
  mood: {
    id: 'mood',
    name: '心情记录',
    nameEn: 'Mood',
    icon: '💫',
    color: 'from-purple-500 to-pink-400',
    tags: [
      { id: 'excited', name: '兴奋', nameEn: 'Excited', icon: '🤩' },
      { id: 'peaceful', name: '宁静', nameEn: 'Peaceful', icon: '😌' },
      { id: 'curious', name: '好奇', nameEn: 'Curious', icon: '🧐' },
      { id: 'inspired', name: '灵感', nameEn: 'Inspired', icon: '💡' },
      { id: 'romantic', name: '浪漫', nameEn: 'Romantic', icon: '💕' },
    ]
  },
  custom: {
    id: 'custom',
    name: '自定义',
    nameEn: 'Custom',
    icon: '🏷️',
    color: 'from-gray-500 to-slate-400',
    tags: []
  }
}

export const LOG_TYPES = {
  discovery: { category: 'observation', tags: ['discovery'] },
  reobservation: { category: 'observation', tags: ['reobservation'] },
  achievement: { category: 'achievement', tags: ['achievement'] },
  season_reward: { category: 'achievement', tags: ['season_reward'] },
  quiz_complete: { category: 'activity', tags: ['quiz'] },
  quiz_perfect: { category: 'activity', tags: ['quiz', 'perfect'] },
  quiz_exchange: { category: 'achievement', tags: ['quiz_reward'] },
  route_start: { category: 'activity', tags: ['route'] },
  route_complete: { category: 'activity', tags: ['route'] },
  route_abandon: { category: 'activity', tags: ['route'] },
  event_start: { category: 'activity', tags: ['event'] },
  event_end: { category: 'activity', tags: ['event'] },
  event_reward: { category: 'achievement', tags: ['event_reward'] },
  event_participate: { category: 'activity', tags: ['event'] },
  daily_commission_complete: { category: 'activity', tags: ['commission'] },
  daily_commission_claim: { category: 'achievement', tags: ['commission'] },
  expedition_start: { category: 'activity', tags: ['expedition'] },
  expedition_complete: { category: 'activity', tags: ['expedition'] },
  checkin: { category: 'activity', tags: ['checkin'] },
  stardust: { category: 'achievement', tags: ['event_reward'] },
  story_chapter_unlocked: { category: 'activity', tags: [] },
  story_prologue_unlocked: { category: 'activity', tags: [] },
  story_epilogue_unlocked: { category: 'activity', tags: [] },
}

export const TIME_RANGES = {
  today: { id: 'today', name: '今天', nameEn: 'Today', days: 1 },
  week: { id: 'week', name: '本周', nameEn: 'This Week', days: 7 },
  month: { id: 'month', name: '本月', nameEn: 'This Month', days: 30 },
  season: { id: 'season', name: '本季', nameEn: 'This Season', days: 90 },
  year: { id: 'year', name: '今年', nameEn: 'This Year', days: 365 },
  all: { id: 'all', name: '全部', nameEn: 'All Time', days: null },
}

export function getLogTags(log) {
  const typeConfig = LOG_TYPES[log.type]
  const tags = []
  
  if (typeConfig) {
    tags.push(...typeConfig.tags)
  }
  
  if (log.perfect && !tags.includes('perfect')) {
    tags.push('perfect')
  }
  
  if (log.tags) {
    tags.push(...log.tags)
  }
  
  if (log.constellationId) {
    const season = getSeasonForConstellation(log.constellationId)
    if (season && !tags.includes(season)) {
      tags.push(season)
    }
  }
  
  return tags
}

function getSeasonForConstellation(constellationId) {
  const seasonMap = {
    ursa_major: 'spring',
    leo: 'spring',
    virgo: 'spring',
    bootes: 'spring',
    scorpius: 'summer',
    lyra: 'summer',
    cygnus: 'summer',
    aquila: 'summer',
    sagittarius: 'summer',
    cassiopeia: 'autumn',
    cygnus: 'autumn',
    andromeda: 'autumn',
    pegasus: 'autumn',
    orion: 'winter',
    taurus: 'winter',
    gemini: 'winter',
    canis_major: 'winter',
  }
  return seasonMap[constellationId] || null
}

export function getAllTags() {
  const allTags = []
  Object.values(LOG_TAG_CATEGORIES).forEach(category => {
    category.tags.forEach(tag => {
      allTags.push({
        ...tag,
        categoryId: category.id,
        categoryName: category.name,
        categoryIcon: category.icon,
        color: category.color
      })
    })
  })
  return allTags
}

export function getTagById(tagId) {
  return getAllTags().find(t => t.id === tagId)
}

export function getCategoryByTagId(tagId) {
  for (const category of Object.values(LOG_TAG_CATEGORIES)) {
    const tag = category.tags.find(t => t.id === tagId)
    if (tag) {
      return { ...category, matchedTag: tag }
    }
  }
  return null
}
