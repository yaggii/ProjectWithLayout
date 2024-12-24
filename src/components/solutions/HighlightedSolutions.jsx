import React from 'react';
import { useRecentSolutions } from '../../hooks/useRecentSolutions';
import SolutionCard from './SolutionCard';
import SectionHeading from '../common/SectionHeading';

export default function HighlightedSolutions() {
  const { solutions, loading, error } = useRecentSolutions();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-orange-500 uppercase text-lg tracking-wider mb-2">DISCOVER</h3>
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-4xl font-semibold text-gray-900">Highlighted Solutions</h2>
          <button className="bg-white border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition-colors">
            See All Solutions
          </button>
        </div>
        <p className="text-gray-600 font-normal text-lg mt-1">Discover solutions around the world</p>
        <p className="text-gray-600 font-normal text-lg mt-1">that are scaling with Chemonics</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-2xl mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-2xl w-1/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded-2xl mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-2xl w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-orange-500 uppercase text-lg tracking-wider mb-2">DISCOVER</h3>
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-4xl font-semibold text-gray-900">Highlighted Solutions</h2>
          <button className="bg-white border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition-colors">
            See All Solutions
          </button>
        </div>
        <p className="text-gray-600 font-normal text-lg mt-1">Discover solutions around the world</p>
        <p className="text-gray-600 font-normal text-lg mt-1">that are scaling with Chemonics</p>
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-orange-800">
          <p className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (!solutions?.length) {
    return null;
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-orange-500 uppercase text-lg tracking-wider mb-2">DISCOVER</h3>
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-4xl font-semibold text-gray-900">Highlighted Solutions</h2>
          <button className="bg-white border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition-colors">
            See All Solutions
          </button>
        </div>
        <p className="text-gray-600 font-normal text-lg mt-1">Discover solutions around the world</p>
        <p className="text-gray-600 font-normal text-lg mt-1">that are scaling with Chemonics</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  );
}