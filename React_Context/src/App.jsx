import { useContext, useState } from 'react'
import './App.css'
import A from './components/A'
import { useMyContext } from './MyContext'

function App() {
  const {count} = useMyContext()
  return (
    <div style={{backgroundColor:'red', padding:'10px'}}>
     App
     <h1>{count}</h1>
     <A/>
    </div>
  )
}

export default App
