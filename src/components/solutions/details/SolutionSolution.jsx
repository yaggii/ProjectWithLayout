import React from 'react';
import VideoPlayer from './VideoPlayer';

export default function SolutionOverview({ solution }) {

  const tags = [solution.country, solution.technical_area, ...(solution.tags || [])];

  return (
    <div className="flex gap-8">
      <div className="w-7/12">
        <div className="text-orange-500 font-medium mb-2">SOLUTION</div>
        <h2 className="text-4xl font-semibold mb-4">{solution.title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => {
            const getColorClass = (index) => {
              const colors = [
                'border-teal-500 text-teal-600',
                'border-lime-500 text-lime-600',
                'border-green-500 text-green-600',
                'border-orange-500 text-orange-600',
                'border-gray-500 text-gray-600'
              ];
              return colors[index % colors.length];
            };

            return (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm border ${getColorClass(index)}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <p className="text-gray-600 text-lg">
          {solution.description}
        </p>
      </div>
      <div className="w-5/12">
        <VideoPlayer videoPath={solution.video_path} />
      </div>

      {/* <div className="relative">
        <div className="bg-gray-100 rounded-lg p-4 mt-12">
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full rounded"
              src="https://www.youtube.com/embed/Y9mzcelmrys"
              title="SMART Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div> */}


      {/* <div className="flex justify-between items-start mb-8">
        <h2 className="font-montserrat font-semibold text-[39.8px]">Overview</h2>
        {solution.presentation_path && (
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
            <p className="text-gray-600">{solution.problem_description}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Solution description</h3>
            <p className="text-gray-600">{solution.solution_description}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Impact</h3>
            <p className="text-gray-600">{solution.impact}</p>
          </div>

          {solution.experts && (
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Experts</h3>
              <p className="text-gray-600">{solution.experts}</p>
            </div>
          )}
        </div>
        
        <VideoPlayer videoPath={solution.video_path} />
      </div> */}
    </div>
  );
}