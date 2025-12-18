import type { TagRule, TagMatchResult, TagMatcher } from "@tsTypes";

/* ========== */

// 标签样式类常量 - 包含颜色定义
export const TAG_CLASSES = {
    NEW: {
        className: "tag-new",
        color: "#FFB86C", // 新品橙色
    },
    HOT: {
        className: "tag-hot",
        color: "#FF5F57", // 热卖红色
    },
    DISCOUNT: {
        className: "tag-discount",
        color: "#FF8C42", // 折扣橙色
    },
    RECOMMEND: {
        className: "tag-recommend",
        color: "#5E9DFF", // 推荐蓝色
    },
    UPDATE: {
        className: "tag-update",
        color: "#9B59B6", // 更新紫色
    },
    PRICE_UP: {
        className: "tag-price-up",
        color: "#FF5F57", // 价格上涨红色
    },
    PRICE_DOWN: {
        className: "tag-price-down",
        color: "#2DD881", // 价格下降绿色
    },
    DEFAULT: {
        className: "tag-default",
        color: "#A0AEC0", // 默认灰色
    },
} as const;

// 为了保持向后兼容，同时导出一个只包含类名的对象
export const TAG_CLASS_NAMES = Object.fromEntries(
    Object.entries(TAG_CLASSES).map(([key, value]) => [key, value.className])
) as Record<keyof typeof TAG_CLASSES, string>;

// 颜色映射，方便在 JS/TS 中使用
export const TAG_COLORS = Object.fromEntries(
    Object.entries(TAG_CLASSES).map(([_key, value]) => [value.className, value.color])
) as Record<string, string>;

/* ========== */

// 默认标签匹配规则
export const DEFAULT_TAG_RULES: TagRule[] = [
    // 高优先级：精确的标签
    { keywords: ["限时优惠"], className: TAG_CLASSES.DISCOUNT.className, priority: 100 },
    { keywords: ["价格调整", "价格更新"], className: TAG_CLASSES.UPDATE.className, priority: 90 },
    { keywords: ["价格上涨"], className: TAG_CLASSES.PRICE_UP.className, priority: 90 },
    { keywords: ["价格下降"], className: TAG_CLASSES.PRICE_DOWN.className, priority: 90 },

    // 中优先级：明确的关键词
    {
        keywords: ["新品", "新到", "新款", "new"],
        className: TAG_CLASSES.NEW.className,
        priority: 80,
    },
    {
        keywords: ["热卖", "爆款", "畅销", "hot"],
        className: TAG_CLASSES.HOT.className,
        priority: 80,
    },
    {
        keywords: ["推荐", "精选", "必买"],
        className: TAG_CLASSES.RECOMMEND.className,
        priority: 80,
    },
    { keywords: ["调价"], className: TAG_CLASSES.UPDATE.className, priority: 80 },
    { keywords: ["涨价"], className: TAG_CLASSES.PRICE_UP.className, priority: 80 },
    { keywords: ["降价"], className: TAG_CLASSES.PRICE_DOWN.className, priority: 80 },

    // 低优先级：泛关键词
    {
        keywords: ["优惠", "折扣", "促销", "特价", "降价"],
        className: TAG_CLASSES.DISCOUNT,
        priority: 70,
    },
    { keywords: ["调整", "更新"], className: TAG_CLASSES.UPDATE.className, priority: 70 },

    // 默认标签：最基本的标签
    { keywords: ["新"], className: TAG_CLASSES.NEW.className, priority: 60 },
    { keywords: ["热"], className: TAG_CLASSES.HOT.className, priority: 60 },
];

/* ========== */

/**
 * 创建标签匹配器
 * @param rules 匹配规则，默认为 DEFAULT_TAG_RULES
 * @returns 标签匹配函数
 */
export function createTagMatcher(rules: TagRule[] = DEFAULT_TAG_RULES): TagMatcher {
    // 预先排序规则以提高性能
    const sortedRules = [...rules].sort((a, b) => b.priority - a.priority);

    // 标签匹配函数
    return function getTagClass(tag: string): string {
        const lowerTag = tag.toLowerCase();
        let bestMatch: TagMatchResult | null = null;

        for (const rule of sortedRules) {
            // 如果当前最佳匹配的优先级已经高于剩余规则的最大优先级，提前退出
            if (bestMatch && bestMatch.priority >= rule.priority) break;

            // 检查当前规则的关键词是否在标签中
            for (const keyword of rule.keywords) {
                if (lowerTag.includes(keyword.toLowerCase())) {
                    bestMatch = {
                        className: rule.className,
                        priority: rule.priority,
                        matchedKeyword: keyword,
                    };

                    break; // 找到该规则的匹配，跳出关键词循环
                }
            }
        }

        // 如果没有找到匹配，返回默认样式类
        return bestMatch ? bestMatch.className : TAG_CLASSES.DEFAULT.className;
    };
}

// 默认的标签匹配器实例
export const tagMatcher = createTagMatcher();

// 获取标签颜色
export const getTagColor = (tag: string) => {
    const className = tagMatcher(tag);
    return TAG_COLORS[className as keyof typeof TAG_COLORS] || TAG_COLORS["tag-default"];
};

/**
 * 批量匹配标签
 * @param tags 标签数组
 * @returns 样式类数组
 */
export function batchGetTagClass(tags: string[]): string[] {
    return tags.map(tagMatcher);
}

/**
 * 扩展匹配规则
 * @param newRules 新规则
 * @param baseRules 基础规则
 * @returns 扩展后的匹配函数
 */
export function extendTagMatcher(
    newRules: TagRule[],
    baseRules: TagRule[] = DEFAULT_TAG_RULES
): TagMatcher {
    const combinedRules = [...newRules, ...baseRules];
    return createTagMatcher(combinedRules);
}
