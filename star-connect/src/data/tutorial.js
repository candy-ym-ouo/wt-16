export const TUTORIAL_PHASES = [
  {
    id: 'phase_intro',
    order: 1,
    name: '启程',
    icon: '🌅',
    color: 'from-amber-400 to-orange-500',
    description: '熟悉界面，开始你的第一次星空接触',
    stepIds: ['welcome', 'choose_constellation'],
    unlocks: ['night_sky_basic'],
    reward: { type: 'title', name: '星光启程者', icon: '🌟' }
  },
  {
    id: 'phase_basic',
    order: 2,
    name: '入门',
    icon: '🎯',
    color: 'from-green-400 to-emerald-500',
    description: '掌握星星连线的基本操作',
    stepIds: ['connect_stars_intro', 'first_connection', 'complete_constellation'],
    unlocks: ['first_achievement', 'first_log'],
    reward: { type: 'stardust', amount: 30 }
  },
  {
    id: 'phase_explore',
    order: 3,
    name: '探索',
    icon: '🔍',
    color: 'from-blue-400 to-cyan-500',
    description: '使用图鉴、日历等辅助工具',
    stepIds: ['explore_atlas', 'check_calendar'],
    unlocks: ['explore_tools'],
    reward: { type: 'stardust', amount: 20 }
  },
  {
    id: 'phase_advanced',
    order: 4,
    name: '进阶',
    icon: '🔥',
    color: 'from-purple-400 to-pink-500',
    description: '挑战完美观测和高级玩法',
    stepIds: ['try_perfect', 'season_plan', 'expedition_intro', 'achievements'],
    unlocks: ['advanced_gameplay'],
    reward: { type: 'stardust', amount: 50 }
  },
  {
    id: 'phase_graduation',
    order: 5,
    name: '结业',
    icon: '🎓',
    color: 'from-star-gold to-nebula-purple',
    description: '恭喜完成全部训练！',
    stepIds: ['graduation'],
    unlocks: ['graduate'],
    reward: { type: 'badge', name: '星空新人徽章', icon: '🎖️' }
  }
]

export const TUTORIAL_MILESTONES = {
  first_star_connect: {
    id: 'first_star_connect',
    phase: 'phase_basic',
    name: '首次连线',
    trigger: 'star_connected',
    toast: {
      icon: '⭐',
      title: '太棒了！',
      message: '你完成了第一次星星连线！这是「初见星光」成就的起点。',
      actionText: '继续完成星座 →',
      highlightAchievement: 'first_star'
    },
    autoGenerateLog: true,
    logTemplate: (data) => ({
      type: 'milestone',
      milestone: 'first_star_connect',
      message: '完成了第一次星星连线',
      starId: data.starId,
      timestamp: Date.now()
    })
  },
  first_constellation: {
    id: 'first_constellation',
    phase: 'phase_basic',
    name: '首个星座',
    trigger: 'constellation_complete',
    toast: {
      icon: '✨',
      title: '新发现！',
      message: '你发现了第一个星座！「初识星座」成就已解锁，让我们去图鉴看看它的故事吧。',
      actionText: '查看图鉴 →',
      actionPanel: 'atlas',
      highlightAchievement: 'constellation_1'
    },
    autoGenerateLog: true,
    logTemplate: (data) => ({
      type: 'milestone',
      milestone: 'first_constellation',
      message: `发现了第一个星座：${data.constellationName}`,
      constellationId: data.constellationId,
      constellationName: data.constellationName,
      perfect: data.perfect,
      timestamp: Date.now()
    }),
    autoUnlockAchievements: ['constellation_1', 'first_star']
  },
  first_achievement: {
    id: 'first_achievement',
    phase: 'phase_basic',
    name: '首个成就',
    trigger: 'achievement_unlocked',
    toast: {
      icon: '🏆',
      title: '里程碑达成！',
      message: '你解锁了第一个成就！继续探索，收集更多里程碑吧。',
      actionText: '查看成就墙 →',
      actionPanel: 'achievements'
    },
    autoGenerateLog: true,
    logTemplate: (data) => ({
      type: 'milestone',
      milestone: 'first_achievement',
      message: `解锁了首个成就：${data.achievementName}`,
      achievementId: data.achievementId,
      achievementName: data.achievementName,
      timestamp: Date.now()
    })
  },
  first_mistake: {
    id: 'first_mistake',
    phase: 'phase_basic',
    name: '首次错误',
    trigger: 'mistake_made',
    suppressGlobalError: true,
    guidance: {
      icon: '💡',
      title: '别担心，这很正常',
      message: '每个人都会犯错！注意观察星座的轮廓，只有相邻的星星之间才能连线。',
      tips: [
        '尝试从星座中最亮的星星开始',
        '如果不确定，可以去图鉴参考完整图案',
        '点击"重连"可以随时重新开始'
      ],
      suggestion: '仔细看看星座形状，试试连接正确的星星'
    },
    autoGenerateLog: true,
    logTemplate: (_data) => ({
      type: 'milestone',
      milestone: 'first_mistake',
      message: '经历了第一次连线错误（别灰心，这是学习的一部分！）',
      timestamp: Date.now()
    })
  },
  first_log_visit: {
    id: 'first_log_visit',
    phase: 'phase_explore',
    name: '首次查看日志',
    trigger: 'panel_opened_log',
    toast: {
      icon: '📖',
      title: '星空日志',
      message: '这里记录着你每一次探索的足迹，每条日志都是你成长的见证！',
      actionText: null
    },
    autoGenerateLog: false
  },
  first_perfect: {
    id: 'first_perfect',
    phase: 'phase_advanced',
    name: '首次完美',
    trigger: 'perfect_observation',
    toast: {
      icon: '💎',
      title: '完美观测！',
      message: '零失误完成！你的专注力令人惊叹，已记录为完美观测。',
      actionText: '查看成就 →',
      actionPanel: 'achievements',
      highlightAchievement: null
    },
    autoGenerateLog: true,
    logTemplate: (data) => ({
      type: 'milestone',
      milestone: 'first_perfect',
      message: `完成了第一次完美观测：${data.constellationName}`,
      constellationId: data.constellationId,
      constellationName: data.constellationName,
      timestamp: Date.now()
    })
  }
}

