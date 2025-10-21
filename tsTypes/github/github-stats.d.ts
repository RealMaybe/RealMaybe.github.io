export type Endpoint =
    | "" // 默认用户统计
    | "top-langs" // 语言使用排行
    | "pin" // 置顶仓库
    | "streak" // 连续贡献天数
    | "contrib"; // 贡献图（GitHub 贡献折线图）

export type BaseParams = {
    readonly username: string;
    readonly theme: string;
    readonly hide_border: boolean;
};

export type StatsParams = Partial<BaseParams> & {
    [key: string]: string | number | boolean;
};
