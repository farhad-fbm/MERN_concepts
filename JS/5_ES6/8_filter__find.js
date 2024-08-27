// filter
// return array based on condition fulfillment

const numbers = [1,2,3,4,6,8];
const result = numbers.filter(p=> p>2);
console.log(result);


// filter
// return fisrt mathch---------otherwise -> undefined
const selected = numbers.find(p => p > 2);
console.log(selected);
