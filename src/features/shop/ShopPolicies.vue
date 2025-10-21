<template>
    <MobileAccessReminder />

    <section>
        <div class="tips">
            <span>可通过此处</span>
            <RouterLink to="/shop">返回「我的小店」页面</RouterLink>
        </div>

        <ShopPolicies />
    </section>
</template>

<script setup lang="ts">
// 引入依赖
import { RouterLink } from "vue-router";

// 引入组件
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
import ShopPolicies from "@/assets/docs/shop/PurchaseNotes.md";
</script>
