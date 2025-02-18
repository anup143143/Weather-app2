import React from 'react';
import clearImage from '../assets/clear.png';
import cloudImage from '../assets/cloud.png';
import rainImage from '../assets/rain.png';
import snowImage from '../assets/snow.png';
import windImage from '../assets/wind.png';
import humidityImage from '../assets/humidity.png';
import drizzleImage from '../assets/drizzle.png';


const weatherImages = {
  'clear sky': clearImage,
  'few clouds': cloudImage,
  'scattered clouds': cloudImage,
  'light rain': rainImage,
  rain: rainImage,
  snow: snowImage,
  wind: windImage,
  humidity: humidityImage,
  cloud: cloudImage,
  drizzle: drizzleImage,
};

export const Showweb = ({data, forecastData }) => {
  return (
    <div className="weather-info">
      {/* Current Weather */}
      {data ? (
       <div className="current-weather">
       <div className="city-details">
         <h2 className="city-name">{data.name}</h2>
         <img
           src={weatherImages[data.weather] || clearImage}
           alt={data.weather}
           className="weather-icon"
         />
         <p className="city-temp">{data.temp}°C</p>
         <p className="weather-description">{data.weather}</p>
       </div>
     
       <div className="descriptions">
         <div className="description-item">
           <img src={cloudImage} alt="clouds" className="description-icon" />
           <p>Clouds: {data.clouds}%</p>
         </div>
         <div className="description-item">
           <img src={windImage} alt="wind" className="description-icon" />
           <p>Wind: {data.wind} m/s</p>
         </div>
         <div className="description-item">
           <img src={humidityImage} alt="humidity" className="description-icon" />
           <p>Humidity: {data.humidity}%</p>
         </div>
       </div>
     </div>
     
      ) : (
        <p></p>
      )}

      {/* 5-Day Forecast */}
      {forecastData && forecastData.length > 0 ? (
       <div className="forecast">
       <h2>5-Day Forecast</h2>
       <div className="forecast-row">
         {forecastData.map((item, index) => (
           <div className="forecast-item" key={index}>
             <p className="forecast-date">{item.date}</p>
             <img
               src={weatherImages[item.weather] || clearImage}
               alt={item.weather}
               className="forecast-icon"
             />
             <p className="forecast-temp">{item.temp}°C</p>
             <p className="forecast-condition">{item.weather}</p>
           </div>
         ))}
       </div>
     </div>
     
      ) : (
        <p></p>
      )}
    </div>
  );
};
