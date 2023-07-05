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
            title={<h1>Send a message !</h1>}
            fullName={
              <form>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
                {/* <input type='submit' value={"Submit"}/> */}
              </form>
            }
            message={
              <form>
                <label>
                  Message:
                  <input type="text" text="message" />
                </label>
                <input type="submit" value={"Submit"} />
              </form>
            }
             onSubmit={()=> setFirstName(target.value)}
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactButton;
