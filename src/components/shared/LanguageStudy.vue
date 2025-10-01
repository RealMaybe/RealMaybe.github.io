<!-- 语言学习 -->

<template>
    <section id="language">
        <h2>
            <i class="fas fa-language"></i>
            <span>语言学习</span>
        </h2>

        <div class="language-item" v-for="(language, index) in languages" :key="index">
            <i :class="language.icon"></i>
            <div class="language-info">
                <h3>{{ language.name }}</h3>
                <div class="language-progress">
                    <div class="progress" :style="{ width: language.progress * 10 + '%' }"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const languages = reactive([
    { name: "汉语（普通话）", progress: 9, icon: "fas fa-language" },
    { name: "汉语（粤语）", progress: 1, icon: "fas fa-language" },
    { name: "英语", progress: 5, icon: "fas fa-language" },
    { name: "日语", progress: 2, icon: "fas fa-language" },
    { name: "德语", progress: 1, icon: "fas fa-language" },
]);
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

#language {
    animation-delay: 0.4s;

    .language-item {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        i {
            font-size: 1.5rem;
            margin-right: 1rem;
            color: @secondary-color;
        }

        .language-info {
            flex-grow: 1;

            h3 {
                display: flex;
                justify-content: space-between;
                font-size: 1rem;
                margin-bottom: 0.3125rem;
            }

            .language-progress {
                height: 0.375rem;
                background: darken(@card-bg, 2%);
                border-radius: 0.1875rem;

                .progress {
                    height: 100%;
                    background: linear-gradient(90deg, @primary-color, @accent-color);
                    border-radius: 0.1875rem;
                    transition: width 1.5s ease-out;
                }
            }
        }
    }
}
</style>