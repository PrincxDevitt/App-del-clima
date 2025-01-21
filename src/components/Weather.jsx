import React, { useEffect, useState } from 'react';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
/*import drizzle_icon from '../assets/drizzle.png';*/
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';
import { use } from 'react';




const Weather = () => {

  const [weatherData, setWeatherData] = useState(false);

  const allIcons={
    "01d":clear_icon,
    "01n":clear_icon,
    "02d":cloud_icon,
    "02n":cloud_icon,
    "03d":cloud_icon,
    "03n":cloud_icon,
    "04d":cloud_icon,
    "04n":cloud_icon,
    "09d":rain_icon,
    "09n":rain_icon,
    "10d":rain_icon,
    "10n":rain_icon,
    "13d":snow_icon,
    "13n":snow_icon,
  }

  const search = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } else {
      console.error("Error:", data.message);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
useEffect (()=>{
  search("Santiago");
},[])

  return (
    <div className="weather place-self-center p-10 rounded-lg bg-gradient-to-br from-[#2f4680] to-[#500ae4] flex flex-col items-center">
      {/* Barra de búsqueda */}
      <div className="search-bar flex items-center gap-3">
        <input
          type="text"
          placeholder="Search"
          className="h-12 w-64 rounded-full pl-6 text-gray-600 bg-[#ebfffc] text-lg border-none outline-none shadow-md focus:bg-[#d8fff9] transition-all"
        />
        <img
          src={search_icon}
          alt="Search"
          className="w-12 h-12 p-3 rounded-full bg-[#ebfffc] cursor-pointer shadow-md hover:scale-110 transition-transform"
        />
      </div>

      {/* Icono del clima */}
      <img
        src={weatherData.icon}
        alt="Weather Icon"
        className="weather-icon w-36 my-8"
      />

      {/* Temperatura */}
      <div className="temperature text-white text-7xl leading-none">
        {weatherData.temperature}°C
      </div>

      {/* Ubicación */}
      <div className="location text-white text-4xl">
        {weatherData.location}
      </div>

      {/* Datos adicionales */}
      <div className="weather-data w-full mt-10 text-white flex justify-between">
        <div className="col flex items-start gap-3 text-lg">
          <img
            src={wind_icon}
            alt="Wind"
            className="w-6 mt-2"
          />
          <div>
            <span>{weatherData.windSpeed} Km/h </span>
            <span className="text-sm">Wind</span>
          </div>
        </div>
        <div className="col flex items-start gap-3 text-lg">
          <img
            src={humidity_icon}
            alt="Humidity"
            className="w-6 mt-2"
          />
          <div>
            <span>{weatherData.humidity} %</span>
            <span className="text-sm">Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

