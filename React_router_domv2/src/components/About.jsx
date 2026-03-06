import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const About = () => {

  const data = useLoaderData()
  console.log(data);
  
  const params = useParams();
  console.log(params);
  
  return (
    <div>
      <h1>About</h1>
      {data.map((item)=>{
        return(
          <p key={item}>{item.name}</p>
        )
      })}
    </div>
  )
}

export default About
