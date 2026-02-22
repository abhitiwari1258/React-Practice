import { useState } from 'react'
import './App.css'

function App() {
  const [paymentMode,setPaymentMode] = useState({})
  const payments = [
    {id:'UPI', info:'Instant transfer via upi apps'},
    {id:'Card', info:'Pays using credit or debit card'},
    {id:'COD', info:'Pay when order arrives'}
  ]
  console.log(paymentMode);

  // this will also work using find method
  
  // const payInfo = payments.find(obj => obj.id === paymentMode)

  // console.log(payInfo.info);
  
  
  
  return (
    <>
      {payments.map((item)=>{
        return(
          <label key={item.id} htmlFor={item.id}>
          {item.id}
            <input 
            id={item.id}
            type="radio" 
            name='payments'
            value={item.id}
            checked={paymentMode.id === `${item.id}`}
            onChange={()=>setPaymentMode(item)}
            />
          </label>
        )
      })}

      <p>Mode of Payment : {paymentMode.id}</p>
      <p>Details : {paymentMode.info}</p>
    </>
  )
}

export default App
