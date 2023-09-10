/* eslint-disable no-redeclare */
// function getTitles(author: string): string[];
// function getTitles(available: boolean): string[];
// function getTitles(bookProperty: any): string[] {
//     let foundTitles: string[] = [];
//     if (typeof bookProperty === 'string') {
//     // Получить книги по автору и добавить в foundTitles
//     } else if (typeof bookProperty === 'boolean') {
//     // Получить книги по доступности и добавить в foundTitles
//     }
//     return foundTitles;
// }
//
// getTitles('');
// getTitles(false);
// // @ts-ignore
// getTitles(1);


import { Category } from '../../enums';
import { Book } from '../../interface';

function getAllBooks(): Book[] {
    const books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.CSS, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.HTML, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.TypeScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[]{
    const books = getAllBooks();
    if( args.length === 1) {
        const [arg] = args;
        if(typeof arg === 'string') {
            return books.filter(({ author}) => author === arg).map(({title}) => title);
        } else if(typeof arg === 'boolean') {
            return books.filter(({ available}) => available === arg).map(({title}) => title);
        }
    } else if(args.length === 2) {
        const [id, available] = args;
        if(typeof id === 'number' && typeof available ==='boolean') {
            return books.filter(book => book.id === id && book.available === available).map(({title}) => title);
        }
    }
    return [];
}

const getTitlesResult1 = getTitles('1');
const getTitlesResult2 = getTitles(true);
const getTitlesResult3 = getTitles(1, true);
