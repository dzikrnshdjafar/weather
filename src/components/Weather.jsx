import {useState} from 'react'
import SearchBar from './SearchBar';
import bgcerah from '../assets/bgcerah.jpg';
import bghujan from '../assets/bghujan.jpg';
import WeatherInfo from './WeatherInfo';
import Loading from './Loading';

const Weather = () => {

    const [weatherCondition, setWeatherCondition] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const weatherConfig = {
      Thunderstorm: {
        background: bghujan,
        textColor: 'text-slate',
      },
      Drizzle: {
        background: bghujan,
        textColor: 'text-slate',
      },
      Rain: {
        background: bghujan,
        textColor: 'text-slate',
      },
      Default: {
        background: bgcerah,
        textColor: 'text-neutral',
      },
    };

    const { background, textColor } = weatherConfig[weatherCondition] || weatherConfig.Default;

  return (
    <div
    className={`flex flex-col items-center p-4 h-screen ${textColor} bg-cover`}
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="flex flex-col items-center p-7 rounded-2xl bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 2xl:w-1/2 xl:w-1/2 lg:w-2/3 md:w-2/3 hp:w-full">
      <h1 className="text-5xl font-bold mb-10">Weather<span className='text-emerald text-6xl'>G</span> </h1>
      <SearchBar setWeatherCondition={setWeatherCondition} setWeather={setWeather} setLoading={setLoading} />
      {loading ?
      (<Loading/>)
      : 
      (<WeatherInfo weather={weather}/>)
      }
      {/* <Loading/> */}
      
    </div>
  </div>
);
}

export default Weather
