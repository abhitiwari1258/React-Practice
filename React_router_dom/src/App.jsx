import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Help from "./components/Help";
import DetailContact from "./components/DetailContact";
import { Navigate } from "react-router-dom";
import A1 from "./components/A1";
import A2 from "./components/A2";
function App() {
  // console.log(window.history);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='a1' element={<A1/>}/>
          <Route path='a2' element={<A2/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route to='/contact/:cid' element={<DetailContact/>}>Contact</Route>
        <Route path='/help' element={<Navigate to={'/'} replace/>}/>
      </Routes>
    </>
  );
}

export default App;
