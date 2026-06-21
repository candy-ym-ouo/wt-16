import {
  OFFLINE_DB_NAME,
  OFFLINE_DB_VERSION,
  OBJECT_STORES,
  STORE_KEYS
} from './constants.js'

class IndexedDBManager {
  constructor() {
    this.db = null
    this.initPromise = null
    this.listeners = new Map()
  }

  async init() {
    if (this.db) return this.db
    if (this.initPromise) return this.initPromise

    this.initPromise = new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) {
        reject(new Error('IndexedDB not supported'))
        return
      }

      const request = indexedDB.open(OFFLINE_DB_NAME, OFFLINE_DB_VERSION)

      request.onerror = () => reject(request.error)
      request.onsuccess = () => {
        this.db = request.result
        this._setupDatabaseListeners()
        resolve(this.db)
      }
      request.onupgradeneeded = (event) => {
        const db = event.target.result
        this._createObjectStores(db)
      }
    })

    return this.initPromise
  }

  _createObjectStores(db) {
    if (!db.objectStoreNames.contains(OBJECT_STORES.CONSTELLATIONS)) {
      const store = db.createObjectStore(OBJECT_STORES.CONSTELLATIONS, { keyPath: 'id' })
      store.createIndex('season', 'season', { unique: false })
      store.createIndex('difficulty', 'difficulty', { unique: false })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.ACHIEVEMENTS)) {
      const store = db.createObjectStore(OBJECT_STORES.ACHIEVEMENTS, { keyPath: 'id' })
      store.createIndex('category', 'category', { unique: false })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.GALLERY)) {
      const store = db.createObjectStore(OBJECT_STORES.GALLERY, { keyPath: 'id' })
      store.createIndex('constellationId', 'constellationId', { unique: false })
      store.createIndex('season', 'season', { unique: false })
      store.createIndex('category', 'category', { unique: false })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.STORY_CHAPTERS)) {
      const store = db.createObjectStore(OBJECT_STORES.STORY_CHAPTERS, { keyPath: 'id' })
      store.createIndex('seasonId', 'seasonId', { unique: false })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.OBSERVATION_LOGS)) {
      const store = db.createObjectStore(OBJECT_STORES.OBSERVATION_LOGS, { keyPath: 'id', autoIncrement: true })
      store.createIndex('type', 'type', { unique: false })
      store.createIndex('timestamp', 'timestamp', { unique: false })
      store.createIndex('constellationId', 'constellationId', { unique: false })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.PROGRESS)) {
      db.createObjectStore(OBJECT_STORES.PROGRESS, { keyPath: 'key' })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.SETTINGS)) {
      db.createObjectStore(OBJECT_STORES.SETTINGS, { keyPath: 'key' })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.I18N)) {
      const store = db.createObjectStore(OBJECT_STORES.I18N, { keyPath: 'id' })
      store.createIndex('locale', 'locale', { unique: false })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.METADATA)) {
      db.createObjectStore(OBJECT_STORES.METADATA, { keyPath: 'key' })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.IMAGE_CACHE)) {
      const store = db.createObjectStore(OBJECT_STORES.IMAGE_CACHE, { keyPath: 'url' })
      store.createIndex('cachedAt', 'cachedAt', { unique: false })
    }

    if (!db.objectStoreNames.contains(OBJECT_STORES.SYNC_QUEUE)) {
      const store = db.createObjectStore(OBJECT_STORES.SYNC_QUEUE, { keyPath: 'id', autoIncrement: true })
      store.createIndex('operation', 'operation', { unique: false })
      store.createIndex('status', 'status', { unique: false })
      store.createIndex('createdAt', 'createdAt', { unique: false })
    }
  }

  _setupDatabaseListeners() {
    if (!this.db) return
    this.db.onclose = () => {
      this.db = null
      this.initPromise = null
    }
  }

  async _getTransaction(storeName, mode = 'readonly') {
    await this.init()
    return this.db.transaction(storeName, mode)
  }

  async get(storeName, key) {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await this._getTransaction(storeName)
        const store = tx.objectStore(storeName)
        const request = store.get(key)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      } catch (e) {
        reject(e)
      }
    })
  }

  async put(storeName, value) {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await this._getTransaction(storeName, 'readwrite')
        const store = tx.objectStore(storeName)
        const request = store.put(value)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      } catch (e) {
        reject(e)
      }
    })
  }

  async add(storeName, value) {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await this._getTransaction(storeName, 'readwrite')
        const store = tx.objectStore(storeName)
        const request = store.add(value)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      } catch (e) {
        reject(e)
      }
    })
  }

  async delete(storeName, key) {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await this._getTransaction(storeName, 'readwrite')
        const store = tx.objectStore(storeName)
        const request = store.delete(key)
        request.onsuccess = () => resolve(true)
        request.onerror = () => reject(request.error)
      } catch (e) {
        reject(e)
      }
    })
  }

  async getAll(storeName) {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await this._getTransaction(storeName)
        const store = tx.objectStore(storeName)
        const request = store.getAll()
        request.onsuccess = () => resolve(request.result || [])
        request.onerror = () => reject(request.error)
      } catch (e) {
        reject(e)
      }
    })
  }

  async bulkPut(storeName, items) {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await this._getTransaction(storeName, 'readwrite')
        const store = tx.objectStore(storeName)
        let completed = 0
        let errored = false

        items.forEach((item) => {
          const req = store.put(item)
          req.onsuccess = () => {
            completed++
            if (completed === items.length && !errored) resolve(items.length)
          }
          req.onerror = () => {
            errored = true
            reject(req.error)
          }
        })

        if (items.length === 0) resolve(0)
      } catch (e) {
        reject(e)
      }
    })
  }

  async getByIndex(storeName, indexName, value) {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await this._getTransaction(storeName)
        const store = tx.objectStore(storeName)
        const index = store.index(indexName)
        const request = index.getAll(value)
        request.onsuccess = () => resolve(request.result || [])
        request.onerror = () => reject(request.error)
      } catch (e) {
        reject(e)
      }
    })
  }

  async clearStore(storeName) {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await this._getTransaction(storeName, 'readwrite')
        const store = tx.objectStore(storeName)
        const request = store.clear()
        request.onsuccess = () => resolve(true)
        request.onerror = () => reject(request.error)
      } catch (e) {
        reject(e)
      }
    })
  }

  async count(storeName) {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await this._getTransaction(storeName)
        const store = tx.objectStore(storeName)
        const request = store.count()
        request.onsuccess = () => resolve(request.result || 0)
        request.onerror = () => reject(request.error)
      } catch (e) {
        reject(e)
      }
    })
  }

  async setMetadata(key, value) {
    return this.put(OBJECT_STORES.METADATA, { key, value, updatedAt: Date.now() })
  }

  async getMetadata(key) {
    const result = await this.get(OBJECT_STORES.METADATA, key)
    return result?.value
  }

  async getLastSyncTime() {
    return this.getMetadata(STORE_KEYS.LAST_SYNC)
  }

  async setLastSyncTime(timestamp = Date.now()) {
    return this.setMetadata(STORE_KEYS.LAST_SYNC, timestamp)
  }

  async addToSyncQueue(operation, data) {
    return this.add(OBJECT_STORES.SYNC_QUEUE, {
      operation,
      data,
      status: 'pending',
      retries: 0,
      createdAt: Date.now()
    })
  }

  async getPendingSyncItems() {
    return this.getByIndex(OBJECT_STORES.SYNC_QUEUE, 'status', 'pending')
  }

  async clearAll() {
    const stores = Object.values(OBJECT_STORES)
    for (const store of stores) {
      await this.clearStore(store)
    }
  }

  async getStorageStats() {
    const stats = {}
    const stores = Object.values(OBJECT_STORES)
    
    for (const store of stores) {
      try {
        stats[store] = await this.count(store)
      } catch (e) {
        stats[store] = 0
      }
    }
    
    return stats
  }

  close() {
    if (this.db) {
      this.db.close()
      this.db = null
      this.initPromise = null
    }
  }
}

export const indexedDBManager = new IndexedDBManager()
export default IndexedDBManager
