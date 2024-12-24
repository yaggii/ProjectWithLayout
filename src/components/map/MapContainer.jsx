import React, { useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import CountryLayer from './CountryLayer';
import Legend from './Legend';
import { getCountryBounds } from '../../utils/coordinates';
import 'leaflet/dist/leaflet.css';

// Component to handle map operations
function MapController({ country }) {
  const map = useMap();
  
  React.useEffect(() => {
    if (country) {
      const bounds = getCountryBounds(country);
      if (bounds) {
        map.flyToBounds(bounds, {
          padding: [50, 50],
          duration: 1.5,
          easeLinearity: 0.25
        });
      }
    }
  }, [country, map]);

  return null;
}

export default function MapWrapper({ locations }) {
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  return (
    
    
    <div className="p-6">
      {/* Title and Statistics Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <div>
          <h3 className="text-lg text-lime-600 uppercase tracking-wider mb-2">View</h3>
          <p className="text-4xl font-semibold text-gray-900">By Country</p>
        </div>

        {/* Statistics Section */}
        <div className="flex gap-4">
          <div className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-center">
            {locations.length} Solutions
          </div>
          <div className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-center">
            {locations.length} Projects
          </div>
          <div className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-center">
          {new Set(locations.map(location => location.country)).size} Countries
          </div>
          <div className="bg-lime-200 text-lime-800 px-3 py-1 rounded-full text-center">
            2 Technical Areas
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
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
              maxZoom: 8,
            }}
          />
          <CountryLayer locations={locations} />
          <MapController country={selectedCountry} />
        </MapContainer>
      </div>
    </div>
  );
}