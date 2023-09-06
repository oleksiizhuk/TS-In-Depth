
class Book22 {
    constructor(private title: string) {
    }
}

class Journal22 {
    constructor(private title: string) {
    }
}

let book11 = new Book22('TypeScript');
let journal11 = new Journal22('TypeScript');

// book11 = journal11; // ERROR
