<template>
    <MobileAccessReminder />

    <section id="change-log">
        <changeLogDoc />
    </section>
</template>

<script setup lang="ts">
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
import changeLogDoc from "@/assets/docs/CHANGELOG.md";
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