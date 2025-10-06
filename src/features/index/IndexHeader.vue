<!-- 页眉 -->

<template>
    <header id="index-header">
        <div class="avatar"><span></span></div>
        <h1>RealMaybe</h1>
        <p class="tagline">唱歌写文打游戏，想做更好的自己</p>
        <div class="intro">
            <span>OC 创作者 & 前端开发者</span>
            <i class="fas fa-heart"></i>
            <span>正在学习英语、日语、德语</span>
        </div>
        <div class="intro links">
            <p class="tips">~ 欢迎访问其他页面 ~</p>
            <LinksNav />
        </div>
    </header>
</template>

<script setup lang="ts">
import LinksNav from "@/components/ui/LinksNav.vue";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.padding(@p) {
    padding-left: @p;
    padding-right: @p;
}

// ==========

header {
    width: 100%;
    text-align: center;
    animation: fadeIn 1s ease-out;
    margin-bottom: @main-content-padding-top;

    .avatar {
        width: 9.375rem;
        height: 9.375rem;
        border-radius: 50%;
        border: 0.25rem solid @primary-color;
        margin: 0 auto 1.25rem;
        overflow: hidden;
        background: linear-gradient(45deg, @primary-color, @secondary-color);
        .flex-center();

        span {
            display: block;
            width: 100%;
            height: 100%;
            background: url("https://avatars.githubusercontent.com/u/121269017?v=4") no-repeat;
            background-size: cover;
        }
    }

    h1 {
        .logo-realmaybe();
        font-size: 3rem;
    }

    .tagline {
        font-size: 1.2rem;
        color: @text-muted;
        margin-bottom: 1.25rem;
    }

    .intro {
        max-width: 37.5rem;
        margin: 0 auto 1rem;
        padding: 0.9375rem;
        background: fade(@card-bg, 70%);
        border-radius: .75rem;
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);

        &.links {
            .padding(5rem)
        }

        &:last-child {
            margin-bottom: 0;
        }

        .tips {
            color: @text-muted;
            margin-bottom: 1rem;
        }

        span {
            padding: 0 0.5rem;
        }

        @media (max-width: @mobile-breakpoint) {
            &.links {
                .padding(3rem)
            }

            span {
                display: block;
            }

            i {
                display: none;
            }
        }
    }
}
</style>
