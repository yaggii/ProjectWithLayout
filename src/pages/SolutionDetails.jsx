import React from 'react';
import { useParams } from 'react-router-dom';
import { useSolutionDetails } from '../hooks/useSolutionDetails';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import SolutionHeader from '../components/solutions/details/SolutionHeader';
import SolutionSolution from '../components/solutions/details/SolutionSolution';
import SolutionOverview from '../components/solutions/details/SolutionOverview';
import SolutionFiles from '../components/solutions/details/SolutionFiles';

export default function SolutionDetails() {
  const { id } = useParams();
  const { solution, loading, error } = useSolutionDetails(id);

  if (loading) {
    return <LoadingSpinner message="Loading solution..." />;
  }

  if (error) {
    return <ErrorMessage message={`Error loading solution: ${error}`} />;
  }

  if (!solution) {
    return <ErrorMessage message="Solution not found." />;
  }

  return (
    <div>
      <SolutionHeader solution={solution} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SolutionSolution solution={solution} />
        <SolutionOverview solution={solution} />
        <SolutionFiles solution={solution} />
      </div>
    </div>
  );
}