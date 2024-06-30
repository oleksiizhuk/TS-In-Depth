class Engine {

    drive(){
        console.log('Work Engine');
    }
}

class Wheel {
    drive(){
        console.log('Work Wheel');
    }
}

class Freshener {

}

class Flat {
    freshener: Freshener;
    constructor(freshener: Freshener) {
        // aggregation
        this.freshener = freshener;
    }
}

class Car {
    engine: Engine;
    wheels: Wheel[] = [];
    freshener: Freshener;

    constructor(freshener: Freshener) {
        // aggregation
        this.freshener = freshener;
        // composition
        this.engine = new Engine();
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
    }

    // делегирование
    drive(){
        this.engine.drive();
        for(let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive();
        }
    }
}

const bmw = new Car(Freshener);
bmw.drive();
