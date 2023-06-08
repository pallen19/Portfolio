import React,{StrictMode} from "react";
import ReactDOM,{createRoot} from 'react-dom/client';
import './assets/main.css';
import App from "./components/App";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);