import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import Layout from './components/Layout';
import Comp from './components/Comp';

function App() {
  // const obj = {
  //   name:"abhishek",
  //   age:23
  // };

  const users = [
    { id: 1, name: "Abhishek", age: 23 },
    { id: 2, name: "Sohab", age: 30 },
    { id: 3, name: "Sohani", age: 25 }
  ];

  function button1(){
    console.log("Btn1 click");
  }

  function button2(){
    console.log("Btn2 click");
  }

  const obj = {    // passing props using spread operator
    title:"abhi",
    age:22,
  }

  return (
    <>
      <div className='layout'>

        {/* props basic {String number boolean} */}
        {/* <Card name="sohab" age="30"/>
        <Card name="sohani" age="25"/> */}

        {/* Props as object */}
        <h1>APP WORKING</h1>
        {/* <Card val={obj}/> */}

        {/* props as array */}
        <Card data={users} />

        {/* Props as function */}
        {/* <Button title={'Click Me'} click={button1}/>
        <Button title={'Click'} click={button2}/> */}

        {/* props as jsx */}
        {/* <Button content={<h1>Hellloo JI</h1>}/> */}
        {/* <Button content={
          <>
            <h2>abhishek</h2>
            <h3>tiwari</h3>
            <p> age 34</p>
            <hr />
            <span>908870</span>
          </>
        }/> */}

        {/* props as childern */}

        <Layout title={"ojitnb"}>
          <h1>Children</h1>
        </Layout>

        {/* Spread operator for props */}
        <Comp {...obj}/>
      </div>
    </>
  )
}

export default App
