export const STORY_ARCS = {
  spring: {
    id: 'spring',
    title: '春之章·北斗的指引',
    subtitle: '万物复苏的季节，寻找北极星的旅程',
    themeColor: 'from-pink-500 to-rose-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-300',
    icon: '🌸',
    prologue: {
      title: '序章·星光的召唤',
      content: `当第一缕春风拂过大地，沉睡的星空开始苏醒。

你站在旷野之中，仰望渐渐亮起的夜空。一颗明亮的星星在北方闪烁，仿佛在向你发出召唤。

"来寻找我吧，" 星光似乎在低语，"沿着北斗的指引，你将发现隐藏在星空中的古老秘密。"

你的星座探索之旅，就在这个春日的夜晚，正式开始了。`
    },
    epilogue: {
      title: '终章·春日守望者',
      reward: { type: 'stardust', amount: 200 },
      content: `当你完成了春季所有星座的连线，北斗七星在夜空中熠熠生辉。

你忽然明白，这些星星不仅仅是夜空中的光点，它们是跨越时空的信使，承载着古人的智慧与想象。

卡利斯托化作的大熊座，永远环绕着北极星旋转，守护着每一个仰望星空的人。

春天的故事暂告一段落，但星空的奥秘才刚刚揭开一角。

夏季的银河正在远方等待，那里有更多璀璨的故事等着你去发现...

【解锁称号：春日守望者】
【获得奖励：星尘 +200】`
    },
    chapters: {
      ursa_major: {
        id: 'ursa_major',
        order: 1,
        title: '第一章·北斗七星',
        subtitle: '永恒的导航者',
        unlockRequirement: 'complete_ursa_major',
        content: `你成功连接了北斗七星！

七颗明亮的星星在夜空中勾勒出一只巨大的熊的轮廓。这就是大熊座，北半球最著名的星座之一。

在古希腊神话中，美丽的卡利斯托被嫉妒的赫拉变成了熊。宙斯为了保护她，将她升上天界，成为了大熊座。

"谢谢你，" 星光中似乎传来温柔的声音，"很久没有人能够完整地描绘出我的模样了。"

沿着勺口两颗星的连线向前延伸五倍，你就能找到北极星——那颗永远指向北方的永恒之星。

这是你星座探索的第一步，也是你与星空建立联系的开始。`,
        reward: { type: 'stardust', amount: 50 },
        narrativeChoice: {
          question: '你接下来想做什么？',
          options: [
            { id: 'continue', text: '继续探索其他星座', nextHint: '还有更多星座等待发现' },
            { id: 'meditate', text: '在这里多停留一会儿，感受星光', nextHint: '星光温暖而宁静' }
          ]
        }
      }
    }
  },
  summer: {
    id: 'summer',
    title: '夏之章·银河的低语',
    subtitle: '繁星璀璨的季节，聆听星河的故事',
    themeColor: 'from-orange-500 to-amber-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-300',
    icon: '☀️',
    prologue: {
      title: '序章·银河初升',
      content: `夏日的夜晚，银河横贯天际，像一条缀满钻石的丝带。

天蝎座在南方天空缓缓升起，红色的心宿二如同燃烧的心脏。天琴座的织女星在银河西岸闪耀，等待着与东岸的牛郎星相会。

"夏天的星空是最热闹的，" 夜风似乎在低语，"每一颗星星都有自己的故事。"

你深吸一口气，准备好探索这璀璨的夏季星空了吗？`
    },
    epilogue: {
      title: '终章·银河守护者',
      reward: { type: 'stardust', amount: 300 },
      content: `当夏季的最后一颗星星被你连接，整个银河仿佛都在为你闪耀。

天蝎座的毒刺、天琴座的竖琴，还有那永远相望的牛郎织女——这些古老的故事在你的脑海中交织成一幅壮丽的星图。

你明白了，星座不仅仅是星星的组合，更是人类想象力的结晶。每一个连线，都是与古人的一次对话。

"你已经成为了银河的守护者，" 星光汇聚成的声音说道，"从今往后，这片星空将永远向你敞开。"

夏季的故事画上了句点，但秋季的仙后座已经在东方天空升起，新的冒险即将开始...

【解锁称号：银河守护者】
【获得奖励：星尘 +300】`
    },
    chapters: {
      scorpius: {
        id: 'scorpius',
        order: 1,
        title: '第一章·天蝎座',
        subtitle: '永远的猎手',
        unlockRequirement: 'complete_scorpius',
        content: `巨大的蝎子在南方天空缓缓爬行，红色的心宿二是它跳动的心脏。

这只蝎子是阿波罗派去刺杀猎人奥利安的。奥利安因自负而激怒了众神，蝎子从地缝中钻出，用毒刺结束了他的生命。

"我完成了我的使命，" 蝎子的星光低沉地说道，"从此与奥利安永不相见。他升起时我落下，我升起时他落下。"

这是一场永恒的追逐，也是星空最浪漫的悲剧。

心宿二是一颗红超巨星，它的体积是太阳的700倍。如果把它放在太阳的位置，它会吞没水星、金星、地球和火星。

凝视这颗红色的巨星，你能感受到宇宙的浩瀚与时间的永恒。`,
        reward: { type: 'stardust', amount: 60 },
        narrativeChoice: {
          question: '天蝎座让你想到了什么？',
          options: [
            { id: 'power', text: '力量与宿命', nextHint: '命运的齿轮从未停止' },
            { id: 'tragedy', text: '永恒的悲剧', nextHint: '有些故事，早已注定' }
          ]
        }
      },
      lyra: {
        id: 'lyra',
        order: 2,
        title: '第二章·天琴座',
        subtitle: '俄耳甫斯的悲歌',
        unlockRequirement: 'complete_lyra',
        content: `小小的竖琴在银河西岸静静地躺着，织女星是它最明亮的装饰。

这是俄耳甫斯的竖琴。他的琴声能让顽石流泪，能让猛兽驻足。为了救回死去的妻子欧律狄刻，他带着这把竖琴深入冥界。

"只差一步...就差一步了..." 星光中传来悠长的叹息。

俄耳甫斯几乎成功了，但在最后一刻，他忍不住回头看了一眼——妻子就此永远消失。

他死后，宙斯将这把竖琴升上天界，让它的音乐永远在星空中回响。

织女星是北半球第二亮的恒星，距离地球25光年。它的光需要25年才能到达你的眼睛。

当你凝视织女星时，你看到的是25年前的星光——那是过去，也是现在。`,
        reward: { type: 'stardust', amount: 70 },
        narrativeChoice: {
          question: '如果你是俄耳甫斯，你会回头吗？',
          options: [
            { id: 'yes', text: '会，我无法忍受未知', nextHint: '爱让人变得软弱，也变得勇敢' },
            { id: 'no', text: '不会，我会选择相信', nextHint: '信任是最难的功课' }
          ]
        }
      }
    }
  },
  autumn: {
    id: 'autumn',
    title: '秋之章·仙后的王冠',
    subtitle: '秋高气爽的季节，王族星座的传说',
    themeColor: 'from-amber-600 to-yellow-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-300',
    icon: '🍂',
    prologue: {
      title: '序章·王族的苏醒',
      content: `秋风吹走了夏日的炎热，也吹来了王族星座的传说。

仙后座在北极星附近闪烁，她的W形轮廓像是一位骄傲的王后。仙王座、仙女座、英仙座...整个王族都在秋季的夜空中苏醒。

"炫耀美貌是要付出代价的，" 秋风带来古老的警告，"但勇气和爱，能够战胜一切。"

埃塞俄比亚的王族故事，即将在你的眼前展开...`
    },
    epilogue: {
      title: '终章·秋水共长天',
      reward: { type: 'stardust', amount: 300 },
      content: `当你完成了秋季所有星座的连接，仙后座在夜空中优雅地旋转，有时头朝上，有时头朝下——那是海神对她的惩罚。

但卡西奥佩娅并不后悔。她爱她的女儿，愿意为她承受任何羞辱。

"是的，我炫耀过我的美貌，" 王后的星光平静地说道，"但如果重来一次，我还是会那样做。因为我是一个母亲。"

你忽然明白，这些神话故事不仅仅是故事，它们是关于人性、关于爱、关于勇气的永恒探讨。

秋季的星空让你收获了智慧。

而冬季的猎户座已经在东方升起，那位伟大的猎人正在等待你的到来...

【解锁称号：秋水共长天】
【获得奖励：星尘 +300】`
    },
    chapters: {
      cassiopeia: {
        id: 'cassiopeia',
        order: 1,
        title: '第一章·仙后座',
        subtitle: '骄傲的王后',
        unlockRequirement: 'complete_cassiopeia',
        content: `五颗星星组成W形，在北极星对面优雅地旋转。

这是埃塞俄比亚的王后卡西奥佩娅。她因自恃美貌，夸耀自己和女儿比海神的女儿们更美丽，而触怒了海神波塞冬。

"我不后悔，" 星光中传来骄傲的声音，"我的女儿安德洛墨达是世界上最美丽的，这是事实。"

为了惩罚她，海神将她钉在天上的宝座上永远旋转，让她有时头朝下，永远承受羞辱。

但卡西奥佩娅的眼神中没有悔恨，只有母爱。因为她知道，她的女儿最终被英雄珀耳修斯救下，获得了幸福。

"惩罚算什么呢？" 王后的星光温柔地说，"只要我的孩子平安，我愿意承受一切。"

你凝视着这颗永不屈服的星星，忽然明白了母爱的伟大。`,
        reward: { type: 'stardust', amount: 60 },
        narrativeChoice: {
          question: '你如何看待卡西奥佩娅的选择？',
          options: [
            { id: 'understand', text: '理解她，母爱无价', nextHint: '为了孩子，父母可以付出一切' },
            { id: 'foolish', text: '她太骄傲了，本可避免', nextHint: '性格决定命运' }
          ]
        }
      },
      cygnus: {
        id: 'cygnus',
        order: 2,
        title: '第二章·天鹅座',
        subtitle: '宙斯的化身',
        unlockRequirement: 'complete_cygnus',
        content: `优雅的天鹅在银河中展翅飞翔，它的十字形轮廓被称为"北十字"。

这是宙斯的化身。为了接近美丽的斯巴达王后勒达，宙斯变成了一只雪白的天鹅。勒达被这只美丽的天鹅吸引，与它亲近。

后来，勒达生下了两枚鹅蛋——一枚孵出了引发特洛伊战争的绝世美女海伦，另一枚孵出了双胞胎兄弟卡斯托尔和波吕丢刻斯。

"我的孩子们，" 天鹅的星光慈爱地说，"他们是我在人间最珍贵的礼物。"

天鹅座最亮的星是天津四，它是一颗蓝白色的超巨星，距离地球约2600光年。它的光在你出生之前很久就已经出发，穿越了无数个世纪才到达你的眼睛。

当你看着这颗星星时，你看到的是2600年前的星光——那时，古希腊的哲人们正在思考宇宙的奥秘。`,
        reward: { type: 'stardust', amount: 70 },
        narrativeChoice: {
          question: '如果你能化身成一种动物，你会选择什么？',
          options: [
            { id: 'bird', text: '鸟，自由地飞翔', nextHint: '天空是最广阔的舞台' },
            { id: 'lion', text: '狮子，森林之王', nextHint: '力量是最好的保护' }
          ]
        }
      }
    }
  },
  winter: {
    id: 'winter',
    title: '冬之章·猎户的誓言',
    subtitle: '寒夜深沉的季节，最耀眼的星座',
    themeColor: 'from-cyan-500 to-blue-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-300',
    icon: '❄️',
    prologue: {
      title: '序章·寒夜的猎人',
      content: `寒冷的冬夜，空气清冽，星光格外明亮。

猎户座在南方天空闪耀，他是冬夜的王者。红色的参宿四是他的右肩，蓝色的参宿七是他的左脚，三颗整齐排列的星星是他的腰带。

"我是奥利安，" 星光中传来豪迈的声音，"世上没有我杀不死的野兽！"

但这份骄傲，最终导致了他的悲剧...

你准备好聆听这位伟大猎人的故事了吗？`
    },
    epilogue: {
      title: '终章·极夜追光人',
      reward: { type: 'stardust', amount: 500 },
      content: `当你完成了猎户座的连接，冬夜的星空仿佛为你点亮了最璀璨的烟火。

奥利安站在星空中，他的猎犬大犬座在他脚边，他的猎物金牛座在他面前。即使在天界，他依然是那位骄傲的猎人。

"我曾经自负，" 猎户座的星光承认道，"我以为我可以战胜一切。但那只蝎子教会了我，即使是最强的人，也有自己的弱点。"

这是奥利安的忏悔，也是他的成长。即使在天界，他依然在与天蝎座进行着永恒的追逐，这是他的宿命，也是他的救赎。

你走完了四季的旅程，连接了所有的星座，聆听了所有的故事。

现在，你已经不仅仅是一个观星者，你已经成为了星空的一部分——因为你理解了星星背后的故事，而那些故事，也将通过你，继续流传下去。

【解锁称号：极夜追光人】
【获得奖励：星尘 +500】
【解锁最终成就：四季轮回】`
    },
    chapters: {
      orion: {
        id: 'orion',
        order: 1,
        title: '第一章·猎户座',
        subtitle: '冬夜之王',
        unlockRequirement: 'complete_orion',
        content: `猎户座是冬夜最耀眼的星座，他的光芒盖过了周围所有的星星。

参宿四是一颗红超巨星，它已经走到了生命的尽头。在未来的某一天，它会爆炸成一颗超新星，亮度可能超过满月，甚至在白天都能看到。

参宿七是一颗蓝超巨星，它的亮度是太阳的12万倍。如果把它放在太阳的位置，地球会在瞬间被烤焦。

猎户座大星云位于腰带三星的下方，那是一个巨大的恒星托儿所，无数新的恒星正在那里诞生。

"看到了吗？" 奥利安的星光自豪地说，"我的腰带下方，新的生命正在孕育。这就是宇宙——旧的星星死去，新的星星诞生，永恒轮回。"

你站在星空之下，忽然感到自己既是渺小的，也是伟大的。你身体里的每一个原子，都来自于某颗爆炸的恒星。你是星尘，你也是宇宙。

当你完成这个星座的连接，你完成了四季旅程的最后一步——但这不是结束，而是新的开始。`,
        reward: { type: 'stardust', amount: 100 },
        narrativeChoice: {
          question: '四季旅程即将结束，你最大的收获是什么？',
          options: [
            { id: 'knowledge', text: '知识，了解了星座的秘密', nextHint: '知识是永恒的财富' },
            { id: 'wisdom', text: '智慧，读懂了星光中的故事', nextHint: '故事让星星活了过来' }
          ]
        }
      }
    }
  }
}

