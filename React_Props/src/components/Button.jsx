import React from 'react'

const Button = ({title,click,content}) => {
  return (
    <div>
      {/* <button onClick={click}>Button</button> */}
      <button>{content}</button>
    </div>
  )
}

export default Button
