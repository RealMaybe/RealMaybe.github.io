<template>
    <section class="blog-page">
        <h1 class="title page-title">
            <i class="fa fa-book-open"></i>
            <span>博客</span>
        </h1>

        <article>
            <RouterView />
        </article>
    </section>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
// import { useBlogDataStore } from "@/stores";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");
</style>
