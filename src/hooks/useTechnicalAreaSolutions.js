import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useTechnicalAreaSolutions(area) {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSolutions() {
      try {
        const { data, error } = await supabase
          .from('solutions')
          .select('*')
          .eq('technical_area', area)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setSolutions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (area) {
      fetchSolutions();
    }
  }, [area]);

  return { solutions, loading, error };
}