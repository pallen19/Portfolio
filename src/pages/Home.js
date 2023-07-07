import React from "react";
import "../style.css";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import mainPicture from "../assets/image.png";
import ProfessionName from "../components/ProfessionName.js";
import TechStack from "../components/TechStack.jsx";
import ContactButton from "../components/ContactButton.js";
import { Outlet } from "react-router-dom";
import AboutIntro from "../components/AboutIntro";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home_page">
        <div className="about_me">
          <img src={mainPicture} alt="photo" />
          <ProfessionName />
          <AboutIntro />
        </div>
        <ContactButton />
        <TechStack />
        {/* <Projects/> */}
        <Outlet />
      </div>
      <div className="footer">
        <Footer year={new Date().getFullYear()} />
      </div>
    </>
  );
};

export default Home;
