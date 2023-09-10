type RemoveEmailProperty<Type> = {
    [property in keyof Type as Exclude<property, 'email'>]: Type[property]
};

interface Person {
    name: string;
    email: string;
}

type EmailLessPerson = RemoveEmailProperty<Person>;
