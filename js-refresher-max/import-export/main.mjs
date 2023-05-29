// import person from './person.mjs';
import prs from './person.mjs';

import { add, subtract, multiply, divide } from './calc.mjs';
// import * as operations from './calc.mjs';

import { aboutThisCalc as about } from './calc.mjs';

const print = (props) => {
  console.log(props);
}

print(prs);

console.log('*************************');

// console.log(operations);
// console.log(operations.add(2, 3));

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

console.log(about);
