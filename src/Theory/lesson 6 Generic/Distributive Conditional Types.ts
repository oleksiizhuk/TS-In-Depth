type ToArray<Type> = Type extends any ? Type[] : never;
type strArrayOrNumberArr = ToArray<string | number>; // string[] | number[]


type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type strArrOrNumArr = ToArrayNonDist<string | number>; // (string | number)[]
