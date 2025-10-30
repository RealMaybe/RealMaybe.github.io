<template>
    <header id="page-header">
        <section class="header-content">
            <div id="logo" title="RealMaybe 个人网站" @click="$router.push('/')">
                RealMaybe
            </div>

            <div id="hamburger-button" :title="open ? '关闭导航栏' : '开启导航栏'" @click="open = !open">
                <i class="fas fa-bars"></i>
            </div>

            <LinksNav class="header-link-nav" />

            <!-- 底部悬浮功能块（移动端） -->
            <div class="mobile-fab-group" :class="{ show: showFab }">
                <!-- 回到顶部 -->
                <p class="fab-item to-top" title="回到顶部" @click="scrollToTop">
                    <i class="fas fa-chevron-up"></i>
                </p>
                <!-- 开关侧边栏 -->
                <p class="fab-item menu-toggle" :title="open ? '关闭导航栏' : '开启导航栏'" @click="open = !open">
                    <i class="fas fa-bars"></i>
                </p>
            </div>
        </section>

        <!-- 右侧边栏 -->
        <div class="right-side-bar">
            <RightSidebar :class="{ open }" @close="open = false" />
            <div v-if="open" class="right-sidebar-mask" @click="open = false"></div>
        </div>
    </header>
</template>

<script setup lang="ts">
// 引入组件
import LinksNav from "./LinksNav.vue";
import RightSidebar from "./RightSidebar.vue";

// 引入依赖
import { ref, onMounted, onBeforeUnmount } from "vue";
import { scrollToTop } from "@/plugin";

/* 侧边栏开关 */
const open = ref(false);
const TABLET_BREAKPOINT = 768;
const closeNav = () => (open.value = false);
let mql: MediaQueryList;

onMounted(() => {
    mql = window.matchMedia(`(min-width: ${TABLET_BREAKPOINT + 1}px)`);
    mql.addEventListener("change", closeNav);
});
onBeforeUnmount(() => mql.removeEventListener("change", closeNav));

/* 底部功能块显示控制 */
const showFab = ref(false);
const SCROLL_THRESHOLD = 160;
const updateFab = () => (showFab.value = window.scrollY > SCROLL_THRESHOLD);

onMounted(() => window.addEventListener("scroll", updateFab, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", updateFab));
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

@hamburger-size: 1.5rem;
@logo-size: 2rem;

#page-header {
    width: 100%;
    max-width: @main-content-width;
    box-sizing: border-box;

    .header-content {
        width: 100%;
        padding: 0 0.75rem;
        position: relative;
        .flex-between-center();
    }

    #logo {
        @h: 3.125rem;

        .logo-realmaybe();
        max-height: @h;
        line-height: @h;
        margin-bottom: 0;
        font-size: @logo-size;
        cursor: pointer;
    }

    #hamburger-button {
        font-size: @hamburger-size;
        cursor: pointer;
        display: none;

        @media (max-width: @tablet-breakpoint) {
            display: block;
        }
    }

    .header-link-nav {
        @media (max-width: @tablet-breakpoint) {
            display: none;
        }
    }

    .mobile-fab-group {
        @item-h: 2.5rem;

        position: fixed;
        right: @main-content-padding-left + 0.25rem;
        bottom: @main-content-padding-top;
        z-index: 998;
        .flex-center();
        flex-direction: column;
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        opacity: 0;
        transform: scale(0.8);
        pointer-events: none;

        &.show {
            opacity: 1;
            transform: scale(1);
            pointer-events: auto;
        }

        .fab-item {
            width: @item-h;
            height: @item-h;
            margin-bottom: 1rem;
            border-radius: 50%;
            background: @card-bg;
            border: 0.125rem solid @primary-color;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
            .flex-center();
            cursor: pointer;
            font-size: 0.9rem;
            color: @text-color;
            transition: background 0.25s;

            &:active {
                background: fade(@primary-color, 90%);
                color: #fff;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }

        /* 桌面端隐藏 */
        @media (min-width: (@tablet-breakpoint + 1px)) {
            display: none;
        }
    }
}

.right-side-bar {
    .right-sidebar-mask {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 998;
        cursor: pointer;
    }
}
</style>
