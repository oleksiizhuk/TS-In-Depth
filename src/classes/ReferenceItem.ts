import { timeout } from '../decorators';

export class ReferenceItem {
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
    @timeout(5000)
    printTitle (): void {
        console.log(`${this.title} was published in year`, this.year);
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(`Department: ${Object.getPrototypeOf(this).constructor.department}`);
    }
}
