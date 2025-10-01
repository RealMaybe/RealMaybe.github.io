<!-- 技能部分 -->

<template>
    <section id="skill">
        <h2>
            <i class="fas fa-code"></i>
            <span>前端技能</span>
        </h2>

        <div class="skill-item" v-for="(skill, index) in skills" :key="index">
            <div class="skill-header">
                <!-- <i :class="skill.icon"></i> -->
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
    { name: "HTML5", strength: 9, icon: "fa-brands fa-html5" },
    { name: "CSS3 / Less", strength: 8, icon: "fa-brands fa-css3" },
    // { name: "Less", strength: 8, icon: "fa-brands fa-less" },
    { name: "JavaScript", strength: 8, icon: "fa-brands fa-js" },
    { name: "TypeScript", strength: 7, icon: "fa-brands fa-js" },
    { name: "Vue3", strength: 7, icon: "fa-brands fa-vuejs" },
]);
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

#skill {
    animation-delay: 0.2s;

    .skill-item {
        margin-bottom: 0.9375rem;

        .skill-header {
            .flex-start-center();
            margin-bottom: 0.3125rem;

            i {
                margin-right: 0.5rem;
                font-size: 1.125rem;
            }
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
