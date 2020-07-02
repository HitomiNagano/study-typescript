export {};

let number: number[] = [1, 2, 3];

// Array: interface（オリジナルな型を定義するとき使える）
// <>: ジェネリクス、型を抽象化できる
let number2: Array<number> = [1, 2, 3];

let strings: string[] = ["typescript", "javascript", "coffeescript"];
let strings2: Array<string> = ["typescript", "javascript", "coffeescript"];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

let hairetsu: (string | number | boolean)[] = [1, false, "Japan"];
