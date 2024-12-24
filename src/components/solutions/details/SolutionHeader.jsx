import React from 'react';
import { useAuth } from '../../../lib/AuthContext';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import SolutionImage from './SolutionImage';

export default function SolutionHeader({ solution }) {
  const { user } = useAuth();
  const tags = [solution.country, solution.technical_area, ...(solution.tags || [])];
  const isOwner = user?.email === solution.owner_email;

  return (
    <div className="relative">
      <SolutionImage imagePath={solution.image_path} />
      
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-start mb-4">
            {/* <h2 className="text-orange-500 font-semibold">SOLUTION</h2>
            <div className="flex items-center gap-4">
              <span className={`text-sm font-medium ${isOwner ? 'text-green-400' : 'text-red-400'}`}>
                Owner: {solution.owner_email}
              </span>
              <div className="flex gap-2">
                <EditButton solutionId={solution.id} isOwner={isOwner} />
                <DeleteButton solution={solution} isOwner={isOwner} />
              </div>
            </div> */}
          </div>
          
          <h3 className="text-3xl font-bold mb-4 text-white">{solution.title}</h3>
          
          {/* <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-white/10 text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div> */}
          
          {/* <p className="text-gray-200">{solution.description}</p> */}
        </div>
      </div>
    </div>
  );
}