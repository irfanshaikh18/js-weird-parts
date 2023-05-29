const person = {
  name: 'Irfan',
  age: 24,
  hobbies: ['Sports', 'Cooking', 'Programming']
};

const printName = ({ name: something, age }) => {
  console.log(something, age);
}

printName(person);

const cars = ['Ferrari', 'Lamborghini', 'Range Rover'];
const [horse, buffalo] = cars;

console.log(horse, buffalo);
