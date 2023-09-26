import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import emailjs from '@emailjs/browser';

export const Modal = ({ handleClose, title, firstName,lastName, email, message, onSubmit }) => {
  const [data, setData] = useState({fname: "", lname: "", emailAddress: "", emailMessage: "" , fullName:""})
const statusUpdate = () => {
  // {setData({...data, fullName: data.fname+" "+data.lname})}

  
  
    emailjs.send("service_3t91pwn", "template_43j4o2w", {from_name: data.fname, to_name: "Lance", reply_to: data.emailAddress, message: data.emailMessage}, "SbiAbSTlCkYWdxSLl")
    .then((result)=>{
      console.log(result.text);},
    (error)=>{
      console.log(error.text)
});
    
    alert("Message Sent Successfully!");
    console.log(data);

  

}

const dropIn = {
  hidden: {
    y: "-120vh",
    
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
    y: "-100vh",
  },
};

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag="true"
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="content-wrapper">
          <h1 className="contact-title">{title}</h1>
          <h1 className="contact-name" onChange={e => {setData({
                                                        ...data, 
                                                        fname: e.target.value})}}>{firstName}</h1>
          <h1 className="contact-lname" onChange={e => {setData({
                                                        ...data, 
                                                        lname: e.target.value})}}>{lastName}</h1>
          <h1 className="contact-email" onChange={e => {setData({
                                                        ...data, 
                                                        emailAddress: e.target.value})}}>{email}</h1>
          <h1 className="contact-message" onChange={e => {setData({
                                                        ...data, 
                                                        emailMessage: e.target.value})}}>{message}</h1>
          <h2 className="contact-submit" onClick={ statusUpdate}>{onSubmit}</h2>
        </div>  
        <button className="contact-close" onClick={handleClose}>
          X
        </button>
      </motion.div>
    </Backdrop>
  );
};
