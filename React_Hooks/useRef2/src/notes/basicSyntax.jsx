import { useState,useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef();
  const divRef = useRef();
  
  function handleInput(){
    // console.log(inputRef);
    // console.log(inputRef.current);
    
    inputRef.current.focus()
    divRef.current.style.backgroundColor = 'blue'
    divRef.current.style.borderRadius = '100%'

  }
  return (
    <>
      <div ref={divRef} className='bg-red-500 w-40 h-40'></div><br />
      <input ref={inputRef} type="text" placeholder='Enter Detail' /><br />
      <button onClick={handleInput}>Click</button>
    </>
  )
}

export default App
