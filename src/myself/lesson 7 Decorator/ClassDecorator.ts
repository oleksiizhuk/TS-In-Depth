// @ts-ignore
type ClassDecorator = (
    originalClass: Function,
    context: ClassDecoratorContext
) => Function | void;

interface ClasDecoratorContext {
    kind: 'class';
    name: string | undefined;
    addInitializer(initializer: () => void): void;
}
