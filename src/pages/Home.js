import React from 'react';
import '../style.css';
import { Footer } from '../components/Footer';
import  {NavBar} from '../components/NavBar';
const Home = () => {
  return (
    <>
    <NavBar/>
    <div className='home_page'>Home PAGE</div>

    <Footer/>
    </>
  )
}

export default Home