<!-- 角色列表 -->

<template>
    <article class="character-module">
        <h2>
            <i v-if="iconClass" :class="iconClass"></i>
            <span>{{ title }}</span>
        </h2>

        <!-- 内容区域 -->
        <article>
            <div class="character-group" v-for="(group, groupKey) in data" :key="groupKey">
                <h3 class="group-title">{{ group.title }}</h3>

                <!-- 卡片列表 -->
                <div class="character-grid">
                    <div class="character-card" v-for="item in group.items" :key="item.name" role="listitem">
                        <h3>{{ item.name }}</h3>
                        <p v-for="desc in item.description" :key="desc">
                            {{ desc }}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </article>
</template>

<script setup lang="ts">
import type { ListData } from "@/tsTypes";

// Props 定义
interface Props {
    title: string;
    iconClass?: string;
    data: ListData;
}

// 定义 props
const props = defineProps<Props>()
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.character-module {
    .character-group {
        padding-bottom: 1.5rem;
        margin-bottom: 1.25rem;
        border-bottom: 0.0625rem solid @secondary-color;

        &:last-child {
            padding-bottom: 0;
            margin-bottom: 0;
            border: none;
        }

        // h3
        .group-title {
            font-size: 1.25rem;
            margin-bottom: 1.25rem;
        }
    }

    .character-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;

        @media (max-width: @mobile-breakpoint) {
            flex-direction: column;

            .character-card {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }

        // 平板端
        @media (min-width: (@mobile-breakpoint + 1px)) and (max-width: @tablet-breakpoint) {
            .character-card {
                flex: 0 0 calc(50% - 0.625rem);
                max-width: calc(50% - 0.625rem);
            }
        }

        // 桌面端
        @media (min-width: (@tablet-breakpoint + 1px)) {
            .character-card {
                flex: 0 0 calc(25% - 0.9375rem);
                max-width: calc(25% - 0.9375rem);
            }
        }
    }

    .character-card {
        background: lighten(@card-bg, 5%);
        border-radius: 0.625rem;
        padding: 0.9375rem;
        transition:
            transform 0.3s,
            box-shadow 0.3s;

        &:hover {
            .hover(-0.3125rem);
        }

        h3 {
            color: @secondary-color;
            margin-bottom: 0.625rem;
        }

        p {
            color: @text-muted;
            font-size: 0.9rem;
        }
    }
}
</style>