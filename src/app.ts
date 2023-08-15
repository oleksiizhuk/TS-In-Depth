showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

enum Category {
    JS,
    CSS,
    HTMLS,
    TypeScript,
}

type Book = {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
};
function getAllBooks(): Book[] {
    const books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JS, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.CSS, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.HTMLS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.TypeScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}
function logFirstAvailable(books: Book[]): void {
    const numberOfBooks: number = books.length;
    const title = books.find(book => book.available === true)?.title;
    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First avalible: ${title}`);
}
console.log(getAllBooks());
logFirstAvailable(getAllBooks());


function getBookTitleByCategory(category: Category): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}

function logBookTitles(title: string[]): void{
    title.forEach(title => console.log('Title = ', title));
}

logBookTitles(getBookTitleByCategory(Category.TypeScript));
logBookTitles(getBookTitleByCategory(Category.JS));

// 6
function getBookAuthorByIndex(index: number): [title: string, author:string] {
    const books = getAllBooks();
    const { title, author } = books[index] ?? {} as Book;
    return [title, author];
}

console.log(getBookAuthorByIndex(1));

// 7
function calcTotalPages(): bigint {
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    const result = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    },0n);

    return result;
}

console.log(calcTotalPages());
