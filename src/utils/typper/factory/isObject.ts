/**
 * @description 判断是否为对象
 * @param val 需要判断的值
 * @returns 是否为对象，是返回 true，否则返回 false
 */
export const isObject = (val: unknown): val is Record<string | number | symbol, unknown> =>
    typeof val === "object" && val !== null;
