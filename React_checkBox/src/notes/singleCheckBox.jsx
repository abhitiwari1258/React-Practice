import { useState } from 'react'
import './App.css'

function App() {
  const [isChecked, setIsChecked] = useState(true)

  console.log(isChecked);
  
  function onChange(e){
    setIsChecked(e.target.checked)
  }
  return (
    <>
      <label htmlFor="cb">
        <input id='cb' type="checkbox" checked={isChecked} onChange={onChange} />
        Terms & conditions
      </label>
    </>
  )
}

export default App
