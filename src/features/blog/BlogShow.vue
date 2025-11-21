<template>
    <div v-if="validation.isValid">{{ validation.routeId }}</div>
    <div v-else>你访问的路径不是一个有效的地址</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

function useRouteValidation(validRoutes: Record<string, Array<string | number>>) {
    const route = useRoute();

    const validation = computed(() => {
        for (const [prefix, validIds] of Object.entries(validRoutes)) {
            const pattern = new RegExp(`^${prefix}/([^/]+)$`);
            const match = route.path.match(pattern);

            if (match) {
                const id = match[1];
                const idSet = new Set(validIds.map(id => String(id)));

                return {
                    isValid: idSet.has(id),
                    routeId: id,
                };
            }
        }

        return {
            isValid: false,
            routeId: null,
        };
    });

    return validation;
}

// 支持多个路由前缀的验证
const validation = useRouteValidation({
    "/blog": [123, 456, "789"],
    "/article": ["abc", "def"],
});
</script>

<style scoped lang="less">
@import url("@style/public-page.less");
</style>
