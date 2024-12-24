import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useSolutionDetails(id) {
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSolution() {
      try {
        const { data, error } = await supabase
          .from('solutions')
          .select(`
            *,
            solution_files (
              id,
              file_path,
              file_name,
              section
            )
          `)
          .eq('id', id)
          .single();

        if (error) throw error;
        setSolution(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSolution();
  }, [id]);

  return { solution, loading, error };
}