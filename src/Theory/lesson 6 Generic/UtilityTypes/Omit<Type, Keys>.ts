// выбрасывает поля


type BookOmit = {
    title: string;
    author: string;
    copies: number;
    year: number;
};

type BookWithTitleAndAuthor1 = Omit<BookOmit, 'copies' | 'year'>;
// SAME
type BookWithTitleAndAuthor2 = {
    title: string;
    author: string;
};

