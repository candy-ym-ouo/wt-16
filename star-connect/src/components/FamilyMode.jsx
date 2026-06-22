import { useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { FAMILY_ROLES, TASK_TYPES, FAMILY_TASKS, FAMILY_ACHIEVEMENTS, getFamilyTaskById } from '../data/familyMode'
import { voiceGuide } from '../modules/VoiceGuide'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { formatDate } from '../utils/math'

const CATEGORY_INFO = {
  collaboration: { name: '协作勋章', icon: '🤝', color: 'from-blue-500 to-cyan-400' },
  challenge: { name: '挑战勋章', icon: '⚔️', color: 'from-red-500 to-pink-400' },
  guided: { name: '引导勋章', icon: '👆', color: 'from-green-500 to-emerald-400' },
  milestone: { name: '里程碑勋章', icon: '🏆', color: 'from-yellow-500 to-orange-400' },
  child_growth: { name: '成长勋章', icon: '🌱', color: 'from-cyan-500 to-blue-400' },
  parent_growth: { name: '引导者勋章', icon: '👨‍🏫', color: 'from-emerald-500 to-green-400' }
}

export default function FamilyMode() {
  const {
    familyMode,
    setFamilyMode,
    setFamilyRole,
    setActivePanel,
    getFamilyProgress,
    getFamilyGrowthData,
    startFamilyTask,
    nextTaskStep,
    checkFamilyStreak,
    endFamilySession,
    recordMythologyTold,
    recordQuizScore,
    addFamilyLog
  } = useGameStore()

  const [viewMode, setViewMode] = useState('home')
  const [showRoleSelect, setShowRoleSelect] = useState(!familyMode.currentRole)
  const [activeTab, setActiveTab] = useState('tasks')
  const [selectedTask, setSelectedTask] = useState(null)
  const [quizState, setQuizState] = useState(null)
  const [voiceSpeaking, setVoiceSpeaking] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)

  const progress = getFamilyProgress()
  const growthData = getFamilyGrowthData()

  useEffect(() => {
    voiceGuide.init()
    voiceGuide.toggleVoice(voiceEnabled)
    
    if (!familyMode.enabled) {
      setFamilyMode(true)
    }
    
    checkFamilyStreak()
    
    return () => {
      endFamilySession()
    }
  }, [])

  const handleToggleFamilyMode = (enabled) => {
    if (!enabled) {
      endFamilySession()
      setFamilyMode(enabled)
      setShowRoleSelect(true)
    } else {
      setFamilyMode(enabled)
      setShowRoleSelect(true)
      setViewMode('home')
    }
  }

  const handleSelectRole = async (role) => {
    setFamilyRole(role)
    setShowRoleSelect(false)
    if (voiceEnabled) {
      setVoiceSpeaking(true)
      await voiceGuide.welcome(role)
      setVoiceSpeaking(false)
    }
  }

  const handleStartTask = (task) => {
    setSelectedTask(task)
    startFamilyTask(task.id)
    setViewMode('task')
    
    if (task.steps && task.steps.length > 0 && voiceEnabled) {
      const firstStep = task.steps[0]
      setVoiceSpeaking(true)
      voiceGuide.readInstruction(firstStep.instruction).then(() => setVoiceSpeaking(false))
    }
  }

  const handleNextStep = async () => {
    const nextStep = nextTaskStep()
    if (nextStep && voiceEnabled) {
      setVoiceSpeaking(true)
      await voiceGuide.readInstruction(nextStep.instruction)
      setVoiceSpeaking(false)
    } else if (!nextStep) {
      setViewMode('home')
      setSelectedTask(null)
    }
  }

  const handleTellStory = async (constellationId) => {
    recordMythologyTold()
    if (voiceEnabled) {
      setVoiceSpeaking(true)
      await voiceGuide.tellStory(constellationId)
      setVoiceSpeaking(false)
    }
  }

  const handleExplainScience = async (constellationId) => {
    if (voiceEnabled) {
      setVoiceSpeaking(true)
      await voiceGuide.explainScience(constellationId)
      setVoiceSpeaking(false)
    }
  }

  const handleGiveTips = async (constellationId) => {
    if (voiceEnabled) {
      setVoiceSpeaking(true)
      await voiceGuide.giveTips(constellationId)
      setVoiceSpeaking(false)
    }
  }

  const handleStartQuiz = (task) => {
    setQuizState({
      task,
      currentQuestion: 0,
      score: 0,
      answers: []
    })
    setViewMode('quiz')
    
    if (voiceEnabled && task.questions) {
      setVoiceSpeaking(true)
      voiceGuide.readQuizQuestion(task.questions[0].q).then(() => setVoiceSpeaking(false))
    }
  }

  const handleQuizAnswer = async (answer) => {
    if (!quizState) return
    
    const question = quizState.task.questions[quizState.currentQuestion]
    const isCorrect = answer === question.a
    
    const newAnswers = [...quizState.answers, { question: question.q, answer, correct: isCorrect }]
    const newScore = quizState.score + (isCorrect ? 20 : 0)
    
    if (voiceEnabled) {
      setVoiceSpeaking(true)
      if (isCorrect) {
        await voiceGuide.correctAnswer()
      } else {
        await voiceGuide.wrongAnswer(question.a)
      }
      setVoiceSpeaking(false)
    }
    
    if (quizState.currentQuestion >= quizState.task.questions.length - 1) {
      recordQuizScore(newScore, quizState.task.questions.length * 20)
      addFamilyLog({
        type: 'quiz_complete',
        taskId: quizState.task.id,
        score: newScore,
        total: quizState.task.questions.length * 20,
        timestamp: Date.now()
      })
      setQuizState({
        ...quizState,
        answers: newAnswers,
        score: newScore,
        finished: true
      })
    } else {
      const nextQuestion = quizState.task.questions[quizState.currentQuestion + 1]
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        score: newScore,
        answers: newAnswers
      })
      
      if (voiceEnabled) {
        setVoiceSpeaking(true)
        voiceGuide.readQuizQuestion(nextQuestion.q).then(() => setVoiceSpeaking(false))
      }
    }
  }

  const handleEncourage = async (role) => {
    if (voiceEnabled) {
      setVoiceSpeaking(true)
      await voiceGuide.encourage(role)
      setVoiceSpeaking(false)
    }
  }

  const stopSpeaking = () => {
    voiceGuide.stop()
    setVoiceSpeaking(false)
  }

  const toggleVoice = () => {
    const newEnabled = !voiceEnabled
    setVoiceEnabled(newEnabled)
    voiceGuide.toggleVoice(newEnabled)
  }

  const renderRoleSelect = () => (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-space-900/90 backdrop-blur-md">
      <div className="max-w-md w-full mx-4">
        <div className="glass-panel p-8 text-center">
          <div className="text-5xl mb-4">👨‍👩‍👧</div>
          <h2 className="text-2xl font-display text-white mb-2">欢迎来到亲子星空探索</h2>
          <p className="text-white/60 text-sm mb-8">请选择你当前的角色，开始奇妙的星空之旅</p>
          
          <div className="grid grid-cols-2 gap-4">
            {Object.values(FAMILY_ROLES).map((role) => (
              <button
                key={role.id}
                onClick={() => handleSelectRole(role.id)}
                className={`p-6 rounded-2xl border-2 transition-all card-hover ${
                  familyMode.currentRole === role.id
                    ? `border-nebula-purple bg-nebula-purple/20`
                    : 'border-white/10 bg-space-700/40 hover:border-white/30'
                }`}
              >
                <div className="text-4xl mb-3">{role.icon}</div>
                <div className="font-display text-white text-lg">{role.name}</div>
                <div className="text-xs text-white/50 mt-2">{role.description}</div>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => {
              handleToggleFamilyMode(false)
              setActivePanel(null)
            }}
            className="mt-6 text-white/50 hover:text-white text-sm transition-colors"
          >
            ← 返回单人模式
          </button>
        </div>
      </div>
    </div>
  )

  const renderHome = () => (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl border border-nebula-purple/30 bg-gradient-to-br from-nebula-purple/10 to-nebula-cyan/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {Object.values(familyMode.familyMembers).map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 rounded-full bg-space-700/60 flex items-center justify-center text-2xl border-2 border-white/10">
                  {member.avatar}
                </div>
                <div className="text-xs text-white/70 mt-1">{member.name}</div>
                <div className="fs-10 text-nebula-cyan font-mono">Lv.{member.level}</div>
              </div>
            ))}
          </div>
          <div className="text-right">
            <div className="text-star-gold text-lg font-display">🔥 {familyMode.streakDays} 天</div>
            <div className="fs-10 text-white/50">连续打卡</div>
            <div className="text-xs text-white/60 mt-1">⏱️ {Math.floor(progress.totalMinutes / 60)}h {progress.totalMinutes % 60}m</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(familyMode.familyMembers).map(([roleId, member]) => {
            const xpForNextLevel = (member.level) * 100
            const currentLevelXP = member.xp - (member.level - 1) * 100
            const progressPct = Math.min(100, Math.round((currentLevelXP / xpForNextLevel) * 100))
            
            return (
              <div key={roleId} className="bg-space-800/40 rounded-xl p-3">
                <div className="flex items-center justify-between fs-10 mb-1">
                  <span className="text-white/60">{member.name}经验</span>
                  <span className="text-white/40 font-mono">{member.xp} XP</span>
                </div>
                <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${FAMILY_ROLES[roleId].color}`}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: '星座', value: progress.discoveredConstellations, icon: '⭐' },
          { label: '任务', value: `${progress.completedTasks}/${progress.totalTasks}`, icon: '📋' },
          { label: '勋章', value: `${progress.unlockedAchievements}/${progress.totalAchievements}`, icon: '🏅' },
          { label: '协作', value: progress.collaborativeCount, icon: '🤝' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-space-700/30 rounded-xl p-3 text-center border border-white/5">
            <div className="text-xl mb-1">{stat.icon}</div>
            <div className="text-sm font-display text-white">{stat.value}</div>
            <div className="fs-9 text-white/50">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-white/90 text-sm flex items-center gap-2">
            <span>📊</span> 本周探索记录
          </h3>
        </div>
        <div className="bg-space-700/30 rounded-xl p-4 border border-white/5">
          <div className="flex items-end justify-between h-24 gap-1">
            {growthData.weeklyData.map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-space-800/60 rounded-t relative" style={{ height: '100%' }}>
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-nebula-purple to-nebula-cyan rounded-t transition-all duration-500"
                    style={{ height: `${Math.min(100, day.discoveries * 30)}%` }}
                  />
                </div>
                <span className="fs-9 text-white/50">{day.date}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between fs-10 text-white/40 mt-2">
            <span>共 {growthData.totalSessions} 次探索</span>
            <span>平均每次 {growthData.avgSessionLength} 分钟</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
          <span>✨</span> 推荐今日任务
        </h3>
        <div className="space-y-2">
          {FAMILY_TASKS.filter(t => t.difficulty <= 2).slice(0, 3).map((task) => {
            const typeInfo = TASK_TYPES[task.type]
            const isCompleted = familyMode.completedTasks.some(t => t.taskId === task.id)
            
            return (
              <button
                key={task.id}
                onClick={() => task.type === 'challenge' && task.questions ? handleStartQuiz(task) : handleStartTask(task)}
                disabled={isCompleted}
                className={`w-full p-4 rounded-xl border text-left transition-all card-hover ${
                  isCompleted
                    ? 'border-green-500/30 bg-green-500/5 opacity-70'
                    : 'border-white/10 bg-space-700/30 hover:border-nebula-purple/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                    isCompleted ? 'bg-green-500/20' : 'bg-space-600/50'
                  }`}>
                    {isCompleted ? '✓' : task.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">{task.name}</span>
                      <span className="fs-9 px-1.5 py-0.5 rounded bg-white/10 text-white/60">
                        {typeInfo.icon} {typeInfo.name}
                      </span>
                    </div>
                    <p className="fs-11 text-white/50 mt-0.5 truncate">{task.description}</p>
                  </div>
                  <span className="text-star-gold text-xs">+{task.reward?.xp || 0} XP</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
          <span>🔊</span> 星空故事馆
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {CONSTELLATIONS.slice(0, 4).map((c) => (
            <div key={c.id} className="bg-space-700/30 rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{c.season === '春' ? '🌸' : c.season === '夏' ? '☀️' : c.season === '秋' ? '🍂' : '❄️'}</span>
                <span className="text-xs font-medium text-white truncate">{c.name}</span>
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => handleTellStory(c.id)}
                  className="w-full fs-10 py-1.5 rounded-lg bg-nebula-purple/20 text-nebula-purple hover:bg-nebula-purple/30 transition-colors"
                >
                  📖 听神话故事
                </button>
                <button
                  onClick={() => handleExplainScience(c.id)}
                  className="w-full fs-10 py-1.5 rounded-lg bg-nebula-cyan/20 text-nebula-cyan hover:bg-nebula-cyan/30 transition-colors"
                >
                  🔬 学科学知识
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTasks = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display text-white/90 text-sm">全部任务</h3>
        <span className="fs-10 text-white/50">
          已完成 {progress.completedTasks} / {progress.totalTasks}
        </span>
      </div>
      
      {Object.entries(TASK_TYPES).map(([typeId, typeInfo]) => {
        const tasks = FAMILY_TASKS.filter(t => t.type === typeId)
        if (tasks.length === 0) return null
        
        return (
          <div key={typeId} className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">{typeInfo.icon}</span>
              <span className="text-xs text-white/70">{typeInfo.name}</span>
              <span className="fs-10 text-white/40">{typeInfo.description}</span>
            </div>
            <div className="space-y-2">
              {tasks.map((task) => {
                const isCompleted = familyMode.completedTasks.some(t => t.taskId === task.id)
                const isActive = familyMode.activeTaskId === task.id
                
                return (
                  <button
                    key={task.id}
                    onClick={() => {
                      if (task.type === 'challenge' && task.questions) {
                        handleStartQuiz(task)
                      } else {
                        handleStartTask(task)
                      }
                    }}
                    disabled={isCompleted && !isActive}
                    className={`w-full p-4 rounded-xl border text-left transition-all card-hover ${
                      isActive
                        ? 'border-nebula-cyan bg-nebula-cyan/10'
                        : isCompleted
                        ? 'border-green-500/30 bg-green-500/5 opacity-70'
                        : 'border-white/10 bg-space-700/30 hover:border-nebula-purple/40'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${
                        isActive ? 'bg-nebula-cyan/20' : isCompleted ? 'bg-green-500/20' : 'bg-space-600/50'
                      }`}>
                        {isCompleted ? '✓' : task.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-white">{task.name}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: task.difficulty }).map((_, i) => (
                              <span key={i} className="fs-9 text-star-gold">★</span>
                            ))}
                          </div>
                        </div>
                        <p className="fs-11 text-white/50 mt-0.5">{task.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="fs-10 text-star-gold">+{task.reward?.xp || 0} XP</span>
                          {task.steps && (
                            <span className="fs-10 text-white/40">{task.steps.length} 步骤</span>
                          )}
                          {task.questions && (
                            <span className="fs-10 text-white/40">{task.questions.length} 题目</span>
                          )}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <span className="fs-10 text-nebula-cyan animate-pulse">
                          ⏳ 进行中...
                        </span>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )

  const renderAchievements = () => {
    const grouped = FAMILY_ACHIEVEMENTS.reduce((acc, a) => {
      if (!acc[a.category]) acc[a.category] = []
      acc[a.category].push(a)
      return acc
    }, {})

    return (
      <div className="space-y-5">
        <div className="p-4 rounded-2xl border border-star-gold/30 bg-star-gold/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏅</span>
              <div>
                <h3 className="font-display text-white text-sm">亲子勋章</h3>
                <p className="fs-10 text-white/50">记录你们的每一个美好时刻</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-display text-star-gold">
                {progress.unlockedAchievements} / {progress.totalAchievements}
              </div>
              <div className="fs-9 text-white/40">已解锁</div>
            </div>
          </div>
          <div className="mt-3 h-2 bg-space-900/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-star-gold via-nebula-orange to-nebula-purple rounded-full transition-all duration-700"
              style={{
                width: `${progress.totalAchievements > 0
                  ? (progress.unlockedAchievements / progress.totalAchievements) * 100
                  : 0}%`
              }}
            />
          </div>
        </div>

        {Object.entries(grouped).map(([category, list]) => {
          const info = CATEGORY_INFO[category]
          const unlocked = list.filter(a => familyMode.unlockedFamilyAchievements.includes(a.id)).length
          
          return (
            <div key={category}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{info.icon}</span>
                <h3 className="font-display text-white/90 text-sm">{info.name}</h3>
                <span className="fs-10 text-white/40 ml-auto">
                  {unlocked} / {list.length}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {list.map((achievement) => {
                  const isUnlocked = familyMode.unlockedFamilyAchievements.includes(achievement.id)
                  
                  return (
                    <div
                      key={achievement.id}
                      className={`p-3 rounded-xl border transition-all ${
                        isUnlocked
                          ? 'border-white/20 bg-space-700/40'
                          : 'border-white/5 bg-space-900/40 opacity-50'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${
                            isUnlocked
                              ? `bg-gradient-to-br ${achievement.color}`
                              : 'bg-space-800 grayscale'
                          }`}
                        >
                          {achievement.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-xs font-semibold ${
                            isUnlocked ? 'text-white' : 'text-white/50'
                          }`}>
                            {achievement.name}
                          </div>
                          <div className="fs-9 text-white/40 mt-0.5 leading-tight">
                            {achievement.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const renderTaskInProgress = () => {
    const task = selectedTask || getFamilyTaskById(familyMode.activeTaskId)
    if (!task) return null

    const currentStep = task.steps?.[familyMode.currentStepIndex]
    const progress = task.steps ? Math.round((familyMode.currentStepIndex / task.steps.length) * 100) : 0
    const turnRoleInfo = currentStep ? FAMILY_ROLES[currentStep.role] : null

    return (
      <div className="space-y-5">
        <div className={`p-4 rounded-2xl border ${turnRoleInfo ? turnRoleInfo.color.replace('from-', 'border-').split(' ')[0] + '/30' : 'border-white/10'} bg-space-700/30`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{task.icon}</span>
              <div>
                <h3 className="font-display text-white">{task.name}</h3>
                <p className="fs-10 text-white/50">{task.description}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setViewMode('home')
                setSelectedTask(null)
              }}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-space-600/50 text-white/60 hover:bg-red-500/30 hover:text-red-200 transition-all"
            >
              ✕
            </button>
          </div>
          
          {task.steps && (
            <>
              <div className="flex justify-between fs-10 mb-2">
                <span className="text-white/50">任务进度</span>
                <span className="text-white/60 font-mono">
                  {familyMode.currentStepIndex + 1} / {task.steps.length}
                </span>
              </div>
              <div className="h-2 bg-space-900/60 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${turnRoleInfo?.color || 'from-nebula-purple to-nebula-cyan'} transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </>
          )}
        </div>

        {currentStep && (
          <div className={`p-5 rounded-2xl border ${turnRoleInfo.color.replace('from-', 'border-').split(' ')[0]}/40 bg-gradient-to-br ${turnRoleInfo.color}/5`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${turnRoleInfo.color}`}>
                {turnRoleInfo.icon}
              </div>
              <div>
                <div className="text-xs text-white/60">当前轮到</div>
                <div className="font-display text-white text-lg">{turnRoleInfo.name}</div>
              </div>
            </div>
            
            <div className="bg-space-800/40 rounded-xl p-4 mb-4">
              <div className="fs-10 text-white/50 mb-1">任务指令</div>
              <div className="text-white/90 text-sm leading-relaxed">
                {currentStep.instruction}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEncourage(currentStep.role)}
                className="flex-1 py-2.5 rounded-xl bg-star-gold/20 text-star-gold text-sm hover:bg-star-gold/30 transition-colors"
              >
                💬 鼓励一下
              </button>
              <button
                onClick={stopSpeaking}
                disabled={!voiceSpeaking}
                className="px-4 py-2.5 rounded-xl bg-white/10 text-white/70 text-sm disabled:opacity-30 hover:bg-white/20 transition-colors"
              >
                🔇
              </button>
            </div>
          </div>
        )}

        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <h4 className="text-xs text-white/70 mb-3 flex items-center gap-2">
            <span>📚</span> 相关星座知识
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {CONSTELLATIONS.slice(0, 2).map((c) => (
              <button
                key={c.id}
                onClick={() => handleGiveTips(c.id)}
                className="p-3 rounded-xl bg-space-800/40 text-left hover:bg-space-700/40 transition-colors border border-white/5"
              >
                <div className="text-sm font-medium text-white mb-1">{c.name}</div>
                <div className="fs-9 text-white/50">{c.description.slice(0, 30)}...</div>
                <div className="fs-9 text-nebula-cyan mt-1">💡 观看技巧 →</div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNextStep}
          className={`w-full py-4 rounded-2xl font-display text-white text-lg transition-all ${
            currentStep
              ? `bg-gradient-to-r ${turnRoleInfo?.color || 'from-nebula-purple to-nebula-cyan'} hover:shadow-lg active:scale-[0.98]`
              : 'bg-gradient-to-r from-green-500 to-emerald-400 hover:shadow-lg active:scale-[0.98]'
          }`}
        >
          {currentStep ? '完成此步 →' : '🎉 完成任务'}
        </button>
      </div>
    )
  }

  const renderQuiz = () => {
    if (!quizState) return null
    const { task, currentQuestion, score, answers, finished } = quizState
    
    if (finished) {
      const percentage = Math.round((score / (task.questions.length * 20)) * 100)
      return (
        <div className="space-y-5">
          <div className="p-8 rounded-2xl border border-star-gold/30 bg-gradient-to-br from-star-gold/10 to-transparent text-center">
            <div className="text-6xl mb-4">{percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '💪'}</div>
            <h2 className="text-2xl font-display text-white mb-2">
              {percentage >= 80 ? '太棒了！' : percentage >= 60 ? '做得不错！' : '继续加油！'}
            </h2>
            <div className="text-4xl font-display text-star-gold mb-2">{score} 分</div>
            <p className="text-sm text-white/60">答对了 {answers.filter(a => a.correct).length} / {answers.length} 题</p>
          </div>

          <div className="space-y-2">
            {answers.map((answer, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border ${
                  answer.correct
                    ? 'border-green-500/30 bg-green-500/5'
                    : 'border-red-500/30 bg-red-500/5'
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className={answer.correct ? 'text-green-400' : 'text-red-400'}>
                    {answer.correct ? '✓' : '✕'}
                  </span>
                  <div className="flex-1">
                    <div className="text-xs text-white/80">{answer.question}</div>
                    <div className={`fs-10 mt-1 ${answer.correct ? 'text-green-400' : 'text-red-400'}`}>
                      你的答案: {answer.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setQuizState(null)
              setViewMode('home')
            }}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white font-display text-lg hover:shadow-lg active:scale-[0.98] transition-all"
          >
            返回首页
          </button>
        </div>
      )
    }

    const question = task.questions[currentQuestion]
    return (
      <div className="space-y-5">
        <div className="p-4 rounded-2xl border border-nebula-purple/30 bg-nebula-purple/5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-display text-white">{task.name}</h3>
                <p className="fs-10 text-white/50">第 {currentQuestion + 1} / {task.questions.length} 题</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-star-gold font-display">{score} 分</div>
            </div>
          </div>
          <div className="h-2 bg-space-900/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion) / task.questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-space-700/30">
          <div className="text-lg font-display text-white leading-relaxed mb-6">
            {question.q}
          </div>
          
          <div className="space-y-2">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleQuizAnswer(option)}
                className="w-full p-4 rounded-xl border border-white/10 bg-space-800/40 text-left hover:bg-nebula-purple/20 hover:border-nebula-purple/40 transition-all text-white/90 text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              if (voiceSpeaking) {
                stopSpeaking()
              } else {
                setVoiceSpeaking(true)
                voiceGuide.readQuizQuestion(question.q).then(() => setVoiceSpeaking(false))
              }
            }}
            className="flex-1 py-3 rounded-xl bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-colors"
          >
            {voiceSpeaking ? '🔇 停止朗读' : '🔊 再听一遍'}
          </button>
        </div>
      </div>
    )
  }

  const renderRecords = () => (
    <div className="space-y-4">
      <h3 className="font-display text-white/90 text-sm">家庭探索记录</h3>
      
      {familyMode.familyLog.length === 0 ? (
        <div className="h-40 flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-3 opacity-30">📝</div>
          <h4 className="text-white/60 font-display mb-1">暂无记录</h4>
          <p className="text-xs text-white/40 max-w-xs leading-relaxed">
            开始你们的第一次亲子星空探索吧！
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {familyMode.familyLog.slice(0, 20).map((entry, idx) => {
            const constellation = entry.constellationId ? getConstellationById(entry.constellationId) : null
            const roleInfo = entry.role ? FAMILY_ROLES[entry.role] : null
            
            let bgColor = 'bg-space-700/30'
            let borderColor = 'border-white/10'
            let icon = '📌'
            
            if (entry.type === 'discovery') {
              bgColor = 'bg-nebula-purple/10'
              borderColor = 'border-nebula-purple/30'
              icon = '⭐'
            } else if (entry.type === 'reobservation') {
              bgColor = 'bg-nebula-cyan/10'
              borderColor = 'border-nebula-cyan/30'
              icon = '🔄'
            } else if (entry.type === 'family_achievement') {
              bgColor = 'bg-star-gold/10'
              borderColor = 'border-star-gold/30'
              icon = '🏅'
            } else if (entry.type === 'quiz_complete') {
              bgColor = 'bg-green-500/10'
              borderColor = 'border-green-500/30'
              icon = '🎯'
            }
            
            return (
              <div
                key={idx}
                className={`p-3 rounded-xl border ${borderColor} ${bgColor}`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-lg">{icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-medium text-white">
                        {entry.type === 'discovery' && '新发现星座'}
                        {entry.type === 'reobservation' && '再次观测'}
                        {entry.type === 'family_achievement' && '获得勋章'}
                        {entry.type === 'quiz_complete' && '完成测验'}
                      </span>
                      {constellation && (
                        <span className="fs-10 px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                          {constellation.name}
                        </span>
                      )}
                      {entry.perfect && (
                        <span className="fs-10 px-1.5 py-0.5 rounded bg-star-gold/20 text-star-gold">
                          完美
                        </span>
                      )}
                      {roleInfo && (
                        <span className="fs-10 px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                          {roleInfo.icon} {roleInfo.name}
                        </span>
                      )}
                    </div>
                    {entry.achievementName && (
                      <div className="text-sm text-star-gold mt-1">{entry.achievementName}</div>
                    )}
                    {entry.score !== undefined && (
                      <div className="text-sm text-green-400 mt-1">{entry.score} / {entry.total} 分</div>
                    )}
                    <div className="fs-9 text-white/40 mt-1 font-mono">
                      {formatDate(entry.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )

  const renderContent = () => {
    if (!familyMode.currentRole || showRoleSelect) return null
    
    if (viewMode === 'task' && familyMode.activeTaskId) {
      return renderTaskInProgress()
    }
    
    if (viewMode === 'quiz' && quizState) {
      return renderQuiz()
    }
    
    switch (activeTab) {
      case 'tasks':
        return renderTasks()
      case 'achievements':
        return renderAchievements()
      case 'records':
        return renderRecords()
      default:
        return renderHome()
    }
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4 bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      {showRoleSelect && familyMode.enabled && renderRoleSelect()}
      
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white flex items-center gap-2">
                <span>👨‍👩‍👧</span>
                亲子共学
                {familyMode.currentRole && (
                  <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-nebula-purple/30 text-nebula-cyan ml-2">
                    {FAMILY_ROLES[familyMode.currentRole]?.icon} {FAMILY_ROLES[familyMode.currentRole]?.name}
                  </span>
                )}
              </h2>
              <p className="text-xs text-white/50 mt-1">
                与家人一起探索星空的奥秘
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleVoice}
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
                  voiceEnabled ? 'bg-nebula-purple/30 text-nebula-cyan' : 'bg-white/10 text-white/40'
                }`}
              >
                {voiceEnabled ? '🔊' : '🔇'}
              </button>
              <button
                onClick={() => {
                  handleToggleFamilyMode(false)
                  setActivePanel(null)
                }}
                className="icon-btn"
                aria-label="关闭"
              >
                ✕
              </button>
            </div>
          </div>

          {familyMode.currentRole && !showRoleSelect && (
            <div className="mt-4 flex gap-2">
              {[
                { id: 'home', label: '首页', icon: '🏠' },
                { id: 'tasks', label: '任务', icon: '📋' },
                { id: 'achievements', label: '勋章', icon: '🏅' },
                { id: 'records', label: '记录', icon: '📝' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setViewMode(tab.id === 'home' ? 'home' : tab.id)
                  }}
                  className={`flex-1 py-2 px-2 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${
                    (tab.id === 'home' && viewMode === 'home') || activeTab === tab.id
                      ? 'bg-white/10 text-white border border-white/10'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {renderContent()}
        </div>

        {voiceSpeaking && (
          <div className="px-5 py-3 bg-nebula-purple/20 border-t border-nebula-purple/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-1 bg-nebula-cyan rounded-full animate-pulse"
                      style={{
                        height: `${8 + Math.random() * 12}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs text-white/70">正在播放...</span>
              </div>
              <button
                onClick={stopSpeaking}
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                停止
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
