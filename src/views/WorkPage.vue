<template>

    <MyWork v-if="videoLink.length > 0" :creations="videoLink" />

</template>

<script setup lang="ts">
// main
import MyWork from "@/features/work/MyWork.vue";

// data
import videoLink from "@/assets/data/video.json";
</script>