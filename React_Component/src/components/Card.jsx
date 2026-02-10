import React from 'react'
import { useState } from 'react'
const Card = ({title,description}) => {
    const [count,setCount] = useState(0)
    const increment = ()=>{
        setCount(count+1);
    }
  return (
    <div className='card'>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <h1>{title}</h1>
      <p>{description}</p>
      
    </div>
  )
}

export default Card
