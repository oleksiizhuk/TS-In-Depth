// @ts-ignore
let myTuple: [number, string] = [25, 'string'];

let [first, second] = myTuple; // number, string

myTuple[0] = 100; // []
myTuple[1] = 'string'; // []

// @ts-ignore
myTuple[0] = true; // ERROR
// @ts-ignore
myTuple = [24, 'string', 100]; // ERROR
