import { Magazine } from '../../interface';

function logAndReturn<T>(thing: T): T {
    console.log(thing);
    return thing;
}

let someString1: string = logAndReturn<string>('Log this');
// or
let someString2: string = logAndReturn('Log this');


let newMag: Magazine = { title: 'Web Dev', publisher: '' };
let someMag: Magazine = logAndReturn<Magazine>(newMag);

