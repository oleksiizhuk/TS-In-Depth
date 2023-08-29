let myTuple2: [id: number, name?: string, ...rest: any[]];

myTuple2 = [1, '', true];
myTuple2 = [2, ''];
myTuple2 = [3];
myTuple2 = [3, '', true, '...rest', '...rest', '...rest'];
