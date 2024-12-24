import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake } from 'lucide-react';

export default function SolutionCard({ solution }) {
  const imageUrl = solution.image_path 
    ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/${solution.image_path}`
    : `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/images/placeholder.jpg`;

  return (
    <Link
      to={`/solutions/${solution.id}`}
      className="block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >

      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={solution.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[10px] left-[25px] px-3 py-1 text-sm font-medium text-primary bg-white/80 backdrop-blur-sm rounded-full flex items-center gap-2">
          <Handshake className="w-4 h-4" />
          {solution.technical_area}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{solution.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{solution.description}</p>
        <div className="text-sm text-gray-500">
          {solution.country}
        </div>
      </div>

      
    </Link>
  );
}