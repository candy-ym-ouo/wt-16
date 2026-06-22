import { useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import {
  RESEARCH_TOPICS,
  RESEARCH_MATERIALS,
  RESEARCH_EXAMS,
  RESEARCHER_RANKS,
  getTopicById,
  getMaterialById,
  getExamById,
  isMaterialUnlocked,
  checkExamAnswer
} from '../data/constellationResearch'
import { getConstellationById } from '../data/constellations'

const CATEGORY_LABELS = {
  basic: { label: '基础理论', icon: '📖', color: 'from-sky-500 to-cyan-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30', text: 'text-sky-300' },
  season: { label: '季节星座', icon: '🌸', color: 'from-pink-500 to-rose-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-300' },
  mythology: { label: '神话人文', icon: '📜', color: 'from-amber-500 to-yellow-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-300' },
  advanced: { label: '进阶探索', icon: '🔬', color: 'from-violet-500 to-indigo-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-300' },
  master: { label: '院士殿堂', icon: '👑', color: 'from-amber-500 to-orange-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-300' }
}

export default function ConstellationResearch() {
  const {
    setActivePanel,
    research,
    getResearchStats,
    startResearchTopic,
    getTopicProgress,
    completeResearchTopic,
    setActiveResearchTopic,
    readMaterial,
    startExam,
    answerExamQuestion,
    finishExam,
    abandonExam,
    getExamBestScore,
    checkTopicProgress,
    addResearchNote,
    discoveredConstellations
  } = useGameStore()

  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedTopicId, setSelectedTopicId] = useState(null)
  const [selectedMaterialId, setSelectedMaterialId] = useState(null)
  const [examMode, setExamMode] = useState('list')
  const [examAnswers, setExamAnswers] = useState({})
  const [showExamResult, setShowExamResult] = useState(null)
  const [toast, setToast] = useState(null)
  const [noteText, setNoteText] = useState('')
  const [noteConstellationId, setNoteConstellationId] = useState('')

  useEffect(() => {
    checkTopicProgress()
  }, [activeTab])

  const stats = getResearchStats()
  const { currentRank, nextRank } = stats

  const showToast = (message, type = 'info') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 2500)
  }

  const handleStartTopic = (topicId) => {
    const result = startResearchTopic(topicId)
    if (result.success) {
      showToast(`开始课题：${result.topic.title}`, 'success')
    } else {
      showToast(result.error, 'error')
    }
  }

  const handleCompleteTopic = (topicId) => {
    const result = completeResearchTopic(topicId)
    if (result.success) {
      showToast(`课题完成！获得 ${result.xpReward} 研究经验 + 星尘奖励`, 'success')
    } else {
      showToast(result.error, 'error')
    }
  }

  const handleStartExam = (examId) => {
    const result = startExam(examId)
    if (result.success) {
      setExamMode('active')
      setExamAnswers({})
    } else {
      showToast(result.error, 'error')
    }
  }

  const handleSelectExamAnswer = (questionId, answer) => {
    setExamAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmitExam = () => {
    if (!research.activeExam) return
    const exam = getExamById(research.activeExam.examId)
    const allAnswered = exam.questions.every(q => examAnswers[q.id] !== undefined)
    if (!allAnswered) {
      showToast('请完成所有题目', 'error')
      return
    }
    exam.questions.forEach(q => {
      answerExamQuestion(q.id, examAnswers[q.id])
    })
    const result = finishExam()
    if (result) {
      setShowExamResult(result)
      setExamMode('result')
    }
  }

  const handleNextExamQuestion = () => {
    if (!research.activeExam) return
    const exam = getExamById(research.activeExam.examId)
    const currentQ = exam.questions[research.activeExam.currentQuestionIndex]
    if (examAnswers[currentQ.id] === undefined) {
      showToast('请选择答案', 'error')
      return
    }
    answerExamQuestion(currentQ.id, examAnswers[currentQ.id])
  }

  const handleAddNote = () => {
    if (noteText.trim()) {
      addResearchNote({
        content: noteText.trim(),
        constellationId: noteConstellationId || null
      })
      showToast('笔记已添加成功', 'success')
      setNoteText('')
      setNoteConstellationId('')
    }
  }

  const isMatAccessible = (mat) => {
    return isMaterialUnlocked(mat, {
      startedTopicIds: research.startedTopicIds,
      completedTopicIds: research.completedTopicIds,
      topicProgress: research.topicProgress
    })
  }

  const isMatIdAccessible = (matId) => {
    const mat = getMaterialById(matId)
    return mat ? isMatAccessible(mat) : false
  }

  const renderDashboard = () => {
    const rankStyle = currentRank
    const inProgressTopics = research.startedTopicIds.filter(id => !research.completedTopicIds.includes(id))

    return (
      <div className="space-y-5">
        <div className={`p-5 rounded-2xl border ${rankStyle.borderColor} ${rankStyle.bgColor} relative overflow-hidden`}>
          <div className="absolute top-0 right-0 text-8xl opacity-10" style={{ right: -10, top: -10 }}>{rankStyle.icon}</div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${rankStyle.color} flex items-center justify-center text-2xl shadow-lg`}>
                {rankStyle.icon}
              </div>
              <div className="flex-1">
                <div className="font-display text-lg text-white">{rankStyle.name}</div>
                <div className="text-xs text-white/50">Lv.{rankStyle.level} · {rankStyle.description}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-white/50">研究经验</div>
                <div className={`font-mono text-xl ${rankStyle.textColor}`}>{stats.xp} XP</div>
              </div>
            </div>
            {nextRank && (
              <div>
                <div className="flex justify-between text-xs text-white/60 mb-1.5">
                  <span>距 {nextRank.name}</span>
                  <span className="font-mono">{stats.xp} / {nextRank.xpRequired}</span>
                </div>
                <div className="h-2.5 bg-space-900/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${rankStyle.color} rounded-full transition-all duration-700`}
                    style={{ width: `${stats.xpProgressInRank}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { label: '课题', value: `${stats.completedTopics}/${stats.totalTopics}`, icon: '📚', sub: `进行中: ${inProgressTopics.length}` },
            { label: '资料', value: `${stats.readMaterials}/${stats.totalMaterials}`, icon: '📄', sub: '已解锁' },
            { label: '考核', value: `${stats.passedExams}/${stats.totalExams}`, icon: '📝', sub: '通过率' },
            { label: '笔记', value: stats.notesCount, icon: '✏️', sub: '研究笔记' }
          ].map(item => (
            <div key={item.label} className="p-3 rounded-xl border border-white/10 bg-space-700/30 text-center">
              <div className="text-xl mb-1">{item.icon}</div>
              <div className="font-display text-white text-sm font-mono">{item.value}</div>
              <div className="text-[10px] text-white/40 mt-0.5">{item.sub}</div>
              <div className="text-[9px] text-white/30">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center gap-2 mb-3">
            <span>🏆</span>
            <h4 className="font-display text-white/90 text-sm">研究员等级体系</h4>
          </div>
          <div className="flex items-center justify-between gap-1">
            {Object.values(RESEARCHER_RANKS).map((rank, index) => {
              const isReached = currentRank.level >= rank.level
              const isCurrent = currentRank.id === rank.id
              return (
                <div key={rank.id} className="flex items-center flex-1">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm border transition-all ${
                    isCurrent
                      ? `bg-gradient-to-br ${rank.color} border-transparent text-white shadow-lg scale-110`
                      : isReached
                      ? 'bg-white/10 border-white/20 text-white/80'
                      : 'bg-space-800/60 border-white/5 text-white/30 grayscale'
                  }`}>
                    {rank.icon}
                  </div>
                  {index < Object.values(RESEARCHER_RANKS).length - 1 && (
                    <div className={`flex-1 h-0.5 mx-0.5 ${isReached ? 'bg-white/30' : 'bg-white/10'}`} />
                  )}
                </div>
              )
            })}
          </div>
          <div className="grid grid-cols-6 mt-2">
            {Object.values(RESEARCHER_RANKS).map(rank => (
              <div key={rank.id} className="text-center">
                <div className={`text-[9px] ${
                  currentRank.level >= rank.level ? 'text-white/60' : 'text-white/30'
                }`}>
                  {rank.name.replace('研究员', '').replace('星空', '')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {inProgressTopics.length > 0 && (
          <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
            <div className="flex items-center gap-2 mb-3">
              <span>⚡</span>
              <h4 className="font-display text-white/90 text-sm">进行中的课题</h4>
            </div>
            <div className="space-y-2">
              {inProgressTopics.map(topicId => {
                const topic = getTopicById(topicId)
                const progress = getTopicProgress(topicId)
                if (!topic || !progress) return null
                const cat = CATEGORY_LABELS[topic.category]
                return (
                  <button
                    key={topicId}
                    onClick={() => {
                      setSelectedTopicId(topicId)
                      setActiveResearchTopic(topicId)
                      setActiveTab('topics')
                    }}
                    className={`w-full p-3 rounded-xl border text-left transition-all card-hover ${cat.border} ${cat.bg}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{topic.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-white/90">{topic.title}</span>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded ${cat.bg} ${cat.text}`}>
                              {cat.label}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-white/50">{progress.percentage}%</span>
                        </div>
                        <div className="mt-1.5 h-1 bg-space-900/60 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                            style={{ width: `${progress.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderTopicDetail = () => {
    const topic = getTopicById(selectedTopicId)
    const progress = getTopicProgress(selectedTopicId)
    if (!topic || !progress) return null
    const cat = CATEGORY_LABELS[topic.category]
    const requiredRank = RESEARCHER_RANKS[topic.rankRequired]
    const materials = topic.materials.map(id => getMaterialById(id)).filter(Boolean)
    const exam = topic.examId ? getExamById(topic.examId) : null
    const examBest = exam ? getExamBestScore(exam.id) : null

    return (
      <div className="space-y-4">
        <button
          onClick={() => setSelectedTopicId(null)}
          className="flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors"
        >
          ← 返回课题列表
        </button>

        <div className={`p-4 rounded-2xl border ${cat.border} ${cat.bg}`}>
          <div className="flex items-start gap-3 mb-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl`}>
              {topic.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-display text-lg text-white">{topic.title}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded ${cat.bg} ${cat.text} border ${cat.border}`}>
                  {cat.label}
                </span>
              </div>
              <div className="text-xs text-white/50 mt-1">
                需要等级：{requiredRank.icon} {requiredRank.name}
              </div>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">{topic.summary}</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-white/40">完成奖励</div>
              <div className={`font-mono text-lg ${cat.text}`}>+{topic.xpReward}</div>
              <div className="text-[9px] text-white/30">XP</div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-white/60">课题总进度</span>
              <span className={`font-mono ${cat.text}`}>{progress.percentage}%</span>
            </div>
            <div className="h-2.5 bg-space-900/60 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-700`}
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center gap-2 mb-3">
            <span>🎯</span>
            <h4 className="font-display text-white/90 text-sm">课题目标</h4>
          </div>
          <div className="space-y-2.5">
            {progress.objectives.map((obj, idx) => {
              const p = obj.progress
              return (
                <div key={obj.id} className={`p-3 rounded-xl border transition-all ${
                  p.completed
                    ? 'border-green-500/30 bg-green-500/10'
                    : 'border-white/10 bg-space-800/30'
                }`}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs flex-shrink-0 ${
                        p.completed
                          ? 'bg-green-500/30 text-green-300'
                          : 'bg-space-600/50 text-white/40'
                      }`}>
                        {p.completed ? '✓' : idx + 1}
                      </div>
                      <div className="min-w-0">
                        <div className={`text-xs font-medium ${
                          p.completed ? 'text-white' : 'text-white/80'
                        }`}>
                          {obj.description}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1.5 bg-space-900/60 rounded-full overflow-hidden max-w-[120px]">
                            <div
                              className={`h-full rounded-full ${
                                p.completed ? 'bg-gradient-to-r from-green-500 to-emerald-400' : 'bg-white/30'
                              }`}
                              style={{ width: `${p.percentage}%` }}
                            />
                          </div>
                          <span className="text-[9px] font-mono text-white/50">
                            {p.current}/{p.target}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className={`text-[10px] font-mono ${
                        p.completed ? 'text-green-300' : 'text-star-gold'
                      }`}>
                        {p.completed ? `✓ ${obj.reward}` : obj.reward}
                      </div>
                      <div className="text-[9px] text-white/30">XP</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {materials.length > 0 && (
          <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
            <div className="flex items-center gap-2 mb-3">
              <span>📚</span>
              <h4 className="font-display text-white/90 text-sm">参考资料</h4>
              <span className="text-[10px] text-white/40 ml-auto">解锁后阅读可获 XP</span>
            </div>
            <div className="space-y-2">
              {materials.map(mat => {
                const isRead = !!research.readMaterials[mat.id]
                const accessible = isMatIdAccessible(mat.id)
                return (
                  <button
                    key={mat.id}
                    onClick={() => {
                      if (accessible) {
                        readMaterial(mat.id)
                        setSelectedMaterialId(mat.id)
                        setActiveTab('materials')
                      }
                    }}
                    disabled={!accessible}
                    className={`w-full p-3 rounded-xl border text-left transition-all ${
                      !accessible
                        ? 'border-white/5 bg-space-800/40 opacity-50 cursor-not-allowed'
                        : isRead
                        ? `${cat.border} ${cat.bg} card-hover`
                        : 'border-white/10 bg-space-800/30 card-hover'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{accessible ? (isRead ? '📖' : mat.icon) : '🔒'}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-medium ${
                            !accessible ? 'text-white/40' : isRead ? cat.text : 'text-white/90'
                          }`}>
                            {mat.title}
                          </span>
                          {isRead && <span className="text-[9px] text-green-400/70">✓ 已读</span>}
                          {!accessible && <span className="text-[9px] text-white/30">🔒 未解锁</span>}
                        </div>
                        <div className="text-[10px] mt-0.5 text-white/40">
                          {mat.type === 'guide' ? '指南' : mat.type === 'article' ? '文章' : '资料'}
                        </div>
                      </div>
                      {accessible && <div className="text-white/30">→</div>}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {exam && (
          <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
            <div className="flex items-center gap-2 mb-3">
              <span>{exam.icon}</span>
              <h4 className="font-display text-white/90 text-sm">阶段考核</h4>
            </div>
            <div className={`p-4 rounded-xl border transition-all ${
              progress.examPassed
                ? 'border-green-500/30 bg-green-500/5'
                : progress.allObjectivesCompleted
                ? 'border-star-gold/30 bg-star-gold/10'
                : 'border-white/10 bg-space-800/40'
            }`}>
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{exam.title}</span>
                    {progress.examPassed && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-300">
                        ✓ 已通过
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-white/50 mt-1">
                    {exam.questions.length} 题 · 及格线 {exam.passScore}分 · 通过奖励 +{exam.xpReward} XP
                  </div>
                  {examBest && (
                    <div className="text-[10px] text-white/40 mt-1">
                      历史最高分：<span className="font-mono text-star-gold">{examBest.percentage}分</span>
                    </div>
                  )}
                </div>
                {!progress.examPassed && (
                  <button
                    onClick={() => {
                      if (progress.allObjectivesCompleted) {
                        handleStartExam(exam.id)
                      } else {
                        showToast('请先完成所有课题目标', 'error')
                      }
                    }}
                    disabled={!progress.allObjectivesCompleted}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      progress.allObjectivesCompleted
                        ? `bg-gradient-to-r ${cat.color} text-white hover:shadow-md active:scale-95`
                        : 'bg-space-700/50 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    开始考核
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {progress.canClaim ? (
          <button
            onClick={() => handleCompleteTopic(selectedTopicId)}
            className="w-full p-4 rounded-2xl border border-star-gold/40 bg-star-gold/10 text-star-gold hover:bg-star-gold/20 transition-all active:scale-[0.98] animate-pulse"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">🎉</span>
              <span className="font-display text-base">领取课题奖励：+{topic.xpReward} XP + 星尘</span>
            </div>
          </button>
        ) : progress.isCompleted ? (
          <div className="p-4 rounded-2xl border border-green-500/30 bg-green-500/10 text-center">
            <div className="flex items-center justify-center gap-2 text-green-300">
              <span>✅</span>
              <span className="font-display text-sm">课题已完成</span>
            </div>
          </div>
        ) : null}
      </div>
    )
  }

  const renderTopics = () => {
    if (selectedTopicId) return renderTopicDetail()

    return (
      <div className="space-y-4">
        {Object.entries(CATEGORY_LABELS).map(([catId, cat]) => {
          const topicsInCat = RESEARCH_TOPICS.filter(t => t.category === catId)
          if (topicsInCat.length === 0) return null
          return (
            <div key={catId}>
              <div className="flex items-center gap-2 mb-2">
                <span>{cat.icon}</span>
                <h4 className="font-display text-sm text-white/80">{cat.label}</h4>
              </div>
              <div className="space-y-2">
                {topicsInCat.map(topic => {
                  const isStarted = research.startedTopicIds.includes(topic.id)
                  const isCompleted = research.completedTopicIds.includes(topic.id)
                  const progress = isStarted ? getTopicProgress(topic.id) : null
                  const requiredRank = RESEARCHER_RANKS[topic.rankRequired]
                  const canStart = currentRank.level >= requiredRank.level

                  return (
                    <div
                      key={topic.id}
                      onClick={() => {
                        if (isStarted) {
                          setSelectedTopicId(topic.id)
                          setActiveResearchTopic(topic.id)
                        }
                      }}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        isCompleted
                          ? `${cat.border} ${cat.bg}`
                          : canStart && !isStarted
                          ? 'border-white/10 bg-space-800/30 hover:border-white/20'
                          : isStarted
                          ? 'border-white/10 bg-space-800/30 cursor-pointer card-hover hover:border-white/20'
                          : 'border-white/5 bg-space-800/20 opacity-70'
                      } ${isStarted ? 'cursor-pointer' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-md`}>
                          {topic.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h5 className="font-display text-sm text-white/90">{topic.title}</h5>
                            {isCompleted && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-300">
                                ✓ 已完成
                              </span>
                            )}
                            {!canStart && (
                              <span className="text-[9px] text-white/30">
                                🔒 {requiredRank.icon} {requiredRank.name}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-white/50 mt-1 line-clamp-2">
                            {topic.summary}
                          </p>
                          <div className="flex items-center gap-3 mt-2 flex-wrap">
                            <span className="text-[10px] text-white/40">
                              {requiredRank.icon} {requiredRank.name}
                            </span>
                            <span className="text-[10px] text-white/40">
                              🎯 {topic.objectives.length}项目标
                            </span>
                            <span className="text-[10px] font-mono text-star-gold">
                              +{topic.xpReward} XP
                            </span>
                          </div>
                          {isStarted && progress && (
                            <div className="mt-2">
                              <div className="flex justify-between text-[9px] mb-1">
                                <span className="text-white/40">进度</span>
                                <span className="text-white/50 font-mono">{progress.percentage}%</span>
                              </div>
                              <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-500`}
                                  style={{ width: `${progress.percentage}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-1 ml-2">
                          {!isStarted && !isCompleted && canStart && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleStartTopic(topic.id)
                              }}
                              className={`px-3 py-1.5 rounded-lg text-[10px] font-medium bg-gradient-to-r ${cat.color} text-white hover:shadow-md active:scale-95 transition-all`}
                            >
                              开始
                            </button>
                          )}
                          {isStarted && (
                            <span className="text-[10px] text-white/40">查看 →</span>
                          )}
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

  const renderMaterialDetail = () => {
    const material = getMaterialById(selectedMaterialId)
    if (!material) return null
    const isRead = !!research.readMaterials[material.id]

    return (
      <div className="space-y-4">
        <button
          onClick={() => setSelectedMaterialId(null)}
          className="flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors"
        >
          ← 返回资料列表
        </button>

        <div className="p-5 rounded-2xl border border-white/10 bg-space-700/30">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nebula-purple to-nebula-cyan flex items-center justify-center text-2xl">
              {material.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg text-white">{material.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] px-2 py-0.5 rounded bg-nebula-purple/20 text-nebula-cyan/80">
                  {material.type === 'guide' ? '📖 指南' : '📄 文章'}
                </span>
                {isRead && (
                  <span className="text-[10px] text-green-400/70">✓ 已阅读</span>
                )}
              </div>
            </div>
          </div>
          <div className="prose prose-invert max-w-none text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
            {material.content}
          </div>
        </div>

        {research.activeTopicId && (
          <button
            onClick={() => {
              const topic = getTopicById(research.activeTopicId)
              if (topic) {
                setSelectedTopicId(research.activeTopicId)
                setActiveTab('topics')
              }
            }}
            className="w-full p-3 rounded-xl border border-nebula-purple/30 bg-nebula-purple/10 text-nebula-cyan text-xs hover:bg-nebula-purple/20 transition-all"
          >
            💡 在课题中继续探索 →
          </button>
        )}
      </div>
    )
  }

  const renderMaterials = () => {
    if (selectedMaterialId) return renderMaterialDetail()

    const allMaterials = Object.values(RESEARCH_MATERIALS)
    const accessibleCount = allMaterials.filter(m => isMatAccessible(m)).length

    return (
      <div className="space-y-4">
        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span>📚</span>
              <h4 className="font-display text-white/90 text-sm">研究资料库</h4>
            </div>
            <span className="text-[10px] text-white/40">
              已解锁 {accessibleCount} / {allMaterials.length}
            </span>
          </div>
          <div className="space-y-2">
            {allMaterials.map(mat => {
              const isAccessible = isMatAccessible(mat)
              const isRead = !!research.readMaterials[mat.id]
              const relatedTopic = RESEARCH_TOPICS.find(t => t.materials.includes(mat.id))
              const cat = relatedTopic ? CATEGORY_LABELS[relatedTopic.category] : null
              return (
                <button
                  key={mat.id}
                  onClick={() => {
                    if (isAccessible) {
                      readMaterial(mat.id)
                      setSelectedMaterialId(mat.id)
                    }
                  }}
                  disabled={!isAccessible}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    !isAccessible
                      ? 'border-white/5 bg-space-800/40 opacity-50 cursor-not-allowed'
                      : isRead
                      ? `${cat?.border || 'border-nebula-purple/30'} ${cat?.bg || 'bg-nebula-purple/10'}`
                      : 'border-white/10 bg-space-800/30 card-hover'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xl ${!isAccessible ? 'grayscale opacity-50' : ''}`}>
                      {isAccessible ? (isRead ? '📖' : mat.icon) : '🔒'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-medium ${
                          !isAccessible ? 'text-white/40' : isRead ? cat?.text || 'text-nebula-cyan' : 'text-white/90'
                        }`}>
                          {mat.title}
                        </span>
                        {isRead && <span className="text-[9px] text-green-400/70">✓</span>}
                        {!isAccessible && <span className="text-[9px] text-white/30">🔒 跟随课题解锁</span>}
                      </div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-[9px] text-white/40">
                          {mat.type === 'guide' ? '指南' : '文章'}
                        </span>
                        {relatedTopic && (
                          <span className={`text-[9px] ${cat?.text || 'text-white/40'}`}>
                            {cat?.icon} {relatedTopic.title}
                          </span>
                        )}
                      </div>
                    </div>
                    {isAccessible && <div className="text-white/30 text-sm">→</div>}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const renderExamActive = () => {
    if (!research.activeExam) return null
    const exam = getExamById(research.activeExam.examId)
    if (!exam) return null
    const currentIdx = research.activeExam.currentQuestionIndex
    const total = exam.questions.length
    const currentQ = exam.questions[currentIdx]

    return (
      <div className="space-y-4">
        <div className="p-4 rounded-2xl border border-star-gold/30 bg-star-gold/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span>{exam.icon}</span>
              <h3 className="font-display text-white text-sm">{exam.title}</h3>
            </div>
            <span className="text-xs font-mono text-star-gold">
              {currentIdx + 1} / {total}
            </span>
          </div>
          <div className="h-2 bg-space-900/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-star-gold to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-white/10 bg-space-700/30">
          <div className="mb-4">
            <div className="text-xs text-white/50 mb-2">第 {currentIdx + 1} 题</div>
            <div className="text-base text-white font-medium leading-relaxed">
              {currentQ.question}
            </div>
            <div className="text-[10px] text-white/30 mt-2">（本题 {currentQ.score} 分）</div>
          </div>

          {currentQ.type === 'single' && (
            <div className="space-y-2">
              {currentQ.options.map((opt, idx) => {
                const selected = examAnswers[currentQ.id] === idx
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectExamAnswer(currentQ.id, idx)}
                    className={`w-full p-3.5 rounded-xl border text-left text-sm transition-all ${
                      selected
                        ? 'border-nebula-purple/50 bg-nebula-purple/20 text-white'
                        : 'border-white/10 bg-space-800/40 text-white/80 hover:border-white/20 hover:bg-space-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-[11px] ${
                        selected
                          ? 'border-nebula-cyan bg-nebula-cyan text-space-900'
                          : 'border-white/20 text-white/50'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span>{opt}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {currentQ.type === 'true_false' && (
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: '✓ 正确', value: true },
                { label: '✕ 错误', value: false }
              ].map(opt => {
                const selected = examAnswers[currentQ.id] === opt.value
                return (
                  <button
                    key={String(opt.value)}
                    onClick={() => handleSelectExamAnswer(currentQ.id, opt.value)}
                    className={`p-4 rounded-xl border text-sm transition-all ${
                      selected
                        ? 'border-nebula-purple/50 bg-nebula-purple/20 text-white'
                        : 'border-white/10 bg-space-800/40 text-white/80 hover:border-white/20'
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          )}

          {currentQ.type === 'multiple' && (
            <div className="space-y-2">
              {currentQ.options.map((opt, idx) => {
                const currentAnswers = examAnswers[currentQ.id] || []
                const selected = currentAnswers.includes(idx)
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      const next = selected
                        ? currentAnswers.filter(i => i !== idx)
                        : [...currentAnswers, idx]
                      handleSelectExamAnswer(currentQ.id, next)
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left text-sm transition-all ${
                      selected
                        ? 'border-nebula-purple/50 bg-nebula-purple/20 text-white'
                        : 'border-white/10 bg-space-800/40 text-white/80 hover:border-white/20 hover:bg-space-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded border flex items-center justify-center text-[11px] ${
                        selected
                          ? 'border-nebula-cyan bg-nebula-cyan text-space-900'
                          : 'border-white/20 text-white/50'
                      }`}>
                        {selected ? '✓' : String.fromCharCode(65 + idx)}
                      </div>
                      <span>{opt}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              abandonExam()
              setExamMode('list')
            }}
            className="flex-1 py-3 rounded-xl border border-white/10 bg-space-700/30 text-white/60 text-sm hover:bg-space-700/50 transition-all"
          >
            放弃考核
          </button>
          {currentIdx + 1 >= total ? (
            <button
              onClick={handleSubmitExam}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-star-gold to-amber-400 text-space-900 text-sm font-medium hover:shadow-lg active:scale-95 transition-all"
            >
              提交答卷
            </button>
          ) : (
            <button
              onClick={handleNextExamQuestion}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white text-sm font-medium hover:shadow-lg active:scale-95 transition-all"
            >
              下一题 →
            </button>
          )}
        </div>
      </div>
    )
  }

  const renderExamResult = () => {
    const result = showExamResult
    if (!result) return null
    const passed = result.passed
    const exam = getExamById(result.examId)
    const topic = exam?.topicId ? getTopicById(exam.topicId) : null
    const cat = topic ? CATEGORY_LABELS[topic.category] : null

    return (
      <div className="space-y-4">
        <div className={`p-6 rounded-2xl border text-center ${
          passed
            ? 'border-green-500/40 bg-green-500/10'
            : 'border-red-500/30 bg-red-500/10'
        }`}>
          <div className="text-5xl mb-3">{passed ? '🎉' : '💪'}</div>
          <h3 className="font-display text-2xl text-white mb-2">
            {passed ? '考核通过！' : '继续加油！'}
          </h3>
          <div className={`text-4xl font-mono font-bold mb-3 ${
            passed ? 'text-green-300' : 'text-white/80'
          }`}>
            {result.percentage}<span className="text-xl">分</span>
          </div>
          <div className="text-sm text-white/60">
            {result.score} / {result.maxScore}
          </div>
          {passed && exam && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <div className="text-xs text-white/40">获得奖励</div>
                  <div className="text-2xl font-display text-star-gold">+{exam.xpReward} XP</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {exam && (
          <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
            <h4 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
              <span>📋</span> 答题详情
            </h4>
            <div className="space-y-2">
              {exam.questions.map((q, idx) => {
                const userAnswer = result.answers[q.id]
                const isCorrect = userAnswer?.isCorrect
                return (
                  <div key={q.id} className={`p-3 rounded-xl border ${
                    isCorrect
                      ? 'border-green-500/20 bg-green-500/5'
                      : 'border-red-500/20 bg-red-500/5'
                  }`}>
                    <div className="flex items-start gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 ${
                        isCorrect ? 'bg-green-500/30 text-green-300' : 'bg-red-500/30 text-red-300'
                      }`}>
                        {isCorrect ? '✓' : '✕'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-white/80">
                          <span className="text-white/40 mr-1">{idx + 1}.</span>
                          {q.question}
                        </div>
                        {!isCorrect && q.type === 'single' && (
                          <div className="text-[10px] text-green-400/70 mt-1">
                            正确答案：{String.fromCharCode(65 + q.answer)} {q.options[q.answer]}
                          </div>
                        )}
                        {!isCorrect && q.type === 'true_false' && (
                          <div className="text-[10px] text-green-400/70 mt-1">
                            正确答案：{q.answer ? '正确' : '错误'}
                          </div>
                        )}
                        {!isCorrect && q.type === 'multiple' && (
                          <div className="text-[10px] text-green-400/70 mt-1">
                            正确答案：{q.answer.map(i => String.fromCharCode(65 + i)).join('、')}
                          </div>
                        )}
                      </div>
                      <div className={`text-[10px] font-mono ${
                        isCorrect ? 'text-green-300' : 'text-red-300'
                      }`}>
                        {isCorrect ? `+${q.score}` : '0'}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => {
              setExamMode('list')
              setShowExamResult(null)
            }}
            className="flex-1 py-3 rounded-xl border border-white/10 bg-space-700/30 text-white/70 text-sm hover:bg-space-700/50 transition-all"
          >
            返回考核列表
          </button>
          {topic && (
            <button
              onClick={() => {
                setSelectedTopicId(topic.id)
                setActiveResearchTopic(topic.id)
                setActiveTab('topics')
                setExamMode('list')
                setShowExamResult(null)
              }}
              className={`flex-1 py-3 rounded-xl bg-gradient-to-r ${cat?.color || 'from-nebula-purple to-nebula-cyan'} text-white text-sm font-medium hover:shadow-lg active:scale-95 transition-all`}
            >
              查看课题
            </button>
          )}
        </div>
      </div>
    )
  }

  const renderExams = () => {
    if (examMode === 'active') return renderExamActive()
    if (examMode === 'result') return renderExamResult()

    const allExams = Object.values(RESEARCH_EXAMS)
    return (
      <div className="space-y-4">
        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span>📝</span>
              <h4 className="font-display text-white/90 text-sm">阶段考核中心</h4>
            </div>
            <span className="text-[10px] text-white/40">
              已通过 {research.passedExams.length} / {allExams.length}
            </span>
          </div>
          <div className="space-y-2.5">
            {allExams.map(exam => {
              const passed = research.passedExams.includes(exam.id)
              const best = getExamBestScore(exam.id)
              const topic = getTopicById(exam.topicId)
              const cat = topic ? CATEGORY_LABELS[topic.category] : null
              const topicProgress = topic ? getTopicProgress(topic.id) : null
              const canStart = topicProgress?.allObjectivesCompleted || passed

              return (
                <div
                  key={exam.id}
                  className={`p-4 rounded-xl border transition-all ${
                    passed
                      ? 'border-green-500/30 bg-green-500/10'
                      : canStart
                      ? `${cat?.border || 'border-white/10'} ${cat?.bg || 'bg-space-800/30'}`
                      : 'border-white/5 bg-space-800/20 opacity-70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat?.color || 'from-gray-500 to-cyan-400'} flex items-center justify-center text-lg shadow-md`}>
                        {exam.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h5 className="font-display text-sm text-white/90">{exam.title}</h5>
                          {passed && (
                            <span className="text-[9px] px-2 py-0.5 rounded bg-green-500/20 text-green-300">
                              ✓ 已通过
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 mt-1 flex-wrap">
                          <span className="text-[10px] text-white/40">
                            {exam.questions.length}题
                          </span>
                          <span className="text-[10px] text-white/40">
                            及格 {exam.passScore}分
                          </span>
                          {best && (
                            <span className="text-[10px] text-star-gold/80">
                              最高 {best.percentage}分
                            </span>
                          )}
                          {topic && (
                            <span className={`text-[10px] ${cat?.text || 'text-white/40'}`}>
                              {cat?.icon} {topic.title}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {!passed && (
                      <button
                        onClick={() => {
                          if (canStart) {
                            handleStartExam(exam.id)
                          } else {
                            showToast('请先完成对应课题的所有目标', 'error')
                          }
                        }}
                        disabled={!canStart}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all ${
                          canStart
                            ? `bg-gradient-to-r ${cat?.color || 'from-nebula-purple to-nebula-cyan'} text-white hover:shadow-md active:scale-95`
                            : 'bg-space-700/50 text-white/30 cursor-not-allowed'
                        }`}
                      >
                        参加考核
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const renderNotes = () => {
    const notes = research.notes || []

    return (
      <div className="space-y-4">
        <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
          <div className="flex items-center gap-2 mb-3">
            <span>✏️</span>
            <h4 className="font-display text-white/90 text-sm">研究笔记</h4>
          </div>
          <div className="space-y-3">
            <textarea
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
              placeholder="记录你的观测心得、发现灵感..."
              className="w-full p-3 rounded-xl border border-white/10 bg-space-900/40 text-sm text-white/90 placeholder-white/30 resize-none min-h-[100px] outline-none focus:border-nebula-purple/50 focus:ring-1 focus:ring-nebula-purple/30 transition-all"
            />
            <div className="flex gap-2">
              <select
                value={noteConstellationId}
                onChange={e => setNoteConstellationId(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-white/10 bg-space-800/40 text-xs text-white/70 outline-none focus:border-nebula-purple/50 transition-all"
              >
                <option value="">关联星座（可选）</option>
                {discoveredConstellations?.map(id => {
                  const c = getConstellationById(id)
                  return c ? <option key={id} value={id}>{c.icon} {c.name}</option> : null
                })}
              </select>
              <button
                onClick={handleAddNote}
                disabled={!noteText.trim()}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  noteText.trim()
                    ? 'bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white hover:shadow-md active:scale-95'
                    : 'bg-space-700/50 text-white/30 cursor-not-allowed'
                }`}
              >
                保存笔记
              </button>
            </div>
          </div>
        </div>

        {notes.length > 0 ? (
          <div className="space-y-2.5">
            {notes.map(note => {
              const c = note.constellationId ? getConstellationById(note.constellationId) : null
              return (
                <div key={note.id} className="p-4 rounded-xl border border-white/10 bg-space-700/20">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white/90 whitespace-pre-wrap leading-relaxed">
                        {note.content}
                      </div>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        {c && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-nebula-purple/20 text-nebula-cyan/80">
                            {c.icon} {c.name}
                          </span>
                        )}
                        <span className="text-[10px] text-white/30">
                          {new Date(note.createdAt).toLocaleString('zh-CN', {
                            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="h-40 flex flex-col items-center justify-center text-center p-8 border border-dashed border-white/10 rounded-2xl bg-space-800/20">
            <div className="text-4xl mb-3 opacity-30">📝</div>
            <div className="text-white/50 text-sm">
              开始记录你的研究心得吧
            </div>
            <div className="text-xs text-white/30 mt-1 max-w-xs">
              每一次观察与星辰的邂逅都值得被记录
            </div>
          </div>
        )}
      </div>
    )
  }

  const tabs = [
    { id: 'dashboard', label: '总览', icon: '🏠' },
    { id: 'topics', label: '课题', icon: '📚' },
    { id: 'materials', label: '资料', icon: '📄' },
    { id: 'exams', label: '考核', icon: '📝' },
    { id: 'notes', label: '笔记', icon: '✏️' },
  ]

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[88vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-display text-white">星座研究院</h2>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${currentRank.bgColor} ${currentRank.textColor} border ${currentRank.borderColor}`}>
                  {currentRank.icon} {currentRank.name}
                </span>
              </div>
              <p className="text-xs text-white/50 mt-1">
                课题 · 任务 · 资料 · 考核，构建深度长期成长体系
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

          <div className="mt-4">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-white/60">研究员等级进度</span>
              <span className={`font-mono ${currentRank.textColor}`}>
                {nextRank ? `${stats.xp} / ${nextRank?.xpRequired || stats.xp} XP` : `${stats.xp} XP`}
              </span>
            </div>
            <div className="h-2.5 bg-space-900/80 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${currentRank.color} transition-all duration-700 rounded-full`}
                style={{ width: nextRank ? `${stats.xpProgressInRank}%` : '100%' }}
              />
            </div>
          </div>

          <div className="mt-4 flex gap-2 flex-wrap">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  if (tab.id !== 'topics') setSelectedTopicId(null)
                  if (tab.id !== 'materials') setSelectedMaterialId(null)
                  if (tab.id !== 'exams') {
                    setExamMode('list')
                    setShowExamResult(null)
                  }
                }}
                className={`flex-1 min-w-[70px] py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-white border border-white/10'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'topics' && renderTopics()}
          {activeTab === 'materials' && renderMaterials()}
          {activeTab === 'exams' && renderExams()}
          {activeTab === 'notes' && renderNotes()}
        </div>
      </div>

      {toast && (
        <div className={`absolute top-20 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl shadow-xl shadow-black/30 backdrop-blur-md z-50 animate-in slide-in-from-top-4 fade-in duration-200 ${
          toast.type === 'success'
            ? 'bg-green-500/90 text-white'
            : toast.type === 'error'
            ? 'bg-red-500/90 text-white'
            : 'bg-space-800/90 text-white'
        }`}>
          <span className="text-xs font-medium">{toast.message}</span>
        </div>
      )}
    </div>
  )
}
