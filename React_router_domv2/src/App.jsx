import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "../../React_router_dom/src/components/Contact";
import Help from "./components/Help";
import Layout from "./Layout";
import A1 from "./components/A1";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
          loader: ()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path: "/about/:id",
          element: <A1 />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/help",
          element: <Help />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
