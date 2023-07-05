import React from 'react'
import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <div className='nav-bar'>
      <h1 className='home_title'>paul.dev</h1>
        <ul >
          <nav>
            <li className='nav-links'>
              <Link to="/">Home</Link>
            </li>
            <li className='nav-links'>
              <Link to="/projects">Projects</Link>
            </li>

            <li className='nav-links'>
              <Link to="/about">About</Link>  
            </li>

            <li className='nav-links'>
              <Link to="/contact">Contact</Link>  
            </li>
          </nav>
        </ul>
      
    </div>
    </>
  )
}
