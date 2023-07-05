import React from 'react'
import {motion,useTime, useTransform, AnimatePresence} from 'framer-motion';
import linkedIn from '../assets/LI-In-Bug.png'
import gitHub from '../assets/github-mark-white.png'

export const Footer = (props) => {
  return (
    <>
    <li className='social-media'>
      <ul>
        <motion.button whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            className="save-button"
            onClick={()=> (window.open('https://github.com/pallen19', '_blank', 'noopener'))}>
          <img className='social-logo' src={gitHub} alt="photo" />
        </motion.button>

        <motion.button whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            className="save-button"
            onClick={()=> (window.open('https://www.linkedin.com/in/paul-allen13', '_blank', 'noopener'))}>
          <img className='social-logo' src={linkedIn} alt="photo" />
        </motion.button>
      </ul>
     </li>

     <footer>
        <p>Copyright {props.year}</p>
     </footer>
    </>
  )
}
