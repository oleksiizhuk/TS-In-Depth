export class Person {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeting() {
        console.log(`Hi, I'm human and my name is ${this.firstName} ${this.lastName}`);
    }

    get getFullName(): string {
        return `Name is - ${this.firstName} and last name is - ${this.lastName}`;
    }

    get firstNameProp(): string {
        return this.firstName;
    }

    set firstNameProp(value: string) {
        this.firstName = value;
    }

    get lastNameProp(): string {
        return this.lastName;
    }

    set lastNameProp(value: string) {
        this.lastName = value;
    }

    get ageProp(): number {
        return this.age;
    }

    set ageProp(value: number) {
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
        this.num = num;
        this.snils = snils;
    }

    // @ts-ignore
    public greeting() {
        console.log(`Hi, I'm an Employee and my name is ${this.firstNameProp} ${this.lastNameProp}`);
    }
}

class Developer extends Employee {
    private level: string;
    private language: string;

    constructor(firstName: string, lastName: string, age: number, inn: number, num: number, snils: number, level: string, language: string) {
        super(firstName, lastName, age, inn, num, snils);
        this.level = level;
        this.language = language;
    }

    // @ts-ignore
    public greeting() {
        console.log(`Hi, I'm a Developer and my name is ${this.firstNameProp} ${this.lastNameProp}`);
    }
}

const develop = new Developer('Oleksii', 'Developer', 15, 15, 15, 15, 'Senior', 'JavaScript');
const employee = new Employee('Oleksii', 'Employee', 15, 15, 15, 15);
const person = new Person('Oleksii', 'Person', 15);

const personsList = [develop, employee, person];

function massGreeting(persons: Person[]) {
    for (const person of persons) {
        person.greeting();
    }
}

massGreeting(personsList);
