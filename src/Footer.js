import React from "react";

import "./weather.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a
        href="https://www.linkedin.com/in/habiba-adam-salisu-570555267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
      >
        Habie
      </a>
      and is{" "}
      <a href="https://github.com/habibaadam/weather-app" target="_blank">
        {" "}
        open-sourced on GitHub
      </a>{" "}
      and
      <a href="https://weather-bibi.netlify.app/" target="_blank">
        hosted on Netlify
      </a>
    </footer>
  );
}
