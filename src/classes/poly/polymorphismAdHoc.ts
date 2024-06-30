class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
    // add(a: string, b: string, c: string ) : string {
    //     return a + b + c;
    // }
}
const calc = new Calculator();

calc.add(1, 2);
// calc.add("1", '2', "3");


// don't work
