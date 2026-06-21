import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import {
  SHOP_CATEGORIES,
  SHOP_ITEMS,
  SHOP_SKINS,
  SHOP_DECORATIONS,
  RARITY_COLORS,
  getShopItemById
} from '../data/shop'

export default function StarShop() {
  const {
    setActivePanel,
    observationCalendar,
    shop,
    buyShopItem,
    useShopItem,
    setCurrentSkin,
    toggleDecoration,
    addStardust
  } = useGameStore()

  const [activeCategory, setActiveCategory] = useState('skins')
  const [selectedItem, setSelectedItem] = useState(null)
  const [purchaseMessage, setPurchaseMessage] = useState(null)

  const stardust = observationCalendar.stardust

  const getItemsByCategory = (category) => {
    switch (category) {
      case 'items':
        return SHOP_ITEMS
      case 'skins':
        return SHOP_SKINS
      case 'decorations':
        return SHOP_DECORATIONS
      default:
        return []
    }
  }

  const isItemOwned = (item) => {
    if (item.type === 'skin') {
      return shop.unlockedSkins.includes(item.id)
    }
    if (item.type === 'decoration') {
      return shop.unlockedDecorations.includes(item.id)
    }
    if (item.type === 'consumable') {
      return (shop.inventory[item.id] || 0) > 0
    }
    return false
  }

  const getItemCount = (itemId) => {
    return shop.inventory[itemId] || 0
  }

  const isSkinEquipped = (skinId) => {
    return shop.currentSkin === skinId
  }

  const isDecorationActive = (decoId) => {
    return shop.activeDecorations.includes(decoId)
  }

  const handleBuy = (item) => {
    const result = buyShopItem(item.id)
    if (result.success) {
      setPurchaseMessage({ type: 'success', text: `成功购买 ${item.name}！` })
    } else {
      const messages = {
        not_enough_stardust: '星尘不足',
        already_owned: '已拥有该物品',
        max_stack_reached: '已达最大堆叠数',
        item_not_found: '物品不存在'
      }
      setPurchaseMessage({ type: 'error', text: messages[result.reason] || '购买失败' })
    }
    setTimeout(() => setPurchaseMessage(null), 2000)
  }

  const handleUse = (item) => {
    const result = useShopItem(item.id)
    if (result.success) {
      setPurchaseMessage({ type: 'success', text: `使用了 ${item.name}！` })
    } else {
      setPurchaseMessage({ type: 'error', text: '使用失败' })
    }
    setTimeout(() => setPurchaseMessage(null), 2000)
  }

  const handleEquipSkin = (skinId) => {
    setCurrentSkin(skinId)
    setPurchaseMessage({ type: 'success', text: '皮肤已更换！' })
    setTimeout(() => setPurchaseMessage(null), 2000)
  }

  const handleToggleDecoration = (decoId) => {
    toggleDecoration(decoId)
  }

  const currentItems = getItemsByCategory(activeCategory)

  const renderItemCard = (item) => {
    const owned = isItemOwned(item)
    const rarity = RARITY_COLORS[item.rarity] || RARITY_COLORS.common
    const count = getItemCount(item.id)
    const equipped = item.type === 'skin' && isSkinEquipped(item.id)
    const decoActive = item.type === 'decoration' && isDecorationActive(item.id)

    return (
      <div
        key={item.id}
        className={`p-4 rounded-2xl border transition-all cursor-pointer
                    ${rarity.bg} ${rarity.border}
                    ${selectedItem?.id === item.id ? 'ring-2 ring-white/30 scale-[1.02]' : ''}
                    hover:scale-[1.02] hover:border-white/20`}
        onClick={() => setSelectedItem(item)}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="text-3xl">{item.icon}</div>
          <span className={`text-[9px] px-2 py-0.5 rounded-full ${rarity.bg} ${rarity.text} border ${rarity.border}`}>
            {rarity.label}
          </span>
        </div>

        <h4 className="text-sm font-display text-white mb-1">{item.name}</h4>
        <p className="text-[10px] text-white/40 line-clamp-2 mb-3">{item.description}</p>

        <div className="flex items-center justify-between">
          {item.priceType === 'free' ? (
            <span className="text-[10px] text-green-400">免费</span>
          ) : (
            <div className="flex items-center gap-1">
              <span className="text-star-gold">✦</span>
              <span className={`text-sm font-mono ${stardust >= item.price ? 'text-star-gold' : 'text-red-400'}`}>
                {item.price}
              </span>
            </div>
          )}

          {item.type === 'consumable' && count > 0 && (
            <span className="text-[10px] text-white/60">×{count}</span>
          )}

          {item.type === 'skin' && equipped && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-300">
              使用中
            </span>
          )}

          {item.type === 'decoration' && decoActive && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-nebula-cyan/20 text-nebula-cyan">
              启用中
            </span>
          )}
        </div>
      </div>
    )
  }

  const renderDetailPanel = () => {
    if (!selectedItem) return null

    const item = selectedItem
    const rarity = RARITY_COLORS[item.rarity] || RARITY_COLORS.common
    const owned = isItemOwned(item)
    const count = getItemCount(item.id)
    const equipped = item.type === 'skin' && isSkinEquipped(item.id)
    const decoActive = item.type === 'decoration' && isDecorationActive(item.id)
    const canAfford = stardust >= item.price

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4
                      bg-space-900/80 backdrop-blur-sm animate-in fade-in duration-200"
           onClick={() => setSelectedItem(null)}>
        <div
          className="w-full max-w-sm glass-panel p-6 animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="text-5xl">{item.icon}</div>
            <button
              onClick={() => setSelectedItem(null)}
              className="icon-btn"
            >
              ✕
            </button>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-display text-white">{item.name}</h3>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${rarity.bg} ${rarity.text} border ${rarity.border}`}>
                {rarity.label}
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
          </div>

          {item.type === 'skin' && item.colors && (
            <div className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-[10px] text-white/40 mb-2">主题配色预览</p>
              <div className="flex gap-2">
                <div
                  className="w-8 h-8 rounded-lg border border-white/20"
                  style={{ backgroundColor: item.colors.bg }}
                />
                <div
                  className="w-8 h-8 rounded-full border border-white/20"
                  style={{ backgroundColor: item.colors.star }}
                />
                <div
                  className="w-8 h-8 rounded-lg border border-white/20"
                  style={{ backgroundColor: item.colors.accent }}
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 mb-4">
            <span className="text-xs text-white/60">价格</span>
            {item.priceType === 'free' ? (
              <span className="text-sm text-green-400 font-medium">免费</span>
            ) : (
              <div className="flex items-center gap-1">
                <span className="text-star-gold text-lg">✦</span>
                <span className={`text-lg font-mono font-bold ${canAfford ? 'text-star-gold' : 'text-red-400'}`}>
                  {item.price}
                </span>
              </div>
            )}
          </div>

          {item.type === 'consumable' && owned && (
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 mb-4">
              <span className="text-xs text-white/60">当前拥有</span>
              <span className="text-sm text-white font-medium">× {count}</span>
            </div>
          )}

          <div className="space-y-2">
            {item.type === 'consumable' && (
              <>
                {owned && (
                  <button
                    onClick={() => handleUse(item)}
                    className="w-full py-2.5 rounded-xl text-sm font-medium transition-all
                               bg-gradient-to-r from-nebula-purple to-nebula-cyan
                               text-white hover:shadow-lg active:scale-98"
                  >
                    使用
                  </button>
                )}
                {(!item.maxStack || count < item.maxStack) && (
                  <button
                    onClick={() => handleBuy(item)}
                    disabled={!canAfford && item.priceType !== 'free'}
                    className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all
                               ${canAfford || item.priceType === 'free'
                                 ? 'bg-gradient-to-r from-star-gold/20 to-amber-500/20 border border-star-gold/30 text-star-gold hover:from-star-gold/30 hover:to-amber-500/30'
                                 : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/10'}`}
                  >
                    购买
                  </button>
                )}
              </>
            )}

            {item.type === 'skin' && (
              <>
                {!owned ? (
                  <button
                    onClick={() => handleBuy(item)}
                    disabled={!canAfford && item.priceType !== 'free'}
                    className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all
                               ${canAfford || item.priceType === 'free'
                                 ? 'bg-gradient-to-r from-star-gold/20 to-amber-500/20 border border-star-gold/30 text-star-gold hover:from-star-gold/30 hover:to-amber-500/30'
                                 : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/10'}`}
                  >
                    购买并解锁
                  </button>
                ) : equipped ? (
                  <div className="w-full py-2.5 rounded-xl text-sm font-medium text-center
                                  bg-green-500/20 text-green-300 border border-green-500/30">
                    ✓ 当前使用中
                  </div>
                ) : (
                  <button
                    onClick={() => handleEquipSkin(item.id)}
                    className="w-full py-2.5 rounded-xl text-sm font-medium transition-all
                               bg-gradient-to-r from-nebula-purple to-nebula-cyan
                               text-white hover:shadow-lg active:scale-98"
                  >
                    使用该皮肤
                  </button>
                )}
              </>
            )}

            {item.type === 'decoration' && (
              <>
                {!owned ? (
                  <button
                    onClick={() => handleBuy(item)}
                    disabled={!canAfford && item.priceType !== 'free'}
                    className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all
                               ${canAfford || item.priceType === 'free'
                                 ? 'bg-gradient-to-r from-star-gold/20 to-amber-500/20 border border-star-gold/30 text-star-gold hover:from-star-gold/30 hover:to-amber-500/30'
                                 : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/10'}`}
                  >
                    购买并解锁
                  </button>
                ) : (
                  <button
                    onClick={() => handleToggleDecoration(item.id)}
                    className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all
                               ${decoActive
                                 ? 'bg-nebula-cyan/20 border border-nebula-cyan/30 text-nebula-cyan'
                                 : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10'}`}
                  >
                    {decoActive ? '✓ 已启用' : '启用装饰'}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display text-white">观星商店</h2>
              <p className="text-xs text-white/50 mt-1">
                用星尘兑换道具与装扮
              </p>
            </div>
            <button
              onClick={() => setActivePanel(null)}
              className="icon-btn"
              aria-label="关闭"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between p-3 rounded-xl
                          bg-gradient-to-r from-star-gold/10 to-amber-500/10
                          border border-star-gold/20">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💫</span>
              <div>
                <p className="text-[10px] text-white/50">当前星尘</p>
                <p className="text-lg font-display text-star-gold font-bold">
                  {stardust.toLocaleString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                addStardust(50, '测试获取')
                setPurchaseMessage({ type: 'success', text: '获得 50 星尘！' })
                setTimeout(() => setPurchaseMessage(null), 2000)
              }}
              className="px-3 py-1.5 rounded-lg text-[10px] font-medium
                         bg-star-gold/20 text-star-gold border border-star-gold/30
                         hover:bg-star-gold/30 transition-all"
            >
              + 获取星尘
            </button>
          </div>

          <div className="mt-4 flex gap-2">
            {Object.values(SHOP_CATEGORIES).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all
                           flex items-center justify-center gap-1.5
                           ${activeCategory === cat.id
                             ? 'bg-white/10 text-white border border-white/10'
                             : 'text-white/50 hover:text-white/80 hover:bg-white/5'}`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-5">
          <div className="grid grid-cols-2 gap-3">
            {currentItems.map((item) => renderItemCard(item))}
          </div>

          {currentItems.length === 0 && (
            <div className="h-40 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3 opacity-30">🛒</div>
              <h4 className="text-white/60 font-display mb-1">暂无商品</h4>
              <p className="text-xs text-white/40 max-w-xs leading-relaxed">
                敬请期待更多精彩商品
              </p>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-2 rounded-lg bg-white/5">
              <p className="text-lg font-display text-white">{shop.unlockedSkins.length}</p>
              <p className="text-[10px] text-white/40">已解锁皮肤</p>
            </div>
            <div className="p-2 rounded-lg bg-white/5">
              <p className="text-lg font-display text-white">{shop.unlockedDecorations.length}</p>
              <p className="text-[10px] text-white/40">已解锁装饰</p>
            </div>
            <div className="p-2 rounded-lg bg-white/5">
              <p className="text-lg font-display text-white">
                {Object.values(shop.inventory).reduce((a, b) => a + b, 0)}
              </p>
              <p className="text-[10px] text-white/40">道具库存</p>
            </div>
          </div>
        </div>

        {purchaseMessage && (
          <div className={`absolute top-20 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl
                          text-sm font-medium z-50 animate-in fade-in slide-in-from-top-2
                          ${purchaseMessage.type === 'success'
                            ? 'bg-green-500/90 text-white'
                            : 'bg-red-500/90 text-white'}`}>
            {purchaseMessage.text}
          </div>
        )}

        {renderDetailPanel()}
      </div>
    </div>
  )
}
