import React from 'react'
import {Link} from "react-router-dom";
import Home from '../pages/Home';

export const NavBar = () => {
  return (
    <>
    <div className='nav-bar'>
      <h1 className='home_title'>Paul Allen
        <Link to={"/"}></Link></h1>
        <ul >
          <nav>
            <li className='nav-links'>
              <Link to="/">Home</Link>
            </li>
            <li className='nav-links'>
              <Link to="/projects">Projects</Link>
            </li>

            <li className='nav-links'>
              <Link to="/resume">Resume</Link>  
            </li>

            {/* <li className='nav-links'>
              <Link to="/contact">Contact</Link>  
            </li> */}
          </nav>
        </ul>
      
    </div>
    </>
  )
}
