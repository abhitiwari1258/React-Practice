import React, { useEffect,useState } from 'react'

const Alpha = () => {
    const [count,setCount] = useState(0)

    // useEffect(()=>{
    //     console.log("reRender hua");
    // },[count])
    
    useEffect(()=>{
        console.log("mounting.. !");
        
        return ()=>{
            console.log("Unmounting ..!");
        }
    },[])
  return (
    <div>
      <h1>Alpha {count} </h1>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Alpha
