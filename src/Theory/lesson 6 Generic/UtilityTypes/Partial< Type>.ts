// @ts-ignore
const id = Symbol('id');
interface Person {
    [id]: number;
    name: string;
    age: number;
    location: string;
}

// ERROR
// const p1: Person = {
//     name: 'Anna '
// };

type PartialPerson = Partial<Person>;
// equivalent to
interface IPartialPerson {
    [id]?: number;
    name?: string;
    age?: number;
    location?: string;
}

const p2: Partial<Person> = {
    name: 'Boris'
};
