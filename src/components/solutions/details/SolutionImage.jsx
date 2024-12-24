import React from 'react';

export default function SolutionImage({ imagePath }) {
  const imageUrl = imagePath 
    ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/${imagePath}`
    : `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/images/placeholder.jpg`;

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <img
        src={imageUrl}
        alt="Solution"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}