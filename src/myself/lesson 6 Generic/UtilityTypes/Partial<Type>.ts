const id = Symbol('id');

interface Person {
    [id]: number;
    name: string;
    age: number;
    location: string;
}

type PartialPerson = Partial<Person>;
interface PartialPerson {
    [id]?: number;
    name?: string;
    age?: number;
    location?: string;
}
