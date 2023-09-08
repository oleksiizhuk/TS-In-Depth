
interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}


interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export {
    Magazine,
    ShelfItem,
    LibMgrCallback,
    Callback
};


