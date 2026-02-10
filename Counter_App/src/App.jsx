import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }

  function reset(){
    setCount(0)
  }

  return (
    <>
     <h1>Counter App</h1>
     <h2>Count : {count}</h2>
     <div className='btn'>
      <Buttons title="➕ Increment" func={increment} />
      <Buttons title="➖ Decrement" func={decrement} />
      <Buttons title="🔄️Reset" func={reset} />
     </div>
    </>
  )
}

function Buttons({title,func}){
  return(
    <>
    <button onClick={func}>{title}</button>
    </>
  )
}

export default App
