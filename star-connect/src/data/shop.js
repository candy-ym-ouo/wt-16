export const SHOP_CATEGORIES = {
  items: { id: 'items', name: '道具', icon: '🎒', description: '实用的观星道具' },
  skins: { id: 'skins', name: '皮肤', icon: '🎨', description: '个性化主题皮肤' },
  decorations: { id: 'decorations', name: '装饰', icon: '✨', description: '装扮你的星空' }
}

export const SHOP_ITEMS = [
  {
    id: 'stardust_bonus_small',
    name: '星尘礼包·小',
    description: '立即获得50星尘',
    icon: '💫',
    category: 'items',
    price: 0,
    priceType: 'free',
    type: 'consumable',
    effect: { type: 'stardust', amount: 50 },
    maxStack: 99,
    rarity: 'common'
  },
  {
    id: 'stardust_bonus_medium',
    name: '星尘礼包·中',
    description: '立即获得200星尘',
    icon: '🌟',
    category: 'items',
    price: 0,
    priceType: 'free',
    type: 'consumable',
    effect: { type: 'stardust', amount: 200 },
    maxStack: 99,
    rarity: 'rare'
  },
  {
    id: 'hints_scroll',
    name: '提示卷轴',
    description: '使用后在下次连线中显示一条提示',
    icon: '📜',
    category: 'items',
    price: 30,
    priceType: 'stardust',
    type: 'consumable',
    effect: { type: 'hint', amount: 1 },
    maxStack: 20,
    rarity: 'common'
  },
  {
    id: 'perfect_charm',
    name: '完美护符',
    description: '使用后下次观测自动判定为完美',
    icon: '🔮',
    category: 'items',
    price: 80,
    priceType: 'stardust',
    type: 'consumable',
    effect: { type: 'perfect_charm', amount: 1 },
    maxStack: 10,
    rarity: 'rare'
  },
  {
    id: 'double_xp_potion',
    name: '双倍星尘药剂',
    description: '30分钟内获得的星尘翻倍',
    icon: '🧪',
    category: 'items',
    price: 120,
    priceType: 'stardust',
    type: 'consumable',
    effect: { type: 'double_stardust', duration: 1800000 },
    maxStack: 5,
    rarity: 'rare'
  },
  {
    id: 'constellation_map',
    name: '星座图',
    description: '解锁隐藏星座线索（一次性）',
    icon: '🗺️',
    category: 'items',
    price: 200,
    priceType: 'stardust',
    type: 'consumable',
    effect: { type: 'unlock_hint', amount: 1 },
    maxStack: 3,
    rarity: 'epic'
  }
]

