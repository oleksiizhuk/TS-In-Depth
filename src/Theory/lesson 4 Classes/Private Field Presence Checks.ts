
class Person11 {
    #name: string;
    constructor(name: string) {
        this.#name = name;
    }

    public equals(other: unknown) {
        return other && typeof other === 'object' && #name in other && this.#name === other.#name;
    }
}

const pp1 = new Person11('Anna');
const pp2 = new Person11('Boris');
const pp3 = new Person11('Anna');

const result1 = pp1.equals(pp2);
const result2 = pp1.equals(pp3);

console.log(result1); // false
console.log(result2); // true
