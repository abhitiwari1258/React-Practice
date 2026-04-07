import { useState } from 'react'
import './App.css'
import useMyStore from './store'
import Navbar from './components/Navbar'

function App() {
  const state = useMyStore()
  

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
