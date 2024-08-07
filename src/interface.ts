import { Category } from './enums';


// export type Book = {
//     id: number;
//     title: string;
//     category: Category;
//     author: string;
//     available: boolean;
//     test?: string;
// };

interface Book {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    test?: string;
    markDamaged?: Function;
}

interface BookRequiredFields {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    pages: number;
    markDamaged: (reason: string) => void;
}
interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}


interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}
interface Author {
    title: string;
    email: string;
}

export {
    Book,
    Magazine,
    ShelfItem,
    LibMgrCallback,
    Callback,
    BookRequiredFields,
    Author,
};


