import React from 'react'

const Logical = () => {
    // short circuiting
  const msg = "hello"
  return (
    <div>
      {
        msg && <h1>{msg}</h1> 
      }
    </div>
  )
}

export default Logical
