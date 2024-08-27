// 1____obj---------property name based
const actor = {
  name: 'Anonno',
  age: 30,
  phone: '1234556'
}
// use property name as a variable
const { phone, age:boyos } = actor;
console.log(phone);
console.log(boyos);

// delete
const {phone:ph,...actor_modify}=actor;




// 2____array----index based
const nums = [1,2];
const [x,y]=nums;

const number = [1,2,3,4,5,6,7];
const[m,n,...others]=number;
console.log(others);

