
interface B {
    getTitle?: () => string;
}
interface IOffer {
    book?: B;
}
const offer: IOffer = {

};

let title = offer?.book?.getTitle?.();
