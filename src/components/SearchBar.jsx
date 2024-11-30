import React, { useState } from 'react';
import SearchIcon from '../assets/search.svg'
import WeatherInfo from './WeatherInfo';

const API_KEY = import.meta.env.VITE_APIKEY_OWM;

const SearchBar = ({ setWeatherCondition, setWeather, setLoading }) => {
  const [city, setCity] = useState('');

  const handleSearch = async (e) => {
    setLoading(true)
    e.preventDefault();
    if (city !== '') {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        if (response.ok) {
          setWeather(data);
          setWeatherCondition(data.weather[0].main);
        } else {
          window.alert(`City ${city} not found. Please enter a valid city.`);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        window.alert('Failed to fetch weather data. Please try again later.');
      } finally {
        setLoading(false)
      }
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="flex text-xl">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          className="text-neutral w-full h-14 px-4 py-2 rounded-l-2xl outline-none bg-slate"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-slate text-neutral rounded-r-2xl"
        >
          <img src={SearchIcon} alt="" className='w-5 h-5'/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
