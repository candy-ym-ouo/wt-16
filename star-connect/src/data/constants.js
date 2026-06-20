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
  language: 'zh-CN'
}

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
  ACHIEVEMENTS: 'starconnect_achievements'
}
