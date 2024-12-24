import React from 'react';
import { useParams } from 'react-router-dom';
import { useCountrySolutions } from '../hooks/useCountrySolutions';
import SolutionCard from '../components/solutions/SolutionCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

export default function CountrySolutions() {
  const { country } = useParams();
  const { solutions, loading, error } = useCountrySolutions(country);

  if (loading) {
    return <LoadingSpinner message="Loading solutions..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Solutions from {country}</h1>
      {solutions.length === 0 ? (
        <p className="text-gray-600">No solutions found for {country}.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      )}
    </div>
  );
}