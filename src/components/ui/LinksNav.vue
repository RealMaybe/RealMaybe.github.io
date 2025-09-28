<!-- 导航栏 -->

<template>
    <nav id="links-nav">
        <p v-for="link in links" :key="link.name">
            <RouterLink :to="link.path" active-class="on" @click="scrollToTop">
                {{ link.name }}
            </RouterLink>
        </p>
    </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { publicPages } from "@/router/routes/publicPage";
import { scrollToTop } from "@/plugin";

// 拿到导航的一级路由
const links = computed(() =>
    publicPages
        .filter(r => r.meta?.nav && r.meta?.title && !r.redirect)
        .map(r => ({
            name: r.meta!.title as string,
            path: r.path,
        }))
);
</script>

<style scoped lang="less">
@import url("@style/public/flex.less");
@import url("@style/public/var.less");

#links-nav {
    .flex-between-center();
    flex-wrap: wrap;
    gap: 1.25rem;
    max-width: 37.5rem;
    text-align: center;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;

    p {
        padding: 0 0.25rem;

        &.line {
            display: none;
            padding: 0;
            width: 100%;
            border-bottom: 0.0625rem solid @text-color;
        }

        a {
            color: @text-color;
            text-decoration: none;

            &.on {
                color: @link-on-color;
                font-weight: bold;
                text-decoration: underline;
            }

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
