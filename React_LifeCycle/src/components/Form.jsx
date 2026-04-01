import React, { useEffect, useState } from 'react'

const Form = () => {
    const [name,setName] = useState(localStorage.getItem('name') || '');
    console.log(name);

    useEffect(()=>{
        return ()=>{
            localStorage.clear()
        }
    },[])
    
  return (
    <div>

      <input value={name} 
       type="text"
       onChange={(e)=> {
        setName(e.target.value);
        localStorage.setItem('name',e.target.value)
       }}
       placeholder='Enter Name'
       />

    </div>
  )
}

export default Form
