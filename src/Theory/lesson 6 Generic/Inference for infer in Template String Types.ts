

type someNum = '100' extends `${infer U extends number}` ? U : never; // '100'
type someBigInt = '100' extends `${infer U extends bigint}` ? U : never; // '100n'
type someBool = '100' extends `${infer U extends boolean}` ? U : never; // true


// parses out '1.0' bit String(Number('1.0')) is 1, different values

type JustNumber = '1.0' extends `${infer T extends number}` ? T : never; // number
