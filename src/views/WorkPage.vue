<!-- 我的作品页面 -->

<template>
    <section class="my-creations">
        <h2>
            <i class="fas fa-cubes"></i>
            <span>我的作品</span>
        </h2>

        <MusicWork :all-creations="videoLink" />
    </section>
</template>

<script setup lang="ts">
import MusicWork from "@/features/work/MusicWork.vue"; // main
import videoLink from "@/assets/data/video.json"; // data
</script>

<style scoped lang="less">
@import url("@style/page/index-public.less");
</style>
