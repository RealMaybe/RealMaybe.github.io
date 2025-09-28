// 上一次获取到的 script 地址
let lastSrcs: Array<string> | undefined;

// 用于匹配 HTML 中 script 标签 src 属性的正则表达式 (更精确版本)
// 匹配 <script ... src="..." ...> 或 <script ... src='...' ...>
// 要求引号匹配，并更健壮地处理属性和空格
const scriptReg: RegExp = /<script\s+[^>]*?\bsrc\s*=\s*["'](?<src>[^"']*)["'][^>]*>/gi;

/**
 * 获取最新页面中的 script 链接
 * @returns 解析后的 script 链接数组
 */
async function extractNewScripts(): Promise<Array<string>> {
    // 发送请求获取带时间戳的页面 HTML 内容
    const html: string = await fetch("/?_timestamp=" + Date.now()).then((res: Response) =>
        res.text()
    );

    // 重置正则表达式的 lastIndex，确保从头开始匹配
    scriptReg.lastIndex = 0;

    const result: Array<string> = [];
    let match: RegExpExecArray | null;

    // 循环执行正则匹配，查找所有符合条件的 script 标签
    while ((match = scriptReg.exec(html)) !== null) {
        // 安全地访问命名捕获组 'src'
        const src: string | undefined = match.groups?.src;
        // 可以选择性地添加 trim() 来去除可能的首尾空白
        // if (src !== undefined && src.trim() !== "") result.push(src.trim());
        if (src !== undefined && src !== "") result.push(src);
    }

    return result;
}

/**
 * 检查页面 script 是否需要更新
 * @returns 是否需要更新
 */
async function needUpdate(): Promise<boolean> {
    // 获取最新的 script 链接
    const newSrcs: Array<string> = await extractNewScripts();

    // 如果是第一次调用（lastSrcs 未初始化），则保存当前链接并返回 false
    if (!lastSrcs) return ((lastSrcs = newSrcs), false);

    // 如果 script 数量不同，则需要更新
    if (lastSrcs.length !== newSrcs.length) return true;

    // 如果数量相同，则逐个比较链接是否一致
    for (let i: number = 0; i < lastSrcs.length; i++) {
        if (lastSrcs[i] !== newSrcs[i]) return true; // 一旦发现不同，立即返回 true
    }

    // 如果所有链接都相同，则不需要更新
    return false;
}

/**
 * 自动刷新页面
 * @param time 检查间隔时间（毫秒）
 */
export function autoRefresh(time: number): void {
    setTimeout(async () => {
        const willUpdate: boolean = await needUpdate();

        if (willUpdate) {
            // 注意：confirm 会阻塞线程，在某些现代浏览器或框架中可能不推荐直接使用
            const result: boolean = confirm("检测到页面有更新，是否刷新？");
            if (result) location.reload();
        }

        // 递归调用以实现周期性检查
        autoRefresh(time);
    }, time);
}
