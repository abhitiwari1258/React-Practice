import React, { useContext } from 'react'
import B from './B'
import { useMyContext } from '../MyContext'

const A = () => {
    const {count} = useMyContext()
  return (
    <div style={{backgroundColor:'blue', padding:'10px'}}>
      A
      <br />
      <h1>{count}</h1>
      <B/>
    </div>
  )
}

export default A
