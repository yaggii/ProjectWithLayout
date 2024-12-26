import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake } from 'lucide-react';

export default function SolutionCard({ solution }) {
  const imageUrl = solution.image_path 
    ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/${solution.image_path}`
    : `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/images/placeholder.jpg`;

  return (
    <div>

      <Link
        to={`/solutions/${solution.id}`}
        className="block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="relative w-[340px] h-[340px]">
          <img
            src={imageUrl}
            alt={solution.title}
            className="absolute inset-0 w-[340px] h-[340px] object-cover"
          />
          <div className="absolute bottom-[40px] left-[25px] px-3 py-1 text-sm font-medium text-primary bg-white/80 backdrop-blur-sm rounded-full flex items-center gap-2">
            <Handshake className="w-4 h-4 flex-shrink-0" />
            <span className="max-w-[200px] whitespace-normal overflow-wrap-anywhere break-words">{solution.technical_area}</span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 line-clamp-2">{solution.title}</h3>
        <p className="mb-4 font-medium text-xl line-clamp-3">{solution.country}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{solution.description}</p>
      </div>
    </div>
  );
}