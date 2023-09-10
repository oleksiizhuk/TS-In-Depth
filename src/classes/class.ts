class ReferenceItem {
    #id: number;
    constructor(public title: string, protected year: number, id: number) {
        this.#id = id;
        console.log('Creating a new ReferenceItem...');
    }

    printItem() {
        console.log('printItem');
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


class Encyclopedia2 extends ReferenceItem {
    constructor(title: string, year: number, id: number) {
        super(title, year, id);
    }

    override printItem() {
        super.printItem();
    }
}

const objectEncyclopedia = new Encyclopedia2( 'Learn Typescript', 2023, 1);

console.log(objectEncyclopedia);


export { ReferenceItem }
