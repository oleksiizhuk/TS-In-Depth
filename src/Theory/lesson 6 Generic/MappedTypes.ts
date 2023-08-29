type OptionsFlags<Type> = {
    [property in keyof Type]: boolean;
};
