import { useEffect, useState } from 'react'
import './App.css'
import Alpha from './components/Alpha'
import Form from './components/Form'
import User from './components/User'

function App() {
  const [toggle,setToggle] = useState(false)


  return (
    <>
    {/* {toggle && <Alpha/> } */}
    {/* {toggle && <Form/> } */}
    {toggle && <User/>}
     <button onClick={()=> setToggle(!toggle)}>toggle</button>
    </>
  )
}

export default App
