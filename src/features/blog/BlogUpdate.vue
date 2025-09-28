<template>
    <article v-if="meta">
        <h1>{{ meta.title }}</h1>
        <!-- 简单渲染，你可以用 markdown-it / micromark 进一步渲染 -->
        <pre>{{ content }}</pre>
    </article>
    <p v-else>加载中…</p>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useBlogDataStore } from "@/stores/blogData";

const route = useRoute();
const store = useBlogDataStore();

const slug = route.params.slug as string;
const meta = store.bySlug(slug);
const content = ref<string>("");

watchEffect(async () => {
    if (!meta) return;
    content.value = await store.fetchContent(slug);
});
</script>
