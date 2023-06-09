import React from "react";
import "../style.css";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import mainPicture from "../assets/image.png";
import ProfessionName from "../components/ProfessionName.js";
import TechStack from "../components/TechStack.jsx";
import ContactButton from "../components/ContactButton.js";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home_page">
        <div className="main_photo">
          <img src={mainPicture} alt="photo" />
        </div>
        <ProfessionName />
        <ContactButton />
        <TechStack />
        {/* <Projects/> */}
      </div>
      <div className="footer">
        <Footer year={new Date().getFullYear()} />
      </div>
    </>
  );
};

export default Home;
