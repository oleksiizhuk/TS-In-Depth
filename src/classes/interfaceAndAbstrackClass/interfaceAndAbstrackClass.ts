// Prefix INT

interface Reader {
    read(url: string): void;
}

interface Writer {
    write(data: string): void;
}

class FileClient implements Reader, Writer {
    read(url: string) {
    }

    write(data: string) {
    }
}


class INTUser {
    username: string;
    age: number;

    constructor(username: string, age: number) {
        this.username = username;
        this.age = age;
    }
}

class Human {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

interface Repository<T> {
    create: (obj: T) => T;
    get: (obj: T) => T;
    delete: (id: string) => void;
    update: (obj: T) => T;
}

class UserRepo implements Repository<User> {
    create(user: User): User {
        return user;
    }

    get(user: User): User {
        return user;
    }

    delete(id: string): void {
        return;
    }

    update(user: User): User {
        return user;
    }
}

class CarRepo implements Repository<Human> {
    create(human: Human): Human {
        return human;
    }

    get(human: Human): Human {
        return human;
    }

    delete(id: string): void {
        return;
    }

    update(human: Human): Human {
        return human ;
    }
}

