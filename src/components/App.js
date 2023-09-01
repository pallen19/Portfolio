import React from "react";
import Home from "../pages/Home";
import "../style.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import { initializeApp } from "firebase/app";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB2FdfeGUk8pDwllTvsvewkFaxesLfxzJs",
    authDomain: "lakcnease.firebaseapp.com",
    projectId: "lakcnease",
    storageBucket: "lakcnease.appspot.com",
    messagingSenderId: "1039935281139",
    appId: "1:1039935281139:web:c54ad77f23f71caa5c6486"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
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
