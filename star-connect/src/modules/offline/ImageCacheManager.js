import { storageAdapter } from './StorageAdapter.js'
import { OBJECT_STORES } from './constants.js'

const MAX_CACHE_SIZE = 50 * 1024 * 1024
const MAX_CACHE_ITEMS = 100
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000

class ImageCacheManager {
  constructor() {
    this.pendingRequests = new Map()
  }

  async _getCacheSize() {
    const items = await storageAdapter.getAll(OBJECT_STORES.IMAGE_CACHE)
    return items.reduce((sum, item) => {
      return sum + (item.blobSize || 0)
    }, 0)
  }

  async _evictIfNeeded(requiredSpace = 0) {
    const currentSize = await this._getCacheSize()
    const itemCount = await storageAdapter.count(OBJECT_STORES.IMAGE_CACHE)

    if (currentSize + requiredSpace <= MAX_CACHE_SIZE && itemCount < MAX_CACHE_ITEMS) {
      return
    }

    const items = await storageAdapter.getAll(OBJECT_STORES.IMAGE_CACHE)
    items.sort((a, b) => (a.lastAccessed || a.cachedAt) - (b.lastAccessed || b.cachedAt))

    const now = Date.now()
    let evictedSize = 0

    for (const item of items) {
      const isExpired = now - (item.cachedAt || 0) > CACHE_TTL
      const needMoreSpace = currentSize - evictedSize + requiredSpace > MAX_CACHE_SIZE
      const tooManyItems = itemCount - items.indexOf(item) > MAX_CACHE_ITEMS * 0.8

      if (isExpired || needMoreSpace || tooManyItems) {
        await storageAdapter.delete(OBJECT_STORES.IMAGE_CACHE, item.url)
        evictedSize += item.blobSize || 0
      }

      if (currentSize - evictedSize + requiredSpace <= MAX_CACHE_SIZE * 0.8 &&
          itemCount - items.indexOf(item) < MAX_CACHE_ITEMS * 0.8) {
        break
      }
    }
  }

  async _fetchImage(url) {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`)
    }
    const blob = await response.blob()
    return blob
  }

  async cacheImage(url, options = {}) {
    if (!url || url.startsWith('blob:') || url.startsWith('data:')) {
      return url
    }

    if (this.pendingRequests.has(url)) {
      return this.pendingRequests.get(url)
    }

    const request = this._doCacheImage(url, options)
    this.pendingRequests.set(url, request)

    try {
      const result = await request
      return result
    } finally {
      this.pendingRequests.delete(url)
    }
  }

  async _doCacheImage(url, options = {}) {
    try {
      const existing = await storageAdapter.get(OBJECT_STORES.IMAGE_CACHE, url)
      const now = Date.now()

      if (existing) {
        if (!options.forceRefresh && now - (existing.cachedAt || 0) < CACHE_TTL) {
          await storageAdapter.put(OBJECT_STORES.IMAGE_CACHE, {
            ...existing,
            lastAccessed: now,
            accessCount: (existing.accessCount || 0) + 1
          }, url)
          return existing.objectUrl
        }

        if (existing.objectUrl) {
          URL.revokeObjectURL(existing.objectUrl)
        }
      }

      const blob = await this._fetchImage(url)
      await this._evictIfNeeded(blob.size)

      const objectUrl = URL.createObjectURL(blob)
      const cachedData = {
        url,
        blob,
        blobSize: blob.size,
        blobType: blob.type,
        objectUrl,
        cachedAt: now,
        lastAccessed: now,
        accessCount: 1,
        etag: options.etag || null,
        priority: options.priority || 'normal'
      }

      await storageAdapter.put(OBJECT_STORES.IMAGE_CACHE, cachedData, url)
      return objectUrl
    } catch (e) {
      console.warn('Image cache failed, falling back to original URL:', url, e)
      return url
    }
  }

  async getCachedImage(url) {
    if (!url) return null

    const existing = await storageAdapter.get(OBJECT_STORES.IMAGE_CACHE, url)
    if (!existing) return null

    const now = Date.now()
    if (now - (existing.cachedAt || 0) > CACHE_TTL) {
      return null
    }

    await storageAdapter.put(OBJECT_STORES.IMAGE_CACHE, {
      ...existing,
      lastAccessed: now,
      accessCount: (existing.accessCount || 0) + 1
    }, url)

    return existing.objectUrl
  }

  async prefetchImages(urls, options = {}) {
    const results = []
    const concurrency = options.concurrency || 3

    for (let i = 0; i < urls.length; i += concurrency) {
      const batch = urls.slice(i, i + concurrency)
      const batchPromises = batch.map((url) =>
        this.cacheImage(url, options).catch(() => url)
      )
      const batchResults = await Promise.all(batchPromises)
      results.push(...batchResults)
    }

    return results
  }

  async clearExpired() {
    const items = await storageAdapter.getAll(OBJECT_STORES.IMAGE_CACHE)
    const now = Date.now()
    let clearedCount = 0

    for (const item of items) {
      if (now - (item.cachedAt || 0) > CACHE_TTL) {
        if (item.objectUrl) {
          URL.revokeObjectURL(item.objectUrl)
        }
        await storageAdapter.delete(OBJECT_STORES.IMAGE_CACHE, item.url)
        clearedCount++
      }
    }

    return clearedCount
  }

  async clearAll() {
    const items = await storageAdapter.getAll(OBJECT_STORES.IMAGE_CACHE)
    for (const item of items) {
      if (item.objectUrl) {
        URL.revokeObjectURL(item.objectUrl)
      }
    }
    await storageAdapter.clear(OBJECT_STORES.IMAGE_CACHE)
  }

  async getStats() {
    const items = await storageAdapter.getAll(OBJECT_STORES.IMAGE_CACHE)
    const totalSize = items.reduce((sum, item) => sum + (item.blobSize || 0), 0)
    const now = Date.now()
    const expiredCount = items.filter((i) => now - (i.cachedAt || 0) > CACHE_TTL).length

    return {
      totalItems: items.length,
      totalSize,
      totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2),
      maxSizeMB: (MAX_CACHE_SIZE / (1024 * 1024)).toFixed(0),
      expiredCount,
      usagePercent: ((totalSize / MAX_CACHE_SIZE) * 100).toFixed(1)
    }
  }

  createLazyImageLoader(defaultOptions = {}) {
    const cache = this
    return async (url, options = {}) => {
      const mergedOpts = { ...defaultOptions, ...options }
      return cache.cacheImage(url, mergedOpts)
    }
  }
}

export const imageCacheManager = new ImageCacheManager()
export default ImageCacheManager
