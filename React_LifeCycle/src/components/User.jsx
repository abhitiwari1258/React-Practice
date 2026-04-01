import React, { useEffect, useState } from 'react'

const User = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        (async ()=>{
            const responce = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await responce.json()
            setData(data)
        })()
    },[])
  return (
    <div>
      <div>User</div>
      {data.map((itm)=>{
        return(
            <div key={itm.id}>{itm.name}</div>
        )
      })}
    </div>
  )
}

export default User
