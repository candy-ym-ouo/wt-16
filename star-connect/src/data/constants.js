export const DEFAULT_SETTINGS = {
  volume: 0.7,
  sfxVolume: 0.8,
  graphicsQuality: 'high',
  showLabels: true,
  showNebula: true,
  starDensity: 1.0,
  animationSpeed: 1.0,
  theme: 'dark',
  hapticFeedback: true,
  autoSave: true,
  language: 'zh-CN',
  eyeCareMode: false,
  textScale: 1.0,
  hintIntensity: 'medium',
  workshop: {
    backgroundStyle: 'cosmic',
    starDensity: 1.0,
    connectionEffect: 'glow',
    panelStyle: 'glass',
    customColors: {
      primary: '#6b5bff',
      secondary: '#4ff0d9',
      accent: '#ffd700'
    }
  }
}

export const HINT_INTENSITY_OPTIONS = {
  low: { id: 'low', value: 0.3, glowOpacity: 0.15, pulseSpeed: 2.0 },
  medium: { id: 'medium', value: 0.6, glowOpacity: 0.35, pulseSpeed: 1.2 },
  high: { id: 'high', value: 1.0, glowOpacity: 0.6, pulseSpeed: 0.7 }
}

export const BACKGROUND_STYLES = {
  cosmic: {
    id: 'cosmic',
    name: '深邃宇宙',
    description: '经典的深蓝色宇宙背景，带有渐变光晕',
    colors: ['#0f1530', '#0a0e1f', '#05060f'],
    icon: '🌌',
    nebulaOpacity: 0.08,
    fogDensity: 0.015
  },
  aurora: {
    id: 'aurora',
    name: '极光之夜',
    description: '梦幻的极光渐变，充满神秘色彩',
    colors: ['#0a1f2e', '#052e2b', '#051a20'],
    icon: '🌌',
    nebulaOpacity: 0.12,
    fogDensity: 0.01
  },
  sunset: {
    id: 'sunset',
    name: '黄昏暮色',
    description: '温暖的日落渐变，带来浪漫氛围',
    colors: ['#2d1b4e', '#3d2a5e', '#1a0f2e'],
    icon: '🌅',
    nebulaOpacity: 0.1,
    fogDensity: 0.012
  },
  ocean: {
    id: 'ocean',
    name: '深海星空',
    description: '沉静的深海蓝调，宁静而深邃',
    colors: ['#0a1628', '#051020', '#020a14'],
    icon: '🌊',
    nebulaOpacity: 0.06,
    fogDensity: 0.02
  },
  forest: {
    id: 'forest',
    name: '森林秘境',
    description: '神秘的森林绿光，自然而清新',
    colors: ['#0d1f1a', '#0a1a15', '#050f0d'],
    icon: '🌲',
    nebulaOpacity: 0.07,
    fogDensity: 0.018
  },
  rose: {
    id: 'rose',
    name: '玫瑰星云',
    description: '浪漫的玫瑰色调，温柔而梦幻',
    colors: ['#2d1a2e', '#1f1220', '#100810'],
    icon: '🌹',
    nebulaOpacity: 0.1,
    fogDensity: 0.01
  }
}

export const STAR_DENSITY_OPTIONS = {
  sparse: { id: 'sparse', name: '稀疏', value: 0.5, description: '约1250颗星星' },
  normal: { id: 'normal', name: '适中', value: 1.0, description: '约2500颗星星' },
  dense: { id: 'dense', name: '密集', value: 1.5, description: '约3750颗星星' },
  galaxy: { id: 'galaxy', name: '银河', value: 2.0, description: '约5000颗星星' }
}

export const CONNECTION_EFFECTS = {
  glow: {
    id: 'glow',
    name: '星光连线',
    description: '经典的金色发光连线',
    color: '#ffd700',
    opacity: 0.85,
    lineWidth: 2,
    animate: true
  },
  neon: {
    id: 'neon',
    name: '霓虹流光',
    description: '彩虹渐变的霓虹效果',
    gradient: ['#ff6b9d', '#6b5bff', '#4ff0d9'],
    opacity: 0.9,
    lineWidth: 2.5,
    animate: true
  },
  firefly: {
    id: 'firefly',
    name: '萤火闪烁',
    description: '像萤火虫一样的闪烁效果',
    color: '#a8ff60',
    opacity: 0.7,
    lineWidth: 1.5,
    animate: true,
    dotted: true
  },
  crystal: {
    id: 'crystal',
    name: '水晶透明',
    description: '如水晶般清澈的连线',
    color: '#8ec5ff',
    opacity: 0.6,
    lineWidth: 1,
    animate: false
  },
  laser: {
    id: 'laser',
    name: '激光束',
    description: '科技感十足的激光效果',
    color: '#ff4444',
    opacity: 0.95,
    lineWidth: 3,
    animate: true,
    glow: true
  },
  starlight: {
    id: 'starlight',
    name: '星光粒子',
    description: '流动的星尘粒子连线',
    color: '#ffffff',
    opacity: 0.8,
    lineWidth: 2,
    animate: true,
    particles: true
  }
}