export const SHOP_SKINS = [
  {
    id: 'skin_default',
    name: '经典深空',
    description: '深邃的宇宙夜空，最初的陪伴',
    icon: '🌌',
    category: 'skins',
    price: 0,
    priceType: 'free',
    type: 'skin',
    skinClass: 'skin-default',
    colors: {
      bg: '#05060f',
      star: '#ffffff',
      accent: '#6b5bff',
      glow: 'rgba(107, 91, 255, 0.5)'
    },
    rarity: 'common',
    default: true
  },
  {
    id: 'skin_sunset',
    name: '暮光余晖',
    description: '暖橙色的黄昏星空，温暖而浪漫',
    icon: '🌅',
    category: 'skins',
    price: 150,
    priceType: 'stardust',
    type: 'skin',
    skinClass: 'skin-sunset',
    colors: {
      bg: '#1a0f1a',
      star: '#ffccaa',
      accent: '#ff8a5b',
      glow: 'rgba(255, 138, 91, 0.5)'
    },
    rarity: 'rare'
  },
  {
    id: 'skin_ocean',
    name: '深海星辰',
    description: '碧蓝的海底星空，宁静而神秘',
    icon: '🌊',
    category: 'skins',
    price: 180,
    priceType: 'stardust',
    type: 'skin',
    skinClass: 'skin-ocean',
    colors: {
      bg: '#051520',
      star: '#8ec5ff',
      accent: '#4ff0d9',
      glow: 'rgba(79, 240, 217, 0.5)'
    },
    rarity: 'rare'
  },
  {
    id: 'skin_forest',
    name: '林间萤火',
    description: '森林中的萤火虫之光，生机盎然',
    icon: '🌲',
    category: 'skins',
    price: 200,
    priceType: 'stardust',
    type: 'skin',
    skinClass: 'skin-forest',
    colors: {
      bg: '#0a1a0f',
      star: '#aaffaa',
      accent: '#7fff7f',
      glow: 'rgba(127, 255, 127, 0.5)'
    },
    rarity: 'rare'
  },
  {
    id: 'skin_rose',
    name: '玫瑰星云',
    description: '浪漫的粉紫色星空，如梦如幻',
    icon: '🌹',
    category: 'skins',
    price: 300,
    priceType: 'stardust',
    type: 'skin',
    skinClass: 'skin-rose',
    colors: {
      bg: '#150815',
      star: '#ffb3de',
      accent: '#ff6bb5',
      glow: 'rgba(255, 107, 181, 0.5)'
    },
    rarity: 'epic'
  },
  {
    id: 'skin_galaxy',
    name: '银河璀璨',
    description: '绚丽的银河色彩，星光闪耀',
    icon: '✨',
    category: 'skins',
    price: 500,
    priceType: 'stardust',
    type: 'skin',
    skinClass: 'skin-galaxy',
    colors: {
      bg: '#0a0a1f',
      star: '#ffd700',
      accent: '#ffd700',
      glow: 'rgba(255, 215, 0, 0.6)'
    },
    rarity: 'legendary'
  },
  {
    id: 'skin_aurora',
    name: '极光幻境',
    description: '北极光般变幻的色彩，神秘莫测',
    icon: '🌈',
    category: 'skins',
    price: 600,
    priceType: 'stardust',
    type: 'skin',
    skinClass: 'skin-aurora',
    colors: {
      bg: '#051015',
      star: '#aaffee',
      accent: '#66ffcc',
      glow: 'rgba(102, 255, 204, 0.5)'
    },
    rarity: 'legendary'
  }
]

export const SHOP_DECORATIONS = [
  {
    id: 'deco_shooting_star',
    name: '流星效果',
    description: '夜空中偶尔划过的流星',
    icon: '☄️',
    category: 'decorations',
    price: 100,
    priceType: 'stardust',
    type: 'decoration',
    decorationType: 'shooting_star',
    rarity: 'rare'
  },
  {
    id: 'deco_firefly',
    name: '萤火虫粒子',
    description: '漂浮的萤火虫光点',
    icon: '🪲',
    category: 'decorations',
    price: 120,
    priceType: 'stardust',
    type: 'decoration',
    decorationType: 'firefly',
    rarity: 'rare'
  },
  {
    id: 'deco_nebula',
    name: '星云背景',
    description: '绚丽的星云云雾效果',
    icon: '🌫️',
    category: 'decorations',
    price: 250,
    priceType: 'stardust',
    type: 'decoration',
    decorationType: 'nebula',
    rarity: 'epic'
  },
  {
    id: 'deco_constellation_glow',
    name: '星座光晕',
    description: '已发现星座发出柔和光芒',
    icon: '💫',
    category: 'decorations',
    price: 350,
    priceType: 'stardust',
    type: 'decoration',
    decorationType: 'constellation_glow',
    rarity: 'epic'
  }
]

export const ALL_SHOP_ITEMS = [...SHOP_ITEMS, ...SHOP_SKINS, ...SHOP_DECORATIONS]

export const RARITY_COLORS = {
  common: { bg: 'bg-gray-500/20', border: 'border-gray-400/30', text: 'text-gray-300', label: '普通' },
  rare: { bg: 'bg-blue-500/20', border: 'border-blue-400/30', text: 'text-blue-300', label: '稀有' },
  epic: { bg: 'bg-purple-500/20', border: 'border-purple-400/30', text: 'text-purple-300', label: '史诗' },
  legendary: { bg: 'bg-yellow-500/20', border: 'border-yellow-400/30', text: 'text-yellow-300', label: '传说' }
}

export const getShopItemById = (id) => ALL_SHOP_ITEMS.find(item => item.id === id)

export const getShopItemsByCategory = (category) => ALL_SHOP_ITEMS.filter(item => item.category === category)
