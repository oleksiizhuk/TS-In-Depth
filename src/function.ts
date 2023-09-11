import { Category } from './enums';
import { Book, Callback, LibMgrCallback } from './interface';

export function createCustomer(name: string, id: number): string {
    return `${name} ${id}`;
}

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}
export function getAllBooks1(): readonly Book[] {
    const books:  readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.CSS, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.HTML, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.TypeScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}
export function getAllBooks(): Book[] {
    const books:  Book[] = [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.CSS, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.HTML, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.TypeScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

export function logFirstAvailable(books: Book[]): void {
    const numberOfBooks: number = books.length;
    const title = books.find(book => book.available === true)?.title;
    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First avalible: ${title}`);
}

export function getBookTitleByCategory(category: Category): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}

export function logBookTitles(title: string[]): void{
    title.forEach(title => console.log('Title = ', title));
}


export function getBookAuthorByIndex(index: number): [title: string, author:string] {
    const books = getAllBooks();
    const { title, author } = books[index] ?? {} as Book;
    return [title, author];
}


export function calcTotalPages(): bigint {
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

export function getBookById (id: Book['id']): Book | undefined {
    const books = getAllBooks();
    return books.find((book) => book.id === id);
}


export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getBookProperty<T extends keyof Book>(book: Book, prop: T): Book[T] | string {
    if(typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    } else {
        return book[prop];
    }
}
// 07.03
export function getObjectProperty<TObject extends object, TKey extends keyof TObject>(object: TObject, prop: TKey): TObject[TKey] | string  {
    if(typeof object[prop] === 'function') {
        return (object[prop] as Function).name;
    } else {
        return object[prop];
    }
}

type OptionsFlags<Type> = {
    [property in keyof Type]: boolean;
};

type BookFlags = {
    isNew: () => boolean;
    hasReview: () => boolean;
};

type BookOptions = OptionsFlags<BookFlags>;


function getBookTitlesCategory(category: any): string[] {
    return ['Category'];
}

// lesson 09.01
export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
// function getBooksByCategory(category: Category, callback: Callback<string[]>) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesCategory(category);
            if(titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No Books Found');
            }
        } catch (err: any) {
            callback(err, null);
        }
    }, 2000);
}


export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if(err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

// lesson 09.02
export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const promise: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesCategory(category);
            if(titles.length > 0) {
                resolve( titles);
            } else {
                reject('No Books Found');
            }
        }, 2000);
    });
    return promise;
}


export async function logSearchResult(category: Category){
    const r: Awaited<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(category);
    console.log(r.length);
}
