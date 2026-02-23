import { useState,useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [randomNumber,setRandomNumber] = useState(0)

  const renderCountRef = useRef(0);
  

  function genNumber(){
    const num = Math.floor((Math.random()*100)+1)
    setRandomNumber(num)
  }

  useEffect(()=>{
    console.log("rerender trigger");
    renderCountRef.current += 1
  })
  return (
    <>
      <h1>{randomNumber}</h1>
      <h1>Rerender count : {renderCountRef.current}</h1>
      <button onClick={genNumber}>Generate Number</button>
    </>
  )
}

export default App
