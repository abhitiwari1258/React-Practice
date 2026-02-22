import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [gender,setGender] = useState('')
  console.log(gender);
  
  return (
    <>
    <label htmlFor="male">
      Male:
      <input 
      id='male'
      type="radio" 
      name='gender'
      value={'male'}
      checked={gender === 'male'}
      onChange={(e)=>setGender(e.target.value)}
      />
      </label>
      <br />

      <label htmlFor="female">
        Female:
      <input 
      id='female'
      type="radio" 
      name='gender'
      value={'female'}
      checked={gender === 'female'}
      onChange={(e)=>setGender(e.target.value)}
      />
      </label><br />

      <label htmlFor="other">
        Other:
      <input 
      id='other'
      type="radio" 
      name='gender'
      value={'other'}
      checked={gender === 'other'}
      onChange={(e)=>setGender(e.target.value)}
      />
      </label>
    </>
  )
}

export default App
