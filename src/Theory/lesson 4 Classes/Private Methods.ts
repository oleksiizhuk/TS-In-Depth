class Book24 {
    #title: string;
    constructor(title: string) {
        this.#title = title;
    }

    #printTitle(): void {
        console.log(this.#title);
    }

    printBook(): void {
        console.log(`Book ${this.#printTitle()}`);
    }
}

const book24 = new Book24('book');
// book24.#printTitle(); // ERROR
book24.printBook(); // OK
