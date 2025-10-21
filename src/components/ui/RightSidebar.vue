<template>
    <div id="header-right-sidebar">
        <!-- 内部关闭按钮 -->
        <div class="close-btn" title="关闭导航栏" @click="emit('close')">
            <i class="fas fa-times"></i>
        </div>

        <!-- 链接导航 -->
        <LinksNav class="right-top-link" />

        <!-- 功能导航 -->
        <MetaLink class="right-meta-link" />

        <!-- 提示 -->
        <span class="side-hint">点击侧边栏以外的任意位置即可关闭</span>
    </div>
</template>

<script setup lang="ts">
// 新增
const emit = defineEmits(["close"]);

// 引入组件
import LinksNav from "./LinksNav.vue";
import MetaLink from "./MetaLink.vue";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

#header-right-sidebar {
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

    // 展开状态
    &.open {
        transform: translateX(0);
        box-shadow: -10px 0px 8px rgba(0, 0, 0, 0.3);

        .side-hint {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .right-top-link {
        width: 100%;
        justify-content: center !important;
    }

    .right-meta-link {
        display: none;

        @media (max-width: @tablet-breakpoint) {
            display: flex;
            width: 100%;
            flex-direction: column;
            position: absolute;
            bottom: 3rem;

            a {
                width: 100%;
                margin: 0 0 0.25rem 0 !important;
                text-align: center;
            }
        }
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
        font-size: 1.5rem;
    }

    // 提示语
    .side-hint {
        @transparency: 0.6;

        position: absolute;
        left: -2.5rem;
        bottom: 3%;
        writing-mode: vertical-rl;
        text-orientation: upright;
        color: #fff;
        font-size: 0.75rem;
        padding: 0.5rem 0.4rem;
        background: rgba(0, 0, 0, @transparency);
        border: 0.0625rem solid rgba(255, 255, 255, @transparency);
        border-radius: 0.25rem;
        pointer-events: none;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(1rem);
        transition:
            opacity 0.3s ease 0.2s,
            transform 0.3s ease 0.2s;
    }
}
</style>
