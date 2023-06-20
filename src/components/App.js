import React from "react"
import Home from '../pages/Home'
import NavBar from './NavBar';
import '../style.css';

const App = () => {
  return (
    <>
    <div className="entire_page">
      {/* <NavBar/> */}
      <Home/>
      
    </div>
    </>
  )
}

export default App;