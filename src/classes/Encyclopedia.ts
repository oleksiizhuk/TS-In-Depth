import { ReferenceItem } from './ReferenceItem';


export class Encyclopedia extends ReferenceItem{
    private _copies: number = 0;
    constructor(title: string, year: number, id: number) {
        super(title, year, id);
    }

    get copies(): number {
        // eslint-disable-next-line no-underscore-dangle
        return this._copies;
    }

    // @ts-ignore
    set copies() {

    }

    // @ts-ignore
    override printItem() {
        // @ts-ignore
        super.printItem();
    }
}
