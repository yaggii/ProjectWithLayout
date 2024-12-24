import React from 'react';
import { useNavigate } from 'react-router-dom';
import { encodeUrlParam } from '../../utils/urlUtils';

export default function Legend({ locations, onCountrySelect }) {
  const uniqueCountries = [...new Set(locations.map(loc => loc.country))].sort();

  const handleCountryClick = (country) => {
    // Only zoom to the country when clicking in the legend
    onCountrySelect(country);
  };

  return (
    <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-[1000] max-h-[200px] overflow-y-auto">
      <h3 className="font-bold text-sm mb-2">Countries with Solutions</h3>
      <div className="space-y-1">
        {uniqueCountries.map(country => (
          <button
            key={country}
            onClick={() => handleCountryClick(country)}
            className="flex items-center text-sm w-full hover:bg-gray-50 p-1 rounded transition-colors"
          >
            <span className="w-3 h-3 bg-[#F4863B] opacity-60 mr-2"></span>
            <span>{country}</span>
          </button>
        ))}
      </div>
    </div>
  );
}