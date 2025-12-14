<!-- Redirect View -->

<template>
    <div>跳转中...</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
    const fullPath = route.fullPath; // 包含 /docs/xxx
    window.location.href = `https://hub.realmaybe0429.space${fullPath}`;
});
</script>
