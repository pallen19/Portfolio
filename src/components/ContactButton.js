import React, { useState } from "react";
import { Modal } from "../components/Modal.jsx";
import { motion, useTime, useTransform, AnimatePresence } from "framer-motion";
const ContactButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  


  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button1"
        onClick={() => (modalOpen ? close() : open())}
      >
        Contact Me!
      </motion.button>

      <AnimatePresence
        initial={false}
        mode={"wait"}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            title={"Let's Connect!"}
            firstName={
              <form>
                  {/* onChange={handleChange} value={data.name} */}
                  <input type="name" name="name" placeholder="Enter your name" required />
                {/* <input type='submit' value={"Submit"}/> */}
              </form>
            }
            lastName={
              <form>
                  {/* onChange={handleChange} value={data.name} */}
                  <input type="last-name" name="last-name" placeholder="Enter your last name" required />
                {/* <input type='submit' value={"Submit"}/> */}
              </form>
            }
            email={
              <form>
                  {/* onChange={handleChange} value={data.name} */}
                  <input type="email" name="email" placeholder="Enter your email" required />
                {/* <input type='submit' value={"Submit"}/> */}
              </form>
            }

            message={
              <form>
               <textarea text="message" cols={30} rows={10} placeholder="Type here ..." />
              </form>
            }

            onSubmit={
              <button onClick= {close} type='submit'>Send</button>
            }
             
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactButton;
