import { EVENT_ACHIEVEMENTS } from './nightSkyEvents'

export const HIDDEN_ACHIEVEMENTS = [
  {
    id: 'mistake_50',
    name: '蹒跚学步',
    description: '累计错误连线达到50次',
    icon: '🫠',
    category: 'hidden',
    hidden: true,
    condition: { type: 'total_mistakes', value: 50 },
    reward: { type: 'stardust', amount: 30 }
  },
  {
    id: 'mistake_100',
    name: '百折不挠',
    description: '累计错误连线达到100次',
    icon: '💥',
    category: 'hidden',
    hidden: true,
    condition: { type: 'total_mistakes', value: 100 },
    reward: { type: 'stardust', amount: 80 }
  },
  {
    id: 'mistake_200',
    name: '屡败屡战',
    description: '累计错误连线达到200次',
    icon: '🌪️',
    category: 'hidden',
    hidden: true,
    condition: { type: 'total_mistakes', value: 200 },
    reward: { type: 'stardust', amount: 150 }
  },
  {
    id: 'mistake_500',
    name: '星空试错者',
    description: '累计错误连线达到500次',
    icon: '🌋',
    category: 'hidden',
    hidden: true,
    condition: { type: 'total_mistakes', value: 500 },
    reward: { type: 'stardust', amount: 300 }
  },
  {
    id: 'single_session_mistakes_10',
    name: '迷途知返',
    description: '单次观测中错误10次以上仍完成连线',
    icon: '🧭',
    category: 'hidden',
    hidden: true,
    condition: { type: 'single_session_mistakes', value: 10 },
    reward: { type: 'stardust', amount: 50 }
  },
  {
    id: 'consecutive_perfect_3',
    name: '三连星耀',
    description: '连续3次观测均零错误完美通关',
    icon: '✨',
    category: 'hidden',
    hidden: true,
    condition: { type: 'consecutive_perfect', value: 3 },
    reward: { type: 'stardust', amount: 80 }
  },
  {
    id: 'consecutive_perfect_5',
    name: '五星连珠',
    description: '连续5次观测均零错误完美通关',
    icon: '🌟',
    category: 'hidden',
    hidden: true,
    condition: { type: 'consecutive_perfect', value: 5 },
    reward: { type: 'stardust', amount: 150 }
  },
  {
    id: 'consecutive_perfect_10',
    name: '十全十美',
    description: '连续10次观测均零错误完美通关',
    icon: '💎',
    category: 'hidden',
    hidden: true,
    condition: { type: 'consecutive_perfect', value: 10 },
    reward: { type: 'stardust', amount: 280 }
  },
  {
    id: 'consecutive_perfect_20',
    name: '无瑕轨迹',
    description: '连续20次观测均零错误完美通关',
    icon: '👑',
    category: 'hidden',
    hidden: true,
    condition: { type: 'consecutive_perfect', value: 20 },
    reward: { type: 'stardust', amount: 500 }
  },
  {
    id: 'reobserve_any_3',
    name: '故地重游',
    description: '对任意一个已发现星座重复观测3次',
    icon: '🔄',
    category: 'hidden',
    hidden: true,
    condition: { type: 'reobserve_single', value: 3 },
    reward: { type: 'stardust', amount: 40 }
  },
  {
    id: 'reobserve_any_10',
    name: '常客到访',
    description: '对任意一个已发现星座重复观测10次',
    icon: '🏠',
    category: 'hidden',
    hidden: true,
    condition: { type: 'reobserve_single', value: 10 },
    reward: { type: 'stardust', amount: 120 }
  },
  {
    id: 'reobserve_any_30',
    name: '朝思暮想',
    description: '对任意一个已发现星座重复观测30次',
    icon: '💕',
    category: 'hidden',
    hidden: true,
    condition: { type: 'reobserve_single', value: 30 },
    reward: { type: 'stardust', amount: 250 }
  },
  {
    id: 'reobserve_any_50',
    name: '魂牵梦萦',
    description: '对任意一个已发现星座重复观测50次',
    icon: '🌙',
    category: 'hidden',
    hidden: true,
    condition: { type: 'reobserve_single', value: 50 },
    reward: { type: 'stardust', amount: 400 }
  },
  {
    id: 'reobserve_all_once',
    name: '重走星途',
    description: '对所有已发现星座都至少重复观测1次',
    icon: '🗺️',
    category: 'hidden',
    hidden: true,
    condition: { type: 'reobserve_all_once', value: 1 },
    reward: { type: 'stardust', amount: 180 }
  },
  {
    id: 'total_reobserve_50',
    name: '回溯旅人',
    description: '累计重复观测总次数达到50次',
    icon: '🚶',
    category: 'hidden',
    hidden: true,
    condition: { type: 'total_reobserve', value: 50 },
    reward: { type: 'stardust', amount: 100 }
  },
  {
    id: 'total_reobserve_200',
    name: '星空巡礼者',
    description: '累计重复观测总次数达到200次',
    icon: '🛸',
    category: 'hidden',
    hidden: true,
    condition: { type: 'total_reobserve', value: 200 },
    reward: { type: 'stardust', amount: 350 }
  },
  {
    id: 'reobserve_perfect_same_5',
    name: '熟能生巧',
    description: '对同一星座累计5次完美通关',
    icon: '🎯',
    category: 'hidden',
    hidden: true,
    condition: { type: 'reobserve_perfect_single', value: 5 },
    reward: { type: 'stardust', amount: 160 }
  },
  {
    id: 'reobserve_perfect_same_15',
    name: '匠心独运',
    description: '对同一星座累计15次完美通关',
    icon: '🏆',
    category: 'hidden',
    hidden: true,
    condition: { type: 'reobserve_perfect_single', value: 15 },
    reward: { type: 'stardust', amount: 320 }
  }
]

