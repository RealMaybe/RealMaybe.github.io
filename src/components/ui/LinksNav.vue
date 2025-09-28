<!-- 导航栏 -->

<template>
    <nav id="links-nav">
        <!-- 内链 -->
        <template v-for="link in internalLink" :key="link.name">
            <RouterLink :to="link.path" active-class="on" @click="scrollToTop">
                {{ link.name }}
            </RouterLink>
        </template>

        <!-- 外链 -->
        <template v-for="link in externalLinks" :key="link.name">
            <a :href="link.path" :target="link.target" :rel="link.rel">
                {{ link.name }}
            </a>
        </template>
    </nav>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { publicPages } from "@/router/routes/publicPage";
import { scrollToTop } from "@/plugin";

// 内链
const internalLink = computed(() =>
    publicPages
        .filter(r => r.meta?.nav && r.meta?.title && !r.redirect)
        .map(r => ({
            name: r.meta!.title as string,
            path: r.path,
        }))
);

// 外链
const externalLinks = reactive([{
    name: "小店",
    path: "https://realmaybe0429.taobao.com/",
    target: "_blank",
    rel: "noopener"
}])
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

    a {
        padding: 0 0.25rem;
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
</style>
