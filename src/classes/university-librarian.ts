import { format, freeze, logger, writable } from '../decorators';

// @freeze('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements Librarian {
    // @format()
    accessor: string = 'name';
    name!: string;
    email!: string;
    department!: string;

    constructor(name: string) {
        this.name = name;
    }

    assistCustomer(customerName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${bookTitle}`);
    }


    @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

