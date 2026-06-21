import { useState, useEffect, useMemo } from 'react'
import { useGameStore } from '../stores/gameStore'
import { STORY_ARCS, FINAL_CHAPTER, getChapter } from '../data/storyChapters'
import { getConstellationById } from '../data/constellations'

export default function StoryChapter({ storyType, storyId, onClose }) {
  const {
    markChapterAsRead,
    markPrologueAsRead,
    markEpilogueAsRead,
    markFinalChapterAsRead,
    setNarrativeChoice,
    storyProgress,
    addStardust,
    addLog
  } = useGameStore()

  const [isRevealing, setIsRevealing] = useState(true)
  const [showChoice, setShowChoice] = useState(false)
  const [selectedChoice, setSelectedChoice] = useState(null)
  const [choiceHint, setChoiceHint] = useState(null)

  const storyData = useMemo(() => {
    if (storyType === 'chapter') {
      for (const arc of Object.values(STORY_ARCS)) {
        const chapter = Object.values(arc.chapters).find(c => c.id === storyId)
        if (chapter) {
          return {
            ...chapter,
            arc,
            themeColor: arc.themeColor,
            bgColor: arc.bgColor,
            borderColor: arc.borderColor,
            textColor: arc.textColor,
            icon: arc.icon
          }
        }
      }
    } else if (storyType === 'prologue') {
      const arc = STORY_ARCS[storyId]
      if (arc) {
        return {
          ...arc.prologue,
          arc,
          themeColor: arc.themeColor,
          bgColor: arc.bgColor,
          borderColor: arc.borderColor,
          textColor: arc.textColor,
          icon: arc.icon
        }
      }
    } else if (storyType === 'epilogue') {
      const arc = STORY_ARCS[storyId]
      if (arc) {
        return {
          ...arc.epilogue,
          arc,
          themeColor: arc.themeColor,
          bgColor: arc.bgColor,
          borderColor: arc.borderColor,
          textColor: arc.textColor,
          icon: arc.icon
        }
      }
    } else if (storyType === 'final') {
      return {
        ...FINAL_CHAPTER,
        themeColor: FINAL_CHAPTER.themeColor,
        bgColor: FINAL_CHAPTER.bgColor,
        borderColor: FINAL_CHAPTER.borderColor,
        textColor: FINAL_CHAPTER.textColor,
        icon: FINAL_CHAPTER.icon
      }
    }
    return null
  }, [storyType, storyId])

  const constellation = useMemo(() => {
    if (storyType === 'chapter') {
      for (const arc of Object.values(STORY_ARCS)) {
        for (const [cId, chapter] of Object.entries(arc.chapters)) {
          if (chapter.id === storyId) {
            return getConstellationById(cId)
          }
        }
      }
    }
    return null
  }, [storyType, storyId])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealing(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleMarkAsRead = () => {
    if (storyType === 'chapter') {
      markChapterAsRead(storyId)
      if (storyData?.reward?.stardust) {
        addStardust(storyData.reward.stardust, `剧情章节：${storyData.title}`)
      }
    } else if (storyType === 'prologue') {
      markPrologueAsRead(storyId)
    } else if (storyType === 'epilogue') {
      markEpilogueAsRead(storyId)
    } else if (storyType === 'final') {
      markFinalChapterAsRead()
    }
    onClose?.()
  }

  const handleChoice = (choice) => {
    setSelectedChoice(choice.id)
    setChoiceHint(choice.nextHint)
    if (storyType === 'chapter') {
      setNarrativeChoice(storyId, choice.id)
    }
    setTimeout(() => {
      setShowChoice(false)
      handleMarkAsRead()
    }, 2000)
  }

  const renderContent = (text) => {
    return text.split('\n').map((line, index) => (
      <p key={index} className="mb-3 last:mb-0">
        {line || '\u00A0'}
      </p>
    ))
  }

  if (!storyData) {
    return null
  }

  if (isRevealing) {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-space-900/90 backdrop-blur-md">
        <div className="text-center animate-in zoom-in duration-500">
          <div className={`text-8xl mb-6 animate-bounce ${storyData.textColor}`}>
            {storyData.icon}
          </div>
          <h2 className={`text-3xl font-display ${storyData.textColor} mb-2`}>
            {storyType === 'chapter' && '章节解锁'}
            {storyType === 'prologue' && '序章开启'}
            {storyType === 'epilogue' && '终章解锁'}
            {storyType === 'final' && '最终章'}
          </h2>
          <p className="text-white/60 text-lg">{storyData.title}</p>
          {constellation && (
            <p className="text-white/40 text-sm mt-2">✨ {constellation.name} ✨</p>
          )}
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${storyData.themeColor} animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (showChoice && storyData.narrativeChoice) {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-space-900/90 backdrop-blur-md">
        <div className="max-w-md w-full mx-4 glass-panel p-8 text-center animate-in zoom-in duration-300">
          {selectedChoice ? (
            <div>
              <div className="text-5xl mb-4">💭</div>
              <p className="text-white/80 text-lg mb-4">{choiceHint}</p>
              <p className="text-white/40 text-sm">故事将在你的选择下继续...</p>
            </div>
          ) : (
            <div>
              <div className="text-5xl mb-4">🤔</div>
              <p className="text-white font-medium mb-6">{storyData.narrativeChoice.question}</p>
              <div className="space-y-3">
                {storyData.narrativeChoice.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleChoice(option)}
                    className={`w-full p-4 rounded-xl text-left transition-all
                              bg-gradient-to-r ${storyData.themeColor} bg-opacity-20
                              hover:bg-opacity-40 border ${storyData.borderColor}
                              hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    <span className="text-white">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className={`w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden
                       border ${storyData.borderColor}`}>
        <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${storyData.themeColor}`}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-7xl opacity-30">{storyData.icon}</div>
          </div>

          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-black/30 text-white/80 hover:bg-black/50 transition-all"
            >
              ←
            </button>
            <div className="flex gap-2">
              <span className={`text-xs px-3 py-1 rounded-full bg-white/20 text-white/80`}>
                {storyType === 'prologue' && '序章'}
                {storyType === 'chapter' && '章节'}
                {storyType === 'epilogue' && '终章'}
                {storyType === 'final' && '最终章'}
              </span>
              {constellation && (
                <span className={`text-xs px-3 py-1 rounded-full ${storyData.bgColor} ${storyData.textColor} ${storyData.borderColor} border`}>
                  {constellation.name}
                </span>
              )}
            </div>
          </div>

          <div className="absolute bottom-4 left-5 right-5">
            <h1 className="text-2xl font-display text-white">
              {storyData.title}
            </h1>
            {storyData.subtitle && (
              <p className="text-sm text-white/70 mt-1">{storyData.subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-6">
          <div className={`p-6 rounded-2xl ${storyData.bgColor} border ${storyData.borderColor} mb-6`}>
            <div className="prose prose-invert prose-sm max-w-none">
              {renderContent(storyData.content)}
            </div>
          </div>

          {storyData.reward && (
            <div className="p-4 rounded-xl bg-star-gold/10 border border-star-gold/30 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <p className="text-star-gold font-medium">章节奖励</p>
                  <p className="text-white/70 text-sm">
                    {storyData.reward.type === 'stardust' && `星尘 +${storyData.reward.amount}`}
                    {storyData.reward.type === 'title' && `解锁称号：${storyData.reward.name || storyData.title}`}
                    {storyData.reward.type === 'badge' && `获得徽章：${storyData.reward.name || storyData.title}`}
                  </p>
                </div>
              </div>
            </div>
          )}

          {storyData.narrativeChoice && !selectedChoice && (
            <div className="p-4 rounded-xl bg-nebula-purple/10 border border-nebula-purple/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💭</span>
                <div>
                  <p className="text-nebula-cyan font-medium">叙事抉择</p>
                  <p className="text-white/70 text-sm">你的选择将影响故事的走向</p>
                </div>
              </div>
              <button
                onClick={() => setShowChoice(true)}
                className={`w-full py-3 rounded-xl bg-gradient-to-r ${storyData.themeColor} 
                          text-white font-medium hover:shadow-lg active:scale-[0.98] transition-all`}
              >
                做出选择
              </button>
            </div>
          )}
        </div>

        <div className="p-5 border-t border-white/10">
          <div className="flex gap-3">
            {!storyData.narrativeChoice && (
              <>
                <button
                  onClick={onClose}
                  className="flex-1 btn-secondary"
                >
                  稍后再读
                </button>
                <button
                  onClick={handleMarkAsRead}
                  className={`flex-1 py-2.5 rounded-xl bg-gradient-to-r ${storyData.themeColor}
                            text-white font-medium hover:shadow-lg active:scale-[0.98] transition-all`}
                >
                  标记已读
                </button>
              </>
            )}
            {storyData.narrativeChoice && selectedChoice && (
              <button
                onClick={handleMarkAsRead}
                className={`flex-1 py-2.5 rounded-xl bg-gradient-to-r ${storyData.themeColor}
                          text-white font-medium hover:shadow-lg active:scale-[0.98] transition-all`}
              >
                继续探索
              </button>
            )}
            {storyData.narrativeChoice && !selectedChoice && (
              <button
                onClick={handleMarkAsRead}
                className="flex-1 btn-secondary"
              >
                跳过选择
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
