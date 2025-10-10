<!-- GitHub Stats -->

<template>
    <section class="github-stats">
        <h2>💻 📊</h2>

        <div class="tips">{{ tip }}</div>
        <div class="github-stats-box">
            <div class="starts" v-for="img in Object.values(imgSrc)" :key="img">
                <img :src="img" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { baseParam, buildGitHubStatsURL } from "@/plugin";

/**
 * 提示语
 */
const tips = [
    "GitHub 卡片走 Vercel 网络，偶尔抽风请多包涵 😇",
    "下面这几张图靠 GitHub API 活着，如果渲染失败大概是被墙了…… 🧱",
    "这是我在 GitHub 的日常数据，加载不出？试试刷新 or 科学上网吧 🔓",
] as const;

/**
 * 随机获取提示语
 */
const tip = ref(tips[Math.floor(Math.random() * tips.length)]);

/**
 * 获取 GitHub 统计数据
 */
const imgSrc = ref({
    topLangs: buildGitHubStatsURL({
        ...baseParam,
        layout: "compact",
    }, "top-langs"),
    stats: buildGitHubStatsURL({
        ...baseParam,
        show_icons: true,
        include_all_commits: true
    }),
});
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.github-stats {
    flex: 1 1 100% !important;

    .tips {
        margin-bottom: 1.5rem;
    }

    .github-stats-box {
        width: 100%;
        .flex-between-start();

        div.starts {
            width: 49%;

            img {
                width: 100%;
                transition: all 0.3s ease-in-out;

                &:hover {
                    .hover(-0.25rem);
                }
            }
        }

        @media (max-width: @tablet-breakpoint) {
            // .flex-between-start();

            div.starts {
                width: 49%;
            }
        }

        @media (max-width: @mobile-breakpoint) {
            flex-direction: column;

            div.starts {
                width: 100%;

                &:first-child {
                    margin-bottom: 1rem;
                }
            }
        }
    }
}
</style>
