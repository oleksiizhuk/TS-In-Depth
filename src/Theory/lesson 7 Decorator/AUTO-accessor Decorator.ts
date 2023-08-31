

type ClassAutoAccessorDecorator = (
    value: {
        get: () => unknown;
        set: ( value: unknown) => void;
    }
) => { get?: () => unknown; set?: (value: unknown) => void;
    init?: (initialValue: unknown) => unknown;
} | void;



// Example interface of ClassAutoAccessorDecoratorContext
// interface ClassAutoAccessorDecoratorContext {
//     kind: 'accessor';
//     name: string | undefined;
//     static: boolean;
// }
