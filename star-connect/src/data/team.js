export const TEAM_ROLES = {
  leader: {
    id: 'leader',
    name: '队长',
    icon: '👑',
    color: 'from-amber-500 to-yellow-400',
    description: '队伍组织者，管理任务分配',
    permissions: ['manage_members', 'assign_tasks', 'create_tasks', 'delete_tasks']
  },
  explorer: {
    id: 'explorer',
    name: '探索先锋',
    icon: '🔭',
    color: 'from-blue-500 to-cyan-400',
    description: '负责发现新星座',
    permissions: ['complete_tasks', 'add_log']
  },
  recorder: {
    id: 'recorder',
    name: '记录者',
    icon: '📝',
    color: 'from-green-500 to-emerald-400',
    description: '负责记录观测日志',
    permissions: ['add_log', 'edit_log', 'complete_tasks']
  },
  cartographer: {
    id: 'cartographer',
    name: '星图师',
    icon: '🗺️',
    color: 'from-purple-500 to-pink-400',
    description: '负责绘制星图和整理资料',
    permissions: ['complete_tasks', 'add_log', 'manage_achievements']
  },
  rookie: {
    id: 'rookie',
    name: '新人',
    icon: '🌱',
    color: 'from-gray-400 to-gray-500',
    description: '新加入的成员',
    permissions: ['complete_tasks', 'add_log']
  }
}

export const TEAM_MEMBER_TEMPLATES = [
  {
    id: 'player',
    name: '我',
    avatar: '🌟',
    role: 'leader',
    xp: 0,
    level: 1,
    joinedAt: Date.now(),
    isSelf: true
  },
  {
    id: 'nova',
    name: '星尘',
    avatar: '✨',
    role: 'explorer',
    xp: 240,
    level: 3,
    joinedAt: Date.now() - 86400000 * 5,
    specialty: 'orion'
  },
  {
    id: 'lyra',
    name: '天琴',
    avatar: '🎵',
    role: 'recorder',
    xp: 180,
    level: 2,
    joinedAt: Date.now() - 86400000 * 3,
    specialty: 'lyra'
  },
  {
    id: 'orion',
    name: '猎人',
    avatar: '🏹',
    role: 'cartographer',
    xp: 320,
    level: 4,
    joinedAt: Date.now() - 86400000 * 10,
    specialty: 'scorpius'
  }
]

