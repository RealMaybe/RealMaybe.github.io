<template>
    <div class="container">
        <PageHeader />

        <main class="page-main">
            <RouterView />
        </main>

        <PageFooter />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import PageHeader from "./components/ui/PageHeader.vue";
import PageFooter from "./components/ui/PageFooter.vue";
</script>
