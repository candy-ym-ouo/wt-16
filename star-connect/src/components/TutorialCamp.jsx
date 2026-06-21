import { useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import {
  TUTORIAL_STEPS,
  ADVANCED_TASKS,
  TUTORIAL_REWARDS,
  getTutorialStepById,
  getTutorialStepsByCategory,
  getAdvancedTaskById,
  calculateTutorialProgress
} from '../data/tutorial'

const CATEGORY_INFO = {
  intro: { name: '欢迎', icon: '✨', color: 'from-star-gold to-nebula-orange' },
  basic: { name: '基础操作', icon: '🎯', color: 'from-green-500 to-emerald-400' },
  explore: { name: '探索发现', icon: '🔍', color: 'from-blue-500 to-cyan-400' },
  advanced: { name: '进阶挑战', icon: '🔥', color: 'from-nebula-orange to-nebula-purple' },
  reward: { name: '结营奖励', icon: '🎁', color: 'from-star-gold to-nebula-purple' }
}

export default function TutorialCamp() {
  const {
    tutorial,
    setActivePanel,
    startTutorial,
    resetTutorial,
    completeTutorialStep,
    setCurrentTutorialStep,
    claimTutorialReward,
    getTutorialStats,
    getTutorialProgress,
    checkTutorialProgress,
    checkAdvancedTasks,
    setTargetConstellation,
    openAtlasList,
    clearTutorialError
  } = useGameStore()

  const stats = getTutorialStats()
  const progress = getTutorialProgress()
  const currentStep = tutorial.currentStepId ? getTutorialStepById(tutorial.currentStepId) : null

  const [viewMode, setViewMode] = useState('overview')
  const [showStepGuide, setShowStepGuide] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (tutorial.lastErrorHint) {
      const timer = setTimeout(() => {
        clearTutorialError()
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [tutorial.lastErrorHint, clearTutorialError])

  const handleStart = () => {
    startTutorial()
    setShowStepGuide(true)
  }

  const handleStepComplete = (stepId) => {
    const nextStep = completeTutorialStep(stepId)
    if (nextStep) {
      showToast('✓ 完成！继续下一步', 'success')
    } else {
      setShowStepGuide(false)
      setViewMode('rewards')
      showToast('🎉 恭喜完成全部课程！', 'success')
    }
  }

  const handleClaimReward = (rewardKey) => {
    const result = claimTutorialReward(rewardKey)
    if (result.success) {
      showToast(`获得「${result.reward.name}」+${result.reward.stardust}星尘`, 'success')
    } else {
      showToast('无法领取该奖励', 'error')
    }
  }

  const showToast = (message, type = 'info') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 2500)
  }

  const groupedSteps = TUTORIAL_STEPS.reduce((acc, step) => {
    if (!acc[step.category]) acc[step.category] = []
    acc[step.category].push(step)
    return acc
  }, {})

  const renderOverview = () => (
    <div className="space-y-5">
      {!stats.started ? (
        <div className="p-6 rounded-2xl border border-star-gold/30 bg-gradient-to-br from-star-gold/10 to-nebula-purple/10 text-center">
          <div className="text-6xl mb-4 animate-float">🎓</div>
          <h3 className="text-xl font-display text-white mb-2">新手训练营</h3>
          <p className="text-sm text-white/60 mb-6 leading-relaxed">
            跟随引导一步步学习星座探索，完成所有课程后还能获得专属结业奖励！
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-space-700/40">
              <div className="text-2xl mb-1">📚</div>
              <div className="text-xs text-white/80">{TUTORIAL_STEPS.length}节课程</div>
            </div>
            <div className="p-3 rounded-xl bg-space-700/40">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-xs text-white/80">{ADVANCED_TASKS.length}个任务</div>
            </div>
            <div className="p-3 rounded-xl bg-space-700/40">
              <div className="text-2xl mb-1">🎁</div>
              <div className="text-xs text-white/80">专属奖励</div>
            </div>
          </div>
          <button
            onClick={handleStart}
            className="btn-primary w-full py-3 text-base"
          >
            开始学习 ✨
          </button>
        </div>
      ) : (
        <div className="p-4 rounded-2xl border border-nebula-purple/30 bg-nebula-purple/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{stats.completed ? '🎓' : '📖'}</span>
              <div>
                <h3 className="font-display text-lg text-white">
                  {stats.completed ? '训练营已结业' : '学习进行中'}
                </h3>
                <p className="text-xs text-white/50">
                  {stats.completed
                    ? '你已经完成了全部课程'
                    : `当前：${currentStep?.title || '继续学习'}`
                  }
                </p>
              </div>
            </div>
            <span className="text-star-gold font-mono text-sm">
              {progress.percentage}%
            </span>
          </div>
          <div className="h-2.5 bg-space-900/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-star-gold via-nebula-cyan to-nebula-purple rounded-full transition-all duration-700"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <div className="flex gap-2 mt-4">
            {!stats.completed && currentStep && (
              <button
                onClick={() => setShowStepGuide(true)}
                className="flex-1 btn-primary py-2.5 text-sm"
              >
                继续学习 →
              </button>
            )}
            <button
              onClick={() => setViewMode('rewards')}
              className="flex-1 btn-secondary py-2.5 text-sm"
            >
              查看奖励 🎁
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {Object.entries(groupedSteps).map(([category, steps]) => {
          const info = CATEGORY_INFO[category]
          const completedCount = steps.filter(s =>
            tutorial.completedSteps.includes(s.id)
          ).length
          const isActive = currentStep && steps.some(s => s.id === currentStep.id)

          return (
            <div
              key={category}
              className={`p-4 rounded-2xl border transition-all ${
                isActive
                  ? `${info.color.replace('from-', 'border-').split(' ')[0]}/40 bg-gradient-to-br ${info.color}/10`
                  : 'border-white/10 bg-space-700/20'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-lg`}>
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-white/90 text-sm">{info.name}</h4>
                  <p className="text-[10px] text-white/40">
                    {completedCount} / {steps.length} 完成
                  </p>
                </div>
                {isActive && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-star-gold/20 text-star-gold animate-pulse">
                    进行中
                  </span>
                )}
              </div>

              <div className="space-y-2">
                {steps.map((step) => {
                  const isCompleted = tutorial.completedSteps.includes(step.id)
                  const isCurrent = currentStep?.id === step.id

                  return (
                    <div
                      key={step.id}
                      className={`p-3 rounded-xl border transition-all ${
                        isCompleted
                          ? 'border-green-500/30 bg-green-500/5'
                          : isCurrent
                          ? 'border-star-gold/40 bg-star-gold/10'
                          : 'border-white/5 bg-space-800/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${
                          isCompleted
                            ? 'bg-gradient-to-br from-green-500 to-emerald-400 text-white'
                            : isCurrent
                            ? 'bg-gradient-to-br from-star-gold to-nebula-orange text-space-900 animate-pulse-slow'
                            : 'bg-space-600/50 text-white/40'
                        }`}>
                          {isCompleted ? '✓' : step.order}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-medium ${
                            isCompleted ? 'text-green-300' : isCurrent ? 'text-star-gold' : 'text-white/70'
                          }`}>
                            {step.title}
                          </p>
                          <p className="text-[10px] text-white/40 mt-0.5 leading-tight">
                            {step.description}
                          </p>
                        </div>
                        {isCurrent && !step.autoAdvance && (
                          <button
                            onClick={() => handleStepComplete(step.id)}
                            className="text-[10px] px-2.5 py-1 rounded-lg bg-star-gold/20 text-star-gold
                                     hover:bg-star-gold/30 transition-all flex-shrink-0"
                          >
                            完成
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🎯</span>
          <h4 className="font-display text-white/90 text-sm">进阶任务</h4>
          <span className="text-[10px] text-white/40 ml-auto">
            {tutorial.advancedTasksCompleted.length} / {ADVANCED_TASKS.length}
          </span>
        </div>
        <div className="space-y-2">
          {ADVANCED_TASKS.map((task) => {
            const isCompleted = tutorial.advancedTasksCompleted.includes(task.id)
            return (
              <div
                key={task.id}
                className={`p-3 rounded-xl border transition-all ${
                  isCompleted
                    ? 'border-green-500/30 bg-green-500/5'
                    : 'border-white/5 bg-space-800/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${
                    isCompleted
                      ? 'bg-gradient-to-br from-green-500 to-emerald-400 text-white'
                      : 'bg-space-600/50 text-white/40 grayscale'
                  }`}>
                    {task.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-medium ${
                      isCompleted ? 'text-green-300' : 'text-white/70'
                    }`}>
                      {task.title}
                    </p>
                    <p className="text-[10px] text-white/40 mt-0.5">
                      {task.description}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`text-[10px] ${
                      isCompleted ? 'text-green-300' : 'text-star-gold/80'
                    }`}>
                      {isCompleted ? '✓ 已完成' : `+${task.reward.stardust} 💫`}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {stats.started && (
        <button
          onClick={() => {
            if (confirm('确定要重新开始训练营吗？所有进度将被重置。')) {
              resetTutorial()
              setViewMode('overview')
            }
          }}
          className="w-full text-[11px] text-white/30 hover:text-red-400/70 transition-colors py-2"
        >
          重新开始训练营
        </button>
      )}
    </div>
  )

  const renderRewards = () => (
    <div className="space-y-4">
      {Object.entries(TUTORIAL_REWARDS).map(([key, reward]) => {
        const isClaimed = tutorial.rewardsClaimed.includes(reward.id)
        let canClaim = false
        let requirement = ''

        switch (key) {
          case 'completion':
            canClaim = stats.completed
            requirement = stats.completed ? '已满足' : '完成全部课程'
            break
          case 'perfect':
            canClaim = stats.completed && stats.mistakesDuringTutorial === 0
            requirement = canClaim
              ? '已满足'
              : stats.completed
              ? `需要零失误（当前${stats.mistakesDuringTutorial}次错误）`
              : '完成全部课程且零失误'
            break
          case 'advanced':
            canClaim = stats.allAdvancedCompleted
            requirement = canClaim
              ? '已满足'
              : `完成全部进阶任务（${tutorial.advancedTasksCompleted.length}/${ADVANCED_TASKS.length}）`
            break
        }

        return (
          <div
            key={key}
            className={`p-4 rounded-2xl border transition-all ${
              isClaimed
                ? 'border-green-500/30 bg-green-500/5'
                : canClaim
                ? 'border-star-gold/40 bg-star-gold/10 ring-1 ring-star-gold/20'
                : 'border-white/5 bg-space-800/30 opacity-60'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 ${
                isClaimed
                  ? 'bg-gradient-to-br from-green-500 to-emerald-400'
                  : canClaim
                  ? 'bg-gradient-to-br from-star-gold to-nebula-orange animate-pulse-slow shadow-lg shadow-star-gold/20'
                  : 'bg-space-700/60 grayscale'
              }`}>
                {reward.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className={`text-sm font-display ${
                    isClaimed ? 'text-green-300' : canClaim ? 'text-star-gold' : 'text-white/70'
                  }`}>
                    {reward.name}
                  </p>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                    reward.type === 'badge'
                      ? 'bg-nebula-purple/20 text-nebula-cyan'
                      : 'bg-star-gold/20 text-star-gold'
                  }`}>
                    {reward.type === 'badge' ? '徽章' : '称号'}
                  </span>
                </div>
                <p className="text-[11px] text-white/50 mt-1">{reward.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-[10px] ${
                    isClaimed ? 'text-green-300/70' : canClaim ? 'text-star-gold/80' : 'text-white/30'
                  }`}>
                    💫 +{reward.stardust} 星尘
                  </span>
                  {reward.unlockTitle && (
                    <span className={`text-[10px] ${
                      isClaimed ? 'text-green-300/70' : canClaim ? 'text-star-gold/80' : 'text-white/30'
                    }`}>
                      🏷️ {reward.unlockTitle}
                    </span>
                  )}
                </div>
                <p className={`text-[10px] mt-1.5 ${
                  canClaim ? 'text-star-gold/70' : 'text-white/30'
                }`}>
                  条件：{requirement}
                </p>
              </div>
              <div className="flex-shrink-0">
                {isClaimed ? (
                  <span className="text-[11px] text-green-400/80">✓ 已领取</span>
                ) : (
                  <button
                    onClick={() => handleClaimReward(key)}
                    disabled={!canClaim}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      canClaim
                        ? 'bg-gradient-to-r from-star-gold to-nebula-orange text-space-900 hover:shadow-lg active:scale-95'
                        : 'bg-space-700/40 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    领取
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  const renderStats = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl border border-nebula-purple/30 bg-nebula-purple/10">
          <div className="text-2xl mb-1">📚</div>
          <div className="text-2xl font-display text-white font-mono">
            {stats.completedStepsCount} / {stats.totalSteps}
          </div>
          <div className="text-[10px] text-white/50">课程完成</div>
        </div>
        <div className="p-4 rounded-2xl border border-star-gold/30 bg-star-gold/10">
          <div className="text-2xl mb-1">🎯</div>
          <div className="text-2xl font-display text-white font-mono">
            {stats.advancedTasksCompleted} / {stats.totalAdvancedTasks}
          </div>
          <div className="text-[10px] text-white/50">任务完成</div>
        </div>
        <div className="p-4 rounded-2xl border border-green-500/30 bg-green-500/10">
          <div className="text-2xl mb-1">🎁</div>
          <div className="text-2xl font-display text-white font-mono">
            {stats.rewardsClaimed} / {stats.totalRewards}
          </div>
          <div className="text-[10px] text-white/50">奖励领取</div>
        </div>
        <div className="p-4 rounded-2xl border border-nebula-cyan/30 bg-nebula-cyan/10">
          <div className="text-2xl mb-1">❌</div>
          <div className="text-2xl font-display text-white font-mono">
            {stats.mistakesDuringTutorial}
          </div>
          <div className="text-[10px] text-white/50">学习中的错误</div>
        </div>
      </div>

      {stats.isPerfect && stats.completed && (
        <div className="p-4 rounded-2xl border border-star-gold/40 bg-gradient-to-r from-star-gold/10 to-nebula-purple/10 text-center">
          <div className="text-4xl mb-2 animate-float">🏅</div>
          <p className="font-display text-star-gold text-base">完美结业！</p>
          <p className="text-xs text-white/60 mt-1">零失误完成全部训练营课程</p>
        </div>
      )}

      {stats.startedAt && (
        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/50">开始时间</span>
            <span className="text-xs text-white/70 font-mono">
              {new Date(stats.startedAt).toLocaleString('zh-CN')}
            </span>
          </div>
          {stats.completedAt && (
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-white/50">完成时间</span>
              <span className="text-xs text-white/70 font-mono">
                {new Date(stats.completedAt).toLocaleString('zh-CN')}
              </span>
            </div>
          )}
          {stats.startedAt && stats.completedAt && (
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
              <span className="text-xs text-white/50">总用时</span>
              <span className="text-xs text-star-gold font-mono">
                {Math.round((stats.completedAt - stats.startedAt) / 60000)} 分钟
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )

  return (
    <>
      <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                      bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
          <div className="p-5 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-display text-white">🎓 新手训练营</h2>
                <p className="text-xs text-white/50 mt-1">
                  一步步学习，成为星空探索者
                </p>
              </div>
              <button
                onClick={() => setActivePanel(null)}
                className="icon-btn"
                aria-label="关闭"
              >
                ✕
              </button>
            </div>

            {stats.started && (
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-white/60">学习进度</span>
                  <span className="text-star-gold font-mono">
                    {stats.completedStepsCount} / {stats.totalSteps} · {progress.percentage}%
                  </span>
                </div>
                <div className="h-2.5 bg-space-900/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-star-gold via-nebula-cyan to-nebula-purple rounded-full transition-all duration-700"
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              </div>
            )}

            <div className="mt-4 flex gap-2">
              {[
                { id: 'overview', label: '课程', icon: '📚' },
                { id: 'rewards', label: '奖励', icon: '🎁' },
                { id: 'stats', label: '统计', icon: '📊' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setViewMode(tab.id)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${
                    viewMode === tab.id
                      ? 'bg-white/10 text-white border border-white/10'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
            {viewMode === 'overview' && renderOverview()}
            {viewMode === 'rewards' && renderRewards()}
            {viewMode === 'stats' && renderStats()}
          </div>
        </div>
      </div>

      {showStepGuide && currentStep && (
        <div className="fixed inset-x-0 bottom-28 z-50 flex justify-center px-4 pointer-events-none">
          <div className="glass-panel p-4 max-w-md w-full border-nebula-cyan/30
                        shadow-2xl shadow-nebula-cyan/10 pointer-events-auto">
            <div className="flex items-start gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                CATEGORY_INFO[currentStep.category]?.color || 'from-nebula-purple to-nebula-cyan'
              } flex items-center justify-center text-2xl flex-shrink-0 animate-pulse-slow`}>
                {currentStep.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-nebula-purple/20 text-nebula-cyan">
                    第 {currentStep.order} 步
                  </span>
                  <span className="text-[10px] text-white/40">
                    {CATEGORY_INFO[currentStep.category]?.name}
                  </span>
                </div>
                <h4 className="font-display text-white text-base mt-1">{currentStep.title}</h4>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">{currentStep.description}</p>
                {currentStep.tips && currentStep.tips.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {currentStep.tips.map((tip, i) => (
                      <p key={i} className="text-[10px] text-star-gold/70">
                        💡 {tip}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setShowStepGuide(false)}
                className="w-7 h-7 flex items-center justify-center rounded-lg
                         bg-space-700/60 text-white/50 text-xs
                         hover:bg-space-600 hover:text-white transition-all flex-shrink-0"
              >
                ✕
              </button>
            </div>
            {currentStep.action && currentStep.action.type === 'panel' && (
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => {
                    if (currentStep.action.panel === 'tasks') {
                      setActivePanel('tasks')
                    } else if (currentStep.action.panel === 'atlas') {
                      openAtlasList()
                    } else {
                      setActivePanel(currentStep.action.panel)
                    }
                  }}
                  className="flex-1 px-4 py-2 rounded-lg text-xs font-medium
                           bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white
                           hover:shadow-lg active:scale-95 transition-all"
                >
                  前往 →
                </button>
                {!currentStep.autoAdvance && (
                  <button
                    onClick={() => handleStepComplete(currentStep.id)}
                    className="flex-1 btn-secondary text-xs py-2"
                  >
                    标记完成
                  </button>
                )}
              </div>
            )}
            {currentStep.autoAdvance && (
              <p className="mt-3 text-[10px] text-center text-white/40">
                {currentStep.duration ? `将在${currentStep.duration / 1000}秒后自动继续...` : '请完成操作后继续'}
              </p>
            )}
          </div>
        </div>
      )}

      {tutorial.lastErrorHint && (
        <div className="fixed inset-x-0 top-24 z-50 flex justify-center px-4 pointer-events-none animate-in slide-in-from-top-4 duration-300">
          <div className="glass-panel px-4 py-3 max-w-sm w-full border-red-400/30
                        shadow-lg shadow-red-500/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-400
                            flex items-center justify-center text-xl flex-shrink-0">
                {tutorial.lastErrorHint.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-red-300 uppercase tracking-wider font-semibold">
                  {tutorial.lastErrorHint.title}
                </div>
                <div className="text-white/90 text-sm font-medium">
                  {tutorial.lastErrorHint.description}
                </div>
                {tutorial.lastErrorHint.tips && tutorial.lastErrorHint.tips.length > 0 && (
                  <div className="mt-1">
                    <p className="text-[10px] text-white/50">
                      💡 {tutorial.lastErrorHint.tips[0]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed inset-x-0 bottom-40 z-50 flex justify-center px-4 pointer-events-none animate-in fade-in duration-300">
          <div className={`px-5 py-3 rounded-xl text-sm font-medium shadow-lg ${
            toast.type === 'success'
              ? 'bg-gradient-to-r from-green-500 to-emerald-400 text-white'
              : toast.type === 'error'
              ? 'bg-gradient-to-r from-red-500 to-orange-400 text-white'
              : 'bg-space-700/90 text-white border border-white/10'
          }`}>
            {toast.message}
          </div>
        </div>
      )}
    </>
  )
}
