import { use, useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users,setUsers] = useState([])
  const [userDetail,setUserDetail] = useState({
    name: '',
    age: ''
  })
  // console.log(users);
  

  // console.log(userDetail);


  const fetchData = async ()=>{
    const responce = await axios({
      url: 'https://69a9592d32e2d46caf4602e7.mockapi.io/users'
    })
    // console.log(responce.data);
    setUsers(responce.data)
  }

  const postData = async ()=>{
    if(userDetail.name === '' || userDetail.age === ''){
      alert('Enter Detail Pls...')
      return
    }
    const responce = await axios({
      url: 'https://69a9592d32e2d46caf4602e7.mockapi.io/users',
      method: 'POST',
      data: userDetail
    })
    fetchData()
    setUserDetail({
      name: '',
      age: ''
    })
    // console.log(responce);
  }

  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setUserDetail({...userDetail, [name]:value})
  }

  const editdata = async ()=>{
    const responce = await axios({
      url: `https://69a9592d32e2d46caf4602e7.mockapi.io/users/${userDetail.id}`,
      method: 'PUT',
      data: userDetail
    })
    fetchData()
    setUserDetail({
      name: '',
      age: ''
    })
    console.log(responce);
    
    
  }

  const deleteUser = async (userId)=>{
     const responce = await axios({
      url: `https://69a9592d32e2d46caf4602e7.mockapi.io/users/${userId}`,
      method: 'DELETE',
    })
    fetchData()
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    <input className='outline-none bg-gray-300 text-black rounded-lg p-3'
    type="text"
    placeholder='Enter Name'
    name='name'
    value={userDetail.name}
    onChange={handleOnChange}
     />

     <br /><br />
     <input className='outline-none bg-gray-300 text-black rounded-lg p-3'
    type="number"
    placeholder='Enter Age'
    name='age'
    value={userDetail.age}
    onChange={handleOnChange}
     />
     <br /> <br />
    {/* <button onClick={fetchData}>Fetch</button> */}

    {userDetail.editMode ? (<button onClick={editdata}>Save Data</button>) : (<button onClick={postData}>Post Data</button>)}

    <br /><br />
    <hr /> <br />

    {users.map((user,idx)=>{
      return(
        <div className='bg-gray-700 p-6 rounded-xl my-2' key={idx}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <button className='m-3 mt-3' onClick={()=> setUserDetail({...user,editMode:true})}>Edit</button>
          <button className='m-3 mt-3' onClick={()=>deleteUser(user.id)}>Delete</button>
        </div>
      )
    })}
    </>
  )
}

export default App

