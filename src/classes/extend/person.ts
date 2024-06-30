export class Person {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(): string {
        return `Name is - ${this.firstName} and last name is - ${this.lastName}`;
    }

    get getFirstName(): string {
        return this.firstName;
    }

    set setFirstName(value: string) {
        this.firstName = value;
    }

    get getLastName(): string {
        return this.lastName;
    }

    set setLastName(value: string) {
        this.lastName = value;
    }

    get getAge(): number {
        return this.age;
    }

    set setAge(value: number) {
        this.age = value;
    }
}

class Employee extends Person {
    private inn: number;
    private num: number;
    private snils: number;

    constructor(firstName: string, lastName: string, age: number, inn: number, num: number, snils: number) {
        super(firstName, lastName, age);
        this.inn = inn;
        // eslint-disable-next-line id-blacklist
        this.num = num;
        this.snils = snils;
    }
}

const employee = new Employee('Oleksii', 'ZHuk', 15, 15, 15, 15);
console.log(employee);

class Developer extends Employee {
    private level: string;
    private language: string;

    constructor(firstName: string, lastName: string, age: number, inn: number, num: number, snils: number, level: string, language: string) {
        super(firstName, lastName, age, inn, num, snils);
        this.level = level;
        this.language = language;
    }

    get getLevel(): string {
        return this.level;
    }

    set setLevel(value: string) {
        this.level = value;
    }

    get getLanguage(): string {
        return this.language;
    }

    set setLanguage(value: string) {
        this.language = value;
    }
}

const developer = new Developer('Oleksii', 'ZHuk', 15, 15, 15, 15, 'Senior', 'JavaScript');
console.log(developer.fullName);
