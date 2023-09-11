// делает все поля обезательными

interface PersonReq {
    age?: number;
    id: number;
    location?: string;
    name?: string;
}


const p1: PersonReq = { // OK
    id: 1,
    name: 'Anna'
};

// ERROR
// const p2: Required<PersonReq> = {
//     id: 1,
//     name: 'Anna'
// }
