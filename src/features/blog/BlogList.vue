<template>
    <ul>
        <li v-for="item in store.list" :key="item.slug">
            <RouterLink :to="{ name: 'blog-detail', params: { slug: item.slug } }">
                {{ item.title }}
            </RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useBlogDataStore } from "@/stores/blogData";
const store = useBlogDataStore();
</script>
