class Book25 {
    #title: string;
    constructor(title: string) {
        this.#title = title;
    }

    get #bookTitle(): string {
        return this.#title;
    }

    printBook(): void {
        console.log(`Book ${this.#bookTitle}`);
    }
}

const book25 = new Book25('book');
// book25.#bookTitle; // ERROR
book25.printBook(); // OK
