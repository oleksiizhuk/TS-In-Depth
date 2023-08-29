import { Magazine } from '../interface';
import { Book } from '../app';
import { ShelfItem } from '../interface';

export default class Shelf<in out T extends ShelfItem>{
    private items: Array<T> = [];

    add(item: T): void{
        this.items.push(item);
    }

    getFirst(): T{
        return this.items[0];
    }
    find(title: string): T | undefined {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach((item) => console.log(item.title));
    }

}


export  class SpecificShelf<T, K>{
    private items: Array<T | K> = [];

    add(item: T | K): void{
        this.items.push(item);
    }

    getFirst(): T| K{
        return this.items[0];
    }
}
