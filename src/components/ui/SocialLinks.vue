<!-- 社交链接 -->

<template>
    <div class="social-links">
        <template v-for="item in socialLinks" :key="item.name">
            <a :href="item.link" target="_blank" rel="noopener noreferrer" :title="item.title">
                <i :class="item.icon"></i>
            </a>
        </template>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const socialLinks = reactive([
    {
        name: "Weibo",
        icon: "fab fa-weibo",
        title: "也许吧真的RealMaybe - 微博",
        link: "https://weibo.com/u/5678690912"
    },
    {
        name: "Bilibili",
        icon: "fab fa-bilibili",
        title: "也许吧真的RealMaybe - 哔哩哔哩",
        link: "https://space.bilibili.com/175020735"
    },
    {
        name: "Twitter",
        icon: "fab fa-twitter",
        title: "RealMaybe - X",
        link: "https://x.com/RealMaybe0429"
    },
    {
        name: "GitHub",
        icon: "fab fa-github",
        title: "RealMaybe - GitHub",
        link: "https://github.com/realmaybe"
    },
]);
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.social-links {
    .flex-between-start();
    margin-bottom: .5rem;
    gap: 1.25rem;

    a {
        color: @text-color;
        font-size: 1.5rem;
        transition: color 0.3s;
        border: none !important;

        &:hover {
            color: @secondary-color;
        }
    }
}
</style>