<template>
    <changeLogDoc />

    <div class="hr">
        <hr />
    </div>

    <RoadMap />
</template>

<script setup lang="ts">
import changeLogDoc from "@docs/changeLog/CHANGELOG.md";
import RoadMap from "@docs/changeLog/ROADMAP.md";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.hr {
    hr {
        border: 0;
        height: 2px;
        background: linear-gradient(to right, #0F3460, #533483, #E94560, #533483, #0F3460);
        margin: 4rem 0 3rem;
        border-radius: 2px;
    }
}
</style>
