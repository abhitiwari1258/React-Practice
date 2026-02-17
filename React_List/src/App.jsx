import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const arr = ["abhi","kabhi","sabhi","tabhi"]
  const obj = [
    {
      name:"sumit",
      age:15
    },
    {
      name:"sachin",
      age:18
    },
    {
      name:"yash",
      age:18
    },
    {
      name:"abhishek",
      age:23
    }
  ]

  const data = [
    ["html","css","js","react","angular"],
    ["c++","java","python"],
    ["MongoDb","mySql","ssms","postgress"]
  ]

    const users = [
      {
        id:1,
        name:"sachin",
        age:18
      },
      {
        id:2,
        name:"yash",
        age:18
      },
      {
        id:3,
        name:"abhishek",
        age:22
      }
    ]

  return (
    <>
      <h1>List rendering</h1>
      <Card key={users.id} users={users}/>
      <h2>Rendering array</h2>
      {arr.map((item,index)=>{
        return(
          <p key={index}>{item}</p>
        )
      })}
      <hr />
      <h2>Rendering array of object</h2>
      {obj.map((item,idx)=>{
        return(
          <p key={idx}>Name : {item.name}, Age : {item.age}</p>
        )
      })}
      <hr />
      <h2>Rendering array of array</h2>
      {data.map((item,i)=>{
        return(
          <div key={i}>
            {item.map((elm)=>{
              return(
                <p key={elm}>{elm}</p>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default App
