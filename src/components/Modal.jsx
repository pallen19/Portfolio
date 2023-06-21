import React from 'react';
import {motion} from 'framer-motion';
import Backdrop from './Backdrop';


const dropIn= {
    hidden: {
        y: "-100vh"
    }, 
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y:"100vh"
    },
};
export const Modal = ({handleClose, text}) => {
  return (
    
    <Backdrop onClick={handleClose}>
        <motion.div
        onClick={(e)=> e.stopPropagation()}
            className="modal grey-gradient"
            variants={dropIn}
            initial= "hidden"
            animate="visible"
            exit="exit"
            >
            <p>{text}</p>
            <button onClick={handleClose}>Close</button>
        </motion.div>
    </Backdrop>
  )
}

