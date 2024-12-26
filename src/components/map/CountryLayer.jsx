import React from 'react';
import { GeoJSON } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { normalizeCountryName } from '../../utils/countryNormalization';
import { encodeUrlParam } from '../../utils/urlUtils';
import { useCountryBoundaries } from '../../hooks/useCountryBoundaries';

export default function CountryLayer({ locations }) {
  const navigate = useNavigate();
  const { boundaries, loading, error } = useCountryBoundaries();

  if (loading || error || !boundaries) return null;

  const countryStyle = {
    fillColor: '#ADD8E6', // Light blue
    fillOpacity: 0.6,
    color: '#000',
    weight: 1,
    opacity: 0.5
  };

  const defaultStyle = {
    fillOpacity: 0,
    color: '#666',
    weight: 1,
    opacity: 0.2
  };

  const onEachCountry = (feature, layer) => {
    const countryName = feature.properties.ADMIN || feature.properties.name;
    const hasSolutions = locations.some(loc => 
      normalizeCountryName(loc.country) === normalizeCountryName(countryName)
    );
    
    if (hasSolutions) {
      layer.setStyle(countryStyle);
      layer.on('click', () => {
        navigate(`/countries/${encodeUrlParam(countryName)}`);
      });
      layer.bindTooltip(`${countryName} - Click to view solutions`, { sticky: true });
    } else {
      layer.setStyle(defaultStyle);
    }
  };

  return (
    <GeoJSON
      data={boundaries}
      onEachFeature={onEachCountry}
    />
  );
}