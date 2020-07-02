export {};

// This function never return.
function error(message: string): never {
  throw new Error(message);
}

try {
  error("test!");
} catch (error) {
  console.log(error);
}

let foo: void = undefined;
// never型には値という概念がない
// データを代入することが出来ない
// let bar: never = undefined;
// ↓ 利用シーンなし
let bar: never = error("only me!");
