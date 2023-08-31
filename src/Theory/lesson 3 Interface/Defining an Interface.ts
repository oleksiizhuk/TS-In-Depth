// @ts-ignore
interface Book {
    id: number; // mandatory property
    title: string; // mandatory property
    author?: string; // optional property
    get pages(): number; // getter
    set pages(value: number | string); // setter
    markDamaged: (reason: string) => void; // property
    print?(): void; // optional method
    (): number; // call this object w/ () as function
    readonly pubDate: string; // readonly property
    type: `${string}Type`; // template string type
    [propName: string]: any; // additional extra properties
}
