import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const [data,setData] = useState(10)

  useEffect(()=>{
    console.log("Mounting");
  },[])

  useEffect(()=>{
    console.log("Updation: Data Change");
  },[data])

  return (
    <>
     <h1>App Component</h1>
     <h2>{count}</h2>
     <button onClick={()=> setCount(count+1)}>Click</button>

     <h2>{data}</h2>
     <button onClick={()=> setData(data-1)}>Click</button>
    </>
  )
}

export default App