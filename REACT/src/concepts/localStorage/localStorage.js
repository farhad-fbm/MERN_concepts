/**
 * 
 * localStoarge.setItem('key',value)
 * 
 * value must be SRING
 * if value is an array,
 * then use,  JSON.stringy([value])
 * 
 * 
 * 
 * const dataString = localStoarge.getItem('key');
 * const data= JSON.parse(dataString);
 * 
 */


export const getData_LS = () => {
  const storedDataString = localStorage.getItem('data');
  if (storedDataString) return JSON.parse(storedDataString);
  return []; // if nothing
}
export const setData_LS = id => {
  const data = getData_LS();
  data.push(id);
  localStorage.setItem('data', JSON.stringify(data))
}
export const remove_LS = (id) => {
  const data = getData_LS();
  // remove every this id
  const remaining = data.filter(idx => idx !== id);
  localStorage.setItem('data', JSON.stringify(remaining))
}