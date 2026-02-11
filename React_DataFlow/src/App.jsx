import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Layout from './components/Layout'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState("abhishek")
  const [msg,setMsg] = useState('')
  
  function sendMsg(msg){
    setMsg(msg)
  }

   console.log("Child data Receive : ", msg);

  return (
    <>
      <Header data={data}/>
      <Layout data={data} msg={sendMsg}/>
      <Footer data={data}/>
    </>
  )
}

export default App
