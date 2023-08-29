interface Magazine {
    title: string;
}

interface IBook {
    author: string;
    title: string;
}

function isBook(obj: IBook | Magazine): obj is IBook {
    return (<IBook>obj).author !== undefined;
}


const test = (): IBook | Magazine => {
    return {author: 'author', title: 'title'};
};

