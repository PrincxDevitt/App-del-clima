import React from 'react';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';




const Weather = () => {
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
        src={clear_icon}
        alt="Weather Icon"
        className="weather-icon w-36 my-8"
      />

      {/* Temperatura */}
      <div className="temperature text-white text-7xl leading-none">
        25°C
      </div>

      {/* Ubicación */}
      <div className="location text-white text-4xl">
        New York, USA
      </div>
    </div>
  );
};

export default Weather;

