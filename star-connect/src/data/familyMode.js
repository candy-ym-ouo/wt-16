export const FAMILY_ROLES = {
  parent: {
    id: 'parent',
    name: '家长',
    icon: '👨‍👩‍👧',
    color: 'from-blue-500 to-cyan-400',
    description: '引导者，帮助孩子学习'
  },
  child: {
    id: 'child',
    name: '孩子',
    icon: '🧒',
    color: 'from-pink-500 to-orange-400',
    description: '探索者，在引导下发现星空'
  }
}

export const TASK_TYPES = {
  collaborative: {
    id: 'collaborative',
    name: '协作任务',
    icon: '🤝',
    description: '家长和孩子共同完成'
  },
  turn_based: {
    id: 'turn_based',
    name: '轮流任务',
    icon: '🔄',
    description: '家长和孩子轮流操作'
  },
  challenge: {
    id: 'challenge',
    name: 'PK挑战',
    icon: '⚔️',
    description: '亲子趣味竞赛'
  },
  guided: {
    id: 'guided',
    name: '引导任务',
    icon: '👆',
    description: '家长引导，孩子操作'
  }
}

export const FAMILY_TASKS = [
  {
    id: 'first_collaboration',
    name: '初次携手',
    type: 'collaborative',
    description: '家长和孩子一起完成第一个星座连线',
    icon: '⭐',
    difficulty: 1,
    target: { type: 'collaborative_complete', value: 1 },
    reward: { xp: 50, badge: 'first_together' },
    steps: [
      { role: 'parent', instruction: '请帮助孩子找到北斗七星的位置' },
      { role: 'child', instruction: '试着连接第一颗和第二颗星星' },
      { role: 'parent', instruction: '鼓励孩子继续完成剩下的连线' },
      { role: 'child', instruction: '独立完成剩余的星星连接' }
    ]
  },
  {
    id: 'story_time',
    name: '星座故事会',
    type: 'turn_based',
    description: '家长讲故事，孩子找星座',
    icon: '📖',
    difficulty: 1,
    target: { type: 'turn_complete', value: 3 },
    reward: { xp: 80, badge: 'story_teller' },
    steps: [
      { role: 'parent', instruction: '为孩子讲述猎户座的神话故事' },
      { role: 'child', instruction: '在星空中找到猎户座的腰带三星' },
      { role: 'parent', instruction: '继续讲述天蝎座的故事' },
      { role: 'child', instruction: '找到天蝎座中红色的心宿二' }
    ]
  },
  {
    id: 'constellation_quiz',
    name: '星空小测验',
    type: 'challenge',
    description: '亲子问答竞赛，看谁知道得多',
    icon: '🎯',
    difficulty: 2,
    target: { type: 'quiz_score', value: 80 },
    reward: { xp: 100, badge: 'quiz_master' },
    questions: [
      { q: '北斗七星属于哪个星座？', a: '大熊座', options: ['大熊座', '小熊座', '猎户座', '仙后座'] },
      { q: '猎户座中最红的星星叫什么？', a: '参宿四', options: ['参宿四', '参宿七', '心宿二', '织女星'] },
      { q: '哪个星座代表了一只蝎子？', a: '天蝎座', options: ['天蝎座', '猎户座', '天琴座', '天鹅座'] },
      { q: '织女星位于哪个星座？', a: '天琴座', options: ['天琴座', '天鹅座', '仙女座', '仙后座'] },
      { q: 'W形状的星座叫什么？', a: '仙后座', options: ['仙后座', '仙王座', '仙女座', '武仙座'] }
    ]
  },
  {
    id: 'find_the_pattern',
    name: '寻找图案',
    type: 'guided',
    description: '家长给出提示，孩子找出图案',
    icon: '🔍',
    difficulty: 2,
    target: { type: 'guided_complete', value: 3 },
    reward: { xp: 120, badge: 'pattern_finder' },
    challenges: [
      { hint: '寻找一个像勺子的图案', answer: 'ursa_major' },
      { hint: '寻找一个像猎人腰带的三颗星', answer: 'orion' },
      { hint: '寻找一个像W字母的形状', answer: 'cassiopeia' }
    ]
  },
  {
    id: 'season_explorer',
    name: '四季探索者',
    type: 'collaborative',
    description: '一起探索当前季节的所有星座',
    icon: '🌸',
    difficulty: 3,
    target: { type: 'season_discovery', value: 1 },
    reward: { xp: 200, badge: 'season_explorer' }
  },
  {
    id: 'mythology_master',
    name: '神话大师',
    type: 'turn_based',
    description: '轮流讲述每个星座的神话故事',
    icon: '🏛️',
    difficulty: 3,
    target: { type: 'mythology_told', value: 6 },
    reward: { xp: 300, badge: 'mythology_master' }
  },
  {
    id: 'perfect_team',
    name: '完美搭档',
    type: 'collaborative',
    description: '连续完美完成3个星座，零失误',
    icon: '💎',
    difficulty: 3,
    target: { type: 'perfect_streak', value: 3 },
    reward: { xp: 250, badge: 'perfect_team' }
  },
  {
    id: 'night_sky_guardians',
    name: '星空守护者',
    type: 'challenge',
    description: '连续7天亲子观星打卡',
    icon: '🛡️',
    difficulty: 4,
    target: { type: 'streak_days', value: 7 },
    reward: { xp: 500, badge: 'sky_guardians' }
  }
]

