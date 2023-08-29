type Book = {
    title: string;
    author: string;
};

type Getters<Type> = {
    [K in keyof Type ]
};
