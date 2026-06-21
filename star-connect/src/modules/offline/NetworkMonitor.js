import { storageAdapter } from './StorageAdapter.js'
import { OBJECT_STORES } from './constants.js'

class NetworkMonitor {
  constructor() {
    this.status = {
      online: typeof navigator !== 'undefined' ? navigator.onLine : true,
      effectiveType: 'unknown',
      downlink: 0,
      rtt: 0,
      saveData: false,
      lastCheck: Date.now()
    }
    this.listeners = new Set()
    this._checkInterval = null
    this._init()
  }

  _init() {
    if (typeof window === 'undefined') return

    window.addEventListener('online', () => this._updateStatus(true))
    window.addEventListener('offline', () => this._updateStatus(false))

    if ('connection' in navigator) {
      const conn = navigator.connection
      this._updateConnectionInfo(conn)
      conn.addEventListener('change', () => this._updateConnectionInfo(conn))
    }

    this._checkInterval = setInterval(() => {
      this._pingCheck()
    }, 30000)
  }

  _updateStatus(online) {
    const prevOnline = this.status.online
    this.status = {
      ...this.status,
      online,
      lastCheck: Date.now()
    }

    if (prevOnline !== online) {
      this._notifyListeners()
    }
  }

  _updateConnectionInfo(conn) {
    this.status = {
      ...this.status,
      effectiveType: conn.effectiveType || 'unknown',
      downlink: conn.downlink || 0,
      rtt: conn.rtt || 0,
      saveData: conn.saveData || false
    }
    this._notifyListeners()
  }

  async _pingCheck() {
    if (!this.status.online) return
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000)
      
      const start = Date.now()
      await fetch(window.location.href, {
        method: 'HEAD',
        mode: 'no-cors',
        signal: controller.signal
      })
      clearTimeout(timeoutId)
      
      this.status = {
        ...this.status,
        rtt: Date.now() - start,
        lastCheck: Date.now()
      }
    } catch (e) {
      if (e.name === 'AbortError') {
        this.status = {
          ...this.status,
          online: false,
          lastCheck: Date.now()
        }
        this._notifyListeners()
      }
    }
  }

  subscribe(listener) {
    this.listeners.add(listener)
    listener(this.status)
    return () => this.listeners.delete(listener)
  }

  _notifyListeners() {
    this.listeners.forEach((listener) => {
      try {
        listener(this.status)
      } catch (e) {
        console.warn('Network listener error:', e)
      }
    })
  }

  isOnline() {
    return this.status.online
  }

  isWeakConnection() {
    if (!this.status.online) return true
    const { effectiveType, saveData, rtt, downlink } = this.status
    if (saveData) return true
    if (effectiveType === 'slow-2g' || effectiveType === '2g') return true
    if (rtt > 1000) return true
    if (downlink > 0 && downlink < 0.5) return true
    return false
  }

  getStatus() {
    return { ...this.status }
  }

  getQuality() {
    if (!this.status.online) return 'offline'
    if (this.isWeakConnection()) return 'weak'
    return 'good'
  }

  destroy() {
    if (this._checkInterval) {
      clearInterval(this._checkInterval)
    }
    this.listeners.clear()
  }
}

export const networkMonitor = new NetworkMonitor()
export default NetworkMonitor
