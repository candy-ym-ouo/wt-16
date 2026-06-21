import { storageAdapter } from './StorageAdapter.js'
import { indexedDBManager } from './IndexedDBManager.js'
import { imageCacheManager } from './ImageCacheManager.js'
import { networkMonitor } from './NetworkMonitor.js'
import { dataPackager } from './DataPackager.js'
import {
  OBJECT_STORES,
  STORE_KEYS,
  SYNC_STRATEGY,
  DATA_CATEGORIES,
  CACHE_PRIORITY
} from './constants.js'

class OfflineManager {
  constructor() {
    this.initialized = false
    this._initPromise = null
    this._statusListeners = new Set()
    this.currentSyncStrategy = SYNC_STRATEGY.DEFERRED
    this._networkUnsubscribe = null
  }

  async init(options = {}) {
    if (this.initialized) return { success: true }
    if (this._initPromise) return this._initPromise

    this._initPromise = (async () => {
      try {
        this.currentSyncStrategy = options.syncStrategy || SYNC_STRATEGY.DEFERRED

        await storageAdapter.init()
        this._setupNetworkListener()

        const packageStatus = await dataPackager.checkPackageInstalled()

        if (!packageStatus.installed || !packageStatus.isCurrentVersion) {
          this._notifyStatus({
            type: 'package_status',
            installed: false,
            message: packageStatus.installed ? '需要更新数据包' : '需要安装离线数据包'
          })

          if (options.autoInstall !== false) {
            const installPriority = options.installPriority || CACHE_PRIORITY.HIGH
            if (networkMonitor.isOnline() && !networkMonitor.isWeakConnection()) {
              await dataPackager.installFullPackage()
            } else {
              await dataPackager.installCriticalData()
            }
          }
        }

        this.initialized = true
        this._notifyStatus({ type: 'init_complete', initialized: true })

        return { success: true }
      } catch (e) {
        console.error('OfflineManager init failed:', e)
        return { success: false, error: e.message }
      }
    })()

    return this._initPromise
  }

  _setupNetworkListener() {
    this._networkUnsubscribe = networkMonitor.subscribe((status) => {
      this._notifyStatus({
        type: 'network_change',
        network: {
          online: status.online,
          quality: networkMonitor.getQuality(),
          weak: networkMonitor.isWeakConnection()
        }
      })

      if (status.online && this.currentSyncStrategy === SYNC_STRATEGY.IMMEDIATE) {
        this.processSyncQueue().catch(console.warn)
      }
    })
  }

  onStatusChange(listener) {
    this._statusListeners.add(listener)
    return () => this._statusListeners.delete(listener)
  }

  _notifyStatus(status) {
    this._statusListeners.forEach((fn) => {
      try {
        fn(status)
      } catch (e) {}
    })
  }

  async installOfflinePackage(force = false) {
    const status = await dataPackager.checkPackageInstalled()
    
    if (status.installed && status.isCurrentVersion && !force) {
      return { alreadyInstalled: true }
    }

    return dataPackager.installFullPackage()
  }

  async getConstellations(options = {}) {
    await this.init()
    let items = await storageAdapter.getAll(OBJECT_STORES.CONSTELLATIONS)

    if (items.length === 0) {
      await dataPackager.installCriticalData()
      items = await storageAdapter.getAll(OBJECT_STORES.CONSTELLATIONS)
    }

    const { season, difficulty, discovered, ids } = options
    if (season) items = items.filter(i => i.season === season)
    if (difficulty) items = items.filter(i => i.difficulty === difficulty)
    if (ids) items = items.filter(i => ids.includes(i.id))

    return items
  }

  async getConstellationById(id) {
    await this.init()
    let item = await storageAdapter.get(OBJECT_STORES.CONSTELLATIONS, id)
    if (!item) {
      await dataPackager.installCriticalData()
      item = await storageAdapter.get(OBJECT_STORES.CONSTELLATIONS, id)
    }
    return item
  }

  async getAchievements(options = {}) {
    await this.init()
    let items = await storageAdapter.getAll(OBJECT_STORES.ACHIEVEMENTS)

    if (items.length === 0) {
      await dataPackager.installCriticalData()
      items = await storageAdapter.getAll(OBJECT_STORES.ACHIEVEMENTS)
    }

    const { category, ids } = options
    if (category) items = items.filter(i => i.category === category)
    if (ids) items = items.filter(i => ids.includes(i.id))

    return items
  }

