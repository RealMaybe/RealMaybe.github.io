import type { createPlayerLinkOptions } from "@tsTypes";
import { updateUrlParams, parseUrlParams } from "@/utils";

/**
 *
 * @param { string } url 链接
 * @returns { string | null } 视频ID
 */
export const getVideoID = (url: string): string | null => {
    const params = parseUrlParams(true, url);

    if (params.bvid) return params.bvid as string;

    return null;
};

/**
 * 创建 b站播放器 链接
 * @param videoID 视频ID
 */
export const createBVLink = (videoID: string): string =>
    `https://www.bilibili.com/video/${videoID}/`;

export const createPlayerLink = (options: createPlayerLinkOptions): string => {
    let { aid, bvid, cid, p = 1 } = options;

    aid = String(aid);
    bvid = String(bvid);
    cid = String(cid);
    p = p ? String(p) : "1";

    return updateUrlParams(
        true,
        {
            isOutside: true,
            autoplay: false,
            aid,
            bvid,
            cid,
            p,
        },
        "https://player.bilibili.com/player.html"
    );
};
