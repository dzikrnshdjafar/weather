import React from 'react';
import marker from '../assets/marker.svg';
import humidity from '../assets/humidity.svg';
import wind from '../assets/wind.svg';


const WeatherInfo = ({ weather }) => {
  if (!weather) return null;

  const formatDate = (date) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const currentDate = new Date();

  const roundTemperature = (temp) => Math.round(temp);

  return (
    <div className="mt-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full">
          <div className='flex gap-20'>
        <div className="flex items-center mb-6">
          <img src={marker} alt="Marker" className="w-6 h-6 mr-1" />
          <h2 className="text-2xl font-bold text-neutral">{weather.name}</h2>
        </div>
            <p>{formatDate(currentDate)}</p>
          </div>
        <div className='p-12 flex gap-20 items-center justify-center'>
          <img src={marker} alt="" className="w-20 h-20 mr-1"/>
          <div className='flex flex-col'>
        <p className="text-3xl font-bold text-secondary">
           {roundTemperature(weather.main.temp)}°C
        </p>
        <p className="text-xl text-gray-600 capitalize">
          {weather.weather[0].description}
        </p>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-gray-600 p-2">
          <div className='flex items-center'>
          <img src={humidity} alt="" className="w-7 h-7 mr-2"/>
          <p>Humidity: <br/> {weather.main.humidity}%</p>
          </div>
          <div className='flex items-center'>
          <img src={wind} alt="" className="w-7 h-7 mr-2"/>
          <p>Wind: <br/> {weather.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
