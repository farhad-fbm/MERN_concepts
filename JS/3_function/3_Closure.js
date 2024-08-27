function stopWatch(){
  let count=0;
  return function(){
    return count++;
  }
}
const w1= stopWatch();
const w2= stopWatch();

console.log(w1());
console.log(w1());
console.log(w1());
console.log(w1());

console.log(w2());
console.log(w2());
console.log(w1());



// every instance of outer scope has own data