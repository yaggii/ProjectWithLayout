import React from 'react';
import { Link } from 'react-router-dom';
import { technicalAreaImages } from '../data/technicalAreaImages';

export default function TechnicalAreaCard({ area }) {
  const { image, alt } = technicalAreaImages[area] || {
    image: '/images/placeholder.jpg',
    alt: 'Placeholder image'
  };

  return (
    <Link
      to={`/technical-areas/${encodeURIComponent(area)}`}
      className="block w-[320px] h-[320px] relative rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <h3 className="absolute left-[48px] top-[223px] text-white font-bold text-xl">
          {area}
        </h3>
      </div>
    </Link>
  );
}