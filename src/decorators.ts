// 08.01
export function freeze(p: string) {
    return function (originalClass: Function, { kind }: ClassDecoratorContext): void{
        if(kind === 'class') {
            console.log(` Freezing the constructor ${p}`);
            Object.freeze(originalClass);
            Object.freeze(originalClass.prototype);
        }
    };
}

// 08.02
export function logger(originalClass: Function, { kind }: ClassDecoratorContext){
    if(kind === 'class') {
        const newConstructor: any = function (this: any) {
            console.log('Creating new instance');
            console.log(originalClass.name);
            this.age = 30;
        };
        newConstructor.prototype = Object.create(originalClass.prototype);
        newConstructor.prototype.printLibrarian = function (){
            console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
        };
        return newConstructor;
    }
}


// 08.03
export function writable(isWritable: boolean)  {
    return function (originalMethod: Function, { kind, addInitializer, name }: ClassMethodDecoratorContext) {
        if( kind === 'method' ) {
            addInitializer(function () {
                Object.defineProperty(this, name, { writable: isWritable });
            });
        }
    };
}

// 08.04
export function timeout(ms: number = 0) {
    return function (originalMethod: Function, { kind }: ClassMethodDecoratorContext) {
        if( kind === 'method' ) {
            return function replacedMethod(this: any, ...args: any[]) {
                // if(window.confirm(' Are you sure?')) {
                setTimeout(() => {
                    originalMethod.apply(this, args);
                }, ms);
                // }
            };
        }
    };
}


// 08.05
export function setInitial(inputValue: any) {
    return function (value: undefined, { kind }: ClassFieldDecoratorContext) {
        if(kind ==='field') {
            return function (initialValue: any) {
                return initialValue + inputValue;
            };
        }
    };
}

// 08.06
export function format<This, Return>(pref: string = 'Mr./Mrs.') {
    return function (target: ClassAccessorDecoratorTarget<This, Return>, { kind }: ClassAccessorDecoratorContext ) {
        if (kind === 'accessor') {
            return {
                get(this: This) {
                    return `${pref} ${target.get.call(this)}` as Return;
                },
                set(this: This, value: Return) {
                    target.set.call(this, value);
                }
            } as ClassAccessorDecoratorResult<This, Return>;
        }
    };
}


