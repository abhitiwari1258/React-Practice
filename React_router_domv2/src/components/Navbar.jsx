// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       NavBar
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/help'>Help</NavLink>
        </div>
    </div>
  )
}

export default Navbar
