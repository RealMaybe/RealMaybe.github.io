<template>
    <header id="page-header">
        <section class="header-content">
            <div id="logo" title="RealMaybe 个人网站" @click="$router.push('/')">RealMaybe</div>

            <!-- 汉堡按钮 -->
            <div id="menu-toggle" @click="open = !open">
                <i class="fas fa-bars"></i>

                <p class="menu-toggle-text" :title="open ? '关闭导航栏' : '开启导航栏'">
                    <i class="fas fa-bars"></i>
                </p>
            </div>

            <!-- 导航 -->
            <div id="header-nav" :class="{ open }">
                <!-- 内部关闭按钮 -->
                <div class="close-btn" @click="open = false">
                    <i class="fas fa-times"></i>
                </div>

                <p class="line"></p>

                <LinksNav />
            </div>
        </section>
    </header>
</template>

<script setup lang="ts">
import LinksNav from "./LinksNav.vue";
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

/* 3. 滚动到一定高度才显示浮动按钮 */
const SCROLL_THRESHOLD = 160; // 任意阈值
const onScroll = () => {
    const el = document.querySelector(".menu-toggle-text") as HTMLElement;
    if (!el) return;
    const show = window.scrollY > SCROLL_THRESHOLD;
    el.classList.toggle("show", show);
};

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
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

    #menu-toggle {
        display: none;
        font-size: @fontSize;
        cursor: pointer;

        // 滚动按钮完整样式（已含出现/消失过渡）
        .menu-toggle-text {
            position: fixed;
            bottom: @main-content-padding-top;
            right: 2 * @main-content-padding-left;
            width: 2rem;
            height: 2rem;
            .flex-center();
            font-size: 0.75rem;
            padding: 1rem;
            border: 0.25rem solid @primary-color;
            border-radius: 50%;
            background: @card-bg;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
            z-index: 998;
            cursor: pointer;

            // 滚动过渡
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
        }
    }

    #header-nav {
        .flex-between-center();
        flex-wrap: wrap;
        gap: 1.25rem;
        max-width: 37.5rem;
        padding: 0.9375rem;
        transition: all 0.3s ease-in-out;

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
