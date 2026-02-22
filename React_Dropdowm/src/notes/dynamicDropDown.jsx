import { useState } from 'react'
import './App.css'

function App() {
const [payment,setPayment] = useState('')
console.log(payment);

const paymentsOption = ['upi','cod','card','bitcoin']

  return (
    <>
      <select value={payment} onChange={(e)=>setPayment(e.target.value)}>

        <option value="">--Select your payment Option-- </option>
        {paymentsOption.map((item)=>{
          return(
            <option key={item} value={item}>{item.toUpperCase()}</option>
          )
        })}

        {/* <option value="">--Select your payment Option-- </option>
        <option value="upi">UPI</option>
        <option value="cod">COD</option>
        <option value="card">Card</option>
        <option value="bitcoin">Bitcoin</option> */}
      </select>
    </>
  )
}

export default App
