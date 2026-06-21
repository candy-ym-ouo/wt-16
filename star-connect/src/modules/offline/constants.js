export const OFFLINE_DB_NAME = 'starconnect_offline'
export const OFFLINE_DB_VERSION = 1
export const OFFLINE_CACHE_VERSION = 'v1.0.0'

export const OBJECT_STORES = {
  CONSTELLATIONS: 'constellations',
  ACHIEVEMENTS: 'achievements',
  GALLERY: 'gallery',
  STORY_CHAPTERS: 'storyChapters',
  OBSERVATION_LOGS: 'observationLogs',
  PROGRESS: 'progress',
  SETTINGS: 'settings',
  I18N: 'i18n',
  METADATA: 'metadata',
  IMAGE_CACHE: 'imageCache',
  SYNC_QUEUE: 'syncQueue'
}

export const STORE_KEYS = {
  LAST_SYNC: 'lastSyncTimestamp',
  CACHE_VERSION: 'cacheVersion',
  DATA_PACKAGE_VERSION: 'dataPackageVersion',
  OFFLINE_MODE: 'offlineMode',
  NETWORK_STATUS: 'networkStatus'
}

export const SYNC_STRATEGY = {
  IMMEDIATE: 'immediate',
  DEFERRED: 'deferred',
  MANUAL: 'manual'
}

export const CACHE_PRIORITY = {
  CRITICAL: 0,
  HIGH: 1,
  MEDIUM: 2,
  LOW: 3
}

export const DATA_CATEGORIES = {
  CONSTELLATION_DATA: {
    id: 'constellationData',
    name: '星座核心数据',
    description: '星座信息、星星坐标、连线关系',
    priority: CACHE_PRIORITY.CRITICAL,
    size: '~50KB',
    store: OBJECT_STORES.CONSTELLATIONS
  },
  ACHIEVEMENT_DATA: {
    id: 'achievementData',
    name: '成就数据',
    description: '成就条件、奖励配置',
    priority: CACHE_PRIORITY.CRITICAL,
    size: '~15KB',
    store: OBJECT_STORES.ACHIEVEMENTS
  },
  GALLERY_DATA: {
    id: 'galleryData',
    name: '图鉴数据',
    description: '星空图鉴元数据',
    priority: CACHE_PRIORITY.HIGH,
    size: '~20KB',
    store: OBJECT_STORES.GALLERY
  },
  STORY_DATA: {
    id: 'storyData',
    name: '故事章节',
    description: '四季故事文本、剧情内容',
    priority: CACHE_PRIORITY.HIGH,
    size: '~80KB',
    store: OBJECT_STORES.STORY_CHAPTERS
  },
  I18N_DATA: {
    id: 'i18nData',
    name: '国际化文本',
    description: '多语言翻译文本',
    priority: CACHE_PRIORITY.HIGH,
    size: '~60KB',
    store: OBJECT_STORES.I18N
  },
  USER_PROGRESS: {
    id: 'userProgress',
    name: '用户进度',
    description: '发现记录、收藏、成就解锁状态',
    priority: CACHE_PRIORITY.CRITICAL,
    size: '动态',
    store: OBJECT_STORES.PROGRESS
  },
  OBSERVATION_LOGS: {
    id: 'observationLogs',
    name: '观测日志',
    description: '历史观测记录、活动日志',
    priority: CACHE_PRIORITY.HIGH,
    size: '动态',
    store: OBJECT_STORES.OBSERVATION_LOGS
  },
  USER_SETTINGS: {
    id: 'userSettings',
    name: '用户设置',
    description: '个性化配置、偏好设置',
    priority: CACHE_PRIORITY.MEDIUM,
    size: '~5KB',
    store: OBJECT_STORES.SETTINGS
  },
  IMAGE_RESOURCES: {
    id: 'imageResources',
    name: '图片资源',
    description: '图鉴图片缩略图缓存',
    priority: CACHE_PRIORITY.LOW,
    size: '动态',
    store: OBJECT_STORES.IMAGE_CACHE
  }
}

export const OFFLINE_PACKAGE_CONFIG = {
  maxPackageSize: 10 * 1024 * 1024,
  chunkSize: 512 * 1024,
  compression: true,
  checksumAlgorithm: 'SHA-256'
}

export const STORAGE_FALLBACK_ORDER = ['indexedDB', 'localStorage', 'memory']
