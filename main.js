//// CONST & LET
// let name = "John";

// name = "Jack";
// console.log(name)

// const person = {
  //  name: 'John',
   // age: 33
// }

//person.name = 'Bimbo';
//console.log(person)

// ARROW FUNCTIONS

//function salam() {
  //  console.log('Hello')
//}

//salam()

//const salam = (name, age) => {
  //  console.log(`Hello ${name}`)
//} 

//salam(' Mr Festus')

// FOREACH

//const fruits = ['Apples', 'Orange', 'Grapes'];

//fruits.forEach((fruit, index) => console.log(fruit))

// MAP

//const singlefruits = fruits.map((fruit) => fruit.slice (0, -1).toUpperCase())
//console.log(singlefruits)

// SPREAD

//const arr = [1,2,3];
//const arr2 = [...arr, 4]
//console.log(arr2)

//const person ={
  //  name: 'shola',
   // age: 36
//}

//const person1 ={
  //  ...person,
    //email: 'Abubakarabdulsalam54@gmail.com'
//}

//console.log(person1)

// DESTRUCTURING

{const profile ={
    name: 'John Doe',
    address: {
        street: '40 main str',
        city: 'Lagos'
    },
    hobbies: ['movies', 'music']
};

const {name, address, hobbies} = profile;
const {city, street} = profile.address;
console.log(street, city)}