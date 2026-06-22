import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { ACHIEVEMENTS } from '../data/achievements'
import { DEFAULT_SETTINGS, STORAGE_KEYS, SAVE_SLOT_CONFIG, DEFAULT_SAVE_SLOT } from '../data/constants'
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
  INITIAL_GALLERY_PHOTOS,
  getGalleryStats,
  filterGalleryPhotos,
  getPhotoById,
  toggleFeatured,
  addPhoto,
  updatePhoto,
  deletePhoto
} from '../data/starGallery'
import {
  TUTORIAL_STEPS,
  ADVANCED_TASKS,
  TUTORIAL_REWARDS,
  TUTORIAL_PHASES,
  TUTORIAL_MILESTONES,
  CONTEXTUAL_HINTS,
  getTutorialStepById,
  getAdvancedTaskById,
  calculateTutorialProgress,
  getErrorHint,
  getPhaseById,
  getPhaseForStep,
  getMilestoneById,
  getContextualHintById,
  calculatePhaseProgress,
  getCurrentPhase,
  getAllPhaseProgress
} from '../data/tutorial'
import {
  generateRoute,
  calculateRouteProgress,
  isRoutePerfect,
  getRouteStats,
  ROUTE_ACHIEVEMENTS,
  getRouteAchievementById,
  DIFFICULTY_PREFERENCE
} from '../data/starRoute'
import {
  STORY_ARCS,
  FINAL_CHAPTER,
  getChapter,
  getSeasonForConstellation,
  isSeasonComplete,
  isAllSeasonsComplete,
  getChapterCount
} from '../data/storyChapters'
import {
  generateReport,
  exportReportAsText,
  shareReport,
  REPORT_TYPES
} from '../data/observationReport'
import {
  RESEARCH_TOPICS,
  RESEARCH_MATERIALS,
  RESEARCH_EXAMS,
  RESEARCHER_RANKS,
  getTopicById,
  getMaterialById,
  getExamById,
  getRankById,
  calculateRank,
  getNextRank,
  getProgressForObjective,
  isMaterialUnlocked,
  checkExamAnswer
} from '../data/constellationResearch'
import {
  DAILY_ACHIEVEMENTS,
  generateDailyCommissions,
  getDailyCommissionProgress,
  getDailyAchievementById,
  COMMISSION_DIFFICULTY
} from '../data/dailyCommissions'
import {
  LOG_TAG_CATEGORIES,
  LOG_TYPES,
  TIME_RANGES,
  getLogTags,
  getAllTags,
  getTagById,
  getCategoryByTagId
} from '../data/logTags'

let autoSaveEnabled = true
let currentSaveId = (() => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_SAVE_ID)
    if (raw) return JSON.parse(raw)
  } catch (e) {}
  return 'default'
})()

const getSaveDataKey = (saveId) => `${STORAGE_KEYS.SAVE_DATA_PREFIX}${saveId}`

const loadSaveSlots = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SAVE_SLOTS)
    if (raw) {
      return JSON.parse(raw)
    }
  } catch (e) {}
  return null
}

const saveSaveSlots = (slots) => {
  try {
    localStorage.setItem(STORAGE_KEYS.SAVE_SLOTS, JSON.stringify(slots))
  } catch (e) {
    console.error('Failed to save save slots:', e)
  }
}

const loadCurrentSaveId = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_SAVE_ID)
    if (raw) {
      return JSON.parse(raw)
    }
  } catch (e) {}
  return 'default'
}

const saveCurrentSaveId = (saveId) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_SAVE_ID, JSON.stringify(saveId))
  } catch (e) {
    console.error('Failed to save current save id:', e)
  }
}

const loadSaveData = (saveId) => {
  try {
    const raw = localStorage.getItem(getSaveDataKey(saveId))
    if (raw) {
      return JSON.parse(raw)
    }
  } catch (e) {}
  return null
}

const saveSaveData = (saveId, data) => {
  try {
    localStorage.setItem(getSaveDataKey(saveId), JSON.stringify(data))
  } catch (e) {
    console.error('Failed to save save data:', e)
  }
}

const deleteSaveData = (saveId) => {
  try {
    localStorage.removeItem(getSaveDataKey(saveId))
  } catch (e) {
    console.error('Failed to delete save data:', e)
  }
}

const generateSavePreview = (state) => {
  const preview = {}
  SAVE_SLOT_CONFIG.PREVIEW_DATA_KEYS.forEach(key => {
    if (key === 'observationCalendar') {
      preview[key] = {
        stardust: state.observationCalendar?.stardust || 0,
        totalCheckinDays: state.observationCalendar?.totalCheckinDays || 0
      }
    } else if (key === 'discoveredConstellations') {
      preview[key] = state[key]?.length || 0
    } else if (key === 'unlockedAchievements') {
      preview[key] = state[key]?.length || 0
    } else if (key === 'observationLogs') {
      preview[key] = state[key]?.length || 0
    } else if (key === 'totalObservations') {
      preview[key] = Object.keys(state[key] || {}).length
    }
  })
  preview.lastSavedAt = Date.now()
  return preview
}

