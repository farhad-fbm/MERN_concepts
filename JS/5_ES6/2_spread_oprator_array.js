console.log(Math.max(6, 23, 45, 1, 89, 23));//okk

const numbers =[3,45,6,2,67,2,6,3];
console.log(Math.max(numbers)); //NaN

console.log(...numbers);
console.log(Math.max(...numbers)); //okk







// array & object---Non Primitive. -----copy with address
const a = [3,4,5];
const b=a; //copy with address
const c = [...a]; //only copy
const d = [...a,'new']; //copy & push('new')

b.push('b');
c.push('c');
console.log(a);


