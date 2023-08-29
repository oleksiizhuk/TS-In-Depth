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


