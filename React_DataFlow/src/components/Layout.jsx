import React, { useState } from 'react'
import Hero from './Hero'
import About from './About'

const Layout = ({data,msg}) => {
    const [count,setCount] = useState(5)
    console.log("Layout");
    console.log(data);

    function changeMsg(){
        msg("this msg from child component")
    }
  return (
    <div onClick={changeMsg} className='p-[2rem] bg-gray-500 '>
    <h1 className='text-3xl'>Layout</h1>
    {/* these are children */}
      <Hero data={data} count={count}/>
      <About data={data} count={count}/>

    </div>
  )
}

export default Layout
