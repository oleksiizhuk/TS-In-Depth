
// T extends U ? X : Y

type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : T extends boolean ?
    'boolean' : T extends undefined ? 'undefined' : T extends Function ? 'function' : 'object';

type T00 = TypeName<string>; // string
type T11 = TypeName<'a'>; // string
type T22 = TypeName<true>; // boolean
type T33 = TypeName<() => void>; // function
type T44 = TypeName<string[]>; // object
