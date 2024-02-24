import React, {useState} from "react";
import "./weather.css";
import Overview from "./Overview";

export default function Weather() {
  const [city, setCity] = useState("San Francisco");
  const [typing, setTyping] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function listenInput(event) {
    setCity(event.target.value);
    setTyping(true);
  }

  function onTyping() {
    setTyping(false);
  }


  return (
    <div>
      <header>
        <form id="search-check" className="search" onSubmit={handleSubmit}>
          <input
            id="search-me"
            type="search"
            className="search-input"
            placeholder="Enter a city.."
            required
            autoFocus="on"
            onChange={listenInput}
            onBlur={onTyping}
          />
          <input type="submit" className="btn w-40" value="Search" />
        </form>
      </header>
       <Overview  defaultCity={city} typing={typing}/>
    </div>
  );
}