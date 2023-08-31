
type ClassMethodDecorator = (
    originalMethod: Function,
    context: ClassMethodDecoratorContext
) => Function | void;


// interface ClassMethodDecoratorContext {
//     kind: 'method';
//     name: string | undefined;
//     static: boolean;
//     private: boolean;
//     access: { get: () => unknown };
//     addInitializer(initializer: () => void): void;
// }
