<!-- 轮播卡片 -->

<template>
    <div class="carousel-container">
        <!-- 图片列表 -->
        <div class="carousel-list" ref="carouselList" :style="listStyle">
            <div v-for="(img, index) in displayImages" :key="index" class="carousel-item">
                <img :src="img" :alt="'Image' + index" />
            </div>
        </div>
        <!-- 轮播按钮 -->
        <div class="carousel-btn" v-if="filterImages.length > 1">
            <span class="carousel-btn-item" v-for="(_item, index) in filterImages.length" :key="index"
                :class="{ active: index === displayIndex }" @click="handleGoTo(index)"></span>
        </div>
        <!-- 左右切换 -->
        <div class="carousel-arrow" v-if="filterImages.length > 1">
            <span class="carousel-arrow-item left" @click="handlePrev">
                <i class="fas fa-chevron-left"></i>
            </span>
            <span class="carousel-arrow-item right" @click="handleNext">
                <i class="fas fa-chevron-right"></i>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

// 定义组件接收的属性接口
interface Props {
    /**
     * - 图片列表，由父组件传入
     * - 存在多张图片时，最多显示前 10 张图片
     */
    imageList: Array<string>; // 图片URL数组，由父组件传入
}

// 声明组件属性
const props = defineProps<Props>();

// 响应式引用
const carouselList = ref<HTMLElement | null>(null); // 轮播列表的 DOM 元素引用
const currentIndex = ref<number>(0); // 当前显示的图片索引（包含克隆图片）
const isTransitioning = ref<boolean>(false); // 是否正在执行过渡动画
const autoPlayTimer = ref<number | null>(null); // 自动播放定时器引用

/**
 * 过滤多余的图片
 */
const filterImages = computed(() => {
    if (!props.imageList || props.imageList.length === 0) return [];
    return props.imageList.length > 10 ? props.imageList.slice(0, 10) : [...props.imageList];
});

/**
 * 显示用的图片数组计算属性
 * 通过首尾添加克隆图片实现无缝轮播效果
 * 例如：原始 [1,2,3] -> 显示 [3,1,2,3,1]
 */
const displayImages = computed<string[]>(() => {
    // 单张图片时直接返回原数组，无需克隆
    if (filterImages.value.length <= 1) return [...filterImages.value];

    // 多张图片时，在首尾分别添加克隆图片
    const first = filterImages.value[0]; // 第一张图片
    const last = filterImages.value[filterImages.value.length - 1]; // 最后一张图片
    return [last, ...filterImages.value, first]; // 返回 [最后一张, 原始所有图片, 第一张]
});

/**
 * 计算显示给用户的索引（用于指示器锚点）
 * 这个索引对应原始图片数组的位置，不包含克隆图片
 */
const displayIndex = computed<number>(() => {
    // 单张图片时始终显示第一个指示器
    if (filterImages.value.length <= 1) return 0;

    // 当显示克隆的最后一张图片时（实际位置0），对应原始数组的最后一张
    if (currentIndex.value === 0) return filterImages.value.length - 1;
    // 当显示克隆的第一张图片时（实际最后位置），对应原始数组的第一张
    else if (currentIndex.value === displayImages.value.length - 1) return 0;
    // 正常情况，需要减去首部克隆图片的偏移量
    else return currentIndex.value - 1;
});

/**
 * 轮播列表样式计算属性
 * 控制轮播列表的平移和过渡效果
 */
const listStyle = computed<{ transform: string; transition: string }>(() => {
    // 单张图片时，不需要移动，居中显示
    if (filterImages.value.length <= 1)
        return {
            transform: `translateX(0%)`, // 不进行平移
            transition: "none", // 禁用过渡效果
        };

    // 计算平移距离：每个图片宽度为100%，向左平移当前索引乘以100%
    const translateX = -currentIndex.value * 100;
    return {
        transform: `translateX(${translateX}%)`, // 设置平移
        transition: isTransitioning.value ? "transform 0.5s ease-in-out" : "none", // 根据状态启用/禁用过渡
    };
});

/**
 * 移动到指定位置的函数
 * @param index - 目标位置索引（包含克隆图片的完整数组索引）
 */
const moveTo = (index: number): void => {
    // 单张图片时不执行任何移动
    if (filterImages.value.length <= 1) return;

    isTransitioning.value = true; // 标记开始过渡动画
    currentIndex.value = index; // 更新当前索引
};

/**
 * 处理边界情况的函数
 * 当轮播到达克隆图片时，需要无缝跳转到真实图片位置
 */
const handleBoundary = (): void => {
    // 单张图片时不处理边界
    if (filterImages.value.length <= 1) return;

    // 如果当前显示的是首部克隆的最后一张图片（索引0）
    if (currentIndex.value === 0) {
        isTransitioning.value = false; // 禁用过渡效果
        currentIndex.value = filterImages.value.length; // 跳转到真实最后一张图片
        // 强制重绘
        if (carouselList.value) carouselList.value.offsetHeight;
    }
    // 如果当前显示的是尾部克隆的第一张图片（最后索引）
    else if (currentIndex.value === displayImages.value.length - 1) {
        isTransitioning.value = false; // 禁用过渡效果
        currentIndex.value = 1; // 跳转到真实第一张图片
        // 强制重绘
        if (carouselList.value) carouselList.value.offsetHeight;
    }
};

