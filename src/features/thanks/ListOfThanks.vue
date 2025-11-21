<!-- 致谢列表 -->

<template>
    <div class="thanks-list" v-for="[key, { category, members }] in thanksEntries" :key="key" :id="key">
        <!-- 分类标题 -->
        <div class="list-header">
            <h1 class="list-title">
                <span class="title-emoji">{{ category.emoji }}</span>
                <span class="title-name">{{ category.name }}</span>
            </h1>
            <p class="list-title-description">{{ category.description }}</p>
        </div>

        <!-- 分类内容 -->
        <article class="list-body" :class="{ center: members.length <= 2 }">
            <div class="list-item" v-for="itemInfo in members" :key="itemInfo.id">
                <!-- 内容标题区域 -->
                <div class="list-item-title">
                    <!-- 图标 -->
                    <div class="title-icon" :class="{ radiused: itemInfo.icon.mark }">
                        <img class="icon-img" loading="lazy" v-if="hasIcon(itemInfo)" :src="itemInfo.icon.value!"
                            :alt="itemInfo.name" />
                        <div v-else class="icon-placeholder">
                            {{ itemInfo.name.charAt(0) }}
                        </div>
                    </div>

                    <!-- 内容信息 -->
                    <div class="title-item-name">
                        <h3 class="item-name">
                            <a v-if="hasLink(itemInfo)" :href="itemInfo.link.value!" target="_blank">
                                {{ itemInfo.name }}
                            </a>
                            <span v-else>{{ itemInfo.name }}</span>
                        </h3>
                        <div class="item-meta">
                            <span class="item-type">{{ itemInfo.type }}</span>
                        </div>
                    </div>
                </div>

                <!-- 内容描述区域 -->
                <div class="list-item-body">
                    <div class="item-description">
                        <p v-for="(desc, index) in getDescription(category, itemInfo)" :key="index" :title="desc"
                            class="desc-line" :class="{ 'stars-description': desc === defaultDesc }">
                            {{ desc }}
                        </p>
                    </div>

                    <!-- 标签 -->
                    <div v-if="hasTags(itemInfo)" class="item-tags">
                        <span v-for="tag in itemInfo.tags.value ?? []" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import type { ThanksKeys, ThanksList, Category, Member } from "@tsTypes";
import { computed } from "vue";

/* props */
const { thanksList, orderedKeys } = defineProps<{
    thanksList: ThanksList;
    orderedKeys: Array<ThanksKeys>;
}>();

/* 顺序 entries */
const thanksEntries = computed(() => orderedKeys.map(k => [k, thanksList[k]] as const));

/* 默认描述 */
const defaultDesc: string = "这里藏着一个好故事，等待书写"

/* 存在性判断 */
const hasIcon = (i: Member): boolean => i.icon.exists && !!i.icon.value;
const hasLink = (i: Member): boolean => i.link.exists && !!i.link.value;
const hasTags = (i: Member): boolean => i.tags.exists && !!i.tags.value;

const isStars = (c: Category): boolean =>
    ["starBuilders", "starGuides", "starSculptors"].includes(c.key as ThanksKeys);

/* 获取描述（缓存 + 类型守卫） */
const descCache = new Map<string, string[]>();

function getDescription(category: Category, member: Member): string[] {
    const cacheKey = `${category.key}-${member.id}`;
    if (descCache.has(cacheKey)) return descCache.get(cacheKey)!;

    let out: string[];

    /* 三大组：只拿第一条 */
    if (isStars(category)) {
        const raw = member.description.exists ? (member.description.value ?? []) : [];
        out = raw.length ? [raw[0]] : [defaultDesc];
    } else {

        /* 非三大组：确定性随机两条 */
        const raw = member.description.exists ? (member.description.value ?? []) : [];
        if (raw.length === 0) out = ["暂无描述", ""];
        else if (raw.length === 1) out = [raw[0], ""];
        else if (raw.length === 2) out = [raw[0], raw[1]];
        else {
            const hash = member.id.split("").reduce((a, ch) => a + ch.charCodeAt(0), 0);
            const i = hash % raw.length;
            const j = (hash * 7 + 11) % raw.length;
            out = i < j ? [raw[i], raw[j]] : [raw[j], raw[i]];
        }
    }

    descCache.set(cacheKey, out);
    return out;
}
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.thanks-list {
    width: 95%;
    margin: 0 auto 4rem;

    &#cornerstoneTech {
        margin-bottom: 2rem;
    }

    // 平板
    @media (max-width: (@desktop-breakpoint - 1px)) and (min-width: @tablet-breakpoint) {
        width: 98%;
    }
}

