import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import Friendly from "./Friendly";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function Overview(props) {
  // setting a state for the weather data to be not displayed yet, but displayed after the data is fetched
  const [allData, setallData] = useState({done: false});


  function getData(city){
    const apiKey = "fe1483f743b581b5520a1b725af03a49"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(displayWeather);
  }

  // function to display the weather data with one state
  function displayWeather(response) {
    console.log(response.data);
    setallData({
      done: true,
      cordi : response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    });
  }

  // if the user is not typing and has tapped on submit, fetch the data
  if (!props.typing && props.defaultCity !== allData.city) {
    getData(props.defaultCity);
  }

  // if the data is fetched, display the weather data or else wait to fetch data
  if (allData.done) {
    return (
    <main>
      <div className="row">
        <div className="col-6">
          <h1 className="city-now" id="city-now">
            {allData.city}
          </h1>
            <div id="time">
              <Friendly date={allData.date}/>
            </div>
            <div id="icon" className="for-icon">
            <Icon icon={allData.icon} size={100}/>
          </div>
          <p className="description text-capitalize">{allData.description}</p>
        </div>


        <div className="col-6">
          <Temperature temperature={allData.temperature} />
          <ul className="more-info">
            <li>Humidity | <strong id="humidity">{allData.humidity}%</strong></li>
            <li>Wind | <strong id="wind">{allData.wind}km/h</strong></li>
          </ul>

        </div>
      </div>
        <Forecast size={36} cordinates={allData.cordi}/>
    </main>
  );
}
}