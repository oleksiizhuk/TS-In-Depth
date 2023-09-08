import { Category } from './enums';
import { Callback, LibMgrCallback } from './interface';

export function purge<T>(inventory: T[]): T[] {
    return inventory;
}

export function getObjectProperty<TObject extends object, TKey extends keyof TObject>(object: TObject, prop: TKey): TObject[TKey] | string {
    return object[prop];
    // if( typeof object[prop] === '') {
    //
    // }
}

type OptionsFlags<Type> = {
    [property in keyof Type]: boolean;
};

type BookFlags = {
    isNew: () => boolean;
    hasReview: () => boolean;
};

type BookOptions = OptionsFlags<BookFlags>;


function getBookTitlesCategory(category: any): string[] {
    return ['Category'];
}

// lesson 09.01
export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
// function getBooksByCategory(category: Category, callback: Callback<string[]>) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesCategory(category);
            if(titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No Books Found');
            }
        } catch (err: any) {
            callback(err, null);
        }
    }, 2000);
}


export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if(err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

// lesson 09.02
export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const promise: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesCategory(category);
            if(titles.length > 0) {
                resolve( titles);
            } else {
                reject('No Books Found');
            }
        }, 2000);
    });
    return promise;
}


export async function logSearchResult(category: Category){
    const r: Awaited<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(category);
    console.log(r.length);
}
