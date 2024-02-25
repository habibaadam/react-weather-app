import React, {useState} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./weatherForecast.css";


export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function displayForecast(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        console.log(forecast);
        return (
        <div className="forecasting">
            <div className="row">
                {forecast.map(function(dailyForecast, index) {
                    if (index < 5) {
                         return (
                        <div className="col" key={index}>
                            <ForecastDay data={dailyForecast}/>
                        </div>
                    );
                } else{
                    return null;
                }})}
            </div>
        </div>
    );
    } else {
        let apiKey = "fe1483f743b581b5520a1b725af03a49";
        let long = props.cordinates.lon;
        let lati = props.cordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayForecast);
        return null;
    }

}