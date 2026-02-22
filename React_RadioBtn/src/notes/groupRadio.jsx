import { useState } from 'react'
import './App.css'

function App() {
  const [gender,setGender] = useState('')
  const genders = ['male','female','other']
  console.log(gender);
  
  
  return (
    <>
      {genders.map((item,idx)=>{
        return(
          <label key={idx} htmlFor={item}>
          {item}
            <input 
            id={item}
            type="radio" 
            name='gender'
            value={item}
            checked={gender === `${item}`}
            onChange={(e)=>setGender(e.target.value)}
            />
          </label>
        )
      })}
    </>
  )
}

export default App
