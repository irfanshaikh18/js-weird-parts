var name = 'Irfan';
var age = 24;
var hasHobby = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return userName + ' ' + userAge + ' ' + userHasHobby;
}

var temp = summarizeUser(name, age, hasHobby);

console.log(temp);
