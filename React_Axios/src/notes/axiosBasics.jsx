import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const config = {
    url:'/users',
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{
      Accept: 'application/json',
      Authorization: 'Bearer njeiwnj'
    },
    timeout: '100',
    params:{
      name:'miejwn',
      age:22
    }
  }

  const fetchData = async ()=>{
    const responce = await axios.get(config.url)
    console.log(responce);
    
  }

  return (
    <>
      <h1 className='bg-amber-400'>hi</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App
