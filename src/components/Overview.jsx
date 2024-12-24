import React from 'react';

export default function Overview({ solution }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-2xl font-bold">Overview</h2>
        {solution?.presentation_path && (
          <a
            href={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/${solution.presentation_path}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark"
          >
            View full presentation
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Problem description</h3>
            <p className="text-gray-600">{solution?.problem_description}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Solution description</h3>
            <p className="text-gray-600">{solution?.solution_description}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Impact</h3>
            <p className="text-gray-600">{solution?.impact}</p>
          </div>
        </div>
        
        {solution?.video_path && (
          <div className="aspect-w-16 aspect-h-9">
            <video
              controls
              className="rounded-lg shadow-md w-full h-full object-cover"
            >
              <source 
                src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/${solution.video_path}`} 
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}