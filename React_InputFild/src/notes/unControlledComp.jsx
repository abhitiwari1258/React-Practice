import React from 'react'
import { useRef, useState } from 'react'
const unControlledComp = () => {
    const inputRef = useRef('')
    function submit(){
        console.log(inputRef.current.value);
    }
  return (
    <div>
      <input 
      type="text"
      placeholder='Enter Your Name'
      ref={inputRef}
      />
      <br />
      <br />
      <button onClick={submit}>submit</button>
      <hr />
      <h1>{inputRef ?.current ?.value}</h1>
      <hr />
    </div>
  )
}

export default unControlledComp