export const PANEL_STYLES = {
  glass: {
    id: 'glass',
    name: '玻璃拟态',
    description: '半透明毛玻璃效果',
    vars: {
      '--panel-bg': 'rgba(255, 255, 255, 0.1)',
      '--panel-border': 'rgba(255, 255, 255, 0.2)',
      '--panel-blur': '24px',
      '--panel-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      '--panel-inner-bg': 'rgba(15, 21, 48, 0.3)',
      '--panel-inner-border': 'rgba(255, 255, 255, 0.05)',
      '--panel-accent': 'rgba(107, 91, 255, 0.4)'
    }
  },
  dark: {
    id: 'dark',
    name: '深空暗调',
    description: '深邃的太空暗色风格',
    vars: {
      '--panel-bg': 'rgba(10, 14, 31, 0.9)',
      '--panel-border': 'rgba(255, 255, 255, 0.1)',
      '--panel-blur': '12px',
      '--panel-shadow': '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
      '--panel-inner-bg': 'rgba(26, 34, 72, 0.3)',
      '--panel-inner-border': 'rgba(255, 255, 255, 0.05)',
      '--panel-accent': 'rgba(107, 91, 255, 0.3)'
    }
  },
  cosmic: {
    id: 'cosmic',
    name: '星云紫调',
    description: '神秘的紫色星云风格',
    vars: {
      '--panel-bg': 'rgba(107, 91, 255, 0.1)',
      '--panel-border': 'rgba(107, 91, 255, 0.3)',
      '--panel-blur': '24px',
      '--panel-shadow': '0 25px 50px -12px rgba(107, 91, 255, 0.2)',
      '--panel-inner-bg': 'rgba(15, 21, 48, 0.4)',
      '--panel-inner-border': 'rgba(107, 91, 255, 0.15)',
      '--panel-accent': 'rgba(107, 91, 255, 0.5)'
    }
  },
  aurora: {
    id: 'aurora',
    name: '极光青蓝',
    description: '清新的极光青色调',
    vars: {
      '--panel-bg': 'rgba(79, 240, 217, 0.1)',
      '--panel-border': 'rgba(79, 240, 217, 0.3)',
      '--panel-blur': '24px',
      '--panel-shadow': '0 25px 50px -12px rgba(79, 240, 217, 0.15)',
      '--panel-inner-bg': 'rgba(15, 21, 48, 0.4)',
      '--panel-inner-border': 'rgba(79, 240, 217, 0.15)',
      '--panel-accent': 'rgba(79, 240, 217, 0.4)'
    }
  },
  gold: {
    id: 'gold',
    name: '黄金奢华',
    description: '尊贵的金色边框风格',
    vars: {
      '--panel-bg': 'rgba(255, 215, 0, 0.05)',
      '--panel-border': 'rgba(255, 215, 0, 0.3)',
      '--panel-blur': '16px',
      '--panel-shadow': '0 25px 50px -12px rgba(255, 215, 0, 0.15)',
      '--panel-inner-bg': 'rgba(15, 21, 48, 0.3)',
      '--panel-inner-border': 'rgba(255, 215, 0, 0.1)',
      '--panel-accent': 'rgba(255, 215, 0, 0.4)'
    }
  }
}

export const PRESET_THEMES = [
  {
    id: 'default',
    name: '默认星空',
    backgroundStyle: 'cosmic',
    starDensity: 1.0,
    connectionEffect: 'glow',
    panelStyle: 'glass',
    icon: '⭐'
  },
  {
    id: 'romantic',
    name: '浪漫之夜',
    backgroundStyle: 'sunset',
    starDensity: 1.5,
    connectionEffect: 'starlight',
    panelStyle: 'glass',
    icon: '💕'
  },
  {
    id: 'cyberpunk',
    name: '赛博朋克',
    backgroundStyle: 'cosmic',
    starDensity: 2.0,
    connectionEffect: 'neon',
    panelStyle: 'dark',
    icon: '🌃'
  },
  {
    id: 'nature',
    name: '自然秘境',
    backgroundStyle: 'forest',
    starDensity: 1.0,
    connectionEffect: 'firefly',
    panelStyle: 'aurora',
    icon: '🍃'
  },
  {
    id: 'ocean',
    name: '深海之梦',
    backgroundStyle: 'ocean',
    starDensity: 1.5,
    connectionEffect: 'crystal',
    panelStyle: 'aurora',
    icon: '🐚'
  }
]

export const GRAPHICS_OPTIONS = {
  low: {
    starCount: 800,
    particleSize: 0.02,
    antialias: false,
    bloom: false
  },
  medium: {
    starCount: 1500,
    particleSize: 0.03,
    antialias: true,
    bloom: false
  },
  high: {
    starCount: 2500,
    particleSize: 0.04,
    antialias: true,
    bloom: true
  }
}

export const DIFFICULTY_CONFIG = {
  1: { stars: 7, tolerance: 0.25, label: '入门' },
  2: { stars: 8, tolerance: 0.18, label: '进阶' },
  3: { stars: 5, tolerance: 0.12, label: '挑战' }
}

export const STORAGE_KEYS = {
  SETTINGS: 'starconnect_settings',
  PROGRESS: 'starconnect_progress',
  LOGS: 'starconnect_logs',
  ACHIEVEMENTS: 'starconnect_achievements',
  SAVE_SLOTS: 'starconnect_save_slots',
  CURRENT_SAVE_ID: 'starconnect_current_save_id',
  SAVE_DATA_PREFIX: 'starconnect_save_'
}

export const SAVE_SLOT_CONFIG = {
  MAX_SLOTS: 10,
  DEFAULT_SLOT_NAME: '默认存档',
  AUTO_SAVE_INTERVAL: 30000,
  PREVIEW_DATA_KEYS: [
    'discoveredConstellations',
    'unlockedAchievements',
    'observationLogs',
    'observationCalendar',
    'totalObservations'
  ]
}

export const DEFAULT_SAVE_SLOT = {
  id: 'default',
  name: SAVE_SLOT_CONFIG.DEFAULT_SLOT_NAME,
  createdAt: Date.now(),
  lastPlayedAt: Date.now(),
  preview: null,
  settingsShared: true
}
