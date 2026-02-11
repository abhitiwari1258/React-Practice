import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  // let [count, setCount] = useState(0)
  // function increment(){
  //   setCount(count+1)  
  // }

  let arr = [1,2,3,4,5]

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={increment}>Increment</button> */}
      {arr.map((item)=>{
            return(
                <Card key={item}/>
            )
        })}
      <Card/>
    </>
  )
}

export default App
