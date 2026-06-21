import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { ACHIEVEMENTS } from '../data/achievements'
import { DEFAULT_SETTINGS, STORAGE_KEYS } from '../data/constants'
import {
  SEASONS,
  SEASON_PHASES,
  SEASON_REWARDS,
  SEASON_ACHIEVEMENTS,
  getSeasonConstellations,
  getCurrentSeason,
  getSeasonPhaseProgress
} from '../data/seasonPlan'
import {
  FAMILY_TASKS,
  FAMILY_ACHIEVEMENTS,
  getFamilyTaskById,
  getFamilyAchievementById
} from '../data/familyMode'
import {
  STAMINA_CONFIG,
  generateExpeditionRoute,
  calculateExpeditionRewards,
  getRecoveredStamina
} from '../data/nightExpedition'

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
            totalMistakes: state.totalMistakes,
            seasonProgress: state.seasonProgress,
            seasonRewardsUnlocked: state.seasonRewardsUnlocked,
            seasonRewardsClaimed: state.seasonRewardsClaimed,
            perfectObservations: state.perfectObservations,
            totalObservations: state.totalObservations,
            seasonHistory: state.seasonHistory,
            favoriteConstellations: state.favoriteConstellations,
            familyMode: state.familyMode,
            nightExpedition: state.nightExpedition
          },
          version: 0
        }
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(persistConfig))
      },

      favoriteConstellations: [],
      toggleFavorite: (constellationId) =>
        set((state) => ({
          favoriteConstellations: state.favoriteConstellations.includes(constellationId)
            ? state.favoriteConstellations.filter((id) => id !== constellationId)
            : [...state.favoriteConstellations, constellationId]
        })),
      isFavorite: (constellationId) => get().favoriteConstellations.includes(constellationId),

      familyMode: {
        enabled: false,
        currentRole: null,
        familyMembers: {
          parent: { name: '家长', avatar: '👨‍👩‍👧', xp: 0, level: 1 },
          child: { name: '孩子', avatar: '🧒', xp: 0, level: 1 }
        },
        activeTaskId: null,
        currentStepIndex: 0,
        turnRole: null,
        collaborativeCount: 0,
        turnCompleteCount: 0,
        guidedCompleteCount: 0,
        perfectStreak: 0,
        mythologyToldCount: 0,
        childIndependentCount: 0,
        parentGuidedCount: 0,
        familyDiscoveredConstellations: [],
        totalMinutes: 0,
        sessionStartTime: null,
        lastActiveDate: null,
        streakDays: 0,
        completedTasks: [],
        unlockedFamilyAchievements: [],
        quizScores: [],
        familyLog: []
      },

      setFamilyMode: (enabled) => set((state) => ({
        familyMode: {
          ...state.familyMode,
          enabled,
          sessionStartTime: enabled ? Date.now() : null
        }
      })),

      setFamilyRole: (role) => set((state) => ({
        familyMode: { ...state.familyMode, currentRole: role }
      })),

      updateFamilyMember: (role, data) => set((state) => ({
        familyMode: {
          ...state.familyMode,
          familyMembers: {
            ...state.familyMode.familyMembers,
            [role]: { ...state.familyMode.familyMembers[role], ...data }
          }
        }
      })),

      addFamilyXP: (role, amount) => set((state) => {
        const member = state.familyMode.familyMembers[role]
        const newXP = member.xp + amount
        const newLevel = Math.floor(newXP / 100) + 1
        return {
          familyMode: {
            ...state.familyMode,
            familyMembers: {
              ...state.familyMode.familyMembers,
              [role]: { ...member, xp: newXP, level: newLevel }
            }
          }
        }
      }),

      startFamilyTask: (taskId) => {
        const task = getFamilyTaskById(taskId)
        if (!task) return false
        
        const firstStep = task.steps?.[0]
        set((state) => ({
          familyMode: {
            ...state.familyMode,
            activeTaskId: taskId,
            currentStepIndex: 0,
            turnRole: firstStep?.role || null
          }
        }))
        return true
      },

      nextTaskStep: () => {
        const state = get()
        const task = getFamilyTaskById(state.familyMode.activeTaskId)
        if (!task || !task.steps) return null
        
        const nextIndex = state.familyMode.currentStepIndex + 1
        if (nextIndex >= task.steps.length) {
          get().completeFamilyTask()
          return null
        }
        
        const nextStep = task.steps[nextIndex]
        set((state) => ({
          familyMode: {
            ...state.familyMode,
            currentStepIndex: nextIndex,
            turnRole: nextStep?.role || null
          }
        }))
        return nextStep
      },

      completeFamilyTask: () => {
        const state = get()
        const taskId = state.familyMode.activeTaskId
        const task = getFamilyTaskById(taskId)
        
        if (!task) return null
        
        set((state) => {
          const newState = {
            familyMode: {
              ...state.familyMode,
              activeTaskId: null,
              currentStepIndex: 0,
              turnRole: null,
              completedTasks: [...state.familyMode.completedTasks, {
                taskId,
                completedAt: Date.now(),
                perfect: state.familyMode.perfectStreak > 0
              }]
            }
          }
          
          if (task.type === 'collaborative') {
            newState.familyMode.collaborativeCount = state.familyMode.collaborativeCount + 1
          } else if (task.type === 'turn_based') {
            newState.familyMode.turnCompleteCount = state.familyMode.turnCompleteCount + 1
          } else if (task.type === 'guided') {
            newState.familyMode.guidedCompleteCount = state.familyMode.guidedCompleteCount + 1
            newState.familyMode.parentGuidedCount = state.familyMode.parentGuidedCount + 1
          }
          
          if (task.reward?.xp) {
            const parentMember = newState.familyMode.familyMembers.parent
            const childMember = newState.familyMode.familyMembers.child
            
            const parentXP = parentMember.xp + Math.floor(task.reward.xp * 0.4)
            const childXP = childMember.xp + Math.floor(task.reward.xp * 0.6)
            
            newState.familyMode.familyMembers = {
              parent: { ...parentMember, xp: parentXP, level: Math.floor(parentXP / 100) + 1 },
              child: { ...childMember, xp: childXP, level: Math.floor(childXP / 100) + 1 }
            }
          }
          
          return newState
        })
        
        get().checkFamilyAchievements()
        return task
      },

      recordMythologyTold: () => set((state) => ({
        familyMode: {
          ...state.familyMode,
          mythologyToldCount: state.familyMode.mythologyToldCount + 1
        }
      })),

      recordChildIndependent: () => set((state) => ({
        familyMode: {
          ...state.familyMode,
          childIndependentCount: state.familyMode.childIndependentCount + 1
        }
      })),

      recordParentGuided: () => set((state) => ({
        familyMode: {
          ...state.familyMode,
          parentGuidedCount: state.familyMode.parentGuidedCount + 1
        }
      })),

      recordQuizScore: (score, total) => set((state) => ({
        familyMode: {
          ...state.familyMode,
          quizScores: [...state.familyMode.quizScores, {
            score,
            total,
            percentage: Math.round((score / total) * 100),
            date: Date.now()
          }]
        }
      })),

      updateFamilyPerfectStreak: (isPerfect) => set((state) => ({
        familyMode: {
          ...state.familyMode,
          perfectStreak: isPerfect ? state.familyMode.perfectStreak + 1 : 0
        }
      })),

      addFamilyLog: (entry) => set((state) => ({
        familyMode: {
          ...state.familyMode,
          familyLog: [entry, ...state.familyMode.familyLog].slice(0, 200)
        }
      })),

      checkFamilyStreak: () => {
        const today = new Date().toDateString()
        const state = get()
        const lastDate = state.familyMode.lastActiveDate
        
        if (lastDate === today) return
        
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        
        let newStreak = 1
        if (lastDate === yesterday.toDateString()) {
          newStreak = state.familyMode.streakDays + 1
        }
        
        set((state) => ({
          familyMode: {
            ...state.familyMode,
            lastActiveDate: today,
            streakDays: newStreak
          }
        }))
        
        get().checkFamilyAchievements()
      },

      endFamilySession: () => {
        const state = get()
        if (state.familyMode.sessionStartTime) {
          const sessionMinutes = Math.round((Date.now() - state.familyMode.sessionStartTime) / 60000)
          set((state) => ({
            familyMode: {
              ...state.familyMode,
              totalMinutes: state.familyMode.totalMinutes + sessionMinutes,
              sessionStartTime: null
            }
          }))
          get().checkFamilyAchievements(true)
        }
      },

      checkFamilyAchievements: (skipEnabledCheck = false) => {
        const state = get()
        if (!skipEnabledCheck && !state.familyMode.enabled) return []
        
        const newlyUnlocked = []
        const fm = state.familyMode
        
        FAMILY_ACHIEVEMENTS.forEach((achievement) => {
          if (fm.unlockedFamilyAchievements.includes(achievement.id)) return
          
          const { type, value } = achievement.condition
          let unlocked = false
          
          switch (type) {
            case 'collaborative_complete':
              unlocked = fm.collaborativeCount >= value
              break
            case 'turn_complete':
              unlocked = fm.turnCompleteCount >= value
              break
            case 'quiz_score':
              const bestScore = fm.quizScores.length > 0 
                ? Math.max(...fm.quizScores.map(s => s.percentage))
                : 0
              unlocked = bestScore >= value
              break
            case 'guided_complete':
              unlocked = fm.guidedCompleteCount >= value
              break
            case 'perfect_streak':
              unlocked = fm.perfectStreak >= value
              break
            case 'season_discovery': {
              const currentSeason = getCurrentSeason()
              const seasonConstellations = getSeasonConstellations(currentSeason)
              const discoveredInSeason = seasonConstellations.filter(id =>
                fm.familyDiscoveredConstellations.includes(id)
              ).length
              unlocked = discoveredInSeason >= seasonConstellations.length * value
              break
            }
            case 'mythology_told':
              unlocked = fm.mythologyToldCount >= value
              break
            case 'streak_days':
              unlocked = fm.streakDays >= value
              break
            case 'total_minutes':
              unlocked = fm.totalMinutes >= value
              break
            case 'child_independent':
              unlocked = fm.childIndependentCount >= value
              break
            case 'parent_guided':
              unlocked = fm.parentGuidedCount >= value
              break
            case 'family_discover_all':
              unlocked = fm.familyDiscoveredConstellations.length >= value
              break
          }
          
          if (unlocked) {
            newlyUnlocked.push(achievement.id)
          }
        })
        
        if (newlyUnlocked.length > 0) {
          set((state) => ({
            familyMode: {
              ...state.familyMode,
              unlockedFamilyAchievements: [
                ...state.familyMode.unlockedFamilyAchievements,
                ...newlyUnlocked
              ]
            }
          }))
          
          newlyUnlocked.forEach((id) => {
            const achievement = getFamilyAchievementById(id)
            if (achievement) {
              get().addFamilyLog({
                type: 'family_achievement',
                achievementId: id,
                achievementName: achievement.name,
                timestamp: Date.now()
              })
            }
          })
        }
        
        return newlyUnlocked
      },

      recordFamilyDiscovery: (constellationId, isPerfect) => {
        set((state) => {
          const alreadyDiscovered = state.familyMode.familyDiscoveredConstellations.includes(constellationId)
          const newDiscovered = alreadyDiscovered
            ? state.familyMode.familyDiscoveredConstellations
            : [...state.familyMode.familyDiscoveredConstellations, constellationId]
          
          return {
            familyMode: {
              ...state.familyMode,
              familyDiscoveredConstellations: newDiscovered,
              perfectStreak: isPerfect ? state.familyMode.perfectStreak + 1 : 0
            }
          }
        })
        get().checkFamilyAchievements()
      },

      getFamilyProgress: () => {
        const state = get()
        const fm = state.familyMode
        
        return {
          totalAchievements: FAMILY_ACHIEVEMENTS.length,
          unlockedAchievements: fm.unlockedFamilyAchievements.length,
          totalTasks: FAMILY_TASKS.length,
          completedTasks: fm.completedTasks.length,
          parentLevel: fm.familyMembers.parent.level,
          childLevel: fm.familyMembers.child.level,
          parentXP: fm.familyMembers.parent.xp,
          childXP: fm.familyMembers.child.xp,
          totalMinutes: fm.totalMinutes,
          streakDays: fm.streakDays,
          discoveredConstellations: fm.familyDiscoveredConstellations.length,
          collaborativeCount: fm.collaborativeCount,
          turnCompleteCount: fm.turnCompleteCount,
          guidedCompleteCount: fm.guidedCompleteCount
        }
      },

      getFamilyGrowthData: () => {
        const state = get()
        const fm = state.familyMode
        
        const weeklyData = []
        const today = new Date()
        
        for (let i = 6; i >= 0; i--) {
          const date = new Date(today)
          date.setDate(date.getDate() - i)
          const dateStr = date.toDateString()
          
          const dayLogs = fm.familyLog.filter(log => {
            const logDate = new Date(log.timestamp).toDateString()
            return logDate === dateStr
          })
          
          weeklyData.push({
            date: date.toLocaleDateString('zh-CN', { weekday: 'short' }),
            sessions: dayLogs.length,
            discoveries: dayLogs.filter(l => l.type === 'discovery').length
          })
        }
        
        return {
          weeklyData,
          totalSessions: Math.floor(fm.totalMinutes / 30),
          avgSessionLength: fm.totalMinutes > 0 
            ? Math.round(fm.totalMinutes / Math.max(1, Math.floor(fm.totalMinutes / 30)))
            : 0
        }
      },

      nightExpedition: {
        stamina: STAMINA_CONFIG.initialStamina,
        lastStaminaUpdate: Date.now(),
        currentRun: null,
        history: [],
        totalCompleted: 0,
        highestStagesCleared: 0,
        totalPerfectStages: 0,
        totalStardustEarned: 0
      },

      syncExpeditionStamina: () => {
        const state = get()
        const ne = state.nightExpedition
        if (ne.stamina >= STAMINA_CONFIG.maxStamina) return

        const recovered = getRecoveredStamina(ne.lastStaminaUpdate, ne.stamina)
        if (recovered > 0) {
          const intervalsUsed = recovered / STAMINA_CONFIG.recoveryAmount
          const newLastUpdate = ne.lastStaminaUpdate + (intervalsUsed * STAMINA_CONFIG.recoveryIntervalMs)

          set((state) => ({
            nightExpedition: {
              ...state.nightExpedition,
              stamina: Math.min(state.nightExpedition.stamina + recovered, STAMINA_CONFIG.maxStamina),
              lastStaminaUpdate: newLastUpdate
            }
          }))
        }
      },

      startExpedition: () => {
        get().syncExpeditionStamina()
        const syncedStamina = get().nightExpedition.stamina

        if (syncedStamina < STAMINA_CONFIG.stageCost) return false

        const route = generateExpeditionRoute()
        const firstStage = route[0]

        set((state) => ({
          nightExpedition: {
            ...state.nightExpedition,
            stamina: state.nightExpedition.stamina - STAMINA_CONFIG.stageCost,
            lastStaminaUpdate: Date.now(),
            currentRun: {
              route,
              stageIndex: 0,
              mistakesInStage: 0,
              clearedStages: [],
              perfectCount: 0,
              startTime: Date.now(),
              active: true
            }
          },
          currentTargetConstellation: firstStage.constellationId,
          connectionPath: [],
          mistakes: 0,
          perfectRun: true
        }))

        get().addLog({
          type: 'expedition_start',
          timestamp: Date.now(),
          totalStages: route.length
        })

        return true
      },

      advanceExpeditionStage: () => {
        const state = get()
        const ne = state.nightExpedition
        const run = ne.currentRun
        if (!run || !run.active) return null

        const currentStage = run.route[run.stageIndex]
        const isPerfect = run.mistakesInStage === 0

        const clearedStage = {
          ...currentStage,
          mistakes: run.mistakesInStage,
          perfect: isPerfect,
          completedAt: Date.now()
        }

        const newClearedStages = [...run.clearedStages, clearedStage]
        const newPerfectCount = run.perfectCount + (isPerfect ? 1 : 0)
        const nextIndex = run.stageIndex + 1

        if (nextIndex >= run.route.length) {
          return get().completeExpedition(newClearedStages, newPerfectCount)
        }

        const nextStage = run.route[nextIndex]

        get().syncExpeditionStamina()
        const syncedStamina = get().nightExpedition.stamina

        if (syncedStamina < STAMINA_CONFIG.stageCost) {
          return get().completeExpedition(newClearedStages, newPerfectCount, true)
        }

        set((state) => ({
          nightExpedition: {
            ...state.nightExpedition,
            stamina: state.nightExpedition.stamina - STAMINA_CONFIG.stageCost,
            lastStaminaUpdate: Date.now(),
            currentRun: {
              ...state.nightExpedition.currentRun,
              stageIndex: nextIndex,
              mistakesInStage: 0,
              clearedStages: newClearedStages,
              perfectCount: newPerfectCount
            }
          },
          currentTargetConstellation: nextStage.constellationId,
          connectionPath: [],
          mistakes: 0,
          perfectRun: true
        }))

        return { nextStage, stageIndex: nextIndex }
      },

      failExpeditionStage: () => {
        const state = get()
        const ne = state.nightExpedition
        const run = ne.currentRun
        if (!run || !run.active) return null

        return get().completeExpedition(run.clearedStages, run.perfectCount)
      },

      completeExpedition: (clearedStages, perfectCount, staminaOut = false) => {
        const state = get()
        const ne = state.nightExpedition
        const run = ne.currentRun
        if (!run) return null

        const totalStages = run.route.length
        const rewards = calculateExpeditionRewards(clearedStages, perfectCount, totalStages)

        const entry = {
          clearedStages,
          perfectCount,
          totalStages,
          stagesCleared: clearedStages.length,
          rewards,
          staminaOut,
          startTime: run.startTime,
          endTime: Date.now(),
          duration: Date.now() - run.startTime
        }

        set((state) => ({
          nightExpedition: {
            ...state.nightExpedition,
            currentRun: null,
            history: [entry, ...state.nightExpedition.history].slice(0, 50),
            totalCompleted: state.nightExpedition.totalCompleted + 1,
            highestStagesCleared: Math.max(
              state.nightExpedition.highestStagesCleared,
              clearedStages.length
            ),
            totalPerfectStages: state.nightExpedition.totalPerfectStages + perfectCount,
            totalStardustEarned: state.nightExpedition.totalStardustEarned + rewards.stardust
          },
          currentTargetConstellation: null,
          connectionPath: [],
          mistakes: 0
        }))

        get().addLog({
          type: 'expedition_complete',
          timestamp: Date.now(),
          stagesCleared: clearedStages.length,
          totalStages,
          perfectCount,
          stardustEarned: rewards.stardust
        })

        get().checkAchievements()

        return entry
      },

      abandonExpedition: () => {
        const state = get()
        const ne = state.nightExpedition
        const run = ne.currentRun
        if (!run || !run.active) return

        if (run.clearedStages.length > 0) {
          get().completeExpedition(run.clearedStages, run.perfectCount)
        } else {
          set((state) => ({
            nightExpedition: {
              ...state.nightExpedition,
              currentRun: null
            },
            currentTargetConstellation: null,
            connectionPath: [],
            mistakes: 0
          }))
        }
      },

      recordExpeditionMistake: () => {
        const state = get()
        const ne = state.nightExpedition
        const run = ne.currentRun
        if (!run || !run.active) return false

        const currentStage = run.route[run.stageIndex]
        const newMistakes = run.mistakesInStage + 1

        if (newMistakes > currentStage.allowedMistakes) {
          get().failExpeditionStage()
          return 'failed'
        }

        set((state) => ({
          nightExpedition: {
            ...state.nightExpedition,
            currentRun: {
              ...state.nightExpedition.currentRun,
              mistakesInStage: newMistakes
            }
          }
        }))

        return 'continue'
      },

      getExpeditionProgress: () => {
        const state = get()
        const ne = state.nightExpedition
        return {
          totalCompleted: ne.totalCompleted,
          highestStagesCleared: ne.highestStagesCleared,
          totalPerfectStages: ne.totalPerfectStages,
          totalStardustEarned: ne.totalStardustEarned,
          totalRuns: ne.history.length,
          avgStagesCleared: ne.history.length > 0
            ? Math.round(ne.history.reduce((sum, h) => sum + h.stagesCleared, 0) / ne.history.length * 10) / 10
            : 0
        }
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
            const ne = state.nightExpedition
            const inExpedition = ne.currentRun?.active

            set({
              mistakes: state.mistakes + 1,
              totalMistakes: state.totalMistakes + 1,
              perfectRun: false
            })

            if (inExpedition) {
              const result = get().recordExpeditionMistake()
              if (result === 'failed') return false
            }

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
          const isPerfect = state.perfectRun

          set((s) => ({
            totalObservations: {
              ...s.totalObservations,
              [constellationId]: (s.totalObservations[constellationId] || 0) + 1
            },
            perfectObservations: isPerfect
              ? { ...s.perfectObservations, [constellationId]: true }
              : s.perfectObservations
          }))

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
              perfect: isPerfect,
              timestamp: Date.now()
            })
          } else {
            get().addLog({
              type: 'reobservation',
              constellationId,
              perfect: isPerfect,
              timestamp: Date.now()
            })
          }

          if (state.familyMode.enabled) {
            get().recordFamilyDiscovery(constellationId, isPerfect)
            
            const currentRole = state.familyMode.turnRole || state.familyMode.currentRole
            const activeTaskId = state.familyMode.activeTaskId
            
            if (currentRole === 'child' && !activeTaskId) {
              get().recordChildIndependent()
            }
            
            if (activeTaskId) {
              const task = getFamilyTaskById(activeTaskId)
              if (task?.type === 'guided' && currentRole === 'child') {
                get().recordParentGuided()
              }
            }
            
            get().addFamilyLog({
              type: alreadyDiscovered ? 'reobservation' : 'discovery',
              constellationId,
              perfect: isPerfect,
              role: currentRole,
              timestamp: Date.now()
            })
            
            get().checkFamilyAchievements()
          }

          get().checkSeasonProgress()

          if (state.nightExpedition.currentRun?.active) {
            get().advanceExpeditionStage()
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

      seasonProgress: {
        spring: { beginner: false, intermediate: false, master: false },
        summer: { beginner: false, intermediate: false, master: false },
        autumn: { beginner: false, intermediate: false, master: false },
        winter: { beginner: false, intermediate: false, master: false }
      },
      seasonRewardsUnlocked: [],
      seasonRewardsClaimed: [],
      perfectObservations: {},
      totalObservations: {},
      seasonHistory: [],

      getSeasonStats: () => {
        const state = get()
        const stats = {}
        Object.keys(SEASONS).forEach((seasonId) => {
          const constellationIds = getSeasonConstellations(seasonId)
          const discovered = constellationIds.filter(id =>
            state.discoveredConstellations.includes(id)
          ).length
          const perfectCount = constellationIds.filter(id =>
            state.perfectObservations[id]
          ).length
          const reObservationCount = constellationIds.reduce((sum, id) => {
            return sum + Math.max(0, (state.totalObservations[id] || 0) - 1)
          }, 0)

          const beginner = getSeasonPhaseProgress(
            seasonId, 'beginner', state.discoveredConstellations,
            state.perfectObservations, state.totalObservations
          )
          const intermediate = getSeasonPhaseProgress(
            seasonId, 'intermediate', state.discoveredConstellations,
            state.perfectObservations, state.totalObservations
          )
          const master = getSeasonPhaseProgress(
            seasonId, 'master', state.discoveredConstellations,
            state.perfectObservations, state.totalObservations
          )

          stats[seasonId] = {
            constellations: constellationIds.length,
            discovered,
            perfectCount,
            reObservationCount,
            beginner,
            intermediate,
            master,
            overallPercentage: Math.round(
              (beginner.percentage + intermediate.percentage + master.percentage) / 3
            )
          }
        })
        return stats
      },

      checkSeasonProgress: () => {
        const state = get()
        const newProgress = { ...state.seasonProgress }
        const newlyCompleted = []
        const newUnlockedRewards = []

        Object.keys(SEASONS).forEach((seasonId) => {
          Object.keys(SEASON_PHASES).forEach((phaseId) => {
            if (!newProgress[seasonId][phaseId]) {
              const progress = getSeasonPhaseProgress(
                seasonId, phaseId, state.discoveredConstellations,
                state.perfectObservations, state.totalObservations
              )
              if (progress.completed) {
                newProgress[seasonId] = {
                  ...newProgress[seasonId],
                  [phaseId]: true
                }
                newlyCompleted.push({ seasonId, phaseId })

                const reward = SEASON_REWARDS[seasonId][phaseId]
                if (reward && !state.seasonRewardsUnlocked.includes(reward.id)) {
                  newUnlockedRewards.push(reward.id)
                  state.addLog({
                    type: 'season_reward',
                    seasonId,
                    phaseId,
                    rewardId: reward.id,
                    rewardName: reward.name,
                    timestamp: Date.now()
                  })
                }
              }
            }
          })
        })

        if (newlyCompleted.length > 0) {
          set({
            seasonProgress: newProgress,
            seasonRewardsUnlocked: [...state.seasonRewardsUnlocked, ...newUnlockedRewards],
            seasonHistory: [
              ...newlyCompleted.map(item => ({
                ...item,
                timestamp: Date.now()
              })),
              ...state.seasonHistory
            ].slice(0, 50)
          })
        }

        get().checkAchievements()

        return newlyCompleted.length > 0 ? newlyCompleted : []
      },

      claimSeasonReward: (rewardId) => {
        const state = get()
        if (state.seasonRewardsUnlocked.includes(rewardId) &&
            !state.seasonRewardsClaimed.includes(rewardId)) {
          set({
            seasonRewardsClaimed: [...state.seasonRewardsClaimed, rewardId]
          })
          return true
        }
        return false
      },

      checkAchievements: () => {
        const state = get()
        const newlyUnlocked = []

        const allAchievements = [...ACHIEVEMENTS, ...SEASON_ACHIEVEMENTS]

        allAchievements.forEach((achievement) => {
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
            case 'season_master':
              unlocked = state.seasonProgress[value]?.master === true
              break
            case 'four_seasons':
              unlocked = Object.keys(SEASONS).every(
                s => state.seasonProgress[s]?.master === true
              )
              break
            case 'expedition_complete':
              unlocked = state.nightExpedition.totalCompleted >= value
              break
            case 'expedition_stages':
              unlocked = state.nightExpedition.highestStagesCleared >= value
              break
            case 'expedition_perfect':
              unlocked = state.nightExpedition.totalPerfectStages >= value
              break
            case 'expedition_stardust':
              unlocked = state.nightExpedition.totalStardustEarned >= value
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
      setActivePanel: (panel) =>
        set((state) => {
          const newState = { activePanel: panel }
          if (panel !== 'atlas' && state.activePanel === 'atlas') {
            newState.activeAtlasPanel = null
            newState.selectedConstellationDetail = null
          }
          return newState
        }),
      openAtlasList: () =>
        set({
          activePanel: 'atlas',
          activeAtlasPanel: null,
          selectedConstellationDetail: null
        }),
      openAtlasDetail: (constellationId) =>
        set({
          activePanel: 'atlas',
          activeAtlasPanel: 'detail',
          selectedConstellationDetail: constellationId
        }),
      resetAtlasState: () =>
        set({
          activeAtlasPanel: null,
          selectedConstellationDetail: null
        }),

      activeAtlasPanel: null,
      selectedConstellationDetail: null,
      setActiveAtlasPanel: (panel) => set({ activeAtlasPanel: panel }),
      setSelectedConstellationDetail: (constellationId) => set({ selectedConstellationDetail: constellationId }),

      isConstellationComplete: (constellationId) =>
        get().discoveredConstellations.includes(constellationId),

      getProgress: () => {
        const state = get()
        const totalAchievements = ACHIEVEMENTS.length + SEASON_ACHIEVEMENTS.length
        return {
          constellations: state.discoveredConstellations.length,
          totalConstellations: CONSTELLATIONS.length,
          achievements: state.unlockedAchievements.length,
          totalAchievements,
          logs: state.observationLogs.length,
          seasonRewardsClaimed: state.seasonRewardsClaimed.length,
          totalSeasonRewards: Object.keys(SEASONS).length * Object.keys(SEASON_PHASES).length
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
          unlockedAchievements: [],
          seasonProgress: {
            spring: { beginner: false, intermediate: false, master: false },
            summer: { beginner: false, intermediate: false, master: false },
            autumn: { beginner: false, intermediate: false, master: false },
            winter: { beginner: false, intermediate: false, master: false }
          },
          seasonRewardsUnlocked: [],
          seasonRewardsClaimed: [],
          perfectObservations: {},
          totalObservations: {},
          seasonHistory: [],
          favoriteConstellations: [],
          familyMode: {
            enabled: false,
            currentRole: null,
            familyMembers: {
              parent: { name: '家长', avatar: '👨‍👩‍👧', xp: 0, level: 1 },
              child: { name: '孩子', avatar: '🧒', xp: 0, level: 1 }
            },
            activeTaskId: null,
            currentStepIndex: 0,
            turnRole: null,
            collaborativeCount: 0,
            turnCompleteCount: 0,
            guidedCompleteCount: 0,
            perfectStreak: 0,
            mythologyToldCount: 0,
            childIndependentCount: 0,
            parentGuidedCount: 0,
            familyDiscoveredConstellations: [],
            totalMinutes: 0,
            sessionStartTime: null,
            lastActiveDate: null,
            streakDays: 0,
            completedTasks: [],
            unlockedFamilyAchievements: [],
            quizScores: [],
            familyLog: []
          },
          nightExpedition: {
            stamina: STAMINA_CONFIG.initialStamina,
            lastStaminaUpdate: Date.now(),
            currentRun: null,
            history: [],
            totalCompleted: 0,
            highestStagesCleared: 0,
            totalPerfectStages: 0,
            totalStardustEarned: 0
          }
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
        totalMistakes: state.totalMistakes,
        seasonProgress: state.seasonProgress,
        seasonRewardsUnlocked: state.seasonRewardsUnlocked,
        seasonRewardsClaimed: state.seasonRewardsClaimed,
        perfectObservations: state.perfectObservations,
        totalObservations: state.totalObservations,
        seasonHistory: state.seasonHistory,
        favoriteConstellations: state.favoriteConstellations,
        familyMode: state.familyMode,
        nightExpedition: state.nightExpedition
      })
    }
  )
)
