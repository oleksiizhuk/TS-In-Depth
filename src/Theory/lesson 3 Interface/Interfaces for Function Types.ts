
function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`;
}

createCustomerID.description = 'some description';

interface StringGenerator {
    description: string;
    (chars: string, num: number): string;
}

let IdGenerator: StringGenerator;
IdGenerator = createCustomerID;
