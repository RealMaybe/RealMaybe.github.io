<!-- 音乐作品 -->

<template>
    <div class="creation-section creation-music">
        <h3>
            <p class="title" :class="allCreations.length >= need ? 'mr' : ''">
                <i class="fas fa-music"></i>
                <span>唱过的歌</span>
            </p>
            <p v-if="allCreations.length >= need" class="refresh" :class="{ rotating: isRefreshing }"
                @click="refreshCreations">
                <i class="fa-solid fa-arrows-rotate"></i>
            </p>
        </h3>

        <div class="creation">
            <CreationCard v-for="idx in currentIndices" :key="idx" :link="allCreations[idx].link"
                :title="{ video: allCreations[idx].videoTitle }" />
        </div>

        <div class="tips">
            本区域的刷新功能存在页面卡顿的情况，貌似是 B 站的渲染问题，暂不清楚修复方式……
        </div>
    </div>
</template>

<script setup lang="ts">
import CreationCard from "@/components/shared/CreationCard.vue";
import type { MusicalList } from "../../../tsTypes";
import { ref, watch } from "vue";
import { throttle } from "@/utils";

/* props */
const props = defineProps<{
    allCreations: MusicalList;
}>();

/* 常量 & 响应式 */
const need = 6; // 显示的条目数
const isRefreshing = ref(false); // 刷新状态
const currentIndices = ref<Set<number>>(new Set()); // 当前随机选中的作品下标集合

/* 工具函数 */

/**
 * 随机抽取指定数量的不重复下标
 * @param count - 需要抽取的个数
 * @returns 抽到的下标集合（可能为空）
 */
function selectRandomIndices(count: number): Set<number> {
    const len = props.allCreations.length
    if (len === 0) return new Set()
    count = Math.min(count, len)
    const s = new Set<number>()
    while (s.size < count) s.add(Math.floor(Math.random() * len))
    return s
}

/**
 * 刷新函数，用于更新数据
 * - 500 ms 后结束旋转动画
 * - 1 s 内仅响应第一次调用
 */
const refreshCreations = throttle(() => {
    isRefreshing.value = true
    currentIndices.value = selectRandomIndices(need)
    setTimeout(() => (isRefreshing.value = false), 500)
}, 1000)

/**
 * 监听歌单变化，自动重新随机展示
 * immediate: true 保证组件创建时执行一次
 */
watch(
    () => props.allCreations,
    () => (currentIndices.value = selectRandomIndices(need)),
    { immediate: true }
)
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

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
</style>
