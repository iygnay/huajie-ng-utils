
/**
 * 延迟指定的时间
 *
 * @export
 * @param {number} ms
 * @returns
 */
export function dely(ms: number) {
    return new Promise<void>((resolveFn, rejectFn) => {
        setTimeout(() => {
            resolveFn();
        }, ms);
    });
}