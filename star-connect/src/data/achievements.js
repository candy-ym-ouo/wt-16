export const ACHIEVEMENTS = [
  {
    id: 'first_star',
    name: '初见星光',
    description: '完成第一次星星连线',
    icon: '⭐',
    category: 'beginner',
    condition: { type: 'connect_count', value: 1 }
  },
  {
    id: 'constellation_1',
    name: '初识星座',
    description: '成功发现第一个完整星座',
    icon: '✨',
    category: 'explorer',
    condition: { type: 'discover_count', value: 1 }
  },
  {
    id: 'constellation_3',
    name: '星空漫步者',
    description: '发现3个不同的星座',
    icon: '🌙',
    category: 'explorer',
    condition: { type: 'discover_count', value: 3 }
  },
  {
    id: 'constellation_all',
    name: '观星大师',
    description: '发现所有的星座',
    icon: '🌟',
    category: 'explorer',
    condition: { type: 'discover_count', value: 6 }
  },
  {
    id: 'easy_clear',
    name: '入门完成',
    description: '完成所有难度1的星座',
    icon: '🎯',
    category: 'challenge',
    condition: { type: 'difficulty_clear', value: 1 }
  },
  {
    id: 'medium_clear',
    name: '进阶探索',
    description: '完成所有难度2的星座',
    icon: '🔥',
    category: 'challenge',
    condition: { type: 'difficulty_clear', value: 2 }
  },
  {
    id: 'hard_clear',
    name: '星空征服者',
    description: '完成所有难度3的星座',
    icon: '💎',
    category: 'challenge',
    condition: { type: 'difficulty_clear', value: 3 }
  },
  {
    id: 'log_5',
    name: '记录者',
    description: '累计5条观测日志',
    icon: '📖',
    category: 'collector',
    condition: { type: 'log_count', value: 5 }
  },
  {
    id: 'log_15',
    name: '天文日志家',
    description: '累计15条观测日志',
    icon: '📚',
    category: 'collector',
    condition: { type: 'log_count', value: 15 }
  },
  {
    id: 'perfect_orion',
    name: '猎人之眼',
    description: '在没有错误的情况下完成猎户座',
    icon: '🏹',
    category: 'special',
    condition: { type: 'perfect_constellation', value: 'orion' }
  },
  {
    id: 'perfect_ursa',
    name: '北斗指引',
    description: '在没有错误的情况下完成大熊座',
    icon: '🐻',
    category: 'special',
    condition: { type: 'perfect_constellation', value: 'ursa_major' }
  },
  {
    id: 'dedicated',
    name: '坚持不懈',
    description: '累计错误连线超过20次但最终完成',
    icon: '💪',
    category: 'special',
    condition: { type: 'total_mistakes', value: 20 }
  }
]

export const getAchievementById = (id) => 
  ACHIEVEMENTS.find(a => a.id === id)

export const getAchievementsByCategory = (category) =>
  ACHIEVEMENTS.filter(a => a.category === category)
