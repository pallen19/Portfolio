import React from "react";
import Home from "../pages/Home";
import "../style.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="projects" element={<Projects />} /> */}
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
