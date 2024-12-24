import { useState, useEffect } from 'react';
import { supabase, checkConnection, handleSupabaseError } from '../lib/supabase';

export function useRecentSolutions() {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    let retryTimeout;

    async function fetchRecentSolutions() {
      try {
        setLoading(true);
        setError(null);

        // Check connection with retry logic
        const isConnected = await checkConnection();
        if (!isConnected) {
          throw new Error('Unable to establish connection to the database');
        }

        const { data, error: fetchError } = await supabase
          .from('solutions')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(4);

        if (fetchError) throw fetchError;
        
        if (mounted) {
          setSolutions(data || []);
        }
      } catch (err) {
        console.error('Error fetching solutions:', err);
        if (mounted) {
          const errorMessage = handleSupabaseError(err);
          setError(errorMessage);
          
          // Retry connection after delay if it's a connection error
          if (err.message?.includes('Failed to fetch')) {
            retryTimeout = setTimeout(fetchRecentSolutions, 5000);
          }
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchRecentSolutions();

    return () => {
      mounted = false;
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, []);

  return { solutions, loading, error };
}