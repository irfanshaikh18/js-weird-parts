// LERNT ABOUT Reference and Primtive Types and Shallow Copy and Deep Copy

let num1 = 23;

const num2 = num1;

num1 = 43;

console.log(num2); //23

// ARRAYS AND OBJECTS ARE REFERENCE TYPES
const todos = ['Lean JavaScript', 'Build Projects', 'Prepare for Interviews'];
// todos array is assign to a const but we can manipulate the content of the array
todos.push('give interview');
console.log(todos);
// as address of the array is assigned to the const we are not changing the address by manipulating array content

/** NOT A GOOD WAY OF COPYING OBJECTS AS OBJECTS ARE REFERENCE TYPES*/
const person = {
  name: 'Irfan',
  age: 24,
  hobby: [
    'programming',
    'cooking',
    'sports'
  ]
};

const secondPerson = person;
secondPerson.hobby.push('something'); // it will this to the original obj also

console.log(person);

person.hobby.pop('something'); // it will remove this from 2nd obj also

console.log(secondPerson);

console.log('*******************************')

/** RECOMMONDED WAY OF COPYING OBJECTS AS OBJECTS USING SPREAD OPERATOR */
const player = {
  name: 'Virat Kohli',
  jNo: 18,
  playsFor: ['India', 'RCB']
};

const secondPlayer = {...player}; // shallow copy as i can manipulate playsFor from secondPlayer
// Object.assign({}, player) is same as {...player}

// secondPlayer.playsFor.push('Delhi');
// spread syntext can not be used to deep copy

// for deepy copy we have to do  JSON serialization
// const secondPlayer = JSON.parse(JSON.stringify(player));
// alternative and recommanded deep copying approach is using third party lib like lodash's _.cloneDeep() func

secondPlayer.jNo = 65; // Won't change the jersy no in og player

player.name = 'VK'; // Won't change the name in seondPlayer

console.log(player);
console.log(secondPlayer);
