const name = 'Irfan';
let age = 24;
const hasHobby = true;

age = 23;

function summarizeUser(userName, userAge, userHasHobby) {
  return userName + ' ' + userAge + ' ' + userHasHobby;
}

const temp = summarizeUser(name, age, hasHobby);

console.log(temp);