.list-header {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;

    .list-title {
        .flex-center();
        font-size: 2.5rem;

        .title-emoji {
            margin: 0 0.5rem;
        }

        .title-name {
            margin: 0 0.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        // 平板
        @media (max-width: (@desktop-breakpoint - 1px)) and (min-width: @tablet-breakpoint) {
            font-size: 2rem;
        }

        // 移动
        @media (max-width: (@tablet-breakpoint - 1px)) {
            font-size: 1.8rem;
        }
    }

    .list-title-description {
        font-size: 1.25rem;
        color: #94a3b8;
        margin: 0 auto;
        max-width: 600px;
        line-height: 1.6;

        // 平板
        @media (max-width: (@desktop-breakpoint - 1px)) and (min-width: @tablet-breakpoint) {
            font-size: 1.125rem;
        }

        // 移动
        @media (max-width: (@tablet-breakpoint - 1px)) {
            font-size: 1rem;
        }
    }
}

.list-body {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    &.center {
        .flex-center();
    }

    .list-item {
        @padding: 1.25rem;

        max-width: 100%;
        background: rgba(30, 41, 59, 0.8);
        border: 0.0625rem solid rgba(71, 85, 105, 0.3);
        border-radius: 1rem;
        padding: @padding;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        flex: 0 0 calc((100% - 2 * 1rem) / 3);

        &:hover {
            transform: translateY(-4px);
            border-color: rgba(99, 102, 241, 0.5);
            box-shadow:
                0 10px 25px -5px rgba(0, 0, 0, 0.3),
                0 0 15px rgba(99, 102, 241, 0.2);

            .external-indicator {
                opacity: 1;
                transform: translate(4px, -4px);
            }
        }

        // 平板：一行 2 个
        @media (max-width: (@desktop-breakpoint - 1px)) and (min-width: @tablet-breakpoint) {
            flex: 0 0 calc((100% - 1 * 1rem) / 2);
        }

        // 移动：一行 1 个
        @media (max-width: (@tablet-breakpoint - 1px)) {
            flex: 0 0 100%;
        }

        // 元素标题区域
        .list-item-title {
            @desktop-h: 4.5rem;
            @tablet-h: 4rem;
            @mobile-h: 3.5rem;
            @img-mark-w: 3rem;
            @desktop-img-w: 2.5rem;
            @tablet-img-w: 2.25rem;
            @mobile-img-w: 2rem;

            .flex-start-center();
            gap: 1rem;
            margin-bottom: 0.75rem;

            .title-icon {
                width: @desktop-h;
                height: @desktop-h;
                border-radius: 0.75rem;
                background: linear-gradient(135deg,
                        rgba(99, 102, 241, 0.15) 0%,
                        rgba(139, 92, 246, 0.15) 100%);
                .flex-center();
                flex-shrink: 0;

                &.radiused {
                    background: transparent !important;
                    overflow: hidden;

                    .icon-img {
                        @w: 95%;

                        width: @w !important;
                        height: @w !important;
                        border-radius: 50%;
                        border: 0.125rem solid rgba(255, 255, 255, 0.5);
                    }
                }

                // 平板
                @media (max-width: (@desktop-breakpoint - 1px)) and (min-width: @tablet-breakpoint) {
                    width: @tablet-h;
                    height: @tablet-h;
                }

                // 移动
                @media (max-width: (@tablet-breakpoint - 1px)) {
                    width: @mobile-h;
                    height: @mobile-h;
                }

                .icon-img {
                    width: @desktop-img-w;
                    height: @desktop-img-w;
                    object-fit: contain;

                    // 平板
                    @media (max-width: (@desktop-breakpoint - 1px)) and (min-width: @tablet-breakpoint) {
                        width: @tablet-img-w;
                        height: @tablet-img-w;
                    }

                    // 移动
                    @media (max-width: (@tablet-breakpoint - 1px)) {
                        width: @mobile-img-w;
                        height: @mobile-img-w;
                    }
                }

                .icon-placeholder {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
            }

            .title-item-name {
                width: 100%;
                height: @desktop-h;
                .flex-between-start();
                flex-direction: column;
                flex: 1;

                .item-name {
                    font-size: 1.5rem;
                    line-height: 2.5rem;
                    font-weight: bold;
                    color: #f1f5f9;

                    a {
                        color: #f1f5f9;
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                    // 平板
                    @media (max-width: (@desktop-breakpoint - 1px)) and (min-width: @tablet-breakpoint) {
                        font-size: 1.2rem;
                        line-height: 2.3rem;
                    }

                    // 移动
                    @media (max-width: (@tablet-breakpoint - 1px)) {
                        font-size: 1rem;
                        line-height: 2rem;
                    }
                }

                .item-meta {
                    display: flex;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;

                    .item-type,
                    .item-purpose {
                        font-size: 0.75rem;
                        padding: 0.25rem 0.5rem;
                        border-radius: 0.375rem;
                        background: rgba(99, 102, 241, 0.1);
                        color: #a5b4fc;
                        border: 0.0625rem solid rgba(99, 102, 241, 0.2);
                        white-space: nowrap;
                    }
                }
            }
        }

        // 元素内容区域
        .list-item-body {
            >* {
                margin-bottom: 0.75rem;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            .item-description {
                flex: 1;

                .desc-line {
                    font-size: 0.875rem;
                    color: #cbd5e1;
                    line-height: 1.25rem;
                    height: 1.25rem;
                    margin: 0 0 0.25rem 0;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    line-clamp: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    &.stars-description {
                        opacity: 0.2;
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            .item-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.375rem;

                .tag {
                    font-size: 0.75rem;
                    padding: 0.25rem 0.5rem;
                    background: rgba(148, 163, 184, 0.1);
                    color: #94a3b8;
                    border-radius: 0.25rem;
                    border: 0.0625rem solid rgba(148, 163, 184, 0.2);
                }
            }
        }
    }
}
</style>
