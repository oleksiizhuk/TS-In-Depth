// @ts-nocheck

// безопастный тип any,
// разрешены только две операции

let x: unknown;
x === 5; // ok
x !== 5; // ok


x.f; // ERROR
x[5]; // ERROR
x(); // ERROR
new x(); // ERROR
