import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("hello");
    console.log(count)
  },[])

  function increment(){
    setCount(count+1)
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default App
