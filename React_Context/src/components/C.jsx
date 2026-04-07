import React, { useContext } from 'react'
import { useMyContext } from '../MyContext'

const C = () => {
    const {setCount} = useMyContext()
  return (
    <div style={{backgroundColor:'yellow', padding:'10px'}}>
      C
      <br />
      <button onClick={()=>setCount(prev => prev + 1)}>Click</button>
    </div>
  )
}

export default C
