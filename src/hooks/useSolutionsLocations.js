import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { getCountryCoordinates } from '../utils/coordinates';

export function useSolutionsLocations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const { data, error } = await supabase
          .from('solutions')
          .select('id, title, country')
          .order('created_at', { ascending: false });

        if (error) throw error;

        // Add coordinates for each solution based on country
        const locationsWithCoordinates = data.map(solution => {
          const coordinates = getCountryCoordinates(solution.country);
          return {
            ...solution,
            ...coordinates
          };
        });

        setLocations(locationsWithCoordinates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLocations();
  }, []);

  return { locations, loading, error };
}