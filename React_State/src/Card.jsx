import React from 'react'
import { useState } from 'react'
const Card = () => {
    let [count, setCount] = useState(0)
    function increment(){
        // setCount(prev => prev+1) // functional update
        setCount(count+1)
        console.log(count);
        
    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        </>
    )
}

export default Card
