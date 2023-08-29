let someValue: any = 'This is a string';
let strLength: number = (<string>someValue).length;

let someValue1: any = 'This is a string';
let strLength1: number = (someValue as string).length;
