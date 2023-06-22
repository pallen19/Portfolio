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
        y:"-100vh"
    },
};
export const Modal = ({handleClose, title,  fullName, message, onSubmit}) => {
  return (
    
    <Backdrop onClick={handleClose}>
        <motion.div
            drag="true"
            onClick={(e)=> e.stopPropagation()}
            className="modal"
            variants={dropIn}
            initial= "hidden"
            animate="visible"
            exit="exit"
            >
            <h1 className='contact-title'>{title}</h1>
            <h1 className='contact-name'>{fullName}</h1>
            <h1 className='contact-message'>{message}</h1>
            <h2 className='contact-submit'>{onSubmit}</h2>
            <button className='contact-close' onClick={handleClose}>X</button>
        </motion.div>
    </Backdrop>
  )
}

