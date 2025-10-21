<!-- 功能导航 -->

<template>
    <div class="meta-link">
        <template v-for="item in metaLinkPages" :key="item.name">
            <RouterLink :to="item.path" active-class="on">
                {{ item.name }}
            </RouterLink>
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { metaLinkPage } from "@/router/routes/metaLinkPage";

// 拿到导航的一级路由
const metaLinkPages = computed(() =>
    metaLinkPage
        .filter(r => r.meta?.nav && r.meta?.title && !r.redirect)
        .map(r => ({
            name: r.meta!.title as string,
            path: r.path,
        }))
);
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.meta-link {
    .flex-start();

    a {
        color: @text-muted;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s;
        margin: 0 .25rem;

        &:hover {
            text-decoration: underline;
        }

        &.on {
            color: @secondary-color;
        }

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }

        @media (max-width: 768px) {
            width: 100%;
            margin: 0 0 .25rem 0;
            text-align: center;
        }
    }
}
</style>