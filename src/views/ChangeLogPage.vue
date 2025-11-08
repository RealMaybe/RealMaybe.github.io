<template>
    <MobileAccessReminder />

    <section id="change-log">
        <RouterView />
    </section>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

@padding-top-bottom: 1.5rem;
@padding-left-right: @padding-top-bottom * 2;

#change-log {
    padding: @padding-top-bottom @padding-left-right ;

    @media (max-width: @tablet-breakpoint) {
        padding: 0 @padding-top-bottom 1.5rem;
    }
}
</style>