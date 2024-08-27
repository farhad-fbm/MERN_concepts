//  for_of array + string
const number = [1,4,6,8,3];
const nobab = 'siraj ud doula';

for(const num of number) console.log(num);
for(const char of nobab) console.log(char);

// for_in ---object
const glass = {
  name: 'glass',
  color: 'golden',
  price: '12',
  isCleaned: true
};
for(const prop in glass) console.log(prop, glass[prop]);