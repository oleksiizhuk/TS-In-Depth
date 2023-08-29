import { Category } from './enums';
import { getObjectProperty, purge } from './function';
import { Shelf } from './classes';
import { Magazine } from './interface';
import { SpecificShelf } from './classes/shelf';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

export type Book = {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    test?: string
};
function getAllBooks(): Book[] {
    const books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.CSS, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.HTML, author: 'Lea Verou', available: true },
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
// logBookTitles(getBookTitleByCategory(Category.JS));

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



// lesson number 5
class ReferenceItem {
    #id: number;
    constructor(public title: string, private year: number, id: number) {
        this.#id = id;
        console.log('Creating a new ReferenceItem...');
    }

    getID(): number {
        return this.#id;
    }


    private _publisher!: string;

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher ) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = newPublisher;
    }

    static department: string = 'Classical dep.';
    printTitle (): void {
        console.log(`${this.title} was published in year`, this.year);
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(`Department: ${Object.getPrototypeOf(this).constructor.department}`);

    }
}

const ref = new ReferenceItem( 'Learn Typescript', 2023, 1);

console.log(ref.printTitle());

console.log(ref.getID());


const test1 = ['1', 2].reduce((acc, item) => {
    return { ...acc, item };
}, {});

console.log(test1);


// lesson number 07.01
const inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
const r = purge(inventory);
const r1 = purge([1,2,3]);

const purgeNumbers = purge<number>;
purgeNumbers([1,2,3]);


// Task 07.02

const bookShelf = new Shelf<Book>();

inventory.forEach((book) => bookShelf.add(book));
console.log(bookShelf.getFirst().title);


const magazine: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

// const magazineShelf = new Shelf<Magazine>();
// magazine.forEach((mag) => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);


const magazineShelf = new SpecificShelf<Magazine, Book>();
magazine.forEach((mag) => magazineShelf.add(mag));
inventory.forEach((mag) => magazineShelf.add(mag));
console.log(magazineShelf.getFirst().title);


getObjectProperty(magazine[0], 'title');
getObjectProperty(magazine[0], 'publisher');



