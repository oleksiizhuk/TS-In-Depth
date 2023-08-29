// делает все поля обезательными

interface Person {
    age?: number;
    id: number;
    location?: string;
    name?: string;
}


const p1: Person = { // OK
    id: 1,
    name: 'Anna'
};

