const { map } = require("es-toolkit/compat");

const array = [1, 2, 3, 4, 5];

const double = (item) => item * 2;
const filter = (item) => item > 2;
const doubleMap = map(array, double);

console.log(doubleMap);
console.log(filterMap);
