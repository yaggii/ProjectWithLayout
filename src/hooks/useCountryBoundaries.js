import { useState, useEffect } from 'react';

export function useCountryBoundaries() {
  const [boundaries, setBoundaries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBoundaries() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
        if (!response.ok) throw new Error('Failed to fetch country boundaries');
        const data = await response.json();
        setBoundaries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBoundaries();
  }, []);

  return { boundaries, loading, error };
}