import { CONSTELLATIONS } from './constellations'

export const RESEARCHER_RANKS = {
  novice: {
    id: 'novice',
    name: '见习研究员',
    icon: '🔰',
    level: 0,
    xpRequired: 0,
    color: 'from-slate-500 to-slate-400',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/30',
    textColor: 'text-slate-300',
    description: '初入星空的探索者，开始你的科研之旅'
  },
  apprentice: {
    id: 'apprentice',
    name: '助理研究员',
    icon: '📖',
    level: 1,
    xpRequired: 100,
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-300',
    description: '掌握基础观测方法，开始记录星空数据'
  },
  junior: {
    id: 'junior',
    name: '初级研究员',
    icon: '🔬',
    level: 2,
    xpRequired: 300,
    color: 'from-cyan-500 to-teal-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-300',
    description: '独立完成研究课题，积累专业知识'
  },
  senior: {
    id: 'senior',
    name: '高级研究员',
    icon: '🎯',
    level: 3,
    xpRequired: 700,
    color: 'from-blue-500 to-indigo-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-300',
    description: '深入研究特定领域，发表专业论文'
  },
  expert: {
    id: 'expert',
    name: '首席研究员',
    icon: '👑',
    level: 4,
    xpRequired: 1500,
    color: 'from-purple-500 to-violet-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-300',
    description: '权威的天文专家，引领研究方向'
  },
  master: {
    id: 'master',
    name: '星空院士',
    icon: '🌟',
    level: 5,
    xpRequired: 3000,
    color: 'from-amber-500 to-yellow-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-300',
    description: '穷尽星辰奥秘的集大成者'
  }
}

export const RESEARCH_TOPICS = [
  {
    id: 'topic_basic_1',
    title: '星座形态学入门',
    category: 'basic',
    icon: '⭐',
    rankRequired: 'novice',
    xpReward: 30,
    summary: '学习识别基本的星座形状和连线方式',
    description: '星座是天文学中为了方便研究和观测而人为划分的天球区域。本课题将带你了解星座的基本形态特征，掌握识别常见星座的方法。',
    objectives: [
      { id: 'obj1', description: '发现3个不同的星座', type: 'discover', value: 3, reward: 10 },
      { id: 'obj2', description: '完成北斗七星的完美连线', type: 'perfect', constellationId: 'ursa_major', reward: 10 },
      { id: 'obj3', description: '阅读星座图鉴说明', type: 'read', value: 1, reward: 10 }
    ],
    materials: ['mat_basic_1', 'mat_basic_2'],
    examId: 'exam_basic_1'
  },
  {
    id: 'topic_basic_2',
    title: '恒星亮度与星等',
    category: 'basic',
    icon: '💡',
    rankRequired: 'novice',
    xpReward: 35,
    summary: '理解星等系统和恒星亮度的测量方法',
    description: '星等是衡量天体亮度的指标，数值越小亮度越高。古希腊天文学家喜帕恰斯将肉眼可见的恒星分为六个等级，本课题将深入探讨这一系统。',
    objectives: [
      { id: 'obj1', description: '发现猎户座的参宿四', type: 'discover_specific', constellationId: 'orion', starName: '参宿四', reward: 12 },
      { id: 'obj2', description: '发现天琴座的织女星', type: 'discover_specific', constellationId: 'lyra', starName: '织女一', reward: 12 },
      { id: 'obj3', description: '完美完成2个星座', type: 'perfect_count', value: 2, reward: 11 }
    ],
    materials: ['mat_basic_3'],
    examId: 'exam_basic_2'
  },
  {
    id: 'topic_season_1',
    title: '春季星座研究',
    category: 'season',
    icon: '🌸',
    rankRequired: 'apprentice',
    xpReward: 50,
    summary: '深入研究春季星空的主要星座及其特征',
    description: '春季是观测大熊座、狮子座等星座的最佳时期。本课题将研究春季星座的位置关系、观测技巧以及相关神话故事。',
    objectives: [
      { id: 'obj1', description: '发现所有春季星座', type: 'discover_season', season: '春', reward: 20 },
      { id: 'obj2', description: '完美观测大熊座3次', type: 'reobserve_perfect', constellationId: 'ursa_major', value: 3, reward: 15 },
      { id: 'obj3', description: '记录春季观测笔记', type: 'write_note', value: 2, reward: 15 }
    ],
    materials: ['mat_season_1', 'mat_season_2'],
    examId: 'exam_season_1'
  },
  {
    id: 'topic_season_2',
    title: '夏季大三角研究',
    category: 'season',
    icon: '☀️',
    rankRequired: 'apprentice',
    xpReward: 55,
    summary: '研究夏季大三角的组成与观测方法',
    description: '夏季大三角由织女星、牛郎星和天津四组成，是夏季夜空中最醒目的标志。本课题将研究这三颗亮星及其所属星座。',
    objectives: [
      { id: 'obj1', description: '发现天蝎座、天琴座、天鹅座', type: 'discover_multi', constellationIds: ['scorpius', 'lyra', 'cygnus'], reward: 20 },
      { id: 'obj2', description: '完美完成天琴座连线', type: 'perfect', constellationId: 'lyra', reward: 17 },
      { id: 'obj3', description: '累计观测5次', type: 'total_observations', value: 5, reward: 18 }
    ],
    materials: ['mat_season_3', 'mat_season_4'],
    examId: 'exam_season_2'
  },
  {
    id: 'topic_myth_1',
    title: '希腊神话与星座',
    category: 'mythology',
    icon: '📜',
    rankRequired: 'junior',
    xpReward: 60,
    summary: '探索星座背后的希腊神话故事',
    description: '几乎每个西方星座都与希腊神话有着深厚的渊源。从猎户座奥利安到仙女座安德洛墨达，这些故事为星空增添了人文色彩。',
    objectives: [
      { id: 'obj1', description: '阅读猎户座神话故事', type: 'read_mythology', constellationId: 'orion', reward: 15 },
      { id: 'obj2', description: '阅读天蝎座神话故事', type: 'read_mythology', constellationId: 'scorpius', reward: 15 },
      { id: 'obj3', description: '阅读仙后座神话故事', type: 'read_mythology', constellationId: 'cassiopeia', reward: 15 },
      { id: 'obj4', description: '完成3个星座的发现', type: 'discover', value: 3, reward: 15 }
    ],
    materials: ['mat_myth_1', 'mat_myth_2', 'mat_myth_3'],
    examId: 'exam_myth_1'
  },
  {
    id: 'topic_advanced_1',
    title: '星座导航技术',
    category: 'advanced',
    icon: '🧭',
    rankRequired: 'junior',
    xpReward: 70,
    summary: '学习利用星座进行天文导航的传统方法',
    description: '在指南针发明之前，人类就依靠北极星和星座进行导航。本课题将学习如何利用北斗七星寻找北极星，以及其他实用的导航技巧。',
    objectives: [
      { id: 'obj1', description: '完美完成大熊座（北斗七星）', type: 'perfect', constellationId: 'ursa_major', reward: 20 },
      { id: 'obj2', description: '完美完成仙后座', type: 'perfect', constellationId: 'cassiopeia', reward: 20 },
      { id: 'obj3', description: '累计观测10次', type: 'total_observations', value: 10, reward: 15 },
      { id: 'obj4', description: '发现5个星座', type: 'discover', value: 5, reward: 15 }
    ],
    materials: ['mat_advanced_1', 'mat_advanced_2'],
    examId: 'exam_advanced_1'
  },
  {
    id: 'topic_advanced_2',
    title: '深空天体观测',
    category: 'advanced',
    icon: '🔭',
    rankRequired: 'senior',
    xpReward: 90,
    summary: '探索星座中的星云、星团等深空天体',
    description: '深空天体是位于太阳系外的天体，包括星云、星团、星系等。猎户座大星云是最著名的深空天体之一，肉眼可见。',
    objectives: [
      { id: 'obj1', description: '发现猎户星云所在的猎户座', type: 'discover_specific', constellationId: 'orion', starName: '猎户星云', reward: 25 },
      { id: 'obj2', description: '完美完成所有已发现星座', type: 'perfect_all_discovered', value: 1, reward: 25 },
      { id: 'obj3', description: '完美完成猎户座连线', type: 'perfect', constellationId: 'orion', reward: 20 },
      { id: 'obj4', description: '累计观测20次', type: 'total_observations', value: 20, reward: 20 }
    ],
    materials: ['mat_advanced_3', 'mat_advanced_4'],
    examId: 'exam_advanced_2'
  },
  {
    id: 'topic_master_1',
    title: '星座系统学综述',
    category: 'master',
    icon: '📚',
    rankRequired: 'expert',
    xpReward: 150,
    summary: '全面掌握全天88星座的划分体系与历史演变',
    description: '1928年国际天文学联合会正式确定了全天88个星座的边界。本课题将深入研究星座系统的科学划分、历史沿革以及各星座的特征。',
    objectives: [
      { id: 'obj1', description: '发现全部星座', type: 'discover_all', value: 1, reward: 50 },
      { id: 'obj2', description: '完美完成全部星座', type: 'perfect_all', value: 1, reward: 50 },
      { id: 'obj3', description: '累计观测50次', type: 'total_observations', value: 50, reward: 25 },
      { id: 'obj4', description: '完成全部阶段考核', type: 'all_exams_passed', value: 1, reward: 25 }
    ],
    materials: ['mat_master_1', 'mat_master_2'],
    examId: 'exam_master_1'
  }
]

