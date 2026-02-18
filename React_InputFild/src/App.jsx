import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [data,setDate] = useState({
    name:'',
    email:''
  })

  console.log(data);
  
// ther is one problem that we create multiple handle to handle each function like input email and remove handler

  // function nameHandler(e){
  //   setDate({
  //     ...data,
  //     name:e.target.value
  //   })

    // or

    // setData(()=>{
    //   return({
    //     ...prev,
    //     name:e.target.value
    //   })
    // })
  // }

  // function emailHandler(e){
  //   setDate({
  //     ...data,
  //     email:e.target.value
  //   })
  // }

  function inputHandlers(e){
    // destructure it
    // console.log(e.target.name, e.target.value);

    const {name,value} = e.target;
    // setDate({...data,[name] : value})
    // or
    setDate(prev => ({...prev, [name] : value}))
  }

  function remove(){
    setDate({
      ...data,
      name:"",
      email:""
    })
  }

  return (
    <>
      <h1>Handling multiple inputs</h1>
      <input 
      type="text"
      name='name'
      value={data.name}
      onChange={inputHandlers}
      placeholder='Enter name'
      />
      <br /><br />
      <input 
      type="text"
      name='email'
      value={data.email}
      onChange={inputHandlers}
      placeholder='Enter email'
      />
      <br /><br />
      <button onClick={remove}>Clear</button>
      <br />
      <hr />
      <p>{data.name}</p>
      <p>{data.email}</p>
    </>
  )
}

export default App
