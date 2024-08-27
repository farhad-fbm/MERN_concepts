import { useState } from "react";


export const UseState_basic = () => {
  const [count, setCountFunc] = useState(0); //destructure
  const handleCount = () => setCountFunc(count + 1);
  return (
    <div style={{ border: '2px solid yellow' }}>
      <p>useSate Demo</p>
      <p>Counter: {count}
        <button onClick={handleCount}>add</button>
      </p>
    </div>
  )
}

//useState return an array= [value, setValue_Function];

//   function useState(count) {
//     function setCount(val){
//       count=val;
//     }
//     return [count,setCount];
//   }