<!-- 兴趣爱好 -->

<template>
    <section id="personal-hobbies">
        <h2>
            <i class="fas fa-heart"></i>
            <span>兴趣爱好</span>
        </h2>

        <div class="hobbies">
            <div class="hobby-item" v-for="(hobby, index) in hobbies" :key="index">
                <i :class="hobby.icon"></i> {{ hobby.name }}
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hobbies = ref([
    { name: "唱歌", icon: "fas fa-music" },
    { name: "写作", icon: "fas fa-pen" },
    { name: "游戏", icon: "fas fa-gamepad" },
    { name: "编程", icon: "fas fa-laptop-code" },
    { name: "吉他", icon: "fas fa-guitar" },
    { name: "烹饪", icon: "fas fa-utensils" },
    { name: "阅读", icon: "fas fa-book-open" },
]);
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

#personal-hobbies {
    animation-delay: 0.6s;

    .hobbies {
        .flex-start-center();
        flex-wrap: wrap;
        gap: 0.9375rem;

        @media (max-width: @mobile-breakpoint) or (min-width: @desktop-breakpoint) {
            .flex-between-center();
        }
    }

    .hobby-item {
        .flex-center();
        width: 5.625rem;
        background: lighten(@card-bg, 5%);
        padding: 0.5rem 0.9375rem;
        border-radius: 1.25rem;
        transition: transform 0.3s, box-shadow 0.3s;

        @media (max-width: @desktop-breakpoint) {
            width: 6.25rem;
        }

        &:hover {
            .hover(-0.125rem);
        }

        i {
            margin-right: 0.5rem;
            color: @secondary-color;
        }
    }
}
</style>