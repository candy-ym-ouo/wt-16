import { useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { PANEL_STYLES } from '../data/constants'

export default function PanelStyleProvider({ children }) {
  const workshop = useGameStore((s) => s.settings.workshop)

  useEffect(() => {
    const style = PANEL_STYLES[workshop?.panelStyle] || PANEL_STYLES.glass
    const root = document.documentElement
    Object.entries(style.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [workshop?.panelStyle])

  return children
}
