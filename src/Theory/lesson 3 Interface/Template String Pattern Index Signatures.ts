
interface DataOptions {
    [key: `data-${string}`]: unknown;
}

let dataOptions: DataOptions = {
    'data-x': 100, // ok
    // 'unknow-property': true // ERROR
};

interface Data {
    [key: string | symbol]: any;
}
