// map return a array;
// array.map(call back funtion);


function db(n){ return n*2;}
const numbers = [4,5,6,2,8,9];

const result = numbers.map(db);
const result2 = numbers.map(n=> n*4);
console.log(result);
