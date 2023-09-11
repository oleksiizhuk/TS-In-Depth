type PromiseNumberType = Promise<number>; // Promise<number>
type NumberType1 = Awaited<PromiseNumberType>; // number
type NumberType2 = Awaited<Promise<PromiseNumberType>>; // number
type BooleanOrNumber = Awaited<boolean | Promise<number>>; // boolean | number
