<!-- 我的作品页面 -->

<template>
    <section class="my-creations">
        <h2>
            <i class="fas fa-cubes"></i>
            <span>我的作品</span>
        </h2>

        <MusicWork class="work-module" :all-creations="MusicWorkLink" />
        <NovelWork class="work-module" :novelList="NovelWorkLink" />
    </section>
</template>

<script setup lang="ts">
// 引入数据
import { MusicWorkLink, NovelWorkLink } from "@/assets/data/work";

// 引入组件
import MusicWork from "@/features/work/MusicWork.vue";
import NovelWork from "@/features/work/NovelWork.vue";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.work-module {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: .0625rem solid @secondary-color ;

    &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }
}
</style>