export const RESEARCH_MATERIALS = {
  mat_basic_1: {
    id: 'mat_basic_1',
    title: '星座划分的历史',
    type: 'article',
    icon: '📄',
    content: `
## 星座划分的历史演变

### 古代文明时期
早在公元前3000年，古巴比伦人就开始将夜空中的亮星划分成星座，用于农业和宗教目的。古埃及人则根据天狼星的出现预测尼罗河的泛滥。

### 古希腊时期
古希腊天文学家托勒密在公元2世纪编制了《天文学大成》，记录了48个星座，成为西方星座系统的基础。这些星座大多以希腊神话中的人物和动物命名。

### 大航海时代
15-17世纪的大航海时代，欧洲航海家需要观测南半球的星空来导航。荷兰航海家凯泽和豪特曼补充了12个南天星座，天文学家拜尔后来又增加了一些。

### 现代划分
1928年，国际天文学联合会（IAU）在罗马召开大会，正式将全天划分为88个星座，并确定了精确的边界，这些边界沿用至今。
    `,
    unlockedByDefault: true
  },
  mat_basic_2: {
    id: 'mat_basic_2',
    title: '如何识别星座',
    type: 'guide',
    icon: '📖',
    content: `
## 星座识别实用技巧

### 1. 从亮星入手
每个季节都有几颗特别明亮的星星，先找到这些"路标"，再扩展到整个星座。例如：
- 春季：北极星 → 北斗七星 → 大熊座
- 夏季：织女星 → 夏季大三角

### 2. 利用几何形状
很多星座都有独特的几何轮廓：
- 大熊座：勺子形状
- 仙后座：W或M形状
- 猎户座：腰带三星

### 3. 借助星图和APP
纸质星图或手机APP可以帮助你确认星座位置，但建议先裸眼尝试，再用工具验证。

### 4. 循序渐进
先学会3-5个最显著的星座，再逐步扩展到其他较暗的星座。
    `,
    unlockedByDefault: true
  },
  mat_basic_3: {
    id: 'mat_basic_3',
    title: '星等系统详解',
    type: 'article',
    icon: '✨',
    content: `
## 星等系统详解

### 什么是星等？
星等（magnitude）是衡量天体亮度的单位，用小写字母m表示。数值越小，天体越亮；数值越大，天体越暗。

### 星等的起源
公元前2世纪，古希腊天文学家喜帕恰斯将肉眼可见的恒星分为6个等级：
- 最亮的20颗：1等星
- 次亮的：2等星
- ...以此类推
- 最暗的可见星：6等星

### 普森公式
1856年，英国天文学家普森建立了精确的星等标度：
- 每差1个星等，亮度差约2.512倍
- 1等星的亮度恰好是6等星的100倍

### 著名恒星的星等
| 恒星名 | 所属星座 | 视星等 | 颜色 |
|--------|---------|--------|------|
| 天狼星 | 大犬座 | -1.46 | 蓝白 |
| 织女一 | 天琴座 | 0.03 | 白 |
| 参宿四 | 猎户座 | 0.50 | 红 |
| 心宿二 | 天蝎座 | 1.09 | 红 |
| 北极星 | 小熊座 | 1.98 | 黄白 |
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_started', topicId: 'topic_basic_2' }
  },
  mat_season_1: {
    id: 'mat_season_1',
    title: '春季星空观测指南',
    type: 'guide',
    icon: '🌸',
    content: `
## 春季星空（3-5月）

### 观测时间
晚间21:00-23:00为最佳观测时段。

### 主要星座一览
1. **大熊座**：北斗七星高挂北方天空，是春季最显著的标志
2. **狮子座**：位于南方天空，狮子座α星（轩辕十四）是春季最亮的恒星之一
3. **室女座**：拥有明亮的角宿一，与狮子座β星、牧夫座大角星组成"春季大三角"

### 观测技巧
- 面向北方，找到北斗七星
- 从勺口两颗星向外延长5倍，就是北极星
- 顺着斗柄弧线向南延伸，可以找到大角星和角宿一

### 春季特色
春季银河较为黯淡，适合观测单个星座和深空天体。
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_started', topicId: 'topic_season_1' }
  },
  mat_season_2: {
    id: 'mat_season_2',
    title: '北斗七星的深度解析',
    type: 'article',
    icon: '🍶',
    content: `
## 北斗七星深度解析

北斗七星是大熊座中最明亮的七颗星，自古以来就是重要的导航标志。

### 七星成员
1. **天枢（Dubhe）**：α星，视星等1.8，橙色巨星
2. **天璇（Merak）**：β星，视星等2.4，白主序星
3. **天玑（Phecda）**：γ星，视星等2.5，白主序星
4. **天权（Megrez）**：δ星，视星等3.3，蓝白主序星
5. **玉衡（Alioth）**：ε星，视星等1.8，白巨星
6. **开阳（Mizar）**：ζ星，视星等2.3，著名的双星系统
7. **摇光（Alkaid）**：η星，视星等1.9，蓝白主序星

### 开阳双星
开阳旁边有一颗暗星叫辅（Alcor），这是肉眼可以分辨的双星系统，古人常用它来测试视力。

### 文化意义
- 中国古代将北斗七星视为帝王之车
- 道教尊其为北斗星君
- 日本将其称为"七福神星"
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_completed', topicId: 'topic_season_1' }
  },
  mat_season_3: {
    id: 'mat_season_3',
    title: '夏季星空观测指南',
    type: 'guide',
    icon: '☀️',
    content: `
## 夏季星空（6-8月）

### 观测时间
晚间21:00-23:00，天气炎热建议选择后半夜观测。

### 夏季大三角
这是夏季最醒目的标志：
- **织女星**（天琴座α）：全天第五亮星，蓝白色
- **牛郎星**（天鹰座α）：又称河鼓二，两侧各有一颗小星
- **天津四**（天鹅座α）：天鹅座尾部的亮星，超巨星

### 银河
夏季是观测银河的最佳季节，银河从东北向西南横贯天空，蔚为壮观。

### 其他主要星座
1. **天蝎座**：南方天空，心宿二呈现美丽的红色
2. **人马座**：银河中心方向，拥有大量深空天体
3. **天鹅座**：又称"北十字"，飞翔在银河之上

### 夏季特色
- 银河最为明亮壮观
- 可观测的深空天体最多
- 流星活动频繁
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_started', topicId: 'topic_season_2' }
  },
  mat_season_4: {
    id: 'mat_season_4',
    title: '心宿二与红超巨星',
    type: 'article',
    icon: '🔴',
    content: `
## 心宿二：红超巨星的代表

### 基本参数
- 中文名：心宿二（天蝎座α）
- 英文名：Antares（意为"火星的对手"）
- 视星等：约1.09等
- 距离：约550光年
- 半径：太阳的约680倍
- 质量：太阳的约12倍
- 表面温度：约3500K

### 为什么是红色？
恒星的颜色取决于表面温度：
- 蓝色：温度最高（30000K以上）
- 白色：高温（10000K左右）
- 黄色：中等温度（如太阳，5800K）
- 红色：温度较低（3000-4000K）

心宿二表面温度只有约3500K，因此呈现红色。但它体积巨大，如果放在太阳位置，其表面将超过火星轨道。

### 恒星演化
红超巨星是大质量恒星（>8倍太阳质量）生命的最后阶段，最终将以超新星爆发的形式结束生命。心宿二预计将在未来数百万年内爆发。
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_completed', topicId: 'topic_season_2' }
  },
  mat_myth_1: {
    id: 'mat_myth_1',
    title: '猎户座神话详解',
    type: 'article',
    icon: '🏹',
    content: `
## 猎户座奥利安的神话

### 英雄的诞生
奥利安（Orion）是海神波塞冬与欧律阿勒之子，生来就拥有非凡的力量和英俊的外表。他继承了父亲在海上行走的能力，可以在海浪上自由行走如履平地。

### 与女神的恋情
奥利安的力量和英俊吸引了狩猎女神阿耳忒弥斯（罗马神话中的狄安娜）的注意。女神深深爱上了这位年轻的猎人，甚至想放弃自己的处女神之誓与他结合。

### 阿波罗的嫉妒
阿耳忒弥斯的双胞胎弟弟阿波罗对此极为不满。他不希望姐姐违背誓言，于是暗中策划除掉奥利安。

### 蝎子的阴谋
阿波罗派出一只巨大的毒蝎，让它去刺杀奥利安。经过激烈的搏斗，奥利安被蝎子的毒刺刺中脚踝，中毒身亡。

### 升入天界
宙斯被奥利安的英勇打动，将这位伟大的猎人升上天界，成为猎户座。那只毒蝎也被升上天界，成为天蝎座。由于奥利安和蝎子是仇敌，宙斯让它们永远位于天空两端——天蝎座升起时，猎户座就会落下，永不相见。
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_started', topicId: 'topic_myth_1' }
  },
  mat_myth_2: {
    id: 'mat_myth_2',
    title: '仙后座与埃塞俄比亚传说',
    type: 'article',
    icon: '👑',
    content: `
## 卡西奥佩娅：虚荣王后的惩罚

### 埃塞俄比亚王室
在埃塞俄比亚，国王克甫斯、王后卡西奥佩娅和美丽的公主安德洛墨达过着幸福的生活。

### 致命的炫耀
卡西奥佩娅王后非常美貌，也十分虚荣。有一天，她当众夸耀说自己和女儿的美貌超过了海神涅柔斯的五十个女儿（海仙女涅瑞伊得斯）。

### 海神的愤怒
海仙女们听到这番吹嘘后非常愤怒，跑到父亲涅柔斯那里哭诉。涅柔斯随即向海神波塞冬求助，要求惩罚傲慢的王后。

### 海怪来袭
波塞冬派出巨大的海怪刻托袭击埃塞俄比亚海岸，掀起巨浪，摧毁了无数村庄和农田。

### 神谕与献祭
恐慌的国王向宙斯神庙请求神谕，得到的回答是：只有将公主安德洛墨达绑在海边献祭给海怪，才能平息神怒。

### 英雄的救援
在关键时刻，英雄珀耳修斯骑着飞马珀伽索斯路过，杀死海怪救下了公主。

### 永远的惩罚
事后，波塞冬仍不解气，将卡西奥佩娅钉在天上的宝座上，让她永远旋转。这就是仙后座W形的由来——有时王后头朝下，以示羞辱。
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_progress', topicId: 'topic_myth_1', progress: 50 }
  },
  mat_myth_3: {
    id: 'mat_myth_3',
    title: '俄耳甫斯与天琴座',
    type: 'article',
    icon: '🎵',
    content: `
## 俄耳甫斯：用音乐感动冥界的歌手

### 伟大的音乐家
俄耳甫斯是色雷斯国王俄阿革洛斯与缪斯女神卡利俄珀之子。他从小就展现出惊人的音乐天赋，阿波罗还将自己的金竖琴送给了他。据说俄耳甫斯的琴声能让飞鸟走兽驻足聆听，甚至顽石也会流泪。

### 与欧律狄刻的爱情
俄耳甫斯与美丽的仙女欧律狄刻相爱并结婚。不幸的是，在他们的婚礼上，欧律狄刻被毒蛇咬伤，中毒身亡。

### 深入冥界
悲痛欲绝的俄耳甫斯决定冒险深入冥界，用音乐打动冥王，请求带回妻子。

### 冥王的条件
俄耳甫斯的琴声果然打动了冥王哈迪斯和冥后珀耳塞福涅。冥王同意让他带欧律狄刻回到人间，但提出一个条件：在走出冥界之前，俄耳甫斯绝对不能回头看妻子。

### 最后的回望
在即将到达出口时，俄耳甫斯终于忍不住回头确认妻子是否跟随。就在那一刻，欧律狄刻的身影开始消散，她第二次死去了。

### 天界的竖琴
俄耳甫斯死后，宙斯将他的金竖琴升上天界，成为天琴座。织女星（天琴座α）就是琴弦上最闪耀的那颗宝石。
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_completed', topicId: 'topic_myth_1' }
  },
  mat_advanced_1: {
    id: 'mat_advanced_1',
    title: '天文导航原理',
    type: 'guide',
    icon: '🧭',
    content: `
## 利用星座进行天文导航

### 寻找北极星
北极星（勾陈一）几乎正对地球自转轴，因此它在天空中的位置几乎固定不变，是北半球导航的基石。

方法一：利用北斗七星
1. 找到北斗七星的勺口两颗星（天枢、天璇）
2. 将它们的连线向天枢方向延长约5倍
3. 遇到的亮星就是北极星

方法二：利用仙后座
1. 仙后座呈W/M形，位于北极星对面
2. W形的"开口"方向约3倍距离处

### 纬度测量
北极星的地平高度角约等于观测者所在的地理纬度：
- 在北极点（北纬90°）：北极星在头顶正上方
- 在北京（北纬40°）：北极星高度约40°
- 在赤道（纬度0°）：北极星在地平线上

### 方向判断
- 北极星方向：正北
- 春季北斗斗柄指向：东
- 夏季北斗斗柄指向：南
- 秋季北斗斗柄指向：西
- 冬季北斗斗柄指向：北

### 实用技巧
在没有工具的情况下，可以伸出手臂用手指大致测量角度：
- 小拇指宽度：约1°
- 食指、中指、无名指并拢：约5°
- 拳头宽度：约10°
- 手掌张开（拇指到小指）：约20°
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_started', topicId: 'topic_advanced_1' }
  },
  mat_advanced_2: {
    id: 'mat_advanced_2',
    title: '古代航海星图解析',
    type: 'article',
    icon: '⛵',
    content: `
## 古代航海家的星座导航

### 波利尼西亚人的航海
波利尼西亚人是最伟大的古代航海民族之一。他们仅凭肉眼观测星星，就驾驶独木舟在太平洋上航行数千公里。

关键导航星：
- **Hokule'a（阿儿法星/老人星）**：夏威夷人最重要的导航星
- **北斗七星**：判断北方和纬度
- **猎户座**：判断季节和航向

### 郑和下西洋
郑和的船队使用"过洋牵星术"，通过测量星辰高度来确定船位。使用的工具叫"牵星板"，是一组不同长度的木板，通过改变手眼距离来测量角度。

### 阿拉伯人的贡献
阿拉伯天文学家在中世纪发展了精确的星表，将许多恒星的位置记录下来。导航时他们主要使用：
- 北极星：确定纬度
- 猎户腰带：指示东西方向

### 星座与农历
中国古代将星空分为三垣二十八宿，用于：
- 制定历法
- 预测季节
- 农业指导

二十八宿相当于星空的"路牌"，通过月亮每天经过的位置来确定日期。
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_completed', topicId: 'topic_advanced_1' }
  },
  mat_advanced_3: {
    id: 'mat_advanced_3',
    title: '深空天体分类',
    type: 'article',
    icon: '🌌',
    content: `
## 深空天体全解

深空天体（Deep Sky Object, DSO）是指太阳系外、非恒星性质的天体。

### 一、星云（Nebula）
星云是宇宙中的气体和尘埃云。

**发射星云**：
- 被内部高温恒星激发而发光
- 通常呈红色（氢原子的Hα辐射）
- 代表：猎户座大星云（M42）

**反射星云**：
- 反射附近恒星的光而发亮
- 通常呈蓝色（瑞利散射）
- 代表：昴星团附近的反射星云

**暗星云**：
- 吸收背后星光形成暗区
- 代表：煤袋星云（南十字座附近）

**行星状星云**：
- 类太阳恒星死亡后抛射的外层物质
- 代表：环状星云M57（天琴座）

### 二、星团（Cluster）
**疏散星团**：
- 由几十到几千颗年轻恒星组成
- 结构松散不规则
- 代表：昴星团M45、毕星团

**球状星团**：
- 由数万到数百万颗老年恒星组成
- 呈球形对称分布
- 代表：武仙座大星团M13

### 三、星系（Galaxy）
星系由数十亿到上万亿颗恒星组成。

**旋涡星系**：
- 具有旋臂结构
- 代表：仙女座大星系M31、银河系

**椭圆星系**：
- 呈椭球形，老年恒星居多
- 代表：M87（室女座）

**不规则星系**：
- 没有明显结构
- 代表：大、小麦哲伦云
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_started', topicId: 'topic_advanced_2' }
  },
  mat_advanced_4: {
    id: 'mat_advanced_4',
    title: '猎户座大星云深度研究',
    type: 'article',
    icon: '🔴',
    content: `
## 猎户座大星云：恒星的摇篮

### 基本数据
- 梅西耶编号：M42 / NGC 1976
- 距离地球：约1344光年
- 视星等：约4.0等（肉眼可见）
- 视直径：约60×60角分（相当于两个满月）
- 实际大小：约24光年

### 在猎户座的位置
位于猎户腰带三星的正下方，在观测条件良好的地方，肉眼可以看到一块模糊的光斑。

### 为什么重要？
猎户座大星云是距离我们最近的恒星形成区之一，也是研究恒星演化的最佳场所。

### 内部结构
1. **梯形四重星（Trapezium）**：星云中心的一组年轻恒星，只有用望远镜才能分辨。它们的强辐射是星云发光的主要能量来源。

2. **电离氢区（H II区）**：被梯形星强烈紫外线电离的氢气，发出红色的Hα辐射。

3. **原恒星盘（Proplyd）**：正在形成中的恒星周围的原行星盘，是未来行星系统的摇篮。哈勃望远镜已在M42中发现了150多个这样的天体。

### 恒星形成过程
1. 分子云引力坍缩
2. 形成原恒星
3. 原恒星周围出现原行星盘
4. 原恒星进一步收缩升温，引发核聚变成为主序星
5. 原行星盘中形成行星

### 观测建议
- 双筒望远镜：可以看到星云的形状和大致结构
- 小型望远镜：可以分辨梯形四重星，看到更丰富的细节
- 大型望远镜：可以看到暗条纹和内部结构
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_completed', topicId: 'topic_advanced_2' }
  },
  mat_master_1: {
    id: 'mat_master_1',
    title: '国际88星座体系',
    type: 'article',
    icon: '🌐',
    content: `
## 国际天文学联合会88星座体系

### 历史沿革
1922年，国际天文学联合会（IAU）成立了专门委员会研究星座划分问题。1928年，在IAU第三届大会上正式通过了88星座方案，由比利时天文学家德尔普特主持划定边界。

### 星座的命名规则
88个星座的名字来源于：
- 48个来自托勒密的《天文学大成》
- 40个由16-18世纪天文学家补充

### 四大天区
**北天拱极星座（5个）**：
小熊座、大熊座、仙后座、天龙座、仙王座

**北天星座（19个）**：
蝎虎座、仙女座、鹿豹座、御夫座、猎犬座、狐狸座、天鹅座、小狮座、英仙座、牧夫座、武仙座、后发座、北冕座、天猫座、天琴座、海豚座、飞马座、三角座、天箭座

**黄道十二星座（12个）**：
白羊座、金牛座、双子座、巨蟹座、狮子座、室女座、天秤座、天蝎座、人马座、摩羯座、宝瓶座、双鱼座

**赤道带星座（10个）**：
小马座、小犬座、天鹰座、蛇夫座、巨蛇座、六分仪座、长蛇座、麒麟座、猎户座、鲸鱼座

**南天星座（42个）**：
天坛座、绘架座、苍蝇座、山案座、印第安座、天燕座、飞鱼座、矩尺座、剑鱼座、时钟座、杜鹃座、南三角座、圆规座、蝘蜓座、望远镜座、水蛇座、南十字座、凤凰座、孔雀座、南极座、网罟座、天鹤座、南冕座、豺狼座、大犬座、天鸽座、乌鸦座、南鱼座、天兔座、船底座、船尾座、罗盘座、船帆座、玉夫座、半人马座、波江座、盾牌座、天炉座、唧筒座、雕具座、显微镜座、巨爵座
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_started', topicId: 'topic_master_1' }
  },
  mat_master_2: {
    id: 'mat_master_2',
    title: '天文研究方法导论',
    type: 'article',
    icon: '📐',
    content: `
## 现代天文研究方法论

### 观测天文学
观测是天文学的基础。现代观测手段覆盖了全电磁波段：

**射电天文学**：
- 使用射电望远镜接收天体无线电波
- 研究冷气体、脉冲星、宇宙背景辐射
- 代表设施：中国FAST（天眼）

**红外天文学**：
- 穿透星际尘埃
- 研究恒星形成区、褐矮星
- 代表设施：詹姆斯·韦布太空望远镜

**光学天文学**：
- 传统的可见光波段观测
- 研究恒星、星系、行星
- 代表设施：哈勃空间望远镜、凯克望远镜

**高能天文学**：
- X射线、伽马射线
- 研究黑洞、中子星、超新星
- 代表设施：钱德拉X射线天文台

### 理论天文学
利用数学模型和计算机模拟：
- 恒星演化模型
- 星系形成模拟
- 宇宙学模型（ΛCDM标准模型）

### 多信使天文学
2017年，LIGO首次探测到双中子星并合产生的引力波，同时观测到对应的电磁辐射，开启了多信使天文学时代。

### 业余天文学家的贡献
不要小看业余观测！在以下领域，业余天文学家仍发挥重要作用：
1. 变星监测
2. 彗星和小行星发现
3. 掩星观测
4. 流星监测
5. 超新星搜索
    `,
    unlockedByDefault: false,
    unlockCondition: { type: 'topic_completed', topicId: 'topic_master_1' }
  }
}

export const RESEARCH_EXAMS = {
  exam_basic_1: {
    id: 'exam_basic_1',
    title: '基础理论考核（一）',
    icon: '📝',
    topicId: 'topic_basic_1',
    duration: 300,
    passScore: 60,
    xpReward: 20,
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: '全天共划分多少个正式星座？',
        options: ['48个', '66个', '88个', '108个'],
        answer: 2,
        score: 20
      },
      {
        id: 'q2',
        type: 'single',
        question: '北斗七星位于哪个星座？',
        options: ['小熊座', '大熊座', '仙后座', '猎户座'],
        answer: 1,
        score: 20
      },
      {
        id: 'q3',
        type: 'true_false',
        question: '星座中的恒星在物理上确实是聚集在一起的。',
        answer: false,
        score: 20
      },
      {
        id: 'q4',
        type: 'single',
        question: '以下哪颗星可以帮助我们找到北极星？',
        options: ['织女星', '天狼星', '天枢星', '参宿四'],
        answer: 2,
        score: 20
      },
      {
        id: 'q5',
        type: 'multiple',
        question: '识别星座的常用方法有哪些？（多选）',
        options: ['寻找亮星路标', '识别几何形状', '借助星图工具', '随意猜测'],
        answer: [0, 1, 2],
        score: 20
      }
    ]
  },
  exam_basic_2: {
    id: 'exam_basic_2',
    title: '基础理论考核（二）',
    icon: '📝',
    topicId: 'topic_basic_2',
    duration: 300,
    passScore: 60,
    xpReward: 25,
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: '每差1个星等，亮度相差约多少倍？',
        options: ['1.5倍', '2.0倍', '2.512倍', '5倍'],
        answer: 2,
        score: 20
      },
      {
        id: 'q2',
        type: 'single',
        question: '以下哪颗恒星最亮？',
        options: ['织女星（0.03等）', '参宿四（0.50等）', '心宿二（1.09等）', '北极星（1.98等）'],
        answer: 0,
        score: 20
      },
      {
        id: 'q3',
        type: 'true_false',
        question: '星等数值越大，恒星越亮。',
        answer: false,
        score: 20
      },
      {
        id: 'q4',
        type: 'single',
        question: '织女星属于哪个星座？',
        options: ['天蝎座', '天琴座', '天鹅座', '天鹰座'],
        answer: 1,
        score: 20
      },
      {
        id: 'q5',
        type: 'multiple',
        question: '以下关于星等的描述，正确的是？（多选）',
        options: [
          '喜帕恰斯最早提出星等概念',
          '1等星比6等星亮100倍',
          '太阳的视星等为负数',
          '行星不可能有负星等'
        ],
        answer: [0, 1, 2],
        score: 20
      }
    ]
  },
  exam_season_1: {
    id: 'exam_season_1',
    title: '春季星座专项考核',
    icon: '🌸',
    topicId: 'topic_season_1',
    duration: 420,
    passScore: 70,
    xpReward: 35,
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: '春季最适合观测的星座是？',
        options: ['猎户座', '大熊座', '天蝎座', '仙后座'],
        answer: 1,
        score: 20
      },
      {
        id: 'q2',
        type: 'single',
        question: '北斗七星中，哪颗星是著名的双星系统？',
        options: ['天枢', '玉衡', '开阳', '摇光'],
        answer: 2,
        score: 20
      },
      {
        id: 'q3',
        type: 'single',
        question: '以下哪个是"春季大三角"的成员？',
        options: ['大角星', '织女星', '天狼星', '心宿二'],
        answer: 0,
        score: 20
      },
      {
        id: 'q4',
        type: 'true_false',
        question: '春季银河最为明亮壮观，是观测银河的最佳季节。',
        answer: false,
        score: 20
      },
      {
        id: 'q5',
        type: 'multiple',
        question: '关于北斗七星，以下说法正确的是？（多选）',
        options: [
          '位于大熊座',
          '勺口延长5倍可找到北极星',
          '开阳旁边有暗星"辅"',
          '所有七颗星都是1等亮星'
        ],
        answer: [0, 1, 2],
        score: 20
      }
    ]
  },
  exam_season_2: {
    id: 'exam_season_2',
    title: '夏季星座专项考核',
    icon: '☀️',
    topicId: 'topic_season_2',
    duration: 420,
    passScore: 70,
    xpReward: 40,
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: '夏季大三角不包括以下哪颗星？',
        options: ['织女星', '牛郎星', '天津四', '心宿二'],
        answer: 3,
        score: 20
      },
      {
        id: 'q2',
        type: 'single',
        question: '心宿二呈现什么颜色？',
        options: ['蓝白色', '白色', '黄色', '红色'],
        answer: 3,
        score: 20
      },
      {
        id: 'q3',
        type: 'single',
        question: '天津四属于哪个星座？',
        options: ['天琴座', '天鹰座', '天鹅座', '天蝎座'],
        answer: 2,
        score: 20
      },
      {
        id: 'q4',
        type: 'true_false',
        question: '天蝎座与猎户座会同时出现在夜空中。',
        answer: false,
        score: 20
      },
      {
        id: 'q5',
        type: 'multiple',
        question: '关于夏季星空，以下说法正确的是？（多选）',
        options: [
          '银河最为明亮壮观',
          '夏季大三角是显著标志',
          '天蝎座的标志是红色心宿二',
          '天鹅座又称北十字'
        ],
        answer: [0, 1, 2, 3],
        score: 20
      }
    ]
  },
  exam_myth_1: {
    id: 'exam_myth_1',
    title: '神话与人文考核',
    icon: '📜',
    topicId: 'topic_myth_1',
    duration: 480,
    passScore: 70,
    xpReward: 45,
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: '俄耳甫斯用什么感动了冥王？',
        options: ['宝剑', '竖琴/音乐', '金币', '咒语'],
        answer: 1,
        score: 20
      },
      {
        id: 'q2',
        type: 'single',
        question: '仙后座为什么被钉在天上永远旋转？',
        options: ['偷了神器', '炫耀美貌触怒海神', '违背誓言', '拒绝献祭'],
        answer: 1,
        score: 20
      },
      {
        id: 'q3',
        type: 'single',
        question: '猎户座是被谁杀死的？',
        options: ['赫拉', '阿波罗派出的毒蝎', '波塞冬', '宙斯的雷霆'],
        answer: 1,
        score: 20
      },
      {
        id: 'q4',
        type: 'true_false',
        question: '天琴座是俄耳甫斯的竖琴升上天界而成。',
        answer: true,
        score: 20
      },
      {
        id: 'q5',
        type: 'multiple',
        question: '以下关于希腊神话星座的对应，正确的是？（多选）',
        options: [
          '猎户座 = 奥利安',
          '仙后座 = 卡西奥佩娅',
          '大熊座 = 卡利斯托',
          '天琴座 = 阿波罗的竖琴'
        ],
        answer: [0, 1, 2],
        score: 20
      }
    ]
  },
  exam_advanced_1: {
    id: 'exam_advanced_1',
    title: '天文导航技术考核',
    icon: '🧭',
    topicId: 'topic_advanced_1',
    duration: 480,
    passScore: 75,
    xpReward: 50,
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: '北极星的地平高度角约等于？',
        options: ['观测者的经度', '观测者的纬度', '观测时间', '海拔高度'],
        answer: 1,
        score: 20
      },
      {
        id: 'q2',
        type: 'single',
        question: '除了北斗七星，还可以用哪个星座寻找北极星？',
        options: ['仙后座', '猎户座', '狮子座', '天蝎座'],
        answer: 0,
        score: 20
      },
      {
        id: 'q3',
        type: 'single',
        question: '拳头宽度大致对应多少角度？',
        options: ['1°', '5°', '10°', '20°'],
        answer: 2,
        score: 20
      },
      {
        id: 'q4',
        type: 'true_false',
        question: '春季北斗七星的斗柄指向南方。',
        answer: false,
        score: 20
      },
      {
        id: 'q5',
        type: 'multiple',
        question: '寻找北极星的正确方法是？（多选）',
        options: [
          '北斗勺口延长5倍',
          '仙后座开口方向约3倍距离',
          '猎户腰带延长5倍',
          '夏季大三角中心位置'
        ],
        answer: [0, 1],
        score: 20
      }
    ]
  },
  exam_advanced_2: {
    id: 'exam_advanced_2',
    title: '深空天体观测考核',
    icon: '🔭',
    topicId: 'topic_advanced_2',
    duration: 600,
    passScore: 80,
    xpReward: 65,
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: '猎户座大星云的梅西耶编号是？',
        options: ['M31', 'M42', 'M45', 'M57'],
        answer: 1,
        score: 20
      },
      {
        id: 'q2',
        type: 'single',
        question: '发射星云通常呈现什么颜色？',
        options: ['蓝色', '红色', '绿色', '紫色'],
        answer: 1,
        score: 20
      },
      {
        id: 'q3',
        type: 'single',
        question: '球状星团与疏散星团的区别是？',
        options: [
          '球状星团恒星更密集、更年老',
          '疏散星团恒星更密集',
          '两者没有明显区别',
          '球状星团只存在于银河系外'
        ],
        answer: 0,
        score: 20
      },
      {
        id: 'q4',
        type: 'true_false',
        question: '猎户座大星云是距离地球最近的恒星形成区之一。',
        answer: true,
        score: 20
      },
      {
        id: 'q5',
        type: 'multiple',
        question: '以下属于星云类型的有？（多选）',
        options: ['发射星云', '反射星云', '暗星云', '行星状星云'],
        answer: [0, 1, 2, 3],
        score: 20
      }
    ]
  },
  exam_master_1: {
    id: 'exam_master_1',
    title: '终期综合答辩考核',
    icon: '👑',
    topicId: 'topic_master_1',
    duration: 900,
    passScore: 90,
    xpReward: 120,
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: 'IAU正式确定88星座体系是在哪一年？',
        options: ['1888年', '1928年', '1958年', '2000年'],
        answer: 1,
        score: 15
      },
      {
        id: 'q2',
        type: 'single',
        question: '以下哪个波段能穿透星际尘埃观测恒星形成？',
        options: ['可见光', '红外', '紫外', 'X射线'],
        answer: 1,
        score: 15
      },
      {
        id: 'q3',
        type: 'single',
        question: '中国FAST天眼望远镜属于哪类观测？',
        options: ['光学', '红外', '射电', 'X射线'],
        answer: 2,
        score: 15
      },
      {
        id: 'q4',
        type: 'single',
        question: '以下哪个是旋涡星系？',
        options: ['M87', '仙女座M31', '大麦哲伦云', '小麦哲伦云'],
        answer: 1,
        score: 15
      },
      {
        id: 'q5',
        type: 'true_false',
        question: '黄道十二星座正好占据了黄道带的12个等分区。',
        answer: false,
        score: 10
      },
      {
        id: 'q6',
        type: 'multiple',
        question: '多信使天文学时代观测的"信使"包括？（多选）',
        options: ['电磁波', '引力波', '中微子', '宇宙线'],
        answer: [0, 1, 2, 3],
        score: 15
      },
      {
        id: 'q7',
        type: 'multiple',
        question: '业余天文学家在哪些领域仍有重要贡献？（多选）',
        options: ['变星监测', '小行星发现', '超新星搜索', '宇宙学模型构建'],
        answer: [0, 1, 2],
        score: 15
      }
    ]
  }
}

export const getTopicById = (id) => RESEARCH_TOPICS.find(t => t.id === id)
export const getMaterialById = (id) => RESEARCH_MATERIALS[id]
export const getExamById = (id) => RESEARCH_EXAMS[id]
export const getRankById = (id) => RESEARCHER_RANKS[id]

export function calculateRank(xp) {
  const ranks = Object.values(RESEARCHER_RANKS).sort((a, b) => b.level - a.level)
  for (const rank of ranks) {
    if (xp >= rank.xpRequired) return rank
  }
  return RESEARCHER_RANKS.novice
}

export function getNextRank(currentRankId) {
  const ranks = Object.values(RESEARCHER_RANKS).sort((a, b) => a.level - b.level)
  const currentIndex = ranks.findIndex(r => r.id === currentRankId)
  return currentIndex < ranks.length - 1 ? ranks[currentIndex + 1] : null
}

export function getProgressForObjective(objective, state) {
  const { discoveredConstellations, perfectObservations, totalObservations, observationLogs, completedTopicIds, readMaterials, readMythologies, notes, passedExams } = state
  let current = 0
  let target = objective.value || 1

  switch (objective.type) {
    case 'discover':
      current = discoveredConstellations.length
      break
    case 'discover_specific':
      current = discoveredConstellations.includes(objective.constellationId) ? 1 : 0
      break
    case 'discover_multi':
      current = objective.constellationIds.filter(id => discoveredConstellations.includes(id)).length
      target = objective.constellationIds.length
      break
    case 'discover_season': {
      const seasonConstellations = CONSTELLATIONS.filter(c => c.season === objective.season)
      current = seasonConstellations.filter(c => discoveredConstellations.includes(c.id)).length
      target = seasonConstellations.length
      break
    }
    case 'discover_all':
      current = discoveredConstellations.length
      target = CONSTELLATIONS.length
      break
    case 'perfect':
      current = perfectObservations[objective.constellationId] ? 1 : 0
      break
    case 'perfect_count': {
      const perfectCount = Object.keys(perfectObservations).filter(k => perfectObservations[k]).length
      current = perfectCount
      break
    }
    case 'perfect_all_discovered': {
      const discoveredPerfect = discoveredConstellations.every(id => perfectObservations[id])
      current = (discoveredPerfect && discoveredConstellations.length > 0) ? 1 : 0
      break
    }
    case 'perfect_all': {
      const allPerfect = CONSTELLATIONS.every(c => perfectObservations[c.id])
      current = allPerfect ? 1 : 0
      break
    }
    case 'reobserve_perfect': {
      const obs = totalObservations[objective.constellationId] || 0
      const isPerfect = perfectObservations[objective.constellationId]
      current = isPerfect ? Math.min(obs, objective.value) : 0
      target = objective.value
      break
    }
    case 'total_observations': {
      const total = Object.values(totalObservations).reduce((sum, v) => sum + (v || 0), 0)
      current = Math.min(total, objective.value)
      target = objective.value
      break
    }
    case 'read':
      current = readMaterials ? Object.keys(readMaterials).length : 0
      break
    case 'read_mythology':
      current = readMythologies?.includes(objective.constellationId) ? 1 : 0
      break
    case 'write_note':
      current = Math.min(notes?.length || 0, objective.value)
      target = objective.value
      break
    case 'all_exams_passed':
      const allExams = Object.keys(RESEARCH_EXAMS)
      const passedCount = allExams.filter(id => passedExams?.includes(id)).length
      current = passedCount >= allExams.length ? 1 : 0
      break
    default:
      current = 0
  }

  const completed = current >= target
  const percentage = target > 0 ? Math.min((current / target) * 100, 100) : 0

  return { current, target, percentage, completed }
}

export function isMaterialUnlocked(material, researchState) {
  if (material.unlockedByDefault) return true
  const cond = material.unlockCondition
  if (!cond) return false

  switch (cond.type) {
    case 'topic_started':
      return researchState.startedTopicIds?.includes(cond.topicId)
    case 'topic_completed':
      return researchState.completedTopicIds?.includes(cond.topicId)
    case 'topic_progress': {
      const progress = researchState.topicProgress?.[cond.topicId] || 0
      return progress >= cond.progress
    }
    default:
      return false
  }
}

export function checkExamAnswer(question, userAnswer) {
  const { type, answer } = question
  switch (type) {
    case 'single':
      return userAnswer === answer
    case 'true_false':
      return userAnswer === answer
    case 'multiple':
      if (!Array.isArray(userAnswer) || !Array.isArray(answer)) return false
      if (userAnswer.length !== answer.length) return false
      const sortedUser = [...userAnswer].sort()
      const sortedAnswer = [...answer].sort()
      return sortedUser.every((v, i) => v === sortedAnswer[i])
    default:
      return false
  }
}
