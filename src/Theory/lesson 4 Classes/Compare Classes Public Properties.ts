
class Book21 {
    constructor(public title: string) {
    }
}

class Journal21 {
    constructor(public title: string) {
    }
}

let book = new Book21('TypeScript');
let journal = new Journal21('TypeScript');

book = journal; // ok
