type FieldDecorator = (
    value: undefined,
    context: ClassFieldDecoratorContext
) => (initialValue: unknown) => unknown | void;


// EXAMPLE interface of ClassFieldDecoratorContext
// interface ClassFieldDecoratorContext {
//     kind: 'field';
//     name: string | undefined;
//     static: boolean;
//     private: boolean;
//     access: {
//         get: () => unknown;
//         set: (value: unknown) => void;
//     };
//     addInitializer(initializer: () => void): void;
// }