export const TEAM_TASKS = [
  {
    id: 'team_first_discovery',
    name: '首次共探',
    description: '队伍一起完成第一个星座观测',
    icon: '⭐',
    type: 'collaborative',
    difficulty: 1,
    target: { type: 'team_discoveries', value: 1 },
    reward: { teamXP: 100, stardust: 50, badge: 'first_team_discovery' },
    requiredRoles: ['explorer', 'recorder'],
    constellationHint: 'ursa_major'
  },
  {
    id: 'team_triple_discover',
    name: '三星同辉',
    description: '在一天内发现3个不同的星座',
    icon: '🌟',
    type: 'challenge',
    difficulty: 2,
    target: { type: 'daily_discoveries', value: 3 },
    reward: { teamXP: 200, stardust: 100, badge: 'triple_star' },
    timeLimit: 86400000,
    constellationHint: null
  },
  {
    id: 'team_perfect_run',
    name: '完美协作',
    description: '连续完美完成5个星座观测',
    icon: '💎',
    type: 'challenge',
    difficulty: 2,
    target: { type: 'perfect_streak', value: 5 },
    reward: { teamXP: 250, stardust: 120, badge: 'perfect_teamwork' },
    requiredRoles: ['explorer']
  },
  {
    id: 'team_season_spring',
    name: '春日巡礼',
    description: '完整发现春季所有星座',
    icon: '🌸',
    type: 'milestone',
    difficulty: 3,
    target: { type: 'season_complete', value: 'spring' },
    reward: { teamXP: 400, stardust: 200, badge: 'spring_wanderers' }
  },
  {
    id: 'team_season_summer',
    name: '夏夜守望',
    description: '完整发现夏季所有星座',
    icon: '☀️',
    type: 'milestone',
    difficulty: 3,
    target: { type: 'season_complete', value: 'summer' },
    reward: { teamXP: 400, stardust: 200, badge: 'summer_watchers' }
  },
  {
    id: 'team_season_autumn',
    name: '秋夜寻星',
    description: '完整发现秋季所有星座',
    icon: '🍂',
    type: 'milestone',
    difficulty: 3,
    target: { type: 'season_complete', value: 'autumn' },
    reward: { teamXP: 400, stardust: 200, badge: 'autumn_explorers' }
  },
  {
    id: 'team_season_winter',
    name: '冬夜探秘',
    description: '完整发现冬季所有星座',
    icon: '❄️',
    type: 'milestone',
    difficulty: 3,
    target: { type: 'season_complete', value: 'winter' },
    reward: { teamXP: 400, stardust: 200, badge: 'winter_stargazers' }
  },
  {
    id: 'team_all_seasons',
    name: '四季星旅',
    description: '完成所有四季的星座探索',
    icon: '🌍',
    type: 'legendary',
    difficulty: 4,
    target: { type: 'all_seasons', value: true },
    reward: { teamXP: 1000, stardust: 500, badge: 'master_explorers' }
  },
  {
    id: 'team_log_20',
    name: '星之笔录',
    description: '队伍累计记录20条观测日志',
    icon: '📖',
    type: 'collection',
    difficulty: 2,
    target: { type: 'team_logs', value: 20 },
    reward: { teamXP: 180, stardust: 80, badge: 'stellar_records' }
  },
  {
    id: 'team_expedition',
    name: '远征先锋队',
    description: '完成5次夜间远征',
    icon: '🌙',
    type: 'expedition',
    difficulty: 3,
    target: { type: 'team_expeditions', value: 5 },
    reward: { teamXP: 350, stardust: 180, badge: 'expedition_force' }
  },
  {
    id: 'team_level_up',
    name: '共同成长',
    description: '所有成员达到3级',
    icon: '📈',
    type: 'growth',
    difficulty: 2,
    target: { type: 'all_members_level', value: 3 },
    reward: { teamXP: 300, stardust: 150, badge: 'united_growth' }
  },
  {
    id: 'team_7day_streak',
    name: '七日繁星',
    description: '连续7天都有队员进行观测',
    icon: '🔥',
    type: 'streak',
    difficulty: 3,
    target: { type: 'team_streak', value: 7 },
    reward: { teamXP: 450, stardust: 220, badge: 'seven_stars' }
  }
]

