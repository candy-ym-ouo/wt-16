import { useState, useEffect, useCallback, useMemo, createContext, useContext } from 'react'
import { offlineManager } from './OfflineManager.js'
import { networkMonitor } from './NetworkMonitor.js'
import { dataPackager } from './DataPackager.js'
import { imageCacheManager } from './ImageCacheManager.js'
import { SYNC_STRATEGY, CACHE_PRIORITY } from './constants.js'

const OfflineContext = createContext(null)

export function useOffline(options = {}) {
  const [status, setStatus] = useState(null)
  const [isInitializing, setIsInitializing] = useState(true)
  const [initError, setInitError] = useState(null)
  const [installProgress, setInstallProgress] = useState(null)
  const [networkStatus, setNetworkStatus] = useState({
    online: typeof navigator !== 'undefined' ? navigator.onLine : true,
    quality: 'unknown',
    weak: false
  })

  const initOffline = useCallback(async () => {
    setIsInitializing(true)
    setInitError(null)
    try {
      await offlineManager.init({
        syncStrategy: options.syncStrategy || SYNC_STRATEGY.DEFERRED,
        autoInstall: options.autoInstall !== false,
        installPriority: options.installPriority || CACHE_PRIORITY.HIGH
      })
      const currentStatus = await offlineManager.getStatus()
      setStatus(currentStatus)
    } catch (e) {
      setInitError(e)
    } finally {
      setIsInitializing(false)
    }
  }, [options.syncStrategy, options.autoInstall, options.installPriority])

  useEffect(() => {
    initOffline()

    const unsubscribeOffline = offlineManager.onStatusChange((s) => {
      offlineManager.getStatus().then(setStatus)
    })

    const unsubscribeNetwork = networkMonitor.subscribe((s) => {
      setNetworkStatus({
        online: s.online,
        quality: networkMonitor.getQuality(),
        weak: networkMonitor.isWeakConnection()
      })
    })

    const unsubscribeProgress = dataPackager.onProgress((p) => {
      setInstallProgress(p)
    })

    return () => {
      unsubscribeOffline?.()
      unsubscribeNetwork?.()
      unsubscribeProgress?.()
    }
  }, [initOffline])

  const refreshStatus = useCallback(async () => {
    const s = await offlineManager.getStatus()
    setStatus(s)
    return s
  }, [])

  const installPackage = useCallback(async (force = false) => {
    setInstallProgress({ step: 'start', progress: 0, message: '开始安装...' })
    try {
      const result = await offlineManager.installOfflinePackage(force)
      await refreshStatus()
      setInstallProgress({ step: 'complete', progress: 100, message: '安装完成' })
      setTimeout(() => setInstallProgress(null), 2000)
      return result
    } catch (e) {
      setInstallProgress({ step: 'error', progress: 0, message: `安装失败: ${e.message}` })
      setTimeout(() => setInstallProgress(null), 3000)
      throw e
    }
  }, [refreshStatus])

  const getConstellations = useCallback(async (opts) => {
    return offlineManager.getConstellations(opts)
  }, [])

  const getConstellationById = useCallback(async (id) => {
    return offlineManager.getConstellationById(id)
  }, [])

  const getAchievements = useCallback(async (opts) => {
    return offlineManager.getAchievements(opts)
  }, [])

  const getGalleryPhotos = useCallback(async (opts) => {
    return offlineManager.getGalleryPhotos(opts)
  }, [])

  const getStoryChapters = useCallback(async (opts) => {
    return offlineManager.getStoryChapters(opts)
  }, [])

  const saveObservationLog = useCallback(async (entry) => {
    const result = await offlineManager.saveObservationLog(entry)
    await refreshStatus()
    return result
  }, [refreshStatus])

  const bulkSaveObservationLogs = useCallback(async (entries, opts) => {
    const result = await offlineManager.bulkSaveObservationLogs(entries, opts)
    await refreshStatus()
    return result
  }, [refreshStatus])

  const getObservationLogs = useCallback(async (opts) => {
    return offlineManager.getObservationLogs(opts)
  }, [])

  const getObservationStats = useCallback(async () => {
    return offlineManager.getObservationStats()
  }, [])

  const cacheImage = useCallback(async (url, opts) => {
    return offlineManager.cacheImage(url, opts)
  }, [])

  const processSyncQueue = useCallback(async () => {
    const result = await offlineManager.processSyncQueue()
    await refreshStatus()
    return result
  }, [refreshStatus])

  const exportData = useCallback(async () => {
    return offlineManager.exportAll()
  }, [])

  const importData = useCallback(async (data) => {
    const result = await offlineManager.importAll(data)
    await refreshStatus()
    return result
  }, [refreshStatus])

  const clearCache = useCallback(async (opts) => {
    const result = await offlineManager.clearCache(opts)
    await refreshStatus()
    return result
  }, [refreshStatus])

  const useImage = useCallback((url, defaultUrl = null) => {
    const [resolvedUrl, setResolvedUrl] = useState(defaultUrl)
    const [isLoading, setIsLoading] = useState(true)
    const [isFromCache, setIsFromCache] = useState(false)

    useEffect(() => {
      let cancelled = false
      const load = async () => {
        if (!url) {
          setResolvedUrl(defaultUrl)
          setIsLoading(false)
          return
        }
        try {
          setIsLoading(true)
          if (!networkStatus.online || networkStatus.weak) {
            const cached = await imageCacheManager.getCachedImage(url)
            if (cached && !cancelled) {
              setResolvedUrl(cached)
              setIsFromCache(true)
              setIsLoading(false)
              return
            }
          }
          const result = await imageCacheManager.cacheImage(url)
          if (!cancelled) {
            setResolvedUrl(result || defaultUrl)
            setIsFromCache(result !== url)
          }
        } catch (e) {
          if (!cancelled) setResolvedUrl(defaultUrl)
        } finally {
          if (!cancelled) setIsLoading(false)
        }
      }
      load()
      return () => { cancelled = true }
    }, [url, defaultUrl, networkStatus.online, networkStatus.weak])

    return { url: resolvedUrl, loading: isLoading, fromCache: isFromCache }
  }, [networkStatus.online, networkStatus.weak])

  const value = useMemo(() => ({
    status,
    isInitializing,
    initError,
    installProgress,
    networkStatus,
    isOnline: networkStatus.online,
    isWeakConnection: networkStatus.weak,
    refreshStatus,
    installPackage,
    getConstellations,
    getConstellationById,
    getAchievements,
    getGalleryPhotos,
    getStoryChapters,
    saveObservationLog,
    bulkSaveObservationLogs,
    getObservationLogs,
    getObservationStats,
    cacheImage,
    processSyncQueue,
    exportData,
    importData,
    clearCache,
    useImage
  }), [
    status,
    isInitializing,
    initError,
    installProgress,
    networkStatus,
    refreshStatus,
    installPackage,
    getConstellations,
    getConstellationById,
    getAchievements,
    getGalleryPhotos,
    getStoryChapters,
    saveObservationLog,
    bulkSaveObservationLogs,
    getObservationLogs,
    getObservationStats,
    cacheImage,
    processSyncQueue,
    exportData,
    importData,
    clearCache,
    useImage
  ])

  return value
}

export function useOfflineContext() {
  const ctx = useContext(OfflineContext)
  if (!ctx) {
    throw new Error('useOfflineContext must be used within OfflineProvider')
  }
  return ctx
}

export { OfflineContext }
export default useOffline
