import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import SolutionCard from './SolutionCard';

export default function SolutionsList() {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSolutions() {
      try {
        const { data, error } = await supabase
          .from('solutions')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setSolutions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSolutions();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Loading solutions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-md">
        Error loading solutions: {error}
      </div>
    );
  }

  if (solutions.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No solutions have been submitted yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {solutions.map((solution) => (
        <SolutionCard key={solution.id} solution={solution} />
      ))}
    </div>
  );
}