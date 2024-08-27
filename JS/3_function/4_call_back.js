// which function takes a function as a parameter

function greeting(f,name){
  f(name);
}
function handler(name){
  console.log('Hello',name);
}
greeting(handler,'farhad');

// greeting is a callBack function