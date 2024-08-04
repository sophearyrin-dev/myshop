const { log } = require("console");

//want to get only positive number
const numbers = [1,2,3,-4,-5];

const positiveNumbers = numbers.filter(num => num>0);

console.log(positiveNumbers); //[1,2,3]