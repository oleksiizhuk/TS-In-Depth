// object для простих обьектов
// Object когда создаешь обьект через new Object()
function create(o: object | null): void {}
create({ prop: 0 }); // OK
create(null); // OK
