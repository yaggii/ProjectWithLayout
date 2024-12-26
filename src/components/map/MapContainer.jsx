import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import CountryLayer from './CountryLayer';
import Legend from './Legend';
import { getCountryBounds } from '../../utils/coordinates';
import 'leaflet/dist/leaflet.css';

// Component to handle map operations
function MapController({ country }) {
  const map = useMap();
  const worldBounds = [[60, -170], [-60, 170]]; // Reasonable world bounds
  const animationDuration = 1.5;
  const resetTimeoutRef = useRef(null);
  
  useEffect(() => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    if (country) {
      const bounds = getCountryBounds(country);
      if (bounds) {
        map.flyToBounds(bounds, {
          padding: [50, 50],
          duration: animationDuration,
          easeLinearity: 0.25
        });

        resetTimeoutRef.current = setTimeout(() => {
          map.flyToBounds(worldBounds, {
            padding: [50, 50],
            duration: animationDuration,
            easeLinearity: 0.25
          });
        }, 5000);
      }
    } else {
      map.flyToBounds(worldBounds, {
        padding: [50, 50],
        duration: animationDuration,
        easeLinearity: 0.25
      });
    }

    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, [country, map]);

  return null;
}

export default function MapWrapper({ locations }) {
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  return (
    
    
    <div>
      {/* Title and Statistics Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <div>
          <h3 className="text-lg text-lime-600 uppercase tracking-wider mb-2">View</h3>
          <p className="text-4xl font-semibold text-gray-900">By Country</p>
        </div>

        {/* Statistics Section */}
        <div className="flex gap-4">
          <div className="bg-orange-600 text-white font-semibold px-3 py-1 rounded-full text-center">
            {locations.length} Solutions
          </div>
          <div className="bg-yellow-600 text-white font-semibold px-3 py-1 rounded-full text-center">
            {locations.length} Projects
          </div>
          <div className="bg-green-600 text-white font-semibold px-3 py-1 rounded-full text-center">
          {new Set(locations.map(location => location.country)).size} Countries
          </div>
          <div className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-full text-center">
            2 Technical Areas
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-xl">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          className="h-full w-full"
          minZoom={2}
          maxZoom={8}
          zoomControl={true}
          scrollWheelZoom={true}
          attributionControl={true}
          preferCanvas={true}
          tap={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            language="en"
            tileLayer={{
              language: 'en',
              subdomains: 'abc',
              minZoom: 2,
              maxZoom: 8
            }}
          />
          <CountryLayer locations={locations} />
          <MapController country={selectedCountry} />
        </MapContainer>
        <Legend 
          locations={locations} 
          onCountrySelect={setSelectedCountry}
        />
      </div>
    </div>
  );
}