<!-- 我的作品页面 -->

<template>
    <MyWork :all-creations="videoLink" />
</template>

<script setup lang="ts">
import MyWork from "@/features/work/MyWork.vue"; // main
import videoLink from "@/assets/data/video.json"; // data
</script>
