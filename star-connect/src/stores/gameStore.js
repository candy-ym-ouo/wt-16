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
import {
  CHECKIN_REWARDS,
  generateDailyRecommendation,
  getZodiacByDate,
  generateLuckyMessage,
  generateLuckyStars,
  formatDateKey,
  isSameDay,
  getDaysInMonth,
} from '../data/observationCalendar'
import {
  generateQuizSet,
  QUIZ_ACHIEVEMENTS,
  getQuizAchievementById,
  REWARD_ITEMS,
  getRewardById
} from '../data/quiz'
import {
  TEAM_TASKS,
  TEAM_ACHIEVEMENTS,
  TEAM_MEMBER_TEMPLATES,
  TEAM_ROLES,
  getTeamTaskById,
  getTeamAchievementById
} from '../data/team'
import {
  ALL_SHOP_ITEMS,
  SHOP_SKINS,
  SHOP_ITEMS,
  SHOP_DECORATIONS,
  getShopItemById
} from '../data/shop'
import {
  CHALLENGE_DIFFICULTIES,
  CHALLENGE_SEASON_TIERS,
  CHALLENGE_SEASON_REWARDS,
  generateChallengeRoute,
  calculateChallengeScore,
  getSeasonTier,
  getNextTier,
  generateLeaderboard,
  getChallengeDateKey,
  getSeasonChallengeRewards
} from '../data/constellationChallenge'

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
            nightExpedition: state.nightExpedition,
            observationCalendar: state.observationCalendar,
            quiz: state.quiz
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

        set((state) => {
          const updates = {
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
          }

          if (state.team.enabled && clearedStages.length > 0) {
            updates.team = {
              ...state.team,
              teamExpeditionsCompleted: state.team.teamExpeditionsCompleted + 1,
              teamLogs: [
                {
                  type: 'expedition',
                  stagesCleared: clearedStages.length,
                  totalStages,
                  perfectCount,
                  stardust: rewards.stardust,
                  memberId: 'player',
                  memberName: '我',
                  message: `完成夜间远征：通关 ${clearedStages.length}/${totalStages} 关，获得 ${rewards.stardust} 星尘`,
                  timestamp: Date.now()
                },
                ...state.team.teamLogs
              ].slice(0, 200)
            }
          }

          return updates
        })

        get().addLog({
          type: 'expedition_complete',
          timestamp: Date.now(),
          stagesCleared: clearedStages.length,
          totalStages,
          perfectCount,
          stardustEarned: rewards.stardust
        })

        get().checkAchievements()
        if (state.team.enabled && clearedStages.length > 0) {
          get().checkTeamAchievements()
          get().checkTeamTaskProgress()
        }

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

      observationCalendar: {
        checkinRecords: {},
        checkinStreak: 0,
        lastCheckinDate: null,
        totalCheckinDays: 0,
        stardust: 0,
        badges: [],
        dailyRecommendation: null,
        dailyRecommendationDate: null,
        customLogs: {},
        zodiac: null,
      },

      getOrCreateDailyData: () => {
        const state = get()
        const todayKey = formatDateKey(new Date())
        
        let recommendation = state.observationCalendar.dailyRecommendation
        let zodiac = state.observationCalendar.zodiac
        
        if (state.observationCalendar.dailyRecommendationDate !== todayKey || !recommendation) {
          recommendation = generateDailyRecommendation(
            state.discoveredConstellations,
            state.perfectObservations,
            state.totalObservations
          )
          zodiac = getZodiacByDate(new Date())
          
          set((s) => ({
            observationCalendar: {
              ...s.observationCalendar,
              dailyRecommendation: recommendation,
              dailyRecommendationDate: todayKey,
              zodiac,
            }
          }))
        }
        
        return { recommendation, zodiac }
      },

      checkin: () => {
        const state = get()
        const today = new Date()
        const todayKey = formatDateKey(today)
        const oc = state.observationCalendar

        if (oc.checkinRecords[todayKey]?.checkedIn) {
          return { success: false, reason: 'already_checked_in' }
        }

        let newStreak = 1
        let yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const yesterdayKey = formatDateKey(yesterday)

        if (oc.checkinRecords[yesterdayKey]?.checkedIn) {
          newStreak = oc.checkinStreak + 1
        }

        const rewardsEarned = []
        let newStardust = oc.stardust

        const baseReward = 10
        newStardust += baseReward
        rewardsEarned.push({ type: 'stardust', amount: baseReward, label: '每日签到', icon: '💫' })

        Object.entries(CHECKIN_REWARDS).forEach(([key, reward]) => {
          const dayNum = parseInt(key.replace('day', ''))
          if (newStreak === dayNum) {
            if (reward.type === 'stardust') {
              newStardust += reward.amount
              rewardsEarned.push({ ...reward })
            } else if (reward.type === 'badge' && !oc.badges.includes(reward.id)) {
              rewardsEarned.push({ ...reward })
            }
          }
        })

        const newBadges = [...oc.badges]
        rewardsEarned.forEach(r => {
          if (r.type === 'badge' && !newBadges.includes(r.id)) {
            newBadges.push(r.id)
          }
        })

        const luckyZodiac = getZodiacByDate(today)
        const luckyMessage = generateLuckyMessage(luckyZodiac)
        const luckyStars = generateLuckyStars()

        const newRecord = {
          checkedIn: true,
          checkinTime: Date.now(),
          streak: newStreak,
          luckyMessage,
          luckyStars,
          zodiacId: luckyZodiac.id,
          rewards: rewardsEarned,
        }

        set((s) => ({
          observationCalendar: {
            ...s.observationCalendar,
            checkinRecords: {
              ...s.observationCalendar.checkinRecords,
              [todayKey]: newRecord,
            },
            checkinStreak: newStreak,
            lastCheckinDate: todayKey,
            totalCheckinDays: s.observationCalendar.totalCheckinDays + 1,
            stardust: newStardust,
            badges: newBadges,
          }
        }))

        get().addLog({
          type: 'checkin',
          date: todayKey,
          streak: newStreak,
          rewards: rewardsEarned,
          timestamp: Date.now(),
        })

        return {
          success: true,
          streak: newStreak,
          rewards: rewardsEarned,
          totalStardust: newStardust,
          luckyMessage,
          luckyStars,
          zodiac: luckyZodiac,
        }
      },

      getCheckinStatus: (date) => {
        const state = get()
        const d = date || new Date()
        const key = formatDateKey(d)
        const record = state.observationCalendar.checkinRecords[key]
        const todayKey = formatDateKey(new Date())

        return {
          date: key,
          checkedIn: !!record?.checkedIn,
          isToday: key === todayKey,
          record: record || null,
          canCheckin: key === todayKey && !record?.checkedIn,
        }
      },

      getStreakInfo: () => {
        const state = get()
        const oc = state.observationCalendar
        const today = new Date()
        const todayKey = formatDateKey(today)

        let currentStreak = oc.checkinStreak
        if (!oc.checkinRecords[todayKey]?.checkedIn) {
          let yesterday = new Date()
          yesterday.setDate(yesterday.getDate() - 1)
          if (!oc.checkinRecords[formatDateKey(yesterday)]?.checkedIn) {
            currentStreak = 0
          }
        }

        const milestones = Object.entries(CHECKIN_REWARDS).map(([key, reward]) => ({
          days: parseInt(key.replace('day', '')),
          ...reward,
          achieved: currentStreak >= parseInt(key.replace('day', '')),
        }))

        const nextMilestone = milestones.find(m => !m.achieved)
        const daysToNext = nextMilestone ? nextMilestone.days - currentStreak : 0

        return {
          currentStreak,
          totalDays: oc.totalCheckinDays,
          longestStreak: currentStreak,
          milestones,
          nextMilestone,
          daysToNext,
        }
      },

      addCustomLog: (date, logData) => {
        const state = get()
        const key = formatDateKey(date)
        const existingLogs = state.observationCalendar.customLogs[key] || []

        const newLog = {
          id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
          createdAt: Date.now(),
          ...logData,
        }

        set((s) => ({
          observationCalendar: {
            ...s.observationCalendar,
            customLogs: {
              ...s.observationCalendar.customLogs,
              [key]: [...existingLogs, newLog],
            },
          }
        }))

        return newLog
      },

      updateCustomLog: (date, logId, updates) => {
        const state = get()
        const key = formatDateKey(date)
        const logs = state.observationCalendar.customLogs[key] || []

        set((s) => ({
          observationCalendar: {
            ...s.observationCalendar,
            customLogs: {
              ...s.observationCalendar.customLogs,
              [key]: logs.map(log =>
                log.id === logId ? { ...log, ...updates, updatedAt: Date.now() } : log
              ),
            },
          }
        }))
      },

      deleteCustomLog: (date, logId) => {
        const state = get()
        const key = formatDateKey(date)
        const logs = state.observationCalendar.customLogs[key] || []

        set((s) => ({
          observationCalendar: {
            ...s.observationCalendar,
            customLogs: {
              ...s.observationCalendar.customLogs,
              [key]: logs.filter(log => log.id !== logId),
            },
          }
        }))
      },

      getDateLogs: (date) => {
        const state = get()
        const key = formatDateKey(date)
        const customLogs = state.observationCalendar.customLogs[key] || []
        
        const observationLogs = state.observationLogs.filter(log => {
          if (!log.timestamp) return false
          const logDate = new Date(log.timestamp)
          return formatDateKey(logDate) === key
        })

        return {
          customLogs,
          observationLogs,
          checkinRecord: state.observationCalendar.checkinRecords[key] || null,
        }
      },

      getMonthlyStats: (year, month) => {
        const state = get()
        const oc = state.observationCalendar
        const daysInMonth = getDaysInMonth(year, month)
        
        let checkinDays = 0
        let discoveryCount = 0
        let reobservationCount = 0
        let perfectCount = 0
        let totalCustomLogs = 0
        let stardustEarned = 0

        const dailyData = []

        for (let day = 1; day <= daysInMonth; day++) {
          const date = new Date(year, month, day)
          const key = formatDateKey(date)
          
          const checkinRecord = oc.checkinRecords[key]
          const dateLogs = state.getDateLogs(date)
          
          if (checkinRecord?.checkedIn) {
            checkinDays++
            stardustEarned += checkinRecord.rewards?.reduce((sum, r) => sum + (r.amount || 0), 0) || 10
          }

          const sysDiscoveries = dateLogs.observationLogs.filter(l => l.type === 'discovery').length
          const sysReobservations = dateLogs.observationLogs.filter(l => l.type === 'reobservation').length
          const sysPerfect = dateLogs.observationLogs.filter(l => l.perfect).length

          const customDiscoveries = dateLogs.customLogs.filter(l => l.type === 'discovery').length
          const customObservations = dateLogs.customLogs.filter(l => l.type === 'observation').length
          const customPerfect = dateLogs.customLogs.filter(l => l.type === 'discovery' || l.type === 'observation').filter(l => l.perfect).length

          const dayDiscoveries = sysDiscoveries + customDiscoveries
          const dayReobservations = sysReobservations + customObservations
          const dayPerfect = sysPerfect + customPerfect

          discoveryCount += dayDiscoveries
          reobservationCount += dayReobservations
          perfectCount += dayPerfect
          totalCustomLogs += dateLogs.customLogs.length

          dailyData.push({
            day,
            date: key,
            checkedIn: !!checkinRecord?.checkedIn,
            discoveries: dayDiscoveries,
            reobservations: dayReobservations,
            perfect: dayPerfect,
            customLogs: dateLogs.customLogs.length,
            hasActivity: !!checkinRecord?.checkedIn || dayDiscoveries > 0 || dayReobservations > 0 || dateLogs.customLogs.length > 0,
          })
        }

        const totalObservationDays = dailyData.filter(d => d.discoveries > 0 || d.reobservations > 0).length
        const activeDays = dailyData.filter(d => d.hasActivity).length
        const checkinRate = Math.round((checkinDays / daysInMonth) * 100)
        const activityRate = Math.round((activeDays / daysInMonth) * 100)

        const uniqueConstellationsThisMonth = new Set()
        state.observationLogs.forEach(log => {
          if (!log.timestamp || !log.constellationId) return
          const logDate = new Date(log.timestamp)
          if (logDate.getFullYear() === year && logDate.getMonth() === month) {
            uniqueConstellationsThisMonth.add(log.constellationId)
          }
        })
        Object.entries(oc.customLogs).forEach(([dateKey, logs]) => {
          const d = new Date(dateKey)
          if (d.getFullYear() !== year || d.getMonth() !== month) return
          logs.forEach(log => {
            if (log.constellationId) {
              uniqueConstellationsThisMonth.add(log.constellationId)
            }
          })
        })

        return {
          year,
          month,
          daysInMonth,
          checkinDays,
          checkinRate,
          activeDays,
          activityRate,
          observationDays: totalObservationDays,
          discoveryCount,
          reobservationCount,
          totalObservations: discoveryCount + reobservationCount,
          perfectCount,
          uniqueConstellations: uniqueConstellationsThisMonth.size,
          totalCustomLogs,
          stardustEarned,
          dailyData,
          summary: {
            bestStreak: oc.checkinStreak,
            avgObservationsPerActiveDay: activeDays > 0 
              ? Math.round(((discoveryCount + reobservationCount) / activeDays) * 10) / 10 
              : 0,
            perfectRate: (discoveryCount + reobservationCount) > 0
              ? Math.round((perfectCount / (discoveryCount + reobservationCount)) * 100)
              : 0,
          }
        }
      },

      spendStardust: (amount) => {
        const state = get()
        if (state.observationCalendar.stardust >= amount) {
          set((s) => ({
            observationCalendar: {
              ...s.observationCalendar,
              stardust: s.observationCalendar.stardust - amount,
            }
          }))
          return true
        }
        return false
      },

      addStardust: (amount, reason) => {
        set((s) => ({
          observationCalendar: {
            ...s.observationCalendar,
            stardust: s.observationCalendar.stardust + amount,
          }
        }))
        get().addLog({
          type: 'stardust',
          amount,
          reason: reason || '获得星尘',
          timestamp: Date.now(),
        })
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

            const inChallenge = state.constellationChallenge.currentChallenge?.active
            if (inChallenge) {
              const result = get().recordChallengeMistake()
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

          if (state.team.enabled) {
            get().recordTeamDiscovery(constellationId, isPerfect, 'player')
          }

          get().checkSeasonProgress()

          if (state.nightExpedition.currentRun?.active) {
            get().advanceExpeditionStage()
          }

          if (state.constellationChallenge.currentChallenge?.active) {
            get().advanceChallengeStage()
          }

          return true
        }
        return false
      },

      observationLogs: [],
      addLog: (entry) =>
        set((state) => {
          const updates = {
            observationLogs: [entry, ...state.observationLogs].slice(0, 100)
          }
          if (state.team.enabled && (entry.type === 'discovery' || entry.type === 'reobservation' || entry.type === 'note')) {
            const teamEntry = {
              type: entry.type === 'discovery' ? 'discovery' : entry.type === 'reobservation' ? 'reobservation' : 'note',
              constellationId: entry.constellationId,
              perfect: entry.perfect,
              note: entry.note,
              memberId: 'player',
              memberName: '我',
              timestamp: entry.timestamp || Date.now()
            }
            updates.team = {
              ...state.team,
              teamLogs: [teamEntry, ...state.team.teamLogs].slice(0, 200)
            }
          }
          return updates
        }),
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

        const allAchievements = [...ACHIEVEMENTS, ...SEASON_ACHIEVEMENTS, ...QUIZ_ACHIEVEMENTS]

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
            case 'quiz_complete':
              unlocked = (state.quiz?.totalCompleted || 0) >= value
              break
            case 'quiz_perfect':
              const perfectRuns = state.quiz?.history?.filter(h => h.correct === h.total && h.total >= value).length || 0
              unlocked = perfectRuns >= 1
              break
            case 'quiz_streak':
              unlocked = (state.quiz?.bestStreak || 0) >= value
              break
            case 'quiz_correct':
              unlocked = (state.quiz?.totalCorrect || 0) >= value
              break
            case 'quiz_exchange':
              unlocked = (state.quiz?.redeemedRewards?.length || 0) >= value
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
            const achievement = allAchievements.find(a => a.id === id)
            if (achievement?.reward) {
              if (achievement.reward.type === 'stardust') {
                get().addStardust(achievement.reward.amount, `成就奖励：${achievement.name}`)
              }
              if (achievement.reward.type === 'item') {
                get().addShopReward(achievement.reward.itemId, `成就奖励：${achievement.name}`)
              }
            }
            get().addLog({
              type: 'achievement',
              achievementId: id,
              reward: achievement?.reward,
              timestamp: Date.now()
            })
          })
          return newlyUnlocked
        }
        return []
      },

      showAchievementToast: null,
      setShowAchievementToast: (id) => set({ showAchievementToast: id }),

      quiz: {
        points: 0,
        totalCompleted: 0,
        totalCorrect: 0,
        totalWrong: 0,
        currentStreak: 0,
        bestStreak: 0,
        history: [],
        redeemedRewards: [],
        unlockedThemes: [],
        unlockedBadges: [],
        hints: 0,
        activeQuiz: null
      },

      startQuiz: (questionCount = 5) => {
        const state = get()
        const questions = generateQuizSet(
          state.discoveredConstellations,
          state.observationLogs,
          state.unlockedAchievements,
          questionCount
        )
        if (questions.length === 0) return null

        const activeQuiz = {
          questions,
          currentIndex: 0,
          answers: [],
          startTime: Date.now(),
          earnedPoints: 0
        }
        set((s) => ({
          quiz: { ...s.quiz, activeQuiz }
        }))
        return activeQuiz
      },

      answerQuestion: (questionId, selectedAnswer) => {
        const state = get()
        const activeQuiz = state.quiz.activeQuiz
        if (!activeQuiz) return null

        const { questions, currentIndex } = activeQuiz
        const question = questions[currentIndex]
        if (!question || question.id !== questionId) return null

        const isCorrect = selectedAnswer === question.correctAnswer
        const earnedPoints = isCorrect ? question.points : 0

        const answerRecord = {
          questionId: question.id,
          question: question.question,
          selectedAnswer,
          correctAnswer: question.correctAnswer,
          isCorrect,
          points: earnedPoints,
          type: question.type,
          constellationId: question.constellationId || null
        }

        const newAnswers = [...activeQuiz.answers, answerRecord]
        const newEarnedPoints = activeQuiz.earnedPoints + earnedPoints

        set((s) => {
          const newCurrentStreak = isCorrect ? s.quiz.currentStreak + 1 : 0
          const newBestStreak = Math.max(s.quiz.bestStreak, newCurrentStreak)
          return {
            quiz: {
              ...s.quiz,
              activeQuiz: {
                ...activeQuiz,
                currentIndex: currentIndex + 1,
                answers: newAnswers,
                earnedPoints: newEarnedPoints
              },
              currentStreak: newCurrentStreak,
              bestStreak: newBestStreak,
              totalCorrect: s.quiz.totalCorrect + (isCorrect ? 1 : 0),
              totalWrong: s.quiz.totalWrong + (isCorrect ? 0 : 1)
            }
          }
        })

        return {
          isCorrect,
          earnedPoints,
          correctAnswer: question.correctAnswer,
          explanation: question.explanation,
          isLast: currentIndex + 1 >= questions.length
        }
      },

      finishQuiz: () => {
        const state = get()
        const activeQuiz = state.quiz.activeQuiz
        if (!activeQuiz) return null

        const { questions, answers, earnedPoints, startTime } = activeQuiz
        const correctCount = answers.filter(a => a.isCorrect).length
        const totalQuestions = questions.length
        const isPerfect = correctCount === totalQuestions
        const perfectBonus = isPerfect ? totalQuestions * 10 : 0
        const totalPoints = earnedPoints + perfectBonus
        const duration = Date.now() - startTime

        const record = {
          id: `quiz_${Date.now()}`,
          questions: totalQuestions,
          correct: correctCount,
          wrong: totalQuestions - correctCount,
          accuracy: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0,
          isPerfect,
          points: totalPoints,
          perfectBonus,
          duration,
          timestamp: Date.now(),
          answers
        }

        set((s) => ({
          quiz: {
            ...s.quiz,
            points: s.quiz.points + totalPoints,
            totalCompleted: s.quiz.totalCompleted + 1,
            history: [record, ...s.quiz.history].slice(0, 100),
            activeQuiz: null
          }
        }))

        get().addLog({
          type: 'quiz_complete',
          quizId: record.id,
          correct: correctCount,
          total: totalQuestions,
          points: totalPoints,
          isPerfect,
          timestamp: Date.now()
        })

        if (isPerfect) {
          get().addLog({
            type: 'quiz_perfect',
            quizId: record.id,
            questions: totalQuestions,
            bonusPoints: perfectBonus,
            timestamp: Date.now()
          })
        }

        get().checkAchievements()
        return record
      },

      abandonQuiz: () => {
        set((s) => ({
          quiz: { ...s.quiz, activeQuiz: null }
        }))
      },

      redeemReward: (rewardId) => {
        const state = get()
        const reward = getRewardById(rewardId)
        if (!reward) return { success: false, reason: 'reward_not_found' }

        if (reward.unique && state.quiz.redeemedRewards.includes(rewardId)) {
          return { success: false, reason: 'already_redeemed' }
        }

        if (state.quiz.points < reward.cost) {
          return { success: false, reason: 'insufficient_points', needed: reward.cost, current: state.quiz.points }
        }

        set((s) => {
          const newQuiz = {
            ...s.quiz,
            points: s.quiz.points - reward.cost,
            redeemedRewards: [...s.quiz.redeemedRewards, rewardId]
          }

          if (reward.type === 'hint') {
            newQuiz.hints = s.quiz.hints + reward.amount
          }
          if (reward.type === 'theme') {
            newQuiz.unlockedThemes = [...s.quiz.unlockedThemes, rewardId]
          }
          if (reward.type === 'badge') {
            newQuiz.unlockedBadges = [...s.quiz.unlockedBadges, rewardId]
          }
          return { quiz: newQuiz }
        })

        if (reward.type === 'stamina') {
          const ne = get().nightExpedition
          set({
            nightExpedition: {
              ...ne,
              stamina: Math.min(ne.stamina + reward.amount, STAMINA_CONFIG.maxStamina),
              lastStaminaUpdate: Date.now()
            }
          })
        }

        if (reward.type === 'stamina_full') {
          const ne = get().nightExpedition
          set({
            nightExpedition: {
              ...ne,
              stamina: STAMINA_CONFIG.maxStamina,
              lastStaminaUpdate: Date.now()
            }
          })
        }

        if (reward.type === 'stardust') {
          get().addStardust(reward.amount, `问答兑换：${reward.name}`)
        }

        get().addLog({
          type: 'quiz_exchange',
          rewardId,
          rewardName: reward.name,
          cost: reward.cost,
          timestamp: Date.now()
        })

        get().checkAchievements()
        return { success: true, reward }
      },

      useHint: () => {
        const state = get()
        if (state.quiz.hints <= 0) return false
        set((s) => ({
          quiz: { ...s.quiz, hints: s.quiz.hints - 1 }
        }))
        return true
      },

      getQuizStats: () => {
        const state = get()
        const q = state.quiz
        const totalAnswered = q.totalCorrect + q.totalWrong
        return {
          points: q.points,
          totalCompleted: q.totalCompleted,
          totalCorrect: q.totalCorrect,
          totalWrong: q.totalWrong,
          totalAnswered,
          accuracy: totalAnswered > 0 ? Math.round((q.totalCorrect / totalAnswered) * 100) : 0,
          currentStreak: q.currentStreak,
          bestStreak: q.bestStreak,
          hints: q.hints,
          unlockedThemes: q.unlockedThemes,
          unlockedBadges: q.unlockedBadges,
          redeemedCount: q.redeemedRewards.length,
          averageScore: q.history.length > 0
            ? Math.round(q.history.reduce((sum, h) => sum + h.accuracy, 0) / q.history.length)
            : 0,
          perfectCount: q.history.filter(h => h.isPerfect).length
        }
      },

      team: {
        enabled: false,
        teamName: '星空探索队',
        teamLevel: 1,
        teamXP: 0,
        teamStardust: 0,
        members: [
          {
            id: 'player',
            name: '我',
            avatar: '🌟',
            role: 'leader',
            xp: 0,
            level: 1,
            joinedAt: Date.now(),
            isSelf: true,
            discoveries: []
          }
        ],
        activeTasks: [],
        completedTasks: [],
        teamDiscoveries: [],
        teamPerfectObservations: {},
        teamTotalObservations: {},
        teamLogs: [],
        unlockedTeamAchievements: [],
        teamPerfectStreak: 0,
        teamStreakDays: 0,
        lastActiveDate: null,
        teamExpeditionsCompleted: 0
      },

      setTeamEnabled: (enabled) => set((state) => {
        const newTeam = { ...state.team, enabled }
        if (enabled && !state.team.lastActiveDate) {
          newTeam.lastActiveDate = new Date().toDateString()
          newTeam.teamStreakDays = 1
        }
        return { team: newTeam }
      }),

      setTeamName: (name) => set((state) => ({
        team: { ...state.team, teamName: name }
      })),

      addTeamMember: (memberData) => {
        const member = {
          id: `member_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
          name: memberData.name || '新成员',
          avatar: memberData.avatar || '👤',
          role: memberData.role || 'rookie',
          xp: 0,
          level: 1,
          joinedAt: Date.now(),
          isSelf: false,
          discoveries: []
        }
        set((state) => ({
          team: {
            ...state.team,
            members: [...state.team.members, member],
            teamLogs: [
              {
                type: 'member_join',
                memberId: member.id,
                memberName: member.name,
                timestamp: Date.now()
              },
              ...state.team.teamLogs
            ].slice(0, 200)
          }
        }))
        get().checkTeamAchievements()
        return member
      },

      updateTeamMember: (memberId, data) => set((state) => ({
        team: {
          ...state.team,
          members: state.team.members.map(m =>
            m.id === memberId ? { ...m, ...data } : m
          )
        }
      })),

      changeMemberRole: (memberId, newRole) => {
        const role = TEAM_ROLES[newRole]
        if (!role) return false
        set((state) => ({
          team: {
            ...state.team,
            members: state.team.members.map(m =>
              m.id === memberId ? { ...m, role: newRole } : m
            )
          }
        }))
        return true
      },

      removeTeamMember: (memberId) => set((state) => ({
        team: {
          ...state.team,
          members: state.team.members.filter(m => m.id !== memberId)
        }
      })),

      addTeamXP: (amount) => set((state) => {
        const newXP = state.team.teamXP + amount
        const newLevel = Math.floor(newXP / 500) + 1
        return {
          team: {
            ...state.team,
            teamXP: newXP,
            teamLevel: newLevel
          }
        }
      }),

      addMemberXP: (memberId, amount) => set((state) => {
        const members = state.team.members.map(m => {
          if (m.id !== memberId) return m
          const newXP = m.xp + amount
          const newLevel = Math.floor(newXP / 100) + 1
          return { ...m, xp: newXP, level: newLevel }
        })
        return { team: { ...state.team, members } }
      }),

      addTeamStardust: (amount) => set((state) => ({
        team: { ...state.team, teamStardust: state.team.teamStardust + amount }
      })),

      startTeamTask: (taskId, assignedMemberId = null) => {
        const state = get()
        const task = getTeamTaskById(taskId)
        if (!task) return { success: false, error: '任务不存在' }

        if (state.team.activeTasks.some(t => t.taskId === taskId)) {
          return { success: false, error: '任务已在进行中' }
        }

        if (task.requiredRoles && task.requiredRoles.length > 0) {
          const availableRoles = state.team.members.map(m => m.role)
          const hasRequiredRole = task.requiredRoles.some(role => availableRoles.includes(role))
          if (!hasRequiredRole) {
            const roleNames = task.requiredRoles
              .map(r => TEAM_ROLES[r]?.name || r)
              .join('、')
            return {
              success: false,
              error: `需要队伍中有${roleNames}才能接取此任务`
            }
          }
        }

        set((s) => ({
          team: {
            ...s.team,
            activeTasks: [...s.team.activeTasks, {
              taskId,
              startedAt: Date.now(),
              progress: 0,
              assignedMemberId: assignedMemberId
            }]
          }
        }))

        get().addTeamLog({
          type: 'note',
          message: `接取了任务：${task.name}`,
          memberId: 'player',
          memberName: '我',
          timestamp: Date.now()
        })

        return { success: true }
      },

      completeTeamTask: (taskId) => {
        const task = getTeamTaskById(taskId)
        if (!task) return null
        const state = get()
        const activeTask = state.team.activeTasks.find(t => t.taskId === taskId)
        if (!activeTask) return null

        const reward = task.reward || {}
        const xpGain = reward.teamXP || 0
        const stardustGain = reward.stardust || 0

        set((s) => ({
          team: {
            ...s.team,
            activeTasks: s.team.activeTasks.filter(t => t.taskId !== taskId),
            completedTasks: [
              { taskId, completedAt: Date.now(), xp: xpGain, stardust: stardustGain },
              ...s.team.completedTasks
            ].slice(0, 50),
            teamXP: s.team.teamXP + xpGain,
            teamLevel: Math.floor((s.team.teamXP + xpGain) / 500) + 1,
            teamStardust: s.team.teamStardust + stardustGain,
            teamLogs: [
              {
                type: 'task_complete',
                taskId,
                taskName: task.name,
                xp: xpGain,
                stardust: stardustGain,
                timestamp: Date.now()
              },
              ...s.team.teamLogs
            ].slice(0, 200)
          }
        }))

        get().checkTeamAchievements()
        return { task, xp: xpGain, stardust: stardustGain }
      },

      recordTeamDiscovery: (constellationId, isPerfect, memberId = 'player', simulateCollaboration = true) => {
        const state = get()
        const alreadyDiscovered = state.team.teamDiscoveries.includes(constellationId)

        const newDiscoveries = alreadyDiscovered
          ? state.team.teamDiscoveries
          : [...state.team.teamDiscoveries, constellationId]

        const newPerfect = isPerfect && !alreadyDiscovered
          ? { ...state.team.teamPerfectObservations, [constellationId]: true }
          : state.team.teamPerfectObservations

        const newTotal = {
          ...state.team.teamTotalObservations,
          [constellationId]: (state.team.teamTotalObservations[constellationId] || 0) + 1
        }

        const newStreak = isPerfect ? state.team.teamPerfectStreak + 1 : 0

        let members = state.team.members.map(m => {
          if (m.id !== memberId) return m
          const discoveries = m.discoveries.includes(constellationId)
            ? m.discoveries
            : [...m.discoveries, constellationId]
          const xpGain = alreadyDiscovered ? 10 : 50
          const newXP = m.xp + xpGain
          const newLevel = Math.floor(newXP / 100) + 1
          return { ...m, discoveries, xp: newXP, level: newLevel }
        })

        const extraLogs = []
        if (simulateCollaboration && !alreadyDiscovered && state.team.members.length > 1) {
          const collaborators = state.team.members.filter(m => m.id !== memberId && m.id !== 'player')
          collaborators.forEach(collaborator => {
            const collaborationChance = collaborator.role === 'explorer' ? 0.5 :
                                       collaborator.role === 'cartographer' ? 0.4 :
                                       collaborator.role === 'recorder' ? 0.3 : 0.15
            if (Math.random() < collaborationChance) {
              const collabPerfect = Math.random() < 0.3
              members = members.map(m => {
                if (m.id !== collaborator.id) return m
                const collabDiscoveries = m.discoveries.includes(constellationId)
                  ? m.discoveries
                  : [...m.discoveries, constellationId]
                const collabXP = m.xp + (collabPerfect ? 30 : 15)
                const collabLevel = Math.floor(collabXP / 100) + 1
                return { ...m, discoveries: collabDiscoveries, xp: collabXP, level: collabLevel }
              })
              extraLogs.push({
                type: collabPerfect ? 'discovery' : 'reobservation',
                constellationId,
                perfect: collabPerfect,
                memberId: collaborator.id,
                memberName: collaborator.name,
                message: `协助观测了该星座${collabPerfect ? '，完成得很棒！' : ''}`,
                timestamp: Date.now() + Math.floor(Math.random() * 5000) + 1000
              })
            }
          })
        }

        const today = new Date().toDateString()
        let newStreakDays = state.team.teamStreakDays
        let lastActiveDate = state.team.lastActiveDate

        if (lastActiveDate !== today) {
          const yesterday = new Date()
          yesterday.setDate(yesterday.getDate() - 1)
          if (lastActiveDate === yesterday.toDateString()) {
            newStreakDays = state.team.teamStreakDays + 1
          } else {
            newStreakDays = 1
          }
          lastActiveDate = today
        }

        const mainLog = {
          type: alreadyDiscovered ? 'reobservation' : 'discovery',
          constellationId,
          perfect: isPerfect,
          memberId,
          memberName: members.find(m => m.id === memberId)?.name || '未知',
          timestamp: Date.now()
        }

        const allLogs = [...extraLogs, mainLog].sort((a, b) => b.timestamp - a.timestamp)

        set((s) => ({
          team: {
            ...s.team,
            teamDiscoveries: newDiscoveries,
            teamPerfectObservations: newPerfect,
            teamTotalObservations: newTotal,
            teamPerfectStreak: newStreak,
            teamStreakDays: newStreakDays,
            lastActiveDate,
            members,
            teamLogs: [
              ...allLogs,
              ...s.team.teamLogs
            ].slice(0, 200)
          }
        }))

        get().checkTeamAchievements()
        get().checkTeamTaskProgress()
      },

      checkTeamTaskProgress: () => {
        const state = get()
        const team = state.team
        const newlyCompleted = []

        team.activeTasks.forEach((activeTask) => {
          const task = getTeamTaskById(activeTask.taskId)
          if (!task) return

          const { type, value } = task.target
          let progress = 0
          let completed = false

          switch (type) {
            case 'team_discoveries':
              progress = team.teamDiscoveries.length
              completed = progress >= value
              break
            case 'daily_discoveries': {
              const today = new Date().toDateString()
              const todayDiscoveries = team.teamLogs.filter(log =>
                log.type === 'discovery' &&
                new Date(log.timestamp).toDateString() === today
              ).length
              progress = todayDiscoveries
              completed = progress >= value
              break
            }
            case 'perfect_streak':
              progress = team.teamPerfectStreak
              completed = progress >= value
              break
            case 'season_complete': {
              const seasonConstellations = getSeasonConstellations(value)
              const discovered = seasonConstellations.filter(id =>
                team.teamDiscoveries.includes(id)
              ).length
              progress = discovered
              completed = discovered >= seasonConstellations.length
              break
            }
            case 'all_seasons': {
              const allSeasonsComplete = Object.keys(SEASONS).every(seasonId => {
                const seasonConstellations = getSeasonConstellations(seasonId)
                return seasonConstellations.every(id => team.teamDiscoveries.includes(id))
              })
              completed = allSeasonsComplete
              progress = allSeasonsComplete ? 1 : 0
              break
            }
            case 'team_logs':
              progress = team.teamLogs.length
              completed = progress >= value
              break
            case 'team_expeditions':
              progress = team.teamExpeditionsCompleted
              completed = progress >= value
              break
            case 'all_members_level':
              completed = team.members.every(m => m.level >= value)
              progress = team.members.filter(m => m.level >= value).length
              break
            case 'team_streak':
              progress = team.teamStreakDays
              completed = progress >= value
              break
          }

          if (completed) {
            newlyCompleted.push(activeTask.taskId)
          }
        })

        newlyCompleted.forEach(taskId => {
          get().completeTeamTask(taskId)
        })

        return newlyCompleted
      },

      addTeamLog: (entry) => set((state) => ({
        team: {
          ...state.team,
          teamLogs: [entry, ...state.team.teamLogs].slice(0, 200)
        }
      })),

      checkTeamAchievements: () => {
        const state = get()
        const team = state.team
        const newlyUnlocked = []

        TEAM_ACHIEVEMENTS.forEach((achievement) => {
          if (team.unlockedTeamAchievements.includes(achievement.id)) return

          const { type, value } = achievement.condition
          let unlocked = false

          switch (type) {
            case 'team_discoveries':
              unlocked = team.teamDiscoveries.length >= value
              break
            case 'daily_discoveries': {
              const today = new Date().toDateString()
              const todayDiscoveries = team.teamLogs.filter(log =>
                log.type === 'discovery' &&
                new Date(log.timestamp).toDateString() === today
              ).length
              unlocked = todayDiscoveries >= value
              break
            }
            case 'perfect_streak':
              unlocked = team.teamPerfectStreak >= value
              break
            case 'season_complete': {
              const seasonConstellations = getSeasonConstellations(value)
              const discovered = seasonConstellations.filter(id =>
                team.teamDiscoveries.includes(id)
              ).length
              unlocked = discovered >= seasonConstellations.length
              break
            }
            case 'all_seasons': {
              const allComplete = Object.keys(SEASONS).every(seasonId => {
                const seasonConstellations = getSeasonConstellations(seasonId)
                return seasonConstellations.every(id => team.teamDiscoveries.includes(id))
              })
              unlocked = allComplete
              break
            }
            case 'team_logs':
              unlocked = team.teamLogs.length >= value
              break
            case 'team_expeditions':
              unlocked = team.teamExpeditionsCompleted >= value
              break
            case 'all_members_level':
              unlocked = team.members.every(m => m.level >= value)
              break
            case 'team_streak':
              unlocked = team.teamStreakDays >= value
              break
            case 'team_discover_all':
              unlocked = team.teamDiscoveries.length >= value
              break
          }

          if (unlocked) {
            newlyUnlocked.push(achievement.id)
          }
        })

        if (newlyUnlocked.length > 0) {
          set((s) => ({
            team: {
              ...s.team,
              unlockedTeamAchievements: [
                ...s.team.unlockedTeamAchievements,
                ...newlyUnlocked
              ]
            }
          }))

          newlyUnlocked.forEach((id) => {
            const achievement = getTeamAchievementById(id)
            if (achievement) {
              get().addTeamLog({
                type: 'achievement',
                achievementId: id,
                achievementName: achievement.name,
                icon: achievement.icon,
                timestamp: Date.now()
              })
            }
          })
        }

        return newlyUnlocked
      },

      getTeamStats: () => {
        const state = get()
        const team = state.team
        return {
          teamName: team.teamName,
          teamLevel: team.teamLevel,
          teamXP: team.teamXP,
          teamStardust: team.teamStardust,
          memberCount: team.members.length,
          discoveries: team.teamDiscoveries.length,
          totalObservations: Object.keys(team.teamTotalObservations).reduce(
            (sum, key) => sum + (team.teamTotalObservations[key] || 0), 0
          ),
          perfectCount: Object.keys(team.teamPerfectObservations).length,
          completedTasks: team.completedTasks.length,
          totalTasks: TEAM_TASKS.length,
          achievements: team.unlockedTeamAchievements.length,
          totalAchievements: TEAM_ACHIEVEMENTS.length,
          streakDays: team.teamStreakDays,
          perfectStreak: team.teamPerfectStreak,
          logCount: team.teamLogs.length,
          expeditions: team.teamExpeditionsCompleted
        }
      },

      getTeamMemberStats: (memberId) => {
        const state = get()
        const member = state.team.members.find(m => m.id === memberId)
        if (!member) return null
        return {
          ...member,
          discoveryCount: member.discoveries.length,
          xpToNextLevel: (member.level * 100) - member.xp
        }
      },

      getTeamTaskProgress: (taskId) => {
        const state = get()
        const team = state.team
        const task = getTeamTaskById(taskId)
        if (!task) return null

        const { type, value: initialValue } = task.target
        let current = 0
        let target = initialValue

        switch (type) {
          case 'team_discoveries':
            current = team.teamDiscoveries.length
            break
          case 'daily_discoveries': {
            const today = new Date().toDateString()
            current = team.teamLogs.filter(log =>
              log.type === 'discovery' &&
              new Date(log.timestamp).toDateString() === today
            ).length
            break
          }
          case 'perfect_streak':
            current = team.teamPerfectStreak
            break
          case 'season_complete': {
            const seasonConstellations = getSeasonConstellations(initialValue)
            current = seasonConstellations.filter(id =>
              team.teamDiscoveries.includes(id)
            ).length
            target = seasonConstellations.length
            break
          }
          case 'all_seasons': {
            let completed = 0
            const total = Object.keys(SEASONS).length
            Object.keys(SEASONS).forEach(seasonId => {
              const seasonConstellations = getSeasonConstellations(seasonId)
              if (seasonConstellations.every(id => team.teamDiscoveries.includes(id))) {
                completed++
              }
            })
            current = completed
            target = total
            break
          }
          case 'team_logs':
            current = team.teamLogs.length
            break
          case 'team_expeditions':
            current = team.teamExpeditionsCompleted
            break
          case 'all_members_level':
            current = team.members.filter(m => m.level >= initialValue).length
            target = team.members.length
            break
          case 'team_streak':
            current = team.teamStreakDays
            break
          case 'team_discover_all':
            current = team.teamDiscoveries.length
            break
        }

        const percentage = target > 0 ? Math.min(100, Math.round((current / target) * 100)) : 0
        const isActive = team.activeTasks.some(t => t.taskId === taskId)
        const isCompleted = team.completedTasks.some(t => t.taskId === taskId)

        return {
          task,
          current,
          target,
          percentage,
          isActive,
          isCompleted
        }
      },

      shop: {
        inventory: {},
        unlockedSkins: ['skin_default'],
        unlockedDecorations: [],
        currentSkin: 'skin_default',
        activeDecorations: [],
        purchaseHistory: [],
        hints: 0,
        perfectCharms: 0,
        doubleStardustUntil: 0
      },

      constellationChallenge: {
        dailyAttempts: {},
        lastAttemptDate: null,
        bestScores: { novice: 0, elite: 0, master: 0 },
        seasonScores: {},
        records: [],
        seasonRewardsClaimed: [],
        currentChallenge: null
      },

      syncChallengeDailyAttempts: () => {
        const state = get()
        const todayKey = getChallengeDateKey()
        if (state.constellationChallenge.lastAttemptDate === todayKey) return

        set((s) => ({
          constellationChallenge: {
            ...s.constellationChallenge,
            dailyAttempts: {},
            lastAttemptDate: todayKey
          }
        }))
      },

      startChallenge: (difficultyId) => {
        const state = get()
        get().syncChallengeDailyAttempts()
        const synced = get().constellationChallenge
        const config = CHALLENGE_DIFFICULTIES[difficultyId]
        if (!config) return { success: false, reason: 'invalid_difficulty' }

        const todayAttempts = synced.dailyAttempts[difficultyId] || 0
        if (todayAttempts >= config.dailyAttempts) {
          return { success: false, reason: 'no_attempts' }
        }

        const route = generateChallengeRoute(difficultyId)
        if (route.length === 0) return { success: false, reason: 'no_constellations' }

        const firstStage = route[0]

        set((s) => ({
          constellationChallenge: {
            ...s.constellationChallenge,
            dailyAttempts: {
              ...s.constellationChallenge.dailyAttempts,
              [difficultyId]: (s.constellationChallenge.dailyAttempts[difficultyId] || 0) + 1
            },
            currentChallenge: {
              difficultyId,
              route,
              stageIndex: 0,
              mistakesInStage: 0,
              stageStartTime: Date.now(),
              results: [],
              active: true
            }
          },
          currentTargetConstellation: firstStage.constellationId,
          connectionPath: [],
          mistakes: 0,
          perfectRun: true
        }))

        return { success: true, route, difficultyId }
      },

      advanceChallengeStage: () => {
        const state = get()
        const cc = state.constellationChallenge
        const challenge = cc.currentChallenge
        if (!challenge || !challenge.active) return null

        const currentStage = challenge.route[challenge.stageIndex]
        const timeUsed = (Date.now() - challenge.stageStartTime) / 1000
        const isPerfect = challenge.mistakesInStage === 0
        const config = CHALLENGE_DIFFICULTIES[challenge.difficultyId]

        const stageResult = {
          constellationId: currentStage.constellationId,
          completed: true,
          perfect: isPerfect,
          mistakes: challenge.mistakesInStage,
          timeUsed: Math.round(timeUsed * 10) / 10
        }

        const newResults = [...challenge.results, stageResult]
        const nextIndex = challenge.stageIndex + 1

        if (nextIndex >= challenge.route.length) {
          return get().completeChallenge(newResults)
        }

        const nextStage = challenge.route[nextIndex]

        set((s) => ({
          constellationChallenge: {
            ...s.constellationChallenge,
            currentChallenge: {
              ...s.constellationChallenge.currentChallenge,
              stageIndex: nextIndex,
              mistakesInStage: 0,
              stageStartTime: Date.now(),
              results: newResults
            }
          },
          currentTargetConstellation: nextStage.constellationId,
          connectionPath: [],
          mistakes: 0,
          perfectRun: true
        }))

        return { nextStage, stageIndex: nextIndex }
      },

      failChallengeStage: () => {
        const state = get()
        const cc = state.constellationChallenge
        const challenge = cc.currentChallenge
        if (!challenge || !challenge.active) return null

        const timeUsed = (Date.now() - challenge.stageStartTime) / 1000

        const stageResult = {
          constellationId: challenge.route[challenge.stageIndex].constellationId,
          completed: false,
          perfect: false,
          mistakes: challenge.mistakesInStage,
          timeUsed: Math.round(timeUsed * 10) / 10
        }

        const newResults = [...challenge.results, stageResult]
        return get().completeChallenge(newResults)
      },

      recordChallengeMistake: () => {
        const state = get()
        const cc = state.constellationChallenge
        const challenge = cc.currentChallenge
        if (!challenge || !challenge.active) return 'no_challenge'

        const currentStage = challenge.route[challenge.stageIndex]
        const newMistakes = challenge.mistakesInStage + 1

        if (newMistakes > currentStage.allowedMistakes) {
          get().failChallengeStage()
          return 'failed'
        }

        set((s) => ({
          constellationChallenge: {
            ...s.constellationChallenge,
            currentChallenge: {
              ...s.constellationChallenge.currentChallenge,
              mistakesInStage: newMistakes
            }
          }
        }))

        return 'continue'
      },

      completeChallenge: (results) => {
        const state = get()
        const cc = state.constellationChallenge
        const challenge = cc.currentChallenge
        if (!challenge) return null

        const score = calculateChallengeScore(challenge.difficultyId, results)
        const seasonId = getCurrentSeason()
        const config = CHALLENGE_DIFFICULTIES[challenge.difficultyId]

        const record = {
          id: `ch_${Date.now()}`,
          difficultyId: challenge.difficultyId,
          score,
          results,
          completedStages: results.filter(r => r.completed).length,
          totalStages: challenge.route.length,
          perfectStages: results.filter(r => r.perfect).length,
          timestamp: Date.now()
        }

        set((s) => {
          const prevBest = s.constellationChallenge.bestScores[challenge.difficultyId] || 0
          const newBestScores = { ...s.constellationChallenge.bestScores }
          if (score > prevBest) {
            newBestScores[challenge.difficultyId] = score
          }

          const prevSeasonScore = s.constellationChallenge.seasonScores[seasonId] || 0
          const newSeasonScores = {
            ...s.constellationChallenge.seasonScores,
            [seasonId]: prevSeasonScore + score
          }

          return {
            constellationChallenge: {
              ...s.constellationChallenge,
              currentChallenge: null,
              bestScores: newBestScores,
              seasonScores: newSeasonScores,
              records: [record, ...s.constellationChallenge.records].slice(0, 100)
            },
            currentTargetConstellation: null,
            connectionPath: [],
            mistakes: 0
          }
        })

        get().addStardust(Math.floor(score / 10), `挑战赛奖励`)
        get().addLog({
          type: 'challenge_complete',
          difficultyId: challenge.difficultyId,
          score,
          completedStages: record.completedStages,
          totalStages: record.totalStages,
          timestamp: Date.now()
        })
        get().checkAchievements()

        return record
      },

      abandonChallenge: () => {
        const state = get()
        const cc = state.constellationChallenge
        const challenge = cc.currentChallenge
        if (!challenge || !challenge.active) return

        if (challenge.results.length > 0) {
          get().completeChallenge(challenge.results)
        } else {
          set((s) => ({
            constellationChallenge: {
              ...s.constellationChallenge,
              currentChallenge: null
            },
            currentTargetConstellation: null,
            connectionPath: [],
            mistakes: 0
          }))
        }
      },

      claimChallengeSeasonReward: (rewardId) => {
        const state = get()
        if (state.constellationChallenge.seasonRewardsClaimed.includes(rewardId)) {
          return false
        }

        let found = false
        Object.values(CHALLENGE_SEASON_REWARDS).forEach(tiers => {
          Object.values(tiers).forEach(reward => {
            if (reward.id === rewardId) found = true
          })
        })
        if (!found) return false

        const seasonId = getCurrentSeason()
        const seasonScore = state.constellationChallenge.seasonScores[seasonId] || 0
        const reward = Object.values(CHALLENGE_SEASON_REWARDS[seasonId] || {}).find(r => r.id === rewardId)
        if (!reward) return false

        const tier = Object.values(CHALLENGE_SEASON_TIERS).find(t => t.name === Object.keys(CHALLENGE_SEASON_TIERS).find(k => {
          const t = CHALLENGE_SEASON_TIERS[k]
          return CHALLENGE_SEASON_REWARDS[seasonId]?.[k]?.id === rewardId
        }))
        const tierKey = Object.keys(CHALLENGE_SEASON_REWARDS[seasonId] || {}).find(k => CHALLENGE_SEASON_REWARDS[seasonId][k]?.id === rewardId)
        const requiredTier = CHALLENGE_SEASON_TIERS[tierKey]
        if (!requiredTier || seasonScore < requiredTier.minScore) return false

        set((s) => ({
          constellationChallenge: {
            ...s.constellationChallenge,
            seasonRewardsClaimed: [...s.constellationChallenge.seasonRewardsClaimed, rewardId]
          }
        }))

        if (reward.stardust) {
          get().addStardust(reward.stardust, `挑战赛段位奖励：${reward.name}`)
        }

        return true
      },

      getChallengeStats: () => {
        const state = get()
        get().syncChallengeDailyAttempts()
        const synced = get().constellationChallenge
        const seasonId = getCurrentSeason()
        const seasonScore = synced.seasonScores[seasonId] || 0
        const currentTier = getSeasonTier(seasonScore)
        const nextTier = getNextTier(seasonScore)

        const totalChallenges = synced.records.length
        const totalScore = synced.records.reduce((sum, r) => sum + r.score, 0)
        const perfectStages = synced.records.reduce((sum, r) => sum + r.perfectStages, 0)

        return {
          bestScores: synced.bestScores,
          seasonScore,
          currentTier,
          nextTier,
          totalChallenges,
          totalScore,
          perfectStages,
          dailyAttempts: synced.dailyAttempts,
          records: synced.records.slice(0, 20),
          seasonRewardsClaimed: synced.seasonRewardsClaimed
        }
      },

      getChallengeLeaderboard: (difficultyId) => {
        const state = get()
        const bestScore = state.constellationChallenge.bestScores[difficultyId] || 0
        return generateLeaderboard(difficultyId, bestScore)
      },

      getChallengeRemainingAttempts: (difficultyId) => {
        get().syncChallengeDailyAttempts()
        const synced = get().constellationChallenge
        const config = CHALLENGE_DIFFICULTIES[difficultyId]
        if (!config) return 0
        const used = synced.dailyAttempts[difficultyId] || 0
        return Math.max(0, config.dailyAttempts - used)
      },

      buyShopItem: (itemId) => {
        const state = get()
        const item = getShopItemById(itemId)
        if (!item) return { success: false, reason: 'item_not_found' }

        const oc = state.observationCalendar
        if (item.priceType === 'stardust' && oc.stardust < item.price) {
          return { success: false, reason: 'not_enough_stardust' }
        }

        if (item.type === 'skin') {
          if (state.shop.unlockedSkins.includes(itemId)) {
            return { success: false, reason: 'already_owned' }
          }
        }
        if (item.type === 'decoration') {
          if (state.shop.unlockedDecorations.includes(itemId)) {
            return { success: false, reason: 'already_owned' }
          }
        }

        if (item.type === 'consumable') {
          const currentCount = state.shop.inventory[itemId] || 0
          if (currentCount >= item.maxStack) {
            return { success: false, reason: 'max_stack_reached' }
          }
        }

        set((s) => {
          const newShop = { ...s.shop }
          const newOC = { ...s.observationCalendar }

          if (item.priceType === 'stardust') {
            newOC.stardust -= item.price
          }

          if (item.type === 'skin') {
            newShop.unlockedSkins = [...newShop.unlockedSkins, itemId]
          } else if (item.type === 'decoration') {
            newShop.unlockedDecorations = [...newShop.unlockedDecorations, itemId]
          } else if (item.type === 'consumable') {
            newShop.inventory = {
              ...newShop.inventory,
              [itemId]: (newShop.inventory[itemId] || 0) + 1
            }
            if (item.effect?.type === 'hint') {
              newShop.hints = newShop.hints + 1
            }
            if (item.effect?.type === 'perfect_charm') {
              newShop.perfectCharms = newShop.perfectCharms + 1
            }
          }

          newShop.purchaseHistory = [
            { itemId, price: item.price, timestamp: Date.now() },
            ...newShop.purchaseHistory
          ].slice(0, 50)

          return {
            shop: newShop,
            observationCalendar: newOC
          }
        })

        get().addLog({
          type: 'shop_purchase',
          itemId,
          itemName: item.name,
          price: item.price,
          timestamp: Date.now()
        })

        return { success: true, item }
      },

      useShopItem: (itemId) => {
        const state = get()
        const item = getShopItemById(itemId)
        if (!item) return { success: false, reason: 'item_not_found' }
        if (item.type !== 'consumable') return { success: false, reason: 'not_consumable' }

        const count = state.shop.inventory[itemId] || 0
        if (count <= 0) return { success: false, reason: 'not_enough' }

        let result = { success: true }

        if (item.effect?.type === 'stardust') {
          get().addStardust(item.effect.amount, `使用${item.name}`)
        }
        if (item.effect?.type === 'double_stardust') {
          const until = Date.now() + item.effect.duration
          set((s) => ({
            shop: {
              ...s.shop,
              doubleStardustUntil: Math.max(s.shop.doubleStardustUntil, Date.now()) + item.effect.duration
            }
          }))
          result.effect = { type: 'double_stardust', until }
        }

        set((s) => {
          const newShop = { ...s.shop }
          const newCount = (newShop.inventory[itemId] || 0) - 1
          if (newCount <= 0) {
            delete newShop.inventory[itemId]
          } else {
            newShop.inventory = { ...newShop.inventory, [itemId]: newCount }
          }

          if (item.effect?.type === 'hint') {
            newShop.hints = Math.max(0, newShop.hints - 1)
          }
          if (item.effect?.type === 'perfect_charm') {
            newShop.perfectCharms = Math.max(0, newShop.perfectCharms - 1)
          }

          return { shop: newShop }
        })

        get().addLog({
          type: 'shop_use',
          itemId,
          itemName: item.name,
          timestamp: Date.now()
        })

        return result
      },

      setCurrentSkin: (skinId) => {
        const state = get()
        if (!state.shop.unlockedSkins.includes(skinId)) return false
        set((s) => ({
          shop: { ...s.shop, currentSkin: skinId }
        }))
        return true
      },

      toggleDecoration: (decoId) => {
        const state = get()
        if (!state.shop.unlockedDecorations.includes(decoId)) return false

        const isActive = state.shop.activeDecorations.includes(decoId)
        set((s) => ({
          shop: {
            ...s.shop,
            activeDecorations: isActive
              ? s.shop.activeDecorations.filter(id => id !== decoId)
              : [...s.shop.activeDecorations, decoId]
          }
        }))
        return true
      },

      getShopInventory: () => {
        const state = get()
        return state.shop.inventory
      },

      getCurrentSkin: () => {
        const state = get()
        return SHOP_SKINS.find(s => s.id === state.shop.currentSkin) || SHOP_SKINS[0]
      },

      getShopProgress: () => {
        const state = get()
        const totalSkins = SHOP_SKINS.length
        const unlockedSkins = state.shop.unlockedSkins.length
        const totalDecorations = SHOP_DECORATIONS.length
        const unlockedDecorations = state.shop.unlockedDecorations.length
        const totalItems = SHOP_ITEMS.length
        const ownedItems = Object.keys(state.shop.inventory).length

        return {
          totalSkins,
          unlockedSkins,
          totalDecorations,
          unlockedDecorations,
          totalItems,
          ownedItems,
          stardust: state.observationCalendar.stardust
        }
      },

      addShopReward: (itemId, reason) => {
        const item = getShopItemById(itemId)
        if (!item) return false

        set((s) => {
          const newShop = { ...s.shop }

          if (item.type === 'skin') {
            if (!newShop.unlockedSkins.includes(itemId)) {
              newShop.unlockedSkins = [...newShop.unlockedSkins, itemId]
            }
          } else if (item.type === 'decoration') {
            if (!newShop.unlockedDecorations.includes(itemId)) {
              newShop.unlockedDecorations = [...newShop.unlockedDecorations, itemId]
            }
          } else if (item.type === 'consumable') {
            const currentCount = newShop.inventory[itemId] || 0
            if (currentCount < item.maxStack) {
              newShop.inventory = {
                ...newShop.inventory,
                [itemId]: currentCount + 1
              }
              if (item.effect?.type === 'hint') {
                newShop.hints = newShop.hints + 1
              }
              if (item.effect?.type === 'perfect_charm') {
                newShop.perfectCharms = newShop.perfectCharms + 1
              }
            }
          }

          return { shop: newShop }
        })

        get().addLog({
          type: 'shop_reward',
          itemId,
          itemName: item.name,
          reason: reason || '奖励',
          timestamp: Date.now()
        })

        return true
      },

      useHint: () => {
        const state = get()
        if (state.shop.hints <= 0) return false
        set((s) => ({
          shop: { ...s.shop, hints: s.shop.hints - 1 }
        }))
        return true
      },

      usePerfectCharm: () => {
        const state = get()
        if (state.shop.perfectCharms <= 0) return false
        set((s) => ({
          shop: { ...s.shop, perfectCharms: s.shop.perfectCharms - 1 }
        }))
        return true
      },

      isDoubleStardustActive: () => {
        const state = get()
        return state.shop.doubleStardustUntil > Date.now()
      },

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
        const totalAchievements = ACHIEVEMENTS.length + SEASON_ACHIEVEMENTS.length + QUIZ_ACHIEVEMENTS.length
        return {
          constellations: state.discoveredConstellations.length,
          totalConstellations: CONSTELLATIONS.length,
          achievements: state.unlockedAchievements.length,
          totalAchievements,
          logs: state.observationLogs.length,
          seasonRewardsClaimed: state.seasonRewardsClaimed.length,
          totalSeasonRewards: Object.keys(SEASONS).length * Object.keys(SEASON_PHASES).length,
          quizPoints: state.quiz?.points || 0,
          quizCompleted: state.quiz?.totalCompleted || 0,
          quizCorrect: state.quiz?.totalCorrect || 0
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
          },
          observationCalendar: {
            checkinRecords: {},
            checkinStreak: 0,
            lastCheckinDate: null,
            totalCheckinDays: 0,
            stardust: 0,
            badges: [],
            dailyRecommendation: null,
            dailyRecommendationDate: null,
            customLogs: {},
            zodiac: null,
          },
          quiz: {
            points: 0,
            totalCompleted: 0,
            totalCorrect: 0,
            totalWrong: 0,
            currentStreak: 0,
            bestStreak: 0,
            history: [],
            redeemedRewards: [],
            unlockedThemes: [],
            unlockedBadges: [],
            hints: 0,
            activeQuiz: null
          },
          team: {
            enabled: false,
            teamName: '星空探索队',
            teamLevel: 1,
            teamXP: 0,
            teamStardust: 0,
            members: [
              {
                id: 'player',
                name: '我',
                avatar: '🌟',
                role: 'leader',
                xp: 0,
                level: 1,
                joinedAt: Date.now(),
                isSelf: true,
                discoveries: []
              }
            ],
            activeTasks: [],
            completedTasks: [],
            teamDiscoveries: [],
            teamPerfectObservations: {},
            teamTotalObservations: {},
            teamLogs: [],
            unlockedTeamAchievements: [],
            teamPerfectStreak: 0,
            teamStreakDays: 0,
            lastActiveDate: null,
            teamExpeditionsCompleted: 0
          },
          shop: {
            inventory: {},
            unlockedSkins: ['skin_default'],
            unlockedDecorations: [],
            currentSkin: 'skin_default',
            activeDecorations: [],
            purchaseHistory: [],
            hints: 0,
            perfectCharms: 0,
            doubleStardustUntil: 0
          },
          constellationChallenge: {
            dailyAttempts: {},
            lastAttemptDate: null,
            bestScores: { novice: 0, elite: 0, master: 0 },
            seasonScores: {},
            records: [],
            seasonRewardsClaimed: [],
            currentChallenge: null
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
        nightExpedition: state.nightExpedition,
        observationCalendar: state.observationCalendar,
        quiz: state.quiz,
        team: state.team,
        shop: state.shop,
        constellationChallenge: state.constellationChallenge
      })
    }
  )
)
