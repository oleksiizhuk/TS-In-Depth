// Prefix DEP

class DEPPerson {
    username: string;
    age: number;

    constructor(username: string, age: number) {
        this.username = username;
        this.age = age;
    }
}

interface UsersRepo {
    getUsers: () => DEPPerson[];
}

class UsersMongoDBRepo implements UsersRepo {

    getUsers(): DEPPerson[] {
        return [{ username: 'Oleksii from UsersMongoDBRepo', age: 28 }, {
            username: 'Taras from UsersMongoDBRepo',
            age: 23
        }];
    }
}


class UsersMySQLDBRepo implements UsersRepo {

    getUsers(): DEPPerson[] {
        return [{ username: 'Oleksii from UsersMySQLDBRepo', age: 28 }, {
            username: 'Taras from UsersMySQLDBRepo',
            age: 25
        }];
    }
}

class UsersService {
    usersRepo: UsersRepo;

    constructor(usersRepo: UsersRepo) {
        this.usersRepo = usersRepo;
    }

    filterUsersByAge(age: number) {
        const users = this.usersRepo.getUsers();
        console.log(users);
    }

}

const userService = new UsersService(new UsersMongoDBRepo());
userService.filterUsersByAge(23);
