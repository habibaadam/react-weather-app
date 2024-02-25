import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {

    //rounding the temperature to the nearest whole number

    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    // friendly looking display: day of the week

    function niceDay() {
        let day = new Date(props.data.dt * 1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day.getDay()];

    }

    return (
        <div className="col">
            <div className="forecast-day">{niceDay()}</div>
            <Icon icon={props.data.weather[0].icon} size={30} />
            <div className="forecast-temperature">
                <span className="forecast-max">{maxTemperature()}</span>
                <span className="forecast-min">{minTemperature()}</span>
            </div>
        </div>
    );
}