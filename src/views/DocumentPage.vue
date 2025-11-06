<template>
    <section class="document-page">
        <h1 class="title page-title">
            <i class="fa fa-book"></i>
            <span>官方文档</span>
        </h1>

        <RouterView />
    </section>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");
</style>