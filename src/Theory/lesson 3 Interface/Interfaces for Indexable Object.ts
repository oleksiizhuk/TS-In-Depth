
interface LetterMap {
    [key: string]: string;
    second: string;
    third?: string;
}

// @ts-ignore
const map: LetterMap = { second: 'B'};
map['first'] = 'A';
map['third'] = 'C';
//map['somethind'] = 400; // ERROR
