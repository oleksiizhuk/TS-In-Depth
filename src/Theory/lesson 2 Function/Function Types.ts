
function createPubMsg(title: string, year: number): string {
    return `${title} was published in ${year}`;
}

let publishFunction: (title: string, year: number) => string;
publishFunction = createPubMsg;

let message: string = publishFunction('Mastering Typescript', 2019);
