/**
 * 音乐作品
 */
export interface Musical {
    link: createPlayerLinkOptions;
    videoTitle: string;
    songTitle: string;
}

/**
 * 音乐作品列表
 */
export type MusicalList = Array<Musical>;

/**
 * 小说作品
 */
export interface Novel {
    title: string;
    author: string;
    status: string;
    introduction: string;
    img: string;
    link: string;
    toAppLink: string;
}

/**
 * 小说作品列表
 */
export type NovelList = Array<Novel>;
