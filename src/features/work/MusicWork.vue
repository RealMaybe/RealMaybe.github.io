<!-- 音乐作品 -->

<template>
    <div class="creation-section creation-music">
        <h3>
            <p class="title">
                <i class="fas fa-music"></i>
                <span>翻唱过的歌</span>
            </p>
            <p class="refresh" @click="refreshCreations" :class="{ rotating: isRefreshing }">
                <i class="fa-solid fa-arrows-rotate"></i>
            </p>
        </h3>

        <div class="creation">
            <template v-for="creations in displayedCreations" :key="creations.videoTitle">
                <CreationCard :link="creations.link"
                    :title="{ video: creations.videoTitle, song: creations.songTitle }" />
            </template>
        </div>

        <div class="tips">
            本区域的刷新功能存在页面卡顿的情况，貌似是 B 站的渲染问题，暂不清楚修复方式……
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入组件
import CreationCard from "@/components/shared/CreationCard.vue";

// 引入依赖
import type { createPlayerLinkOptions } from "@/tsTypes";
import { ref, computed, onMounted, watch } from "vue";
import { throttle } from "@/plugin";

/* ========== */

/**
 * 作品
 */
interface Creation {
    link: createPlayerLinkOptions;
    videoTitle: string;
    songTitle: string;
}

/**
 * 组件属性
 */
interface Props {
    allCreations: Array<Creation>;
}

/* ========== */

const props = defineProps<Props>();
const isRefreshing = ref(false); // 是否正在刷新
const currentIndices = ref<Set<number>>(new Set()); // 当前显示的索引

// 计算属性：根据当前索引显示的作品
const displayedCreations = computed(() => Array.from(currentIndices.value).map(index => props.allCreations[index]));

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
const refreshCreations = throttle(() => {
    isRefreshing.value = true;

    // 添加一点延迟，让旋转动画更明显
    setTimeout(() => {
        currentIndices.value = selectRandomIndices(6);
        isRefreshing.value = false;
    }, 500);
}, 1000);

// 监听 allCreations 的变化
watch(
    () => props.allCreations,
    newCreations => { if (newCreations && newCreations.length > 0) currentIndices.value = selectRandomIndices(6) },
    { immediate: true }
);

// 组件挂载时初始化显示的作品
onMounted(() => {
    if (props.allCreations && props.allCreations.length > 0)
        currentIndices.value = selectRandomIndices(6);
});
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

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
    }

    @media (max-width: @tablet-breakpoint) {
        flex-wrap: wrap;
    }

    @media (max-width: @mobile-breakpoint) {
        flex-direction: column;
        flex-wrap: wrap;
    }
}

.tips {
    border-left: 0.25rem solid @text-muted;
    padding-left: 0.75rem;
    font-size: 0.75rem;
    color: @text-muted;
}
</style>
