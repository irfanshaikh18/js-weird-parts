/// SPREAD OPERATOR
const hobbies = ['Sports', 'Cooking', 'Programming'];

// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies, 'Travelling'];
copiedArray.push('something');

// console.log(hobbies);
// console.log(copiedArray);

/// REST OPERATOR
const toArray = (...args) => {
  return args;
}

console.log(toArray(1, 2, 3, 4, 5));

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(23, 4, 1, 3));

/**
 * The REST Operator looks just like spread Operator.
 * it's the place where you use it that defines how you call it
 * 
 * Are you using it to pull elements or properties out of arrays or objects?
 * Then it would be the spread operator.
 * 
 * Are you using it to merge multiple arguments into an array and you use it 
 * in the argument list of a function. Then it's the rest operator.
 * 
 * It's the same operator by the syntax or from a syntax perspective, 
 * the name differs depending on the place where you use it.
 */
