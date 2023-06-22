import React, { useState } from 'react';
import {Modal} from "../components/Modal.jsx"
import {motion,useTime, useTransform, AnimatePresence} from 'framer-motion';
import '../style.css';
import { Footer } from '../components/Footer';
import  {NavBar} from '../components/NavBar';
import mainPicture from '../assets/image.png'
import Projects from './Projects.js';



const Context = ()=>{
  return(
    <>
    <form>
      <label>
        Name:
        <input type='text' name='name'/>
      </label>
      <input type='submit' value={"Submit"}/>
    </form>
    </>
  )
}
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const time = useTime()
          // const rotate = useTransform(
          //   time,
          //   [0, 4000], // For every 4 seconds...
          //   [0, 360], // ...rotate 360deg
          //   { clamp: false }
          // )
  return (
    <>
    <NavBar/>

    <div className='home_page'>
      <div className='main_photo'>
        <img src={mainPicture} alt="photo" />
        <motion.button
            
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            className="save-button1"
            onClick={()=> (modalOpen ? close() : open())}
            
            >Contact Me!</motion.button>

           
        
        <AnimatePresence
        initial={false}

        mode={"wait"}

        onExitComplete={()=> null}
        >
           {modalOpen && <Modal 
                            modalOpen={modalOpen}
                            fullName={<form>
                                        <label>
                                          Name:
                                          <input type='text' name='name'/>
                                        </label>
                                        {/* <input type='submit' value={"Submit"}/> */}
                                      </form>} 
                            message={<form>
                                        <label>
                                          Message:
                                          <input type='text' text='message'/>
                                        </label>
                                        <input type='submit' value={"Submit"}/>
                                      </form>} 
                            onSubmit={<button>Submit</button>}
                            handleClose={close} 
                            />}

        </AnimatePresence>
        <Projects/>
      </div>
    </div>
    
   
   

   
      <Footer/>
    
    </>
  )
}

export default Home