import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import App from "./App";

axios.defaults.baseURL = "http://159.203.178.3";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
);
