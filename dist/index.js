// src/index.ts
/**
 * 2 つの数値を足し合わせる関数
 */
export function add(a, b) {
    return a + b;
}
/**
 * CLI 用のエントリ。`node dist/cli.js 1 2` で 3 を出力
 */
export async function cli(argv = process.argv.slice(2)) {
    const [x, y] = argv.map(Number);
    const result = add(x, y);
    // eslint-disable-next-line no-console
    console.log(result);
}
