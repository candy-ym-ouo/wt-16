import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import {
  SEASONS,
  SEASON_PHASES,
  SEASON_REWARDS,
  getSeasonConstellations,
  getCurrentSeason
} from '../data/seasonPlan'
import { STORY_ARCS, FINAL_CHAPTER } from '../data/storyChapters'
import { formatDate } from '../utils/math'
import StoryChapter from './StoryChapter'

export default function SeasonPlan() {
  const {
    setActivePanel,
    discoveredConstellations,
    seasonProgress,
    seasonRewardsUnlocked,
    seasonRewardsClaimed,
    claimSeasonReward,
    seasonHistory,
    totalObservations,
    perfectObservations,
    getSeasonStats,
    setTargetConstellation,
    openAtlasList,
    openAtlasDetail,
    storyProgress,
    getStoryStats,
    clearPendingStoryUnlock
  } = useGameStore()

  const handleViewInAtlas = (constellationId, e) => {
    e.stopPropagation()
    openAtlasDetail(constellationId)
  }

  const currentSeason = getCurrentSeason()
  const [selectedSeason, setSelectedSeason] = useState(currentSeason)
  const [viewMode, setViewMode] = useState('overview')
  const [activeStory, setActiveStory] = useState(null)
  const [pendingStoryIndex, setPendingStoryIndex] = useState(0)

  const storyStats = getStoryStats()

  const handleOpenStory = (type, id) => {
    setActiveStory({ type, id })
  }

  const handleCloseStory = () => {
    setActiveStory(null)
    
    if (storyProgress.pendingUnlock && pendingStoryIndex < storyProgress.pendingUnlock.length - 1) {
      const nextIndex = pendingStoryIndex + 1
      setPendingStoryIndex(nextIndex)
      const nextStory = storyProgress.pendingUnlock[nextIndex]
      if (nextStory) {
        setTimeout(() => {
          if (nextStory.type === 'chapter') {
            setActiveStory({ type: 'chapter', id: nextStory.chapterId })
          } else if (nextStory.type === 'prologue') {
            setActiveStory({ type: 'prologue', id: nextStory.seasonId })
          } else if (nextStory.type === 'epilogue') {
            setActiveStory({ type: 'epilogue', id: nextStory.seasonId })
          } else if (nextStory.type === 'final') {
            setActiveStory({ type: 'final', id: 'final' })
          }
        }, 300)
      }
    } else {
      clearPendingStoryUnlock()
      setPendingStoryIndex(0)
    }
  }

  const stats = getSeasonStats()
  const seasonStats = stats[selectedSeason]
  const season = SEASONS[selectedSeason]
  const seasonConstellations = getSeasonConstellations(selectedSeason)

  const totalSeasonsCompleted = Object.values(stats).filter(
    s => s.beginner.completed && s.intermediate.completed && s.master.completed
  ).length

  const overallProgress = Math.round(
    Object.values(stats).reduce((sum, s) => sum + s.overallPercentage, 0) / 4
  )

  const renderOverview = () => (
    <div className="space-y-5">
      <div className={`p-4 rounded-2xl border ${season.borderColor} ${season.bgColor}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{season.icon}</span>
            <div>
              <h3 className={`font-display text-lg ${season.textColor}`}>
                {season.name}观测计划
              </h3>
              <p className="text-[11px] text-white/50">{season.months} · {season.description}</p>
            </div>
          </div>
          {selectedSeason === currentSeason && (
            <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">
              当前季节
            </span>
          )}
        </div>
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/60">季节总进度</span>
            <span className={`font-mono ${season.textColor}`}>
              {seasonStats.overallPercentage}%
            </span>
          </div>
          <div className="h-2.5 bg-space-900/60 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${season.color} rounded-full transition-all duration-700`}
              style={{ width: `${seasonStats.overallPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {Object.entries(SEASON_PHASES).map(([phaseId, phase]) => {
          const phaseProgress = seasonStats[phaseId]
          const isCompleted = seasonProgress[selectedSeason][phaseId]
          const reward = SEASON_REWARDS[selectedSeason][phaseId]
          const isUnlocked = seasonRewardsUnlocked.includes(reward.id)
          const isClaimed = seasonRewardsClaimed.includes(reward.id)

          return (
            <div
              key={phaseId}
              className={`p-4 rounded-2xl border transition-all ${
                isCompleted
                  ? `${season.borderColor} ${season.bgColor}`
                  : 'border-white/10 bg-space-700/20'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                    isCompleted
                      ? `bg-gradient-to-br ${season.color} text-white`
                      : 'bg-space-600/50 text-white/50'
                  }`}>
                    {isCompleted ? '✓' : phase.multiplier}×
                  </div>
                  <div>
                    <h4 className={`text-sm font-display ${
                      isCompleted ? 'text-white' : 'text-white/80'
                    }`}>
                      {phase.name}
                    </h4>
                    <p className="text-[10px] text-white/40">{phase.description}</p>
                  </div>
                </div>
                {isUnlocked && (
                  <div className="flex items-center gap-1">
                    <span className="text-lg">{reward.icon}</span>
                    {isClaimed ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-300">
                        已领取
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-star-gold/20 text-star-gold animate-pulse">
                        可领取
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="flex justify-between text-[10px] mb-1.5">
                <span className="text-white/50">
                  {phaseId === 'beginner' && `发现 ${phaseProgress.target} 个当季星座`}
                  {phaseId === 'intermediate' && `完美完成 ${phaseProgress.target} 个当季星座`}
                  {phaseId === 'master' && `累计反复观测 ${phaseProgress.target} 次`}
                </span>
                <span className="text-white/60 font-mono">
                  {phaseProgress.current} / {phaseProgress.target}
                </span>
              </div>
              <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    isCompleted ? `bg-gradient-to-r ${season.color}` : 'bg-white/30'
                  }`}
                  style={{ width: `${phaseProgress.percentage}%` }}
                />
              </div>

              {isUnlocked && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{reward.icon}</span>
                      <div>
                        <p className="text-xs text-white/80 font-medium">{reward.name}</p>
                        <p className="text-[10px] text-white/40">{reward.description}</p>
                      </div>
                    </div>
                    {isClaimed ? (
                      <span className="text-[11px] text-green-400/80">✓ 已领取</span>
                    ) : (
                      <button
                        onClick={() => claimSeasonReward(reward.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                                   bg-gradient-to-r ${season.color} text-white
                                   hover:shadow-lg active:scale-95`}
                      >
                        领取
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">✨</span>
          <h4 className="font-display text-white/90 text-sm">当季星座</h4>
          <span className="text-[10px] text-white/40 ml-auto">
            {seasonStats.discovered} / {seasonStats.constellations}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {seasonConstellations.map((cId) => {
            const c = getConstellationById(cId)
            if (!c) return null
            const discovered = discoveredConstellations.includes(cId)
            const perfect = perfectObservations[cId]
            const observed = totalObservations[cId] || 0

            return (
              <div
                key={cId}
                className={`p-3 rounded-xl border text-left transition-all card-hover ${
                  discovered
                    ? 'border-nebula-purple/40 bg-nebula-purple/5'
                    : 'border-white/10 bg-space-800/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setTargetConstellation(cId)
                      setActivePanel(null)
                    }}
                    className="flex-1 min-w-0 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${discovered ? '' : 'opacity-50 grayscale'}`}>
                        {discovered ? '⭐' : '☆'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-medium truncate ${
                          discovered ? 'text-white' : 'text-white/50'
                        }`}>
                          {c.name}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {perfect && (
                            <span className="text-[9px] px-1 py-0.5 rounded bg-star-gold/20 text-star-gold">
                              完美
                            </span>
                          )}
                          {observed > 1 && (
                            <span className="text-[9px] text-white/40">
                              ×{observed}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={(e) => handleViewInAtlas(cId, e)}
                    className="w-6 h-6 flex items-center justify-center rounded-lg
                             bg-space-600/30 text-white/40 text-[10px]
                             hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                             flex-shrink-0"
                    title="在图鉴中查看详情"
                  >
                    📚
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  const renderHistory = () => (
    <div className="space-y-3">
      <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
        <div className="grid grid-cols-4 gap-2 text-center">
          {Object.entries(SEASONS).map(([id, s]) => {
            const completed = stats[id].beginner.completed &&
              stats[id].intermediate.completed && stats[id].master.completed
            return (
              <div
                key={id}
                className={`p-2 rounded-lg ${completed ? s.bgColor : 'bg-space-800/40'}`}
              >
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className={`text-[11px] ${completed ? s.textColor : 'text-white/50'}`}>
                  {s.name}
                </div>
                <div className="text-[10px] text-white/40 mt-0.5">
                  {stats[id].overallPercentage}%
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {seasonHistory.length === 0 ? (
        <div className="h-40 flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-3 opacity-30">🗓️</div>
          <h4 className="text-white/60 font-display mb-1">暂无季节进度记录</h4>
          <p className="text-xs text-white/40 max-w-xs leading-relaxed">
            开始探索星座，你的季节里程碑将记录在这里
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {seasonHistory.map((entry, index) => {
            const s = SEASONS[entry.seasonId]
            const phase = SEASON_PHASES[entry.phaseId]
            const reward = SEASON_REWARDS[entry.seasonId][entry.phaseId]
            return (
              <div
                key={index}
                className={`p-3 rounded-xl border ${s.borderColor} ${s.bgColor}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                                  bg-gradient-to-br ${s.color}`}>
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-display text-white">
                        {s.name} · {phase.name}
                      </span>
                      <span className="text-base">{reward.icon}</span>
                    </div>
                    <div className="text-[11px] text-white/50 mt-0.5">
                      完成阶段目标，获得「{reward.name}」
                    </div>
                    <div className="text-[10px] text-white/30 mt-0.5 font-mono">
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

  const renderRewards = () => {
    const allRewards = []
    Object.entries(SEASON_REWARDS).forEach(([seasonId, phases]) => {
      Object.entries(phases).forEach(([phaseId, reward]) => {
        allRewards.push({ seasonId, phaseId, ...reward })
      })
    })

    return (
      <div className="space-y-4">
        {Object.entries(SEASONS).map(([seasonId, s]) => {
          const seasonRewardsList = allRewards.filter(r => r.seasonId === seasonId)
          const claimedCount = seasonRewardsList.filter(r => seasonRewardsClaimed.includes(r.id)).length

          return (
            <div
              key={seasonId}
              className={`p-4 rounded-2xl border ${s.borderColor} ${s.bgColor}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{s.icon}</span>
                <h4 className={`font-display text-sm ${s.textColor}`}>{s.name}奖励</h4>
                <span className="text-[10px] text-white/40 ml-auto">
                  {claimedCount} / {seasonRewardsList.length}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {seasonRewardsList.map((reward) => {
                  const isUnlocked = seasonRewardsUnlocked.includes(reward.id)
                  const isClaimed = seasonRewardsClaimed.includes(reward.id)

                  return (
                    <div
                      key={reward.id}
                      className={`p-3 rounded-xl text-center transition-all border ${
                        isClaimed
                          ? 'bg-white/10 border-green-400/30'
                          : isUnlocked
                          ? 'bg-star-gold/5 border-star-gold/20 ring-1 ring-star-gold/10'
                          : 'bg-space-900/40 border-white/5 opacity-50'
                      }`}
                    >
                      <div className={`text-2xl mb-1 ${
                        !isUnlocked ? 'grayscale' : ''
                      }`}>
                        {reward.icon}
                      </div>
                      <p className={`text-[11px] font-medium ${
                        isClaimed ? 'text-green-300' : isUnlocked ? 'text-star-gold' : 'text-white/40'
                      }`}>
                        {reward.name}
                      </p>
                      <p className="text-[9px] text-white/40 mt-0.5 leading-tight">
                        {reward.description}
                      </p>
                      {isUnlocked && !isClaimed && (
                        <button
                          onClick={() => claimSeasonReward(reward.id)}
                          className={`mt-2 px-2.5 py-1 rounded-md text-[10px] font-medium
                                     bg-gradient-to-r ${s.color} text-white
                                     hover:shadow-md active:scale-95 transition-all`}
                        >
                          领取
                        </button>
                      )}
                      {isClaimed && (
                        <span className="mt-1.5 inline-block text-[10px] text-green-400/70">
                          ✓ 已领取
                        </span>
                      )}
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

  const renderStory = () => {
    const arc = STORY_ARCS[selectedSeason]
    if (!arc) return null

    const sp = storyProgress
    const chapters = Object.entries(arc.chapters)

    const prologueUnlocked = sp.unlockedPrologues.includes(selectedSeason)
    const prologueRead = sp.readPrologues.includes(selectedSeason)
    const epilogueUnlocked = sp.unlockedEpilogues.includes(selectedSeason)
    const epilogueRead = sp.readEpilogues.includes(selectedSeason)

    return (
      <div className="space-y-4">
        <div className={`p-4 rounded-2xl border ${arc.borderColor} ${arc.bgColor}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{arc.icon}</span>
              <div>
                <h3 className={`font-display text-lg ${arc.textColor}`}>
                  {arc.title}
                </h3>
                <p className="text-[11px] text-white/50">{arc.subtitle}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-white/60">剧情进度</span>
              <span className={`font-mono ${arc.textColor}`}>
                {storyStats.overallProgress}%
              </span>
            </div>
            <div className="h-2.5 bg-space-900/60 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${arc.color} rounded-full transition-all duration-700`}
                style={{ width: `${storyStats.overallProgress}%` }}
              />
            </div>
          </div>
        </div>

        <div
          className={`p-4 rounded-2xl border transition-all ${
            prologueUnlocked
              ? `${arc.borderColor} ${arc.bgColor}`
              : 'border-white/10 bg-space-700/20 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                prologueUnlocked
                  ? `bg-gradient-to-br ${arc.color} text-white`
                  : 'bg-space-600/50 text-white/50'
              }`}>
                {prologueRead ? '📖' : prologueUnlocked ? '📌' : '🔒'}
              </div>
              <div>
                <h4 className={`text-sm font-display ${
                  prologueUnlocked ? 'text-white' : 'text-white/80'
                }`}>
                  {arc.prologue.title}
                </h4>
                <p className="text-[10px] text-white/40">
                  {prologueRead ? '已阅读' : prologueUnlocked ? '点击阅读' : '未解锁'}
                </p>
              </div>
            </div>
            {prologueUnlocked && !prologueRead && (
              <span className="text-[10px] px-2 py-1 rounded-full bg-star-gold/20 text-star-gold animate-pulse">
                新
              </span>
            )}
          </div>
          {prologueUnlocked && (
            <button
              onClick={() => handleOpenStory('prologue', selectedSeason)}
              className="mt-3 w-full py-2 rounded-lg text-xs font-medium transition-all
                         bg-white/5 text-white/70 hover:bg-white/10"
            >
              {prologueRead ? '重新阅读' : '开始阅读'}
            </button>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="text-xs text-white/60 font-display px-1">剧情章节</h4>
          {chapters.map(([constellationId, chapter], index) => {
            const c = getConstellationById(constellationId)
            const chapterUnlocked = sp.unlockedChapters.includes(chapter.id)
            const chapterRead = sp.readChapters.includes(chapter.id)
            const discovered = discoveredConstellations.includes(constellationId)

            return (
              <div
                key={chapter.id}
                className={`p-4 rounded-2xl border transition-all ${
                  chapterUnlocked
                    ? `${arc.borderColor} ${arc.bgColor}`
                    : 'border-white/10 bg-space-700/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm ${
                      chapterUnlocked
                        ? `bg-gradient-to-br ${arc.color} text-white`
                        : 'bg-space-600/50 text-white/50'
                    }`}>
                      {chapterRead ? '📖' : chapterUnlocked ? '✦' : '🔒'}
                    </div>
                    <div>
                      <h4 className={`text-sm font-display ${
                        chapterUnlocked ? 'text-white' : 'text-white/80'
                      }`}>
                        {chapter.title}
                      </h4>
                      <p className="text-[10px] text-white/40 mb-1">
                        {chapter.subtitle}
                      </p>
                      {c && (
                        <span className="text-[10px] text-white/30">
                          🔗 {c.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {chapterUnlocked && !chapterRead && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-star-gold/20 text-star-gold animate-pulse">
                        新
                      </span>
                    )}
                    {discovered && !chapterUnlocked && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-nebula-cyan/20 text-nebula-cyan">
                        即将解锁
                      </span>
                    )}
                  </div>
                </div>
                {chapter.reward && (
                  <div className="mt-2 flex items-center gap-2 text-[10px] text-white/50">
                    <span>🎁</span>
                    <span>
                      {chapter.reward.type === 'stardust' && `星尘 +${chapter.reward.amount}`}
                    </span>
                  </div>
                )}
                {chapterUnlocked && (
                  <button
                    onClick={() => handleOpenStory('chapter', chapter.id)}
                    className="mt-3 w-full py-2 rounded-lg text-xs font-medium transition-all
                               bg-white/5 text-white/70 hover:bg-white/10"
                  >
                    {chapterRead ? '重新阅读' : '开始阅读'}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <div
          className={`p-4 rounded-2xl border transition-all ${
            epilogueUnlocked
              ? `${arc.borderColor} ${arc.bgColor}`
              : 'border-white/10 bg-space-700/20 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                epilogueUnlocked
                  ? `bg-gradient-to-br from-star-gold to-amber-500 text-white`
                  : 'bg-space-600/50 text-white/50'
              }`}>
                {epilogueRead ? '📖' : epilogueUnlocked ? '👑' : '🔒'}
              </div>
              <div>
                <h4 className={`text-sm font-display ${
                  epilogueUnlocked ? 'text-star-gold' : 'text-white/80'
                }`}>
                  {arc.epilogue.title}
                </h4>
                <p className="text-[10px] text-white/40">
                  {epilogueRead ? '已阅读' : epilogueUnlocked ? '点击阅读' : '完成全部章节解锁'}
                </p>
              </div>
            </div>
            {epilogueUnlocked && !epilogueRead && (
              <span className="text-[10px] px-2 py-1 rounded-full bg-star-gold/20 text-star-gold animate-pulse">
                新
              </span>
            )}
          </div>
          {epilogueUnlocked && (
            <button
              onClick={() => handleOpenStory('epilogue', selectedSeason)}
              className="mt-3 w-full py-2 rounded-lg text-xs font-medium transition-all
                         bg-gradient-to-r from-star-gold to-amber-500 text-white hover:shadow-lg"
            >
              {epilogueRead ? '重新阅读' : '阅读终章'}
            </button>
          )}
        </div>

        {sp.finalChapterUnlocked && (
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple/30 to-nebula-cyan/30 rounded-2xl blur-xl" />
              <div className="relative p-5 rounded-2xl border border-nebula-purple/40 bg-gradient-to-br from-nebula-purple/20 to-nebula-cyan/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white">
                      📖
                    </div>
                    <div>
                      <h4 className="text-sm font-display text-white">
                        {FINAL_CHAPTER.title}
                      </h4>
                      <p className="text-[10px] text-white/50">
                        {FINAL_CHAPTER.subtitle}
                      </p>
                    </div>
                  </div>
                  {!sp.finalChapterRead && (
                    <span className="text-[10px] px-3 py-1 rounded-full bg-nebula-cyan/20 text-nebula-cyan animate-pulse">
                      ✨ 最终章 ✨
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleOpenStory('final', 'final')}
                  className="mt-4 w-full py-2.5 rounded-xl text-sm font-medium transition-all
                             bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white
                             hover:shadow-lg hover:shadow-nebula-purple/30"
                >
                  {sp.finalChapterRead ? '重新阅读' : '开启最终章'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">四季观测计划</h2>
              <p className="text-xs text-white/50 mt-1">
                跟随季节的脚步，探索星空的奥秘
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
              <span className="text-white/60">年度总进度</span>
              <span className="text-star-gold font-mono">
                {totalSeasonsCompleted} / 4 季 · {overallProgress}%
              </span>
            </div>
            <div className="h-3 bg-space-900/80 rounded-full overflow-hidden flex">
              {Object.entries(SEASONS).map(([id, s]) => (
                <div
                  key={id}
                  className={`h-full bg-gradient-to-r ${s.color} transition-all duration-500`}
                  style={{ width: `${stats[id].overallPercentage / 4}%` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {Object.entries(SEASONS).map(([id, s]) => (
              <button
                key={id}
                onClick={() => setSelectedSeason(id)}
                className={`p-2 rounded-xl text-center transition-all ${
                  selectedSeason === id
                    ? `${s.bgColor} ${s.borderColor} border`
                    : 'bg-space-700/30 border border-transparent hover:bg-space-700/50'
                }`}
              >
                <div className="text-xl">{s.icon}</div>
                <div className={`text-[10px] mt-0.5 ${
                  selectedSeason === id ? s.textColor : 'text-white/50'
                }`}>
                  {s.name}
                </div>
                <div className="text-[9px] text-white/30 mt-0.5">
                  {stats[id].overallPercentage}%
                </div>
              </button>
            ))}
          </div>

          <div className="mt-3">
            <button
              onClick={openAtlasList}
              className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2"
            >
              <span>📚</span>
              <span>查看星空图鉴</span>
              <span className="text-nebula-cyan">→</span>
            </button>
          </div>

          <div className="mt-3">
            <button
              onClick={() => {
                setActivePanel('route')
              }}
              className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-pink-500/20 to-rose-500/20
                       border border-pink-500/30 text-white text-sm
                       hover:from-pink-500/30 hover:to-rose-500/30
                       transition-all flex items-center justify-center gap-2"
            >
              <span>🗺️</span>
              <span>观星路线推荐</span>
              <span className="text-pink-300">→</span>
            </button>
          </div>

          <div className="mt-4 flex gap-2">
            {[
              { id: 'overview', label: '进度', icon: '📊' },
              { id: 'story', label: '故事', icon: '📖' },
              { id: 'rewards', label: '奖励', icon: '🎁' },
              { id: 'history', label: '回溯', icon: '🗓️' }
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
          {viewMode === 'story' && renderStory()}
          {viewMode === 'rewards' && renderRewards()}
          {viewMode === 'history' && renderHistory()}
        </div>
      </div>

      {activeStory && (
        <StoryChapter
          storyType={activeStory.type}
          storyId={activeStory.id}
          onClose={handleCloseStory}
        />
      )}
    </div>
  )
}
