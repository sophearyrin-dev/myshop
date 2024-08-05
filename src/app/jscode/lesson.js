const { log } = require("console");

//want to get only positive number
const numbers = [1,2,3,-4,-5];

const positiveNumbers = numbers.filter(num => num>0);

console.log(positiveNumbers); //[1,2,3]

// ---- using find
const positiveNumber = numbers.find(num => num>0);

console.log(positiveNumber); //1

const nums = [2,3,99999,-4,-5];

console.log(nums.find(num => num>0)); //2

const person = [
    {name: "Jenny", age:23},
    {name: "bopha", age:56},
    {nmae: "Kanha", age:45},
    {name: "Jenny", age:67},
];

console.log("Find the person name Jenny");

const jenny = person.find(p => p.name === 'Jenny');

console.log(jenny); //{ name: 'Jenny', age: 23 }