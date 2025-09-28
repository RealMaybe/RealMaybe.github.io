<template>
    <section class="blog-page">
        <RouterView />
    </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useBlogDataStore } from "@/stores/blogData";

onMounted(() => {
    useBlogDataStore().fetchIndex(); // 仅拉索引
});
</script>
