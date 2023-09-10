

export interface Lib {
    name: string;
}

export class Library implements Lib {
    name: string = 'NoName';
}

// import { Library, type Lib } from './class'
