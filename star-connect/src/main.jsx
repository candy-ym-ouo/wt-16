import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './i18n/locales/zh-CN'
import './i18n/locales/en-US'
import { initI18n } from './i18n/index'
import { DEFAULT_SETTINGS } from './data/constants'

const savedRaw = localStorage.getItem('starconnect_progress')
let initialLang = DEFAULT_SETTINGS.language
if (savedRaw) {
  try {
    const parsed = JSON.parse(savedRaw)
    initialLang = parsed?.state?.settings?.language || DEFAULT_SETTINGS.language
  } catch (_) {}
}
initI18n(initialLang)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
