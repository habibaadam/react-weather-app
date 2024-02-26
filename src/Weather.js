import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import Friendly from "./Friendly";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Forecast from "./Forecast";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [allData, setallData] = useState({done: false});


  function handleSubmit(event) {
    event.preventDefault();
    getData(city);
  }

  function listenInput(event) {
    setCity(event.target.value);
  }

  function getData(city){
    console.log("Fetching data for city:", city); //debugging
    const apiKey = "667d9f573c8af4c33457be5d561a9148"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(displayWeather);
  }


  // function to display the weather data with one state
  function displayWeather(response) {
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

  if (allData.done) {
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
          />
          <input type="submit" className="btn w-40" value="Search" />
        </form>
      </header>
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
    </div>
  );}
  else {
    return (
      getData(props.defaultCity)
    );
  }
}