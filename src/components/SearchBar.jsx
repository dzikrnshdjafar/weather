import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo'

const API_KEY = 'eebfd299e8b0e82fef9b31334ec43b57';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (city !== '') {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        if (response.ok) {
            setWeather(data); 
          } else {
            window.alert(`City ${city} not found Please enter a valid city.`);
          }
        } catch (error) {
          console.error('Error fetching weather data:', error);
          window.alert('Failed to fetch weather data. Please try again later.');
        }
    }
  };

  return (
    <div>

    <form onSubmit={handleSearch} className="flex text-xl">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="2xl:w-[50rem] xl:w-[40rem] lg:w-[30rem] w-full h-14 px-4 py-2 rounded-l-xl outline-none"
        />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-xl hover:bg-blue-600"
        >
        Search
      </button>
    </form>
<WeatherInfo weather={weather} />
        </div>
  );
};

export default SearchBar;
