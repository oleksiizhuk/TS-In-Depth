interface Persen {

}
interface Librarian extends Persen {
    assistCustomer: (customerName: string, bookTitle: string) => void;
}

class UniversityLibrarian implements Librarian {

    name!: string;
    email!: string;
    department!: string;

    constructor(name: string) {
        this.name = name;
    }


    assistCustomer(customerName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${bookTitle}`);
    }

}

const favoriteLibrarian: Librarian = new UniversityLibrarian('Anna');

favoriteLibrarian.assistCustomer('Anna', 'Learn Typescript');
