/**
 * Effect:
 * 1....Rendering Code
 * 2....Event handlers
 * eventHandlers contain ''side effect''(they change state)
 * Effect Example with ChatRooom::
 * a...sending a message a event(happen by user clicking)
 * b...setting up a server connection is an EFFECT(no matter which interaction caused the component to appear)
 * 
 * 
 * side effect:
 * side effect performed when need to reach outside the scope of our current react component
 * Side effects are operations that can affect other components or the outside world, such as data fetching, subscriptions, or manually changing the DOM.
 * 
 * 
 * ...making a request to api for load data
 * ...using unpredioctable timing function...setTimeout(),setInterval()
 * 
 * 
 *   useEffect(  ()=>{}, []  )
 */

import { useEffect, useState } from "react"





export const UseEffect = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resss=>resss.json())
    .then(daataa=>setUsers(daataa))
  },[])

  return (
    <div style={{ border: '2px solid yellow' }}>
        <p>useEffect demo</p>
        <p>users : {users.length}</p>
    </div>
  )
}
