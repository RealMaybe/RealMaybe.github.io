<!-- 小店页面 -->

<template>
    <MobileAccessReminder />

    <section>
        <h2>
            <i class="fas fa-store"></i>
            <span>RealMaybe 的小铺</span>
        </h2>

        <div class="tips">
            <h3>【购物说明】</h3>
            <p>本站目前暂不支持直接交易，点击“购买”按钮后将跳转至淘宝商品详情页完成下单。</p>
            <p>
                <span>关于物流、售后等具体政策，敬请查看</span>
                <RouterLink to="/shop/policies">《政策详情》</RouterLink>
                <span>。感谢您的理解与支持！</span>
            </p>
        </div>

        <article class="product-details">
            <ProductColumn class="product" v-for="product in products" :key="product.id" :product="product" />
        </article>
    </section>
</template>

<script setup lang="ts">
// 类型
import type { Products } from "../../tsTypes";
// 依赖
import { ref } from "vue";
import { RouterLink } from "vue-router";
// 数据
import productsData from "@data/goods.json";
// 组件
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
import ProductColumn from "@/features/shop/ProductColumn.vue";

const products = ref<Products>(productsData as Products);
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

@spacing: 1.5rem;

.product-details {
    width: 98%;
    margin: 1.5rem auto 0;
}

.product {
    margin-bottom: @spacing;
    padding-bottom: @spacing;
    border-bottom: 0.0625rem solid @primary-color;

    &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }
}
</style>