export const CONTEXTUAL_HINTS = {
  idle_no_target: {
    id: 'idle_no_target',
    trigger: 'idle_10s_no_target',
    title: '想开始探索吗？',
    message: '从底部任务栏选择一个星座，开启你的观星之旅吧！',
    icon: '🎯',
    suggestedAction: 'open_tasks_panel',
    priority: 'medium',
    onlyDuringTutorial: true,
    onlyOnce: true
  },
  after_discovery_suggest_atlas: {
    id: 'after_discovery_suggest_atlas',
    trigger: 'discovery_completed_not_viewed_atlas',
    title: '想知道更多？',
    message: '去图鉴看看这个星座的神话故事和观测技巧吧！',
    icon: '📚',
    suggestedAction: 'open_atlas',
    priority: 'low',
    onlyDuringTutorial: true,
    onlyOnce: true
  },
  mistake_3_times: {
    id: 'mistake_3_times',
    trigger: 'session_mistakes_3',
    title: '需要一些帮助吗？',
    message: '遇到困难是正常的，试试去图鉴参考完整的星座图案？',
    icon: '🧭',
    suggestedAction: 'open_atlas',
    priority: 'high',
    onlyDuringTutorial: false,
    onlyOnce: true
  },
  mistake_5_times: {
    id: 'mistake_5_times',
    trigger: 'session_mistakes_5',
    title: '换个思路试试',
    message: '也许这个星座有点难，可以先尝试更简单的星座（如大熊座），稍后再来挑战。',
    icon: '🔄',
    suggestedAction: 'open_tasks_panel',
    priority: 'high',
    onlyDuringTutorial: false,
    onlyOnce: true
  }
}

