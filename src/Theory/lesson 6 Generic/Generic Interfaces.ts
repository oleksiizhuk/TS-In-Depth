import { Book } from '../../interface';

interface Inventory<T> {
    getNewestItem: () => T;
    addItem: (newItem: T) => void;
}

let bookInventory: Inventory<Book>;
// ...
// let allBooks: Array<Book> = bookInventory.getAllItem();
