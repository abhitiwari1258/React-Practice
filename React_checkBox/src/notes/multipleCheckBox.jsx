import { useState } from 'react'
import './App.css'

function App() {
  const [isHtml, setIsHtml] = useState(true)
  const [isCss, setIsCss] = useState(true)
  const [isJs, setIsJs] = useState(true)

  return (
    <>
    <h1>Multiple CheckBox independent</h1>
      <label htmlFor="html">
        <input 
        id='html' 
        type="checkbox" 
        checked={isHtml} 
        onChange={(e)=>setIsHtml(e.target.checked)} />
        Html
      </label>
      {isHtml && <p>html selected</p>}
      <br /><hr />

      <label htmlFor="css">
        <input 
        id='css' 
        type="checkbox" 
        checked={isCss} 
        onChange={(e)=>setIsCss(e.target.checked)} />
        Css
      </label>
      {isCss && <p>css selected</p>}
      <br /><hr />

      <label htmlFor="js">
        <input 
        id='js' 
        type="checkbox" 
        checked={isJs} 
        onChange={(e)=>setIsJs(e.target.checked)} />
        JS
      </label>
      {isJs && <p>js selected</p>}
    </>
  )
}

export default App
