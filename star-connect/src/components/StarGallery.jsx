import { useState, useMemo, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { CONSTELLATIONS, getConstellationById } from '../data/constellations'
import { SEASONS } from '../data/seasonPlan'
import { DIFFICULTY_LABELS, GALLERY_CATEGORIES, DEFAULT_PHOTO_METADATA } from '../data/starGallery'
import { formatDate } from '../utils/math'

export default function StarGallery() {
  const {
    starGallery,
    setActiveGalleryPanel,
    setSelectedPhotoId,
    setGalleryFilters,
    resetGalleryFilters,
    togglePhotoFeatured,
    incrementPhotoViews,
    likePhoto,
    addGalleryPhoto,
    updateGalleryPhoto,
    deleteGalleryPhoto,
    getGalleryStats,
    getFilteredPhotos,
    getPhotoById,
    openAtlasDetail,
    setActivePanel,
    setTargetConstellation,
    discoveredConstellations
  } = useGameStore()

  const { activeGalleryPanel, selectedPhotoId, galleryFilters } = starGallery
  const stats = getGalleryStats()
  const filteredPhotos = getFilteredPhotos()
  const selectedPhoto = selectedPhotoId ? getPhotoById(selectedPhotoId) : null

  const [showAddForm, setShowAddForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    constellationId: '',
    category: 'landscape',
    imageUrl: '',
    location: '',
    shootingDate: new Date().toISOString().split('T')[0],
    metadata: { ...DEFAULT_PHOTO_METADATA },
    tags: []
  })
  const [tagInput, setTagInput] = useState('')

  const relatedPhotos = useMemo(() => {
    if (!selectedPhoto || !selectedPhoto.constellationId) return []
    return filteredPhotos
      .filter(p => p.constellationId === selectedPhoto.constellationId && p.id !== selectedPhoto.id)
      .slice(0, 4)
  }, [selectedPhoto, filteredPhotos])

  const prefillFormForConstellation = useMemo(() => {
    if (!starGallery.prefillConstellationId) return null
    const constellation = getConstellationById(starGallery.prefillConstellationId)
    if (constellation) {
      return {
        constellation,
        initialData: {
          title: `${constellation.name}摄影作品`,
          description: `成功观测并拍摄到${constellation.name}！${constellation.description}`,
          constellationId: constellation.id,
          category: 'constellation',
          tags: [constellation.name, constellation.season, ...(constellation.tags || [])]
        }
      }
    }
    return null
  }, [starGallery.prefillConstellationId])

  useEffect(() => {
    if (prefillFormForConstellation && showAddForm) {
      setFormData(prev => ({
        ...prev,
        ...prefillFormForConstellation.initialData,
        imageUrl: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(`astrophotography of ${prefillFormForConstellation.constellation.nameEn} constellation, professional night sky photography, high detail`)}&image_size=square_hd`,
        metadata: { ...DEFAULT_PHOTO_METADATA }
      }))
    }
  }, [prefillFormForConstellation, showAddForm])

  const seasonOptions = [
    { value: 'all', label: '全部季节', icon: '🌍' },
    { value: '春', label: '春季', icon: SEASONS.spring.icon },
    { value: '夏', label: '夏季', icon: SEASONS.summer.icon },
    { value: '秋', label: '秋季', icon: SEASONS.autumn.icon },
    { value: '冬', label: '冬季', icon: SEASONS.winter.icon }
  ]

  const difficultyOptions = [
    { value: 'all', label: '全部难度', icon: '✨' },
    { value: '1', label: '入门', icon: '⭐' },
    { value: '2', label: '进阶', icon: '⭐⭐' },
    { value: '3', label: '挑战', icon: '⭐⭐⭐' }
  ]

  const categoryOptions = Object.values(GALLERY_CATEGORIES).map(cat => ({
    value: cat.id,
    label: cat.label,
    icon: cat.icon
  }))

  const sortOptions = [
    { value: 'featured', label: '精选优先' },
    { value: 'newest', label: '最新拍摄' },
    { value: 'oldest', label: '最早拍摄' },
    { value: 'popular', label: '最受欢迎' }
  ]

  const discoveredConstellationOptions = CONSTELLATIONS
    .filter(c => discoveredConstellations.includes(c.id))
    .map(c => ({
      value: c.id,
      label: `${c.name} (${c.nameEn})`,
      difficulty: c.difficulty
    }))

  const handlePhotoClick = (photo) => {
    setSelectedPhotoId(photo.id)
    setActiveGalleryPanel('detail')
    incrementPhotoViews(photo.id)
  }

  const handleBack = () => {
    if (showAddForm || showEditForm || showDeleteConfirm) {
      setShowAddForm(false)
      setShowEditForm(false)
      setShowDeleteConfirm(false)
      return
    }
    if (activeGalleryPanel === 'detail') {
      setActiveGalleryPanel('grid')
      setSelectedPhotoId(null)
    } else {
      if (starGallery.prefillConstellationId) {
        useGameStore.getState().clearPrefillConstellation()
      }
      setActivePanel(null)
    }
  }

  const handleViewConstellation = (constellationId, e) => {
    e.stopPropagation()
    openAtlasDetail(constellationId)
  }

  const handleStartObservation = (constellationId, e) => {
    e.stopPropagation()
    setTargetConstellation(constellationId)
    setActivePanel(null)
  }

  const handleOpenAddForm = (e) => {
    e.stopPropagation()
    setFormData({
      title: '',
      description: '',
      constellationId: '',
      category: 'landscape',
      imageUrl: '',
      location: '',
      shootingDate: new Date().toISOString().split('T')[0],
      metadata: { ...DEFAULT_PHOTO_METADATA },
      tags: []
    })
    setTagInput('')
    setShowAddForm(true)
  }

  const handleOpenEditForm = (e) => {
    e.stopPropagation()
    if (!selectedPhoto) return
    setFormData({
      title: selectedPhoto.title,
      description: selectedPhoto.description,
      constellationId: selectedPhoto.constellationId || '',
      category: selectedPhoto.category,
      imageUrl: selectedPhoto.imageUrl,
      location: selectedPhoto.location || '',
      shootingDate: new Date(selectedPhoto.shootingDate).toISOString().split('T')[0],
      metadata: { ...DEFAULT_PHOTO_METADATA, ...selectedPhoto.metadata },
      tags: [...(selectedPhoto.tags || [])]
    })
    setTagInput('')
    setShowEditForm(true)
  }

  const handleFormChange = (field, value) => {
    setFormData(prev => {
      if (field.includes('metadata.')) {
        const metaField = field.split('.')[1]
        return {
          ...prev,
          metadata: { ...prev.metadata, [metaField]: value }
        }
      }
      return { ...prev, [field]: value }
    })
  }

  const handleAddTag = (e) => {
    e.preventDefault()
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
    }
    setTagInput('')
  }

  const handleRemoveTag = (tag, e) => {
    e.stopPropagation()
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }))
  }

  const handleSubmitAdd = (e) => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.imageUrl.trim()) {
      alert('请填写标题和图片链接')
      return
    }
    
    const photoData = {
      ...formData,
      constellationId: formData.constellationId || null,
      shootingDate: new Date(formData.shootingDate).getTime()
    }
    
    addGalleryPhoto(photoData)
    setShowAddForm(false)
    if (starGallery.prefillConstellationId) {
      useGameStore.getState().clearPrefillConstellation()
    }
  }

  const handleSubmitEdit = (e) => {
    e.preventDefault()
    if (!selectedPhotoId) return
    if (!formData.title.trim() || !formData.imageUrl.trim()) {
      alert('请填写标题和图片链接')
      return
    }
    
    const updates = {
      ...formData,
      constellationId: formData.constellationId || null,
      shootingDate: new Date(formData.shootingDate).getTime()
    }
    
    updateGalleryPhoto(selectedPhotoId, updates)
    setShowEditForm(false)
  }

  const handleDeletePhoto = () => {
    if (!selectedPhotoId) return
    deleteGalleryPhoto(selectedPhotoId)
    setShowDeleteConfirm(false)
    setActiveGalleryPanel('grid')
    setSelectedPhotoId(null)
  }

  const generateImageUrl = () => {
    const constellation = formData.constellationId 
      ? getConstellationById(formData.constellationId)
      : null
    const categoryDesc = GALLERY_CATEGORIES[formData.category]?.label || ''
    const prompt = constellation
      ? `astrophotography of ${constellation.nameEn} constellation, ${categoryDesc}, professional night sky photography, high detail, cosmic colors`
      : `astrophotography, ${categoryDesc}, professional night sky photography, high detail`
    
    const url = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=square_hd`
    handleFormChange('imageUrl', url)
  }

  const renderStats = () => (
    <div className="grid grid-cols-4 gap-2 mb-4">
      <div className="p-3 rounded-xl bg-gradient-to-br from-nebula-purple/20 to-nebula-cyan/20 border border-nebula-purple/30 text-center">
        <div className="text-xl font-display text-nebula-cyan">{stats.totalPhotos}</div>
        <div className="text-[9px] text-white/50">作品总数</div>
      </div>
      <div className="p-3 rounded-xl bg-gradient-to-br from-star-gold/20 to-nebula-orange/20 border border-star-gold/30 text-center">
        <div className="text-xl font-display text-star-gold">{stats.featuredCount}</div>
        <div className="text-[9px] text-white/50">精选作品</div>
      </div>
      <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-center">
        <div className="text-xl font-display text-green-400">{stats.constellationCoverage}</div>
        <div className="text-[9px] text-white/50">覆盖星座</div>
      </div>
      <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 text-center">
        <div className="text-xl font-display text-pink-400">{stats.discoveredWithPhotos}</div>
        <div className="text-[9px] text-white/50">已发现</div>
      </div>
    </div>
  )

  const renderFilters = () => (
    <div className="space-y-3 mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="搜索作品..."
          value={galleryFilters.search}
          onChange={(e) => setGalleryFilters({ search: e.target.value })}
          className="flex-1 px-3 py-2 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-nebula-purple/50"
        />
        <button
          onClick={handleOpenAddForm}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white text-xs font-medium hover:shadow-lg hover:shadow-nebula-purple/30 transition-all flex items-center gap-1"
        >
          <span>+</span>
          <span>新增</span>
        </button>
        <button
          onClick={() => resetGalleryFilters()}
          className="px-3 py-2 rounded-lg bg-space-700/50 text-white/60 text-xs hover:bg-space-600/50 transition-all"
        >
          重置
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {categoryOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => setGalleryFilters({ category: opt.value })}
            className={`px-3 py-1.5 rounded-full text-[10px] flex items-center gap-1 transition-all ${
              galleryFilters.category === opt.value
                ? 'bg-nebula-purple/30 text-nebula-cyan border border-nebula-purple/50'
                : 'bg-space-700/30 text-white/50 border border-transparent hover:bg-space-600/30'
            }`}
          >
            <span>{opt.icon}</span>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {seasonOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => setGalleryFilters({ season: opt.value })}
            className={`px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition-all ${
              galleryFilters.season === opt.value
                ? 'bg-white/15 text-white border border-white/20'
                : 'bg-space-700/30 text-white/50 hover:bg-space-600/30'
            }`}
          >
            <span>{opt.icon}</span>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex gap-1 flex-wrap flex-1">
          {difficultyOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setGalleryFilters({ difficulty: opt.value })}
              className={`px-2 py-1 rounded text-[9px] flex items-center gap-0.5 transition-all ${
                galleryFilters.difficulty === opt.value
                  ? 'bg-gradient-to-r ' + DIFFICULTY_LABELS[opt.value]?.color + ' text-white'
                  : 'bg-space-700/30 text-white/50 hover:bg-space-600/30'
              }`}
            >
              <span>{opt.icon}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>

        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={galleryFilters.featuredOnly}
            onChange={(e) => setGalleryFilters({ featuredOnly: e.target.checked })}
            className="w-3.5 h-3.5 rounded bg-space-700 border-white/20 text-star-gold focus:ring-star-gold"
          />
          <span className="text-[10px] text-white/50">仅显示精选</span>
        </label>

        <select
          value={galleryFilters.sortBy}
          onChange={(e) => setGalleryFilters({ sortBy: e.target.value })}
          className="px-2 py-1 rounded bg-space-700/50 border border-white/10 text-white text-[10px] focus:outline-none"
        >
          {sortOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {stats.mostPhotographedSeason && (
        <div className="flex gap-2 text-[10px] text-white/40">
          <span>📊 统计：</span>
          <span>最爱季节 {SEASONS[stats.mostPhotographedSeason]?.icon} {SEASONS[stats.mostPhotographedSeason]?.name}</span>
          {stats.mostPhotographedCategory && (
            <span>· 最爱题材 {GALLERY_CATEGORIES[stats.mostPhotographedCategory]?.icon} {GALLERY_CATEGORIES[stats.mostPhotographedCategory]?.label}</span>
          )}
        </div>
      )}
    </div>
  )

  const renderPhotoCard = (photo) => {
    const constellation = photo.constellationId ? getConstellationById(photo.constellationId) : null
    const difficultyConfig = DIFFICULTY_LABELS[photo.difficulty]
    const categoryConfig = GALLERY_CATEGORIES[photo.category]
    const seasonConfig = Object.values(SEASONS).find(s => s.name === photo.season + '季')

    return (
      <div
        key={photo.id}
        onClick={() => handlePhotoClick(photo)}
        className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-nebula-purple/20 ${
          photo.featured ? 'ring-2 ring-star-gold/50' : ''
        }`}
      >
        <div className="aspect-square bg-space-800">
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h4 className="text-white text-sm font-display truncate">{photo.title}</h4>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[9px] text-white/60">{formatDate(photo.shootingDate)}</span>
            <span className="text-white/30">·</span>
            <span className="text-[9px] text-white/60">{photo.location}</span>
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">
              {categoryConfig?.icon} {categoryConfig?.label}
            </span>
            {constellation && (
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-nebula-purple/20 text-nebula-cyan">
                ✨ {constellation.name}
              </span>
            )}
            {seasonConfig && (
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                {seasonConfig.icon}
              </span>
            )}
          </div>
        </div>

        {photo.featured && (
          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-star-gold/90 flex items-center justify-center text-xs shadow-lg">
            ⭐
          </div>
        )}

        <div className="absolute top-2 left-2 flex items-center gap-1">
          <div className="px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm text-[9px] text-white/80 flex items-center gap-0.5">
            <span>👁️</span>
            <span>{photo.views}</span>
          </div>
          <div className="px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm text-[9px] text-white/80 flex items-center gap-0.5">
            <span>❤️</span>
            <span>{photo.likes}</span>
          </div>
        </div>
      </div>
    )
  }

  const renderGrid = () => (
    <div>
      {renderStats()}
      {renderFilters()}

      {prefillFormForConstellation && !showAddForm && (
        <div className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20 border border-nebula-purple/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nebula-purple to-nebula-cyan flex items-center justify-center text-xl">
                ✨
              </div>
              <div>
                <h4 className="text-white font-display text-sm">
                  发现新星座：{prefillFormForConstellation.constellation.name}！
                </h4>
                <p className="text-[11px] text-white/50 mt-0.5">
                  快来记录你的拍摄成果吧
                </p>
              </div>
            </div>
            <button
              onClick={handleOpenAddForm}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-star-gold to-nebula-orange text-white text-xs font-medium hover:shadow-lg transition-all"
            >
              📷 立即记录
            </button>
          </div>
        </div>
      )}

      {filteredPhotos.length === 0 ? (
        <div className="h-60 flex flex-col items-center justify-center text-center">
          <div className="text-5xl mb-4 opacity-30">📷</div>
          <h4 className="text-white/60 font-display mb-1">暂无作品</h4>
          <p className="text-xs text-white/40 max-w-xs leading-relaxed mb-4">
            开始记录你的星空摄影之旅，每一张照片都是宇宙的珍贵礼物
          </p>
          <button
            onClick={handleOpenAddForm}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white text-sm font-medium hover:shadow-lg transition-all"
          >
            + 添加第一张作品
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-white/50">
              共 {filteredPhotos.length} 张作品
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredPhotos.map(photo => renderPhotoCard(photo))}
          </div>
        </div>
      )}
    </div>
  )

  const renderDetail = () => {
    if (!selectedPhoto) return null

    const constellation = selectedPhoto.constellationId
      ? getConstellationById(selectedPhoto.constellationId)
      : null
    const difficultyConfig = DIFFICULTY_LABELS[selectedPhoto.difficulty]
    const categoryConfig = GALLERY_CATEGORIES[selectedPhoto.category]
    const seasonConfig = Object.values(SEASONS).find(s => s.name === selectedPhoto.season + '季')
    const isDiscovered = constellation && discoveredConstellations.includes(constellation.id)

    return (
      <div className="space-y-4">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={selectedPhoto.imageUrl}
            alt={selectedPhoto.title}
            className="w-full aspect-video object-cover"
          />

          {selectedPhoto.featured && (
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-star-gold/90 text-space-900 text-xs font-bold flex items-center gap-1.5">
              <span>⭐</span>
              <span>精选作品</span>
            </div>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation()
              togglePhotoFeatured(selectedPhoto.id)
            }}
            className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
              selectedPhoto.featured
                ? 'bg-star-gold/90 text-space-900'
                : 'bg-black/50 backdrop-blur-sm text-white/80 hover:bg-star-gold/70'
            }`}
          >
            <span>{selectedPhoto.featured ? '✓ 已精选' : '设为精选'}</span>
          </button>

          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[11px] text-white/90 flex items-center gap-1">
              <span>👁️</span>
              <span>{selectedPhoto.views} 次浏览</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                likePhoto(selectedPhoto.id)
              }}
              className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[11px] text-white/90 flex items-center gap-1 hover:bg-pink-500/50 transition-all"
            >
              <span>❤️</span>
              <span>{selectedPhoto.likes}</span>
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleOpenEditForm}
            className="flex-1 py-2.5 rounded-xl bg-white/10 text-white text-sm hover:bg-white/15 transition-all flex items-center justify-center gap-1.5"
          >
            <span>✏️</span>
            <span>编辑</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setShowDeleteConfirm(true) }}
            className="flex-1 py-2.5 rounded-xl bg-red-500/10 text-red-300 text-sm hover:bg-red-500/20 transition-all flex items-center justify-center gap-1.5"
          >
            <span>🗑️</span>
            <span>删除</span>
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-display text-white">{selectedPhoto.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              {seasonConfig && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${seasonConfig.bgColor} ${seasonConfig.textColor} ${seasonConfig.borderColor} border`}>
                  {seasonConfig.icon} {seasonConfig.name}
                </span>
              )}
              {categoryConfig && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
                  {categoryConfig.icon} {categoryConfig.label}
                </span>
              )}
              {difficultyConfig && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${difficultyConfig.color} text-white`}>
                  {difficultyConfig.icon} {difficultyConfig.label}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-white/70 leading-relaxed">{selectedPhoto.description}</p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-space-800/40 border border-white/5">
              <div className="text-white/40 mb-1">📍 拍摄地点</div>
              <div className="text-white/80">{selectedPhoto.location || '未记录'}</div>
            </div>
            <div className="p-3 rounded-xl bg-space-800/40 border border-white/5">
              <div className="text-white/40 mb-1">📅 拍摄时间</div>
              <div className="text-white/80">{formatDate(selectedPhoto.shootingDate)}</div>
            </div>
          </div>

          {selectedPhoto.metadata && Object.values(selectedPhoto.metadata).some(v => v) && (
            <div className="p-4 rounded-2xl bg-space-800/40 border border-white/5">
              <h4 className="text-sm font-display text-white/80 mb-3 flex items-center gap-2">
                <span>⚙️</span>
                <span>拍摄参数</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                {selectedPhoto.metadata.camera && (
                  <div>
                    <span className="text-white/40">相机：</span>
                    <span className="text-white/70">{selectedPhoto.metadata.camera}</span>
                  </div>
                )}
                {selectedPhoto.metadata.lens && (
                  <div>
                    <span className="text-white/40">镜头：</span>
                    <span className="text-white/70">{selectedPhoto.metadata.lens}</span>
                  </div>
                )}
                {selectedPhoto.metadata.iso && (
                  <div>
                    <span className="text-white/40">ISO：</span>
                    <span className="text-white/70">{selectedPhoto.metadata.iso}</span>
                  </div>
                )}
                {selectedPhoto.metadata.aperture && (
                  <div>
                    <span className="text-white/40">光圈：</span>
                    <span className="text-white/70">{selectedPhoto.metadata.aperture}</span>
                  </div>
                )}
                {selectedPhoto.metadata.shutter && (
                  <div>
                    <span className="text-white/40">快门：</span>
                    <span className="text-white/70">{selectedPhoto.metadata.shutter}</span>
                  </div>
                )}
                {selectedPhoto.metadata.stackCount && (
                  <div>
                    <span className="text-white/40">叠加：</span>
                    <span className="text-white/70">{selectedPhoto.metadata.stackCount} 张</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {constellation && (
            <div className={`p-4 rounded-2xl border transition-all ${
              isDiscovered
                ? 'bg-nebula-purple/10 border-nebula-purple/30'
                : 'bg-space-800/40 border-white/10'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    isDiscovered
                      ? 'bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white'
                      : 'bg-space-700/50 text-white/50'
                  }`}>
                    ✨
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-white text-sm">关联星座</h4>
                      {isDiscovered && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-400">
                          ✓ 已发现
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-white/80 mt-0.5">{constellation.name}</div>
                    <div className="text-[11px] text-white/40 mt-0.5">{constellation.nameEn} · {constellation.description}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={(e) => handleViewConstellation(constellation.id, e)}
                    className="px-2.5 py-1.5 rounded-lg bg-space-700/50 text-white/60 text-[10px] hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all"
                  >
                    📚 图鉴详情
                  </button>
                  <button
                    onClick={(e) => handleStartObservation(constellation.id, e)}
                    className="px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white text-[10px] hover:shadow-lg transition-all"
                  >
                    🔭 开始观测
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedPhoto.tags && selectedPhoto.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {selectedPhoto.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 rounded-full bg-white/5 text-white/50 text-[10px] border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {relatedPhotos.length > 0 && (
            <div className="pt-2 border-t border-white/5">
              <h4 className="text-sm font-display text-white/70 mb-3 flex items-center gap-2">
                <span>🖼️</span>
                <span>同星座作品</span>
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {relatedPhotos.map(photo => (
                  <div
                    key={photo.id}
                    onClick={() => handlePhotoClick(photo)}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-nebula-purple/50 transition-all"
                  >
                    <img
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderForm = (isEdit = false) => (
    <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-space-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[90vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-display text-white">
                {isEdit ? '✏️ 编辑作品' : '📷 新增拍摄记录'}
              </h2>
              <p className="text-[11px] text-white/50 mt-0.5">
                {isEdit ? '修改你的星空摄影记录' : '记录你与星空的美妙邂逅'}
              </p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setShowAddForm(false); setShowEditForm(false) }}
              className="icon-btn"
              aria-label="关闭"
            >
              ✕
            </button>
          </div>
        </div>

        <form onSubmit={isEdit ? handleSubmitEdit : handleSubmitAdd} className="flex-1 overflow-y-auto scrollbar-thin p-5">
          <div className="space-y-4">
            {prefillFormForConstellation && !isEdit && (
              <div className="p-3 rounded-xl bg-nebula-purple/10 border border-nebula-purple/30">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✨</span>
                  <div>
                    <div className="text-sm text-white font-medium">
                      关联星座：{prefillFormForConstellation.constellation.name}
                    </div>
                    <div className="text-[10px] text-white/50">
                      发现新星座后，自动为你关联拍摄记录
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-[11px] text-white/60 mb-1.5">作品标题 *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleFormChange('title', e.target.value)}
                placeholder="给这张照片起个名字"
                className="w-full px-3 py-2.5 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-nebula-purple/50"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] text-white/60 mb-1.5">图片链接 *</label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => handleFormChange('imageUrl', e.target.value)}
                  placeholder="https://..."
                  className="flex-1 px-3 py-2.5 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-nebula-purple/50"
                  required
                />
                <button
                  type="button"
                  onClick={generateImageUrl}
                  className="px-3 py-2.5 rounded-lg bg-nebula-purple/20 text-nebula-cyan text-xs hover:bg-nebula-purple/30 transition-all whitespace-nowrap"
                >
                  ✨ 生成
                </button>
              </div>
              {formData.imageUrl && (
                <div className="mt-2 rounded-lg overflow-hidden">
                  <img
                    src={formData.imageUrl}
                    alt="预览"
                    className="w-full h-32 object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-white/60 mb-1.5">关联星座</label>
                <select
                  value={formData.constellationId}
                  onChange={(e) => handleFormChange('constellationId', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm focus:outline-none focus:border-nebula-purple/50"
                >
                  <option value="">不关联</option>
                  {discoveredConstellationOptions.length === 0 ? (
                    <option value="" disabled>暂无已发现的星座</option>
                  ) : (
                    discoveredConstellationOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))
                  )}
                </select>
              </div>
              <div>
                <label className="block text-[11px] text-white/60 mb-1.5">拍摄分类</label>
                <select
                  value={formData.category}
                  onChange={(e) => handleFormChange('category', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm focus:outline-none focus:border-nebula-purple/50"
                >
                  {categoryOptions.filter(c => c.value !== 'all').map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.icon} {opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-white/60 mb-1.5">拍摄地点</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleFormChange('location', e.target.value)}
                  placeholder="例如：北京·密云"
                  className="w-full px-3 py-2.5 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-nebula-purple/50"
                />
              </div>
              <div>
                <label className="block text-[11px] text-white/60 mb-1.5">拍摄日期</label>
                <input
                  type="date"
                  value={formData.shootingDate}
                  onChange={(e) => handleFormChange('shootingDate', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm focus:outline-none focus:border-nebula-purple/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-white/60 mb-1.5">作品描述</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleFormChange('description', e.target.value)}
                placeholder="记录这次拍摄的经历和感受..."
                rows={3}
                className="w-full px-3 py-2.5 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-nebula-purple/50 resize-none"
              />
            </div>

            <div className="p-4 rounded-2xl bg-space-800/30 border border-white/5">
              <h4 className="text-[11px] font-display text-white/70 mb-3 flex items-center gap-1.5">
                <span>⚙️</span>
                <span>拍摄参数（可选）</span>
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { key: 'camera', label: '相机', placeholder: 'Sony A7R IV' },
                  { key: 'lens', label: '镜头', placeholder: 'Sigma 14mm f/1.8' },
                  { key: 'iso', label: 'ISO', placeholder: '3200' },
                  { key: 'aperture', label: '光圈', placeholder: 'f/1.8' },
                  { key: 'shutter', label: '快门', placeholder: '30s' },
                  { key: 'stackCount', label: '叠加张数', placeholder: '30' }
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-[9px] text-white/40 mb-1">{field.label}</label>
                    <input
                      type="text"
                      value={formData.metadata[field.key] || ''}
                      onChange={(e) => handleFormChange(`metadata.${field.key}`, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-2.5 py-2 rounded-lg bg-space-800/60 border border-white/10 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-nebula-purple/50"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-white/60 mb-1.5">标签</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddTag(e)}
                  placeholder="输入标签后按回车添加"
                  className="flex-1 px-3 py-2 rounded-lg bg-space-800/60 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-nebula-purple/50"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-3 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/15 transition-all"
                >
                  添加
                </button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 rounded-full bg-nebula-purple/20 text-nebula-cyan text-[10px] flex items-center gap-1"
                    >
                      #{tag}
                      <button
                        type="button"
                        onClick={(e) => handleRemoveTag(tag, e)}
                        className="hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setShowAddForm(false); setShowEditForm(false) }}
              className="flex-1 py-2.5 rounded-xl bg-white/5 text-white/60 text-sm hover:bg-white/10 transition-all"
            >
              取消
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white text-sm font-medium hover:shadow-lg hover:shadow-nebula-purple/30 transition-all"
            >
              {isEdit ? '保存修改' : '添加记录'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  const renderDeleteConfirm = () => (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-space-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-sm glass-panel p-6">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center text-3xl">
            🗑️
          </div>
          <h3 className="text-lg font-display text-white mb-2">确认删除？</h3>
          <p className="text-sm text-white/50 leading-relaxed">
            删除后将无法恢复，你确定要删除这张摄影作品吗？
          </p>
          {selectedPhoto && (
            <p className="text-xs text-white/40 mt-2">
              「{selectedPhoto.title}」
            </p>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={(e) => { e.stopPropagation(); setShowDeleteConfirm(false) }}
            className="flex-1 py-2.5 rounded-xl bg-white/5 text-white/60 text-sm hover:bg-white/10 transition-all"
          >
            取消
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleDeletePhoto() }}
            className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-all"
          >
            确认删除
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">
                <span className="text-gradient">星空摄影档案</span>
              </h2>
              <p className="text-xs text-white/50 mt-1">
                记录每一次与星空的邂逅，按季节与难度珍藏你的宇宙记忆
              </p>
            </div>
            <button
              onClick={handleBack}
              className="icon-btn"
              aria-label="关闭"
            >
              {showAddForm || showEditForm || showDeleteConfirm
                ? '✕'
                : activeGalleryPanel === 'detail'
                  ? '←'
                  : '✕'
              }
            </button>
          </div>

          {activeGalleryPanel !== 'detail' && !showAddForm && !showEditForm && !showDeleteConfirm && (
            <div className="mt-4 flex gap-2">
              {[
                { id: 'grid', label: '作品墙', icon: '🖼️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryPanel(tab.id)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${
                    activeGalleryPanel === tab.id
                      ? 'bg-white/10 text-white border border-white/10'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          {activeGalleryPanel === 'grid' && !showAddForm && !showEditForm && !showDeleteConfirm && renderGrid()}
          {activeGalleryPanel === 'detail' && !showAddForm && !showEditForm && !showDeleteConfirm && renderDetail()}
        </div>
      </div>

      {showAddForm && renderForm(false)}
      {showEditForm && renderForm(true)}
      {showDeleteConfirm && renderDeleteConfirm()}
    </div>
  )
}
