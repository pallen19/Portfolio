import React from "react";
import "../style.css";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import mainPicture from "../assets/image.png";
import ProfessionName from "../components/ProfessionName.js";
import ContactButton from "../components/ContactButton.js";
import { Outlet } from "react-router-dom";

function Home() {
  var ACCESS_TOKEN="1//0125s9CUcDMsqCgYIARAAGAESNwF-L9Ir6KKmYO1Uw9uDTaPqVRbB7yXaiRwoxdP_8-hsRlMxoGeandQI-ivUzINpnK_eF2a0FHM"
  return (
    <>
      <NavBar />
      <div className="home_page">
        <div className="about_me">
          <div className="portrait">
            <img src={mainPicture} alt="photo" />
          </div>
          <ProfessionName />
          
        <ContactButton />
        </div>
      
    
      <Outlet />
      </div>
      <div className="footer">
        <Footer year={new Date().getFullYear()} />
      </div>
    </>
  );
}

export default Home;
