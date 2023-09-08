a &&= b; // assign b to a if is truthy
a ||= b; // assign b to a if is falsy
a ??= b; // assign b to a if is nullish (null or undefined)

let titles: string[];
(titles ??= []).push('TypeScript');
