import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div>
      <header>
        <form id="search-check" className="mb-3">
          <input
            id="search-me"
            type="search"
            className="search"
            placeholder="Enter a city.."
            required
          />
          <input type="submit" className="s-button" value="Search" />
        </form>
      </header>
    </div>
  );
}