import React from 'react';

const WeatherInfo = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="mt-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold text-gray-800">{weather.name}</h2>
        <p className="text-xl text-gray-600 capitalize">
          {weather.weather[0].description}
        </p>
        <p className="text-5xl font-bold text-blue-500 mt-4">
          {weather.main.temp}°C
        </p>
        <div className="mt-4 flex justify-between text-gray-600">
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
