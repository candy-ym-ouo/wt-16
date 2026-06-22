import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import { TEAM_ROLES, TEAM_LOG_TYPES, TEAM_TASKS, TEAM_ACHIEVEMENTS } from '../data/team'
import { getConstellationById } from '../data/constellations'
import { formatDate } from '../utils/math'

export default function ObservationTeam() {
  const {
    setActivePanel,
    team,
    setTeamEnabled,
    setTeamName,
    addTeamMember,
    changeMemberRole,
    removeTeamMember,
    startTeamTask,
    getTeamStats,
    getTeamTaskProgress,
    addTeamLog,
    teamDiscoveries
  } = useGameStore()

  const [activeTab, setActiveTab] = useState('overview')
  const [showAddMember, setShowAddMember] = useState(false)
  const [newMemberName, setNewMemberName] = useState('')
  const [newMemberRole, setNewMemberRole] = useState('rookie')
  const [selectedMember, setSelectedMember] = useState(null)
  const [editingName, setEditingName] = useState(false)
  const [tempTeamName, setTempTeamName] = useState('')
  const [logFilter, setLogFilter] = useState('all')
  const [selectedTask, setSelectedTask] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 2500)
  }

  const stats = getTeamStats()

  const handleEnableTeam = () => {
    setTeamEnabled(true)
    const member = addTeamMember({
      name: '星尘',
      avatar: '✨',
      role: 'explorer'
    })
    if (member) {
      addTeamLog({
        type: 'member_join',
        memberId: member.id,
        memberName: member.name,
        message: '加入了队伍',
        timestamp: Date.now()
      })
    }
  }

  const handleAddMember = () => {
    if (!newMemberName.trim()) return
    const avatars = ['🌟', '🌙', '⭐', '☄️', '🪐', '🌠', '🔭', '✨']
    const member = addTeamMember({
      name: newMemberName.trim(),
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      role: newMemberRole
    })
    if (member) {
      addTeamLog({
        type: 'member_join',
        memberId: member.id,
        memberName: member.name,
        message: '加入了队伍',
        timestamp: Date.now()
      })
    }
    setNewMemberName('')
    setShowAddMember(false)
  }

  const handleStartTask = (taskId) => {
    const result = startTeamTask(taskId)
    if (result?.success) {
      showToast('✓ 任务已接取')
    } else if (result?.error) {
      showToast(`⚠ ${result.error}`)
    }
  }

  const handleSaveTeamName = () => {
    if (tempTeamName.trim()) {
      setTeamName(tempTeamName.trim())
    }
    setEditingName(false)
  }

  if (!team.enabled) {
    return (
      <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                      bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="w-full max-w-md glass-panel p-6 text-center">
          <div className="text-6xl mb-4">👥</div>
          <h2 className="text-2xl font-display text-white mb-2">观测队伍</h2>
          <p className="text-sm text-white/60 mb-6 leading-relaxed">
            组建你的观星队伍，与伙伴们一起探索浩瀚星空。
            协作完成任务，共享观测日志，解锁团队成就！
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6 text-left">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xl mb-1">🤝</div>
              <p className="text-xs text-white/80 font-medium">成员协作</p>
              <p className="fs-10 text-white/50">组队探索星空</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xl mb-1">📋</div>
              <p className="text-xs text-white/80 font-medium">任务分工</p>
              <p className="fs-10 text-white/50">共同完成目标</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xl mb-1">📝</div>
              <p className="text-xs text-white/80 font-medium">共享日志</p>
              <p className="fs-10 text-white/50">记录每一次发现</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xl mb-1">🏆</div>
              <p className="text-xs text-white/80 font-medium">团队成就</p>
              <p className="fs-10 text-white/50">解锁荣耀徽章</p>
            </div>
          </div>
          <button
            onClick={handleEnableTeam}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-cyan
                       text-white font-medium text-sm
                       hover:shadow-lg hover:shadow-nebula-purple/30
                       active:scale-95 transition-all"
          >
            创建我的观测队伍
          </button>
          <button
            onClick={() => setActivePanel(null)}
            className="mt-3 text-xs text-white/50 hover:text-white/80 transition-colors"
          >
            稍后再说
          </button>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: '总览', icon: '📊' },
    { id: 'members', label: '成员', icon: '👥' },
    { id: 'tasks', label: '任务', icon: '📋' },
    { id: 'log', label: '日志', icon: '📝' },
    { id: 'achievements', label: '成就', icon: '🏆' }
  ]

  const filteredLogs = logFilter === 'all'
    ? team.teamLogs
    : team.teamLogs.filter(log => log.type === logFilter)

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      {toastMessage && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50
                        px-5 py-2.5 rounded-xl bg-space-800/95 border border-white/20
                        text-sm text-white shadow-xl animate-in fade-in slide-in-from-top duration-200">
          {toastMessage}
        </div>
      )}
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden relative">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-400
                              flex items-center justify-center text-2xl shadow-lg">
                👥
              </div>
              <div>
                {editingName ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tempTeamName}
                      onChange={(e) => setTempTeamName(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-lg px-2 py-1
                                 text-white text-sm w-32 focus:outline-none focus:border-nebula-cyan"
                      autoFocus
                    />
                    <button
                      onClick={handleSaveTeamName}
                      className="text-xs text-nebula-cyan hover:text-nebula-cyan/80"
                    >
                      保存
                    </button>
                  </div>
                ) : (
                  <div
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => {
                      setTempTeamName(team.teamName)
                      setEditingName(true)
                    }}
                  >
                    <h2 className="text-xl font-display text-white">{team.teamName}</h2>
                    <p className="fs-10 text-white/50">点击修改队伍名称</p>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => setActivePanel(null)}
              className="icon-btn"
              aria-label="关闭"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center mb-4">
            <div className="p-2 rounded-lg bg-white/5">
              <p className="text-lg font-display text-amber-400">Lv.{stats.teamLevel}</p>
              <p className="fs-10 text-white/50">队伍等级</p>
            </div>
            <div className="p-2 rounded-lg bg-white/5">
              <p className="text-lg font-display text-white">{stats.memberCount}</p>
              <p className="fs-10 text-white/50">成员数</p>
            </div>
            <div className="p-2 rounded-lg bg-white/5">
              <p className="text-lg font-display text-cyan-400">{stats.discoveries}</p>
              <p className="fs-10 text-white/50">发现星座</p>
            </div>
            <div className="p-2 rounded-lg bg-white/5">
              <p className="text-lg font-display text-star-gold">{stats.achievements}</p>
              <p className="fs-10 text-white/50">团队成就</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between fs-10 mb-1">
              <span className="text-white/50">队伍经验</span>
              <span className="text-amber-400 font-mono">
                {stats.teamXP} / {stats.teamLevel * 500}
              </span>
            </div>
            <div className="h-2 bg-space-900/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all"
                style={{ width: `${Math.min(100, (stats.teamXP / (stats.teamLevel * 500)) * 100)}%` }}
              />
            </div>
          </div>

          <div className="mt-4 flex gap-1 bg-space-800/50 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 px-2 rounded-lg fs-11 transition-all flex items-center justify-center gap-1
                           ${activeTab === tab.id
                             ? 'bg-white/10 text-white shadow-sm'
                             : 'text-white/50 hover:text-white/80'}`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-transparent">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🔥</span>
                  <h3 className="text-sm font-display text-white">连续观星</h3>
                  <span className="ml-auto text-sm font-display text-amber-400">
                    {stats.streakDays} 天
                  </span>
                </div>
                <div className="flex gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-8 rounded-md flex items-center justify-center fs-10
                                 ${i < stats.streakDays
                                   ? 'bg-gradient-to-t from-amber-500 to-yellow-400 text-white'
                                   : 'bg-white/5 text-white/30'}`}
                    >
                      {i < stats.streakDays ? '✓' : ''}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">👥</span>
                  <h3 className="text-sm font-display text-white">队伍成员</h3>
                  <button
                    onClick={() => setActiveTab('members')}
                    className="ml-auto fs-10 text-nebula-cyan hover:underline"
                  >
                    查看全部 →
                  </button>
                </div>
                <div className="flex -space-x-2">
                  {team.members.slice(0, 5).map((member) => {
                    const role = TEAM_ROLES[member.role]
                    return (
                      <div
                        key={member.id}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-space-600 to-space-800
                                   border-2 border-space-900 flex items-center justify-center text-lg
                                   relative"
                        title={`${member.name} · ${role?.name || '成员'}`}
                      >
                        {member.avatar}
                        {member.isSelf && (
                          <span className="absolute -bottom-1 -right-1 fs-8">👑</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">📋</span>
                  <h3 className="text-sm font-display text-white">进行中的任务</h3>
                </div>
                {team.activeTasks.length === 0 ? (
                  <p className="text-xs text-white/40 text-center py-4">
                    暂无进行中的任务
                    <button
                      onClick={() => setActiveTab('tasks')}
                      className="block mx-auto mt-2 text-nebula-cyan fs-11"
                    >
                      去接取任务 →
                    </button>
                  </p>
                ) : (
                  <div className="space-y-2">
                    {team.activeTasks.map((at) => {
                      const progress = getTeamTaskProgress(at.taskId)
                      if (!progress) return null
                      return (
                        <div
                          key={at.taskId}
                          className="p-3 rounded-xl bg-white/5 border border-white/10"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">{progress.task.icon}</span>
                            <span className="text-xs text-white font-medium flex-1">
                              {progress.task.name}
                            </span>
                            <span className="fs-10 text-nebula-cyan">
                              {progress.percentage}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan rounded-full"
                              style={{ width: `${progress.percentage}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-space-700/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🏆</span>
                  <h3 className="text-sm font-display text-white">最新成就</h3>
                </div>
                {team.unlockedTeamAchievements.length === 0 ? (
                  <p className="text-xs text-white/40 text-center py-4">
                    继续努力，解锁更多团队成就！
                  </p>
                ) : (
                  <div className="flex gap-2">
                    {team.unlockedTeamAchievements.slice(-4).reverse().map((achId) => {
                      const achievement = TEAM_ACHIEVEMENTS.find(a => a.id === achId)
                      if (!achievement) return null
                      return (
                        <div
                          key={achId}
                          className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color}
                                     bg-opacity-20 border border-white/10 text-center flex-1`}
                        >
                          <div className="text-2xl mb-1">{achievement.icon}</div>
                          <p className="fs-10 text-white/80 font-medium truncate">
                            {achievement.name}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'members' && (
            <div className="space-y-3">
              {!showAddMember && (
                <button
                  onClick={() => setShowAddMember(true)}
                  className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-white/20
                             text-white/60 text-sm hover:border-nebula-cyan/50 hover:text-nebula-cyan
                             transition-all flex items-center justify-center gap-2"
                >
                  <span className="text-lg">+</span>
                  <span>邀请新成员</span>
                </button>
              )}

              {showAddMember && (
                <div className="p-4 rounded-2xl border border-nebula-cyan/30 bg-nebula-cyan/5">
                  <h4 className="text-sm font-display text-white mb-3">邀请新成员</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="fs-11 text-white/60 mb-1 block">成员名称</label>
                      <input
                        type="text"
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                        placeholder="输入成员名称"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2
                                   text-white text-sm placeholder:text-white/30
                                   focus:outline-none focus:border-nebula-cyan"
                      />
                    </div>
                    <div>
                      <label className="fs-11 text-white/60 mb-2 block">选择角色</label>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(TEAM_ROLES).filter(([id]) => id !== 'leader').map(([id, role]) => (
                          <button
                            key={id}
                            onClick={() => setNewMemberRole(id)}
                            className={`p-2 rounded-lg text-center transition-all
                                       ${newMemberRole === id
                                         ? 'bg-white/15 border border-white/30'
                                         : 'bg-white/5 border border-transparent hover:bg-white/10'}`}
                          >
                            <div className="text-xl mb-1">{role.icon}</div>
                            <p className="fs-10 text-white/80">{role.name}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowAddMember(false)}
                        className="flex-1 py-2 rounded-lg text-sm text-white/60 bg-white/10
                                   hover:bg-white/20 transition-all"
                      >
                        取消
                      </button>
                      <button
                        onClick={handleAddMember}
                        disabled={!newMemberName.trim()}
                        className="flex-1 py-2 rounded-lg text-sm text-white
                                   bg-gradient-to-r from-nebula-purple to-nebula-cyan
                                   hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed
                                   transition-all"
                      >
                        邀请
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {team.members.map((member) => {
                const role = TEAM_ROLES[member.role]
                const isSelected = selectedMember === member.id
                return (
                  <div
                    key={member.id}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer
                               ${isSelected
                                 ? 'border-nebula-cyan/50 bg-nebula-cyan/5'
                                 : 'border-white/10 bg-space-700/20 hover:bg-white/5'}`}
                    onClick={() => setSelectedMember(isSelected ? null : member.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role?.color || 'from-gray-500 to-gray-600'}
                                      flex items-center justify-center text-2xl shadow-md`}>
                        {member.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-medium text-white truncate">
                            {member.name}
                            {member.isSelf && <span className="ml-1">(我)</span>}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`fs-10 px-2 py-0.5 rounded-full
                                           bg-gradient-to-r ${role?.color || 'from-gray-500 to-gray-600'}
                                           text-white/90`}>
                            {role?.icon} {role?.name || '成员'}
                          </span>
                          <span className="fs-10 text-white/40">
                            Lv.{member.level}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="fs-10 text-white/40">经验值</p>
                        <p className="text-sm font-mono text-amber-400">{member.xp}</p>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 rounded-lg bg-white/5">
                            <p className="text-base font-display text-cyan-400">
                              {member.discoveries?.length || 0}
                            </p>
                            <p className="fs-9 text-white/50">发现星座</p>
                          </div>
                          <div className="p-2 rounded-lg bg-white/5">
                            <p className="text-base font-display text-green-400">
                              {member.level}
                            </p>
                            <p className="fs-9 text-white/50">当前等级</p>
                          </div>
                          <div className="p-2 rounded-lg bg-white/5">
                            <p className="text-base font-display text-amber-400">
                              {member.xp}
                            </p>
                            <p className="fs-9 text-white/50">累计经验</p>
                          </div>
                        </div>

                        <div>
                          <p className="fs-10 text-white/50 mb-1">
                            升级还需 {(member.level * 100) - member.xp} 经验
                          </p>
                          <div className="h-1.5 bg-space-900/60 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${role?.color || 'from-gray-500 to-gray-600'} rounded-full`}
                              style={{ width: `${(member.xp / (member.level * 100)) * 100}%` }}
                            />
                          </div>
                        </div>

                        {!member.isSelf && (
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                const roles = Object.keys(TEAM_ROLES).filter(r => r !== 'leader')
                                const currentIndex = roles.indexOf(member.role)
                                const nextRole = roles[(currentIndex + 1) % roles.length]
                                changeMemberRole(member.id, nextRole)
                              }}
                              className="flex-1 py-2 rounded-lg fs-11 text-white/80 bg-white/10
                                         hover:bg-white/20 transition-all"
                            >
                              更换角色
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                if (confirm(`确定要移除 ${member.name} 吗？`)) {
                                  removeTeamMember(member.id)
                                  setSelectedMember(null)
                                }
                              }}
                              className="flex-1 py-2 rounded-lg fs-11 text-red-400 bg-red-500/10
                                         hover:bg-red-500/20 transition-all"
                            >
                              移除成员
                            </button>
                          </div>
                        )}

                        <p className="fs-10 text-white/40">
                          加入时间：{formatDate(member.joinedAt)}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="space-y-3">
              <div className="flex gap-2 mb-2">
                <span className="fs-11 px-3 py-1.5 rounded-full bg-white/10 text-white/80">
                  进行中：{team.activeTasks.length}
                </span>
                <span className="fs-11 px-3 py-1.5 rounded-full bg-white/10 text-white/80">
                  已完成：{team.completedTasks.length}
                </span>
                <span className="fs-11 px-3 py-1.5 rounded-full bg-white/10 text-white/80 ml-auto">
                  🌟 {stats.teamStardust} 星尘
                </span>
              </div>

              {selectedTask && (
                <div className="p-4 rounded-2xl border border-nebula-purple/30 bg-nebula-purple/5">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                      {selectedTask.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">{selectedTask.name}</h4>
                      <p className="fs-11 text-white/60 mt-1">{selectedTask.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="fs-10 px-2 py-0.5 rounded bg-white/10 text-white/70">
                          难度 {selectedTask.difficulty}
                        </span>
                        {selectedTask.reward && (
                          <span className="fs-10 text-star-gold">
                            奖励：{selectedTask.reward.teamXP} XP + {selectedTask.reward.stardust} 星尘
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedTask(null)}
                      className="text-white/40 hover:text-white/70 text-lg"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              <p className="fs-11 text-white/50 mb-2">📋 可接取任务</p>

              {TEAM_TASKS.filter(t =>
                !team.activeTasks.some(at => at.taskId === t.id) &&
                !team.completedTasks.some(ct => ct.taskId === t.id)
              ).map((task) => {
                const progress = getTeamTaskProgress(task.id)
                return (
                  <div
                    key={task.id}
                    className="p-4 rounded-2xl border border-white/10 bg-space-700/20
                               hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
                        {task.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white">{task.name}</h4>
                        <p className="fs-11 text-white/50 mt-0.5 line-clamp-2">
                          {task.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {task.requiredRoles && task.requiredRoles.length > 0 && (
                        <div className="flex items-center gap-1 w-full">
                          <span className="fs-10 text-white/50">所需角色：</span>
                          {task.requiredRoles.map((roleId) => {
                            const role = TEAM_ROLES[roleId]
                            const hasRole = team.members.some(m => m.role === roleId)
                            return (
                              <span
                                key={roleId}
                                className={`fs-10 px-1.5 py-0.5 rounded
                                           ${hasRole
                                             ? 'bg-green-500/20 text-green-400'
                                             : 'bg-red-500/20 text-red-400'}`}
                              >
                                {role?.icon} {role?.name}
                              </span>
                            )
                          })}
                        </div>
                      )}
                      <div className="flex items-center justify-between w-full">
                        <span className="fs-10 text-star-gold">
                          🎁 {task.reward?.teamXP || 0} XP + {task.reward?.stardust || 0} 星尘
                        </span>
                        <button
                          onClick={() => handleStartTask(task.id)}
                          className="px-3 py-1.5 rounded-lg fs-11 text-white
                                     bg-gradient-to-r from-nebula-purple to-nebula-cyan
                                     hover:shadow-md active:scale-95 transition-all"
                        >
                          接取任务
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}

              {team.completedTasks.length > 0 && (
                <>
                  <p className="fs-11 text-white/50 mt-6 mb-2">✅ 已完成任务</p>
                  {team.completedTasks.slice(0, 5).map((ct) => {
                    const task = TEAM_TASKS.find(t => t.id === ct.taskId)
                    if (!task) return null
                    return (
                      <div
                        key={ct.taskId}
                        className="p-4 rounded-2xl border border-green-500/20 bg-green-500/5 opacity-80"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-lg">
                            {task.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white flex items-center gap-2">
                              {task.name}
                              <span className="text-green-400">✓</span>
                            </h4>
                            <p className="fs-10 text-white/50">
                              完成于 {formatDate(ct.completedAt)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="fs-10 text-amber-400">+{ct.xp} XP</p>
                            <p className="fs-10 text-star-gold">+{ct.stardust} 星尘</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          )}

          {activeTab === 'log' && (
            <div className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                {['all', ...Object.keys(TEAM_LOG_TYPES)].map((type) => (
                  <button
                    key={type}
                    onClick={() => setLogFilter(type)}
                    className={`px-3 py-1.5 rounded-full fs-10 transition-all
                               ${logFilter === type
                                 ? 'bg-white/15 text-white'
                                 : 'bg-white/5 text-white/50 hover:text-white/80'}`}
                  >
                    {type === 'all' ? '全部' : TEAM_LOG_TYPES[type]?.icon + ' ' + TEAM_LOG_TYPES[type]?.name}
                  </button>
                ))}
              </div>

              {filteredLogs.length === 0 ? (
                <div className="h-40 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl mb-3 opacity-30">📝</div>
                  <h4 className="text-white/60 font-display mb-1">暂无日志记录</h4>
                  <p className="text-xs text-white/40 max-w-xs leading-relaxed">
                    开始探索星空，你的团队动态将记录在这里
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredLogs.map((log, index) => {
                    const logType = TEAM_LOG_TYPES[log.type]
                    return (
                      <div
                        key={index}
                        className="p-3 rounded-xl border border-white/10 bg-space-800/30"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center
                                          ${logType?.color || 'text-white/60'}`}>
                            <span className="text-lg">{logType?.icon || '📌'}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className={`fs-10 font-medium ${logType?.color || 'text-white/70'}`}>
                                {logType?.name || '动态'}
                              </span>
                              <span className="fs-9 text-white/40 font-mono">
                                {formatDate(log.timestamp)}
                              </span>
                            </div>
                            <p className="text-xs text-white/80 mt-1">
                              {log.memberName && (
                                <span className="text-nebula-cyan">{log.memberName} </span>
                              )}
                              {log.type === 'discovery' && log.constellationId && (
                                <>发现了 <span className="text-amber-400">
                                  {getConstellationById?.(log.constellationId)?.name || log.constellationId}
                                </span>！</>
                              )}
                              {log.type === 'reobservation' && log.constellationId && (
                                <>重温了 <span className="text-blue-400">
                                  {getConstellationById?.(log.constellationId)?.name || log.constellationId}
                                </span></>
                              )}
                              {log.type === 'task_complete' && (
                                <>完成了任务 <span className="text-green-400">{log.taskName}</span></>
                              )}
                              {log.type === 'achievement' && (
                                <>解锁成就 <span className="text-amber-400">{log.achievementName}</span> 🏆</>
                              )}
                              {log.type === 'member_join' && (
                                <><span className="text-cyan-400">{log.memberName}</span> 加入了队伍</>
                              )}
                              {log.message && log.message}
                            </p>
                            {log.perfect && (
                              <span className="inline-block mt-1 fs-9 px-1.5 py-0.5 rounded
                                              bg-star-gold/20 text-star-gold">
                                完美观测
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="fs-11 text-white/60">
                  已解锁 {stats.achievements} / {stats.totalAchievements}
                </p>
                <div className="flex-1 mx-4 h-2 bg-space-900/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                    style={{ width: `${(stats.achievements / stats.totalAchievements) * 100}%` }}
                  />
                </div>
              </div>

              {['beginner', 'exploration', 'challenge', 'season', 'collection', 'streak', 'legendary'].map((category) => {
                const achievements = TEAM_ACHIEVEMENTS.filter(
                  a => a.category === category
                )
                if (achievements.length === 0) return null

                const categoryNames = {
                  beginner: '🌱 新手入门',
                  exploration: '⭐ 探索发现',
                  challenge: '💪 挑战成就',
                  season: '🌸 季节成就',
                  collection: '📚 收集成就',
                  streak: '🔥 连续成就',
                  legendary: '👑 传奇成就'
                }

                return (
                  <div key={category}>
                    <h4 className="fs-11 text-white/60 mb-2 font-medium">
                      {categoryNames[category] || category}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {achievements.map((achievement) => {
                        const unlocked = team.unlockedTeamAchievements.includes(achievement.id)
                        return (
                          <div
                            key={achievement.id}
                            className={`p-3 rounded-xl border transition-all
                                       ${unlocked
                                         ? `border-white/20 bg-gradient-to-br ${achievement.color} bg-opacity-20`
                                         : 'border-white/10 bg-space-800/40 opacity-60'}`}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`text-2xl ${!unlocked ? 'grayscale opacity-50' : ''}`}>
                                {achievement.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-xs font-medium truncate
                                              ${unlocked ? 'text-white' : 'text-white/50'}`}>
                                  {achievement.name}
                                </p>
                                <p className="fs-9 text-white/50 line-clamp-2">
                                  {achievement.description}
                                </p>
                              </div>
                            </div>
                            {unlocked && (
                              <div className="mt-2 flex items-center justify-end">
                                <span className="fs-9 text-green-400 flex items-center gap-1">
                                  ✓ 已解锁
                                </span>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
