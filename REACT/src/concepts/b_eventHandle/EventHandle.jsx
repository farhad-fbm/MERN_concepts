
export const EventHandle = () => {
  const handleClick = ()=>{
    alert('button clicked')
  }
  const handleParameter=(n)=>{
    alert('number is '+n);
  }
  return (
    <div style={{border: '2px solid yellow'}}>
      <p>Event Handler</p>
      <button onClick={handleClick}>click me</button>
      <button onClick={()=>handleParameter(5)}> passParam_1</button>
    </div>
  )
}
