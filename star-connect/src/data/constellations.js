export const CONSTELLATIONS = [
  {
    id: 'ursa_major',
    name: '大熊座',
    nameEn: 'Ursa Major',
    difficulty: 1,
    description: '北斗七星所在的著名星座，是寻找北极星的重要参照。',
    mythology: '宙斯将美丽的卡利斯托变成熊，后升上天成为大熊座。',
    mythologyDetail: '在古希腊神话中，卡利斯托是一位美丽的狩猎女神，被宙斯所爱并生下儿子阿卡斯。宙斯的妻子赫拉因嫉妒，将卡利斯托变成了一只大熊。多年后，阿卡斯在狩猎时遇到了变成熊的母亲，为了避免悲剧，宙斯将他们母子一同升上天界，成为大熊座和小熊座，永远在星空中相伴。',
    observationTips: '春季夜晚最为明显，北斗七星的勺口两颗星连线延长5倍即可找到北极星。',
    bestTime: '春季3-5月，晚间21:00-23:00',
    hemisphere: '北半球',
    area: '1280平方度',
    ranking: 3,
    storyChapterId: 'spring_ursa_major',
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
    center: { x: -0.5, y: 1.3 },
    tags: ['北斗七星', '北极星', '导航'],
    seasonRecommendation: {
      bestSeason: 'spring',
      visibility: {
        spring: { level: 'excellent', desc: '春季是观测大熊座的最佳季节，北斗七星高悬于北方天空，整夜可见。' },
        summer: { level: 'good', desc: '夏季大熊座偏向西北方，前半夜观测效果较好。' },
        autumn: { level: 'moderate', desc: '秋季大熊座位于北方低空，观测条件一般。' },
        winter: { level: 'poor', desc: '冬季大熊座靠近地平线，难以完整观测。' }
      },
      observationAdvice: [
        { type: 'location', title: '观测地点', content: '选择北方地平线开阔的地点，避免高山或建筑物遮挡。' },
        { type: 'equipment', title: '推荐装备', content: '入门级双筒望远镜即可观测开阳双星，肉眼也能轻松找到北斗七星。' },
        { type: 'tip', title: '观测技巧', content: '利用勺口两颗星（天枢、天璇）连线延长5倍找到北极星，这是天文导航的基础。' }
      ],
      relatedConstellations: ['小熊座', '天龙座', '牧夫座']
    }
  },
  {
    id: 'orion',
    name: '猎户座',
    nameEn: 'Orion',
    difficulty: 1,
    description: '冬季最耀眼的星座之一，腰带三星是显著标志。',
    mythology: '海神波塞冬之子，英勇的猎人奥利安被蝎子毒死后升上天。',
    mythologyDetail: '奥利安是海神波塞冬与欧律阿勒之子，他拥有非凡的力量和英俊的外表，自称能杀死世上任何野兽。女神阿耳忒弥斯爱上了他，但她的哥哥阿波罗对此不满。阿波罗派出一只巨大的蝎子去刺杀奥利安，经过激烈搏斗，奥利安被蝎子毒刺杀死。宙斯将这位英勇的猎人升上天界，成为猎户座，而那只蝎子也成为天蝎座，永远与猎户座相对，永不相见。',
    observationTips: '冬季夜晚面向南方，三颗明亮的星星整齐排列成腰带，这是猎户座最显著的标志。',
    bestTime: '冬季12-2月，晚间20:00-22:00',
    hemisphere: '南北半球均可见',
    area: '594平方度',
    ranking: 26,
    storyChapterId: 'winter_orion',
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
    center: { x: 0, y: 0 },
    tags: ['猎户星云', '红超巨星', '冬季'],
    seasonRecommendation: {
      bestSeason: 'winter',
      visibility: {
        spring: { level: 'poor', desc: '春季猎户座仅在黄昏时分短暂出现在西方低空，不易观测。' },
        summer: { level: 'poor', desc: '夏季猎户座完全不可见，位于太阳附近。' },
        autumn: { level: 'moderate', desc: '秋季猎户座在后半夜从东方升起，观测条件逐渐改善。' },
        winter: { level: 'excellent', desc: '冬季是观测猎户座的最佳季节，它高悬于南方天空，整夜可见，是冬季星空中最耀眼的星座。' }
      },
      observationAdvice: [
        { type: 'location', title: '观测地点', content: '选择南方地平线开阔的地点，冬季面向南方即可轻松找到。' },
        { type: 'equipment', title: '推荐装备', content: '肉眼可见猎户座全貌，双筒望远镜可观测猎户星云（M42）的细节。' },
        { type: 'tip', title: '观测技巧', content: '先找到腰带三星（参宿一、二、三），这是猎户座最显著的标志，向上找到参宿四，向下找到参宿七。' }
      ],
      relatedConstellations: ['大犬座', '小犬座', '金牛座', '双子座']
    }
  },
  {
    id: 'cassiopeia',
    name: '仙后座',
    nameEn: 'Cassiopeia',
    difficulty: 2,
    description: '呈W形排列的星座，位于北极星对面的天空。',
    mythology: '埃塞俄比亚王后卡西奥佩娅因炫耀美貌被钉在天上永远旋转。',
    mythologyDetail: '卡西奥佩娅是埃塞俄比亚国王克甫斯的王后，她因自恃美貌，夸耀自己和女儿安德洛墨达比海神涅柔斯的女儿们更美丽。愤怒的海神派海怪刻托袭击埃塞俄比亚海岸。为了平息神怒，国王被迫将女儿安德洛墨达绑在海边献祭。幸好英雄珀耳修斯路过，杀死海怪救下公主。事后，海神仍惩罚卡西奥佩娅，将她钉在天上的宝座上永远旋转，让她有时头朝下，以示羞辱。',
    observationTips: '秋季夜晚靠近北极星的位置，寻找五颗亮星组成的W或M形状。',
    bestTime: '秋季9-11月，晚间21:00-23:00',
    hemisphere: '北半球',
    area: '598平方度',
    ranking: 25,
    storyChapterId: 'autumn_cassiopeia',
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
    center: { x: 0, y: 1.3 },
    tags: ['W形', '拱极星座', '王后'],
    seasonRecommendation: {
      bestSeason: 'autumn',
      visibility: {
        spring: { level: 'moderate', desc: '春季仙后座位于东北方天空，后半夜观测效果较好。' },
        summer: { level: 'good', desc: '夏季仙后座高悬于北方天空，整夜可见，观测条件良好。' },
        autumn: { level: 'excellent', desc: '秋季是观测仙后座的最佳季节，它高悬于北方天空，W形非常明显。' },
        winter: { level: 'good', desc: '冬季仙后座位于西北方天空，前半夜观测效果较好。' }
      },
      observationAdvice: [
        { type: 'location', title: '观测地点', content: '选择北方天空开阔的地点，仙后座是拱极星座，常年可见。' },
        { type: 'equipment', title: '推荐装备', content: '肉眼即可观测，双筒望远镜可看到更多暗星。' },
        { type: 'tip', title: '观测技巧', content: '仙后座与北斗七星分别位于北极星两侧，可以先找到北极星，再向对面寻找W形的仙后座。' }
      ],
      relatedConstellations: ['仙王座', '仙女座', '英仙座', '飞马座']
    }
  },
  {
    id: 'scorpius',
    name: '天蝎座',
    nameEn: 'Scorpius',
    difficulty: 2,
    description: '夏季南方天空中的宏伟星座，心宿二是红色超巨星。',
    mythology: '杀死猎人奥利安的大蝎子，因此与猎户座永远相对出现。',
    mythologyDetail: '这只巨大的蝎子是阿波罗派去刺杀猎人奥利安的。奥利安因自负而自称能杀死世上任何野兽，这激怒了众神。蝎子从地缝中钻出，用毒刺刺中奥利安的脚踝，导致他中毒身亡。为了纪念这场战斗，宙斯将蝎子升上天界成为天蝎座。由于奥利安和蝎子是天敌，宙斯让它们永远位于天空的两端，天蝎座升起时猎户座就会落下，永不相见，避免它们在天界继续争斗。',
    observationTips: '夏季夜晚面向南方，寻找红色的心宿二（天蝎的心脏），然后沿着弯曲的星链寻找蝎子的尾巴。',
    bestTime: '夏季6-8月，晚间21:00-23:00',
    hemisphere: '南半球更易观测，北半球夏季可见',
    area: '497平方度',
    ranking: 33,
    storyChapterId: 'summer_scorpius',
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
    center: { x: 0.6, y: 0.2 },
    tags: ['心宿二', '红超巨星', '夏季大三角'],
    seasonRecommendation: {
      bestSeason: 'summer',
      visibility: {
        spring: { level: 'poor', desc: '春季天蝎座仅在黎明前短暂出现在东方低空，难以观测。' },
        summer: { level: 'excellent', desc: '夏季是观测天蝎座的最佳季节，它高悬于南方天空，心宿二的红色非常醒目。' },
        autumn: { level: 'moderate', desc: '秋季天蝎座在前半夜向西南方移动，观测时间逐渐缩短。' },
        winter: { level: 'poor', desc: '冬季天蝎座完全不可见，位于太阳附近。' }
      },
      observationAdvice: [
        { type: 'location', title: '观测地点', content: '选择南方地平线开阔的地点，尽量避开城市光污染。' },
        { type: 'equipment', title: '推荐装备', content: '肉眼可观测天蝎座主体，双筒望远镜可欣赏心宿二的红色和疏散星团M6、M7。' },
        { type: 'tip', title: '观测技巧', content: '先找到红色的心宿二（天蝎的心脏），然后沿着弯曲的星链向南寻找蝎子的尾巴，尾尖是尾宿八和尾宿九。' }
      ],
      relatedConstellations: ['人马座', '天秤座', '蛇夫座', '豺狼座']
    }
  },
  {
    id: 'lyra',
    name: '天琴座',
    nameEn: 'Lyra',
    difficulty: 3,
    description: '织女星所在的小而优雅的星座，夏季大三角之一。',
    mythology: '俄耳甫斯的竖琴，他的音乐能让万物驻足聆听。',
    mythologyDetail: '俄耳甫斯是古希腊最伟大的音乐家，他的琴声能使飞鸟走兽、甚至顽石流泪。他的妻子欧律狄刻不幸被毒蛇咬死，悲痛欲绝的俄耳甫斯带着竖琴深入冥界，用动人的音乐打动了冥王哈迪斯和冥后珀耳塞福涅。冥王允许他带妻子回到人间，但要求他在走出冥界前不得回头看妻子。不幸的是，在接近出口时，俄耳甫斯忍不住回头看了一眼，妻子就此永远消失。俄耳甫斯死后，宙斯将他的竖琴升上天界，成为天琴座。',
    observationTips: '夏季夜晚寻找最亮的织女星，然后在其下方寻找由四颗暗星组成的小平行四边形。',
    bestTime: '夏季6-8月，晚间21:00-23:00',
    hemisphere: '北半球',
    area: '286平方度',
    ranking: 52,
    storyChapterId: 'summer_lyra',
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
    center: { x: 0, y: 0.8 },
    tags: ['织女星', '竖琴', '夏季大三角', '神话'],
    seasonRecommendation: {
      bestSeason: 'summer',
      visibility: {
        spring: { level: 'poor', desc: '春季天琴座仅在黎明前出现在东北方低空，观测条件不佳。' },
        summer: { level: 'excellent', desc: '夏季是观测天琴座的最佳季节，织女星是全天第五亮星，高悬于天顶附近。' },
        autumn: { level: 'good', desc: '秋季天琴座向西移动，前半夜仍可观测，是秋季星空的重要标志。' },
        winter: { level: 'poor', desc: '冬季天琴座位于北方低空，难以完整观测。' }
      },
      observationAdvice: [
        { type: 'location', title: '观测地点', content: '选择天顶附近视野开阔的地点，夏季织女星非常明亮，容易找到。' },
        { type: 'equipment', title: '推荐装备', content: '肉眼可看到织女星和小平行四边形，小型望远镜可观测织女星附近的环状星云M57。' },
        { type: 'tip', title: '观测技巧', content: '织女星是夏季大三角的顶点之一，与牛郎星（天鹰座）、天津四（天鹅座）组成著名的夏季大三角。' }
      ],
      relatedConstellations: ['天鹰座', '天鹅座', '武仙座', '天龙座']
    }
  },
  {
    id: 'cygnus',
    name: '天鹅座',
    nameEn: 'Cygnus',
    difficulty: 3,
    description: '银河中展翅飞翔的天鹅，又称"北十字"。',
    mythology: '宙斯化身天鹅接近斯巴达王后勒达，美丽的天鹅升上天界。',
    mythologyDetail: '宙斯为了接近美丽的斯巴达王后勒达，化身成为一只雪白优雅的天鹅。勒达被这只美丽的天鹅吸引，与它亲近。后来勒达生下了两枚鹅蛋，一枚孵出了海伦（后来引发特洛伊战争的绝世美女）和卡斯托尔，另一枚孵出了波吕丢刻斯和克吕泰涅斯特拉。为了纪念这段故事，宙斯将他化身的天鹅升上天界，成为天鹅座。天鹅座位于银河之中，展翅飞翔，其主体的五颗亮星构成一个优美的十字形，因此也被称为"北十字"。',
    observationTips: '秋季夜晚，在银河中寻找一个十字形的星群，最上方的亮星是天津四，与织女星、牛郎星组成夏季大三角。',
    bestTime: '秋季9-11月，晚间21:00-23:00',
    hemisphere: '北半球',
    area: '804平方度',
    ranking: 16,
    storyChapterId: 'autumn_cygnus',
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
    center: { x: 0, y: 0.5 },
    tags: ['北十字', '银河', '夏季大三角', '天津四'],
    seasonRecommendation: {
      bestSeason: 'autumn',
      visibility: {
        spring: { level: 'poor', desc: '春季天鹅座仅在黎明前出现在东北方低空，观测条件不佳。' },
        summer: { level: 'good', desc: '夏季天鹅座从东方升起，是夏季大三角的顶点之一，后半夜观测效果好。' },
        autumn: { level: 'excellent', desc: '秋季是观测天鹅座的最佳季节，它高悬于银河之中，北十字形状非常明显。' },
        winter: { level: 'moderate', desc: '冬季天鹅座位于西北方天空，前半夜还能看到，观测时间逐渐缩短。' }
      },
      observationAdvice: [
        { type: 'location', title: '观测地点', content: '选择银河附近视野开阔的地点，夏秋季节是观测银河的好时机。' },
        { type: 'equipment', title: '推荐装备', content: '肉眼可看到北十字的主要亮星，双筒望远镜可欣赏银河的璀璨星光。' },
        { type: 'tip', title: '观测技巧', content: '天津四是天鹅座最亮的星，也是夏季大三角的顶点之一，找到它就能确定天鹅座的位置。' }
      ],
      relatedConstellations: ['天琴座', '天鹰座', '仙女座', '蝎虎座']
    }
  }
]

export const getConstellationById = (id) => 
  CONSTELLATIONS.find(c => c.id === id)

export const getStarsByConstellationId = (id) => 
  getConstellationById(id)?.stars || []