export const ACHIEVEMENTS = [
  ...EVENT_ACHIEVEMENTS,
  ...HIDDEN_ACHIEVEMENTS,
  {
    id: 'first_star',
    name: '初见星光',
    description: '完成第一次星星连线',
    icon: '⭐',
    category: 'beginner',
    condition: { type: 'connect_count', value: 1 },
    reward: { type: 'stardust', amount: 20 }
  },
  {
    id: 'constellation_1',
    name: '初识星座',
    description: '成功发现第一个完整星座',
    icon: '✨',
    category: 'explorer',
    condition: { type: 'discover_count', value: 1 },
    reward: { type: 'stardust', amount: 50 }
  },
  {
    id: 'constellation_3',
    name: '星空漫步者',
    description: '发现3个不同的星座',
    icon: '🌙',
    category: 'explorer',
    condition: { type: 'discover_count', value: 3 },
    reward: { type: 'stardust', amount: 100 }
  },
  {
    id: 'constellation_all',
    name: '观星大师',
    description: '发现所有的星座',
    icon: '🌟',
    category: 'explorer',
    condition: { type: 'discover_count', value: 6 },
    reward: { type: 'stardust', amount: 300 }
  },
  {
    id: 'easy_clear',
    name: '入门完成',
    description: '完成所有难度1的星座',
    icon: '🎯',
    category: 'challenge',
    condition: { type: 'difficulty_clear', value: 1 },
    reward: { type: 'stardust', amount: 80 }
  },
  {
    id: 'medium_clear',
    name: '进阶探索',
    description: '完成所有难度2的星座',
    icon: '🔥',
    category: 'challenge',
    condition: { type: 'difficulty_clear', value: 2 },
    reward: { type: 'stardust', amount: 150 }
  },
  {
    id: 'hard_clear',
    name: '星空征服者',
    description: '完成所有难度3的星座',
    icon: '💎',
    category: 'challenge',
    condition: { type: 'difficulty_clear', value: 3 },
    reward: { type: 'stardust', amount: 250 }
  },
  {
    id: 'log_5',
    name: '记录者',
    description: '累计5条观测日志',
    icon: '📖',
    category: 'collector',
    condition: { type: 'log_count', value: 5 },
    reward: { type: 'stardust', amount: 30 }
  },
  {
    id: 'log_15',
    name: '天文日志家',
    description: '累计15条观测日志',
    icon: '📚',
    category: 'collector',
    condition: { type: 'log_count', value: 15 },
    reward: { type: 'stardust', amount: 100 }
  },
  {
    id: 'perfect_orion',
    name: '猎人之眼',
    description: '在没有错误的情况下完成猎户座',
    icon: '🏹',
    category: 'special',
    condition: { type: 'perfect_constellation', value: 'orion' },
    reward: { type: 'stardust', amount: 60 }
  },
  {
    id: 'perfect_ursa',
    name: '北斗指引',
    description: '在没有错误的情况下完成大熊座',
    icon: '🐻',
    category: 'special',
    condition: { type: 'perfect_constellation', value: 'ursa_major' },
    reward: { type: 'stardust', amount: 60 }
  },
  {
    id: 'dedicated',
    name: '坚持不懈',
    description: '累计错误连线超过20次但最终完成',
    icon: '💪',
    category: 'special',
    condition: { type: 'total_mistakes', value: 20 },
    reward: { type: 'stardust', amount: 40 }
  },
  {
    id: 'expedition_first',
    name: '夜行初旅',
    description: '完成第一次夜间远征',
    icon: '🌙',
    category: 'expedition',
    condition: { type: 'expedition_complete', value: 1 },
    reward: { type: 'stardust', amount: 50 }
  },
  {
    id: 'expedition_5',
    name: '远征常客',
    description: '完成5次夜间远征',
    icon: '🗺️',
    category: 'expedition',
    condition: { type: 'expedition_complete', value: 5 },
    reward: { type: 'stardust', amount: 200 }
  },
  {
    id: 'expedition_half',
    name: '半程征途',
    description: '在单次远征中通过3关',
    icon: '⛰️',
    category: 'expedition',
    condition: { type: 'expedition_stages', value: 3 },
    reward: { type: 'stardust', amount: 80 }
  },
  {
    id: 'expedition_full',
    name: '月下征途',
    description: '在单次远征中通过全部6关',
    icon: '🏆',
    category: 'expedition',
    condition: { type: 'expedition_stages', value: 6 },
    reward: { type: 'stardust', amount: 300 }
  },
  {
    id: 'expedition_perfect_3',
    name: '零失误远征',
    description: '累计3次完美通关远征关卡',
    icon: '💫',
    category: 'expedition',
    condition: { type: 'expedition_perfect', value: 3 },
    reward: { type: 'stardust', amount: 120 }
  },
  {
    id: 'expedition_stardust',
    name: '星尘收集者',
    description: '远征累计获得500星尘',
    icon: '✦',
    category: 'expedition',
    condition: { type: 'expedition_stardust', value: 500 },
    reward: { type: 'stardust', amount: 200 }
  }
]

export const getAchievementById = (id) => 
  ACHIEVEMENTS.find(a => a.id === id)

export const getAchievementsByCategory = (category) =>
  ACHIEVEMENTS.filter(a => a.category === category)
