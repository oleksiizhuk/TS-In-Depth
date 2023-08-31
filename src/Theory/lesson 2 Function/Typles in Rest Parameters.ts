
function getReadingBookList(...args: [string, number, boolean]) {
    console.log(args[0], args[1], args[2]);
}

function getReadingBookList1(args0: string, args1: number, args2: boolean) {
    console.log(args0, args1, args2);
}

const args: [string, number, boolean] = ['Anna', 10, true];

getReadingBookList(...args);


