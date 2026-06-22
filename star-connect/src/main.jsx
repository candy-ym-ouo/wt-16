import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { initI18n } from './i18n/index'
import { DEFAULT_SETTINGS, STORAGE_KEYS } from './data/constants'

function getInitialLanguage() {
  try {
    const currentSaveId = localStorage.getItem(STORAGE_KEYS.CURRENT_SAVE_ID) || 'default'
    const saveDataKey = `${STORAGE_KEYS.SAVE_DATA_PREFIX}${currentSaveId}`
    const saveDataRaw = localStorage.getItem(saveDataKey)
    
    if (saveDataRaw) {
      const saveData = JSON.parse(saveDataRaw)
      if (saveData?.state?.settings?.language) {
        return saveData.state.settings.language
      }
    }
    
    const oldProgressRaw = localStorage.getItem('starconnect_progress')
    if (oldProgressRaw) {
      const parsed = JSON.parse(oldProgressRaw)
      if (parsed?.state?.settings?.language) {
        return parsed.state.settings.language
      }
    }
  } catch (_) {}
  
  return DEFAULT_SETTINGS.language
}

const initialLang = getInitialLanguage()

async function bootstrap() {
  await initI18n(initialLang)
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

bootstrap()
