// @ts-ignore
const id = Symbol('id');

interface IPer {
    [id]: number;
    name: string;
    age: number;
    location: string;
}

const p: IPer = {
    [id]: 1,
    name: 'Anna',
    age: 16,
    location: 'Kyiv'
};

type K = keyof IPer;

function func(k: K) {
    console.log(p[k]);
}

func('name');
