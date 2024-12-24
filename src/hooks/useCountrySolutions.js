import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useCountrySolutions(country) {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSolutions() {
      try {
        const { data, error: fetchError } = await supabase
          .from('solutions')
          .select('*')
          .eq('country', country)
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;
        setSolutions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (country) {
      fetchSolutions();
    }
  }, [country]);

  return { solutions, loading, error };
}