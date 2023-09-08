class Book30 {
    kind = 'book'; title: string = ''; author: string = '';
}
class Magazine30 {
    kind = 'magazine'; title: string = '';
}

function getObject(): Book30 | Magazine30 {
    if(Math.random() > 0.5) return new Book30();
    else return new Magazine30();
}

const obje = getObject();
console.log(obje.title); // ok
// console.log(obje.author); // ERROR
console.log((obje as Book30).author); // ok
