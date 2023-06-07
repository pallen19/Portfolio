import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

      
        <ul className='flex-auto'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Skills</li>
          <li className='p-4'>Projects</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      
    </div>
  )
}