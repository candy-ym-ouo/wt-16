import { CONSTELLATIONS, getConstellationById } from './constellations'
import { SEASONS, getCurrentSeason } from './seasonPlan'

export const DIFFICULTY_LABELS = {
  1: { label: '入门', icon: '⭐', color: 'from-green-500 to-emerald-400' },
  2: { label: '进阶', icon: '⭐⭐', color: 'from-blue-500 to-indigo-400' },
  3: { label: '挑战', icon: '⭐⭐⭐', color: 'from-purple-500 to-violet-400' }
}

export const GALLERY_CATEGORIES = {
  all: { id: 'all', label: '全部作品', icon: '📷' },
  landscape: { id: 'landscape', label: '星空风光', icon: '🏔️' },
  deepsky: { id: 'deepsky', label: '深空天体', icon: '🌌' },
  constellation: { id: 'constellation', label: '星座连线', icon: '✨' },
  planet: { id: 'planet', label: '行星摄影', icon: '🪐' },
  meteor: { id: 'meteor', label: '流星捕捉', icon: '☄️' }
}

export const DEFAULT_PHOTO_METADATA = {
  camera: '',
  lens: '',
  iso: '',
  aperture: '',
  shutter: '',
  focalLength: '',
  whiteBalance: '',
  stackCount: '',
  software: ''
}

const SEASON_CHINESE_MAP = {
  'spring': '春',
  'summer': '夏',
  'autumn': '秋',
  'winter': '冬'
}

const generateMockPhotos = () => {
  const mockPhotos = []
  const seasonKeys = ['spring', 'summer', 'autumn', 'winter']
  const categories = ['landscape', 'deepsky', 'constellation', 'planet', 'meteor']
  
  for (let i = 0; i < 12; i++) {
    const constellation = CONSTELLATIONS[i % CONSTELLATIONS.length]
    const seasonKey = seasonKeys[i % 4]
    const category = categories[i % categories.length]
    const isFeatured = i < 4
    
    const categoryDesc = category === 'landscape' 
      ? 'with mountain landscape foreground' 
      : category === 'deepsky' 
      ? 'deep space object nebula' 
      : category === 'constellation' 
      ? 'star constellation lines' 
      : category === 'planet' 
      ? 'planet solar system' 
      : category === 'meteor' 
      ? 'meteor shower' 
      : ''
    
    const imagePrompt = 'astrophotography of ' + constellation.nameEn + ' constellation in night sky, ' + categoryDesc + ', professional photography, high detail, cosmic colors'
    const thumbPrompt = 'astrophotography thumbnail of ' + constellation.nameEn + ', night sky'
    
    mockPhotos.push({
      id: 'photo_' + (i + 1),
      title: constellation.name + '之美',
      description: '在' + SEASONS[seasonKey].name + '的晴朗夜晚，成功捕捉到' + constellation.name + '的壮丽身影。' + constellation.description,
      constellationId: constellation.id,
      season: SEASON_CHINESE_MAP[seasonKey],
      difficulty: constellation.difficulty,
      category,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent(imagePrompt) + '&image_size=square_hd',
      thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent(thumbPrompt) + '&image_size=square',
      metadata: {
        ...DEFAULT_PHOTO_METADATA,
        camera: 'Sony A7R IV',
        lens: 'Sigma 14mm f/1.8',
        iso: '3200',
        aperture: 'f/1.8',
        shutter: '30s',
        stackCount: '30'
      },
      location: constellation.hemisphere + ' · 野外观测点',
      shootingDate: Date.now() - (i * 86400000 * 15),
      featured: isFeatured,
      featuredDate: isFeatured ? Date.now() - (i * 86400000 * 15) : null,
      likes: Math.floor(Math.random() * 100) + 10,
      views: Math.floor(Math.random() * 500) + 50,
      tags: [constellation.name, constellation.season, ...constellation.tags, category]
    })
  }
  return mockPhotos
}

export const INITIAL_GALLERY_PHOTOS = generateMockPhotos()

