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
    observationWindow: {
      months: '1月-12月（全年可见）',
      bestMonths: '3月-5月',
      riseTime: '春季约18:00从东北方升起',
      setTime: '春季约06:00从西北方落下',
      bestHours: '21:00-23:00',
      transitInfo: '约22:00到达上中天，此时位置最高最利于观测',
      moonConflict: '满月时较暗的天权星可能不易分辨'
    },
    brightnessHints: {
      brightestStar: { name: '玉衡', mag: 1.8, desc: '北斗七星中最亮的一颗，呈淡白色' },
      visibleLevel: '极易观测',
      nakedEyeLimit: '全部7颗主星均肉眼可见，城市光污染下仍可看到5-6颗',
      lightPollutionTolerance: '高，在城市中心仍可识别北斗七星的主要形状',
      binocularTip: '使用7x50双筒望远镜可清晰看到开阳双星和更多暗星',
      telescopeTip: '小型望远镜可观察开阳双星的分离，以及寻找M81、M82星系',
      faintStarsNote: '天权星（3.3等）是七星中最暗的，光污染严重时可能难以看到'
    },
    storySegments: [
      {
        id: 'ursa_story_1',
        title: '美丽的狩猎女神',
        content: '卡利斯托是阿耳忒弥斯（月亮与狩猎女神）的侍女，她立誓永葆贞洁，终生追随女神狩猎于山林之间。她身姿矫健，容貌美丽，连众神之王宙斯也为她倾心。',
        icon: '🏹'
      },
      {
        id: 'ursa_story_2',
        title: '嫉妒的火焰',
        content: '宙斯化身为阿耳忒弥斯的模样接近卡利斯托，使她生下了儿子阿卡斯。天后赫拉得知后妒火中烧，将美丽的卡利斯托变成了一只毛发粗糙的大熊，让她在森林中流离失所。',
        icon: '🔥'
      },
      {
        id: 'ursa_story_3',
        title: '命运的重逢',
        content: '十五年后，阿卡斯长成了英俊的青年猎手。一次狩猎中，他遇到了已变成大熊的母亲。母亲认出了儿子，张开双臂想要拥抱他，可阿卡斯只看到一头凶猛的巨熊朝他扑来。',
        icon: '🐻'
      },
      {
        id: 'ursa_story_4',
        title: '永恒的星空守望',
        content: '就在阿卡斯举起长矛的千钧一发之际，宙斯出现了。为了阻止这场人伦悲剧，他将阿卡斯也变成了一只小熊（小熊座），然后一手抓住大熊的尾巴，一手抓住小熊的尾巴，将他们一同抛向天空，成为永恒的星座。',
        icon: '✨'
      }
    ],
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
    observationWindow: {
      months: '10月-次年3月',
      bestMonths: '12月-2月',
      riseTime: '冬季约18:00从东方升起',
      setTime: '冬季约06:00从西方落下',
      bestHours: '20:00-22:00',
      transitInfo: '约21:00到达上中天，高悬南方天空',
      moonConflict: '满月时猎户星云的细节会受到影响，建议新月前后观测'
    },
    brightnessHints: {
      brightestStar: { name: '参宿七', mag: 0.1, desc: '全天第七亮星，呈蓝白色，距离地球约860光年' },
      visibleLevel: '极易观测',
      nakedEyeLimit: '7颗主星全部肉眼可见，参宿四和参宿七尤其明亮',
      lightPollutionTolerance: '极高，即使在大城市中心也能清晰看到腰带三星和主要亮星',
      binocularTip: '双筒望远镜可欣赏猎户星云（M42）的云雾状结构和腰带附近的疏散星团',
      telescopeTip: '小型望远镜可分辨猎户星云的梯形四合星，以及观察参宿四的红色表面',
      faintStarsNote: '猎户星云（5.0等）在黑暗环境下肉眼可见模糊光斑，被称为"天空中的宝石"'
    },
    storySegments: [
      {
        id: 'orion_story_1',
        title: '海神之子',
        content: '奥利安是海神波塞冬与欧律阿勒的儿子，他继承了父亲的神力，能够在海浪上行走如履平地。他身材魁梧，相貌英俊，是世间最勇猛的猎人。',
        icon: '🌊'
      },
      {
        id: 'orion_story_2',
        title: '傲慢的宣言',
        content: '奥利安在一次狩猎盛宴上，借着酒意夸口道："世上没有任何野兽能够战胜我！"这句话传到了众神耳中，也传到了大地女神盖亚那里。',
        icon: '🍷'
      },
      {
        id: 'orion_story_3',
        title: '致命的毒蝎',
        content: '盖亚被奥利安的傲慢激怒，她从地底召唤出一只巨大的蝎子。这只蝎子拥有坚不可摧的外壳和致命的毒刺，它悄悄向奥利安发起了攻击。',
        icon: '🦂'
      },
      {
        id: 'orion_story_4',
        title: '星空的永恒对峙',
        content: '经过一场激烈的搏斗，奥利安被蝎子的毒刺刺中脚踝，毒发身亡。宙斯为了纪念这位英勇的猎人，将他升上天界成为猎户座。而那只蝎子也成为天蝎座，永远与猎户座相对——天蝎座升起时，猎户座便落下，永不相见。',
        icon: '⚔️'
      }
    ],
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
    observationWindow: {
      months: '全年可见（拱极星座）',
      bestMonths: '9月-11月',
      riseTime: '秋季约19:00从东北方升起',
      setTime: '秋季约05:00从西北方落下',
      bestHours: '21:00-23:00',
      transitInfo: '约22:00到达上中天，W形朝向下方',
      moonConflict: '月光影响较小，由于五颗主星都较为明亮'
    },
    brightnessHints: {
      brightestStar: { name: '王良四', mag: 2.3, desc: '呈淡黄色，是仙后座最亮星，位于W形左上方顶点' },
      visibleLevel: '易于观测',
      nakedEyeLimit: '5颗主星全部肉眼可见，构成明显的W/M形',
      lightPollutionTolerance: '较高，城市郊区可清晰看到W形的五颗星',
      binocularTip: '双筒望远镜可看到更多暗星，以及寻找仙后座附近的疏散星团M52和M103',
      telescopeTip: '小型望远镜可观察双星辇道增七的美丽色彩对比',
      faintStarsNote: '五颗星亮度相近，平均2.5等左右，光污染下仍可辨认形状'
    },
    storySegments: [
      {
        id: 'cassiopeia_story_1',
        title: '虚荣的王后',
        content: '卡西奥佩娅是埃塞俄比亚国王克甫斯的王后，她拥有绝世容颜，但也因此变得极度虚荣。她常常对着镜子自我欣赏，觉得自己的美貌无人能及。',
        icon: '👑'
      },
      {
        id: 'cassiopeia_story_2',
        title: '触怒海神',
        content: '在一次海神庆典上，卡西奥佩娅当众夸口说自己和女儿安德洛墨达比海神涅柔斯的五十个女儿们更加美丽。这句话传到了海神波塞冬的耳中，他勃然大怒。',
        icon: '😤'
      },
      {
        id: 'cassiopeia_story_3',
        title: '海怪的惩罚',
        content: '波塞冬派出海怪刻托袭击埃塞俄比亚海岸，洪水和怪兽肆虐整个王国。神谕宣告，只有将公主安德洛墨达绑在海边献祭给海怪，才能平息神怒。',
        icon: '🐙'
      },
      {
        id: 'cassiopeia_story_4',
        title: '永恒的旋转',
        content: '英雄珀耳修斯救下了公主，但海神的惩罚仍未结束。他将卡西奥佩娅钉在天上的宝座上，让她永远围绕北极星旋转，有时头朝下，让世人永远记住虚荣的代价。',
        icon: '🔄'
      }
    ],
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
    observationWindow: {
      months: '5月-10月',
      bestMonths: '6月-8月',
      riseTime: '夏季约19:00从东南方升起',
      setTime: '夏季约05:00从西南方落下',
      bestHours: '21:00-23:00',
      transitInfo: '约22:00到达上中天，南方天空较高位置',
      moonConflict: '满月时心宿二的红色会被月光掩盖，建议新月前后观测'
    },
    brightnessHints: {
      brightestStar: { name: '心宿二', mag: 1.0, desc: '全天第十六亮星，著名的红超巨星，直径是太阳的700倍，呈明显的红色' },
      visibleLevel: '易于观测',
      nakedEyeLimit: '约10颗肉眼可见的星星，心宿二的红色非常醒目',
      lightPollutionTolerance: '中等，城市中心可能只能看到心宿二和尾宿八九颗亮星',
      binocularTip: '双筒望远镜可看到心宿二附近的疏散星团M6和M7（蝴蝶星团）',
      telescopeTip: '小型望远镜可观察心宿二的红色表面，以及M6、M7星团中的几十颗恒星',
      faintStarsNote: '蝎子尾巴末端的星链向南延伸，在黑暗环境下可看到完整的S形曲线'
    },
    storySegments: [
      {
        id: 'scorpius_story_1',
        title: '大地的使者',
        content: '这只巨大的蝎子是大地女神盖亚的使者。它从地缝中诞生，拥有坚硬如钢铁的外壳和见血封喉的毒刺。它平时隐藏在地下，只有当盖亚发出命令时才会现身。',
        icon: '🌍'
      },
      {
        id: 'scorpius_story_2',
        title: '猎人的誓言',
        content: '奥利安杀死了无数野兽，他站在战利品堆上宣称："无论多么凶猛的野兽，都无法与我抗衡！"他的声音回荡在山谷中，传到了盖亚的耳中。',
        icon: '⚔️'
      },
      {
        id: 'scorpius_story_3',
        title: '致命的伏击',
        content: '盖亚命令蝎子去教训狂妄的猎人。蝎子在奥利安每日狩猎的小径旁埋伏，当猎人经过时，它猛地从草丛中窜出，用毒刺刺中了奥利安的脚踝。',
        icon: '💉'
      },
      {
        id: 'scorpius_story_4',
        title: '天空的彼岸',
        content: '剧毒迅速蔓延，奥利安倒下了。宙斯将他们都升上天空，但为了防止他们继续争斗，宙斯让蝎子和猎人永远位于天空的两端——当天蝎座从东方升起时，猎户座便从西方落下，永不相见。',
        icon: '🌅'
      }
    ],
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
    observationWindow: {
      months: '4月-10月',
      bestMonths: '6月-8月',
      riseTime: '夏季约18:00从东北方升起',
      setTime: '夏季约04:00从西北方落下',
      bestHours: '21:00-23:00',
      transitInfo: '约22:00到达上中天，位于天顶附近，位置极佳',
      moonConflict: '满月时较暗的渐台星可能难以看到，但织女星本身不受影响'
    },
    brightnessHints: {
      brightestStar: { name: '织女一', mag: 0.0, desc: '全天第五亮星，呈蓝白色，距离地球约25光年，是夏季大三角最亮的顶点' },
      visibleLevel: '易于观测',
      nakedEyeLimit: '织女星极为醒目，小平行四边形在黑暗环境下可见',
      lightPollutionTolerance: '中等，织女星在城市中仍很明亮，但小平行四边形需要较黑暗的天空',
      binocularTip: '双筒望远镜可清晰看到织女星的蓝白色，以及寻找附近的环状星云M57',
      telescopeTip: '小型望远镜可观察环状星云M57的烟圈形状，以及分辨双星渐台二',
      faintStarsNote: '渐台二至渐台四约4-5等，需要避开光污染才能看到完整的竖琴形状'
    },
    storySegments: [
      {
        id: 'lyra_story_1',
        title: '音乐的天才',
        content: '俄耳甫斯是色雷斯国王俄阿格洛斯与缪斯女神卡利俄珀的儿子。他从小就展现出非凡的音乐天赋，阿波罗亲自赠予他一把金色的七弦琴，并教他弹奏。',
        icon: '🎵'
      },
      {
        id: 'lyra_story_2',
        title: '能驯服万物的琴声',
        content: '俄耳甫斯的琴声具有魔力——飞鸟走兽会驻足聆听，顽石会为之落泪，湍急的河流也会放慢脚步。他随伊阿宋的阿尔戈号远征，用琴声平息了海妖的诱惑之歌。',
        icon: '🌊'
      },
      {
        id: 'lyra_story_3',
        title: '深入冥界的爱',
        content: '他的妻子欧律狄刻不幸被毒蛇咬死，悲痛欲绝的俄耳甫斯带着竖琴深入冥界。他的琴声打动了复仇三女神，甚至令冷酷的冥王哈迪斯和冥后珀耳塞福涅潸然泪下。',
        icon: '💔'
      },
      {
        id: 'lyra_story_4',
        title: '永恒的琴声',
        content: '冥王允许他带妻子回到人间，但要求途中不可回头。然而在即将到达人间的那一刻，俄耳甫斯忍不住回头，妻子就此永远消失。他死后，宙斯将他的金竖琴升上天界，成为天琴座，让他的音乐永远回荡在宇宙中。',
        icon: '✨'
      }
    ],
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
    observationWindow: {
      months: '6月-12月',
      bestMonths: '9月-11月',
      riseTime: '秋季约19:00从东北方升起',
      setTime: '秋季约05:00从西北方落下',
      bestHours: '21:00-23:00',
      transitInfo: '约22:00到达上中天，北十字形直立于银河之上',
      moonConflict: '满月时银河细节会被掩盖，建议新月前后观测以欣赏银河背景'
    },
    brightnessHints: {
      brightestStar: { name: '天津四', mag: 1.3, desc: '全天第十九亮星，呈蓝白色，是一颗距离地球约1500光年的超巨星，也是夏季大三角顶点之一' },
      visibleLevel: '易于观测',
      nakedEyeLimit: '北十字的五颗主星全部肉眼可见，在银河中尤为醒目',
      lightPollutionTolerance: '中等，城市中可见天津四和北十字主要形状，但银河背景不可见',
      binocularTip: '双筒望远镜可欣赏银河的璀璨星光，以及观察双星辇道增七',
      telescopeTip: '小型望远镜可分辨辇道增七的橙黄色和蓝白色双星，以及观察面纱星云的部分结构',
      faintStarsNote: '银河中天鹅座内有大量暗星，黑暗环境下北十字周围仿佛镶嵌了无数钻石'
    },
    storySegments: [
      {
        id: 'cygnus_story_1',
        title: '众神之王的化身',
        content: '宙斯是奥林匹斯众神之王，他掌管天空与雷霆。他多情而浪漫，常常化身为各种形态降临人间，去追寻他所爱的凡人女子。',
        icon: '⚡'
      },
      {
        id: 'cygnus_story_2',
        title: '美丽的斯巴达王后',
        content: '斯巴达王后勒达以绝世美貌闻名，她的容颜如月光般皎洁，连神明也为之倾倒。一日，她正在河畔沐浴嬉戏，宙斯从奥林匹斯山望见了她。',
        icon: '💎'
      },
      {
        id: 'cygnus_story_3',
        title: '雪白的天鹅',
        content: '宙斯化身为一只雪白优雅的天鹅，降落在勒达身旁。这只天鹅羽毛如雪，姿态高贵，勒达被它的美丽吸引，温柔地将它拥入怀中。',
        icon: '🦢'
      },
      {
        id: 'cygnus_story_4',
        title: '银河中的飞翔',
        content: '后来勒达生下了两枚鹅蛋，孵出了海伦（引发特洛伊战争的绝世美人）和双子兄弟。为了纪念这段故事，宙斯将他化身的天鹅升上天界，让它永远飞翔于银河之上，展翅俯瞰人间。',
        icon: '🌌'
      }
    ],
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
