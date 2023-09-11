
type typ1T1 = string | number | (() => void);
type T1 = Exclude<typ1T1, Function>; // string | number

type typ1T2 = string | number | (() => void);
type T2 = Extract<typ1T2, Function>; // () => void

type typ1T3 = string | number | undefined | null;
type T3 = NonNullable<typ1T3>; // string | number
