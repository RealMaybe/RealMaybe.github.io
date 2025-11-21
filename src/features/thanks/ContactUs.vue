<!-- 联系我们 -->

<template>
    <div class="markdown-body">
        <hr />
    </div>
    <div class="call-to-action">
        <h2>共同塑造未来</h2>
        <p>本专栏旨在铭记每一位为本站贡献力量的朋友。</p>
        <p>您的每一次发现与构思，都是推动我们前行的重要一步。</p>
        <p>
            <span>若您也愿一同前行，欢迎您</span>
            <RouterLink to="/acknowledgments/feedback" aria-label="提交反馈">
                <i class="fa fa-pencil-alt fa-fw"></i> 提交反馈
            </RouterLink>
            <span>。</span>
        </p>
        <p class="center">
            <span>我们期待，这里也能铭刻您的名字。</span>
        </p>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.call-to-action {
    // 变量
    @cta-bg: rgba(30, 30, 46, 0.45);
    @cta-backdrop: blur(8px);
    @cta-text: #e0e0e0;
    @cta-heading: #ffffff;
    @cta-link: #66b2ff;
    @cta-max-width: 40rem;
    @cta-padding: 1.5rem 2rem;
    @cta-border-radius: 1rem;

    // 样式
    background: @cta-bg;
    backdrop-filter: @cta-backdrop;
    -webkit-backdrop-filter: @cta-backdrop;
    color: @cta-text;
    padding: @cta-padding;
    border-radius: @cta-border-radius;
    margin: 1.5rem auto 3rem;
    max-width: @cta-max-width;
    width: fit-content;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.5);

    .center {
        width: 100%;
        text-align: center;

        @media (max-width: @mobile-breakpoint) {
            display: flex;
            flex-direction: column;
        }
    }

    h2 {
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
        color: @cta-heading;

        @media (max-width: @mobile-breakpoint) {
            font-size: 1rem;
        }
    }

    p {
        font-size: 0.875rem;
        line-height: 1.6;
        margin: 0 0 0.5rem;

        @media (max-width: @mobile-breakpoint) {
            font-size: 0.75rem;
        }

        &:last-of-type {
            margin-bottom: 0;
            opacity: 0.85;
        }
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        margin: 0 0.25rem;
        color: @cta-link;
        font-weight: 600;
        text-decoration: none;
        border-bottom: 0.0625rem solid transparent;
        transition: all 0.2s ease;

        &:hover,
        &:focus {
            border-bottom-color: @cta-link;
            outline: none;
        }
    }
}
</style>
