// уберает readonly modification

// @ts-ignore
type Writable1<Type> = {
    -readonly [K in keyof Type]: Type[K]
};

type A2 = Writable1<{
    readonly a: string;
    readonly b: number;
}>;

// number[]
type B2 = Writable1<readonly number[]>;

// [string, boolean]
type K2 = Writable<readonly [string, boolean]>;