export const TEAM_ACHIEVEMENTS = [
  {
    id: 'first_team_discovery',
    name: '初露锋芒',
    description: '队伍完成第一次协作观测',
    icon: '🤝',
    category: 'beginner',
    color: 'from-blue-500 to-cyan-400',
    condition: { type: 'team_discoveries', value: 1 }
  },
  {
    id: 'team_5_discoveries',
    name: '星空逐梦',
    description: '队伍累计发现5个星座',
    icon: '⭐',
    category: 'exploration',
    color: 'from-purple-500 to-pink-400',
    condition: { type: 'team_discoveries', value: 5 }
  },
  {
    id: 'triple_star',
    name: '三星同辉',
    description: '单日发现3个不同星座',
    icon: '🌟',
    category: 'challenge',
    color: 'from-amber-500 to-yellow-400',
    condition: { type: 'daily_discoveries', value: 3 }
  },
  {
    id: 'perfect_teamwork',
    name: '完美协作',
    description: '连续5次完美观测',
    icon: '💎',
    category: 'challenge',
    color: 'from-cyan-500 to-blue-400',
    condition: { type: 'perfect_streak', value: 5 }
  },
  {
    id: 'spring_wanderers',
    name: '春日漫步者',
    description: '完整探索春季星座',
    icon: '🌸',
    category: 'season',
    color: 'from-pink-500 to-rose-400',
    condition: { type: 'season_complete', value: 'spring' }
  },
  {
    id: 'summer_watchers',
    name: '夏夜守望者',
    description: '完整探索夏季星座',
    icon: '☀️',
    category: 'season',
    color: 'from-orange-500 to-amber-400',
    condition: { type: 'season_complete', value: 'summer' }
  },
  {
    id: 'autumn_explorers',
    name: '秋日探险家',
    description: '完整探索秋季星座',
    icon: '🍂',
    category: 'season',
    color: 'from-amber-600 to-orange-500',
    condition: { type: 'season_complete', value: 'autumn' }
  },
  {
    id: 'winter_stargazers',
    name: '冬夜观星人',
    description: '完整探索冬季星座',
    icon: '❄️',
    category: 'season',
    color: 'from-blue-400 to-cyan-300',
    condition: { type: 'season_complete', value: 'winter' }
  },
  {
    id: 'master_explorers',
    name: '四季星旅大师',
    description: '完成所有四季的星座探索',
    icon: '🌍',
    category: 'legendary',
    color: 'from-yellow-400 via-orange-400 to-red-400',
    condition: { type: 'all_seasons', value: true }
  },
  {
    id: 'stellar_records',
    name: '星辰笔录',
    description: '累计20条团队观测日志',
    icon: '📖',
    category: 'collection',
    color: 'from-green-500 to-emerald-400',
    condition: { type: 'team_logs', value: 20 }
  },
  {
    id: 'expedition_force',
    name: '远征先锋队',
    description: '完成5次夜间远征',
    icon: '🌙',
    category: 'expedition',
    color: 'from-indigo-500 to-purple-400',
    condition: { type: 'team_expeditions', value: 5 }
  },
  {
    id: 'united_growth',
    name: '共同成长',
    description: '所有成员达到3级',
    icon: '📈',
    category: 'growth',
    color: 'from-teal-500 to-cyan-400',
    condition: { type: 'all_members_level', value: 3 }
  },
  {
    id: 'seven_stars',
    name: '七日繁星',
    description: '连续7天团队观测打卡',
    icon: '🔥',
    category: 'streak',
    color: 'from-red-500 to-orange-400',
    condition: { type: 'team_streak', value: 7 }
  },
  {
    id: 'team_all_constellations',
    name: '群星尽收',
    description: '队伍发现所有星座',
    icon: '🌌',
    category: 'legendary',
    color: 'from-purple-600 via-pink-500 to-red-500',
    condition: { type: 'team_discover_all', value: 6 }
  }
]

export const TEAM_LOG_TYPES = {
  discovery: {
    id: 'discovery',
    name: '新发现',
    icon: '✨',
    color: 'text-yellow-400'
  },
  reobservation: {
    id: 'reobservation',
    name: '重温',
    icon: '🔄',
    color: 'text-blue-400'
  },
  task_complete: {
    id: 'task_complete',
    name: '任务完成',
    icon: '✅',
    color: 'text-green-400'
  },
  achievement: {
    id: 'achievement',
    name: '成就解锁',
    icon: '🏆',
    color: 'text-amber-400'
  },
  member_join: {
    id: 'member_join',
    name: '成员加入',
    icon: '👋',
    color: 'text-cyan-400'
  },
  expedition: {
    id: 'expedition',
    name: '远征记录',
    icon: '🌙',
    color: 'text-purple-400'
  },
  note: {
    id: 'note',
    name: '笔记',
    icon: '📝',
    color: 'text-gray-400'
  }
}

export const getTeamTaskById = (id) => TEAM_TASKS.find(t => t.id === id)
export const getTeamAchievementById = (id) => TEAM_ACHIEVEMENTS.find(a => a.id === id)
export const getTeamAchievementsByCategory = (category) => 
  TEAM_ACHIEVEMENTS.filter(a => a.category === category)
export const getTeamTasksByType = (type) => TEAM_TASKS.filter(t => t.type === type)
export const getTeamRoleById = (id) => TEAM_ROLES[id] || null
