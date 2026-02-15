import React from 'react'

const Ternary = () => {
    const isLogin = true;
  return (
    <div>
      {isLogin ? <h1>Log In</h1> : <h1>LogOut</h1>}
    </div>
  )
}

export default Ternary