export const FAMILY_ACHIEVEMENTS = [
  {
    id: 'first_together',
    name: '携手起步',
    description: '完成第一次亲子协作星座连线',
    icon: '🤝',
    category: 'collaboration',
    color: 'from-blue-500 to-cyan-400',
    condition: { type: 'collaborative_complete', value: 1 }
  },
  {
    id: 'story_teller',
    name: '故事时光',
    description: '完成3次故事+探索的轮流任务',
    icon: '📖',
    category: 'collaboration',
    color: 'from-amber-500 to-orange-400',
    condition: { type: 'turn_complete', value: 3 }
  },
  {
    id: 'quiz_master',
    name: '问答达人',
    description: '在亲子测验中获得80分以上',
    icon: '🎯',
    category: 'challenge',
    color: 'from-red-500 to-pink-400',
    condition: { type: 'quiz_score', value: 80 }
  },
  {
    id: 'pattern_finder',
    name: '图案猎手',
    description: '完成3次引导寻星任务',
    icon: '🔍',
    category: 'guided',
    color: 'from-green-500 to-emerald-400',
    condition: { type: 'guided_complete', value: 3 }
  },
  {
    id: 'perfect_team',
    name: '完美搭档',
    description: '连续3次完美完成星座连线',
    icon: '💎',
    category: 'collaboration',
    color: 'from-purple-500 to-pink-400',
    condition: { type: 'perfect_streak', value: 3 }
  },
  {
    id: 'season_explorer',
    name: '四季探索者',
    description: '完整探索一个季节的所有星座',
    icon: '🌸',
    category: 'milestone',
    color: 'from-pink-500 to-rose-400',
    condition: { type: 'season_discovery', value: 1 }
  },
  {
    id: 'mythology_master',
    name: '神话传承者',
    description: '讲述完所有星座的神话故事',
    icon: '🏛️',
    category: 'milestone',
    color: 'from-yellow-500 to-amber-400',
    condition: { type: 'mythology_told', value: 6 }
  },
  {
    id: 'sky_guardians',
    name: '星空守护者',
    description: '连续7天亲子观星打卡',
    icon: '🛡️',
    category: 'milestone',
    color: 'from-indigo-500 to-purple-400',
    condition: { type: 'streak_days', value: 7 }
  },
  {
    id: 'family_bond',
    name: '家庭纽带',
    description: '累计亲子共学时长达到5小时',
    icon: '❤️',
    category: 'milestone',
    color: 'from-red-500 to-pink-400',
    condition: { type: 'total_minutes', value: 300 }
  },
  {
    id: 'little_astronomer',
    name: '小小天文学家',
    description: '孩子独立完成5个星座',
    icon: '🔭',
    category: 'child_growth',
    color: 'from-cyan-500 to-blue-400',
    condition: { type: 'child_independent', value: 5 }
  },
  {
    id: 'patient_guide',
    name: '耐心引导者',
    description: '家长成功引导完成10次任务',
    icon: '👨‍🏫',
    category: 'parent_growth',
    color: 'from-emerald-500 to-green-400',
    condition: { type: 'parent_guided', value: 10 }
  },
  {
    id: 'constellation_all_family',
    name: '全家观星大师',
    description: '亲子模式下发现所有星座',
    icon: '🌟',
    category: 'milestone',
    color: 'from-yellow-400 via-orange-400 to-red-400',
    condition: { type: 'family_discover_all', value: 6 }
  }
]

