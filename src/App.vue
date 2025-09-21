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

// console.log(
//     `%c 🐟 ${import.meta.env.VITE_APP_NAME || "Personal Site"} %c v${import.meta.env.VITE_APP_VERSION} %c\n欢迎摸摸鱼~`,
//     "background: #82aaff; color: black; padding: 2px; border-radius: 3px 0 0 3px;",
//     "background: #ffcb6b; color: black; padding: 2px; border-radius: 0 3px 3px 0;",
//     "background: transparent; color: inherit;"
// );
</script>
