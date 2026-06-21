import { useEffect, useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import { getAchievementById } from '../data/achievements'
import { audioManager } from '../modules/AudioManager'

export default function AchievementToast() {
  const [toast, setToast] = useState(null)
  const unlockedAchievements = useGameStore((s) => s.unlockedAchievements)
  const [prevUnlocked, setPrevUnlocked] = useState([])

  useEffect(() => {
    const newOnes = unlockedAchievements.filter(
      (id) => !prevUnlocked.includes(id)
    )
    if (newOnes.length > 0 && prevUnlocked.length > 0) {
      const achievement = getAchievementById(newOnes[0])
      if (achievement) {
        setToast(achievement)
        audioManager.ensureContext()
        audioManager.playAchievement()
        setTimeout(() => setToast(null), 3500)
      }
    }
    setPrevUnlocked([...unlockedAchievements])
  }, [unlockedAchievements])

  if (!toast) return null

  return (
    <div className="fixed inset-x-0 top-20 z-50 flex justify-center px-4 pointer-events-none animate-in slide-in-from-top-4 duration-500">
      <div className="glass-panel px-5 py-4 max-w-sm w-full border-star-gold/30
                    shadow-2xl shadow-star-gold/10 animate-bounce-in">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                        flex items-center justify-center text-2xl shadow-lg animate-pulse-slow">
            {toast.icon}
          </div>
          <div className="flex-1">
            <div className="text-[10px] text-star-gold uppercase tracking-widest font-semibold">
              成就解锁
            </div>
            <div className="text-white font-display text-lg">{toast.name}</div>
            <div className="text-white/50 text-xs">{toast.description}</div>
          </div>
          <div className="text-star-gold text-2xl animate-pulse-slow">✦</div>
        </div>
      </div>
    </div>
  )
}
