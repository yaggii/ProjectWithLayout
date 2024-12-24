import React, { useState } from 'react';
import { Search, Sliders } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg">
    <h3 className="text-lg text-orange-500 mb-4">
        Please enter a problem you're seeking to solve
      </h3>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by problem"
          className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-orange-500 text-lg placeholder:italic"
        />
        <div className="flex text-sm items-center text-orange-500">
          <Sliders className="w-3.5 h-3.5 mr-2" />
          <span>Advance Search</span>
        </div>
        <button 
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded-2xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-lg font-medium"
          >
            <Search className="w-5 h-5" />
            Search
          </button>
      </form>
      
    </div>
  );
}