export function getGalleryStats(photos, discoveredConstellations, perfectObservations) {
  const totalPhotos = photos.length
  const featuredCount = photos.filter(p => p.featured).length
  const bySeason = {}
  const byDifficulty = {}
  const byCategory = {}
  
  Object.keys(SEASONS).forEach(seasonKey => {
    const seasonChar = SEASON_CHINESE_MAP[seasonKey]
    bySeason[seasonKey] = photos.filter(p => p.season === seasonChar).length
  })
  
  Object.keys(DIFFICULTY_LABELS).forEach(diff => {
    byDifficulty[diff] = photos.filter(p => p.difficulty === parseInt(diff)).length
  })
  
  Object.keys(GALLERY_CATEGORIES).forEach(cat => {
    if (cat !== 'all') {
      byCategory[cat] = photos.filter(p => p.category === cat).length
    }
  })
  
  const constellationCoverage = new Set(
    photos.filter(p => p.constellationId).map(p => p.constellationId)
  )
  
  const discoveredWithPhotos = [...constellationCoverage].filter(
    id => discoveredConstellations.includes(id)
  ).length
  
  return {
    totalPhotos,
    featuredCount,
    bySeason,
    byDifficulty,
    byCategory,
    constellationCoverage: constellationCoverage.size,
    discoveredWithPhotos,
    mostPhotographedSeason: Object.entries(bySeason).sort((a, b) => b[1] - a[1])[0]?.[0],
    mostPhotographedCategory: Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0]?.[0]
  }
}

export function filterGalleryPhotos(photos, filters = {}) {
  let result = [...photos]
  
  if (filters.season && filters.season !== 'all') {
    result = result.filter(p => p.season === filters.season)
  }
  
  if (filters.difficulty && filters.difficulty !== 'all') {
    result = result.filter(p => p.difficulty === parseInt(filters.difficulty))
  }
  
  if (filters.category && filters.category !== 'all') {
    result = result.filter(p => p.category === filters.category)
  }
  
  if (filters.constellationId) {
    result = result.filter(p => p.constellationId === filters.constellationId)
  }
  
  if (filters.featuredOnly) {
    result = result.filter(p => p.featured)
  }
  
  if (filters.search) {
    const query = filters.search.toLowerCase()
    result = result.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags?.some(t => t.toLowerCase().includes(query))
    )
  }
  
  if (filters.sortBy === 'newest') {
    result.sort((a, b) => b.shootingDate - a.shootingDate)
  } else if (filters.sortBy === 'oldest') {
    result.sort((a, b) => a.shootingDate - b.shootingDate)
  } else if (filters.sortBy === 'popular') {
    result.sort((a, b) => b.likes - a.likes)
  } else if (filters.sortBy === 'featured') {
    result.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return b.shootingDate - a.shootingDate
    })
  }
  
  return result
}

export function getPhotoById(photos, photoId) {
  return photos.find(p => p.id === photoId)
}

export function toggleFeatured(photos, photoId) {
  return photos.map(p =>
    p.id === photoId
      ? { ...p, featured: !p.featured, featuredDate: !p.featured ? Date.now() : null }
      : p
  )
}

export function addPhoto(photos, photoData) {
  const constellation = photoData.constellationId
    ? getConstellationById(photoData.constellationId)
    : null
  
  const newPhoto = {
    id: `photo_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    title: photoData.title || '未命名作品',
    description: photoData.description || '',
    constellationId: photoData.constellationId || null,
    season: constellation?.season || getSeasonByDate(photoData.shootingDate),
    difficulty: constellation?.difficulty || 1,
    category: photoData.category || 'landscape',
    imageUrl: photoData.imageUrl,
    thumbnailUrl: photoData.thumbnailUrl || photoData.imageUrl,
    metadata: { ...DEFAULT_PHOTO_METADATA, ...photoData.metadata },
    location: photoData.location || '',
    shootingDate: photoData.shootingDate || Date.now(),
    featured: false,
    featuredDate: null,
    likes: 0,
    views: 0,
    tags: photoData.tags || []
  }
  
  return [newPhoto, ...photos]
}

export function updatePhoto(photos, photoId, updates) {
  return photos.map(p =>
    p.id === photoId ? { ...p, ...updates } : p
  )
}

export function deletePhoto(photos, photoId) {
  return photos.filter(p => p.id !== photoId)
}

function getSeasonByDate(date) {
  const d = new Date(date || Date.now())
  const month = d.getMonth()
  if (month >= 2 && month <= 4) return '春'
  if (month >= 5 && month <= 7) return '夏'
  if (month >= 8 && month <= 10) return '秋'
  return '冬'
}

