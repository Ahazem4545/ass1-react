import React from 'react'
import Navbar from './Componants/Navbar'
import Footer from './Componants/Footer'
import About from './Componants/About'
import Portfolio from './Componants/Portfolio'
import Contact from './Componants/Contact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Componants/Home'
import Layout from './Componants/Layout'



export default function App() {
  const routers = createBrowserRouter([
    {path:'', element:<Layout/> , children: [
      {path:'startFramework', element:<Home/>},
      {path:'about', element:<About/>},
      {path:'portfolio', element:<Portfolio/>},
      {path:'contact', element:<Contact/>},
    ]}
  ])
  return (
    <>
    <RouterProvider router={routers}>

    </RouterProvider>
    </>
  )
}

