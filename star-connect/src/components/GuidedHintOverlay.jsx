import { useState, useEffect, useRef } from 'react'
import { useGameStore } from '../stores/gameStore'
import { getAchievementById } from '../data/achievements'
import { audioManager } from '../modules/AudioManager'

const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 }

export default function GuidedHintOverlay() {
  const {
    tutorial,
    activePanel,
    clearMilestoneToast,
    clearContextualHint,
    executeSuggestedAction,
    setActivePanel,
    openAtlasList,
    getTutorialStats,
    triggerContextualHint
  } = useGameStore()

  const stats = getTutorialStats()
  const [dismissedItems, setDismissedItems] = useState(new Set())
  const idleTimerRef = useRef(null)
  const lastDiscoveryPanelCheckRef = useRef(null)

  const milestone = tutorial.pendingMilestoneToast
  const contextual = tutorial.pendingContextualHint

  useEffect(() => {
    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!tutorial.started || tutorial.completed) return
    if (activePanel) return
    if (milestone || contextual) return

    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current)
    }

    idleTimerRef.current = setTimeout(() => {
      if (!tutorial.currentTargetConstellation) {
        triggerContextualHint('idle_no_target')
      }
    }, 10000)

    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
    }
  }, [tutorial.started, tutorial.completed, tutorial.currentTargetConstellation,
      activePanel, milestone, contextual, tutorial.lastActivityTime, triggerContextualHint])

  useEffect(() => {
    if (!tutorial.started || tutorial.completed) return
    if (!tutorial.panelsVisited.includes('atlas')) return
    if (tutorial.firedContextualHints.includes('after_discovery_suggest_atlas')) return

    const hasDiscovery = tutorial.triggeredMilestones.includes('first_constellation')
    const recentDiscovery = tutorial.triggeredMilestones.includes('first_constellation')
      && lastDiscoveryPanelCheckRef.current !== 'done'

    if (hasDiscovery && recentDiscovery) {
      const timer = setTimeout(() => {
        triggerContextualHint('after_discovery_suggest_atlas')
        lastDiscoveryPanelCheckRef.current = 'done'
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [tutorial.started, tutorial.completed, tutorial.panelsVisited,
      tutorial.triggeredMilestones, tutorial.firedContextualHints, triggerContextualHint])

  const handleMilestoneAction = (m) => {
    if (m.actionPanel) {
      if (m.actionPanel === 'atlas') {
        openAtlasList()
      } else {
        setActivePanel(m.actionPanel)
      }
    }
    clearMilestoneToast()
    const key = `milestone_${m.id}`
    setDismissedItems(prev => new Set([...prev, key]))
  }

  const handleContextualAction = (h) => {
    if (h.suggestedAction) {
      executeSuggestedAction(h.suggestedAction)
    }
    clearContextualHint()
    const key = `ctx_${h.id}`
    setDismissedItems(prev => new Set([...prev, key]))
  }

  useEffect(() => {
    if (milestone) {
      audioManager.ensureContext()
      if (milestone.phaseReward) {
        audioManager.playReward()
      } else if (milestone.guidance) {
      } else {
        audioManager.playAchievement()
      }
    }
  }, [milestone])

  const milestoneDismissKey = milestone ? `milestone_${milestone.id}` : null
  const contextualDismissKey = contextual ? `ctx_${contextual.id}` : null

  if (milestone && milestoneDismissKey && !dismissedItems.has(milestoneDismissKey)) {
    return renderMilestoneToast(milestone, handleMilestoneAction, clearMilestoneToast, stats)
  }

  if (contextual && contextualDismissKey && !dismissedItems.has(contextualDismissKey)) {
    if (milestone && milestoneDismissKey && !dismissedItems.has(milestoneDismissKey)) {
      return null
    }
    return renderContextualHint(contextual, handleContextualAction, clearContextualHint)
  }

  return null
}

function renderMilestoneToast(milestone, onAction, onClose, stats) {
  const isPhaseReward = milestone.phaseReward
  const isGuidance = milestone.guidance
  const achievement = milestone.highlightAchievement
    ? getAchievementById(milestone.highlightAchievement)
    : null

  const borderClass = isPhaseReward
    ? 'border-star-gold/40 shadow-star-gold/20'
    : isGuidance
    ? 'border-nebula-cyan/40 shadow-nebula-cyan/10'
    : 'border-nebula-purple/40 shadow-nebula-purple/15'

  const gradientBg = isPhaseReward
    ? 'bg-gradient-to-br from-star-gold/15 to-nebula-orange/10'
    : isGuidance
    ? 'bg-gradient-to-br from-nebula-cyan/15 to-nebula-purple/10'
    : 'bg-gradient-to-br from-nebula-purple/15 to-nebula-cyan/10'

  const iconGradient = isPhaseReward
    ? 'from-star-gold to-nebula-orange'
    : isGuidance
    ? 'from-nebula-cyan to-blue-500'
    : 'from-nebula-purple to-pink-500'

  return (
    <div className="fixed inset-x-0 top-20 z-[60] flex justify-center px-4 pointer-events-none animate-in slide-in-from-top-6 duration-500">
      <div className={`glass-panel p-5 max-w-md w-full ${borderClass} shadow-2xl pointer-events-auto ${!isGuidance ? 'animate-bounce-in' : ''}`}>
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconGradient}
                        flex items-center justify-center text-3xl flex-shrink-0 shadow-lg
                        ${isPhaseReward ? 'animate-pulse-slow' : ''}`}>
            {milestone.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className={`fs-10 uppercase tracking-wider font-semibold mb-1 ${
              isPhaseReward ? 'text-star-gold' :
              isGuidance ? 'text-nebula-cyan' : 'text-nebula-purple'
            }`}>
              {isPhaseReward ? '阶段达成' :
               isGuidance ? '💡 学习提示' :
               achievement ? '成就 · 里程碑' : '重要时刻'}
            </div>
            <div className="text-white font-display text-lg leading-tight">
              {milestone.title}
            </div>
            <div className="text-white/70 text-sm mt-1.5 leading-relaxed">
              {milestone.message}
            </div>

            {achievement && (
              <div className="mt-3 p-2.5 rounded-xl bg-space-800/60 border border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{achievement.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/90 font-medium">{achievement.name}</div>
                    <div className="fs-10 text-white/50">{achievement.description}</div>
                  </div>
                  <span className="text-star-gold text-xs">+{achievement.reward?.amount || 0} 💫</span>
                </div>
              </div>
            )}

            {milestone.tips && milestone.tips.length > 0 && (
              <div className="mt-3 space-y-1.5">
                {milestone.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-nebula-cyan text-xs mt-0.5">•</span>
                    <span className="fs-11 text-white/60 leading-snug">{tip}</span>
                  </div>
                ))}
              </div>
            )}

            {milestone.suggestion && (
              <div className="mt-2 p-2 rounded-lg bg-star-gold/10 border border-star-gold/20">
                <span className="fs-11 text-star-gold/80">💡 {milestone.suggestion}</span>
              </div>
            )}

            {stats && isPhaseReward && (
              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5">
                  <span className="fs-10 text-white/50">阶段</span>
                  <span className="text-xs text-white/80 font-mono">
                    {stats.completedPhases}/{stats.totalPhases}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5">
                  <span className="fs-10 text-white/50">里程碑</span>
                  <span className="text-xs text-white/80 font-mono">
                    {stats.triggeredMilestones}/{stats.totalMilestones}
                  </span>
                </div>
              </div>
            )}

            <div className="mt-4 flex gap-2">
              {milestone.actionText && (
                <button
                  onClick={() => onAction(milestone)}
                  className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                            hover:shadow-lg active:scale-95 ${
                    isPhaseReward
                      ? 'bg-gradient-to-r from-star-gold to-nebula-orange text-space-900'
                      : isGuidance
                      ? 'bg-gradient-to-r from-nebula-cyan to-blue-500 text-white'
                      : 'bg-gradient-to-r from-nebula-purple to-pink-500 text-white'
                  }`}
                >
                  {milestone.actionText}
                </button>
              )}
              <button
                onClick={() => {
                  onClose()
                  if (milestone.id) {
                    const key = `milestone_${milestone.id}`
                  }
                }}
                className="px-4 py-2.5 rounded-xl text-sm font-medium
                         bg-space-700/60 text-white/70 hover:bg-space-600/70
                         hover:text-white transition-all border border-white/5"
              >
                知道了
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              onClose()
            }}
            className="w-7 h-7 flex items-center justify-center rounded-lg
                     bg-space-700/50 text-white/40 text-xs
                     hover:bg-space-600 hover:text-white transition-all flex-shrink-0"
            aria-label="关闭"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

