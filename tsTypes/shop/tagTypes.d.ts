// 创建类型别名
export type TagClassType = (typeof TAG_CLASSES)[keyof typeof TAG_CLASSES];

// 在 TagRule 接口中使用
export interface TagRule {
    keywords: string[];
    className: TagClassType; // 使用类型别名
    priority: number;
}

export interface TagMatchResult {
    className: string;
    priority: number;
    matchedKeyword?: string;
}

export type TagMatcher = (tag: string) => string;
