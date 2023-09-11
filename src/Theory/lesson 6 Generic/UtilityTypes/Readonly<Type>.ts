// @ts-ignore
const id = Symbol('id');

interface Person {
    [id]: number;
    name: string;
    age: number;
    location: string;
}

// @ts-ignore
const p3: Readonly<Person> = {
    [id]: 1,
    name: 'Anna',
    age: 30,
    location: 'Kyiv',
};

// Error
// p3.name = 'Anna';
