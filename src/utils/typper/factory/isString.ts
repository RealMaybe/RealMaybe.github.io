/**
 * @description 判断是否为字符串。
 * @param val 需要判断的值。
 * @returns 如果是字符串，则返回 true，否则返回 false。
 */
export const isString = (val: unknown): val is string => typeof val === "string";