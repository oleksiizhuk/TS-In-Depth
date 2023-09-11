class BookConstructorParameters {
    constructor(public title: string, public author: string) {}
}

abstract class User {
    protected constructor(public name: string, public age: number) {}
}

// [title: string, author: string]
type constructorParams = ConstructorParameters<typeof BookConstructorParameters>;
// @ts-ignore
type abstractConstructorParams = ConstructorParameters<typeof User>;
