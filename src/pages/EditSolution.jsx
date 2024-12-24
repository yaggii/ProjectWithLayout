import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { useSolutionDetails } from '../hooks/useSolutionDetails';
import SolutionForm from '../components/solutions/SolutionForm';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

export default function EditSolution() {
  const { id } = useParams();
  const { user } = useAuth();
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

  // Check if user is the owner
  if (!user || user.email !== solution.owner_email) {
    return <Navigate to={`/solutions/${id}`} replace />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Edit Solution</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <SolutionForm isEditing solution={solution} />
      </div>
    </div>
  );
}