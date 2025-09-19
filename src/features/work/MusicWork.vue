<!-- 音乐作品 -->

<template>
    <div class="creation-section creation-music">
        <h3>
            <p class="title">
                <i class="fas fa-music"></i>
                <span>唱过的歌</span>
            </p>
            <p class="refresh" @click="refreshCreations" :class="{ rotating: isRefreshing }">
                <i class="fa-solid fa-arrows-rotate"></i>
            </p>
        </h3>

        <div class="creation">
            <template v-for="(creation, _index) in displayedCreations" :key="creation.title">
                <div class="creation-item">
                    <div class="video-box">
                        <iframe class="video-frame" :src="createPlayerLink(creation.link)" scrolling="yes"
                            frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
                    </div>

                    <p class="title">
                        <a :href="createBVLink(creation.link.bvid)" target="_blank" rel="noopener noreferrer"
                            :title="creation.title">{{ creation.title }}</a>
                    </p>
                </div>
            </template>

            <div class="tips">本区域的刷新功能存在页面卡顿的情况，貌似是 B 站的渲染问题，暂不清楚修复方式……</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import type { createPlayerLinkOptions } from "@/tsTypes";
import { createPlayerLink, createBVLink } from "@/plugin";

interface Creation {
    title: string;
    link: createPlayerLinkOptions;
}

interface Props {
    allCreations: Creation[];
}

const props = defineProps<Props>();

// 响应式状态
const isRefreshing = ref(false);
const currentIndices = ref<Set<number>>(new Set());

// 计算属性：根据当前索引显示的作品
const displayedCreations = computed(() => {
    return Array.from(currentIndices.value).map(index => props.allCreations[index]);
});

// 随机选择不重复的作品索引
const selectRandomIndices = (count: number): Set<number> => {
    const indices = new Set<number>();

    // 如果作品数量不超过需要的数量，选择所有作品
    if (props.allCreations.length <= count) {
        for (let i = 0; i < props.allCreations.length; i++) indices.add(i);

        return indices;
    }

    // 随机选择指定数量的不重复索引
    while (indices.size < count) {
        const randomIndex = Math.floor(Math.random() * props.allCreations.length);
        indices.add(randomIndex);
    }

    return indices;
};

// 刷新作品显示
const refreshCreations = () => {
    isRefreshing.value = true;

    // 添加一点延迟，让旋转动画更明显
    setTimeout(() => {
        currentIndices.value = selectRandomIndices(6);
        isRefreshing.value = false;
    }, 500);
};

// 监听 allCreations 的变化
watch(
    () => props.allCreations,
    newCreations => {
        if (newCreations && newCreations.length > 0) currentIndices.value = selectRandomIndices(6);
    },
    { immediate: true }
);

// 组件挂载时初始化显示的作品
onMounted(() => {
    if (props.allCreations && props.allCreations.length > 0)
        currentIndices.value = selectRandomIndices(6);
});
</script>

<style scoped lang="less">
@import url("@style/page/index-public.less");

h3 {
    .flex-center();
    margin: 1.25rem 0;
    font-size: 1.25rem;

    i {
        margin-right: 0.625rem;
        color: #88d3ce;
    }

    .title {
        margin-right: 3rem;
    }

    .refresh {
        .flex-center();
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        transition: transform 0.3s;
        transform-origin: 50% 50%;

        &.rotating {
            animation: rotate 0.5s linear;
        }

        &:active {
            opacity: 0.5;
        }

        * {
            margin: 0;
        }
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.creation {
    .flex-between-center();
    width: 100%;
    overflow: hidden;

    @media (min-width: @desktop-breakpoint) {
        flex-wrap: wrap;

        .creation-item {
            flex: 0 0 calc(33.333% - 0.9375rem);
            max-width: calc(33.333% - 0.9375rem);
        }
    }

    @media (max-width: @tablet-breakpoint) {
        flex-wrap: wrap;

        .creation-item {
            flex: 0 0 calc(50% - 0.9375rem);
            max-width: calc(50% - 0.9375rem);
        }
    }

    @media (max-width: @mobile-breakpoint) {
        flex-direction: column;
        flex-wrap: wrap;

        .creation-item {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 1.25rem;
        }
    }

    .creation-item {
        width: 18.75rem;
        margin-bottom: 1.25rem;

        .video-box {
            position: relative;
            width: 100%;
            padding-top: calc(9 / 16 * 100%);

            .video-frame {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }

        p.title {
            width: 100%;
            font-size: 1rem;
            overflow-x: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 2;

            a {
                color: white;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

.tips {
    border-left: 0.25rem solid @text-muted;
    padding-left: 0.75rem;
    font-size: 0.75rem;
    color: @text-muted;
}
</style>
