<!-- GitHub Stats -->

<template>
    <section class="github-stats">
        <h2>💻 📊</h2>

        <div class="tips">{{ tip }}</div>
        <div class="github-stats-box">
            <img v-for="img in Object.values(imgSrc)" :key="img" :src="img" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tips = [
    "GitHub 卡片走 Vercel 网络，偶尔抽风请多包涵 😇",
    "下面这几张图靠 GitHub API 活着，如果白屏大概是被墙了……",
    "这是我在 GitHub 的日常数据，加载不出？试试刷新 or 科学上网吧 🔓",
] as const;

/* 2. 随机抽一条 */
const tip = ref(tips[Math.floor(Math.random() * tips.length)]);

const imgSrc = ref({
    topLangs:
        "https://github-readme-stats.vercel.app/api/top-langs/?username=RealMaybe&layout=compact&theme=radical&hide_border=true",
    stats: "https://github-readme-stats.vercel.app/api?username=RealMaybe&show_icons=true&theme=radical&hide_border=true&include_all_commits=true",
});
</script>

<style scoped lang="less">
@import url("@style/page/index-public.less");

.github-stats {
    flex: 1 1 100% !important;

    .tips {
        border-left: 0.25rem solid @text-muted;
        padding-left: 0.75rem;
        margin-bottom: 1.25rem;
        margin-left: 0.125rem;
        font-size: 0.75rem;
        color: @text-muted;
    }

    .github-stats-box {
        width: 100%;
        .flex-between-start();

        img {
            width: 48%;
            transition: all 0.3s ease-in-out;

            &:hover {
                .hover(-0.25rem);
            }
        }

        @media (max-width: @mobile-breakpoint) {
            flex-direction: column;

            img {
                width: 100%;

                &:first-child {
                    margin-bottom: 1rem;
                }
            }
        }
    }
}
</style>
