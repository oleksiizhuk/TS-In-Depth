

interface Overloaded {
    (a: string): string;
    (a: number, b: number): number;
}

// @ts-ignore
const x: Overloaded = (param1, param2?) => {
    if(typeof param1 === 'string') {
        return param1;
    } else if(typeof param2 === 'number') {
        return param1 + param2;
    }
};

// console.log(x('123')) // '123'
// console.log(x(1, 2)) // 3
