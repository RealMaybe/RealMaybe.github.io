<template>
    <div class="thanks-list" v-for="{ category, members } in Object.values(thanksList)" :key="category.id">
        <!-- 分类标题 -->
        <div class="list-header">
            <h1 class="list-title">
                <span class="title-emoji">{{ category.emoji }}</span>
                <span class="title-name">{{ category.name }}</span>
            </h1>
            <p class="list-title-description">{{ category.description }}</p>
        </div>

        <!-- 分类内容 -->
        <article class="list-body">
            <!-- 项目项 -->
            <div class="list-item" v-for="itemInfo in members" :key="itemInfo.id">
                <!-- 内容标题区域 -->
                <div class="list-item-title">
                    <!-- 图标 -->
                    <div class="title-icon">
                        <img class="icon-img" v-if="itemInfo.icon.exists && itemInfo.icon.value"
                            :src="itemInfo.icon.value" :alt="itemInfo.name" />
                        <div v-else class="icon-placeholder">
                            {{ itemInfo.name.charAt(0) }}
                        </div>
                    </div>

                    <!-- 内容信息 -->
                    <div class="title-item-name">
                        <h3 class="item-name">
                            <a target="_blank" v-if="itemInfo.link.exists && itemInfo.link.value"
                                :href="itemInfo.link.value">{{ itemInfo.name }}</a>
                            <span v-else>{{ itemInfo.name }}</span>
                        </h3>
                        <div class="item-meta">
                            <span class="item-type">{{ itemInfo.type }}</span>
                        </div>
                    </div>
                </div>

                <!-- 内容描述区域 -->
                <div class="list-item-body">
                    <!-- 描述 -->
                    <div class="item-description">
                        <p class="desc-line" v-for="(desc, index) in getDescription(itemInfo)" :key="index"
                            :title="desc">
                            {{ desc }}
                        </p>
                    </div>

                    <!-- 标签 -->
                    <div v-if="itemInfo.tags.exists" class="item-tags">
                        <span class="tag" v-for="tag in itemInfo.tags.value" :key="tag">{{ tag }}</span>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import type { ThanksList, Member } from "@tsTypes";

const { thanksList } = defineProps<{
    thanksList: ThanksList;
}>();

// 处理描述字段
// 处理描述字段
const getDescription = (member: Member): [string, string] => {
    const raw: string[] = member.description.exists ? (member.description.value ?? []) : [];

    switch (raw.length) {
        case 0:
            return ["暂无描述", ""];
        case 1:
            return [raw[0], ""];
        case 2:
            return [raw[0], raw[1]];
        default: {
            // 随机取两条，不重复
            const [i, j] = (() => {
                const a = Math.floor(Math.random() * raw.length);
                let b = Math.floor(Math.random() * (raw.length - 1));
                if (b >= a) b += 1;
                return a < b ? [a, b] : [b, a];
            })();
            return [raw[i], raw[j]];
        }
    }
};
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.thanks-list {
    width: 95%;
    margin: 0 auto;

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

        .title-emoji {
            font-size: 2.5rem;
            margin: 0 0.5rem;
        }

        .title-name {
            margin: 0 0.5rem;
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }

    .list-title-description {
        font-size: 1.25rem;
        color: #94a3b8;
        margin: 0 auto;
        max-width: 600px;
        line-height: 1.6;
    }
}

.list-body {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

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
            @desktop-img-w: 2.5rem;
            @tablet-img-w: 2.25rem;
            @mobile-img-w: 2rem;

            .flex-start-center();
            gap: 1rem;
            margin-bottom: 0.5rem;

            .title-icon {
                width: @desktop-h;
                height: @desktop-h;
                border-radius: 0.75rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                .flex-center();
                flex-shrink: 0;

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
                    line-height: 1.5;
                    font-weight: bold;
                    color: #f1f5f9;

                    a {
                        color: #f1f5f9;
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
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
            .item-description {
                margin-bottom: 0.5rem;
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
