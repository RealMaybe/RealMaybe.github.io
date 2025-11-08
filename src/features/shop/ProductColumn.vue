<!-- 商品 -->
<template>
    <div class="product-column">
        <div class="left">
            <CarouselCard :imageList="product.images" />
        </div>
        <div class="right">
            <ProductInfo :product="product" />
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入类型
import type { Product } from "../../../tsTypes";

// 引入组件
import CarouselCard from "@/features/shop/module/CarouselCard.vue";
import ProductInfo from "@/features/shop/module/ProductInfo.vue";

// 接收父组件传值
defineProps<{
    product: Product // 单个产品对象
}>();
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.product-column {
    .flex-start();
    overflow: hidden;

    @media (max-width: @mobile-breakpoint) {
        flex-direction: column;
    }

    .left {
        flex-shrink: 0;

        @media (max-width: @mobile-breakpoint) {
            margin: 0 auto 1rem;
        }
    }

    .right {
        flex: 1;
        margin-left: 1.5rem;

        @media (max-width: @mobile-breakpoint) {
            width: 100%;
            margin-left: 0;
        }
    }
}
</style>