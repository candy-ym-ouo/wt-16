import { useState, useEffect, useCallback, useSyncExternalStore } from 'react'
import {
  t as _t,
  tc as _tc,
  getCurrentLanguage,
  switchLanguage,
  onLanguageChange,
  loadLanguage,
  SUPPORTED_LANGUAGES,
} from './index'

export function useI18n() {
  const language = useSyncExternalStore(
    onLanguageChange,
    getCurrentLanguage
  )

  const t = useCallback(
    (key, params) => _t(key, params),
    [language]
  )

  const tc = useCallback(
    (category, id, field, params) => _tc(category, id, field, params),
    [language]
  )

  const changeLanguage = useCallback(async (code) => {
    await switchLanguage(code)
  }, [])

  return {
    t,
    tc,
    language,
    changeLanguage,
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
