import React from 'react';
import SearchBar from './components/SearchBar';

const App = () => {

  return (
    <div className="flex flex-col items-center p-10 h-screen bg-blue-200 px-6">
      <h1 className="text-5xl font-bold text-white mb-10">WeatherApp</h1>
      <SearchBar />
    </div>
  );
};

export default App;
