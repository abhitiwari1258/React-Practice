
import React, { useEffect } from 'react'
import useMyStore from '../store';
const Navbar = () => {
    // const state = useMyStore()
    // const {capitalizeName,count,increment} = useMyStore()

    // using this we get single store subscription
        const count = useMyStore((state)=>{
            return state.count
        })
        const capitalizeName = useMyStore((state)=>{
            return state.capitalizeName
        })
        const increment = useMyStore((state)=>{
            return state.increment
        })

        useEffect(()=>{
            console.log('reRender');
        })

  return (
    <div>
        {/* <h1>{name}</h1> */}
        <h1>{count}</h1>
        <p>Its basic about zustand</p>
        <button onClick={increment}>Increment</button>
        <button onClick={capitalizeName}>Capitalize</button>
    </div>
  )
}

export default Navbar
