<!-- 关于我 -->

<template>
    <MobileAccessReminder />

    <section id="self-introduction">
        <aboutMe />
    </section>

    <WebSkill />
    <LanguageStudy />
    <PersonalHobbies />
    <GithubStats />
</template>

<script setup lang="ts">
// 引入组件
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
import aboutMe from "@/assets/docs/about/aboutMe.md";

// 技能
import WebSkill from "@/components/shared/WebSkill.vue";
import LanguageStudy from "@/components/shared/LanguageStudy.vue";
import PersonalHobbies from "@/components/shared/PersonalHobbies.vue";

// Github Stats
import GithubStats from "@/components/shared/GithubStats.vue";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

@padding-top-bottom: 1.5rem;
@padding-left-right: @padding-top-bottom * 2;

#self-introduction {
    flex: 1 1 100% !important;
    padding: @padding-top-bottom @padding-left-right;

    @media (max-width: @mobile-breakpoint) {
        padding: 0 @padding-top-bottom @padding-top-bottom;
    }

    .introduction-text {
        p {
            line-height: 1.5;
            margin-bottom: 0.5rem;

            &:last-child {
                margin-bottom: 0;
            }
        }

        ul {
            padding-left: 1.5rem;
        }
    }
}
</style>