  async getAchievementById(id) {
    await this.init()
    let item = await storageAdapter.get(OBJECT_STORES.ACHIEVEMENTS, id)
    if (!item) {
      await dataPackager.installCriticalData()
      item = await storageAdapter.get(OBJECT_STORES.ACHIEVEMENTS, id)
    }
    return item
  }

  async getGalleryPhotos(options = {}) {
    await this.init()
    let items = await storageAdapter.getAll(OBJECT_STORES.GALLERY)

    if (items.length === 0) {
      const pkg = await dataPackager.buildCoreDataPackage()
      await storageAdapter.bulkPut(OBJECT_STORES.GALLERY, pkg.categories.gallery)
      items = pkg.categories.gallery
    }

    const { season, category, constellationId, featured, search, sortBy } = options
    if (season && season !== 'all') items = items.filter(i => i.season === season)
    if (category && category !== 'all') items = items.filter(i => i.category === category)
    if (constellationId) items = items.filter(i => i.constellationId === constellationId)
    if (featured) items = items.filter(i => i.featured)
    if (search) {
      const q = search.toLowerCase()
      items = items.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        (i.tags && i.tags.some(t => t.toLowerCase().includes(q)))
      )
    }

    if (sortBy === 'newest') items.sort((a, b) => b.shootingDate - a.shootingDate)
    else if (sortBy === 'popular') items.sort((a, b) => b.likes - a.likes)
    else if (sortBy === 'featured') {
      items.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return b.shootingDate - a.shootingDate
      })
    }

    if (!networkMonitor.isOnline() || networkMonitor.isWeakConnection()) {
      items = await Promise.all(
        items.map(async (item) => {
          if (item.thumbnailUrl) {
            try {
              const cachedUrl = await imageCacheManager.getCachedImage(item.thumbnailUrl)
              if (cachedUrl) {
                return { ...item, thumbnailUrl: cachedUrl, _fromCache: true }
              }
            } catch (e) {}
          }
          return item
        })
      )
    }

    return items
  }

  async getStoryChapters(options = {}) {
    await this.init()
    let items = await storageAdapter.getAll(OBJECT_STORES.STORY_CHAPTERS)

    if (items.length === 0) {
      const pkg = await dataPackager.buildCoreDataPackage()
      await storageAdapter.bulkPut(OBJECT_STORES.STORY_CHAPTERS, pkg.categories.storyChapters)
      items = pkg.categories.storyChapters
    }

    const { seasonId, type } = options
    if (seasonId) items = items.filter(i => i.seasonId === seasonId)
    if (type) items = items.filter(i => i.type === type)

    return items
  }

  async getStoryChapter(id) {
    await this.init()
    let item = await storageAdapter.get(OBJECT_STORES.STORY_CHAPTERS, id)
    if (!item) {
      const pkg = await dataPackager.buildCoreDataPackage()
      await storageAdapter.bulkPut(OBJECT_STORES.STORY_CHAPTERS, pkg.categories.storyChapters)
      item = await storageAdapter.get(OBJECT_STORES.STORY_CHAPTERS, id)
    }
    return item
  }

  async getI18nText(locale, key) {
    await this.init()
    const id = `${locale}_${key}`
    const item = await storageAdapter.get(OBJECT_STORES.I18N, id)
    return item?.value
  }

  async getI18nBundle(locale) {
    await this.init()
    let items = await storageAdapter.getAll(OBJECT_STORES.I18N)
    if (items.length === 0) {
      const pkg = await dataPackager.buildCoreDataPackage()
      await storageAdapter.bulkPut(OBJECT_STORES.I18N, pkg.categories.i18n)
      items = pkg.categories.i18n
    }
    items = items.filter(i => i.locale === locale)
    const result = {}
    items.forEach((i) => {
      const keys = i.key.split('.')
      let current = result
      keys.forEach((k, idx) => {
        if (idx === keys.length - 1) {
          current[k] = i.value
        } else {
          if (!current[k]) current[k] = {}
          current = current[k]
        }
      })
    })
    return result
  }

  async saveObservationLog(entry) {
    await this.init()
    const result = await storageAdapter.add(OBJECT_STORES.OBSERVATION_LOGS, {
      ...entry,
      id: entry.id || `log_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      _synced: false
    })

    if (this.currentSyncStrategy === SYNC_STRATEGY.IMMEDIATE && networkMonitor.isOnline()) {
      await this._syncEntry('observation_log', entry)
    } else {
      await indexedDBManager.addToSyncQueue('observation_log', entry)
    }

    return result
  }

  async getObservationLogs(options = {}) {
    await this.init()
    let items = await storageAdapter.getAll(OBJECT_STORES.OBSERVATION_LOGS)

    const { type, limit, constellationId } = options
    if (type) items = items.filter(i => i.type === type)
    if (constellationId) items = items.filter(i => i.constellationId === constellationId)

    items.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))

    if (limit) items = items.slice(0, limit)

    return items
  }

  async saveProgress(key, value) {
    await this.init()
    return storageAdapter.put(OBJECT_STORES.PROGRESS, { key, value, updatedAt: Date.now() }, key)
  }

  async getProgress(key) {
    await this.init()
    const item = await storageAdapter.get(OBJECT_STORES.PROGRESS, key)
    return item?.value
  }

  async getAllProgress() {
    await this.init()
    const items = await storageAdapter.getAll(OBJECT_STORES.PROGRESS)
    const result = {}
    items.forEach((i) => {
      result[i.key] = i.value
    })
    return result
  }

  async saveSetting(key, value) {
    await this.init()
    return storageAdapter.put(OBJECT_STORES.SETTINGS, { key, value, updatedAt: Date.now() }, key)
  }

  async getSetting(key) {
    await this.init()
    const item = await storageAdapter.get(OBJECT_STORES.SETTINGS, key)
    return item?.value
  }

  async cacheImage(url, options = {}) {
    return imageCacheManager.cacheImage(url, options)
  }

  async getCachedImage(url) {
    return imageCacheManager.getCachedImage(url)
  }

  async _syncEntry(operation, data) {
    try {
      console.log(`[Offline] Syncing ${operation}:`, data)
      return true
    } catch (e) {
      await indexedDBManager.addToSyncQueue(operation, data)
      return false
    }
  }

  async processSyncQueue() {
    if (!networkMonitor.isOnline()) return { processed: 0, remaining: -1 }

    const pending = await indexedDBManager.getPendingSyncItems()
    let processed = 0

    for (const item of pending) {
      try {
        const success = await this._syncEntry(item.operation, item.data)
        if (success) {
          await storageAdapter.put(OBJECT_STORES.SYNC_QUEUE, {
            ...item,
            status: 'synced',
            syncedAt: Date.now()
          }, item.id)
          processed++
        }
      } catch (e) {
        await storageAdapter.put(OBJECT_STORES.SYNC_QUEUE, {
          ...item,
          status: 'error',
          retries: (item.retries || 0) + 1,
          lastError: e.message,
          lastRetryAt: Date.now()
        }, item.id)
      }
    }

    const remaining = await indexedDBManager.getPendingSyncItems()
    return { processed, remaining: remaining.length }
  }

  async exportAll() {
    await this.init()
    return dataPackager.exportUserData()
  }

  async importAll(exportData) {
    await this.init()
    return dataPackager.importUserData(exportData)
  }

  async getStatus() {
    const packageStatus = await dataPackager.getPackageInfo()
    const networkStatus = networkMonitor.getStatus()
    const imageStats = await imageCacheManager.getStats()
    const lastSync = await indexedDBManager.getLastSyncTime()
    const pendingSync = await indexedDBManager.getPendingSyncItems()

    return {
      initialized: this.initialized,
      backend: storageAdapter.getBackend(),
      network: {
        online: networkStatus.online,
        quality: networkMonitor.getQuality(),
        weak: networkMonitor.isWeakConnection()
      },
      package: {
        installed: packageStatus.installed,
        version: packageStatus.version,
        isCurrent: packageStatus.isCurrentVersion,
        constellationCount: packageStatus.constellationCount
      },
      imageCache: imageStats,
      sync: {
        lastSync,
        pendingCount: pendingSync.length,
        strategy: this.currentSyncStrategy
      },
      storeCounts: packageStatus.storeCounts
    }
  }

  async clearCache(options = {}) {
    const { imagesOnly = false, allData = false } = options
    
    if (allData) {
      await storageAdapter.clearAll()
      return { cleared: 'all' }
    }

    if (imagesOnly) {
      await imageCacheManager.clearAll()
      return { cleared: 'images' }
    }

    await storageAdapter.clear(OBJECT_STORES.IMAGE_CACHE)
    await storageAdapter.clear(OBJECT_STORES.OBSERVATION_LOGS)
    await storageAdapter.clear(OBJECT_STORES.SYNC_QUEUE)
    return { cleared: 'cache' }
  }

  destroy() {
    if (this._networkUnsubscribe) {
      this._networkUnsubscribe()
    }
    this._statusListeners.clear()
    indexedDBManager.close()
  }
}

export const offlineManager = new OfflineManager()
export default OfflineManager
