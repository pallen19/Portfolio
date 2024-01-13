import React from 'react'
import { NavBar } from '../components/NavBar'
import Search from '../components/Search'

const Blog = () => {
  return (
    <>
    <NavBar/>
    <div className='blogContainer'>
      <h1>Welcome to my blog!</h1>
      <Search/>
    </div>
    </>
  )
}

export default Blog