import React from 'react';
import { technicalAreaImages } from '../../data/technicalAreaImages';

export default function TechnicalAreaHeader({ area }) {
  const { image, alt } = technicalAreaImages[area] || {
    image: '/images/placeholder.jpg',
    alt: 'Placeholder image'
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{area}</h1>
        </div>
      </div>
    </div>
  );
}