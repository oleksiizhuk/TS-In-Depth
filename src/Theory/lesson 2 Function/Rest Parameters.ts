function getReadingBookList5(name: string, ...booksIds: number[]){
    return booksIds;
}

let books = getReadingBookList5('Anna');
let books1 = getReadingBookList5('Anna', 2, 5);
let books2 = getReadingBookList5('Anna', 2, 5, 12, 32);
