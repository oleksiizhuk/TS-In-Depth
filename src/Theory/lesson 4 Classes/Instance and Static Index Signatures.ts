
class Library {
    constructor(public name: string) {
    }
    [propName: string]: string | number | undefined;

    static [propName: string]: string | number | undefined;
}

let lib = new Library('Kiev National Lib');

// @ts-ignore
let name = lib.name;

lib['address'] = 'Kiev, ...';

Library['defaultName'] = 'Noname';
