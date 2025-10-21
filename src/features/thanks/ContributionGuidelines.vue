<template>
    <MobileAccessReminder />

    <section>
        <div class="tips">
            <span>可通过此处</span>
            <RouterLink to="/acknowledgments">返回「致谢专栏」页面</RouterLink>
        </div>

        <ContributionGuidelinesDoc />
    </section>
</template>

<script setup lang="ts">
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue"
import ContributionGuidelinesDoc from "@/assets/docs/thanks/contribution-guidelines.md";
</script>