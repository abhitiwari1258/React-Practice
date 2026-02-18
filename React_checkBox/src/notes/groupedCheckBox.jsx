import { useState } from 'react'
import './App.css'

function App() {
  // const [isHtml, setIsHtml] = useState(true)
  // const [isCss, setIsCss] = useState(true)
  // const [isJs, setIsJs] = useState(true)

  const [lang,setLang] = useState({
    html:false,
    css:false,
    js:false
  })

  function checkBoxHandling(e){
    const key = e.target.name
    setLang({
      ...lang,
      [key] : e.target.checked
    })
  }

  return (
    <>
      <label htmlFor="html">
        <input 
        id='html' 
        name='html'
        type="checkbox" 
        checked={lang.html} 
        onChange={checkBoxHandling} />
        Html
      </label>
      {lang.html && <p>html selected</p>}
      <br /><hr />

      <label htmlFor="css">
        <input 
        id='css' 
        name='css'
        type="checkbox" 
        checked={lang.css} 
        onChange={checkBoxHandling} />
        Css
      </label>
      {lang.css && <p>css selected</p>}
      <br /><hr />

      <label htmlFor="js">
        <input 
        id='js' 
        name='js'
        type="checkbox" 
        checked={lang.js} 
        onChange={checkBoxHandling} />
        JS
      </label>
      {lang.js && <p>js selected</p>}
    </>
  )
}

export default App
