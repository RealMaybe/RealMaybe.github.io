<template>
    <header id="page-header">
        <section class="header-content">
            <div id="logo" title="RealMaybe 个人网站" @click="$router.push('/')">
                RealMaybe
            </div>

            <div class="hamburger-button" :title="open ? '关闭导航栏' : '开启导航栏'" @click="open = !open">
                <i class="fas fa-bars"></i>
            </div>

            <!-- 导航 -->
            <div id="header-nav" :class="{ open }">
                <!-- 内部关闭按钮 -->
                <div class="close-btn" @click="open = false" title="关闭导航栏">
                    <i class="fas fa-times"></i>
                </div>

                <p class="line"></p>

                <LinksNav />

                <MetaLink class="header-meta-link" />
            </div>

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
    </header>
</template>

<script setup lang="ts">
import LinksNav from "./LinksNav.vue";
import MetaLink from "./MetaLink.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

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
const updateFab = () => {
    showFab.value = window.scrollY > SCROLL_THRESHOLD;
};
onMounted(() => window.addEventListener("scroll", updateFab, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", updateFab));

/* 回到顶部 */
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<style scoped lang="less">
@import url("@style/public/flex.less");
@import url("@style/public/var.less");

@fontSize: 1.5rem;

#page-header {
    width: 100%;
    max-width: @main-content-width;
    box-sizing: border-box;

    .header-content {
        width: 100%;
        position: relative;
        .flex-between-center();
    }

    #logo {
        .logo-realmaybe();
        margin-bottom: 0;
        font-size: @fontSize;
        cursor: pointer;
    }

    .hamburger-button {
        font-size: @fontSize;
        cursor: pointer;
        display: none;

        @media (max-width: @tablet-breakpoint) {
            display: block;
        }
    }

    #header-nav {
        .flex-between-center();
        flex-wrap: wrap;
        gap: 1.25rem;
        max-width: 37.5rem;
        padding: 0.9375rem;
        transition: all 0.3s ease-in-out;
        position: relative;

        nav {
            padding: 0;
        }

        .close-btn {
            display: none;
            font-size: @fontSize;
        }

        p.line {
            display: none;
            padding: 0;
            width: 100%;
            border-bottom: 0.0625rem solid @text-color;
        }
    }

    .header-meta-link {
        display: none;

        @media (max-width: 768px) {
            display: flex;
            width: 100%;
            flex-direction: column;
            position: absolute;
            bottom: 3rem;

            a {
                width: 100%;
                margin: 0 0 .25rem 0 !important;
                text-align: center;
            }
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

    // 移动端
    @media (max-width: @tablet-breakpoint) {
        padding: 0 @main-content-padding-left;

        // 显示汉堡按钮
        #menu-toggle {
            display: block;
        }

        // 导航默认隐藏（折叠到右侧）
        #header-nav {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 8rem;
            max-width: none;
            flex-direction: column;
            .flex-start-center();
            padding-top: 6rem;
            gap: 1.5rem;
            background-color: @card-bg;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 999;
            border-left: 1px solid @primary-color;

            nav {
                width: 100%;

                &>* {
                    width: 100%;
                }
            }

            // 展开状态
            &.open {
                transform: translateX(0);
                box-shadow: -10px 0px 8px rgba(0, 0, 0, 0.3);
            }

            .close-btn {
                position: absolute;
                top: 2rem;
                right: 50%;
                transform: translateX(50%);
                display: block;
                background: none;
                border: none;
                color: @text-color;
                cursor: pointer;
                z-index: 1000;
            }

            p.line {
                display: block;
            }
        }
    }
}
</style>
