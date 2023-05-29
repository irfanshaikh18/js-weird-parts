const person = {
  name: 'Irfan',
  age: 24,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();

for (let item in person) {
  console.log(item);
}
