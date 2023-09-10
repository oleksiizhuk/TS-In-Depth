import { Magazine } from '../../interface';

function logAndReturn<T>(thing: T): T {
    console.log(thing);
    return thing;
}

let logAndReturnString = logAndReturn<string>;


let someString1 = logAndReturnString('Log this'); // OK
// let someString2 = logAndReturnString(123); // ERROR
