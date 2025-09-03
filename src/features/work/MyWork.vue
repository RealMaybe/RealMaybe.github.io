<!-- 我的作品 -->

<template>
    <section class="my-creations">
        <h2>
            <i class="fas fa-cubes"></i>
            <span>我的作品</span>
        </h2>

        <div class="creation">
            <template
                v-for="(creation, _index) in creations"
                :key="creation.title"
            >
                <div class="creation-item">
                    <div class="video-box">
                        <iframe
                            class="video-frame"
                            :src="createPlayerLink(creation.link)"
                            scrolling="yes"
                            frameborder="no"
                            framespacing="0"
                            allowfullscreen="true"
                        ></iframe>
                    </div>

                    <p class="title">
                        <a
                            :href="createBVLink(creation.link.bvid)"
                            target="_blank"
                            rel="noopener noreferrer"
                            :title="creation.title"
                            >{{ creation.title }}</a
                        >
                    </p>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { createPlayerLinkOptions } from "@/tsTypes";
import { createPlayerLink, createBVLink } from "@/plugin";

interface Props {
    creations: Array<{
        title: string;
        link: createPlayerLinkOptions;
    }>;
}

const { creations } = defineProps<Props>();
</script>

<style scoped lang="less">
@import url("@style/page/index-public.less");

.my-creations {
    flex: 1;

    .creation {
        .flex-between-center();
        width: 100%;
        overflow: hidden;

        @media (min-width: @desktop-breakpoint) {
            flex-wrap: wrap;

            .creation-item {
                flex: 0 0 calc(33.333% - 0.9375rem);
                max-width: calc(33.333% - 0.9375rem);
            }
        }

        @media (max-width: @tablet-breakpoint) {
            flex-wrap: wrap;

            .creation-item {
                flex: 0 0 calc(50% - 0.9375rem);
                max-width: calc(50% - 0.9375rem);
            }
        }

        @media (max-width: @mobile-breakpoint) {
            flex-direction: column;
            flex-wrap: wrap;

            .creation-item {
                flex: 0 0 100%;
                max-width: 100%;
                margin-bottom: 1.25rem;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

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
        }
    }
}
</style>
