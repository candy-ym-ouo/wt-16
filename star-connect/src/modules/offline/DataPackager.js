import { storageAdapter } from './StorageAdapter.js'
import { indexedDBManager } from './IndexedDBManager.js'
import { imageCacheManager } from './ImageCacheManager.js'
import {
  OBJECT_STORES,
  OFFLINE_CACHE_VERSION,
  DATA_CATEGORIES,
  CACHE_PRIORITY
} from './constants.js'

import { CONSTELLATIONS } from '../../data/constellations.js'
import { ACHIEVEMENTS } from '../../data/achievements.js'
import { INITIAL_GALLERY_PHOTOS } from '../../data/starGallery.js'
import { STORY_ARCS, FINAL_CHAPTER } from '../../data/storyChapters.js'
import zhCN from '../../i18n/locales/zh-CN.js'
import enUS from '../../i18n/locales/en-US.js'

class DataPackager {
  constructor() {
    this._progressListeners = new Set()
  }

  onProgress(listener) {
    this._progressListeners.add(listener)
    return () => this._progressListeners.delete(listener)
  }

  _notifyProgress(step, progress, message) {
    this._progressListeners.forEach((fn) => {
      try {
        fn({ step, progress, message })
      } catch (e) {}
    })
  }

  _flattenStoryChapters() {
    const chapters = []
    
    Object.values(STORY_ARCS).forEach((arc) => {
      if (arc.prologue) {
        chapters.push({
          id: `${arc.id}_prologue`,
          seasonId: arc.id,
          type: 'prologue',
          ...arc.prologue
        })
      }
      if (arc.epilogue) {
        chapters.push({
          id: `${arc.id}_epilogue`,
          seasonId: arc.id,
          type: 'epilogue',
          ...arc.epilogue
        })
      }
      Object.values(arc.chapters || {}).forEach((chapter) => {
        chapters.push({
          id: `${arc.id}_${chapter.id}`,
          seasonId: arc.id,
          type: 'chapter',
          ...chapter
        })
      })
    })

    if (FINAL_CHAPTER) {
      chapters.push({
        id: 'final',
        seasonId: 'all',
        type: 'final',
        ...FINAL_CHAPTER
      })
    }

    return chapters
  }

  _flattenI18n() {
    const items = []
    
    const processLocale = (locale, data, prefix = '') => {
      Object.entries(data).forEach(([key, value]) => {
        const fullKey = prefix ? `${prefix}.${key}` : key
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          processLocale(locale, value, fullKey)
        } else {
          items.push({
            id: `${locale}_${fullKey}`,
            locale,
            key: fullKey,
            value
          })
        }
      })
    }

    processLocale('zh-CN', zhCN)
    processLocale('en-US', enUS)

