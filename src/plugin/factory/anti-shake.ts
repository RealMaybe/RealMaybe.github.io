/**
 * 防抖函数，限制函数的执行频率，只在特定时间段后执行最后一次触发的事件。
 * @param func 要执行的函数
 * @param delay 延迟的毫秒数
 * @returns 具有防抖功能的函数
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number = 500
): (...args: Parameters<T>) => void {
    let timerId: ReturnType<typeof setTimeout> | null = null;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
        // 清除之前的计时器
        if (timerId !== null) {
            clearTimeout(timerId);
        }

        // 设置新的计时器，经过指定时间后执行函数
        timerId = setTimeout(() => {
            func.apply(this, args); // 执行函数
            timerId = null; // 可选：重置 timerId
        }, delay);
    };
}

/**
 * 节流函数，限制函数的执行频率，在一定时间段内只执行一次。
 * @param func 要执行的函数
 * @param delay 延迟的毫秒数
 * @returns 具有节流功能的函数
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number = 1000
): (...args: Parameters<T>) => void {
    let lastExecuted = 0;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
        const now = Date.now();

        if (now - lastExecuted >= delay) {
            func.apply(this, args); // 执行函数
            lastExecuted = now;
        }
    };
}
