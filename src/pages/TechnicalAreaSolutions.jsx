import React from 'react';
import { useParams } from 'react-router-dom';
import { useTechnicalAreaSolutions } from '../hooks/useTechnicalAreaSolutions';
import TechnicalAreaHeader from '../components/technical-areas/TechnicalAreaHeader';
import SolutionCard from '../components/solutions/SolutionCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

export default function TechnicalAreaSolutions() {
  const { area } = useParams();
  const { solutions, loading, error } = useTechnicalAreaSolutions(area);

  if (loading) {
    return <LoadingSpinner message="Loading solutions..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <TechnicalAreaHeader area={area} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {solutions.length === 0 ? (
          <p className="text-gray-600">No solutions found for this technical area.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}