import React, { useState } from 'react';
import {Modal} from "../components/Modal.jsx"
import {motion,useTime, useTransform} from 'framer-motion';
import '../style.css';
import { Footer } from '../components/Footer';
import  {NavBar} from '../components/NavBar';
import mainPicture from '../assets/image.png'


const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const time = useTime()
const rotate = useTransform(
  time,
  [0, 4000], // For every 4 seconds...
  [0, 360], // ...rotate 360deg
  { clamp: false }
)
  return (
    <>
    <NavBar/>

    <div className='home_page'>
      <div className='main_photo'>
        <img src={mainPicture} alt="photo" />
        <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            className="save-button"
            onClick={()=> (modalOpen ? close() : open())}
            
            >Contact Me!</motion.button>

            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default Home