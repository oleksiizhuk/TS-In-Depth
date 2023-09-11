

type U1<T extends string> = Uppercase<T>;
type U1_1 = U1<'TypeScript'>; // TYPESCRIPT

type U2<T extends string> = Lowercase<T>;
type U2_2 = U2<'TypeScript'>; // typescript

type U3<T extends string> = Capitalize<T>;
type U3_3 = U3<'typeScript'>; // TypeScript

type U4<T extends string> = Uncapitalize<T>;
type U4_4 = U4<'TYPEScript'>; // tYPEScript

type U5 = 'type';
type U6 = 'script';

type U7<U1 extends string, U2 extends string>= `${Capitalize<U1>} ${Capitalize<U2>}`;

type U8 = U7<U5, U6>; // TypeScript
