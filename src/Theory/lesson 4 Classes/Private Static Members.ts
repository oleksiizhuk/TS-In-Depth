class Book26 {
    static #defaultTitle: string = 'NoName';
    static #getDefaultTitle(): string {
        return this.#defaultTitle;
    }

    getTDefaultTitle(): string {
        return Book26.#defaultTitle;
    }
}

const book26 = new Book26();
// Book26.#bookTitle; // ERROR
book26.getTDefaultTitle(); // OK

