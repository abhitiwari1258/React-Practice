import React from 'react'

const switchs = () => {
    const option = 'bf';

  switch(option){
    case 'a':
      return <h1>Loading... A</h1>
    case 'b':
      return <h1>Loading... B</h1>
    case 'c':
    return <h1>Loading... C</h1>
    default:
    return <h1>Nothing to print</h1>
  }
}

export default switchs
