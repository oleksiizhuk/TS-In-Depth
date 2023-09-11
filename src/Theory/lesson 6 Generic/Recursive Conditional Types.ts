type ElementType<T> = T extends Array<infer U> ? ElementType<U> : T;

type T111 = ElementType<Array<number>>; // number
type T222 = ElementType<Array<Array<number>>>; // number
type T333 = ElementType<Array<Array<Array<number>>>>; // number
