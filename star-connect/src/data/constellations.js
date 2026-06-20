export const CONSTELLATIONS = [
  {
    id: 'ursa_major',
    name: '大熊座',
    nameEn: 'Ursa Major',
    difficulty: 1,
    description: '北斗七星所在的著名星座，是寻找北极星的重要参照。',
    mythology: '宙斯将美丽的卡利斯托变成熊，后升上天成为大熊座。',
    stars: [
      { id: 'um1', name: '天枢', x: -4.2, y: 1.8, z: 0, mag: 1.8, color: '#ffddaa' },
      { id: 'um2', name: '天璇', x: -3.5, y: 1.2, z: 0, mag: 2.4, color: '#ffeecc' },
      { id: 'um3', name: '天玑', x: -2.0, y: 1.5, z: 0, mag: 2.5, color: '#ffffff' },
      { id: 'um4', name: '天权', x: -1.2, y: 0.8, z: 0, mag: 3.3, color: '#ddeeff' },
      { id: 'um5', name: '玉衡', x: 0.0, y: 1.0, z: 0, mag: 1.8, color: '#ffeecc' },
      { id: 'um6', name: '开阳', x: 1.3, y: 1.3, z: 0, mag: 2.3, color: '#ffffff' },
      { id: 'um7', name: '摇光', x: 2.6, y: 1.8, z: 0, mag: 1.9, color: '#cce4ff' }
    ],
    connections: [
      ['um1', 'um2'], ['um2', 'um3'], ['um3', 'um4'], ['um4', 'um5'],
      ['um5', 'um6'], ['um6', 'um7'], ['um4', 'um3']
    ],
    season: '春',
    center: { x: -0.5, y: 1.3 }
  },
  {
    id: 'orion',
    name: '猎户座',
    nameEn: 'Orion',
    difficulty: 1,
    description: '冬季最耀眼的星座之一，腰带三星是显著标志。',
    mythology: '海神波塞冬之子，英勇的猎人奥利安被蝎子毒死后升上天。',
    stars: [
      { id: 'o1', name: '参宿四', x: -2.5, y: 2.0, z: 0, mag: 0.5, color: '#ff8866' },
      { id: 'o2', name: '参宿五', x: 2.2, y: 2.0, z: 0, mag: 1.6, color: '#cce0ff' },
      { id: 'o3', name: '参宿一', x: -1.8, y: 0.0, z: 0, mag: 2.0, color: '#ddeeff' },
      { id: 'o4', name: '参宿二', x: 0.0, y: -0.1, z: 0, mag: 1.7, color: '#ffffff' },
      { id: 'o5', name: '参宿三', x: 1.8, y: -0.2, z: 0, mag: 2.2, color: '#bbddee' },
      { id: 'o6', name: '参宿七', x: -1.5, y: -2.0, z: 0, mag: 0.1, color: '#aaccff' },
      { id: 'o7', name: '参宿六', x: 1.5, y: -2.2, z: 0, mag: 2.8, color: '#ffccaa' },
      { id: 'o8', name: '猎户星云', x: 0.0, y: -1.2, z: 0, mag: 5.0, color: '#ff99cc' }
    ],
    connections: [
      ['o1', 'o3'], ['o1', 'o2'], ['o2', 'o5'],
      ['o3', 'o4'], ['o4', 'o5'],
      ['o3', 'o6'], ['o5', 'o7'],
      ['o4', 'o8']
    ],
    season: '冬',
    center: { x: 0, y: 0 }
  },
  {
    id: 'cassiopeia',
    name: '仙后座',
    nameEn: 'Cassiopeia',
    difficulty: 2,
    description: '呈W形排列的星座，位于北极星对面的天空。',
    mythology: '埃塞俄比亚王后卡西奥佩娅因炫耀美貌被钉在天上永远旋转。',
    stars: [
      { id: 'c1', name: '王良一', x: -3.0, y: 1.0, z: 0, mag: 2.5, color: '#ffffff' },
      { id: 'c2', name: '王良四', x: -1.5, y: 2.2, z: 0, mag: 2.3, color: '#ffddbb' },
      { id: 'c3', name: '策', x: 0.0, y: 0.8, z: 0, mag: 2.2, color: '#eeddcc' },
      { id: 'c4', name: '王良三', x: 1.5, y: 2.0, z: 0, mag: 2.7, color: '#ccddff' },
      { id: 'c5', name: '王良二', x: 3.0, y: 0.5, z: 0, mag: 3.0, color: '#ffffff' }
    ],
    connections: [
      ['c1', 'c2'], ['c2', 'c3'], ['c3', 'c4'], ['c4', 'c5']
    ],
    season: '秋',
    center: { x: 0, y: 1.3 }
  },
  {
    id: 'scorpius',
    name: '天蝎座',
    nameEn: 'Scorpius',
    difficulty: 2,
    description: '夏季南方天空中的宏伟星座，心宿二是红色超巨星。',
    mythology: '杀死猎人奥利安的大蝎子，因此与猎户座永远相对出现。',
    stars: [
      { id: 's1', name: '房宿四', x: -2.0, y: -1.0, z: 0, mag: 2.6, color: '#ffeecc' },
      { id: 's2', name: '房宿三', x: -1.0, y: -0.5, z: 0, mag: 2.3, color: '#ccdeff' },
      { id: 's3', name: '心宿二', x: 0.0, y: 0.0, z: 0, mag: 1.0, color: '#ff5533' },
      { id: 's4', name: '心宿三', x: 1.0, y: 0.3, z: 0, mag: 2.9, color: '#ffeedd' },
      { id: 's5', name: '尾宿一', x: 1.8, y: -0.2, z: 0, mag: 2.7, color: '#bbeecc' },
      { id: 's6', name: '尾宿二', x: 2.4, y: 0.5, z: 0, mag: 2.8, color: '#ccddff' },
      { id: 's7', name: '尾宿八', x: 2.8, y: 1.2, z: 0, mag: 2.4, color: '#ffffff' },
      { id: 's8', name: '尾宿九', x: 3.2, y: 0.4, z: 0, mag: 1.6, color: '#ddeeff' }
    ],
    connections: [
      ['s1', 's2'], ['s2', 's3'], ['s3', 's4'], ['s4', 's5'],
      ['s5', 's6'], ['s6', 's7'], ['s7', 's8'], ['s6', 's8']
    ],
    season: '夏',
    center: { x: 0.6, y: 0.2 }
  },
  {
    id: 'lyra',
    name: '天琴座',
    nameEn: 'Lyra',
    difficulty: 3,
    description: '织女星所在的小而优雅的星座，夏季大三角之一。',
    mythology: '俄耳甫斯的竖琴，他的音乐能让万物驻足聆听。',
    stars: [
      { id: 'l1', name: '织女一', x: 0.0, y: 2.0, z: 0, mag: 0.0, color: '#aaddff' },
      { id: 'l2', name: '渐台二', x: -1.0, y: 0.5, z: 0, mag: 4.3, color: '#ffddcc' },
      { id: 'l3', name: '渐台三', x: -0.5, y: 0.0, z: 0, mag: 4.3, color: '#ffeecc' },
      { id: 'l4', name: '渐台一', x: 0.5, y: 0.0, z: 0, mag: 4.7, color: '#ffffff' },
      { id: 'l5', name: '渐台四', x: 1.0, y: 0.5, z: 0, mag: 5.1, color: '#ccddee' }
    ],
    connections: [
      ['l1', 'l2'], ['l1', 'l5'],
      ['l2', 'l3'], ['l3', 'l4'], ['l4', 'l5'], ['l2', 'l4']
    ],
    season: '夏',
    center: { x: 0, y: 0.8 }
  },
  {
    id: 'cygnus',
    name: '天鹅座',
    nameEn: 'Cygnus',
    difficulty: 3,
    description: '银河中展翅飞翔的天鹅，又称"北十字"。',
    mythology: '宙斯化身天鹅接近斯巴达王后勒达，美丽的天鹅升上天界。',
    stars: [
      { id: 'cy1', name: '天津四', x: 0.0, y: 2.5, z: 0, mag: 1.3, color: '#ddeeff' },
      { id: 'cy2', name: '天津九', x: -1.2, y: 1.0, z: 0, mag: 2.9, color: '#ffeecc' },
      { id: 'cy3', name: '辇道增七', x: 0.0, y: 0.5, z: 0, mag: 3.2, color: '#ffccaa' },
      { id: 'cy4', name: '天津一', x: 1.2, y: 1.0, z: 0, mag: 2.9, color: '#ffffff' },
      { id: 'cy5', name: '天津二', x: -1.8, y: 0.0, z: 0, mag: 4.0, color: '#ddeeff' },
      { id: 'cy6', name: '奚仲四', x: 0.0, y: -1.5, z: 0, mag: 2.5, color: '#ffeecc' },
      { id: 'cy7', name: '天津八', x: 1.8, y: 0.0, z: 0, mag: 3.7, color: '#ccddee' }
    ],
    connections: [
      ['cy1', 'cy3'], ['cy3', 'cy6'],
      ['cy2', 'cy3'], ['cy3', 'cy4'],
      ['cy2', 'cy5'], ['cy4', 'cy7']
    ],
    season: '秋',
    center: { x: 0, y: 0.5 }
  }
]

export const getConstellationById = (id) => 
  CONSTELLATIONS.find(c => c.id === id)

export const getStarsByConstellationId = (id) => 
  getConstellationById(id)?.stars || []
