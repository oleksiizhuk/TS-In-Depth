// создает новый тип на базе старого типа

type Book = {
    title: string;
    author: string;
    copies: string;
    year: string;
};

type BookWithTitleAndAututhor = Pick<Book, 'title'>;
