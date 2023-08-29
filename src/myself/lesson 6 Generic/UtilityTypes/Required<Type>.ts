// делает все поля обезательными

interface Person1 {
    age?: number;
    id: number;
    location?: string;
    name?: string;
}


const p1: Person1 = { // OK
    id: 1,
    name: 'Anna'
};

