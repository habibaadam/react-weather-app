import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./weather.css";
import App from "./App";
import Weather from "./Weather";
import Overview from "./Overview";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <div className="engulf">
      <Weather />
      <Overview />
      <Footer />
    </div>
  </StrictMode>
);

