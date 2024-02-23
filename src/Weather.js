import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div>
      <header>
        <form id="search-check" className="search">
          <input
            id="search-me"
            type="search"
            className="search-input"
            placeholder="Enter a city.."
            required
            autoFocus="on"
          />
          <input type="submit" className="btn w-40" value="Search" />
        </form>
      </header>
    </div>
  );
}