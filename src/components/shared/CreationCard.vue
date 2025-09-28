<template>
    <div class="creation-item">
        <div class="video-box">
            <iframe class="video-frame" :src="playerUrl" scrolling="yes" frameborder="no" framespacing="0"
                allowfullscreen="true"></iframe>
        </div>

        <p class="title">
            <a :href="bvUrl" target="_blank" rel="noopener noreferrer" :title="title.video">
                {{ title.video }}
            </a>
        </p>
    </div>
</template>

<script setup lang="ts">
import type { createPlayerLinkOptions } from "@/tsTypes";
import { createPlayerLink, createBVLink } from "@/plugin";

interface Props {
    link: createPlayerLinkOptions;
    title: {
        video: string;
        song: string;
    }
}

const props = defineProps<Props>();
const playerUrl = createPlayerLink(props.link);
const bvUrl = createBVLink(props.link.bvid);
</script>

<style scoped lang="less">
@import url("@style/page/index-public.less");

.creation-item {
    width: 18.75rem;
    margin-bottom: 1.25rem;

    .video-box {
        position: relative;
        width: 100%;
        padding-top: calc(9 / 16 * 100%);

        .video-frame {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    p.title {
        width: 100%;
        font-size: 1rem;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 2;

        a {
            color: white;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    @media (min-width: @desktop-breakpoint) {
        flex: 0 0 calc(33.333% - 0.9375rem);
        max-width: calc(33.333% - 0.9375rem);
    }

    @media (max-width: @tablet-breakpoint) {
        flex: 0 0 calc(50% - 0.9375rem);
        max-width: calc(50% - 0.9375rem);
    }

    @media (max-width: @mobile-breakpoint) {
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 1.25rem;
    }
}
</style>
