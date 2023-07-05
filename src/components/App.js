import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { NavBar } from "./NavBar"
import "../style.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Projects from "../pages/Projects";
import About from "./About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="projects" element={<Projects />} /> */}
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
