
type Person4 = { age: number; name: string; alive: boolean};
type I1 = Person4['age']; // number
type I2 = Person4['age' | 'name']; // number | string
type I3 = Person4['age'];

const People = [
    { name: 'Anna', age: 15 },
    { name: 'Boris', age: 23 },
    { name: 'Christina', age: 38 },
];

type Person5 = typeof People[number];
