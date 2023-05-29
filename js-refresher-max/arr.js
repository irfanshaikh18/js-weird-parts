const hobbies = ['Sports', 'Cooking', 'Traveling'];

// for (let i = 0; i < hobbies.length; i++) {
//   console.log(hobbies[i]);
// }

// console.log('*******')

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

const items = [
  {name: 'Bike', price: 23},
  {name: 'Car', price: 53},
  {name: 'Plane', price: 423},
  {name: 'Train', price: 233},
  {name: 'Cycle', price: 2},
  {name: 'Ship', price: 342},
  {name: 'Tank', price: 73},
]

// filter
const filteredItems = items.filter(item => item.price < 100);
// console.log(filteredItems);
// console.log(items);

// map
const itemNames = items.map(item => item.price);
// console.log(itemNames);
// console.log(items);

// find
const findCar = items.find(item => item.name === 'Car');
// console.log(findCar);
// console.log(items);

// forEach
// items.forEach(item => console.log(item.name));

// some
const hasInexpensiveItems = items.some(item => item.price < 100);
// console.log(hasInexpensiveItems);

// every
const hasInexpensiveItemsAll = items.every(item => item.price < 100);
// console.log(hasInexpensiveItemsAll);

// reduce
const total = items.reduce((currentTotal, item) => {
  return currentTotal + item.price;
}, 0)

// console.log(total);

const num = [1, 2, 3, 4, 5];
// includes
const isThreePresent = num.includes(3);
// console.log(isThreePresent);

