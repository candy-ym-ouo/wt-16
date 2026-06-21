import { useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { REWARD_ITEMS, QUIZ_TYPES } from '../data/quiz'
import { getConstellationById } from '../data/constellations'

const QUIZ_TYPE_LABELS = {
  [QUIZ_TYPES.CONSTELLATION_NAME]: { label: '星座辨识', icon: '🔭', color: 'from-blue-400' },
  [QUIZ_TYPES.CONSTELLATION_EN]: { label: '英文名称', icon: '🌐', color: 'from-cyan-400' },
  [QUIZ_TYPES.MYTHOLOGY]: { label: '神话故事', icon: '📖', color: 'from-purple-400' },
  [QUIZ_TYPES.OBSERVATION]: { label: '观测技巧', icon: '👁️', color: 'from-green-400' },
  [QUIZ_TYPES.SEASON]: { label: '四季星空', icon: '🌸', color: 'from-pink-400' },
  [QUIZ_TYPES.DIFFICULTY]: { label: '难度等级', icon: '⭐', color: 'from-yellow-400' },
  [QUIZ_TYPES.MAIN_STAR]: { label: '主要亮星', icon: '✨', color: 'from-amber-400' },
  [QUIZ_TYPES.FEATURE]: { label: '星座特征', icon: '📊', color: 'from-indigo-400' },
  [QUIZ_TYPES.ACHIEVEMENT]: { label: '成就问答', icon: '🏆', color: 'from-orange-400' },
  [QUIZ_TYPES.LOG_REVIEW]: { label: '观测回顾', icon: '📝', color: 'from-teal-400' }
}

function QuizHome({ onStart }) {
  const { getQuizStats, discoveredConstellations, unlockedAchievements, observationLogs } = useGameStore()
  const stats = getQuizStats()
  const discoveredCount = discoveredConstellations.length

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-nebula-purple/20 border border-nebula-purple/30">
          <div className="text-3xl mb-1">🏆</div>
          <div className="text-2xl font-bold text-nebula-purple">
            {stats.points}
          </div>
          <div className="text-[10px] text-white/50">学识积分</div>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-to-br from-nebula-cyan/20 border border-nebula-cyan/30">
          <div className="text-3xl mb-1">📝</div>
          <div className="text-2xl font-bold text-nebula-cyan">
            {stats.totalCompleted}
          </div>
          <div className="text-[10px] text-white/50">完成轮次</div>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-to-br from-star-gold/20 border border-star-gold/30">
          <div className="text-3xl mb-1">🎯</div>
          <div className="text-2xl font-bold text-star-gold">
            {stats.accuracy}%
          </div>
          <div className="text-[10px] text-white/50">正确率</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-space-700/40 border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span>🔥</span>
            <span className="text-xs text-white/70">当前连胜</span>
          </div>
          <div className="text-xl font-bold text-white">
            {stats.currentStreak}
          </div>
        </div>
        <div className="p-3 rounded-xl bg-space-700/40 border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span>⚡</span>
            <span className="text-xs text-white/70">最高连胜</span>
          </div>
          <div className="text-xl font-bold text-white">
            {stats.bestStreak}
          </div>
        </div>
        <div className="p-3 rounded-xl bg-space-700/40 border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span>💯</span>
            <span className="text-xs text-white/70">全对次数</span>
          </div>
          <div className="text-xl font-bold text-white">
            {stats.perfectCount}
          </div>
        </div>
        <div className="p-3 rounded-xl bg-space-700/40 border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span>💡</span>
            <span className="text-xs text-white/70">可用提示</span>
          </div>
          <div className="text-xl font-bold text-white">
            {stats.hints}
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-gradient-to-r from-nebula-purple/10 to-nebula-cyan/10 border border-white/10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌟</span>
            <div>
              <div className="text-sm font-bold text-white">开始星座百科</div>
              <div className="text-[11px] text-white/50">
                已发现 {discoveredCount} 个星座
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <button
            onClick={() => onStart(5)}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-cyan
                     text-white font-bold text-sm hover:shadow-lg hover:shadow-nebula-purple/30
                     transition-all active:scale-[0.98]"
          >
            <span className="flex items-center justify-center gap-2">
              <span>✨</span>
              <span>快速挑战 · 5题</span>
            </span>
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onStart(3)}
              className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10
                       text-white/80 text-xs font-medium hover:bg-white/10 transition-all"
            >
              轻松练习 · 3题
            </button>
            <button
              onClick={() => onStart(10)}
              className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10
                       text-white/80 text-xs font-medium hover:bg-white/10 transition-all"
            >
              大师挑战 · 10题
            </button>
          </div>
        </div>
        {discoveredCount === 0 && (
          <div className="mt-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300/70 text-[11px]">
            💡 发现更多星座可以解锁更丰富的题目！
          </div>
        )}
        {unlockedAchievements.length >= 3 && (
          <div className="mt-2 text-[10px] text-white/40">
            🏆 已解锁 {unlockedAchievements.length} 个成就，可触发成就专属题目
          </div>
        )}
        {observationLogs.length >= 5 && (
          <div className="mt-1 text-[10px] text-white/40">
            📖 有 {observationLogs.length} 条观测日志，可触发回顾题目
          </div>
        )}
      </div>
    </div>
  )
}

