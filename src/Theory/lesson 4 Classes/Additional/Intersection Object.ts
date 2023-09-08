interface Per {
    name: string;
    age: number;
}

interface Acc {
    code: string;
    bank: string;
}
function merge(person: Per, acc: Acc): Per & Acc {
    let result: Per & Acc;
    result = { ...person, ...acc };
    return result;
}
