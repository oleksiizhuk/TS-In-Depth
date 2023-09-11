
type Writable<Type> = {
    -readonly [property in keyof Type]: Type[property]
};

type ReadonlyType<Type >= {
    +readonly [property in keyof Type]: Type[property]
};

type Optional<Type >= {
    [property in keyof Type]+?: Type[property]
};

type RequiredType<Type >= {
    [property in keyof Type]-?: Type[property]
};