function QuizQuestion({ question, questionIndex, totalQuestions, earnedPoints, onAnswer, feedback, onSubmit, onNext, onUseHint, hintsAvailable }) {
  const [selectedOption, setSelectedOption] = useState(null)
  const [revealedAnswer, setRevealedAnswer] = useState(false)

  useEffect(() => {
    setSelectedOption(null)
    setRevealedAnswer(false)
  }, [questionIndex])

  const typeInfo = QUIZ_TYPE_LABELS[question.type] || { label: '问答', icon: '❓', color: 'from-gray-400' }
  const constellation = question.constellationId ? getConstellationById(question.constellationId) : null

  const handleSelect = (option) => {
    if (feedback) return
    setSelectedOption(option)
  }

  const handleSubmit = () => {
    if (!selectedOption || feedback) return
    onSubmit(question.id, selectedOption)
  }

  const handleUseHint = () => {
    if (hintsAvailable <= 0 || feedback) return
    const used = onUseHint()
    if (used) {
      setRevealedAnswer(true)
    }
  }

  const getOptionStyle = (option) => {
    if (!feedback) {
      if (selectedOption === option) {
        return 'bg-nebula-purple/30 border-nebula-purple/50 text-white'
      }
      return 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
    }
    if (option === question.correctAnswer) {
      return 'bg-green-500/20 border-green-500/50 text-green-300'
    }
    if (selectedOption === option && option !== question.correctAnswer) {
      return 'bg-red-500/20 border-red-500/50 text-red-300'
    }
    return 'bg-white/5 border-white/10 text-white/40'
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${typeInfo.color}/20 border border-white/10`}>
            <span className="text-[10px] text-white/70 flex items-center gap-1">
              <span>{typeInfo.icon}</span>
              <span>{typeInfo.label}</span>
            </span>
          </div>
          {constellation && (
            <div className="px-3 py-1 rounded-lg bg-space-700/50 border border-white/10">
              <span className="text-[10px] text-white/50">
                {constellation.name}
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hintsAvailable > 0 && !feedback && (
            <button
              onClick={handleUseHint}
              className="px-2 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/30
                       text-yellow-300 text-[10px] font-medium
                       hover:bg-yellow-500/20 transition-all flex items-center gap-1"
            >
              <span>💡</span>
              <span>提示 x{hintsAvailable}</span>
            </button>
          )}
          <div className="text-xs text-white/50 font-mono">
            {questionIndex + 1} / {totalQuestions}
          </div>
        </div>
      </div>

      <div className="w-full h-1.5 rounded-full bg-space-700/50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan transition-all duration-300"
          style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      <div className="p-5 rounded-2xl bg-gradient-to-br from-space-700/60 to-space-800/60 border border-white/10">
        <div className="text-lg font-display text-white leading-relaxed">
          {question.question}
        </div>
        {question.difficulty && (
          <div className="mt-2 flex items-center gap-1">
            {Array.from({ length: question.difficulty }).map((_, i) => (
              <span key={i} className="text-star-gold text-xs">⭐</span>
            ))}
            <span className="text-[10px] text-white/40 ml-2">
              答对 +{question.points} 积分
            </span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        {question.options.map((option, idx) => {
          const isHinted = revealedAnswer && option === question.correctAnswer
          return (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              disabled={!!feedback}
              className={`w-full p-4 rounded-xl border text-left text-sm transition-all
                        ${getOptionStyle(option)}
                        ${isHinted ? 'ring-2 ring-yellow-400/50' : ''}`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold
                              ${selectedOption === option
                                ? 'bg-nebula-purple text-white'
                                : 'bg-white/10 text-white/50'}`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{option}</span>
                {feedback && option === question.correctAnswer && (
                  <span className="text-green-400">✓</span>
                )}
                {feedback && selectedOption === option && option !== question.correctAnswer && (
                  <span className="text-red-400">✗</span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {feedback && (
        <div className={`p-4 rounded-2xl border ${
          feedback.isCorrect
            ? 'bg-green-500/10 border-green-500/30'
            : 'bg-red-500/10 border-red-500/30'
        }`}>
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                            ${feedback.isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
              {feedback.isCorrect ? '🎉' : '😅'}
            </div>
            <div className="flex-1">
              <div className={`font-bold text-sm mb-1 ${
                feedback.isCorrect ? 'text-green-300' : 'text-red-300'
              }`}>
                {feedback.isCorrect ? `回答正确！+${feedback.earnedPoints} 积分` : '回答错误'}
              </div>
              <div className="text-xs text-white/60 leading-relaxed">
                {feedback.explanation}
              </div>
              {!feedback.isCorrect && (
                <div className="mt-2 text-[11px] text-white/40">
                  正确答案：<span className="text-white/70">{feedback.correctAnswer}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {!feedback ? (
        <button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className={`w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.98]
                    ${selectedOption
                      ? 'bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white hover:shadow-lg'
                      : 'bg-white/5 text-white/30 cursor-not-allowed'}`}
        >
          确认答案
        </button>
      ) : (
        <button
          onClick={onNext}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-cyan
                   text-white font-bold text-sm hover:shadow-lg transition-all active:scale-[0.98]"
        >
          {feedback.isLast ? '查看结果 →' : '下一题 →'}
        </button>
      )}

      {feedback && (
        <div className="text-center text-xs text-white/50">
          本轮累计积分：<span className="text-star-gold font-bold">{earnedPoints}</span>
        </div>
      )}
    </div>
  )
}

function QuizResult({ result, onRestart, onHome }) {
  const getScoreLevel = () => {
    if (result.isPerfect) return { level: '完美通关！', emoji: '🏆', color: 'from-star-gold' }
    if (result.accuracy >= 80) return { level: '非常优秀！', emoji: '🌟', color: 'from-nebula-purple' }
    if (result.accuracy >= 60) return { level: '表现不错！', emoji: '👍', color: 'from-nebula-cyan' }
    if (result.accuracy >= 40) return { level: '继续加油！', emoji: '💪', color: 'from-green-400' }
    return { level: '再接再厉！', emoji: '📚', color: 'from-yellow-400' }
  }

  const scoreInfo = getScoreLevel()

  return (
    <div className="space-y-5">
      <div className={`p-6 rounded-3xl bg-gradient-to-br ${scoreInfo.color}/20 border border-white/10 text-center`}>
        <div className="text-6xl mb-3 animate-bounce">{scoreInfo.emoji}</div>
        <div className={`text-2xl font-display font-bold bg-gradient-to-r ${scoreInfo.color} bg-clip-text text-transparent mb-2`}>
          {scoreInfo.level}
        </div>
        <div className="text-white/60 text-sm">
          答对 {result.correct} / {result.total} 题 · 正确率 {result.accuracy}%
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-star-gold/10 border border-star-gold/20 text-center">
          <div className="text-3xl mb-1">🏆</div>
          <div className="text-2xl font-bold text-star-gold">+{result.points}</div>
          <div className="text-[11px] text-white/50">获得积分</div>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-to-br from-nebula-purple/10 border border-nebula-purple/20 text-center">
          <div className="text-3xl mb-1">⏱️</div>
          <div className="text-2xl font-bold text-nebula-purple">
            {Math.round(result.duration / 1000)}s
          </div>
          <div className="text-[11px] text-white/50">用时</div>
        </div>
      </div>

      {result.isPerfect && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
          <div className="flex items-center gap-3">
            <div className="text-3xl">💯</div>
            <div>
              <div className="font-bold text-yellow-300 text-sm">完美奖励</div>
              <div className="text-[11px] text-yellow-200/70">
                全对通关！额外获得 +{result.perfectBonus} 积分奖励
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 rounded-2xl bg-space-700/30 border border-white/10">
        <div className="text-xs text-white/50 mb-3 font-medium">📝 本次答题详情</div>
        <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin">
          {result.answers?.map((answer, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs
                              ${answer.isCorrect ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {answer.isCorrect ? '✓' : '✗'}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-white/70 truncate">
                    {answer.question.length > 30 ? answer.question.slice(0, 30) + '...' : answer.question}
                  </div>
                  <div className="text-[10px] text-white/40 mt-0.5">
                    {answer.isCorrect
                      ? `+${answer.points}分`
                      : `正确：${answer.correctAnswer}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onHome}
          className="py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium
                   hover:bg-white/10 transition-all"
        >
          返回首页
        </button>
        <button
          onClick={onRestart}
          className="py-3 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-cyan
                   text-white text-sm font-bold hover:shadow-lg transition-all active:scale-[0.98]"
        >
          再来一轮
        </button>
      </div>
    </div>
  )
}

function RewardShop({ onBack }) {
  const { getQuizStats, redeemReward, quiz } = useGameStore()
  const stats = getQuizStats()
  const [redeemMessage, setRedeemMessage] = useState(null)

  const handleRedeem = (rewardId) => {
    const result = redeemReward(rewardId)
    if (result.success) {
      setRedeemMessage({ type: 'success', text: `成功兑换：${result.reward.name}！` })
    } else {
      let msg = '兑换失败'
      if (result.reason === 'insufficient_points') {
        msg = `积分不足，还需 ${result.needed - result.current} 积分`
      } else if (result.reason === 'already_redeemed') {
        msg = '该奖励已兑换过'
      }
      setRedeemMessage({ type: 'error', text: msg })
    }
    setTimeout(() => setRedeemMessage(null), 2500)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs text-white/60 hover:text-white transition-all"
        >
          <span>←</span>
          <span>返回</span>
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-star-gold/10 border border-star-gold/20">
          <span>🏆</span>
          <span className="text-star-gold font-bold text-sm">{stats.points}</span>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-gradient-to-r from-nebula-purple/10 to-nebula-cyan/10 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎁</div>
          <div>
            <div className="font-bold text-white text-sm">积分兑换商店</div>
            <div className="text-[11px] text-white/50">
              使用答题获得的积分兑换实用奖励
            </div>
          </div>
        </div>
      </div>

      {redeemMessage && (
        <div className={`p-3 rounded-xl border ${
          redeemMessage.type === 'success'
            ? 'bg-green-500/10 border-green-500/30 text-green-300'
            : 'bg-red-500/10 border-red-500/30 text-red-300'
        } text-sm text-center`}>
          {redeemMessage.text}
        </div>
      )}

      <div className="space-y-2">
        {REWARD_ITEMS.map((reward) => {
          const isRedeemed = reward.unique && quiz.redeemedRewards.includes(reward.id)
          const canAfford = stats.points >= reward.cost
          return (
            <div
              key={reward.id}
              className={`p-4 rounded-2xl border transition-all ${
                isRedeemed
                  ? 'bg-space-700/20 border-white/5 opacity-60'
                  : canAfford
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-space-700/30 border-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                              ${canAfford && !isRedeemed
                                ? 'bg-gradient-to-br from-nebula-purple/20 to-nebula-cyan/20'
                                : 'bg-white/5'}`}>
                  {reward.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{reward.name}</span>
                    {reward.unique && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
                        限定
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-white/50 mt-0.5 leading-relaxed">
                    {reward.description}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1">
                    <span className="text-star-gold text-xs">🏆</span>
                    <span className={`font-bold text-sm ${canAfford ? 'text-star-gold' : 'text-white/40'}`}>
                      {reward.cost}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRedeem(reward.id)}
                    disabled={isRedeemed || !canAfford}
                    className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      isRedeemed
                        ? 'bg-white/5 text-white/30 cursor-not-allowed'
                        : canAfford
                          ? 'bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white hover:shadow-lg active:scale-[0.98]'
                          : 'bg-white/5 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    {isRedeemed ? '已兑换' : canAfford ? '兑换' : '积分不足'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function StarQuiz() {
  const { setActivePanel, startQuiz, answerQuestion, finishQuiz, abandonQuiz, useHint, quiz, getQuizStats } = useGameStore()
  const stats = getQuizStats()

  const [view, setView] = useState('home')
  const [feedback, setFeedback] = useState(null)
  const [quizResult, setQuizResult] = useState(null)

  const handleStart = (count) => {
    const result = startQuiz(count)
    if (result) {
      setView('quiz')
      setFeedback(null)
      setQuizResult(null)
    }
  }

  const handleSubmit = (questionId, selectedAnswer) => {
    const result = answerQuestion(questionId, selectedAnswer)
    if (result) {
      setFeedback(result)
    }
    return result
  }

  const handleNext = () => {
    const currentQuiz = quiz.activeQuiz
    if (!currentQuiz) return
    if (feedback?.isLast || currentQuiz.currentIndex >= currentQuiz.questions.length) {
      const result = finishQuiz()
      if (result) {
        setQuizResult(result)
        setView('result')
        setFeedback(null)
      }
    } else {
      setFeedback(null)
    }
  }

  const handleAbandon = () => {
    if (confirm('确定要放弃本次答题吗？当前进度将不会保存。')) {
      abandonQuiz()
      setView('home')
      setFeedback(null)
    }
  }

  const activeQuiz = quiz.activeQuiz
  const currentQuestion = activeQuiz?.questions?.[activeQuiz.currentIndex]

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[90vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white flex items-center gap-2">
                <span>📚</span>
                <span>星座百科问答</span>
              </h2>
              <p className="text-xs text-white/50 mt-1">
                {view === 'home' && '答题赢取积分，兑换丰厚奖励'}
                {view === 'quiz' && '答题进行中...'}
                {view === 'result' && '答题结束'}
                {view === 'shop' && '积分兑换商店'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {view === 'quiz' && activeQuiz && (
                <div className="px-2.5 py-1 rounded-lg bg-star-gold/10 border border-star-gold/20 text-star-gold text-xs font-bold">
                  +{activeQuiz.earnedPoints}
                </div>
              )}
              {view === 'home' && (
                <button
                  onClick={() => setView('shop')}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                           border border-white/10 text-white/80 text-xs font-medium
                           hover:from-nebula-purple/30 hover:to-nebula-cyan/30 transition-all
                           flex items-center gap-1"
                >
                  <span>🎁</span>
                  <span>兑换商店</span>
                </button>
              )}
              <button
                onClick={() => {
                  if (view === 'quiz') {
                    handleAbandon()
                  } else {
                    setActivePanel(null)
                  }
                }}
                className="icon-btn"
                aria-label="关闭"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {view === 'home' && <QuizHome onStart={handleStart} />}

          {view === 'quiz' && activeQuiz && currentQuestion && (
            <QuizQuestion
              question={currentQuestion}
              questionIndex={activeQuiz.currentIndex}
              totalQuestions={activeQuiz.questions.length}
              earnedPoints={activeQuiz.earnedPoints}
              onAnswer={handleSubmit}
              feedback={feedback}
              onSubmit={handleSubmit}
              onNext={handleNext}
              onUseHint={useHint}
              hintsAvailable={stats.hints}
            />
          )}

          {view === 'result' && quizResult && (
            <QuizResult
              result={quizResult}
              onRestart={() => { setView('home'); setQuizResult(null) }}
              onHome={() => { setView('home'); setQuizResult(null) }}
            />
          )}

          {view === 'shop' && <RewardShop onBack={() => setView('home')} />}
        </div>
      </div>
    </div>
  )
}
