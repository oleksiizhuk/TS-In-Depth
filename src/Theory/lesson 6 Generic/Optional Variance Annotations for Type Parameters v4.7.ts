
// Need for optimize TS compilation
type Provider<out T> = () => T;
type Consumer<in T> = (x: T) => void;
type Processor<in out T> = (x: T) => T;
type Mapper<in T, out U> = (x: T) => U;


interface ProviderConsumer<out T> {
    p: () => T;
}

interface ProviderConsumer1<in T> {
    c: (x: T) => void;
}
