import { useState, useEffect, useRef } from 'react'
import { useGameStore } from '../stores/gameStore'
import { REPORT_TYPES, REPORT_TEMPLATES } from '../data/observationReport'
import { getConstellationById } from '../data/constellations'
import { formatDate } from '../utils/math'
import { useI18n } from '../i18n/useI18n'

export default function ObservationReport() {
  const {
    setActivePanel,
    generateWeeklyReport,
    generateMonthlyReport,
    copyReportToClipboard,
    downloadReportAsText,
    shareReport
  } = useGameStore()

  const { t, tc } = useI18n()
  const [reportType, setReportType] = useState(REPORT_TYPES.WEEKLY)
  const [selectedTemplate, setSelectedTemplate] = useState('explorer')
  const [report, setReport] = useState(null)
  const [viewMode, setViewMode] = useState('preview')
  const [copied, setCopied] = useState(false)
  const [showSharePreview, setShowSharePreview] = useState(false)
  const previewRef = useRef(null)

  useEffect(() => {
    generateReport()
  }, [reportType])

  const generateReport = () => {
    const newReport = reportType === REPORT_TYPES.WEEKLY
      ? generateWeeklyReport()
      : generateMonthlyReport()
    setReport(newReport)
  }

  const handleCopy = async () => {
    if (!report) return
    const result = await copyReportToClipboard(report)
    if (result.success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    if (!report) return
    downloadReportAsText(report)
  }

  const handleShare = () => {
    if (!report) return
    setShowSharePreview(true)
  }

  const getLocalizedConstellationName = (constellationId) => {
    const c = getConstellationById(constellationId)
    if (!c) return constellationId
    return tc('constellation', constellationId, 'name') || c.name
  }

  const renderStatsOverview = () => {
    if (!report) return null
    const { journey } = report

    const stats = [
      { label: t('report.newDiscoveriesLabel'), value: journey.discoveries, icon: '✨', color: 'text-nebula-purple' },
      { label: t('report.reobservationsLabel'), value: journey.reobservations, icon: '🔭', color: 'text-nebula-cyan' },
      { label: t('report.perfectRuns'), value: journey.perfectRuns, icon: '💎', color: 'text-star-gold' },
      { label: t('report.unlockedAchievements'), value: journey.achievements, icon: '🏆', color: 'text-nebula-orange' },
      { label: t('report.activeDays'), value: journey.activeDays, icon: '📅', color: 'text-green-400' },
      { label: t('report.totalActivities'), value: journey.totalActivities, icon: '📊', color: 'text-blue-400' }
    ]

    return (
      <div className="grid grid-cols-3 gap-2 mb-5">
        {stats.map((stat, i) => (
          <div key={i} className="p-3 rounded-xl bg-space-700/30 border border-white/5 text-center">
            <div className="text-lg mb-1">{stat.icon}</div>
            <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-[10px] text-white/50 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    )
  }

  const renderInsights = () => {
    if (!report || report.insights.length === 0) return null

    return (
      <div className="mb-5">
        <h4 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>{t('report.insights')}</span>
        </h4>
        <div className="space-y-2">
          {report.insights.map((insight, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-space-700/30 border border-white/5"
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">{insight.icon}</span>
                <div className="flex-1">
                  <div className={`text-xs font-medium ${insight.color}`}>
                    {insight.title}
                  </div>
                  <div className="text-[11px] text-white/60 mt-0.5">
                    {insight.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderDiscoveries = () => {
    if (!report) return null
    const { journey } = report

    if (journey.discoveredConstellations.length === 0 &&
        journey.reobservedConstellations.length === 0) {
      return null
    }

    return (
      <div className="mb-5">
        <h4 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
          <span>🌟</span>
          <span>{t('report.constellationExploration')}</span>
        </h4>

        {journey.discoveredConstellations.length > 0 && (
          <div className="mb-3">
            <div className="text-[11px] text-white/50 mb-2">{t('report.newDiscoveries')}</div>
            <div className="flex flex-wrap gap-2">
              {journey.discoveredConstellations.map(id => {
                const c = getConstellationById(id)
                return (
                  <div
                    key={id}
                    className="px-3 py-1.5 rounded-lg bg-nebula-purple/20 border border-nebula-purple/30"
                  >
                    <span className="text-sm">✨</span>
                    <span className="text-xs text-white/90 ml-1">
                      {getLocalizedConstellationName(id)}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {journey.reobservedConstellations.length > 0 && (
          <div>
            <div className="text-[11px] text-white/50 mb-2">{t('report.reobservations')}</div>
            <div className="flex flex-wrap gap-2">
              {journey.reobservedConstellations.map(id => {
                const c = getConstellationById(id)
                const isPerfect = journey.perfectConstellations.includes(id)
                return (
                  <div
                    key={id}
                    className={`px-3 py-1.5 rounded-lg border ${
                      isPerfect
                        ? 'bg-star-gold/10 border-star-gold/30'
                        : 'bg-space-700/30 border-white/10'
                    }`}
                  >
                    <span className="text-sm">{isPerfect ? '💎' : '🔭'}</span>
                    <span className="text-xs text-white/90 ml-1">
                      {getLocalizedConstellationName(id)}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderMilestones = () => {
    if (!report) return null
    const { milestones } = report

    if (milestones.newlyUnlocked.length === 0 &&
        milestones.seasonMilestones.length === 0) {
      return null
    }

    return (
      <div className="mb-5">
        <h4 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
          <span>🏆</span>
          <span>{t('report.achievementMilestones')}</span>
          <span className="text-[10px] text-white/40 ml-auto">
            {milestones.newlyUnlockedCount + milestones.seasonMilestonesCount}
          </span>
        </h4>
        <div className="space-y-2">
          {milestones.newlyUnlocked.map((achievement, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-star-gold/5 border border-star-gold/20"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-star-gold to-nebula-orange
                              flex items-center justify-center text-lg flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-star-gold">
                    {achievement.name}
                  </div>
                  <div className="text-[10px] text-white/50 mt-0.5">
                    {achievement.description}
                  </div>
                  <div className="text-[9px] text-white/30 mt-1 font-mono">
                    {formatDate(achievement.unlockedAt)}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {milestones.seasonMilestones.map((milestone, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-space-700/30 border border-white/10"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-cyan-400
                              flex items-center justify-center text-lg flex-shrink-0">
                  {milestone.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-white/90">
                    🎁 {milestone.name}
                  </div>
                  <div className="text-[10px] text-white/50 mt-0.5">
                    {milestone.description}
                  </div>
                  <div className="text-[9px] text-white/30 mt-1 font-mono">
                    {formatDate(milestone.unlockedAt)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderTopConstellations = () => {
    if (!report) return null
    const { summary } = report

    if (summary.topConstellations.length === 0) return null

    return (
      <div className="mb-5">
        <h4 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
          <span>⭐</span>
          <span>{t('report.topObserved')}</span>
        </h4>
        <div className="space-y-2">
          {summary.topConstellations.map((item, i) => {
            const c = item.constellation
            if (!c) return null
            return (
              <div
                key={i}
                className="p-3 rounded-xl bg-space-700/30 border border-white/5
                          flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/30 font-mono w-5">{i + 1}</span>
                  <span className="text-sm">
                    {i === 0 ? '👑' : i === 1 ? '🥈' : i === 2 ? '🥉' : '⭐'}
                  </span>
                  <div>
                    <div className="text-xs text-white/90 font-medium">
                      {getLocalizedConstellationName(c.id)}
                    </div>
                    <div className="text-[9px] text-white/40">
                      {c.nameEn}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-nebula-cyan">
                    {item.count} 次
                  </div>
                  {item.perfect > 0 && (
                    <div className="text-[9px] text-star-gold">
                      💎 {item.perfect} 次完美
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderNotableMoments = () => {
    if (!report) return null
    const { summary } = report

    if (summary.notableMoments.length === 0) return null

    return (
      <div className="mb-5">
        <h4 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
          <span>📸</span>
          <span>{t('report.notableMoments')}</span>
        </h4>
        <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-thin">
          {summary.notableMoments.slice(0, 10).map((moment, i) => (
            <div
              key={i}
              className="p-2.5 rounded-lg bg-space-800/50 border border-white/5"
            >
              <div className="flex items-start gap-2">
                <span className="text-sm">
                  {moment.type === 'discovery' ? '✨' :
                   moment.type === 'event' ? '🎉' : '💎'}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-white/80">
                    {moment.type === 'event' ? (
                      <>
                        <span className="text-yellow-300">{moment.eventName}</span>
                        {moment.message && ` · ${moment.message}`}
                      </>
                    ) : (
                      <>
                        {moment.type === 'discovery' ? '发现了' : '完美观测了'}
                        <span className="text-nebula-cyan ml-1">
                          {moment.constellation?.name}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="text-[9px] text-white/30 mt-0.5 font-mono">
                    {formatDate(moment.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderNotes = () => {
    if (!report || report.summary.notes.length === 0) return null

    return (
      <div className="mb-5">
        <h4 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
          <span>📝</span>
          <span>{t('report.notesSection')}</span>
          <span className="text-[10px] text-white/40 ml-auto">
            {report.summary.notes.length}
          </span>
        </h4>
        <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-thin">
          {report.summary.notes.slice(0, 10).map((note, i) => (
            <div
              key={i}
              className="p-3 rounded-xl border border-star-gold/15 bg-star-gold/5"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-star-gold/15 flex items-center justify-center text-sm flex-shrink-0">
                  {note.type === 'journal' ? '📝' : note.type === 'photo' ? '📷' : '⭐'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/80 font-medium truncate">
                    {note.title || note.type}
                  </div>
                  {(note.content || note.note) && (
                    <div className="text-[11px] text-white/50 mt-0.5 line-clamp-2">
                      {note.content || note.note}
                    </div>
                  )}
                  {note._dateKey && (
                    <div className="text-[9px] text-white/30 mt-1">
                      {note._dateKey}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderOverallStats = () => {
    if (!report) return null
    const { overallStats } = report

    const stats = [
      { label: t('report.totalConstellationsDiscovered'), value: overallStats.totalConstellationsDiscovered, icon: '🌟' },
      { label: t('report.totalObservations'), value: overallStats.totalObservations, icon: '🔭' },
      { label: t('report.totalPerfect'), value: overallStats.totalPerfect, icon: '💎' },
      { label: t('report.totalAchievements'), value: overallStats.totalAchievements, icon: '🏆' },
      { label: t('report.totalSeasonRewards'), value: overallStats.totalSeasonRewards, icon: '🎁' },
      { label: t('report.totalExpeditions'), value: overallStats.totalExpeditions, icon: '🌙' }
    ]

    return (
      <div className="mb-5">
        <h4 className="font-display text-white/90 text-sm mb-3 flex items-center gap-2">
          <span>📈</span>
          <span>{t('report.overallStats')}</span>
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {stats.map((stat, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-space-800/50 border border-white/5 text-center">
              <div className="text-base">{stat.icon}</div>
              <div className="text-sm font-bold text-white/90 mt-0.5">{stat.value}</div>
              <div className="text-[9px] text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-6xl mb-4 opacity-30">📊</div>
      <h3 className="text-white/70 font-display mb-2">{t('report.noRecords')}</h3>
      <p className="text-xs text-white/40 max-w-xs leading-relaxed">
        {t('report.noRecordsDesc')}
      </p>
    </div>
  )

  const renderSharePreview = () => {
    if (!report || !showSharePreview) return null

    const template = REPORT_TEMPLATES[selectedTemplate]
    const shared = shareReport(report, selectedTemplate)

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4
                      bg-space-900/90 backdrop-blur-md animate-in fade-in duration-200">
        <div className="w-full max-w-md glass-panel max-h-[90vh] flex flex-col overflow-hidden">
          <div className="p-5 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-display text-white">{t('report.sharePreview')}</h3>
                <p className="text-xs text-white/50 mt-1">
                  {t('report.sharePreviewDesc')}
                </p>
              </div>
              <button
                onClick={() => setShowSharePreview(false)}
                className="icon-btn"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="p-5 overflow-y-auto scrollbar-thin flex-1">
            <div className="mb-4">
              <div className="text-xs text-white/50 mb-2">{t('report.selectTemplate')}</div>
              <div className="grid grid-cols-3 gap-2">
                {Object.values(REPORT_TEMPLATES).map(temp => (
                  <button
                    key={temp.id}
                    onClick={() => setSelectedTemplate(temp.id)}
                    className={`p-3 rounded-xl border transition-all text-center ${
                      selectedTemplate === temp.id
                        ? `border-white/30 bg-white/10`
                        : 'border-white/5 bg-space-800/50 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xl mb-1">{temp.icon}</div>
                    <div className="text-[11px] text-white/80">{t(`report.${temp.id}`)}</div>
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={previewRef}
              className={`p-6 rounded-2xl bg-gradient-to-br ${template.color} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-space-900/20" />
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{template.icon}</div>
                  <h2 className="text-xl font-display text-white font-bold">
                    {report.type === 'weekly' ? t('report.myWeeklyReport') : t('report.myMonthlyReport')}
                  </h2>
                  <p className="text-xs text-white/70 mt-1">
                    {report.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 rounded-lg bg-white/10">
                    <div className="text-lg font-bold text-white">
                      {report.journey.discoveries}
                    </div>
                    <div className="text-[9px] text-white/70">{t('report.newDiscoveriesLabel')}</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/10">
                    <div className="text-lg font-bold text-white">
                      {report.journey.perfectRuns}
                    </div>
                    <div className="text-[9px] text-white/70">{t('report.perfectRuns')}</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/10">
                    <div className="text-lg font-bold text-white">
                      {report.journey.activeDays}
                    </div>
                    <div className="text-[9px] text-white/70">{t('report.activeDays')}</div>
                  </div>
                </div>

                {report.insights.length > 0 && (
                  <div className="p-3 rounded-lg bg-white/10">
                    <div className="text-[11px] text-white/90 font-medium mb-1">
                      {report.insights[0].icon} {report.insights[0].title}
                    </div>
                    <div className="text-[10px] text-white/70">
                      {report.insights[0].content}
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-white/20 text-center">
                  <div className="text-[10px] text-white/60">
                    #StarConnect
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-white/10 flex gap-2">
            <button
              onClick={handleCopy}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all
                         ${copied
                           ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                           : 'bg-white/10 border border-white/10 text-white hover:bg-white/20'
                         }`}
            >
              <span className="mr-1">{copied ? '✓' : '📋'}</span>{copied ? t('report.copied') : t('report.copyText')}
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 py-2.5 px-4 rounded-xl text-sm font-medium
                         bg-gradient-to-r from-nebula-purple to-nebula-cyan
                         text-white hover:shadow-lg transition-all"
            >
              <span className="mr-1">⬇️</span>{t('report.downloadReport')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!report) {
    return (
      <div className="absolute inset-0 z-40 flex items-center justify-center
                      bg-space-900/70 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-4xl animate-spin mb-4">🌌</div>
          <p className="text-white/60">Loading...</p>
        </div>
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
              <h2 className="text-xl font-display text-white">{t('report.title')}</h2>
              <p className="text-xs text-white/50 mt-1">
                {t('report.subtitle')}
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

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setReportType(REPORT_TYPES.WEEKLY)}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                reportType === REPORT_TYPES.WEEKLY
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'bg-space-700/30 text-white/60 hover:bg-space-700/50'
              }`}
            >
              <span className="mr-1">📅</span>{t('report.weekly')}
            </button>
            <button
              onClick={() => setReportType(REPORT_TYPES.MONTHLY)}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                reportType === REPORT_TYPES.MONTHLY
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-space-700/30 text-white/60 hover:bg-space-700/50'
              }`}
            >
              <span className="mr-1">📆</span>{t('report.monthly')}
            </button>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                        border border-nebula-purple/30">
            <div className="text-center">
              <div className="text-lg font-display text-white">
                {report.title}
              </div>
              <div className="text-[11px] text-white/60 mt-0.5">
                {report.subtitle}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {report.isEmpty ? (
            renderEmptyState()
          ) : (
            <>
              {renderStatsOverview()}
              {renderInsights()}
              {renderDiscoveries()}
              {renderMilestones()}
              {renderTopConstellations()}
              {renderNotableMoments()}
              {renderNotes()}
              {renderOverallStats()}
            </>
          )}
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <button
              onClick={generateReport}
              className="flex-1 py-2.5 px-4 rounded-xl text-sm font-medium
                         bg-space-700/50 border border-white/10 text-white
                         hover:bg-space-700/70 transition-all flex items-center justify-center gap-1.5"
            >
              <span>🔄</span>
              <span>{t('report.refresh')}</span>
            </button>
            <button
              onClick={handleCopy}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all
                         flex items-center justify-center gap-1.5 ${
                copied
                  ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                  : 'bg-white/10 border border-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>{copied ? '✓' : '📋'}</span>
              <span>{copied ? t('report.copied') : t('report.copy')}</span>
            </button>
            <button
              onClick={handleShare}
              className="flex-1 py-2.5 px-4 rounded-xl text-sm font-medium
                         bg-gradient-to-r from-nebula-purple to-nebula-cyan
                         text-white hover:shadow-lg transition-all
                         flex items-center justify-center gap-1.5"
            >
              <span>📤</span>
              <span>{t('report.share')}</span>
            </button>
          </div>
        </div>
      </div>

      {renderSharePreview()}
    </div>
  )
}
