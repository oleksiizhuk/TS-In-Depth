type OptionsFlags<Type> = {
    [property in keyof Type]: boolean;
};


type BookFlags = {
    isNew: () => boolean;
    hasReview: () => boolean;
};

type BookOptions = OptionsFlags<BookFlags>;

const bookOptions: BookOptions = {
    isNew: false,
    hasReview: false
};
