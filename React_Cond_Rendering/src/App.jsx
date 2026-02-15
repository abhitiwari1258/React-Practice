import { useState } from 'react'
import './App.css'

function App() {
  // const [toggle,setToggle] = useState(true)

  const [statusOption,setStatusOption] = useState('loading')
  const status = {
    loading : <h1>Loading...</h1>,
    error : <h1>error---</h1>,
    success: <h1>Success...</h1>
  }

  return (
    <>

    {status[statusOption]}
    <button onClick={()=>{
      setStatusOption('loading')
    }}>Loading</button>
    <button onClick={()=>{
      setStatusOption('success')
    }}>success</button>
    <button onClick={()=>{
      setStatusOption('error')
    }}>error</button>

      {/* {toggle ?
          (<h1>Hello</h1>)
          :
          (<h2>Jhello</h2>)
      }

      <button onClick={()=>{
        setToggle(!toggle)
      }}>Toggle</button> */}
    </>
  )
}

export default App
