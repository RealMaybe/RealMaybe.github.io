<!-- OC 角色 -->

<template>
    <section class="oc-section">
        <h2>
            <i class="fas fa-paint-brush"></i>
            <span>OC 角色</span>
        </h2>

        <div class="oc-grid">
            <div class="oc-card" v-for="(character, index) in characters" :key="index">
                <h3>{{ character.name }}</h3>
                <p v-for="description in character.description" :key="description">{{ description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const characters = reactive([{
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
}]);
</script>

<style scoped lang="less">
@import url("@style/page/index-public.less");

.oc-section {
    flex: 1 1 100% !important;

    .oc-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;
        margin-top: 1.25rem;

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
    }
}
</style>