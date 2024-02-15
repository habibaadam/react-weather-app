import React from "react";

export default function Overview() {
  return (
    <main>
      <div className="current-weather">
        <div>
          <h1 className="city-now" id="city-now">
            Paris
          </h1>
          <p className="info">
            <span className="real" id="time">
              Last Updated: Tuesday 10:00pm
            </span>
            <span id="describe"></span> <br />
            Humidity: <strong id="humidity">80%</strong>, Wind:
            <strong id="wind">10km/h</strong>
          </p>
        </div>
        <div className="weather">
          <div id="icon">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"  alt="weather.icon"/>
          </div>
          <div className="c-weather" id="currentW">
            24
          </div>
          <div className="intensity">°C</div>
        </div>
      </div>
      <div className="forecast-weather" id="forecast"></div>
    </main>
  );
}
