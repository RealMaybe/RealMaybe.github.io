<!-- 小说作品 -->

<template>
    <div>
        <h3>
            <p class="title">
                <i class="fa fa-book-open"></i>
                <span>写的小说</span>
            </p>
        </h3>

        <article class="novel-wall">
            <div v-for="item in resolvedList" :key="item.finalLink" class="novel-card">
                <a class="cover" :href="item.finalLink" target="_blank" rel="noopener noreferrer">
                    <img :src="item.img" :alt="item.title" loading="lazy" />
                </a>

                <div class="info">
                    <h3 class="title">
                        <a class="link" :href="item.finalLink" target="_blank" rel="noopener noreferrer">
                            {{ item.title }}
                        </a>
                        <span class="status">{{ item.status }}</span>
                    </h3>
                    <p class="author">作者：{{ item.author }}</p>
                    <p class="intro">{{ item.introduction }}</p>
                    <p class="btn">
                        <a class="to-link" :href="item.finalLink" target="_blank" rel="noopener noreferrer">
                            立即阅读
                        </a>
                    </p>
                </div>
            </div>
        </article>

        <div class="tips">
            小说作品是发布在番茄小说的哦！感兴趣的小伙伴，欢迎前来阅读！
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Novel, NovelList } from "@tsTypes";
import { computed } from "vue";
import { useMediaQuery } from "@/utils";

// 父组件传值
const props = defineProps<{ novelList: NovelList }>();

// 当前视口是否处于移动端宽度（≤ 768px）
const isMobile = useMediaQuery("(max-width: 768px)");

/**
 * 根据当前设备宽度，为每本小说计算出“最适合”的阅读链接
 * 屏幕尺寸变化时自动重新计算，保证用户随时点到正确地址
 */
const resolvedList = computed(() =>
    props.novelList.map(n => ({
        ...n,
        finalLink: isMobile.value ? n.toAppLink : n.link // 实时决定的最终跳转地址
    }))
)
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

@accent: #ff8c42; // 主强调色
@text: #eaeaea; // 主要文字
@gray: #a0aec0; // 次要文字
@radius: 0.375rem;

@max-h: 9.375rem;

.novel-wall {
    background: @card-bg;
    font-size: 0.875rem;
    color: @text;
    .flex-between-center();
    flex-wrap: wrap; // 关键：允许换行
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: @tablet-breakpoint) {
        flex-direction: column;
    }
}

.novel-card {
    .flex-between-start();
    gap: 1rem;
    width: 100%;
    max-width: 49%;
    background: fade(@text, 4%);
    border: 0.0625rem solid fade(@text, 8%);
    border-radius: @radius;
    padding: 1rem;
    transition: transform 0.2s;

    @media (min-width: (@tablet-breakpoint + 1px)) {
        flex: 0 0 calc(50% - 0.75rem);
        max-width: calc(50% - 0.75rem);
    }

    @media (max-width: @tablet-breakpoint) {
        max-width: 100%;
    }

    @media (max-width: @mobile-breakpoint) {
        .flex-between-center() !important;
        flex-direction: column;
    }

    &:hover {
        transform: translateY(-0.25rem);
    }

    .cover {
        flex-shrink: 0;

        img {
            width: 7rem;
            height: 9.375rem;
            max-height: @max-h;
            object-fit: cover;
            border-radius: @radius;
            border: 0.0625rem solid fade(@text, 8%);

            &:hover {
                border-color: @text;
            }
        }

    }

    .info {
        flex: 1;
        max-height: @max-h;

        @media (max-width: @mobile-breakpoint) {
            max-height: initial;
        }

        .title {
            .flex-between-center();
            margin: 0 0 0.5rem;
            font-size: 1.125rem;
            font-weight: 600;

            @media (max-width: @mobile-breakpoint) {
                .flex-start() !important;
                flex-direction: column;
            }

            .link {
                text-decoration: none;
                color: inherit;

                @media (max-width: @mobile-breakpoint) {
                    margin-bottom: 0.5rem;
                }

                &:hover {
                    text-decoration: underline;
                }
            }

            .status {
                padding: 0.125rem 0.5rem;
                background: fade(@accent, 90%);
                color: @card-bg;
                border-radius: 0.25rem;
                font-size: 0.75rem;
            }
        }

        .author {
            margin: 0 0 0.25rem;
            color: @gray;
        }

        .intro {
            margin: 0 0 0.75rem;
            line-height: 1.6;
            color: @gray;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-clamp: 2;
            box-orient: vertical;
            text-overflow: ellipsis;
        }

        .btn {
            width: 100%;
            .flex-end();

            a.to-link {
                padding: 0.375rem 1rem;
                background: @accent;
                color: @card-bg;
                border-radius: 0.25rem;
                text-decoration: none;
                font-weight: 600;
                transition: opacity 0.2s;

                &:hover {
                    opacity: 0.9;
                }
            }
        }
    }
}
</style>
