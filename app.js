// for(var i=0;i<500;i++){
//   console.log("Hello World!");  
// }

// for(var i=0;i<500;i++){
//   //INSERT A NEW USER INTO THE DATABASE
  
// }

//npm init -y


var faker = require('faker');

// console.log(faker.internet.email());
// console.log(faker.date.past());
function generateAddress(){
console.log(faker.address.streetAddress());
console.log(faker.address.city());
console.log(faker.address.state());
}
generateAddress();
generateAddress();
generateAddress();

//prema89