const conditionalStorage = {
  ...createJSONStorage(() => localStorage),
  setItem: (name, value) => {
    if (autoSaveEnabled) {
      localStorage.setItem(name, value)
      saveSaveData(currentSaveId, value)
    }
  },
  getItem: (name) => {
    if (name === STORAGE_KEYS.PROGRESS) {
      const saveData = loadSaveData(currentSaveId)
      if (saveData) {
        try {
          const parsed = JSON.parse(saveData)
          if (parsed.state?.settings?.autoSave !== undefined) {
            autoSaveEnabled = parsed.state.settings.autoSave
          }
        } catch (e) {}
        return saveData
      }
    }
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

      saveSlots: [],
      currentSaveId: 'default',

      initSaveSystem: () => {
        const savedSlots = loadSaveSlots()
        const savedCurrentId = loadCurrentSaveId()
        
        if (savedSlots && savedSlots.length > 0) {
          currentSaveId = savedCurrentId
          
          const saveData = loadSaveData(savedCurrentId)
          let restoredState = null
          
          if (saveData) {
            try {
              const parsed = typeof saveData === 'string' ? JSON.parse(saveData) : saveData
              if (parsed.state) {
                restoredState = parsed.state
                if (restoredState.settings?.autoSave !== undefined) {
                  autoSaveEnabled = restoredState.settings.autoSave
                }
              }
            } catch (e) {}
          }
          
          if (restoredState) {
            set({
              ...restoredState,
              saveSlots: savedSlots,
              currentSaveId: savedCurrentId
            })
          } else {
            set({
              saveSlots: savedSlots,
              currentSaveId: savedCurrentId
            })
          }
        } else {
          const existingData = localStorage.getItem(STORAGE_KEYS.PROGRESS)
          let preview = null
          
          if (existingData) {
            try {
              const parsed = JSON.parse(existingData)
              if (parsed.state) {
                preview = generateSavePreview(parsed.state)
                saveSaveData('default', existingData)
              }
            } catch (e) {}
          }
          
          const defaultSlot = {
            ...DEFAULT_SAVE_SLOT,
            createdAt: Date.now(),
            lastPlayedAt: Date.now(),
            preview
          }
          
          const slots = [defaultSlot]
          saveSaveSlots(slots)
          saveCurrentSaveId('default')
          currentSaveId = 'default'
          
          set({
            saveSlots: slots,
            currentSaveId: 'default'
          })
        }
      },

      createSave: (name, options = {}) => {
        const state = get()
        if (state.saveSlots.length >= SAVE_SLOT_CONFIG.MAX_SLOTS) {
          return { success: false, error: '存档槽位已满' }
        }

        const saveId = `save_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`
        const currentState = state.getSaveState()
        const preview = generateSavePreview(currentState)
        
        const newSlot = {
          id: saveId,
          name: name || `存档 ${state.saveSlots.length + 1}`,
          createdAt: Date.now(),
          lastPlayedAt: Date.now(),
          preview,
          settingsShared: options.settingsShared ?? true
        }

        const saveData = {
          state: currentState,
          version: 0
        }
        saveSaveData(saveId, JSON.stringify(saveData))

        const newSlots = [...state.saveSlots, newSlot]
        saveSaveSlots(newSlots)
        
        set({ saveSlots: newSlots })
        return { success: true, slot: newSlot }
      },

      switchSave: (saveId) => {
        const state = get()
        const slot = state.saveSlots.find(s => s.id === saveId)
        if (!slot) {
          return { success: false, error: '存档不存在' }
        }

        const saveData = loadSaveData(saveId)
        if (!saveData) {
          return { success: false, error: '存档数据损坏' }
        }

        try {
          const parsed = typeof saveData === 'string' ? JSON.parse(saveData) : saveData
          if (parsed.state) {
            const savedState = parsed.state
            
            const newSlots = state.saveSlots.map(s => 
              s.id === saveId 
                ? { ...s, lastPlayedAt: Date.now(), preview: generateSavePreview(savedState) }
                : s
            )
            saveSaveSlots(newSlots)
            saveCurrentSaveId(saveId)
            currentSaveId = saveId

            if (savedState.settings?.autoSave !== undefined) {
              autoSaveEnabled = savedState.settings.autoSave
            }

            set({
              ...savedState,
              saveSlots: newSlots,
              currentSaveId: saveId,
              activePanel: null
            })

            return { success: true }
          }
        } catch (e) {
          console.error('Failed to parse save data:', e)
        }
        return { success: false, error: '存档解析失败' }
      },

      deleteSave: (saveId) => {
        const state = get()
        if (saveId === 'default') {
          return { success: false, error: '默认存档无法删除' }
        }
        if (saveId === state.currentSaveId) {
          return { success: false, error: '无法删除当前正在使用的存档' }
        }

        const newSlots = state.saveSlots.filter(s => s.id !== saveId)
        saveSaveSlots(newSlots)
        deleteSaveData(saveId)
        
        set({ saveSlots: newSlots })
        return { success: true }
      },

      renameSave: (saveId, newName) => {
        const state = get()
        const slotIndex = state.saveSlots.findIndex(s => s.id === saveId)
        if (slotIndex === -1) {
          return { success: false, error: '存档不存在' }
        }

        const newSlots = [...state.saveSlots]
        newSlots[slotIndex] = {
          ...newSlots[slotIndex],
          name: newName
        }
        saveSaveSlots(newSlots)
        
        set({ saveSlots: newSlots })
        return { success: true }
      },

      duplicateSave: (saveId, newName) => {
        const state = get()
        if (state.saveSlots.length >= SAVE_SLOT_CONFIG.MAX_SLOTS) {
          return { success: false, error: '存档槽位已满' }
        }

        const sourceSlot = state.saveSlots.find(s => s.id === saveId)
        if (!sourceSlot) {
          return { success: false, error: '源存档不存在' }
        }

        const sourceData = loadSaveData(saveId)
        if (!sourceData) {
          return { success: false, error: '源存档数据损坏' }
        }

        const newSaveId = `save_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`
        saveSaveData(newSaveId, sourceData)

        let parsedState = null
        try {
          const parsed = typeof sourceData === 'string' ? JSON.parse(sourceData) : sourceData
          if (parsed.state) {
            parsedState = parsed.state
          }
        } catch (e) {}

        const newSlot = {
          id: newSaveId,
          name: newName || `${sourceSlot.name} (副本)`,
          createdAt: Date.now(),
          lastPlayedAt: Date.now(),
          preview: parsedState ? generateSavePreview(parsedState) : sourceSlot.preview,
          settingsShared: sourceSlot.settingsShared
        }

        const newSlots = [...state.saveSlots, newSlot]
        saveSaveSlots(newSlots)
        
        set({ saveSlots: newSlots })
        return { success: true, slot: newSlot }
      },

      getSaveState: () => {
        const state = get()
        return {
          settings: state.settings,
          discoveredConstellations: state.discoveredConstellations,
          discoveredStars: state.discoveredStars,
          observationLogs: state.observationLogs,
          customTags: state.customTags,
          unlockedAchievements: state.unlockedAchievements,
          totalMistakes: state.totalMistakes,
          seasonProgress: state.seasonProgress,
          seasonRewardsUnlocked: state.seasonRewardsUnlocked,
          seasonRewardsClaimed: state.seasonRewardsClaimed,
          perfectObservations: state.perfectObservations,
          totalObservations: state.totalObservations,
          perfectCountPerConstellation: state.perfectCountPerConstellation,
          consecutivePerfectCount: state.consecutivePerfectCount,
          bestConsecutivePerfect: state.bestConsecutivePerfect,
          seasonHistory: state.seasonHistory,
          favoriteConstellations: state.favoriteConstellations,
          familyMode: state.familyMode,
          nightExpedition: state.nightExpedition,
          observationCalendar: state.observationCalendar,
          quiz: state.quiz,
          team: state.team,
          starGallery: state.starGallery,
          tutorial: state.tutorial,
          storyProgress: state.storyProgress,
          starRoute: state.starRoute,
          research: state.research,
          dailyCommissions: state.dailyCommissions,
          completedPaths: state.completedPaths
        }
      },

      exportSave: (saveId) => {
        const state = get()
        const targetId = saveId || state.currentSaveId
        const slot = state.saveSlots.find(s => s.id === targetId)
        if (!slot) {
          return { success: false, error: '存档不存在' }
        }

        const saveData = loadSaveData(targetId)
        if (!saveData) {
          return { success: false, error: '存档数据损坏' }
        }

        const exportData = {
          slot,
          data: typeof saveData === 'string' ? JSON.parse(saveData) : saveData,
          exportVersion: 1,
          exportedAt: Date.now()
        }

        return { success: true, data: exportData }
      },

      importSave: (importData) => {
        const state = get()
        if (state.saveSlots.length >= SAVE_SLOT_CONFIG.MAX_SLOTS) {
          return { success: false, error: '存档槽位已满' }
        }

        try {
          const parsed = typeof importData === 'string' ? JSON.parse(importData) : importData
          
          if (!parsed.slot || !parsed.data) {
            return { success: false, error: '导入数据格式错误' }
          }

          const newSaveId = `save_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`
          const saveDataStr = JSON.stringify(parsed.data)
          saveSaveData(newSaveId, saveDataStr)

          let preview = null
          if (parsed.data.state) {
            preview = generateSavePreview(parsed.data.state)
          }

          const newSlot = {
            id: newSaveId,
            name: `${parsed.slot.name || '导入存档'} (导入)`,
            createdAt: Date.now(),
            lastPlayedAt: Date.now(),
            preview,
            settingsShared: parsed.slot.settingsShared ?? true
          }

          const newSlots = [...state.saveSlots, newSlot]
          saveSaveSlots(newSlots)
          
          set({ saveSlots: newSlots })
          return { success: true, slot: newSlot }
        } catch (e) {
          console.error('Failed to import save:', e)
          return { success: false, error: '导入数据解析失败' }
        }
      },

      updateCurrentSavePreview: () => {
        const state = get()
        const preview = generateSavePreview(state)
        const newSlots = state.saveSlots.map(s => 
          s.id === state.currentSaveId 
            ? { ...s, preview, lastPlayedAt: Date.now() }
            : s
        )
        saveSaveSlots(newSlots)
        set({ saveSlots: newSlots })
      },

      manualSave: () => {
        const state = get()
        const saveState = state.getSaveState()
        const persistConfig = {
          state: saveState,
          version: 0
        }
        const persistStr = JSON.stringify(persistConfig)
        localStorage.setItem(STORAGE_KEYS.PROGRESS, persistStr)
        saveSaveData(state.currentSaveId, persistStr)
        state.updateCurrentSavePreview()
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
          perfectRun: true,
          connectionSnapshots: []
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
          perfectRun: true,
          connectionSnapshots: []
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
            mistakes: 0,
            connectionSnapshots: []
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
            mistakes: 0,
            connectionSnapshots: []
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
      completedPaths: {},
      connectionSnapshots: [],
      replayState: { active: false, constellationId: null, path: [], step: 0, playing: false },

      undoLastStep: () => {
        const state = get()
        if (state.connectionSnapshots.length === 0) return false
        if (state.replayState.active) return false
        if (state.nightExpedition.currentRun?.active) return false

        const lastSnapshot = state.connectionSnapshots[state.connectionSnapshots.length - 1]
        const undoneAction = lastSnapshot.action
        const undoneStarId = lastSnapshot.starId

        let newPath = state.connectionPath
        if (undoneAction === 'connect') {
          newPath = lastSnapshot.path
        }

        set({
          connectionPath: newPath,
          mistakes: lastSnapshot.mistakes,
          perfectRun: lastSnapshot.perfectRun,
          connectionSnapshots: state.connectionSnapshots.slice(0, -1)
        })

        get().addLog({
          type: 'undo',
          constellationId: state.currentTargetConstellation,
          starId: undoneStarId,
          undoAction: undoneAction,
          pathLength: newPath.length,
          mistakesAfter: lastSnapshot.mistakes,
          perfectAfter: lastSnapshot.perfectRun,
          timestamp: Date.now()
        })

        get().checkAchievements()
        return true
      },

      startReplay: (constellationId) => {
        const state = get()
        const savedPath = state.completedPaths[constellationId]
        if (!savedPath || savedPath.length === 0) return false
        if (state.nightExpedition.currentRun?.active) return false

        set({
          replayState: {
            active: true,
            constellationId,
            path: savedPath,
            step: 0,
            playing: false
          }
        })

        get().addLog({
          type: 'replay_start',
          constellationId,
          pathLength: savedPath.length,
          timestamp: Date.now()
        })

        return true
      },

      advanceReplayStep: () => {
        const state = get()
        const rs = state.replayState
        if (!rs.active) return false
        if (rs.step >= rs.path.length - 1) {
          set({
            replayState: { ...rs, playing: false }
          })
          return false
        }

        set({
          replayState: { ...rs, step: rs.step + 1 }
        })
        return true
      },

      setReplayPlaying: (playing) => {
        const state = get()
        const rs = state.replayState
        if (!rs.active) return
        set({
          replayState: { ...rs, playing }
        })
      },

      resetReplay: () => {
        const state = get()
        const rs = state.replayState
        if (!rs.active) return
        set({
          replayState: { ...rs, step: 0, playing: false }
        })
      },

      stopReplay: () => {
        const state = get()
        if (!state.replayState.active) return

        get().addLog({
          type: 'replay_end',
          constellationId: state.replayState.constellationId,
          timestamp: Date.now()
        })

        set({
          replayState: { active: false, constellationId: null, path: [], step: 0, playing: false }
        })
      },

      setTargetConstellation: (constellationId) => {
        set({
          currentTargetConstellation: constellationId,
          connectionPath: [],
          mistakes: 0,
          perfectRun: true,
          connectionSnapshots: []
        })
        if (constellationId) {
          const state = get()
          if (state.replayState.active) {
            get().stopReplay()
          }
          get().resetSessionMistakes()
        }
        get().checkTutorialProgress()
      },

      connectStar: (starId) => {
        const state = get()
        const constellation = getConstellationById(state.currentTargetConstellation)
        if (!constellation) return false

        const validIds = constellation.stars.map((s) => s.id)
        if (!validIds.includes(starId)) return false

        if (state.connectionPath.includes(starId)) return false

        const preSnapshot = {
          path: [...state.connectionPath],
          mistakes: state.mistakes,
          perfectRun: state.perfectRun,
          starId
        }

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
              perfectRun: false,
              connectionSnapshots: [...state.connectionSnapshots, { ...preSnapshot, action: 'mistake' }]
            })

            if (state.tutorial.started && !state.tutorial.completed) {
              get().recordTutorialMistake()
              get().showTutorialError('wrong_connection')
            }

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
            : [...state.discoveredStars, starId],
          connectionSnapshots: [...state.connectionSnapshots, { ...preSnapshot, action: 'connect' }]
        })

        get().checkConstellationComplete()
        get().checkAchievements()
        get().checkTutorialProgress()
        get().checkAdvancedTasks()
        return true
      },

      clearConnectionPath: () => set({ connectionPath: [], connectionSnapshots: [] }),

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
          const mistakesInSession = state.mistakes

          set((s) => {
            const newConsecutive = isPerfect ? s.consecutivePerfectCount + 1 : 0
            const newBest = Math.max(s.bestConsecutivePerfect, newConsecutive)
            const newPerfectCount = (isPerfect && alreadyDiscovered)
              ? {
                  ...s.perfectCountPerConstellation,
                  [constellationId]: (s.perfectCountPerConstellation[constellationId] || 0) + 1
                }
              : s.perfectCountPerConstellation

            return {
              totalObservations: {
                ...s.totalObservations,
                [constellationId]: (s.totalObservations[constellationId] || 0) + 1
              },
              perfectObservations: isPerfect
                ? { ...s.perfectObservations, [constellationId]: true }
                : s.perfectObservations,
              perfectCountPerConstellation: newPerfectCount,
              consecutivePerfectCount: newConsecutive,
              bestConsecutivePerfect: newBest,
              completedPaths: {
                ...s.completedPaths,
                [constellationId]: [...s.connectionPath]
              }
            }
          })

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
              mistakes: mistakesInSession,
              timestamp: Date.now()
            })
            if (state.discoveredConstellations.length === 0 ||
                state.tutorial.triggeredMilestones.indexOf('first_constellation') === -1) {
              get().triggerMilestone('first_constellation', {
                constellationId,
                constellationName: constellation.name,
                perfect: isPerfect
              })
            }
          } else {
            get().addLog({
              type: 'reobservation',
              constellationId,
              perfect: isPerfect,
              mistakes: mistakesInSession,
              timestamp: Date.now()
            })
          }

          if (isPerfect && !state.tutorial.firstPerfectObserved) {
            get().triggerMilestone('first_perfect', {
              constellationId,
              constellationName: constellation.name
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

          get().checkDailyCommissions()

          if (state.nightExpedition.currentRun?.active) {
            get().advanceExpeditionStage()
          }

          if (state.starRoute.currentRoute) {
            get().updateRouteStep(constellationId, isPerfect)
          }

          get().checkStoryProgress()

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

      customTags: [],
      addCustomTag: (tag) =>
        set((state) => ({
          customTags: [...state.customTags, { ...tag, id: `custom_${Date.now()}`, custom: true }].slice(0, 50)
        })),
      removeCustomTag: (tagId) =>
        set((state) => ({
          customTags: state.customTags.filter((t) => t.id !== tagId)
        })),
      updateLogTags: (logIndex, tags) =>
        set((state) => {
          const newLogs = [...state.observationLogs]
          if (newLogs[logIndex]) {
            newLogs[logIndex] = { ...newLogs[logIndex], tags }
          }
          return { observationLogs: newLogs }
        }),
      addTagToLog: (logIndex, tagId) =>
        set((state) => {
          const newLogs = [...state.observationLogs]
          if (newLogs[logIndex]) {
            const currentTags = newLogs[logIndex].tags || []
            if (!currentTags.includes(tagId)) {
              newLogs[logIndex] = { ...newLogs[logIndex], tags: [...currentTags, tagId] }
            }
          }
          return { observationLogs: newLogs }
        }),
      removeTagFromLog: (logIndex, tagId) =>
        set((state) => {
          const newLogs = [...state.observationLogs]
          if (newLogs[logIndex]) {
            const currentTags = newLogs[logIndex].tags || []
            newLogs[logIndex] = {
              ...newLogs[logIndex],
              tags: currentTags.filter((t) => t !== tagId)
            }
          }
          return { observationLogs: newLogs }
        }),

      filterLogs: ({ type, tags, timeRange, searchText, perfectOnly } = {}) => {
        const state = get()
        let filtered = [...state.observationLogs]

        if (type && type !== 'all') {
          filtered = filtered.filter((log) => log.type === type)
        }

        if (tags && tags.length > 0) {
          filtered = filtered.filter((log) => {
            const logTags = getLogTags(log)
            return tags.some((tag) => logTags.includes(tag))
          })
        }

        if (perfectOnly) {
          filtered = filtered.filter((log) => log.perfect)
        }

        if (timeRange && timeRange !== 'all') {
          const rangeConfig = TIME_RANGES[timeRange]
          if (rangeConfig && rangeConfig.days) {
            const cutoffTime = Date.now() - rangeConfig.days * 24 * 60 * 60 * 1000
            filtered = filtered.filter((log) => log.timestamp >= cutoffTime)
          }
        }

        if (searchText && searchText.trim()) {
          const search = searchText.toLowerCase().trim()
          filtered = filtered.filter((log) => {
            if (log.constellationId) {
              const c = getConstellationById(log.constellationId)
              if (c) {
                if (c.name.toLowerCase().includes(search)) return true
                if (c.nameEn.toLowerCase().includes(search)) return true
              }
            }
            if (log.achievementId) {
              const a = getAchievementById(log.achievementId)
              if (a) {
                if (a.name.toLowerCase().includes(search)) return true
                if (a.description.toLowerCase().includes(search)) return true
              }
            }
            if (log.eventName && log.eventName.toLowerCase().includes(search)) return true
            if (log.routeName && log.routeName.toLowerCase().includes(search)) return true
            if (log.rewardName && log.rewardName.toLowerCase().includes(search)) return true
            if (log.note && log.note.toLowerCase().includes(search)) return true
            if (log.type && log.type.toLowerCase().includes(search)) return true
            return false
          })
        }

        return filtered
      },

      getObservationStreak: () => {
        const state = get()
        const observationDates = new Set()

        state.observationLogs.forEach(log => {
          if ((log.type === 'discovery' || log.type === 'reobservation') && log.timestamp) {
            const date = new Date(log.timestamp).toDateString()
            observationDates.add(date)
          }
        })

        Object.entries(state.observationCalendar.customLogs).forEach(([dateKey, logs]) => {
          const hasObservation = logs.some(log => 
            log.type === 'discovery' || log.type === 'observation'
          )
          if (hasObservation) {
            const date = new Date(dateKey).toDateString()
            observationDates.add(date)
          }
        })

        const sortedDates = Array.from(observationDates)
          .map(dateStr => new Date(dateStr))
          .sort((a, b) => a - b)

        const today = new Date().toDateString()
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const yesterdayStr = yesterday.toDateString()
        const todayObserved = observationDates.has(today)

        if (sortedDates.length === 0) {
          return {
            currentStreak: 0,
            activeStreak: 0,
            longestStreak: 0,
            totalObservationDays: 0,
            observationDates: [],
            todayObserved: false
          }
        }

        let longestStreak = 1
        let tempStreak = 1
        for (let i = 1; i < sortedDates.length; i++) {
          const current = sortedDates[i]
          const prev = sortedDates[i - 1]
          const diffDays = Math.round((current - prev) / (1000 * 60 * 60 * 24))

          if (diffDays === 1) {
            tempStreak++
            if (tempStreak > longestStreak) {
              longestStreak = tempStreak
            }
          } else {
            tempStreak = 1
          }
        }

        const sortedDesc = [...sortedDates].sort((a, b) => b - a)
        const latestDate = sortedDesc[0].toDateString()

        const calcStreakFrom = (startDateStr) => {
          let streak = 1
          for (let i = 1; i < sortedDesc.length; i++) {
            const current = sortedDesc[i]
            const prev = sortedDesc[i - 1]
            const diffDays = Math.round((prev - current) / (1000 * 60 * 60 * 24))

            if (diffDays === 1) {
              streak++
            } else {
              break
            }
          }
          return streak
        }

        let currentStreak = 0
        let activeStreak = 0

        if (todayObserved) {
          currentStreak = calcStreakFrom(today)
          activeStreak = currentStreak
        } else if (latestDate === yesterdayStr) {
          activeStreak = calcStreakFrom(yesterdayStr)
          currentStreak = 0
        }

        return {
          currentStreak,
          activeStreak,
          longestStreak,
          totalObservationDays: sortedDates.length,
          observationDates: sortedDesc.map(d => d.toDateString()),
          todayObserved
        }
      },

      getLogStats: (logs = null) => {
        const state = get()
        const targetLogs = logs || state.observationLogs

        const stats = {
          total: targetLogs.length,
          byType: {},
          byTag: {},
          byDate: {},
          discoveries: 0,
          reobservations: 0,
          perfectRuns: 0,
          achievements: 0,
          seasonRewards: 0,
          events: 0,
          quizzes: 0,
          routes: 0,
          expeditions: 0,
          commissions: 0,
          checkins: 0,
          uniqueConstellations: new Set(),
          mostActiveDay: null,
          activeDays: new Set(),
        }

        const typeMap = {
          discovery: 'discoveries',
          reobservation: 'reobservations',
          achievement: 'achievements',
          season_reward: 'seasonRewards',
          event_start: 'events',
          event_end: 'events',
          event_reward: 'events',
          event_participate: 'events',
          quiz_complete: 'quizzes',
          quiz_perfect: 'quizzes',
          quiz_exchange: 'quizzes',
          route_start: 'routes',
          route_complete: 'routes',
          route_abandon: 'routes',
          expedition_start: 'expeditions',
          expedition_complete: 'expeditions',
          daily_commission_complete: 'commissions',
          daily_commission_claim: 'commissions',
          checkin: 'checkins',
        }

        targetLogs.forEach((log) => {
          if (!stats.byType[log.type]) stats.byType[log.type] = 0
          stats.byType[log.type]++

          const category = typeMap[log.type]
          if (category) {
            stats[category]++
          }

          if (log.perfect) {
            stats.perfectRuns++
          }

          if (log.constellationId) {
            stats.uniqueConstellations.add(log.constellationId)
          }

          const logTags = getLogTags(log)
          logTags.forEach((tag) => {
            if (!stats.byTag[tag]) stats.byTag[tag] = 0
            stats.byTag[tag]++
          })

          if (log.timestamp) {
            const date = new Date(log.timestamp).toDateString()
            if (!stats.byDate[date]) stats.byDate[date] = 0
            stats.byDate[date]++
            stats.activeDays.add(date)
          }
        })

        const dateEntries = Object.entries(stats.byDate)
        if (dateEntries.length > 0) {
          const mostActive = dateEntries.sort((a, b) => b[1] - a[1])[0]
          stats.mostActiveDay = {
            date: new Date(mostActive[0]),
            count: mostActive[1]
          }
        }

        stats.uniqueConstellations = Array.from(stats.uniqueConstellations)
        stats.activeDays = stats.activeDays.size

        return stats
      },

      getLogSummary: (logs = null) => {
        const state = get()
        const targetLogs = logs || state.observationLogs
        const stats = state.getLogStats(targetLogs)
        const streak = state.getObservationStreak()

        const insights = []

        if (stats.discoveries > 0) {
          insights.push({
            type: 'discovery',
            icon: '✨',
            title: '新发现',
            content: `发现了 ${stats.discoveries} 个新星座`,
            color: 'text-nebula-purple'
          })
        }

        if (stats.perfectRuns > 0) {
          insights.push({
            type: 'perfect',
            icon: '💎',
            title: '完美表现',
            content: `完成了 ${stats.perfectRuns} 次完美观测`,
            color: 'text-star-gold'
          })
        }

        if (stats.achievements > 0) {
          insights.push({
            type: 'achievement',
            icon: '🏆',
            title: '里程碑',
            content: `解锁了 ${stats.achievements} 个成就`,
            color: 'text-nebula-orange'
          })
        }

        if (streak.todayObserved && streak.currentStreak >= 7) {
          insights.push({
            type: 'consistency',
            icon: '🔥',
            title: '坚持不懈',
            content: `已连续 ${streak.currentStreak} 天观测（历史最长 ${streak.longestStreak} 天）`,
            color: 'text-red-400'
          })
        } else if (streak.todayObserved && streak.currentStreak >= 3) {
          insights.push({
            type: 'consistency',
            icon: '🌱',
            title: '稳步前进',
            content: `已连续观测 ${streak.currentStreak} 天（累计 ${streak.totalObservationDays} 天）`,
            color: 'text-green-400'
          })
        } else if (streak.todayObserved && streak.currentStreak >= 1) {
          insights.push({
            type: 'consistency',
            icon: '⭐',
            title: '开始坚持',
            content: `今日已观测，保持连续！（累计 ${streak.totalObservationDays} 天）`,
            color: 'text-yellow-400'
          })
        } else if (!streak.todayObserved && streak.activeStreak >= 3) {
          insights.push({
            type: 'consistency',
            icon: '⏰',
            title: '今日待观测',
            content: `今日还未观测，完成观测即可延续 ${streak.activeStreak} 天的连续记录！`,
            color: 'text-orange-400'
          })
        } else if (!streak.todayObserved && streak.activeStreak >= 1) {
          insights.push({
            type: 'consistency',
            icon: '🌅',
            title: '今日待观测',
            content: `今日还未观测，开始观测以延续你的连续记录！`,
            color: 'text-cyan-400'
          })
        } else if (streak.totalObservationDays > 0) {
          insights.push({
            type: 'consistency',
            icon: '🌙',
            title: '重新开始',
            content: `连续已中断，历史最长 ${streak.longestStreak} 天，今天重新开始吧！`,
            color: 'text-white/60'
          })
        }

        if (stats.uniqueConstellations.length >= 3) {
          const constellationNames = stats.uniqueConstellations
            .slice(0, 3)
            .map((id) => getConstellationById(id)?.name)
            .filter(Boolean)
          insights.push({
            type: 'exploration',
            icon: '🗺️',
            title: '探索范围',
            content: `已观测 ${stats.uniqueConstellations.length} 个不同星座${
              constellationNames.length > 0 ? `，包括${constellationNames.join('、')}` : ''
            }`,
            color: 'text-nebula-cyan'
          })
        }

        if (targetLogs.length === 0) {
          insights.push({
            type: 'empty',
            icon: '🌙',
            title: '等待探索',
            content: '还没有观测记录，开始你的星空之旅吧！',
            color: 'text-white/50'
          })
        }

        return {
          stats,
          insights,
          topTags: Object.entries(stats.byTag)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([tagId, count]) => ({
              tag: getTagById(tagId),
              count
            }))
            .filter((item) => item.tag),
          topTypes: Object.entries(stats.byType)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5),
        }
      },

      unlockedAchievements: [],

      storyProgress: {
        unlockedChapters: [],
        readChapters: [],
        unlockedEpilogues: [],
        readEpilogues: [],
        unlockedPrologues: [],
        readPrologues: [],
        finalChapterUnlocked: false,
        finalChapterRead: false,
        narrativeChoices: {},
        pendingUnlock: null
      },

      setPendingStoryUnlock: (unlockData) => set({
        storyProgress: {
          ...get().storyProgress,
          pendingUnlock: unlockData
        }
      }),

      clearPendingStoryUnlock: () => set({
        storyProgress: {
          ...get().storyProgress,
          pendingUnlock: null
        }
      }),

      unlockChapter: (chapterId) => {
        const state = get()
        if (state.storyProgress.unlockedChapters.includes(chapterId)) return false
        set({
          storyProgress: {
            ...state.storyProgress,
            unlockedChapters: [...state.storyProgress.unlockedChapters, chapterId]
          }
        })
        get().addLog({
          type: 'story_chapter_unlocked',
          chapterId,
          timestamp: Date.now()
        })
        return true
      },

      markChapterAsRead: (chapterId) => {
        const state = get()
        if (state.storyProgress.readChapters.includes(chapterId)) return false
        set({
          storyProgress: {
            ...state.storyProgress,
            readChapters: [...state.storyProgress.readChapters, chapterId]
          }
        })
        for (const arc of Object.values(STORY_ARCS)) {
          for (const chapter of Object.values(arc.chapters)) {
            if (chapter.id === chapterId && chapter.reward?.stardust) {
              get().addStardust(chapter.reward.stardust, `剧情章节：${chapter.title}`)
              break
            }
          }
        }
        return true
      },

      unlockPrologue: (seasonId) => {
        const state = get()
        if (state.storyProgress.unlockedPrologues.includes(seasonId)) return false
        set({
          storyProgress: {
            ...state.storyProgress,
            unlockedPrologues: [...state.storyProgress.unlockedPrologues, seasonId]
          }
        })
        get().addLog({
          type: 'story_prologue_unlocked',
          seasonId,
          timestamp: Date.now()
        })
        return true
      },

      markPrologueAsRead: (seasonId) => {
        const state = get()
        if (state.storyProgress.readPrologues.includes(seasonId)) return false
        set({
          storyProgress: {
            ...state.storyProgress,
            readPrologues: [...state.storyProgress.readPrologues, seasonId]
          }
        })
        return true
      },

      unlockEpilogue: (seasonId) => {
        const state = get()
        if (state.storyProgress.unlockedEpilogues.includes(seasonId)) return false
        set({
          storyProgress: {
            ...state.storyProgress,
            unlockedEpilogues: [...state.storyProgress.unlockedEpilogues, seasonId]
          }
        })
        get().addLog({
          type: 'story_epilogue_unlocked',
          seasonId,
          timestamp: Date.now()
        })
        return true
      },

      markEpilogueAsRead: (seasonId) => {
        const state = get()
        if (state.storyProgress.readEpilogues.includes(seasonId)) return false
        set({
          storyProgress: {
            ...state.storyProgress,
            readEpilogues: [...state.storyProgress.readEpilogues, seasonId]
          }
        })
        const arc = STORY_ARCS[seasonId]
        if (arc?.epilogue?.reward?.stardust) {
          get().addStardust(arc.epilogue.reward.stardust, `季节终章：${arc.epilogue.title}`)
        }
        get().checkStoryProgress()
        return true
      },

      unlockFinalChapter: () => {
        const state = get()
        if (state.storyProgress.finalChapterUnlocked) return false
        set({
          storyProgress: {
            ...state.storyProgress,
            finalChapterUnlocked: true
          }
        })
        get().addLog({
          type: 'story_final_unlocked',
          timestamp: Date.now()
        })
        return true
      },

      markFinalChapterAsRead: () => {
        const state = get()
        if (state.storyProgress.finalChapterRead) return false
        set({
          storyProgress: {
            ...state.storyProgress,
            finalChapterRead: true
          }
        })
        if (FINAL_CHAPTER.reward?.stardust) {
          get().addStardust(FINAL_CHAPTER.reward.stardust, '最终章：星辰之书')
        }
        return true
      },

      setNarrativeChoice: (chapterId, choiceId) => {
        set((state) => ({
          storyProgress: {
            ...state.storyProgress,
            narrativeChoices: {
              ...state.storyProgress.narrativeChoices,
              [chapterId]: choiceId
            }
          }
        }))
      },

      checkStoryProgress: () => {
        const state = get()
        const discoveries = state.discoveredConstellations
        const newlyUnlocked = []

        Object.entries(STORY_ARCS).forEach(([seasonId, arc]) => {
          if (!state.storyProgress.unlockedPrologues.includes(seasonId)) {
            const seasonConstellations = Object.keys(arc.chapters)
            const discoveredInSeason = seasonConstellations.some(id =>
              discoveries.includes(id)
            )
            if (discoveredInSeason) {
              if (get().unlockPrologue(seasonId)) {
                newlyUnlocked.push({ type: 'prologue', seasonId, data: arc.prologue })
              }
            }
          }

          Object.entries(arc.chapters).forEach(([constellationId, chapter]) => {
            if (!state.storyProgress.unlockedChapters.includes(chapter.id) &&
                discoveries.includes(constellationId)) {
              if (get().unlockChapter(chapter.id)) {
                newlyUnlocked.push({ type: 'chapter', chapterId: chapter.id, data: chapter })
              }
            }
          })

          if (!state.storyProgress.unlockedEpilogues.includes(seasonId) &&
              isSeasonComplete(seasonId, discoveries)) {
            if (get().unlockEpilogue(seasonId)) {
              newlyUnlocked.push({ type: 'epilogue', seasonId, data: arc.epilogue })
            }
          }
        })

        if (!state.storyProgress.finalChapterUnlocked &&
            isAllSeasonsComplete(discoveries)) {
          if (get().unlockFinalChapter()) {
            newlyUnlocked.push({ type: 'final', data: FINAL_CHAPTER })
          }
        }

        if (newlyUnlocked.length > 0) {
          get().setPendingStoryUnlock(newlyUnlocked)
        }

        return newlyUnlocked
      },

      getStoryStats: () => {
        const state = get()
        const sp = state.storyProgress
        const totalChapters = getChapterCount()
        const unlockedChapters = sp.unlockedChapters.length
        const readChapters = sp.readChapters.length
        const unlockedPrologues = sp.unlockedPrologues.length
        const readPrologues = sp.readPrologues.length
        const unlockedEpilogues = sp.unlockedEpilogues.length
        const readEpilogues = sp.readEpilogues.length
        const totalStoryContent = totalChapters + 4 + 4 + 1

        return {
          totalChapters,
          unlockedChapters,
          readChapters,
          unlockedPrologues,
          readPrologues,
          unlockedEpilogues,
          readEpilogues,
          finalChapterUnlocked: sp.finalChapterUnlocked,
          finalChapterRead: sp.finalChapterRead,
          totalUnlocked: unlockedChapters + unlockedPrologues + unlockedEpilogues + (sp.finalChapterUnlocked ? 1 : 0),
          totalRead: readChapters + readPrologues + readEpilogues + (sp.finalChapterRead ? 1 : 0),
          overallProgress: totalStoryContent > 0
            ? Math.round(((readChapters + readPrologues + readEpilogues + (sp.finalChapterRead ? 1 : 0)) / totalStoryContent) * 100)
            : 0
        }
      },

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
      perfectCountPerConstellation: {},
      consecutivePerfectCount: 0,
      bestConsecutivePerfect: 0,
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

        const allAchievements = [...ACHIEVEMENTS, ...SEASON_ACHIEVEMENTS, ...QUIZ_ACHIEVEMENTS, ...ROUTE_ACHIEVEMENTS, ...DAILY_ACHIEVEMENTS]

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
            case 'route_complete':
              unlocked = state.starRoute?.totalRoutesCompleted >= value
              break
            case 'route_type_complete': {
              const completedOfType = state.starRoute?.routeHistory?.filter(
                r => r.status === 'completed' && r.type === value
              ).length || 0
              unlocked = completedOfType >= 1
              break
            }
            case 'route_perfect':
              unlocked = state.starRoute?.perfectRoutes >= value
              break
            case 'daily_complete':
              unlocked = state.dailyCommissions?.totalCompleted >= value
              break
            case 'daily_streak':
              unlocked = state.dailyCommissions?.streakDays >= value
              break
            case 'daily_hard_complete':
              unlocked = state.dailyCommissions?.totalHardCompleted >= value
              break
            case 'consecutive_perfect':
              unlocked = (state.bestConsecutivePerfect || 0) >= value
              break
            case 'reobserve_single': {
              const maxObs = Math.max(
                0,
                ...Object.values(state.totalObservations || {}).map(v => Math.max(0, (v || 0) - 1))
              )
              unlocked = maxObs >= value
              break
            }
            case 'reobserve_all_once': {
              const discovered = state.discoveredConstellations
              if (discovered.length === 0) {
                unlocked = false
              } else {
                unlocked = discovered.every(id => (state.totalObservations[id] || 0) >= 2)
              }
              break
            }
            case 'total_reobserve': {
              const total = Object.values(state.totalObservations || {}).reduce(
                (sum, v) => sum + Math.max(0, (v || 0) - 1),
                0
              )
              unlocked = total >= value
              break
            }
            case 'reobserve_perfect_single': {
              const maxPerfect = Math.max(
                0,
                ...Object.values(state.perfectCountPerConstellation || {}).map(v => v || 0)
              )
              unlocked = maxPerfect >= value
              break
            }
            case 'single_session_mistakes': {
              const recentObservations = state.observationLogs.filter(
                l => l.type === 'discovery' || l.type === 'reobservation'
              )
              unlocked = recentObservations.some(l => (l.mistakes || 0) >= value)
              break
            }
            case 'observation_streak': {
              const streak = state.getObservationStreak()
              unlocked = streak.currentStreak >= value || streak.longestStreak >= value
              break
            }
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
          newlyUnlocked.forEach((id, idx) => {
            const ach = getAchievementById(id)
            if (ach) {
              get().addLog({
                type: 'achievement',
                achievementId: id,
                timestamp: Date.now()
              })
              if (idx === 0 && !get().tutorial.firstAchievementUnlocked) {
                get().triggerMilestone('first_achievement', {
                  achievementId: id,
                  achievementName: ach.name
                })
              }
            }
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

      starGallery: {
        photos: INITIAL_GALLERY_PHOTOS,
        activeGalleryPanel: 'grid',
        selectedPhotoId: null,
        prefillConstellationId: null,
        galleryFilters: {
          season: 'all',
          difficulty: 'all',
          category: 'all',
          featuredOnly: false,
          search: '',
          sortBy: 'featured'
        }
      },

      setActiveGalleryPanel: (panel) => set((state) => ({
        starGallery: { ...state.starGallery, activeGalleryPanel: panel }
      })),

      setSelectedPhotoId: (photoId) => set((state) => ({
        starGallery: { ...state.starGallery, selectedPhotoId: photoId }
      })),

      setGalleryFilters: (filters) => set((state) => ({
        starGallery: {
          ...state.starGallery,
          galleryFilters: { ...state.starGallery.galleryFilters, ...filters }
        }
      })),

      resetGalleryFilters: () => set((state) => ({
        starGallery: {
          ...state.starGallery,
          galleryFilters: {
            season: 'all',
            difficulty: 'all',
            category: 'all',
            featuredOnly: false,
            search: '',
            sortBy: 'featured'
          }
        }
      })),

      addGalleryPhoto: (photoData) => {
        const state = get()
        const newPhotos = addPhoto(state.starGallery.photos, photoData)
        set((state) => ({
          starGallery: { ...state.starGallery, photos: newPhotos }
        }))
        get().addLog({
          type: 'gallery_photo_added',
          title: photoData.title,
          timestamp: Date.now()
        })
        get().checkGalleryAchievements()
        return newPhotos[0]
      },

      updateGalleryPhoto: (photoId, updates) => {
        const state = get()
        const newPhotos = updatePhoto(state.starGallery.photos, photoId, updates)
        set((state) => ({
          starGallery: { ...state.starGallery, photos: newPhotos }
        }))
      },

      deleteGalleryPhoto: (photoId) => {
        const state = get()
        const newPhotos = deletePhoto(state.starGallery.photos, photoId)
        set((state) => ({
          starGallery: { ...state.starGallery, photos: newPhotos }
        }))
      },

      setPrefillConstellation: (constellationId) => set((state) => ({
        starGallery: { ...state.starGallery, prefillConstellationId: constellationId }
      })),

      clearPrefillConstellation: () => set((state) => ({
        starGallery: { ...state.starGallery, prefillConstellationId: null }
      })),

      openGalleryWithConstellation: (constellationId) => {
        set((state) => ({
          starGallery: {
            ...state.starGallery,
            prefillConstellationId: constellationId,
            activeGalleryPanel: 'grid'
          }
        }))
        get().setActivePanel('gallery')
      },

      togglePhotoFeatured: (photoId) => {
        const state = get()
        const newPhotos = toggleFeatured(state.starGallery.photos, photoId)
        set((state) => ({
          starGallery: { ...state.starGallery, photos: newPhotos }
        }))
        get().addLog({
          type: 'gallery_featured',
          photoId,
          timestamp: Date.now()
        })
        get().checkGalleryAchievements()
      },

      incrementPhotoViews: (photoId) => {
        const state = get()
        const photo = getPhotoById(state.starGallery.photos, photoId)
        if (photo) {
          set((state) => ({
            starGallery: {
              ...state.starGallery,
              photos: state.starGallery.photos.map(p =>
                p.id === photoId ? { ...p, views: p.views + 1 } : p
              )
            }
          }))
        }
      },

      likePhoto: (photoId) => {
        const state = get()
        const photo = getPhotoById(state.starGallery.photos, photoId)
        if (photo) {
          set((state) => ({
            starGallery: {
              ...state.starGallery,
              photos: state.starGallery.photos.map(p =>
                p.id === photoId ? { ...p, likes: p.likes + 1 } : p
              )
            }
          }))
        }
      },

      getGalleryStats: () => {
        const state = get()
        return getGalleryStats(
          state.starGallery.photos,
          state.discoveredConstellations,
          state.perfectObservations
        )
      },

      getFilteredPhotos: () => {
        const state = get()
        return filterGalleryPhotos(
          state.starGallery.photos,
          state.starGallery.galleryFilters
        )
      },

      getPhotoById: (photoId) => {
        const state = get()
        return getPhotoById(state.starGallery.photos, photoId)
      },

      getPhotosByConstellation: (constellationId) => {
        const state = get()
        return state.starGallery.photos.filter(p => p.constellationId === constellationId)
      },

      getPhotosBySeason: (season) => {
        const state = get()
        return state.starGallery.photos.filter(p => p.season === season)
      },

      getFeaturedPhotos: () => {
        const state = get()
        return state.starGallery.photos.filter(p => p.featured)
      },

      checkGalleryAchievements: () => {
        return []
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

      tutorial: {
        started: false,
        completed: false,
        currentStepId: null,
        completedSteps: [],
        completedPhases: [],
        advancedTasksCompleted: [],
        rewardsClaimed: [],
        mistakesDuringTutorial: 0,
        startedAt: null,
        completedAt: null,
        panelsVisited: [],
        lastErrorHint: null,
        lastErrorTime: null,
        triggeredMilestones: [],
        firedContextualHints: [],
        pendingMilestoneToast: null,
        pendingContextualHint: null,
        sessionMistakes: 0,
        lastActivityTime: null,
        firstAchievementUnlocked: false,
        firstLogGenerated: false,
        firstStarConnected: false,
        firstConstellationDiscovered: false,
        firstMistakeMade: false,
        firstPerfectObserved: false
      },

      startTutorial: () => {
        const firstStep = TUTORIAL_STEPS[0]
        const firstPhase = getPhaseForStep(firstStep.id)
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            started: true,
            currentStepId: firstStep.id,
            completedSteps: [],
            completedPhases: [],
            advancedTasksCompleted: [],
            rewardsClaimed: [],
            mistakesDuringTutorial: 0,
            startedAt: Date.now(),
            completedAt: null,
            panelsVisited: [],
            lastErrorHint: null,
            lastErrorTime: null,
            triggeredMilestones: [],
            firedContextualHints: [],
            pendingMilestoneToast: null,
            pendingContextualHint: null,
            sessionMistakes: 0,
            lastActivityTime: Date.now(),
            firstAchievementUnlocked: false,
            firstLogGenerated: false,
            firstStarConnected: false,
            firstConstellationDiscovered: false,
            firstMistakeMade: false,
            firstPerfectObserved: false
          }
        }))
        get().addLog({
          type: 'tutorial_start',
          phaseId: firstPhase?.id,
          phaseName: firstPhase?.name,
          timestamp: Date.now()
        })
        return firstStep
      },

      resetTutorial: () => {
        set({
          tutorial: {
            started: false,
            completed: false,
            currentStepId: null,
            completedSteps: [],
            completedPhases: [],
            advancedTasksCompleted: [],
            rewardsClaimed: [],
            mistakesDuringTutorial: 0,
            startedAt: null,
            completedAt: null,
            panelsVisited: [],
            lastErrorHint: null,
            lastErrorTime: null,
            triggeredMilestones: [],
            firedContextualHints: [],
            pendingMilestoneToast: null,
            pendingContextualHint: null,
            sessionMistakes: 0,
            lastActivityTime: null,
            firstAchievementUnlocked: false,
            firstLogGenerated: false,
            firstStarConnected: false,
            firstConstellationDiscovered: false,
            firstMistakeMade: false,
            firstPerfectObserved: false
          }
        })
      },

      completeTutorialStep: (stepId) => {
        const state = get()
        const step = getTutorialStepById(stepId)
        if (!step) return null

        const currentIndex = TUTORIAL_STEPS.findIndex(s => s.id === stepId)
        const nextStep = TUTORIAL_STEPS[currentIndex + 1]

        const newCompletedSteps = state.tutorial.completedSteps.includes(stepId)
          ? state.tutorial.completedSteps
          : [...state.tutorial.completedSteps, stepId]

        const isCompleted = step.isFinal || !nextStep

        const justCompletedPhase = getPhaseForStep(stepId)
        let phaseCompleted = null
        const newCompletedPhases = [...state.tutorial.completedPhases]

        if (justCompletedPhase) {
          const phaseProgress = calculatePhaseProgress(newCompletedSteps, justCompletedPhase.id)
          if (phaseProgress.isComplete && !newCompletedPhases.includes(justCompletedPhase.id)) {
            newCompletedPhases.push(justCompletedPhase.id)
            phaseCompleted = justCompletedPhase
          }
        }

        set((s) => ({
          tutorial: {
            ...s.tutorial,
            completedSteps: newCompletedSteps,
            currentStepId: isCompleted ? null : nextStep?.id || null,
            completed: isCompleted,
            completedAt: isCompleted ? Date.now() : s.tutorial.completedAt,
            completedPhases: newCompletedPhases
          }
        }))

        if (phaseCompleted && phaseCompleted.reward) {
          if (phaseCompleted.reward.type === 'stardust') {
            get().addStardust(phaseCompleted.reward.amount, `阶段奖励：${phaseCompleted.name}`)
          }
          get().addLog({
            type: 'tutorial_phase_complete',
            phaseId: phaseCompleted.id,
            phaseName: phaseCompleted.name,
            reward: phaseCompleted.reward,
            timestamp: Date.now()
          })
          get().showMilestoneToast({
            id: `phase_${phaseCompleted.id}`,
            icon: phaseCompleted.icon,
            title: `${phaseCompleted.name}阶段完成！`,
            message: phaseCompleted.reward.type === 'stardust'
              ? `获得 +${phaseCompleted.reward.amount} 星尘奖励`
              : phaseCompleted.reward.name ? `获得称号：${phaseCompleted.reward.name}` : '继续加油！',
            phaseReward: true
          })
        }

        if (isCompleted) {
          get().addLog({
            type: 'tutorial_complete',
            timestamp: Date.now()
          })
        }

        get().checkAdvancedTasks()
        return nextStep || null
      },

      setCurrentTutorialStep: (stepId) => {
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            currentStepId: stepId
          }
        }))
      },

      recordTutorialPanelVisit: (panelId) => {
        set((state) => {
          if (state.tutorial.panelsVisited.includes(panelId)) {
            return state
          }
          return {
            tutorial: {
              ...state.tutorial,
              panelsVisited: [...state.tutorial.panelsVisited, panelId]
            }
          }
        })
        if (panelId === 'log') {
          get().triggerMilestone('first_log_visit', {})
        }
        get().checkTutorialProgress()
      },

      showTutorialError: (errorType) => {
        const state = get()
        if (!state.tutorial.firstMistakeMade) {
          get().triggerMilestone('first_mistake', {})
          return
        }
        const hint = getErrorHint(errorType)
        if (!hint) return
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            lastErrorHint: hint,
            lastErrorTime: Date.now()
          }
        }))
      },

      clearTutorialError: () => {
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            lastErrorHint: null,
            lastErrorTime: null
          }
        }))
      },

      recordTutorialMistake: () => {
        const state = get()
        const newSessionMistakes = state.tutorial.sessionMistakes + 1
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            mistakesDuringTutorial: state.tutorial.mistakesDuringTutorial + 1,
            sessionMistakes: newSessionMistakes
          }
        }))
        if (newSessionMistakes === 3) {
          get().triggerContextualHint('mistake_3_times')
        } else if (newSessionMistakes === 5) {
          get().triggerContextualHint('mistake_5_times')
        }
      },

      resetSessionMistakes: () => {
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            sessionMistakes: 0
          }
        }))
      },

      triggerMilestone: (milestoneId, data = {}) => {
        const state = get()
        const milestone = getMilestoneById(milestoneId)
        if (!milestone) return
        if (state.tutorial.triggeredMilestones.includes(milestoneId)) return

        const t = state.tutorial
        let flagsUpdate = {}
        if (milestoneId === 'first_star_connect') {
          flagsUpdate.firstStarConnected = true
        } else if (milestoneId === 'first_constellation') {
          flagsUpdate.firstConstellationDiscovered = true
        } else if (milestoneId === 'first_achievement') {
          flagsUpdate.firstAchievementUnlocked = true
        } else if (milestoneId === 'first_mistake') {
          flagsUpdate.firstMistakeMade = true
        } else if (milestoneId === 'first_perfect') {
          flagsUpdate.firstPerfectObserved = true
        }

        set((s) => ({
          tutorial: {
            ...s.tutorial,
            triggeredMilestones: [...s.tutorial.triggeredMilestones, milestoneId],
            ...flagsUpdate
          }
        }))

        if (milestone.autoGenerateLog && milestone.logTemplate) {
          const logEntry = milestone.logTemplate(data)
          if (logEntry) {
            get().addLog(logEntry)
            set((s) => ({
              tutorial: { ...s.tutorial, firstLogGenerated: true }
            }))
          }
        }

        if (milestone.autoUnlockAchievements && milestone.autoUnlockAchievements.length > 0) {
          const newlyUnlocked = []
          milestone.autoUnlockAchievements.forEach((achId) => {
            if (!state.unlockedAchievements.includes(achId)) {
              newlyUnlocked.push(achId)
            }
          })
          if (newlyUnlocked.length > 0) {
            set((s) => ({
              unlockedAchievements: [...s.unlockedAchievements, ...newlyUnlocked]
            }))
            newlyUnlocked.forEach((id) => {
              const ach = getAchievementById(id)
              if (ach) {
                get().addLog({
                  type: 'achievement',
                  achievementId: id,
                  achievementName: ach.name,
                  timestamp: Date.now()
                })
              }
            })
          }
        }

        if (milestone.toast) {
          get().showMilestoneToast({
            id: milestoneId,
            icon: milestone.toast.icon,
            title: milestone.toast.title,
            message: milestone.toast.message,
            actionText: milestone.toast.actionText,
            actionPanel: milestone.toast.actionPanel,
            highlightAchievement: milestone.toast.highlightAchievement,
            milestoneToast: true
          })
        } else if (milestone.guidance) {
          get().showMilestoneToast({
            id: milestoneId,
            icon: milestone.guidance.icon,
            title: milestone.guidance.title,
            message: milestone.guidance.message,
            tips: milestone.guidance.tips,
            suggestion: milestone.guidance.suggestion,
            guidance: true,
            milestoneToast: true
          })
        }
      },

      showMilestoneToast: (toastData) => {
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            pendingMilestoneToast: { ...toastData, timestamp: Date.now() }
          }
        }))
      },

      clearMilestoneToast: () => {
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            pendingMilestoneToast: null
          }
        }))
      },

      triggerContextualHint: (hintId) => {
        const state = get()
        const hint = getContextualHintById(hintId)
        if (!hint) return
        if (hint.onlyOnce && state.tutorial.firedContextualHints.includes(hintId)) return
        if (hint.onlyDuringTutorial && !state.tutorial.started) return
        if (hint.onlyDuringTutorial && state.tutorial.completed) return

        set((s) => ({
          tutorial: {
            ...s.tutorial,
            firedContextualHints: hint.onlyOnce
              ? [...s.tutorial.firedContextualHints, hintId]
              : s.tutorial.firedContextualHints,
            pendingContextualHint: {
              id: hint.id,
              icon: hint.icon,
              title: hint.title,
              message: hint.message,
              suggestedAction: hint.suggestedAction,
              priority: hint.priority,
              timestamp: Date.now()
            }
          }
        }))
      },

      clearContextualHint: () => {
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            pendingContextualHint: null
          }
        }))
      },

      executeSuggestedAction: (actionType) => {
        switch (actionType) {
          case 'open_tasks_panel':
            get().setActivePanel('tasks')
            break
          case 'open_atlas':
            get().openAtlasList()
            break
          case 'open_achievements':
            get().setActivePanel('achievements')
            break
          case 'open_tutorial':
            get().setActivePanel('tutorial')
            break
          default:
            break
        }
      },

      recordActivity: () => {
        set((state) => ({
          tutorial: {
            ...state.tutorial,
            lastActivityTime: Date.now()
          }
        }))
      },

      checkTutorialProgress: () => {
        const state = get()
        if (!state.tutorial.started || state.tutorial.completed) return

        const currentStep = getTutorialStepById(state.tutorial.currentStepId)
        if (!currentStep) return

        const validation = currentStep.validation
        if (!validation) return

        let shouldAdvance = false

        switch (validation.type) {
          case 'target_selected':
            shouldAdvance = !!state.currentTargetConstellation
            break
          case 'star_connected':
            shouldAdvance = state.connectionPath.length >= (validation.count || 1)
            if (shouldAdvance && state.connectionPath.length >= 1) {
              const lastStar = state.connectionPath[state.connectionPath.length - 1]
              get().triggerMilestone('first_star_connect', { starId: lastStar })
            }
            break
          case 'constellation_complete':
            shouldAdvance = state.observationLogs.length > 0 &&
              ['discovery', 'reobservation'].includes(state.observationLogs[0].type)
            break
          case 'perfect_observation': {
            const hasPerfect = Object.keys(state.perfectObservations).length > 0
            shouldAdvance = hasPerfect
            break
          }
          case 'panel_opened':
            shouldAdvance = state.tutorial.panelsVisited.includes(validation.panel)
            break
        }

        if (shouldAdvance) {
          get().completeTutorialStep(currentStep.id)
        }
      },

      checkAdvancedTasks: () => {
        const state = get()
        const newlyCompleted = []

        ADVANCED_TASKS.forEach((task) => {
          if (state.tutorial.advancedTasksCompleted.includes(task.id)) return

          const { type, value } = task.condition
          let completed = false

          switch (type) {
            case 'discover_count':
              completed = state.discoveredConstellations.length >= value
              break
            case 'perfect_count':
              completed = Object.keys(state.perfectObservations).length >= value
              break
            case 'log_count':
              completed = state.observationLogs.filter(
                l => l.type === 'discovery' || l.type === 'reobservation'
              ).length >= value
              break
            case 'checkin_count':
              completed = state.observationCalendar.totalCheckinDays >= value
              break
          }

          if (completed) {
            newlyCompleted.push(task)
          }
        })

        if (newlyCompleted.length > 0) {
          set((state) => ({
            tutorial: {
              ...state.tutorial,
              advancedTasksCompleted: [
                ...state.tutorial.advancedTasksCompleted,
                ...newlyCompleted.map(t => t.id)
              ]
            }
          }))

          newlyCompleted.forEach((task) => {
            if (task.reward?.stardust) {
              get().addStardust(task.reward.stardust, `进阶任务：${task.name}`)
            }
            get().addLog({
              type: 'tutorial_advanced_task',
              taskId: task.id,
              taskName: task.name,
              reward: task.reward,
              timestamp: Date.now()
            })
          })
        }

        return newlyCompleted
      },

      claimTutorialReward: (rewardKey) => {
        const state = get()
        const reward = TUTORIAL_REWARDS[rewardKey]
        if (!reward) return { success: false, reason: 'reward_not_found' }

        if (state.tutorial.rewardsClaimed.includes(reward.id)) {
          return { success: false, reason: 'already_claimed' }
        }

        let canClaim = false
        switch (rewardKey) {
          case 'completion':
            canClaim = state.tutorial.completed
            break
          case 'perfect':
            canClaim = state.tutorial.completed && state.tutorial.mistakesDuringTutorial === 0
            break
          case 'advanced':
            canClaim = state.tutorial.advancedTasksCompleted.length === ADVANCED_TASKS.length
            break
        }

        if (!canClaim) {
          return { success: false, reason: 'not_eligible' }
        }

        if (reward.stardust) {
          get().addStardust(reward.stardust, `结业奖励：${reward.name}`)
        }

        set((s) => ({
          tutorial: {
            ...s.tutorial,
            rewardsClaimed: [...s.tutorial.rewardsClaimed, reward.id]
          }
        }))

        get().addLog({
          type: 'tutorial_reward',
          rewardId: reward.id,
          rewardName: reward.name,
          timestamp: Date.now()
        })

        return { success: true, reward }
      },

      getTutorialProgress: () => {
        const state = get()
        return calculateTutorialProgress(state.tutorial.completedSteps)
      },

      getTutorialStats: () => {
        const state = get()
        const t = state.tutorial
        const progress = calculateTutorialProgress(t.completedSteps)
        const allAdvancedCompleted = t.advancedTasksCompleted.length === ADVANCED_TASKS.length
        const isPerfect = t.completed && t.mistakesDuringTutorial === 0
        const allPhaseProgress = getAllPhaseProgress(t.completedSteps)
        const currentPhase = getCurrentPhase(t.completedSteps, t.currentStepId)
        const currentPhaseProgress = currentPhase
          ? calculatePhaseProgress(t.completedSteps, currentPhase.id)
          : null

        return {
          started: t.started,
          completed: t.completed,
          progress,
          currentStepId: t.currentStepId,
          completedStepsCount: t.completedSteps.length,
          totalSteps: TUTORIAL_STEPS.length,
          mistakesDuringTutorial: t.mistakesDuringTutorial,
          advancedTasksCompleted: t.advancedTasksCompleted.length,
          totalAdvancedTasks: ADVANCED_TASKS.length,
          allAdvancedCompleted,
          isPerfect,
          rewardsClaimed: t.rewardsClaimed.length,
          totalRewards: Object.keys(TUTORIAL_REWARDS).length,
          startedAt: t.startedAt,
          completedAt: t.completedAt,
          completedPhases: t.completedPhases.length,
          totalPhases: TUTORIAL_PHASES.length,
          currentPhase,
          currentPhaseProgress,
          allPhaseProgress,
          triggeredMilestones: t.triggeredMilestones.length,
          totalMilestones: Object.keys(TUTORIAL_MILESTONES).length,
          milestones: {
            firstStarConnected: t.firstStarConnected,
            firstConstellationDiscovered: t.firstConstellationDiscovered,
            firstAchievementUnlocked: t.firstAchievementUnlocked,
            firstMistakeMade: t.firstMistakeMade,
            firstPerfectObserved: t.firstPerfectObserved,
            firstLogGenerated: t.firstLogGenerated
          }
        }
      },

      starRoute: {
        currentRoute: null,
        routeHistory: [],
        difficultyPreference: 'balanced',
        totalRoutesCompleted: 0,
        perfectRoutes: 0
      },

      setDifficultyPreference: (preferenceId) => {
        if (!DIFFICULTY_PREFERENCE[preferenceId]) return false
        set((state) => ({
          starRoute: { ...state.starRoute, difficultyPreference: preferenceId }
        }))
        return true
      },

      generateNewRoute: (routeType) => {
        const state = get()
        const route = generateRoute(
          routeType,
          state.starRoute.difficultyPreference,
          state.discoveredConstellations,
          state.perfectObservations,
          state.totalObservations
        )

        set((state) => ({
          starRoute: { ...state.starRoute, currentRoute: route }
        }))

        get().addLog({
          type: 'route_start',
          routeId: route.id,
          routeName: route.name,
          routeType: route.type,
          totalSteps: route.steps.length,
          timestamp: Date.now()
        })

        return route
      },

      getCurrentRoute: () => {
        return get().starRoute.currentRoute
      },

      getCurrentRouteProgress: () => {
        const route = get().starRoute.currentRoute
        return calculateRouteProgress(route)
      },

      updateRouteStep: (constellationId, isPerfect) => {
        const state = get()
        const route = state.starRoute.currentRoute
        if (!route || route.status !== 'active') return null

        const stepIndex = route.steps.findIndex(s => s.constellationId === constellationId)
        if (stepIndex === -1) return null

        if (stepIndex !== route.currentStepIndex) return null

        const step = route.steps[stepIndex]
        if (step.status === 'completed') return null

        const updatedSteps = route.steps.map((s, i) =>
          i === stepIndex
            ? { ...s, status: 'completed', perfect: isPerfect, completedAt: Date.now() }
            : s
        )

        const completedCount = updatedSteps.filter(s => s.status === 'completed').length
        const isComplete = completedCount === updatedSteps.length

        const updatedRoute = {
          ...route,
          steps: updatedSteps,
          currentStepIndex: isComplete ? route.steps.length : Math.min(stepIndex + 1, route.steps.length - 1),
          status: isComplete ? 'completed' : 'active',
          completedAt: isComplete ? Date.now() : null
        }

        set((state) => ({
          starRoute: {
            ...state.starRoute,
            currentRoute: isComplete ? null : updatedRoute,
            routeHistory: isComplete
              ? [updatedRoute, ...state.starRoute.routeHistory].slice(0, 50)
              : state.starRoute.routeHistory,
            totalRoutesCompleted: isComplete
              ? state.starRoute.totalRoutesCompleted + 1
              : state.starRoute.totalRoutesCompleted,
            perfectRoutes: isComplete && isRoutePerfect(updatedRoute)
              ? state.starRoute.perfectRoutes + 1
              : state.starRoute.perfectRoutes
          }
        }))

        if (isComplete) {
          get().addLog({
            type: 'route_complete',
            routeId: updatedRoute.id,
            routeName: updatedRoute.name,
            routeType: updatedRoute.type,
            perfect: isRoutePerfect(updatedRoute),
            completedSteps: completedCount,
            timestamp: Date.now()
          })

          get().checkRouteAchievements()
        }

        return { updatedRoute, stepIndex, isComplete }
      },

      abandonRoute: () => {
        const state = get()
        const route = state.starRoute.currentRoute
        if (!route) return false

        get().addLog({
          type: 'route_abandon',
          routeId: route.id,
          routeName: route.name,
          completedSteps: route.steps.filter(s => s.status === 'completed').length,
          totalSteps: route.steps.length,
          timestamp: Date.now()
        })

        set((state) => ({
          starRoute: { ...state.starRoute, currentRoute: null }
        }))
        return true
      },

      getRouteHistory: () => {
        return get().starRoute.routeHistory
      },

      getRouteStats: () => {
        const state = get()
        return getRouteStats(state.starRoute.routeHistory)
      },

      checkRouteAchievements: () => {
        const state = get()
        const sr = state.starRoute
        const newlyUnlocked = []

        ROUTE_ACHIEVEMENTS.forEach((achievement) => {
          if (state.unlockedAchievements.includes(achievement.id)) return

          const { type, value } = achievement.condition
          let unlocked = false

          switch (type) {
            case 'route_complete':
              unlocked = sr.totalRoutesCompleted >= value
              break
            case 'route_type_complete': {
              const completedOfType = sr.routeHistory.filter(
                r => r.status === 'completed' && r.type === value
              ).length
              unlocked = completedOfType >= 1
              break
            }
            case 'route_perfect':
              unlocked = sr.perfectRoutes >= value
              break
          }

          if (unlocked) {
            newlyUnlocked.push(achievement.id)
          }
        })

        if (newlyUnlocked.length > 0) {
          set((state) => ({
            unlockedAchievements: [...state.unlockedAchievements, ...newlyUnlocked]
          }))

          newlyUnlocked.forEach((id) => {
            const achievement = getRouteAchievementById(id)
            if (achievement) {
              get().addLog({
                type: 'achievement',
                achievementId: id,
                achievementName: achievement.name,
                timestamp: Date.now()
              })
            }
          })
        }

        return newlyUnlocked
      },

      research: {
        xp: 0,
        startedTopicIds: [],
        completedTopicIds: [],
        topicProgress: {},
        claimedTopicRewards: [],
        readMaterials: {},
        readMythologies: [],
        passedExams: [],
        examHistory: [],
        notes: [],
        activeExam: null,
        activeTopicId: null,
        activeMaterialId: null,
        unlockedBadges: []
      },

      getResearchStats: () => {
        const state = get()
        const r = state.research
        const currentRank = calculateRank(r.xp)
        const nextRank = getNextRank(currentRank.id)
        const xpToNext = nextRank ? nextRank.xpRequired - r.xp : 0
        const xpProgressInRank = nextRank
          ? Math.round(((r.xp - currentRank.xpRequired) / (nextRank.xpRequired - currentRank.xpRequired)) * 100)
          : 100

        return {
          xp: r.xp,
          currentRank,
          nextRank,
          xpToNext,
          xpProgressInRank,
          startedTopics: r.startedTopicIds.length,
          completedTopics: r.completedTopicIds.length,
          totalTopics: RESEARCH_TOPICS.length,
          readMaterials: Object.keys(r.readMaterials).length,
          totalMaterials: Object.keys(RESEARCH_MATERIALS).length,
          passedExams: r.passedExams.length,
          totalExams: Object.keys(RESEARCH_EXAMS).length,
          notesCount: r.notes.length,
          badgesCount: r.unlockedBadges.length
        }
      },

      addResearchXP: (amount, reason) => {
        set((state) => ({
          research: { ...state.research, xp: state.research.xp + amount }
        }))
        get().addLog({
          type: 'research_xp',
          amount,
          reason: reason || '获得研究经验',
          timestamp: Date.now()
        })
      },

      startResearchTopic: (topicId) => {
        const state = get()
        const topic = getTopicById(topicId)
        if (!topic) return { success: false, error: '课题不存在' }

        const currentRank = calculateRank(state.research.xp)
        const requiredRank = getRankById(topic.rankRequired)
        if (requiredRank && currentRank.level < requiredRank.level) {
          return {
            success: false,
            error: `需要达到「${requiredRank.name}」等级才能开始此课题`
          }
        }

        if (state.research.startedTopicIds.includes(topicId)) {
          return { success: false, error: '课题已开始' }
        }

        set((s) => ({
          research: {
            ...s.research,
            startedTopicIds: [...s.research.startedTopicIds, topicId],
            activeTopicId: topicId,
            topicProgress: {
              ...s.research.topicProgress,
              [topicId]: 0
            }
          }
        }))

        get().addLog({
          type: 'research_topic_start',
          topicId,
          topicName: topic.title,
          timestamp: Date.now()
        })

        return { success: true, topic }
      },

      setActiveResearchTopic: (topicId) => {
        set((state) => ({
          research: { ...state.research, activeTopicId: topicId }
        }))
      },

      getTopicProgress: (topicId) => {
        const state = get()
        const topic = getTopicById(topicId)
        if (!topic) return null

        const researchState = {
          discoveredConstellations: state.discoveredConstellations,
          perfectObservations: state.perfectObservations,
          totalObservations: state.totalObservations,
          observationLogs: state.observationLogs,
          completedTopicIds: state.research.completedTopicIds,
          readMaterials: state.research.readMaterials,
          readMythologies: state.research.readMythologies,
          notes: state.research.notes,
          passedExams: state.research.passedExams
        }

        let totalRewards = 0
        let earnedRewards = 0
        const objectives = topic.objectives.map((obj) => {
          const progress = getProgressForObjective(obj, researchState)
          totalRewards += obj.reward || 0
          if (progress.completed) earnedRewards += obj.reward || 0
          return { ...obj, progress }
        })

        const allCompleted = objectives.every(o => o.progress.completed)
        const percentage = objectives.length > 0
          ? Math.round(objectives.reduce((sum, o) => sum + o.progress.percentage, 0) / objectives.length)
          : 0

        const exam = topic.examId ? getExamById(topic.examId) : null
        const examPassed = exam ? state.research.passedExams.includes(exam.id) : false

        const isCompleted = state.research.completedTopicIds.includes(topicId)

        return {
          topic,
          objectives,
          allObjectivesCompleted: allCompleted,
          percentage,
          exam,
          examPassed,
          isCompleted,
          totalRewards,
          earnedRewards,
          canClaim: allCompleted && examPassed && !isCompleted
        }
      },

      checkTopicProgress: () => {
        const state = get()
        const updates = {}
        let changed = false

        state.research.startedTopicIds.forEach((topicId) => {
          const progress = state.getTopicProgress(topicId)
          if (!progress) return
          const oldProgress = state.research.topicProgress[topicId] || 0
          if (progress.percentage !== oldProgress) {
            updates[topicId] = progress.percentage
            changed = true
          }
        })

        if (changed) {
          set((s) => ({
            research: {
              ...s.research,
              topicProgress: { ...s.research.topicProgress, ...updates }
            }
          }))
        }
      },

      completeResearchTopic: (topicId) => {
        const state = get()
        const progress = state.getTopicProgress(topicId)
        if (!progress) return { success: false, error: '课题不存在' }
        if (!progress.canClaim) return { success: false, error: '课题尚未完成' }

        const topic = progress.topic
        set((s) => ({
          research: {
            ...s.research,
            completedTopicIds: [...s.research.completedTopicIds, topicId],
            claimedTopicRewards: [...s.research.claimedTopicRewards, topicId]
          }
        }))

        get().addResearchXP(topic.xpReward, `课题完成：${topic.title}`)
        get().addStardust(Math.floor(topic.xpReward * 2), `研究院课题奖励`)

        get().addLog({
          type: 'research_topic_complete',
          topicId,
          topicName: topic.title,
          xpReward: topic.xpReward,
          timestamp: Date.now()
        })

        return { success: true, topic, xpReward: topic.xpReward }
      },

      readMaterial: (materialId) => {
        const state = get()
        const material = getMaterialById(materialId)
        if (!material) return false

        const unlocked = isMaterialUnlocked(material, state.research)
        if (!unlocked) return false

        if (state.research.readMaterials[materialId]) {
          set((s) => ({
            research: { ...s.research, activeMaterialId: materialId }
          }))
          return true
        }

        set((s) => ({
          research: {
            ...s.research,
            readMaterials: { ...s.research.readMaterials, [materialId]: Date.now() },
            activeMaterialId: materialId
          }
        }))

        get().addResearchXP(5, `阅读资料：${material.title}`)
        get().checkTopicProgress()
        return true
      },

      setActiveMaterial: (materialId) => {
        set((state) => ({
          research: { ...state.research, activeMaterialId: materialId }
        }))
      },

      isMaterialAccessible: (materialId) => {
        const state = get()
        const material = getMaterialById(materialId)
        if (!material) return false
        return isMaterialUnlocked(material, state.research)
      },

      getAccessibleMaterials: () => {
        const state = get()
        return Object.values(RESEARCH_MATERIALS).filter(m =>
          isMaterialUnlocked(m, state.research)
        )
      },

      recordMythologyRead: (constellationId) => {
        const state = get()
        if (state.research.readMythologies.includes(constellationId)) return
        set((s) => ({
          research: {
            ...s.research,
            readMythologies: [...s.research.readMythologies, constellationId]
          }
        }))
        get().checkTopicProgress()
      },

      addResearchNote: (noteData) => {
        const note = {
          id: `note_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
          createdAt: Date.now(),
          ...noteData
        }
        set((state) => ({
          research: {
            ...state.research,
            notes: [note, ...state.research.notes].slice(0, 100)
          }
        }))
        get().checkTopicProgress()
        return note
      },

      startExam: (examId) => {
        const state = get()
        const exam = getExamById(examId)
        if (!exam) return { success: false, error: '考核不存在' }

        if (state.research.activeExam) {
          return { success: false, error: '已有进行中的考核' }
        }

        const activeExam = {
          examId,
          answers: {},
          startTime: Date.now(),
          currentQuestionIndex: 0
        }

        set((s) => ({
          research: { ...s.research, activeExam }
        }))

        return { success: true, exam, activeExam }
      },

      answerExamQuestion: (questionId, answer) => {
        const state = get()
        const activeExam = state.research.activeExam
        if (!activeExam) return null

        const exam = getExamById(activeExam.examId)
        if (!exam) return null

        const question = exam.questions.find(q => q.id === questionId)
        if (!question) return null

        const isCorrect = checkExamAnswer(question, answer)

        set((s) => ({
          research: {
            ...s.research,
            activeExam: {
              ...s.research.activeExam,
              answers: {
                ...s.research.activeExam.answers,
                [questionId]: { answer, isCorrect }
              },
              currentQuestionIndex: s.research.activeExam.currentQuestionIndex + 1
            }
          }
        }))

        return { isCorrect, correctAnswer: question.answer, isLast: activeExam.currentQuestionIndex + 1 >= exam.questions.length }
      },

      finishExam: () => {
        const state = get()
        const activeExam = state.research.activeExam
        if (!activeExam) return null

        const exam = getExamById(activeExam.examId)
        if (!exam) return null

        let totalScore = 0
        let maxScore = 0

        exam.questions.forEach((q) => {
          maxScore += q.score
          const userAnswer = activeExam.answers[q.id]
          if (userAnswer?.isCorrect) {
            totalScore += q.score
          }
        })

        const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
        const passed = percentage >= exam.passScore

        const record = {
          examId: exam.id,
          examTitle: exam.title,
          score: totalScore,
          maxScore,
          percentage,
          passed,
          duration: Date.now() - activeExam.startTime,
          answers: activeExam.answers,
          timestamp: Date.now()
        }

        const newPassed = passed && !state.research.passedExams.includes(exam.id)

        set((s) => ({
          research: {
            ...s.research,
            activeExam: null,
            examHistory: [record, ...s.research.examHistory].slice(0, 50),
            passedExams: newPassed
              ? [...s.research.passedExams, exam.id]
              : s.research.passedExams
          }
        }))

        if (newPassed) {
          get().addResearchXP(exam.xpReward, `通过考核：${exam.title}`)
          get().addStardust(Math.floor(exam.xpReward * 1.5), `研究院考核通过奖励`)
        }

        get().addLog({
          type: 'research_exam',
          examId: exam.id,
          examTitle: exam.title,
          score: percentage,
          passed,
          timestamp: Date.now()
        })

        get().checkTopicProgress()

        return record
      },

      abandonExam: () => {
        set((state) => ({
          research: { ...state.research, activeExam: null }
        }))
      },

      getExamRecord: (examId) => {
        const state = get()
        return state.research.examHistory.find(r => r.examId === examId) || null
      },

      getExamBestScore: (examId) => {
        const state = get()
        const records = state.research.examHistory.filter(r => r.examId === examId)
        if (records.length === 0) return null
        return records.reduce((best, r) => r.percentage > best.percentage ? r : best)
      },

      dailyCommissions: {
        date: null,
        tasks: [],
        totalCompleted: 0,
        totalHardCompleted: 0,
        streakDays: 0,
        lastCompleteAllDate: null
      },

      getOrRefreshDailyCommissions: () => {
        const state = get()
        const today = new Date().toDateString()
        const dc = state.dailyCommissions

        if (dc.date === today && dc.tasks.length > 0) {
          return dc.tasks
        }

        if (dc.tasks && dc.tasks.length > 0) {
          const unclaimedCompleted = dc.tasks.filter(t => t.completed && !t.claimed)
          if (unclaimedCompleted.length > 0) {
            let totalAutoReward = 0
            const updatedPrevTasks = dc.tasks.map(t => {
              if (t.completed && !t.claimed) {
                totalAutoReward += t.reward
                get().addLog({
                  type: 'daily_commission_claim',
                  commissionId: t.id,
                  commissionName: `${t.name}（自动领取）`,
                  reward: t.reward,
                  timestamp: Date.now()
                })
                return { ...t, claimed: true }
              }
              return t
            })
            if (totalAutoReward > 0) {
              get().addStardust(totalAutoReward, '每日委托自动结算')
            }
            dc.tasks = updatedPrevTasks
          }
        }

        const newTasks = generateDailyCommissions(
          state.discoveredConstellations,
          state.perfectObservations,
          state.totalObservations
        )

        set((s) => ({
          dailyCommissions: {
            ...s.dailyCommissions,
            date: today,
            tasks: newTasks
          }
        }))

        return newTasks
      },

      getDailyCommissionProgressAll: () => {
        const state = get()
        const dc = state.dailyCommissions
        if (!dc.tasks || dc.tasks.length === 0) return []

        const streak = state.getObservationStreak()

        return dc.tasks.map(task => {
          const progress = getDailyCommissionProgress(
            task,
            state.observationLogs,
            state.discoveredConstellations,
            state.perfectObservations,
            state.totalObservations,
            streak.currentStreak,
            streak
          )
          return { ...task, ...progress }
        })
      },

      checkDailyCommissions: () => {
        const state = get()
        const dc = state.dailyCommissions
        if (!dc.tasks || dc.tasks.length === 0) return []

        const newlyCompleted = []
        const streak = state.getObservationStreak()

        const updatedTasks = dc.tasks.map(task => {
          if (task.completed) return task

          const progress = getDailyCommissionProgress(
            task,
            state.observationLogs,
            state.discoveredConstellations,
            state.perfectObservations,
            state.totalObservations,
            streak.currentStreak,
            streak
          )

          if (progress.completed && !task.completed) {
            newlyCompleted.push({ ...task, ...progress })
            return { ...task, completed: true, current: progress.current }
          }

          return { ...task, current: progress.current }
        })

        if (newlyCompleted.length > 0) {
          const newTotalCompleted = state.dailyCommissions.totalCompleted + newlyCompleted.length
          const newHardCompleted = state.dailyCommissions.totalHardCompleted +
            newlyCompleted.filter(t => t.difficulty === COMMISSION_DIFFICULTY.HARD).length

          let newStreakDays = state.dailyCommissions.streakDays
          let newLastCompleteAllDate = state.dailyCommissions.lastCompleteAllDate

          const allCompleted = updatedTasks.every(t => t.completed)
          const today = new Date().toDateString()
          if (allCompleted) {
            const yesterday = new Date()
            yesterday.setDate(yesterday.getDate() - 1)
            const yesterdayStr = yesterday.toDateString()

            if (state.dailyCommissions.lastCompleteAllDate === yesterdayStr) {
              newStreakDays = state.dailyCommissions.streakDays + 1
            } else if (state.dailyCommissions.lastCompleteAllDate !== today) {
              newStreakDays = 1
            }
            newLastCompleteAllDate = today
          }

          set((s) => ({
            dailyCommissions: {
              ...s.dailyCommissions,
              tasks: updatedTasks,
              totalCompleted: newTotalCompleted,
              totalHardCompleted: newHardCompleted,
              streakDays: newStreakDays,
              lastCompleteAllDate: newLastCompleteAllDate
            }
          }))

          newlyCompleted.forEach(task => {
            get().addLog({
              type: 'daily_commission_complete',
              commissionId: task.id,
              commissionName: task.name,
              reward: task.reward,
              difficulty: task.difficulty,
              timestamp: Date.now()
            })
          })
        }

        get().checkAchievements()
        return newlyCompleted
      },

      claimDailyCommission: (commissionId) => {
        const state = get()
        const dc = state.dailyCommissions
        const task = dc.tasks.find(t => t.id === commissionId)

        if (!task || !task.completed || task.claimed) {
          return { success: false, reason: 'cannot_claim' }
        }

        set((s) => ({
          dailyCommissions: {
            ...s.dailyCommissions,
            tasks: s.dailyCommissions.tasks.map(t =>
              t.id === commissionId ? { ...t, claimed: true } : t
            )
          }
        }))

        get().addStardust(task.reward, `每日委托：${task.name}`)

        get().addLog({
          type: 'daily_commission_claim',
          commissionId: task.id,
          commissionName: task.name,
          reward: task.reward,
          timestamp: Date.now()
        })

        return { success: true, reward: task.reward, task }
      },

      getDailyCommissionStats: () => {
        const state = get()
        const dc = state.dailyCommissions
        const tasks = state.getDailyCommissionProgressAll()
        const completedToday = tasks.filter(t => t.completed).length
        const claimedToday = tasks.filter(t => t.claimed).length
        const totalReward = tasks.reduce((sum, t) => sum + t.reward, 0)
        const claimedReward = tasks.filter(t => t.claimed).reduce((sum, t) => sum + t.reward, 0)

        return {
          totalCompleted: dc.totalCompleted,
          totalHardCompleted: dc.totalHardCompleted,
          streakDays: dc.streakDays,
          tasksToday: tasks.length,
          completedToday,
          claimedToday,
          totalReward,
          claimedReward,
          allCompleted: completedToday === tasks.length && tasks.length > 0
        }
      },

      generateWeeklyReport: (date = new Date()) => {
        const state = get()
        return generateReport(REPORT_TYPES.WEEKLY, date, state)
      },

      generateMonthlyReport: (date = new Date()) => {
        const state = get()
        return generateReport(REPORT_TYPES.MONTHLY, date, state)
      },

      exportReportAsText: (report) => {
        return exportReportAsText(report)
      },

      shareReport: (report, templateId = 'explorer') => {
        return shareReport(report, templateId)
      },

      copyReportToClipboard: async (report) => {
        const text = exportReportAsText(report)
        try {
          await navigator.clipboard.writeText(text)
          return { success: true }
        } catch (e) {
          return { success: false, error: e }
        }
      },

      downloadReportAsText: (report) => {
        const text = exportReportAsText(report)
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${report.title}_${report.subtitle.replace(/\s/g, '_')}.txt`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      },

      isConstellationComplete: (constellationId) =>
        get().discoveredConstellations.includes(constellationId),

      getGuideConstellations: (limit = 3) => {
        const state = get()
        const currentSeason = getCurrentSeason()
        const seasonIds = getSeasonConstellations(currentSeason)
        const discovered = state.discoveredConstellations
        const perfect = state.perfectObservations

        const undiscoveredInSeason = seasonIds.filter(id => !discovered.includes(id))
        const discoveredButNotPerfect = seasonIds.filter(id =>
          discovered.includes(id) && !perfect[id]
        )

        let result = [...undiscoveredInSeason]

        if (result.length < limit) {
          const otherSeasonsUndiscovered = CONSTELLATIONS
            .filter(c => !seasonIds.includes(c.id) && !discovered.includes(c.id))
            .sort((a, b) => a.difficulty - b.difficulty)
            .map(c => c.id)
          result = [...result, ...otherSeasonsUndiscovered]
        }

        if (result.length < limit) {
          result = [...result, ...discoveredButNotPerfect]
        }

        return result.slice(0, limit)
      },

      getNightSkyState: () => {
        const state = get()
        return {
          discoveredConstellations: state.discoveredConstellations,
          perfectObservations: state.perfectObservations,
          guideConstellations: state.getGuideConstellations(3),
          currentTarget: state.currentTargetConstellation
        }
      },

      getProgress: () => {
        const state = get()
        const totalAchievements = ACHIEVEMENTS.length + SEASON_ACHIEVEMENTS.length + QUIZ_ACHIEVEMENTS.length + ROUTE_ACHIEVEMENTS.length + DAILY_ACHIEVEMENTS.length
        const dcStats = state.getDailyCommissionStats()
        const streak = state.getObservationStreak()
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
          quizCorrect: state.quiz?.totalCorrect || 0,
          routesCompleted: state.starRoute?.totalRoutesCompleted || 0,
          perfectRoutes: state.starRoute?.perfectRoutes || 0,
          dailyCommissionsCompleted: dcStats.totalCompleted,
          dailyCommissionsStreak: dcStats.streakDays,
          observationStreak: streak.currentStreak,
          longestObservationStreak: streak.longestStreak,
          totalObservationDays: streak.totalObservationDays
        }
      },

      getAchievementProgress: (achievement) => {
        const state = get()
        const { type, value } = achievement.condition
        let current = 0
        let target = 1
        let hint = ''
        let relatedPanel = null

        switch (type) {
          case 'connect_count':
            current = state.connectionPath.length
            target = value
            hint = `继续完成星星连线`
            break
          case 'discover_count':
            current = state.discoveredConstellations.length
            target = value
            hint = current < target ? `再发现 ${target - current} 个星座即可解锁` : '已达成'
            relatedPanel = current < target ? 'atlas' : null
            break
          case 'difficulty_clear': {
            const constellationsOfDifficulty = CONSTELLATIONS.filter(c => c.difficulty === value)
            current = constellationsOfDifficulty.filter(c => state.discoveredConstellations.includes(c.id)).length
            target = constellationsOfDifficulty.length
            const diffLabels = { 1: '入门', 2: '进阶', 3: '挑战' }
            hint = current < target
              ? `完成剩余 ${target - current} 个${diffLabels[value] || ''}难度星座`
              : '已达成'
            relatedPanel = current < target ? 'atlas' : null
            break
          }
          case 'log_count':
            current = state.observationLogs.length
            target = value
            hint = current < target ? `再记录 ${target - current} 条观测日志` : '已达成'
            relatedPanel = current < target ? 'log' : null
            break
          case 'perfect_constellation': {
            const constellation = getConstellationById(value)
            const latestPerfect = state.observationLogs.find(
              l => l.constellationId === value && l.perfect === true
            )
            current = latestPerfect ? 1 : 0
            target = 1
            hint = latestPerfect
              ? '已达成'
              : `完美通关「${constellation?.name || '该星座'}」（零错误）`
            relatedPanel = !latestPerfect ? 'atlas' : null
            break
          }
          case 'total_mistakes':
            current = state.totalMistakes
            target = value
            hint = current < target ? `累计错误连线达到 ${value} 次（当前 ${current}/${target}）` : '已达成'
            break
          case 'season_master': {
            const seasonData = state.seasonProgress?.[value]
            current = seasonData?.master ? 1 : 0
            target = 1
            const seasonNames = { spring: '春季', summer: '夏季', autumn: '秋季', winter: '冬季' }
            if (!seasonData?.beginner) hint = `先完成${seasonNames[value] || '该季节'}入门探索`
            else if (!seasonData?.intermediate) hint = `完成${seasonNames[value] || '该季节'}所有星座的完美观测`
            else if (!seasonData?.master) hint = `进行${seasonNames[value] || '该季节'}深度观测，达成大师等级`
            else hint = '已达成'
            relatedPanel = !seasonData?.master ? 'seasons' : null
            break
          }
          case 'four_seasons': {
            const seasons = Object.keys(SEASONS)
            current = seasons.filter(s => state.seasonProgress?.[s]?.master).length
            target = seasons.length
            hint = current < target ? `完成剩余 ${target - current} 个季节的大师等级` : '已达成'
            relatedPanel = current < target ? 'seasons' : null
            break
          }
          case 'expedition_complete':
            current = state.nightExpedition?.totalCompleted || 0
            target = value
            hint = current < target ? `再完成 ${target - current} 次夜间远征` : '已达成'
            relatedPanel = current < target ? 'expedition' : null
            break
          case 'expedition_stages':
            current = state.nightExpedition?.highestStagesCleared || 0
            target = value
            hint = current < target ? `单次远征通过 ${target} 关（当前最高 ${current} 关）` : '已达成'
            relatedPanel = current < target ? 'expedition' : null
            break
          case 'expedition_perfect':
            current = state.nightExpedition?.totalPerfectStages || 0
            target = value
            hint = current < target ? `累计完美通关 ${target} 个远征关卡（当前 ${current}）` : '已达成'
            relatedPanel = current < target ? 'expedition' : null
            break
          case 'expedition_stardust':
            current = state.nightExpedition?.totalStardustEarned || 0
            target = value
            hint = current < target ? `远征累计获得 ${target} 星尘（当前 ${current}）` : '已达成'
            relatedPanel = current < target ? 'expedition' : null
            break
          case 'quiz_complete':
            current = state.quiz?.totalCompleted || 0
            target = value
            hint = current < target ? `再完成 ${target - current} 次知识问答` : '已达成'
            relatedPanel = current < target ? 'quiz' : null
            break
          case 'quiz_perfect': {
            const perfectRuns = state.quiz?.history?.filter(
              h => h.correct === h.total && h.total >= value
            ).length || 0
            current = perfectRuns
            target = 1
            hint = perfectRuns > 0 ? '已达成' : `以全对成绩完成一次 ${value} 题的问答`
            relatedPanel = perfectRuns === 0 ? 'quiz' : null
            break
          }
          case 'quiz_streak':
            current = state.quiz?.bestStreak || 0
            target = value
            hint = current < target ? `连续答对 ${target} 题（当前最佳 ${current} 题）` : '已达成'
            relatedPanel = current < target ? 'quiz' : null
            break
          case 'quiz_correct':
            current = state.quiz?.totalCorrect || 0
            target = value
            hint = current < target ? `累计答对 ${target} 题（当前 ${current}）` : '已达成'
            relatedPanel = current < target ? 'quiz' : null
            break
          case 'quiz_exchange':
            current = state.quiz?.redeemedRewards?.length || 0
            target = value
            hint = current < target ? `在百科商店兑换 ${target} 次奖励` : '已达成'
            relatedPanel = current < target ? 'quiz' : null
            break
          case 'route_complete':
            current = state.starRoute?.totalRoutesCompleted || 0
            target = value
            hint = current < target ? `再完成 ${target - current} 条观星路线` : '已达成'
            relatedPanel = current < target ? 'route' : null
            break
          case 'route_type_complete': {
            const completedOfType = state.starRoute?.routeHistory?.filter(
              r => r.status === 'completed' && r.type === value
            ).length || 0
            const typeNames = { seasonal: '季节漫游', progressive: '进阶之路', mythology: '神话之旅', quick: '快速打卡' }
            current = completedOfType
            target = 1
            hint = completedOfType > 0 ? '已达成' : `完成一条「${typeNames[value] || value}」路线`
            relatedPanel = completedOfType === 0 ? 'route' : null
            break
          }
          case 'route_perfect':
            current = state.starRoute?.perfectRoutes || 0
            target = value
            hint = current < target ? `以全完美成绩完成 ${target} 条路线（当前 ${current}）` : '已达成'
            relatedPanel = current < target ? 'route' : null
            break
          case 'daily_complete':
            current = state.dailyCommissions?.totalCompleted || 0
            target = value
            hint = current < target ? `累计完成 ${target} 个每日委托（当前 ${current}）` : '已达成'
            relatedPanel = current < target ? 'tasks' : null
            break
          case 'daily_streak':
            current = state.dailyCommissions?.streakDays || 0
            target = value
            hint = current < target ? `连续完成每日委托 ${target} 天（当前 ${current} 天）` : '已达成'
            relatedPanel = current < target ? 'tasks' : null
            break
          case 'daily_hard_complete':
            current = state.dailyCommissions?.totalHardCompleted || 0
            target = value
            hint = current < target ? `累计完成 ${target} 个困难委托（当前 ${current}）` : '已达成'
            relatedPanel = current < target ? 'tasks' : null
            break
          case 'consecutive_perfect':
            current = state.bestConsecutivePerfect || 0
            target = value
            hint = current < target ? `连续完美通关 ${target} 次（最佳 ${current} 次）` : '已达成'
            break
          case 'reobserve_single': {
            const maxObs = Math.max(
              0,
              ...Object.values(state.totalObservations || {}).map(v => Math.max(0, (v || 0) - 1))
            )
            current = maxObs
            target = value
            hint = current < target
              ? `对同一星座重复观测 ${target} 次（当前最高 ${current} 次）`
              : '已达成'
            relatedPanel = current < target ? 'atlas' : null
            break
          }
          case 'reobserve_all_once': {
            const discovered = state.discoveredConstellations
            if (discovered.length === 0) {
              current = 0
              target = 1
              hint = '先发现至少一个星座'
              relatedPanel = 'atlas'
            } else {
              current = discovered.filter(id => (state.totalObservations[id] || 0) >= 2).length
              target = discovered.length
              hint = current < target
                ? `对已发现的每个星座至少重复观测1次（${current}/${target}）`
                : '已达成'
              relatedPanel = current < target ? 'atlas' : null
            }
            break
          }
          case 'total_reobserve': {
            const total = Object.values(state.totalObservations || {}).reduce(
              (sum, v) => sum + Math.max(0, (v || 0) - 1),
              0
            )
            current = total
            target = value
            hint = current < target ? `累计重复观测 ${target} 次（当前 ${current}）` : '已达成'
            relatedPanel = current < target ? 'atlas' : null
            break
          }
          case 'reobserve_perfect_single': {
            const maxPerfect = Math.max(
              0,
              ...Object.values(state.perfectCountPerConstellation || {}).map(v => v || 0)
            )
            current = maxPerfect
            target = value
            hint = current < target
              ? `对同一星座累计完美通关 ${target} 次（当前最高 ${current} 次）`
              : '已达成'
            relatedPanel = current < target ? 'atlas' : null
            break
          }
          case 'single_session_mistakes': {
            const recentObservations = state.observationLogs.filter(
              l => l.type === 'discovery' || l.type === 'reobservation'
            )
            const hasQualified = recentObservations.some(l => (l.mistakes || 0) >= value)
            current = hasQualified ? 1 : 0
            target = 1
            hint = hasQualified ? '已达成' : `单次观测中错误 ${value} 次以上仍完成连线`
            break
          }
          case 'observation_streak': {
            const streak = state.getObservationStreak()
            current = streak.currentStreak
            target = value
            const best = streak.longestStreak
            const alreadyAchieved = best >= target

            if (alreadyAchieved) {
              current = best
              hint = '已达成'
            } else if (streak.todayObserved) {
              hint = `保持连续观测 ${target} 天（当前连续 ${current} 天，历史最长 ${best} 天）`
            } else if (streak.activeStreak > 0) {
              const potential = streak.activeStreak + 1
              hint = `今日观测即可将连续天数从 ${streak.activeStreak} 天延长至 ${potential} 天（目标 ${target} 天，历史最长 ${best} 天）`
              current = streak.activeStreak
            } else {
              hint = `开始你的连续观测吧！（历史最长 ${best} 天，目标 ${target} 天）`
            }
            relatedPanel = !alreadyAchieved ? 'log' : null
            break
          }
          case 'event_participation': {
            const eventHistory = state.nightSkyEvents?.eventHistory || []
            const count = eventHistory.filter(e => e.eventId === value || e.type === value).length
            current = count
            target = 1
            const eventNames = {
              total_lunar_eclipse: '月全食',
              total_solar_eclipse: '日全食',
              blue_moon: '蓝月亮',
              planetary_alignment: '行星连珠',
              comet_visit: '彗星到访'
            }
            hint = current > 0 ? '已达成' : `在${eventNames[value] || '该夜空事件'}期间参与观测`
            relatedPanel = current === 0 ? 'calendar' : null
            break
          }
          case 'meteor_shower_count': {
            const eventHistory = state.nightSkyEvents?.eventHistory || []
            current = eventHistory.filter(e => e.type === 'meteor_shower').length
            target = value
            hint = current < target ? `参与 ${target} 次流星雨（当前 ${current}/${target}）` : '已达成'
            relatedPanel = current < target ? 'calendar' : null
            break
          }
          case 'limited_task_complete': {
            const eventHistory = state.nightSkyEvents?.eventHistory || []
            current = eventHistory.filter(e => e.type === 'limited_task' && (e.taskId === value || e.completed)).length
            target = 1
            hint = current > 0 ? '已达成' : '完成限时特殊任务'
            relatedPanel = current === 0 ? 'calendar' : null
            break
          }
          case 'total_events': {
            const eventHistory = state.nightSkyEvents?.eventHistory || []
            current = eventHistory.length
            target = value
            hint = current < target ? `累计参与 ${target} 次夜空事件（当前 ${current}/${target}）` : '已达成'
            relatedPanel = current < target ? 'calendar' : null
            break
          }
          case 'late_night_events': {
            const eventHistory = state.nightSkyEvents?.eventHistory || []
            current = eventHistory.filter(e => {
              const hour = new Date(e.timestamp || Date.now()).getHours()
              return hour >= 0 && hour < 5
            }).length
            target = value
            hint = current < target ? `在凌晨（0-5点）参与 ${target} 次夜空事件（当前 ${current}/${target}）` : '已达成'
            relatedPanel = current < target ? 'calendar' : null
            break
          }
          default:
            current = 0
            target = 1
            hint = '完成特定条件解锁'
        }

        const percentage = Math.min(100, target > 0 ? (current / target) * 100 : 0)

        return {
          current,
          target,
          percentage: Math.round(percentage * 10) / 10,
          hint,
          relatedPanel
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
          completedPaths: {},
          connectionSnapshots: [],
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
          perfectCountPerConstellation: {},
          consecutivePerfectCount: 0,
          bestConsecutivePerfect: 0,
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
          starGallery: {
            photos: [],
            activeGalleryPanel: 'grid',
            selectedPhotoId: null,
            prefillConstellationId: null,
            galleryFilters: {
              season: 'all',
              difficulty: 'all',
              category: 'all',
              featuredOnly: false,
              search: '',
              sortBy: 'featured'
            }
          },
          tutorial: {
            started: false,
            completed: false,
            currentStepId: null,
            completedSteps: [],
            advancedTasksCompleted: [],
            rewardsClaimed: [],
            mistakesDuringTutorial: 0,
            startedAt: null,
            completedAt: null,
            panelsVisited: [],
            lastErrorHint: null,
            lastErrorTime: null
          },
          starRoute: {
            currentRoute: null,
            routeHistory: [],
            difficultyPreference: 'balanced',
            totalRoutesCompleted: 0,
            perfectRoutes: 0
          },
          research: {
            xp: 0,
            startedTopicIds: [],
            completedTopicIds: [],
            topicProgress: {},
            claimedTopicRewards: [],
            readMaterials: {},
            readMythologies: [],
            passedExams: [],
            examHistory: [],
            notes: [],
            activeExam: null,
            activeTopicId: null,
            activeMaterialId: null,
            unlockedBadges: []
          },
          dailyCommissions: {
            date: null,
            tasks: [],
            totalCompleted: 0,
            totalHardCompleted: 0,
            streakDays: 0,
            lastCompleteAllDate: null
          },
          customTags: []
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
        customTags: state.customTags,
        unlockedAchievements: state.unlockedAchievements,
        totalMistakes: state.totalMistakes,
        seasonProgress: state.seasonProgress,
        seasonRewardsUnlocked: state.seasonRewardsUnlocked,
        seasonRewardsClaimed: state.seasonRewardsClaimed,
        perfectObservations: state.perfectObservations,
        totalObservations: state.totalObservations,
        perfectCountPerConstellation: state.perfectCountPerConstellation,
        consecutivePerfectCount: state.consecutivePerfectCount,
        bestConsecutivePerfect: state.bestConsecutivePerfect,
        seasonHistory: state.seasonHistory,
        favoriteConstellations: state.favoriteConstellations,
        familyMode: state.familyMode,
        nightExpedition: state.nightExpedition,
        observationCalendar: state.observationCalendar,
        quiz: state.quiz,
        team: state.team,
        starGallery: state.starGallery,
        tutorial: state.tutorial,
        storyProgress: state.storyProgress,
        starRoute: state.starRoute,
        research: state.research,
        dailyCommissions: state.dailyCommissions,
        completedPaths: state.completedPaths
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          currentSaveId = loadCurrentSaveId()
          state.initSaveSystem()
        }
      }
    }
  )
)
