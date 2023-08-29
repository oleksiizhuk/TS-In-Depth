// создает новый тип на базе старого типа

type BookPick = {
    title: string;
    author: string;
    copies: string;
    year: string;
};

type BookWithTitleAndAuthor = Pick<BookPick, 'title'>;
