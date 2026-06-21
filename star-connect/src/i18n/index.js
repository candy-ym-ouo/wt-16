const LOCALE_LOADERS = {
  'zh-CN': () => import('./locales/zh-CN.js'),
  'en-US': () => import('./locales/en-US.js'),
}
const loadedLocales = {}
const localeCaches = {}
const listeners = new Set()

let currentLanguage = 'zh-CN'
let currentCache = null

const FALLBACK_CHAIN = {
  'zh-CN': ['zh-CN'],
  'zh-TW': ['zh-TW', 'zh-CN'],
  'en-US': ['en-US', 'zh-CN'],
}

export const SUPPORTED_LANGUAGES = [
  { code: 'zh-CN', name: '简体中文', nameEn: 'Simplified Chinese', icon: '🇨🇳' },
  { code: 'en-US', name: 'English', nameEn: 'English', icon: '🇺🇸' },
]

export function registerLocale(code, loader) {
  LOCALE_LOADERS[code] = loader
}

export function getCurrentLanguage() {
  return currentLanguage
}

function notifyListeners(code) {
  listeners.forEach((fn) => fn(code))
}

export function setLanguage(code) {
  if (code === currentLanguage) return
  currentLanguage = code
  currentCache = localeCaches[code] || null
  notifyListeners(code)
}

export function onLanguageChange(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

function flattenLocale(obj, prefix = '', result = {}) {
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    const value = obj[key]
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenLocale(value, fullKey, result)
    } else {
      result[fullKey] = value
    }
  }
  return result
}

function buildCache(code) {
  const locale = loadedLocales[code]
  if (!locale) return null
  const cache = flattenLocale(locale)
  localeCaches[code] = cache
  return cache
}

export async function loadLanguage(code) {
  if (loadedLocales[code]) {
    if (!localeCaches[code]) buildCache(code)
    return loadedLocales[code]
  }
  const loader = LOCALE_LOADERS[code]
  if (!loader) return null
  const locale = await loader()
  loadedLocales[code] = locale.default || locale
  buildCache(code)
  return loadedLocales[code]
}

export async function switchLanguage(code) {
  if (code === currentLanguage) return
  const currentLoaded = !!loadedLocales[code]
  await loadLanguage(code)
  setLanguage(code)
  if (!currentLoaded) {
    notifyListeners(code)
  }
}

export function getLocale(code) {
  const lang = code || currentLanguage
  return loadedLocales[lang] || null
}

function resolveValueFromCache(key, params) {
  const chain = FALLBACK_CHAIN[currentLanguage] || [currentLanguage, 'zh-CN']
  for (const lang of chain) {
    const cache = localeCaches[lang]
    if (!cache) continue
    const value = cache[key]
    if (value !== undefined) {
      if (typeof value === 'function') return value(params)
      if (params && typeof value === 'string') {
        return value.replace(/\{(\w+)\}/g, (_, k) =>
          params[k] !== undefined ? String(params[k]) : `{${k}}`
        )
      }
      return value
    }
  }
  return undefined
}

export function t(key, params) {
  const value = resolveValueFromCache(key, params)
  if (value !== undefined) return value
  return key
}

export function tc(category, id, field, params) {
  const fullKey = `${category}.${id}.${field}`
  return t(fullKey, params)
}

export async function initI18n(initialLang = 'zh-CN') {
  currentLanguage = initialLang
  await loadLanguage(initialLang)
  currentCache = localeCaches[initialLang] || null
  return loadedLocales[initialLang]
}

export function isLanguageLoaded(code) {
  return !!loadedLocales[code]
}

export { loadedLocales }
