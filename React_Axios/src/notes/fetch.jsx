import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fetchData = async ()=>{
    // using fetch method
    // const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(responce);
    // const data = await responce.json()
    // console.log(data);

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((resp) => resp.json())
    // .then((data)=>console.log(data))

    // using axios
    
    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data);
    
  }

  return (
    <>
      <h1 className='bg-amber-400'>hi</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App
