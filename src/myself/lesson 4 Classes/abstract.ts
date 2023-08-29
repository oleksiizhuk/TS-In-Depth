abstract class ReferenceItem3 {
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
        console.log(`Department: ${ReferenceItem3.department}`);
        console.log(`Department: ${ReferenceItem3.department}`);
        console.log(`Department: ${Object.getPrototypeOf(this).constructor.department}`);

    }

    abstract printCitation(): void;
}

class Encyclopedia1 extends ReferenceItem2 {
    constructor(title: string, year: number, id: number) {
        super(title, year, id);
    }

    override printItem() {
        super.printItem();
    }
    printCitation(){
        console.log('title - year');
    }
}

const objectEncyclopedia1 = new Encyclopedia1( 'Learn Typescript', 2023, 1);

console.log(objectEncyclopedia1);

