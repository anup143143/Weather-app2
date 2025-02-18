import { useEffect, useState } from "react";
import { Showweb } from "./Componets/Showweb";
import { Search } from "./Componets/Search";

function App() {
  const [weather, setWeather] = useState(""); // City name entered by the user
  const [data, setData] = useState(null); // Weather data for the city
  const [forecastData, setForecastData] = useState([]); // 5-day forecast data

  const fetchWeatherData = () => {
    if (!weather.trim()) {
      alert("Please enter a valid city name!");
      return;
    }

    // Fetch current weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&units=metric&appid=1a11b89e6f2b2dc957a6b70011c13d81`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found!");
        }
        return response.json();
      })
      .then((data) => {
        setData({
          name: data.name,
          temp: data.main.temp,
          clouds: data.clouds.all,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          weather: data.weather[0].description,
        });

        // Fetch 5-day forecast
        return fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(weather)}&units=metric&appid=1a11b89e6f2b2dc957a6b70011c13d81`
        );
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found in forecast!");
        }
        return response.json();
      })
      .then((forecastData) => {
        const forecast = forecastData.list
          .filter((_, index) => index % 8 === 0) // 8 timestamps per day
          .map((item) => ({
            date: item.dt_txt.split(" ")[0],
            temp: item.main.temp,
            weather: item.weather[0].description,
          }));
        setForecastData(forecast);
      })
      .catch((error) => {
        alert(error.message);
        setData(null);
        setForecastData([]);
      });
  };

  return (
    <section className="main-div">
      <Search weather={weather} setWeather={setWeather} fetchWeatherData={fetchWeatherData} />
      <Showweb data={data} forecastData={forecastData} />
    </section>
  );
}

export default App;

