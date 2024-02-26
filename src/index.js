import { createRoot } from "react-dom/client";
import React from "react";

import "./weather.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Weather from "./Weather";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <div className="container">
      <App />
      <div className="engulf-background">
      <div className="engulf">
      <Weather defaultCity="San Francisco" />
    <Footer />
  </div>
  </div>
  </div>
);
