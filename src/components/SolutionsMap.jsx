import React from 'react';
import { useSolutionsLocations } from '../hooks/useSolutionsLocations';
import MapWrapper from './map/MapContainer';

export default function SolutionsMap() {
  const { locations, loading, error } = useSolutionsLocations();

  if (loading) {
    return (
      <div className="h-[400px] bg-gray-100 animate-pulse rounded-lg">
        <div className="h-full flex items-center justify-center text-gray-500">
          Loading map...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[400px] bg-red-50 rounded-lg">
        <div className="h-full flex items-center justify-center text-red-600">
          Error loading map: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Map */}
        <MapWrapper locations={locations} />
      </div>
    </div>
  );
}
