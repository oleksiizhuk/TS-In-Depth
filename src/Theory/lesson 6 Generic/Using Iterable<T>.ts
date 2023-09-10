
function toArray<T>(xs: Iterable<T>): T[]{
    return [...xs];
}

// Built-in Iterable types

// Array, Map, Set, String, Int32Array, Uint32Array


toArray(new Set([1,2,3])); // [1, 2, 3]
toArray('123'); // ['1', '2', '3']
