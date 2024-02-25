import React , {useState} from "react";

export default function Temperature(props) {
    const [metrics, setMetrics] = useState("celsius");

    function convertF(event) {
        event.preventDefault();
        setMetrics("fahrenheit");
    }

    function convertC(event) {
        event.preventDefault();
        setMetrics("celsius");
    }

    if (metrics === "celsius") {
          return (
            <h2 className="c-weather" id="currentW">
            {Math.round(props.temperature)} <span className="units">°C | {" "} <a href="/" onClick={convertF}>°F</a> </span>
          </h2>
    );
    } else {
        return (
      <h2 className="c-weather" id="currentW">
        {Math.round((props.temperature * 9) / 5 + 32)}{" "}
        <span className="units">°F | {" "} <a href="/" onClick={convertC}>°C</a>
        </span>
      </h2>
    );
    }
}