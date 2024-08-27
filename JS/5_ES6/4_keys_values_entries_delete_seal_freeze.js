const glass = {
  name:'glass',
  color: 'golden',
  price:'12',
  isCleaned:true
};

const keys = Object.keys(glass)
const values = Object.values(glass);
console.log(keys);
console.log(values);

const entries = Object.entries(glass);
console.log(entries); //AoA







// delete  a property
delete glass.isCleaned;
const{price, ...glass2}=glass;

// freeze----every property & values freezed--anything cant change
Object.freeze(glass);


//seal----value modify possible
Object.seal(glass); 