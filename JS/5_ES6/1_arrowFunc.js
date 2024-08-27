// function declaration
function add(a,b){
  return a+b;
}
// function expression    / annonimous function
const add2 = function(a,b){
  return a+b;
}

// arrow function--------ES6
const add3 = (a,b) => a+b;
const add4 = (a,b) => {return a+b;}

console.log(add3(3,4));