import { useState, useEffect, useCallback, useSyncExternalStore, useRef } from 'react'
import {
  t as _t,
  tc as _tc,
  getCurrentLanguage,
  switchLanguage,
  onLanguageChange,
  loadLanguage,
  isLanguageLoaded,
  SUPPORTED_LANGUAGES,
} from './index'

export function useI18n() {
  const language = useSyncExternalStore(
    onLanguageChange,
    getCurrentLanguage
  )
  const [isLoading, setIsLoading] = useState(false)
  const loadingRef = useRef(false)

  const t = useCallback(
    (key, params) => _t(key, params),
    [language]
  )

  const tc = useCallback(
    (category, id, field, params) => _tc(category, id, field, params),
    [language]
  )

  const changeLanguage = useCallback(async (code) => {
    if (loadingRef.current) return
    if (code === language) return
    loadingRef.current = true
    setIsLoading(true)
    try {
      await switchLanguage(code)
    } finally {
      loadingRef.current = false
      setIsLoading(false)
    }
  }, [language])

  const preloadLanguage = useCallback(async (code) => {
    if (isLanguageLoaded(code)) return
    try {
      await loadLanguage(code)
    } catch (_) {}
  }, [])

  return {
    t,
    tc,
    language,
    changeLanguage,
    preloadLanguage,
    isLoading,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isZh: language === 'zh-CN',
    isEn: language === 'en-US',
  }
}

export function useLocaleLoader() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const load = useCallback(async (code) => {
    setLoading(true)
    setError(null)
    try {
      await loadLanguage(code)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, error, load }
}
