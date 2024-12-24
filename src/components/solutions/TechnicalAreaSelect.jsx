import React from 'react';
import { technicalAreas } from '../../data/technicalAreas';

export default function TechnicalAreaSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
    >
      <option value="">Select a technical area</option>
      {technicalAreas.map((area) => (
        <option key={area} value={area}>
          {area}
        </option>
      ))}
    </select>
  );
}