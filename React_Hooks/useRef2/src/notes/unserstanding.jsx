import { useState,useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const countRef = useRef(0);
  
  
  function handleIncrement(){
    // setCount(count + 1);
    countRef.current += 1
    console.log(countRef.current);
  }

  useEffect(()=>{
    console.log("rerender hua  hai ");
  })
  return (
    <>
    <h1>{count}</h1>
    <h1>countRef value : {countRef.current}</h1>
      <button onClick={handleIncrement}>Incrrement</button>
    </>
  )
}

export default App