    return items
  }

  async buildCoreDataPackage() {
    const packageData = {
      version: OFFLINE_CACHE_VERSION,
      builtAt: Date.now(),
      categories: {}
    }

    this._notifyProgress('constellations', 10, '打包星座数据...')
    packageData.categories.constellations = CONSTELLATIONS.map(c => ({
      id: c.id,
      ...c,
      stars: c.stars || [],
      connections: c.connections || []
    }))

    this._notifyProgress('achievements', 25, '打包成就数据...')
    packageData.categories.achievements = ACHIEVEMENTS

    this._notifyProgress('gallery', 40, '打包图鉴数据...')
    packageData.categories.gallery = INITIAL_GALLERY_PHOTOS

    this._notifyProgress('story', 60, '打包故事章节...')
    packageData.categories.storyChapters = this._flattenStoryChapters()

    this._notifyProgress('i18n', 80, '打包国际化文本...')
    packageData.categories.i18n = this._flattenI18n()

    this._notifyProgress('complete', 100, '数据包构建完成')

    return packageData
  }

  async installDataPackage(packageData, options = {}) {
    const { skipImages = false, priorityFilter = null } = options

    await storageAdapter.init()

    let installedCount = 0
    const totalStores = Object.keys(packageData.categories).length
    let currentStore = 0

    for (const [category, items] of Object.entries(packageData.categories)) {
      currentStore++
      const progress = Math.round((currentStore / totalStores) * 100)
      this._notifyProgress(`install_${category}`, progress, `安装 ${category} 数据...`)

      let storeName
      switch (category) {
        case 'constellations':
          storeName = OBJECT_STORES.CONSTELLATIONS
          break
        case 'achievements':
          storeName = OBJECT_STORES.ACHIEVEMENTS
          break
        case 'gallery':
          storeName = OBJECT_STORES.GALLERY
          break
        case 'storyChapters':
          storeName = OBJECT_STORES.STORY_CHAPTERS
          break
        case 'i18n':
          storeName = OBJECT_STORES.I18N
          break
        default:
          continue
      }

      if (priorityFilter) {
        const catInfo = Object.values(DATA_CATEGORIES).find(c => c.store === storeName)
        if (catInfo && catInfo.priority > priorityFilter) {
          continue
        }
      }

      try {
        await storageAdapter.bulkPut(storeName, items)
        installedCount += items.length
      } catch (e) {
        console.warn(`Failed to install ${category}:`, e)
      }
    }

    await indexedDBManager.setMetadata('cacheVersion', packageData.version)
    await indexedDBManager.setMetadata('packageBuiltAt', packageData.builtAt)
    await indexedDBManager.setLastSyncTime()

    if (!skipImages && packageData.categories.gallery) {
      this._notifyProgress('prefetch_images', 95, '预加载图片资源...')
      const imageUrls = packageData.categories.gallery
        .filter(p => p.thumbnailUrl && p.thumbnailUrl.startsWith('http'))
        .map(p => p.thumbnailUrl)
        .slice(0, 20)
      
      try {
        await imageCacheManager.prefetchImages(imageUrls, { priority: 'high' })
      } catch (e) {
        console.warn('Image prefetch failed:', e)
      }
    }

    this._notifyProgress('install_complete', 100, `安装完成，共 ${installedCount} 条记录`)

    return { installedCount, version: packageData.version }
  }

  async installCriticalData() {
    const pkg = await this.buildCoreDataPackage()
    return this.installDataPackage(pkg, {
      skipImages: true,
      priorityFilter: CACHE_PRIORITY.HIGH
    })
  }

  async installFullPackage() {
    const pkg = await this.buildCoreDataPackage()
    return this.installDataPackage(pkg, { skipImages: false })
  }

  async checkPackageInstalled() {
    try {
      await storageAdapter.init()
      const constellationCount = await storageAdapter.count(OBJECT_STORES.CONSTELLATIONS)
      const version = await indexedDBManager.getMetadata('cacheVersion')
      return {
        installed: constellationCount > 0,
        version: version || null,
        constellationCount,
        isCurrentVersion: version === OFFLINE_CACHE_VERSION
      }
    } catch (e) {
      return { installed: false, version: null, constellationCount: 0, isCurrentVersion: false }
    }
  }

  async exportUserData() {
    const [progress, logs, settings] = await Promise.all([
      storageAdapter.getAll(OBJECT_STORES.PROGRESS),
      storageAdapter.getAll(OBJECT_STORES.OBSERVATION_LOGS),
      storageAdapter.getAll(OBJECT_STORES.SETTINGS)
    ])

    return {
      exportedAt: Date.now(),
      version: OFFLINE_CACHE_VERSION,
      data: {
        progress,
        logs,
        settings
      }
    }
  }

  async importUserData(exportData, options = {}) {
    const { mergeStrategy = 'merge' } = options
    const { data } = exportData

    if (mergeStrategy === 'replace') {
      await Promise.all([
        storageAdapter.clear(OBJECT_STORES.PROGRESS),
        storageAdapter.clear(OBJECT_STORES.OBSERVATION_LOGS),
        storageAdapter.clear(OBJECT_STORES.SETTINGS)
      ])
    }

    let importedCount = 0

    if (data.progress) {
      await storageAdapter.bulkPut(OBJECT_STORES.PROGRESS, data.progress)
      importedCount += data.progress.length
    }
    if (data.logs) {
      await storageAdapter.bulkPut(OBJECT_STORES.OBSERVATION_LOGS, data.logs)
      importedCount += data.logs.length
    }
    if (data.settings) {
      await storageAdapter.bulkPut(OBJECT_STORES.SETTINGS, data.settings)
      importedCount += data.settings.length
    }

    return { importedCount }
  }

  async getPackageInfo() {
    const status = await this.checkPackageInstalled()
    const storageStats = await storageAdapter.getStorageStats()

    return {
      ...status,
      storageBackend: storageStats.backend,
      storeCounts: storageStats.stores,
      categories: Object.values(DATA_CATEGORIES)
    }
  }
}

export const dataPackager = new DataPackager()
export default DataPackager
