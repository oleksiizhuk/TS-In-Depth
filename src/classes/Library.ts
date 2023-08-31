import { setInitial } from '../decorators';


export class Library {
    @setInitial(1)
        id: number = 0;
    name!: string;

}
