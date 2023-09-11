import { Book, Author } from './interface';
import { getBooksByCategoryPromise, createCustomer } from './function';

export type fn = (p1: string, p2: number, p3: boolean) => symbol;

export type Param1<T> = T extends (p1: infer R, p: number, p3: boolean) => symbol ? R : never;
export type Param2<T> = T extends (p1: string, p: infer R, p3: boolean) => symbol ? R : never;
export type Param3<T> = T extends (p1: string, p: number, p3: infer R) => symbol ? R : never;
export type Param4<T> = T extends (p1: infer U, p: infer S, p3: infer R) => symbol ? [U, S, R] : never;

type s = Param1<fn>; // string
type n = Param2<fn>; // number
type b = Param3<fn>; // boolean
type T = Param4<fn>; // [string, number, boolean]

export type CopyProps<T extends object> = {
    [Prop in keyof T]: T[Prop];
};

export type RequiredProps<T extends object> = {
    [Prop in keyof T]: {} extends Pick<T, Prop> ? never : Prop
}[keyof T];

export type OptionalProps<T extends object> = {
    [Prop in keyof T]: {} extends Pick<T, Prop> ? Prop : never
}[keyof T];


type AuthorRequiredProps = NonNullable<RequiredProps<Book>>;

type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

// 07.04
type RemoveProps <T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop]
};

type BookRequiredPropsType = RemoveProps<Book, 'title'>;
type BookOptionalPropsType = RemoveProps<Book, keyof BookOptionalProps>;

export type UnPromisify<T> = T extends Promise<infer U> ? U : never;

type fnString = UnPromisify<ReturnType<typeof getBooksByCategoryPromise>>;

export type BookRequiredFieldsType = Required<Omit<Book, 'test'>>& {pages: number};
export type UpdateBook = Partial<Book>;

export type AuthorWithoutEmail = Omit<Author, 'email'>;

export type createFunctionType = typeof createCustomer;
