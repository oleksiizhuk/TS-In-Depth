
let a: bigint = BigInt(100);
let b: bigint = 100n;

let c: number = 100;

// c = a; // error
// b = c; // error
b = a + BigInt(c); // 200n
typeof b; // bigint
