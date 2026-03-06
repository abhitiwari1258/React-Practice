import React from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const isLogIn = true
    const handleBtn = ()=>{
        if(isLogIn) navigate('/about')
    }
  return (
    <div>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/help'>Help</NavLink>
        </div>
        <div>
            <button onClick={handleBtn}>Navigate to About</button>
        </div>

      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/help'>Help</Link> */}
    </div>
  )
}

export default Navbar
