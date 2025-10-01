<!-- 404 界面 -->

<template>
    <div class="not-found">
        <!-- 星屑背景 -->
        <div class="stars" aria-hidden="true">
            <span v-for="i in 40" :key="i" class="star" :style="randomStar(i)"></span>
        </div>

        <!-- 主内容 -->
        <div class="content">
            <h1 class="glitch" data-text="404">404</h1>
            <p class="subtitle">Oops, lost in space...</p>

            <!-- 三只宇航员 -->
            <div class="astronauts">
                <div class="astro" v-for="n in 3" :key="n" :style="astroDelay(n)"></div>
            </div>

            <button class="btn-home" @click="$router.replace('/')">
                <span class="fire"></span>
                发射回航
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
// 随机星星位置 & 大小
const randomStar = (i: number) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${2 + Math.random() * 3}px`,
    height: `${2 + Math.random() * 3}px`,
    animationDelay: `${Math.random() * 6}s`
})

// 宇航员动画错开
const astroDelay = (n: number) => ({
    animationDelay: `${(n - 1) * 0.4}s`
})
</script>

<style lang="less">
@import url("@style/public-page.less");

// 全屏固定布局
.not-found {
    position: fixed;
    .flex-center();
    width: 100vw;
    height: 100vh;
    inset: 0;
    overflow: hidden;
    background: linear-gradient(135deg, @dark-bg 0%, #0f3460 100%);
    color: @text-color;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* 星屑背景 */
.stars {
    position: absolute;
    inset: 0;
    pointer-events: none;

    .star {
        position: absolute;
        border-radius: 50%;
        background: #fff;
        opacity: 0.6;
        animation: twinkle 6s infinite ease-in-out;
    }
}

@keyframes twinkle {

    0%,
    100% {
        transform: scale(1);
        opacity: 0.6;
    }

    50% {
        transform: scale(1.4);
        opacity: 1;
    }
}

/* 主内容框 */
.content {
    text-align: center;
    z-index: 2;
    padding: 2rem;
}

/* 404 文字 glitch 效果 */
.glitch {
    font-size: 8rem;
    font-weight: 900;
    letter-spacing: 0.05em;
    position: relative;
    color: @primary-color;

    &::before,
    &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    &::before {
        left: 2px;
        text-shadow: -2px 0 @accent-color;
        animation: glitch-anim 2s infinite linear alternate-reverse;
    }

    &::after {
        left: -2px;
        text-shadow: -2px 0 @secondary-color;
        animation: glitch-anim 3s infinite linear alternate-reverse;
    }
}

@keyframes glitch-anim {
    0% {
        clip-path: inset(20% 0 70% 0);
    }

    20% {
        clip-path: inset(90% 0 5% 0);
    }

    40% {
        clip-path: inset(50% 0 20% 0);
    }

    60% {
        clip-path: inset(80% 0 10% 0);
    }

    80% {
        clip-path: inset(10% 0 85% 0);
    }

    100% {
        clip-path: inset(40% 0 30% 0);
    }
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    color: @text-color;
}

/* 宇航员们 */
.astronauts {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2.5rem;
}

.astro {
    width: 4rem;
    height: 4rem;
    background: radial-gradient(circle at 30% 30%, #fff 20%, @secondary-color 60%);
    border-radius: 50%;
    position: relative;
    animation: float 4s ease-in-out infinite;
    box-shadow: 0 0 0.75rem fade(@secondary-color, 60%);

    // 头盔反光
    &::before {
        content: '';
        position: absolute;
        top: 15%;
        left: 20%;
        width: 30%;
        height: 30%;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-1rem);
    }
}

/* 返回按钮 */
.btn-home {
    .card(); // 使用公共 mixin
    padding: 0.75rem 1.5rem;
    border: none;
    font-size: 1.1rem;
    color: @text-color;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        .hover(-4px); // 使用公共 hover mixin
    }

    // 火箭尾焰
    .fire {
        position: absolute;
        top: 50%;
        left: -2rem;
        width: 1.5rem;
        height: 1.5rem;
        background: linear-gradient(to right, transparent, @accent-color 70%, transparent);
        border-radius: 50%;
        opacity: 0;
        filter: blur(4px);
        transform: translateY(-50%) scale(0.5);
        transition: all 0.3s;
    }

    &:hover .fire {
        opacity: 1;
        transform: translateY(-50%) scale(1.2) translateX(1rem);
    }
}

/* 响应式 */
@media (max-width: @mobile-breakpoint) {
    .glitch {
        font-size: 4.5rem;
    }

    .subtitle {
        font-size: 1.2rem;
    }

    .astronauts {
        gap: 1rem;
    }

    .astro {
        width: 3rem;
        height: 3rem;
    }
}
</style>