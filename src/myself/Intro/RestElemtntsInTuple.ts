let startParams: [...string[], number];

startParams = [1];
startParams = ['Anna', 2];
startParams = ['Anna', 'Boris', 2];

// ===============
let startParams1: [number, ...string[], number];

startParams1 = [1, 2];
startParams1 = [1, 'Anna', 2];
startParams1 = [1, 'Anna', 'Boris', 2];

// ===============
let startParams2: [number, ...string[]];

startParams2 = [1];
startParams2 = [1, 'Anna',];
startParams2 = [1, 'Anna', 'Boris'];
