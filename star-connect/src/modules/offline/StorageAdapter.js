import { indexedDBManager } from './IndexedDBManager.js'
import { STORAGE_FALLBACK_ORDER, OBJECT_STORES } from './constants.js'

const MEMORY_STORAGE = new Map()
const LS_PREFIX = 'sc_offline_'

function lsKey(storeName, key) {
  return `${LS_PREFIX}${storeName}_${key}`
}

function lsStoreKey(storeName) {
  return `${LS_PREFIX}store_${storeName}`
}

class MemoryStore {
  constructor(storeName) {
    this.storeName = storeName
    if (!MEMORY_STORAGE.has(storeName)) {
      MEMORY_STORAGE.set(storeName, new Map())
    }
  }

  get data() {
    return MEMORY_STORAGE.get(this.storeName)
  }

  async get(key) {
    return this.data.get(key)
  }

  async put(value, key) {
    const k = key || value.id || value.key
    this.data.set(k, value)
    return k
  }

  async add(value, key) {
    const k = key || value.id || value.key
    if (this.data.has(k)) {
      throw new Error(`Key ${k} already exists`)
    }
    this.data.set(k, value)
    return k
  }

  async delete(key) {
    this.data.delete(key)
    return true
  }

  async getAll() {
    return Array.from(this.data.values())
  }

  async bulkPut(items) {
    items.forEach((item) => {
      const k = item.id || item.key
      if (k) this.data.set(k, item)
    })
    return items.length
  }

  async clear() {
    this.data.clear()
    return true
  }

  async count() {
    return this.data.size
  }
}

class LocalStorageStore {
  constructor(storeName) {
    this.storeName = storeName
  }

  _loadAll() {
    try {
      const raw = localStorage.getItem(lsStoreKey(this.storeName))
      if (!raw) return new Map()
      const arr = JSON.parse(raw)
      const map = new Map()
      arr.forEach((item) => {
        const k = item.id || item.key
        if (k) map.set(k, item)
      })
      return map
    } catch (e) {
      return new Map()
    }
  }

  _saveAll(map) {
    try {
      const arr = Array.from(map.values())
      localStorage.setItem(lsStoreKey(this.storeName), JSON.stringify(arr))
      return true
    } catch (e) {
      console.warn('LocalStorage quota exceeded:', e)
      return false
    }
  }

  async get(key) {
    const map = this._loadAll()
    return map.get(key)
  }

  async put(value, key) {
    const k = key || value.id || value.key
    const map = this._loadAll()
    map.set(k, value)
    this._saveAll(map)
    return k
  }

  async add(value, key) {
    const k = key || value.id || value.key
    const map = this._loadAll()
    if (map.has(k)) {
      throw new Error(`Key ${k} already exists`)
    }
    map.set(k, value)
    this._saveAll(map)
    return k
  }

  async delete(key) {
    const map = this._loadAll()
    map.delete(key)
    this._saveAll(map)
    return true
  }

  async getAll() {
    const map = this._loadAll()
    return Array.from(map.values())
  }

  async bulkPut(items) {
    const map = this._loadAll()
    items.forEach((item) => {
      const k = item.id || item.key
      if (k) map.set(k, item)
    })
    this._saveAll(map)
    return items.length
  }

  async clear() {
    localStorage.removeItem(lsStoreKey(this.storeName))
    return true
  }

  async count() {
    const map = this._loadAll()
    return map.size
  }
}

class IndexedDBStore {
  constructor(storeName) {
    this.storeName = storeName
  }

  async get(key) {
    return indexedDBManager.get(this.storeName, key)
  }

  async put(value, key) {
    const v = key !== undefined ? { ...value, id: key, key } : value
    return indexedDBManager.put(this.storeName, v)
  }

  async add(value, key) {
    const v = key !== undefined ? { ...value, id: key, key } : value
    return indexedDBManager.add(this.storeName, v)
  }

  async delete(key) {
    return indexedDBManager.delete(this.storeName, key)
  }

  async getAll() {
    return indexedDBManager.getAll(this.storeName)
  }

  async bulkPut(items) {
    return indexedDBManager.bulkPut(this.storeName, items)
  }

  async clear() {
    return indexedDBManager.clearStore(this.storeName)
  }

  async count() {
    return indexedDBManager.count(this.storeName)
  }
}

class StorageAdapter {
  constructor() {
    this.currentBackend = null
    this.stores = new Map()
    this._initPromise = null
  }

  async init() {
    if (this._initPromise) return this._initPromise

    this._initPromise = (async () => {
      for (const backend of STORAGE_FALLBACK_ORDER) {
        try {
          if (backend === 'indexedDB') {
            await indexedDBManager.init()
            this.currentBackend = 'indexedDB'
            break
          } else if (backend === 'localStorage') {
            if ('localStorage' in window) {
              const test = '__sc_test__'
              localStorage.setItem(test, test)
              localStorage.removeItem(test)
              this.currentBackend = 'localStorage'
              break
            }
          } else if (backend === 'memory') {
            this.currentBackend = 'memory'
            break
          }
        } catch (e) {
          console.warn(`Storage backend ${backend} unavailable:`, e)
        }
      }

      if (!this.currentBackend) {
        this.currentBackend = 'memory'
      }

      console.info(`[OfflineStorage] Using backend: ${this.currentBackend}`)
      return this.currentBackend
    })()

    return this._initPromise
  }

  _getStore(storeName) {
    if (!this.stores.has(storeName)) {
      let store
      switch (this.currentBackend) {
        case 'indexedDB':
          store = new IndexedDBStore(storeName)
          break
        case 'localStorage':
          store = new LocalStorageStore(storeName)
          break
        case 'memory':
        default:
          store = new MemoryStore(storeName)
      }
      this.stores.set(storeName, store)
    }
    return this.stores.get(storeName)
  }

  async get(storeName, key) {
    await this.init()
    return this._getStore(storeName).get(key)
  }

  async put(storeName, value, key) {
    await this.init()
    return this._getStore(storeName).put(value, key)
  }

  async add(storeName, value, key) {
    await this.init()
    return this._getStore(storeName).add(value, key)
  }

  async delete(storeName, key) {
    await this.init()
    return this._getStore(storeName).delete(key)
  }

  async getAll(storeName) {
    await this.init()
    return this._getStore(storeName).getAll()
  }

  async bulkPut(storeName, items) {
    await this.init()
    return this._getStore(storeName).bulkPut(items)
  }

  async clear(storeName) {
    await this.init()
    return this._getStore(storeName).clear()
  }

  async count(storeName) {
    await this.init()
    return this._getStore(storeName).count()
  }

  getBackend() {
    return this.currentBackend
  }

  async clearAll() {
    await this.init()
    const stores = Object.values(OBJECT_STORES)
    for (const storeName of stores) {
      try {
        await this.clear(storeName)
      } catch (e) {
        console.warn(`Failed to clear store ${storeName}:`, e)
      }
    }
  }

  async getStorageStats() {
    await this.init()
    const stats = {
      backend: this.currentBackend,
      stores: {}
    }
    const stores = Object.values(OBJECT_STORES)
    for (const storeName of stores) {
      try {
        stats.stores[storeName] = await this.count(storeName)
      } catch (e) {
        stats.stores[storeName] = 0
      }
    }
    return stats
  }
}

export const storageAdapter = new StorageAdapter()
export default StorageAdapter
