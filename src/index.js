import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import "./weather.css";
import App from "./App";
import Weather from "./Weather";
import Overview from "./Overview";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    <div className="engulf">
      <Weather />
      <Overview />
      <Footer />
    </div>
  </React.StrictMode>
);
