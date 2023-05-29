// class Human {
//   constructor() {
//     this.gender = 'Male';
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//    constructor() {
//     super();
//     this.name = 'Irfan';
//    }

//    printMyName() {
//     console.log(this.name);
//    }
// }

// const person = new Person();

// person.printMyName();
// person.printGender();

/// NEXT GEN JAVASCRIPT SYNTEX
class Human {
  gender = 'Male';

  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = 'Irfan';

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();

person.printMyName();
person.printGender();
