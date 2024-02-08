import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [pathName, setPathname] = useState(window.location.pathname)
  console.log(window.location.pathname);
  return (
   <nav className="navbar navbar-expand-lg  nav-bg-color">
    <div className="container-fluid">
      <a className="navbar-brand ms-5 text-white nav-brand-font" href="#">START FRAMEWORK</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
          <li className={pathName == '/about' ? 'active nav-item mx-2 nav-bg-li rounded':"nav-item mx-2 nav-bg-li rounded " } onClick={()=>{setPathname('/about')}}>
            <Link  className= ' nav-link text-white  nav-link text-white ' aria-current="page" to={'/about'}>ABOUT</Link>
          </li>
          <li className= {pathName == '/portfolio'? 'active nav-item mx-2 rounded portfolio-color':"nav-item mx-2 rounded portfolio-color"}  onClick={()=>{setPathname('/portfolio')}}>
            <Link className={pathName== '/portfolio'? ' nav-link text-white':"nav-link text-white"} to={'/portfolio'}>PORTFOLIO</Link>
          </li>
          <li className={pathName == '/contact'? 'active nav-item mx-2  rounded  contact-color':"nav-item mx-2  rounded  contact-color"}  onClick={()=>{setPathname('/contact')}}>
            <Link className={pathName == '/contact'? ' nav-link text-white':"nav-link text-white"} to={'/contact'}>CONTACT</Link>
          </li>
          
          
        </ul>
        
      </div>
    </div>
  </nav>
  
   
  )
}
