<template>
    <h1>这是博客页面</h1>
    
    <RouterLink :to="BLOG_LINKS.update.link">{{ BLOG_LINKS.update.title }}</RouterLink>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink } from "vue-router";

const BLOG_LINKS = reactive({
    update: {
        title: "博客更新日志",
        link: "/blog/update"
    }
});
</script>

<style scoped lang="less"></style>
