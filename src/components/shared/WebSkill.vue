<!-- 技能部分 -->

<template>
    <section id="skill">
        <h2>
            <i class="fas fa-code"></i>
            <span>前端技能</span>
        </h2>

        <div class="skill-item" v-for="(skill, index) in skills" :key="index">
            <div class="skill-header">
                <span>{{ skill.name }}</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.strength * 10 + '%' }"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const skills = reactive([
    { name: "HTML5", strength: 9 },
    { name: "CSS3 / Less", strength: 8 },
    { name: "JavaScript", strength: 8 },
    { name: "TypeScript", strength: 7 },
    { name: "Vue3", strength: 7 },
]);
</script>

<style scoped lang="less">
@import url("@style/page/index-public.less");

#skill {
    animation-delay: 0.2s;

    .skill-item {
        margin-bottom: 0.9375rem;

        .skill-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.3125rem;
        }

        .skill-bar {
            height: 0.625rem;
            background: darken(@card-bg, 2%);
            border-radius: 0.3125rem;
            overflow: hidden;

            .skill-progress {
                height: 100%;
                background: linear-gradient(90deg, @primary-color, @accent-color);
                border-radius: 0.3125rem;
                transition: width 1.5s ease-out;
            }
        }
    }
}
</style>
