import { useState } from 'react'
import './App.css'

function App() {

  const [formData,setFormData] = useState({
    email:'',
    tc:false
  })

  function checkBoxHandling(e){
    // const key = e.target.name
    const {name,value,checked,type} = e.target;
    setFormData({
      ...formData,
      [name] : type === 'checkox' ? checked : value
    })
  }
  

  function submitHandler(e){
    e.preventDefault()
    console.log(formData);
    
  }

  return (
    <>
    <form onSubmit={submitHandler}>

    <input 
    type="email"
    name='email'
    placeholder='Enter email'
    value={formData.email}
    onChange={checkBoxHandling}
    />
      <label htmlFor="tc">
        <input 
          id="tc"
          name='tc'
          type="checkbox" 
          checked={formData.tc} 
          onChange={checkBoxHandling} 
        />
        terms and condition
      </label>
      <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
