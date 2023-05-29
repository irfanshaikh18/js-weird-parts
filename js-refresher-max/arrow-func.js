const name = 'Irfan';
let age = 24;
const hasHobby = true;

age = 23;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return userName + ' ' + userAge + ' ' + userHasHobby;
}

// const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 3 + 3;

// console.log(add(1, 2));
// console.log(addOne(2));
console.log(addRandom());

const temp = summarizeUser(name, age, hasHobby);

console.log(temp);