export const TUTORIAL_STEPS = [
  {
    id: 'welcome',
    order: 1,
    title: '欢迎来到星空连接',
    icon: '✨',
    category: 'intro',
    description: '在这片星空中，你将学会如何识别和连接星座，开启你的天文探索之旅。',
    tips: [
      '我们会一步步带你熟悉所有功能',
      '完成全部课程后还能获得专属奖励'
    ],
    target: null,
    autoAdvance: true,
    duration: 3000
  },
  {
    id: 'choose_constellation',
    order: 2,
    title: '选择你的第一个星座',
    icon: '🎯',
    category: 'basic',
    description: '从底部任务栏选择一个星座开始探索。建议从难度较低的星座开始。',
    tips: [
      '入门星座的星星较少，连线更简单',
      '大熊座和猎户座是很好的起点'
    ],
    target: { type: 'select_constellation', constellationId: 'ursa_major' },
    action: {
      type: 'panel',
      panel: 'tasks',
      highlight: 'constellation_selector'
    },
    autoAdvance: false,
    validation: {
      type: 'target_selected'
    }
  },
  {
    id: 'connect_stars_intro',
    order: 3,
    title: '星星连线入门',
    icon: '⭐',
    category: 'basic',
    description: '点击夜空中闪烁的星星，按照星座的形状将它们连接起来。',
    tips: [
      '观察星座的轮廓，想象它们的连线',
      '两颗相邻的星星之间可以直接连接'
    ],
    target: null,
    autoAdvance: true,
    duration: 4000
  },
  {
    id: 'first_connection',
    order: 4,
    title: '尝试连接第一颗星',
    icon: '🔗',
    category: 'basic',
    description: '在夜空中点击任意一颗高亮星星，开始你的第一次连线。',
    tips: [
      '点击一颗星星后，它会被选中并高亮',
      '再点击另一颗相邻的星星完成连接'
    ],
    target: null,
    action: {
      type: 'highlight_area',
      area: 'night_sky'
    },
    autoAdvance: false,
    validation: {
      type: 'star_connected',
      count: 1
    }
  },
  {
    id: 'complete_constellation',
    order: 5,
    title: '完成第一个星座',
    icon: '🌟',
    category: 'basic',
    description: '继续连接剩余的星星，完成整个星座的图案。',
    tips: [
      '进度条会显示你的完成度',
      '如果连错了，可以点击"重连"按钮重置'
    ],
    target: null,
    autoAdvance: false,
    validation: {
      type: 'constellation_complete'
    }
  },
  {
    id: 'explore_atlas',
    order: 6,
    title: '查看星空图鉴',
    icon: '📚',
    category: 'explore',
    description: '在图鉴中可以查看已发现的星座详情，包括神话故事和观测技巧。',
    tips: [
      '每个星座都有独特的神话故事',
      '图鉴会记录你的完美观测'
    ],
    target: null,
    action: {
      type: 'panel',
      panel: 'atlas'
    },
    autoAdvance: false,
    validation: {
      type: 'panel_opened',
      panel: 'atlas'
    }
  },
  {
    id: 'check_calendar',
    order: 7,
    title: '观测日历',
    icon: '📅',
    category: 'explore',
    description: '每日签到可以获得星尘奖励，连续签到还有额外奖励。',
    tips: [
      '每日签到获得10星尘',
      '连续签到奖励更丰厚'
    ],
    target: null,
    action: {
      type: 'panel',
      panel: 'calendar'
    },
    autoAdvance: false,
    validation: {
      type: 'panel_opened',
      panel: 'calendar'
    }
  },
  {
    id: 'try_perfect',
    order: 8,
    title: '挑战完美观测',
    icon: '💎',
    category: 'advanced',
    description: '尝试零失误完成一个星座，解锁完美观测记录！',
    tips: [
      '完美观测会获得特殊标记',
      '慢慢来，仔细观察再连线'
    ],
    target: null,
    autoAdvance: false,
    validation: {
      type: 'perfect_observation'
    }
  },
  {
    id: 'season_plan',
    order: 9,
    title: '四季观测计划',
    icon: '🌸',
    category: 'advanced',
    description: '跟随四季的更替，探索不同季节的专属星座，完成阶段目标获得奖励。',
    tips: [
      '每个季节都有专属星座',
      '分为入门、进阶、大师三个阶段'
    ],
    target: null,
    action: {
      type: 'panel',
      panel: 'seasons'
    },
    autoAdvance: false,
    validation: {
      type: 'panel_opened',
      panel: 'seasons'
    }
  },
  {
    id: 'expedition_intro',
    order: 10,
    title: '夜间远征挑战',
    icon: '🌙',
    category: 'advanced',
    description: '在夜间远征中连续挑战多个星座，看看你能闯过多少关。',
    tips: [
      '体力值会随时间恢复',
      '通关越多奖励越丰厚'
    ],
    target: null,
    autoAdvance: false,
    validation: {
      type: 'panel_opened',
      panel: 'expedition'
    }
  },
  {
    id: 'achievements',
    order: 11,
    title: '成就系统',
    icon: '🏆',
    category: 'advanced',
    description: '完成各种挑战解锁成就，记录你的星空里程碑。',
    tips: [
      '成就分为多个类别',
      '解锁的成就会永久保留'
    ],
    target: null,
    action: {
      type: 'panel',
      panel: 'achievements'
    },
    autoAdvance: false,
    validation: {
      type: 'panel_opened',
      panel: 'achievements'
    }
  },
  {
    id: 'graduation',
    order: 12,
    title: '恭喜结业！',
    icon: '🎓',
    category: 'reward',
    description: '你已经完成了新手训练营的全部课程！',
    tips: [
      '领取你的专属结业奖励',
      '继续探索这片无垠星空吧！'
    ],
    target: null,
    autoAdvance: true,
    isFinal: true
  }
]

