type FirstIfString1<T> = T extends [infer S, ...unknown[]]
    ? S extends string ? S : never: never;


type FirstIfString2<T> = T extends [string, ...unknown[]]
    ? T[0] : never;


type FirstIfString3<T> = T extends [infer S extends string, ...unknown[]]
    ? S : never;
