import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <>
    <Navbar/>
    <Outlet/>



    <Footer/>
    </>
  )
}
