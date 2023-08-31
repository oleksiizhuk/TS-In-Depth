
interface Colors {
    [key: symbol]: number;
}
const colors: Colors = {};
const red = Symbol('red');
const green = Symbol('green');
const blue = Symbol('blue');

colors[red] = 255;
const redValue = colors[red]; // type number
// colors[blue] = 'blue'; // ERROR

