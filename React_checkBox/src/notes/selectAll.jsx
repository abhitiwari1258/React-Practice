import { useState } from 'react'
import './App.css'

function App() {

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

  const isAllChecked = Object.values(lang).every(Boolean)
  console.log(isAllChecked);
  
  function selectAllhandle(e){
    setLang({
      html:e.target.checked,
      css:e.target.checked,
      js:e.target.checked
    })
  }

  return (
    <>

    {/* selectAll */}
      <label htmlFor="sa">
        <input 
        id='sa' 
        // name='html'
        type="checkbox" 
        checked={isAllChecked} 
        onChange={selectAllhandle}
         />
        selectAll
      </label>


      {Object.keys(lang).map((item)=>{
      return(
          <label htmlFor={item}>
            <input 
            id={item} 
            name={item}
            type="checkbox" 
            checked={lang[item]} 
            onChange={checkBoxHandling} />
            {item}
          </label>
        )
      })}

      {/* <label htmlFor="html">
        <input 
        id='html' 
        name='html'
        type="checkbox" 
        checked={lang.html} 
        onChange={checkBoxHandling} />
        Html
      </label> */}
      {lang.html && <p>html selected</p>}
      {lang.css && <p>css selected</p>}
      {lang.js && <p>js selected</p>}
      <br /><hr />

      {/* <label htmlFor="css">
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
      {lang.js && <p>js selected</p>} */}
    </>
  )
}

export default App