function renderContextualHint(hint, onAction, onClose) {
  const priorityStyle = {
    high: 'border-red-400/30 bg-gradient-to-br from-red-500/10 to-orange-500/10 shadow-red-500/10',
    medium: 'border-amber-400/30 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 shadow-amber-500/10',
    low: 'border-nebula-cyan/30 bg-gradient-to-br from-nebula-cyan/10 to-blue-500/10 shadow-nebula-cyan/10'
  }
  const iconStyle = {
    high: 'from-red-500 to-orange-400',
    medium: 'from-amber-500 to-yellow-400',
    low: 'from-nebula-cyan to-blue-500'
  }

  return (
    <div className="fixed inset-x-0 bottom-32 z-[55] flex justify-center px-4 pointer-events-none animate-in slide-in-from-bottom-8 duration-400">
      <div className={`glass-panel px-4 py-3.5 max-w-sm w-full ${priorityStyle[hint.priority] || priorityStyle.low}
                    shadow-lg pointer-events-auto`}>
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${iconStyle[hint.priority] || iconStyle.low}
                        flex items-center justify-center text-xl flex-shrink-0 shadow-md`}>
            {hint.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-medium text-sm leading-tight">
              {hint.title}
            </div>
            <div className="text-white/60 text-xs mt-0.5 leading-snug">
              {hint.message}
            </div>
          </div>
          {hint.suggestedAction ? (
            <button
              onClick={() => onAction(hint)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium
                       bg-white/10 text-white/90 hover:bg-white/20
                       transition-all border border-white/10 flex-shrink-0
                       active:scale-95"
            >
              去看看 →
            </button>
          ) : (
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg
                       bg-white/5 text-white/40 text-xs
                       hover:bg-white/10 hover:text-white transition-all flex-shrink-0"
              aria-label="关闭"
            >
              ✓
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
