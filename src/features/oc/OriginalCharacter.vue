<!-- OC 角色 -->

<template>
    <section class="oc-section">
        <h2>
            <i class="fas fa-paint-brush"></i>
            <span>OC 角色</span>
        </h2>

        <!-- 作品集 -->
        <article>
            <div class="oc-group" v-for="(group, groupKey) in characters" :key="groupKey">
                <h3 class="group-title">{{ group.title }}</h3>

                <!-- 角色卡片 -->
                <div class="oc-grid">
                    <div class="oc-card" v-for="c in group.character" :key="c.name">
                        <h3>{{ c.name }}</h3>
                        <p v-for="d in c.description" :key="d">{{ d }}</p>
                    </div>
                </div>
            </div>
        </article>

        <div class="tips">
            <p class="title">注：</p>
            <ul>
                <li>本站所有角色均为原创，未经允许不得转载。</li>
                <li>相关具体设计正在注册版权，现阶段暂不公布完整设定。</li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const characters = reactive({
    Ling: {
        title: "灵",
        character: [{
            name: "Real_KyoShinn",
            description: [
                "许家大少爷，蓝发正太外表",
                "有点天然呆"
            ]
        }, {
            name: "Unreal_KyoKa",
            description: [
                "许家二少爷，异色瞳少年",
                "冷静寡言，只把温柔留给哥哥"
            ]
        }, {
            name: "尘羽流年",
            description: [
                "猫系亚人少主，银发猫耳",
                "温柔守矩，尾巴常被妹妹当抱枕"
            ]
        }, {
            name: "尘羽翊岚",
            description: [
                "傲娇大小姐，橘红发赤瞳",
                "讨厌传统，最黏哥哥"
            ]
        }]
    },
    WorldPoem: {
        title: "世界之诗",
        character: [{
            name: "墨执",
            description: [
                "蓝发蓝瞳的记录者",
                "沉静温柔，为使命殉道"
            ]
        }, {
            name: "聆玄",
            description: [
                "黑发黑瞳的见证者",
                "果决重情，为创世变革"
            ]
        }]
    }
});
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.oc-section {
    flex: 1 1 100% !important;

    .oc-group {
        padding-bottom: 1.5rem;
        margin-bottom: 1.25rem;
        border-bottom: .0625rem solid @secondary-color;

        &:last-child {
            padding-bottom: 0;
            margin-bottom: 0;
            border: none;
        }

        // h3
        .group-title {
            // color: @secondary-color;
            font-size: 1.25rem;
            margin-bottom: 1.25rem;
        }
    }

    .oc-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;

        @media (max-width: @mobile-breakpoint) {
            flex-direction: column;

            .oc-card {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }

        @media (min-width: (@mobile-breakpoint + 1px)) and (max-width: @tablet-breakpoint) {
            .oc-card {
                flex: 0 0 calc(50% - 0.625rem);
                max-width: calc(50% - 0.625rem);
            }
        }

        @media (min-width: @desktop-breakpoint) {
            .oc-card {
                flex: 0 0 calc(25% - 0.9375rem);
                max-width: calc(25% - 0.9375rem);
            }
        }
    }

    .oc-card {
        background: lighten(@card-bg, 5%);
        border-radius: 0.625rem;
        padding: 0.9375rem;
        transition: transform 0.3s, box-shadow 0.3s;

        &:hover {
            .hover(-0.3125rem);
        }

        h3 {
            color: @secondary-color;
            margin-bottom: 0.625rem;
        }

        p {
            color: @text-muted;
            font-size: 0.9rem;
        }
    }

    .tips {
        margin-top: 1rem;
        padding-top: 1rem;
        opacity: 0.5;

        .title {
            color: @secondary-color;
            font-size: .875rem;
            margin-bottom: 0.125rem;
        }

        ul {
            font-size: .75rem;
            padding-left: 1.125rem;

            li {
                margin-bottom: 0.125rem;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

    }
}
</style>