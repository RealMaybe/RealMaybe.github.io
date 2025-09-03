export type createPlayerLinkOptions = {
    aid: string | number;
    bvid: string;
    cid: string | number;
    p?: string | number;
};

export interface VideoItem {
    title: string;
    link: createPlayerLinkOptions;
}
