const LOCALE_LOADERS = {}
const loadedLocales = {}
const listeners = new Set()

let currentLanguage = 'zh-CN'

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

export function setLanguage(code) {
  if (code === currentLanguage) return
  currentLanguage = code
  listeners.forEach((fn) => fn(code))
}

export function onLanguageChange(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export async function loadLanguage(code) {
  if (loadedLocales[code]) return loadedLocales[code]
  const loader = LOCALE_LOADERS[code]
  if (!loader) return null
  const locale = await loader()
  loadedLocales[code] = locale.default || locale
  return loadedLocales[code]
}

export async function switchLanguage(code) {
  await loadLanguage(code)
  setLanguage(code)
}

export function getLocale(code) {
  const lang = code || currentLanguage
  return loadedLocales[lang] || null
}

function resolveValue(obj, path) {
  if (!obj) return undefined
  const keys = path.split('.')
  let current = obj
  for (const key of keys) {
    if (current == null) return undefined
    current = current[key]
  }
  return current
}

export function t(key, params) {
  const chain = FALLBACK_CHAIN[currentLanguage] || [currentLanguage, 'zh-CN']
  for (const lang of chain) {
    const locale = loadedLocales[lang]
    if (!locale) continue
    const value = resolveValue(locale, key)
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
  return key
}

export function tc(category, id, field, params) {
  const fullKey = `${category}.${id}.${field}`
  return t(fullKey, params)
}

export function initI18n(initialLang = 'zh-CN') {
  currentLanguage = initialLang
  return loadLanguage(initialLang)
}

export { loadedLocales }
