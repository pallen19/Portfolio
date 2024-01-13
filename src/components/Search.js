import React from 'react'

const Search = () => {
  return (
    <>
    <div className='searchBar'>
        <input type='text' placeholder='Search Blog Posts'></input>

        <div className='searchButton'>
        <button id='searchBtn'>Search</button>z
        </div>

    </div>
    </>
  )
}

export default Search