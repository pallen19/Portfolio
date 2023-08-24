import React from 'react'
import { NavBar } from '../components/NavBar'
import resume from '../assets/Resume/resume.png'

const Resume = () => {
  return (
    <>
    <NavBar/>
    <div className='resumeContainer'>
    <img className= "resume" src={resume} />
    </div>
    </>
  )
}

export default Resume