export const VOICE_CONTENT = {
  welcome: {
    parent: `欢迎来到星空亲子探索！我是你的星空向导。作为家长，你将引导孩子一起探索浩瀚星空。可以先从简单的星座开始，用讲故事的方式激发孩子的兴趣。`,
    child: `小朋友你好！我是星空小精灵！今天我们要一起去探索美丽的星空，寻找各种各样的星座。准备好了吗？让我们开始奇妙的星空之旅吧！`
  },
  constellations: {
    ursa_major: {
      story: `在很久很久以前，有一位美丽的狩猎女神叫卡利斯托。她被宙斯所爱，还生下了一个可爱的儿子。但是宙斯的妻子赫拉非常嫉妒，就把卡利斯托变成了一只大熊。后来，宙斯把他们母子都放到了天上，成为了大熊座和小熊座，永远在星空中相伴。你看，那七颗明亮的星星组成的大勺子，就是大熊座的尾巴哦！`,
      science: `大熊座是北半球最著名的星座之一。北斗七星其实只是大熊座的一部分。从天璇向天枢延伸5倍的距离，就能找到北极星，这可是古代航海家和旅行者的重要导航标志呢！`,
      tips: `先找到像勺子一样的北斗七星，然后沿着勺口两颗星的连线，延长5倍就能找到北极星啦！`
    },
    orion: {
      story: `奥利安是海神波塞冬的儿子，他是一位英勇的猎人，自称能杀死世上任何野兽。女神阿耳忒弥斯爱上了他，但她的哥哥阿波罗很不满，派了一只大蝎子去刺杀奥利安。经过激烈搏斗，奥利安被蝎子毒死了。宙斯把这位英勇的猎人升上了天界，成为了猎户座。而那只蝎子也变成了天蝎座，永远和猎户座相对，永不相见。`,
      science: `猎户座是冬季夜空中最壮观的星座。参宿四是一颗红超巨星，比太阳大得多，如果把它放到太阳的位置，它能把火星轨道都包含进去！猎户座大星云是一个巨大的恒星诞生区，那里正在孕育新的恒星。`,
      tips: `冬天面向南方，寻找三颗排成一条直线的亮星，那就是猎户的腰带！`
    },
    cassiopeia: {
      story: `卡西奥佩娅是埃塞俄比亚的王后，她非常美丽，但也很骄傲。她夸耀自己和女儿比海神的女儿们还要美丽，这激怒了海神。海神派海怪去袭击她的国家，为了平息神怒，王后只能把女儿绑在海边献祭。后来英雄珀耳修斯救了公主，但海神还是惩罚了王后，把她钉在天上永远旋转，让她有时头朝下，以示羞辱。`,
      science: `仙后座是拱极星座，全年都能看到。它的五颗亮星组成W或M形状，非常容易辨认。仙后座位于银河中，里面有很多美丽的星团和星云。`,
      tips: `在北极星的对面，寻找五颗亮星组成的W或M形状，那就是仙后座！`
    },
    scorpius: {
      story: `这就是那只被阿波罗派去刺杀猎人奥利安的大蝎子。它从地缝中钻出来，用毒刺刺中了奥利安的脚踝，导致他中毒身亡。宙斯把这只蝎子也升上了天界，成为天蝎座。为了让它们不再争斗，宙斯让它们永远位于天空的两端，天蝎座升起时，猎户座就会落下。`,
      science: `天蝎座是夏季夜空中最壮观的星座之一。心宿二是一颗红超巨星，它发出红色的光芒，就像蝎子跳动的心脏。天蝎座位于银河最明亮的区域，周围有很多美丽的星团。`,
      tips: `夏天的夜晚面向南方，寻找那颗红色的心宿二，那就是蝎子的心脏！`
    },
    lyra: {
      story: `俄耳甫斯是古希腊最伟大的音乐家，他的琴声能让飞鸟走兽甚至顽石都感动流泪。他的妻子不幸被毒蛇咬死，他带着竖琴深入冥界，用音乐打动了冥王。冥王允许他带妻子回去，但要求他走出冥界前不能回头。可惜在接近出口时，他忍不住回头看了一眼，妻子就永远消失了。后来宙斯把他的竖琴升上天界，成为了天琴座。`,
      science: `天琴座虽然小，但非常重要。织女星是它最亮的星，也是夏季大三角的顶点之一。织女星是除了太阳外，第一颗被人类拍摄下来的恒星。`,
      tips: `夏天寻找最亮的织女星，然后在它下方找四颗暗星组成的小平行四边形，那就是竖琴的形状！`
    },
    cygnus: {
      story: `宙斯为了接近美丽的斯巴达王后勒达，化身成为一只雪白优雅的天鹅。勒达被这只美丽的天鹅吸引，与它亲近。后来勒达生下了两枚鹅蛋，其中一枚孵出了引发特洛伊战争的绝世美女海伦。为了纪念这段故事，宙斯把他化身的天鹅升上天界，成为了天鹅座。`,
      science: `天鹅座又被称为"北十字"，因为它的五颗亮星组成一个优美的十字形。天津四是它最亮的星，也是夏季大三角的顶点之一。天鹅座位于银河中，就像一只在银河中展翅飞翔的天鹅。`,
      tips: `秋天在银河中寻找一个十字形的星群，那就是展翅飞翔的天鹅！`
    }
  },
  encouragement: {
    parent: [
      `太棒了！你引导得非常好，孩子学得很开心！`,
      `继续保持这种耐心，孩子会越来越热爱星空的！`,
      `你是一位很棒的星空引导者！`,
      `孩子的每一点进步都离不开你的引导！`
    ],
    child: [
      `哇！你真棒！居然找到了这个星座！`,
      `太厉害了！你是小小观星家！`,
      `继续加油，还有更多美丽的星座等着你去发现哦！`,
      `你做得非常好！让我们继续探索吧！`,
      `真聪明！你已经掌握了寻找星座的技巧！`
    ]
  }
}

export const getFamilyTaskById = (id) => FAMILY_TASKS.find(t => t.id === id)
export const getFamilyAchievementById = (id) => FAMILY_ACHIEVEMENTS.find(a => a.id === id)
export const getFamilyAchievementsByCategory = (category) => FAMILY_ACHIEVEMENTS.filter(a => a.category === category)