/**
 * 切换到下一张图片
 */
const next = (): void => {
    // 如果正在过渡中或只有一张图片，则不执行操作
    if (isTransitioning.value || filterImages.value.length <= 1) return;
    // 移动到下一张图片
    moveTo(currentIndex.value + 1);
};

/**
 * 切换到上一张图片
 */
const prev = (): void => {
    // 如果正在过渡中或只有一张图片，则不执行操作
    if (isTransitioning.value || filterImages.value.length <= 1) return;
    // 移动到上一张图片
    moveTo(currentIndex.value - 1);
};

/**
 * 跳转到指定索引的图片
 * @param index - 目标图片在原始数组中的索引
 */
const goTo = (index: number): void => {
    // 如果正在过渡中或只有一张图片，则不执行操作
    if (isTransitioning.value || filterImages.value.length <= 1) return;
    // 移动到指定图片，需要+1因为第一个位置是克隆的最后一张图
    moveTo(index + 1);
};

// 停止自动轮播
const stopAutoPlay = () => {
    if (autoPlayTimer.value) {
        clearInterval(autoPlayTimer.value);
        autoPlayTimer.value = null;
    }
};

// 启动自动轮播
const startAutoPlay = () => {
    if (filterImages.value.length <= 1) return;
    stopAutoPlay(); // 先停止之前的定时器
    autoPlayTimer.value = setInterval(next, 5000);
};

// 重置自动轮播（停止并重新开始）- 简化为 startAutoPlay 的引用
const resetAutoPlay = startAutoPlay;

// 统一的用户交互处理函数
const handleUserInteraction = (action: (...args: any[]) => void, ...args: any[]) => {
    action(...args);
    resetAutoPlay();
};

// 简化的交互处理函数
const handleNext = () => handleUserInteraction(next);
const handlePrev = () => handleUserInteraction(prev);
const handleGoTo = (index: number) => handleUserInteraction(goTo, index);

/**
 * 初始化轮播位置
 * 设置正确的起始位置
 */
const init = (): void => {
    isTransitioning.value = false; // 重置过渡状态
    // 多张图片时从真实第一张开始（索引1，因为索引0是克隆的最后一张）
    if (filterImages.value.length > 1) currentIndex.value = 1;
    // 单张图片时从索引0开始
    else currentIndex.value = 0;
};

/**
 * 过渡结束事件处理函数
 * 在CSS过渡动画完成后调用
 */
const onTransitionEnd = (): void => {
    isTransitioning.value = false; // 标记过渡结束
    handleBoundary(); // 检查并处理边界情况
};

/* 生命周期钩子 */

/**
 * 组件挂载后执行
 * 初始化轮播并添加事件监听
 */
onMounted(() => {
    init(); // 初始化轮播位置
    startAutoPlay(); // 自动轮播

    // 如果有多张图片，添加过渡结束事件监听
    if (carouselList.value && filterImages.value.length > 1)
        carouselList.value.addEventListener("transitionend", onTransitionEnd);
});

/**
 * 组件卸载前执行
 * 清理事件监听，防止内存泄漏
 */
onUnmounted(() => {
    // 清除自动轮播定时器
    stopAutoPlay();

    // 移除过渡结束事件监听
    if (carouselList.value)
        carouselList.value.removeEventListener("transitionend", onTransitionEnd);
});
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

// 轮播图容器
.carousel-container {
    position: relative;
    width: 18.75rem;
    height: 18.75rem;
    min-width: 18.75rem;
    min-height: 18.75rem;
    overflow: hidden;
    border-radius: 1rem;

    @media (max-width: @tablet-breakpoint) {
        width: 12.5rem;
        height: 12.5rem;
        min-width: 12.5rem;
        min-height: 12.5rem;
    }

    // 图片列表
    .carousel-list {
        .flex-start();
        height: 100%;
        transition: transform 0.5s ease-in-out;

        .carousel-item {
            flex: none;
            width: 100%;
            height: 100%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    // 轮播图按钮
    .carousel-btn {
        .flex-center();
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;

        .carousel-btn-item {
            width: 0.625rem;
            height: 0.625rem;
            background-color: #eee;
            border-radius: 50%;
            margin: 0 0.3125rem;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 0 0.3125rem rgba(255, 255, 255, 0.3);

            &:hover,
            &.active {
                background-color: #222;
                transform: scale(1.2);
            }

            @media (max-width: @tablet-breakpoint) {
                width: 0.5rem;
                height: 0.5rem;
            }
        }
    }

    // 左右切换
    .carousel-arrow {
        .flex-between-center();
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        padding: 0 0.5rem;
        cursor: pointer;
        z-index: 2;

        .carousel-arrow-item {
            width: 2rem;
            height: 2rem;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            transition: all 0.3s;
            font-size: 1.25rem;
            .flex-center();
            cursor: pointer;

            @media (max-width: @tablet-breakpoint) {
                width: 1.25rem;
                height: 1.25rem;
                font-size: 1rem;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.8);
                transform: scale(1.1);
            }

            i {
                color: @dark-bg;
            }
        }
    }
}
</style>