export const FINAL_CHAPTER = {
  id: 'final',
  title: '终章·星辰之书',
  subtitle: '四季轮回，星空永恒',
  themeColor: 'from-nebula-purple to-nebula-cyan',
  bgColor: 'bg-nebula-purple/10',
  borderColor: 'border-nebula-purple/30',
  textColor: 'text-nebula-cyan',
  icon: '📖',
  requirement: 'all_seasons_complete',
  reward: { type: 'stardust', amount: 1000 },
  content: `恭喜你，勇敢的观星者！

你已经完成了四季的旅程，连接了所有的星座，聆听了每一颗星星的故事。

从春季北斗七星的指引，到夏季银河的璀璨；
从秋季仙后的骄傲，到冬季猎户的誓言。

每一颗星星都有自己的故事，每一个故事都承载着古人的智慧与想象。

现在，当你仰望星空时，你看到的不再是冰冷的光点，而是一个个鲜活的生命——有骄傲的王后、悲伤的音乐家、勇敢的猎人、还有那永恒追逐的天蝎与猎户。

你已经成为了星空的见证者，也成为了故事的传承者。

但这不是结束。

宇宙中有88个星座，还有更多的故事等着你去发现。每一个晴朗的夜晚，星空都在那里等待着你。

"永远保持好奇，" 所有的星光汇聚成一个声音，"永远仰望星空。"

——愿你的旅途，如星光般璀璨。

【解锁终极称号：星辰之书的守护者】
【获得奖励：星尘 +1000】
【解锁：星座探索者的真正旅程才刚刚开始...】`
}

export const getStoryArc = (seasonId) => STORY_ARCS[seasonId]

export const getChapter = (seasonId, constellationId) => {
  const arc = STORY_ARCS[seasonId]
  return arc?.chapters?.[constellationId]
}

export const getSeasonForConstellation = (constellationId) => {
  for (const [seasonId, arc] of Object.entries(STORY_ARCS)) {
    if (arc.chapters[constellationId]) {
      return seasonId
    }
  }
  return null
}

export const getAllChapters = () => {
  const chapters = []
  Object.values(STORY_ARCS).forEach(arc => {
    Object.values(arc.chapters).forEach(chapter => {
      chapters.push(chapter)
    })
  })
  return chapters
}

export const getChapterCount = () => {
  return getAllChapters().length
}

export const isSeasonComplete = (seasonId, discoveredConstellations) => {
  const arc = STORY_ARCS[seasonId]
  if (!arc) return false
  const chapterIds = Object.keys(arc.chapters)
  return chapterIds.every(id => discoveredConstellations.includes(id))
}

export const isAllSeasonsComplete = (discoveredConstellations) => {
  return Object.keys(STORY_ARCS).every(seasonId => 
    isSeasonComplete(seasonId, discoveredConstellations)
  )
}
