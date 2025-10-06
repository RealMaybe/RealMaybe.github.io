<!-- 小店页面 -->

<template>
    <section>
        <CarouselCard :imageList="list" />
    </section>
</template>

<script setup lang="ts">
import CarouselCard from "@/features/shop/CarouselCard.vue";

const list = [
    "https://picsum.photos/300/300?1",
    "https://picsum.photos/300/300?2",
    "https://picsum.photos/300/300?3",
    "https://picsum.photos/300/300?4",
    "https://picsum.photos/300/300?5",
    // "https://picsum.photos/300/300?6",
    // "https://picsum.photos/300/300?7",
    // "https://picsum.photos/300/300?8",
    // "https://picsum.photos/300/300?9",
    // "https://picsum.photos/300/300?10",
    // "https://picsum.photos/300/300?11"
];
</script>
