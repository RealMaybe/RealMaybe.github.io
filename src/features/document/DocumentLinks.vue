<template>
    <header>
        <nav class="doc-nav">
            <template v-for="{ path, name } in links" :key="name">
                <RouterLink :to="path">{{ name }}</RouterLink>
            </template>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const links = [
    { path: "/document/test", name: "测试页面" },
];
</script>

<style scoped lang="less">
@import url("@style/public-page.less");
</style>
