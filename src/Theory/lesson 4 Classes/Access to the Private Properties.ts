class A {
    #x!: number;
    static friendA: {
        getX(obj: A): number;
        setX(obj: A, value: number): void;
    };

    static initialize() {
        this.friendA = {
            getX(obj: A) {
                return obj.#x;
            },
            setX(obj: A, value: number) {
                obj.#x = value;
            }
        };
    }
}

class B {
    constructor(a: A) {
        A.initialize(); // Initialize the friendA object
        A.friendA.setX(a, 100);
        const x = A.friendA.getX(a);
        console.log(x);
    }
}

// @ts-ignore
const obj = new B(new A());
