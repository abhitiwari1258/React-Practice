import React from 'react'
import { useRef, useState } from 'react'
const controlledComp = () => {
    const [inputVal,setInputVal] = useState('')
  return (
    <div>
        <h1>Controlled Component</h1>
      <input 
      type="text"
      placeholder='Enter Your Name'
      value={inputVal}  // connect to state
      onChange={(e)=>{
        setInputVal(e.target.value)
      }}
      />
      <br />
      <br />
      <button onClick={()=>setInputVal('')}>Clear</button>
      <hr />
      <h1>{inputVal}</h1>
      <hr />
    </div>
  )
}

export default controlledComp
