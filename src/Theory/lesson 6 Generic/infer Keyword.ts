
type UnboxArray<T> = T extends Array<infer R> ? R : T;
type unboxArray<T> = UnboxArray<number[]>; // number
type AnythingElse<T> = UnboxArray<string>; // 'string'