export const ERROR_HINTS = {
  wrong_connection: {
    id: 'wrong_connection',
    title: '连线错误',
    icon: '❌',
    description: '这两颗星星之间没有连线哦',
    tips: [
      '仔细观察星座的形状',
      '只有相邻的星星才能连接',
      '可以参考图鉴中的星座图案'
    ],
    suggestion: '试试选择正确的星星，或者点击"重连"按钮重新开始'
  },
  no_target: {
    id: 'no_target',
    title: '还没选择目标',
    icon: '🎯',
    description: '请先选择一个星座再开始连线',
    tips: [
      '从任务栏选择一个星座',
      '入门级的星座更容易完成'
    ],
    suggestion: '点击"星座"按钮打开任务面板'
  },
  too_many_mistakes: {
    id: 'too_many_mistakes',
    title: '别灰心！',
    icon: '💪',
    description: '错误多了也没关系',
    tips: [
      '每次错误都是学习的机会',
      '慢慢来，不着急'
    ],
    suggestion: '点击"重连"重新开始，这次一定可以的！'
  },
  stamina_low: {
    id: 'stamina_low',
    title: '体力不足',
    icon: '⚡',
    description: '远征体力不足啦',
    tips: [
      '体力会随时间自动恢复',
      '也可以在问答中兑换体力药水'
    ],
    suggestion: '休息一下，稍后再来挑战吧'
  }
}

export const ADVANCED_TASKS = [
  {
    id: 'discover_3',
    title: '发现3个星座',
    description: '发现任意3个不同的星座',
    icon: '✨',
    reward: { stardust: 50 },
    condition: { type: 'discover_count', value: 3 }
  },
  {
    id: 'perfect_1',
    title: '首次完美观测',
    description: '零失误完成任意一个星座',
    icon: '💎',
    reward: { stardust: 30 },
    condition: { type: 'perfect_count', value: 1 }
  },
  {
    id: 'log_3',
    title: '观测记录3条',
    description: '累计完成3次观测',
    icon: '📖',
    reward: { stardust: 20 },
    condition: { type: 'log_count', value: 3 }
  },
  {
    id: 'checkin_1',
    title: '首次签到',
    description: '完成第一次每日签到',
    icon: '📅',
    reward: { stardust: 15 },
    condition: { type: 'checkin_count', value: 1 }
  }
]

export const TUTORIAL_REWARDS = {
  completion: {
    id: 'tutorial_complete',
    name: '星空新人徽章',
    description: '完成新手训练营的纪念徽章',
    icon: '🎖️',
    type: 'badge',
    stardust: 100,
    unlockTitle: '新手探索者'
  },
  perfect: {
    id: 'tutorial_perfect',
    name: '完美结业徽章',
    description: '零失误完成新手训练营',
    icon: '🏅',
    type: 'badge',
    stardust: 50
  },
  advanced: {
    id: 'tutorial_advanced',
    name: '进阶探索者',
    description: '完成全部进阶任务',
    icon: '⭐',
    type: 'title',
    stardust: 80
  }
}

export const getTutorialStepById = (id) =>
  TUTORIAL_STEPS.find(s => s.id === id)

export const getTutorialStepsByCategory = (category) =>
  TUTORIAL_STEPS.filter(s => s.category === category)

export const getErrorHint = (errorType) =>
  ERROR_HINTS[errorType] || null

export const getAdvancedTaskById = (id) =>
  ADVANCED_TASKS.find(t => t.id === id)

export const calculateTutorialProgress = (completedSteps) => {
  const total = TUTORIAL_STEPS.length
  const completed = completedSteps.length
  return {
    total,
    completed,
    percentage: Math.round((completed / total) * 100)
  }
}

export const getPhaseById = (phaseId) =>
  TUTORIAL_PHASES.find(p => p.id === phaseId)

export const getPhaseForStep = (stepId) =>
  TUTORIAL_PHASES.find(p => p.stepIds.includes(stepId))

export const getMilestoneById = (milestoneId) =>
  TUTORIAL_MILESTONES[milestoneId] || null

export const getContextualHintById = (hintId) =>
  CONTEXTUAL_HINTS[hintId] || null

export const calculatePhaseProgress = (completedSteps, phaseId) => {
  const phase = getPhaseById(phaseId)
  if (!phase) return { total: 0, completed: 0, percentage: 0 }
  const total = phase.stepIds.length
  const completed = phase.stepIds.filter(id => completedSteps.includes(id)).length
  return {
    total,
    completed,
    percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    isComplete: completed === total
  }
}

export const getCurrentPhase = (completedSteps, currentStepId) => {
  if (currentStepId) {
    return getPhaseForStep(currentStepId)
  }
  for (let i = TUTORIAL_PHASES.length - 1; i >= 0; i--) {
    const phase = TUTORIAL_PHASES[i]
    const progress = calculatePhaseProgress(completedSteps, phase.id)
    if (progress.completed > 0) {
      return phase
    }
  }
  return TUTORIAL_PHASES[0]
}

export const getAllPhaseProgress = (completedSteps) => {
  return TUTORIAL_PHASES.map(phase => ({
    ...phase,
    progress: calculatePhaseProgress(completedSteps, phase.id)
  }))
}
