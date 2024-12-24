import React from 'react';
import SearchBar from '../components/search/SearchBar';
import HighlightedSolutions from '../components/solutions/HighlightedSolutions';
import TechnicalAreasCarousel from '../components/TechnicalAreasCarousel';
import SolutionsMap from '../components/SolutionsMap';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="max-w-xl">
              <h2 className="text-orange-500 font-medium mb-4">WELCOME TO THE</h2>
              <h1 className="font-semibold text-gray-900 mb-4 text-6xl">
                Solutions Exchange
              </h1>
              <p className="subTitle font-normal text-lg text-gray-600">
                A by-projects, for-projects platform featuring high-impact solutions that are accessible and adoption ready.
              </p>
            </div>
            <div className="w-[550px]">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Highlighted Solutions */}
      <HighlightedSolutions />

      {/* Technical Areas Carousel */}
      <TechnicalAreasCarousel />

      {/* World Map */}
      <SolutionsMap />
    </div>
  );
}