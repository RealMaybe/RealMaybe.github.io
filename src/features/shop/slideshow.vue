<template>
    <div class="carousel-container" :style="{ width: containerWidth + 'px', height: containerWidth + 'px' }">
        <!-- 轮播图主体 -->
        <div class="carousel-track" :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }">
            <img v-for="(image, index) in images" :key="index" :src="image" class="carousel-image"
                alt="Carousel Image" />
        </div>

        <!-- 左右箭头 -->
        <button class="carousel-arrow carousel-arrow-left" @click="changeIndex(-1)">
            &#8249;
        </button>
        <button class="carousel-arrow carousel-arrow-right" @click="changeIndex(1)">
            &#8250;
        </button>
    </div>

    <!-- 轮播点指示器 -->
    <div class="carousel-dots">
        <span v-for="(_image, index) in images" :key="index" :class="['dot', { active: currentIndex === index }]"
            @click="goToIndex(index)"></span>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentIndex = ref(0);
const containerWidth = ref(300); // 控制轮播大小的变量

// 图片列表（可动态增减）
const images = ref([
    "https://picsum.photos/300/300?1",
    "https://picsum.photos/300/300?2",
    "https://picsum.photos/300/300?3",
    "https://picsum.photos/300/300?4",
]);

// 切换图片
const changeIndex = (increment: number): void => {
    let newIndex = currentIndex.value + increment;
    if (newIndex >= images.value.length) newIndex = 0;
    else if (newIndex < 0) newIndex = images.value.length - 1;
    currentIndex.value = newIndex;
};

// 点击小圆点跳转
const goToIndex = (index: number): void => {
    currentIndex.value = index;
};
</script>

<style scoped lang="less">
// 定义变量
@font-family: "Arial", sans-serif;
@background-color: #f4f4f4;
@padding: 20px;
@carousel-width: 300px; // 修改了变量名称，使之更加准确地描述宽度的用途
@carousel-arrow-size: 40px;
@dot-size: 10px;
@dot-active-color: #3498db;

// 定义混合
.box-shadow(@x: 0; @y: 4px; @blur: 20px; @color: rgba(0, 0, 0, 0.1)) {
    box-shadow: @arguments;
}

.carousel-arrow-mixin() {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 50%;
    width: @carousel-arrow-size;
    height: @carousel-arrow-size;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: background-color 0.3s ease;
}

.carousel-container {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    .box-shadow();
    margin-bottom: 20px;
}

.carousel-track {
    display: flex;
    transition: transform 0.6s ease-in-out;
}

.carousel-image {
    width: @carousel-width;
    height: auto;
    object-fit: cover;
    flex-shrink: 0;
}

.carousel-arrow {
    .carousel-arrow-mixin();

    &-left {
        left: 10px;
    }

    &-right {
        right: 10px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
}

.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
    width: @carousel-width;
}

.dot {
    width: @dot-size;
    height: @dot-size;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
        background-color: @dot-active-color;
        transform: scale(1.3);
    }
}
</style>
