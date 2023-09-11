type Book6 = {
    title: string;
    author: string;
};

type Getters<Type> = {
    [K in keyof Type as `get${Capitalize<string & K>}`]: () => Type[K]
};

type LazyBook = Getters<Book6>;

// type LazyBook = {
//     getTitle: () => string;
//     getAuthor: () => string;
// }
