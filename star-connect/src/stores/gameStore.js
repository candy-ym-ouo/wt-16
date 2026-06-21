import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { ACHIEVEMENTS } from '../data/achievements'
import { DEFAULT_SETTINGS, STORAGE_KEYS } from '../data/constants'

let autoSaveEnabled = true

const conditionalStorage = {
  ...createJSONStorage(() => localStorage),
  setItem: (name, value) => {
    if (autoSaveEnabled) {
      return localStorage.setItem(name, value)
    }
  },
  getItem: (name) => {
    const value = localStorage.getItem(name)
    if (value) {
      try {
        const parsed = JSON.parse(value)
        if (parsed.state?.settings?.autoSave !== undefined) {
          autoSaveEnabled = parsed.state.settings.autoSave
        }
      } catch (e) {}
    }
    return value
  }
}

export const useGameStore = create(
  persist(
    (set, get) => ({
      settings: { ...DEFAULT_SETTINGS },
      updateSettings: (newSettings) =>
        set((state) => {
          const newState = {
            settings: { ...state.settings, ...newSettings }
          }
          if (newSettings.autoSave !== undefined) {
            autoSaveEnabled = newSettings.autoSave
          }
          return newState
        }),
      resetSettings: () =>
        set({ settings: { ...DEFAULT_SETTINGS } }),

      manualSave: () => {
        const state = get()
        const persistConfig = {
          state: {
            settings: state.settings,
            discoveredConstellations: state.discoveredConstellations,
            discoveredStars: state.discoveredStars,
            observationLogs: state.observationLogs,
            unlockedAchievements: state.unlockedAchievements,
            totalMistakes: state.totalMistakes
          },
          version: 0
        }
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(persistConfig))
      },

      discoveredConstellations: [],
      discoveredStars: [],
      connectionPath: [],
      currentTargetConstellation: null,
      mistakes: 0,
      totalMistakes: 0,
      perfectRun: true,

      setTargetConstellation: (constellationId) => {
        set({
          currentTargetConstellation: constellationId,
          connectionPath: [],
          mistakes: 0,
          perfectRun: true
        })
      },

      connectStar: (starId) => {
        const state = get()
        const constellation = getConstellationById(state.currentTargetConstellation)
        if (!constellation) return false

        const validIds = constellation.stars.map((s) => s.id)
        if (!validIds.includes(starId)) return false

        if (state.connectionPath.includes(starId)) return false

        const path = [...state.connectionPath, starId]
        const expectedConnections = constellation.connections

        if (path.length >= 2) {
          const lastTwo = path.slice(-2)
          const isValidEdge = expectedConnections.some(
            ([a, b]) =>
              (a === lastTwo[0] && b === lastTwo[1]) ||
              (a === lastTwo[1] && b === lastTwo[0])
          )

          if (!isValidEdge) {
            set({
              mistakes: state.mistakes + 1,
              totalMistakes: state.totalMistakes + 1,
              perfectRun: false
            })
            get().checkAchievements()
            return false
          }
        }

        set({
          connectionPath: path,
          discoveredStars: state.discoveredStars.includes(starId)
            ? state.discoveredStars
            : [...state.discoveredStars, starId]
        })

        get().checkConstellationComplete()
        get().checkAchievements()
        return true
      },

      clearConnectionPath: () => set({ connectionPath: [] }),

      checkConstellationComplete: () => {
        const state = get()
        const constellation = getConstellationById(state.currentTargetConstellation)
        if (!constellation) return false

        const uniqueStars = [...new Set(state.connectionPath)]
        const isComplete =
          uniqueStars.length === constellation.stars.length

        if (isComplete) {
          const constellationId = constellation.id
          const alreadyDiscovered =
            state.discoveredConstellations.includes(constellationId)

          if (!alreadyDiscovered) {
            set((state) => ({
              discoveredConstellations: [
                ...state.discoveredConstellations,
                constellationId
              ]
            }))
            get().addLog({
              type: 'discovery',
              constellationId,
              perfect: state.perfectRun,
              timestamp: Date.now()
            })
          } else {
            get().addLog({
              type: 'reobservation',
              constellationId,
              perfect: state.perfectRun,
              timestamp: Date.now()
            })
          }
          return true
        }
        return false
      },

      observationLogs: [],
      addLog: (entry) =>
        set((state) => ({
          observationLogs: [entry, ...state.observationLogs].slice(0, 100)
        })),
      clearLogs: () => set({ observationLogs: [] }),

      unlockedAchievements: [],
      checkAchievements: () => {
        const state = get()
        const newlyUnlocked = []

        ACHIEVEMENTS.forEach((achievement) => {
          if (state.unlockedAchievements.includes(achievement.id)) return
          const { type, value } = achievement.condition

          let unlocked = false
          switch (type) {
            case 'connect_count':
              unlocked = state.connectionPath.length >= value
              break
            case 'discover_count':
              unlocked = state.discoveredConstellations.length >= value
              break
            case 'difficulty_clear': {
              const targetDifficulty = value
              const constellationsOfDifficulty = CONSTELLATIONS.filter(
                (c) => c.difficulty === targetDifficulty
              )
              unlocked = constellationsOfDifficulty.every((c) =>
                state.discoveredConstellations.includes(c.id)
              )
              break
            }
            case 'log_count':
              unlocked = state.observationLogs.length >= value
              break
            case 'perfect_constellation': {
              const latestLog = state.observationLogs[0]
              unlocked =
                latestLog &&
                latestLog.constellationId === value &&
                latestLog.perfect === true
              break
            }
            case 'total_mistakes':
              unlocked = state.totalMistakes >= value
              break
          }

          if (unlocked) {
            newlyUnlocked.push(achievement.id)
          }
        })

        if (newlyUnlocked.length > 0) {
          set((state) => ({
            unlockedAchievements: [
              ...state.unlockedAchievements,
              ...newlyUnlocked
            ]
          }))
          newlyUnlocked.forEach((id) => {
            get().addLog({
              type: 'achievement',
              achievementId: id,
              timestamp: Date.now()
            })
          })
          return newlyUnlocked
        }
        return []
      },

      showAchievementToast: null,
      setShowAchievementToast: (id) => set({ showAchievementToast: id }),

      activePanel: null,
      setActivePanel: (panel) => set({ activePanel: panel }),

      isConstellationComplete: (constellationId) =>
        get().discoveredConstellations.includes(constellationId),

      getProgress: () => {
        const state = get()
        return {
          constellations: state.discoveredConstellations.length,
          totalConstellations: CONSTELLATIONS.length,
          achievements: state.unlockedAchievements.length,
          totalAchievements: ACHIEVEMENTS.length,
          logs: state.observationLogs.length
        }
      },

      resetProgress: () =>
        set({
          discoveredConstellations: [],
          discoveredStars: [],
          connectionPath: [],
          currentTargetConstellation: null,
          mistakes: 0,
          totalMistakes: 0,
          perfectRun: true,
          observationLogs: [],
          unlockedAchievements: []
        })
    }),
    {
      name: STORAGE_KEYS.PROGRESS,
      storage: conditionalStorage,
      partialize: (state) => ({
        settings: state.settings,
        discoveredConstellations: state.discoveredConstellations,
        discoveredStars: state.discoveredStars,
        observationLogs: state.observationLogs,
        unlockedAchievements: state.unlockedAchievements,
        totalMistakes: state.totalMistakes
      })
    }
  )
)
