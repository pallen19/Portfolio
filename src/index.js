import React,{StrictMode} from "react";
import ReactDOM,{createRoot} from 'react-dom/client';
import App from "./components/App";
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);