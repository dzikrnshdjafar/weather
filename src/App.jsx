import React from 'react';
import SearchBar from './components/SearchBar';

const App = () => {

  return (
    <div className="flex flex-col items-center p-20 h-screen bg-blue-200">
      <h1 className="text-4xl font-bold text-white mb-6">Weather App</h1>
      <SearchBar />
    </div>
  );
};

export default App;
