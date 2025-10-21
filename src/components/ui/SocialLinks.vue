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
import social from "@data/social.json";
import { ref } from "vue";

const socialLinks = ref(social);
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