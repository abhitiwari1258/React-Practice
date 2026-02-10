import React from 'react'

const Card = ({data}) => {
    console.log(data);
    
  return (
    <div className='card'>
     {data.map((item)=>{
        return(
            <div key={item.id}>
                <p key={item.id}>{item.name} {item.age}</p>
            </div>
        )
     })}
    </div>
  )
}

export default Card
