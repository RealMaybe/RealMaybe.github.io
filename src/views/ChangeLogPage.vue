<template>
    <section class="change-log">
        <MobileAccessReminder />
        <changeLogDoc />
    </section>
</template>

<script setup lang="ts">
import changeLogDoc from "@/assets/docs/CHANGELOG.md";
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
</script>

<style scoped lang="less">
@padding-top-bottom: 1.5rem;
@padding-left-right: 3rem;

.change-log {
    padding: @padding-top-bottom @padding-left-right !important;
}
</style>