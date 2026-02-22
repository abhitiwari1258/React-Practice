import { useState } from 'react'
import './App.css'

function App() {
const [data,setData] = useState('')
const [dataCity,setDataCity] = useState('')
console.log(data);
console.log(dataCity);


const datas = {
  India:["a","b","c"],
  china:["d","e","f"],
  russia:["g","h","i"]
}

  return (
    <>
      <select value={data} onChange={(e)=>{
        setData(e.target.value);
        setDataCity('')
      }} >

        <option value="">--Select Country-- </option>
        {Object.keys(datas).map((item)=>{
          return(
            <option key={item} value={item}>{item.toUpperCase()}</option>
          )
        })}
      </select>

      {data && (
        <select value={dataCity} onChange={(e)=>setDataCity(e.target.value)}>
          <option value="">-- Select City --</option>
          {datas[data].map((item)=>{
            return(
              <option key={item} value={item}>{item}</option>
            )
          })}
        </select>
      )}
      <p>Country: {data} , City: {dataCity}</p>
    </>
  )
}

export default App
