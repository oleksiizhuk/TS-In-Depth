

class LibraryResource {
    catalogNumber!: number;
}

class Book10 {
    title!: string;
}

interface Encyclopedia10 extends LibraryResource, Book10 {
    volume: number;
}

let encBook: Encyclopedia10 = {
    catalogNumber: 1234,
    title: 'The Book of Everything',
    volume: 1
};
