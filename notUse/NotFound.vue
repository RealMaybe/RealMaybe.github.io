<!-- 404 -->

<template>
    <div class="error-404">
        <!-- 404 数字 -->
        <h1 class="glitch" data-text="404">404</h1>

        <!-- 文案 -->
        <p>You seem lost in deep space…</p>

        <!-- 返回按钮 -->
        <RouterLink to="/" class="btn-home">
            <span>Return Home</span>
        </RouterLink>

        <!-- 流星（纯 CSS 动画，3 颗） -->
        <i v-for="n in 3" :key="n" class="meteor" :style="meteorStyle(n)"></i>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

// 随机流星起始
const meteorStyle = (i: number) => ({
    top: `${10 + i * 25}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${i * 0.5}s`
})
</script>

<style scoped lang="less">
/* 变量 */
@bg: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
@primary: #7f5af0;
@text: #fffffe;

.error-404 {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: @bg;
    color: @text;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
}

/* 404 抖动 + 毛刺 */
.glitch {
    position: relative;
    font-size: 12rem;
    font-weight: 900;
    letter-spacing: .05em;
    color: @text;
    animation: shake 2.5s infinite;

    &::before,
    &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: @bg;
        overflow: hidden;
    }

    &::before {
        left: 2px;
        text-shadow: -2px 0 #ff0040;
        animation: glitch-1 0.8s infinite linear alternate-reverse;
    }

    &::after {
        left: -2px;
        text-shadow: -2px 0 #00fff9;
        animation: glitch-2 0.8s infinite linear alternate-reverse;
    }
}

p {
    margin: 1.5rem 0 2.5rem;
    font-size: 1.25rem;
    opacity: .8;
}

/* 按钮呼吸光 */
.btn-home {
    padding: .75rem 2rem;
    border-radius: 50px;
    background: transparent;
    color: @primary;
    font-size: 1rem;
    text-decoration: none;
    border: 2px solid @primary;
    position: relative;
    overflow: hidden;
    transition: color .3s ease;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: @primary;
        transform: translate(-50%, -50%);
        transition: width .4s ease, height .4s ease;
        z-index: -1;
    }

    &:hover {
        color: #fff;

        &::before {
            width: 300px;
            height: 300px;
        }
    }
}

/* 流星 */
.meteor {
    position: absolute;
    width: 120px;
    height: 1px;
    background: linear-gradient(to right, transparent, @primary, transparent);
    animation: meteor 1.2s linear infinite;
    opacity: 0;
    transform: rotate(-45deg);
    pointer-events: none;
}

/* 关键帧 */
@keyframes shake {

    5%,
    15%,
    25%,
    35%,
    55%,
    65%,
    75%,
    95% {
        transform: translateX(-1px);
    }

    10%,
    20%,
    30%,
    40%,
    60%,
    70%,
    80%,
    90% {
        transform: translateX(1px);
    }
}

/* 404 数字红色毛刺 */
@keyframes glitch-1 {
    0% {
        clip-path: inset(40% 0 61% 0);
    }

    /* 顶部 40% 以下被裁剪 */
    10% {
        clip-path: inset(92% 0 1% 0);
    }

    /* 几乎只剩底边 1% */
    20% {
        clip-path: inset(43% 0 1% 0);
    }

    30% {
        clip-path: inset(25% 0 58% 0);
    }

    40% {
        clip-path: inset(1% 0 61% 0);
    }

    50% {
        clip-path: inset(94% 0 1% 0);
    }

    60% {
        clip-path: inset(75% 0 6% 0);
    }

    70% {
        clip-path: inset(9% 0 42% 0);
    }

    80% {
        clip-path: inset(55% 0 7% 0);
    }

    90% {
        clip-path: inset(98% 0 1% 0);
    }

    100% {
        clip-path: inset(80% 0 11% 0);
    }
}

/* 404 数字青色毛刺 */
@keyframes glitch-2 {
    0% {
        clip-path: inset(65% 0 8% 0);
    }

    10% {
        clip-path: inset(20% 0 60% 0);
    }

    20% {
        clip-path: inset(94% 0 2% 0);
    }

    30% {
        clip-path: inset(34% 0 40% 0);
    }

    40% {
        clip-path: inset(8% 0 50% 0);
    }

    50% {
        clip-path: inset(66% 0 10% 0);
    }

    60% {
        clip-path: inset(12% 0 64% 0);
    }

    70% {
        clip-path: inset(77% 0 8% 0);
    }

    80% {
        clip-path: inset(45% 0 35% 0);
    }

    90% {
        clip-path: inset(90% 0 5% 0);
    }

    100% {
        clip-path: inset(60% 0 20% 0);
    }
}

@keyframes meteor {
    0% {
        transform: translateX(-100px) rotate(-45deg);
        opacity: 1;
    }

    100% {
        transform: translateX(calc(100vw + 100px)) rotate(-45deg);
        opacity: 0;
    }
}
</style>