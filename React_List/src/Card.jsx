import React from 'react'

const Card = ({users}) => {
  return (
    <div>
      {users.map((item)=>{
        return(
            <div style={{borderRadius:"10px", backgroundColor:"green"}}>
                {item.age <= 18 &&
                <h2>{item.name}</h2>}
                {item.age <= 18 && <h2>{item.age}</h2>}
            </div>
        )
      })}
    </div>
  )
}

export default Card
