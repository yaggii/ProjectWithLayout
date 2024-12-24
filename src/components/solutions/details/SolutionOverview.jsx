import React from 'react';
import VideoPlayer from './VideoPlayer';
import { Search, Lightbulb, Globe2, Settings } from 'lucide-react';

export default function SolutionOverview({ solution }) {
  return (
    <div className="bg-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Overview</h2>
        <a
          href="#"
          className="text-orange-500 border border-orange-500 rounded-full px-4 py-2 hover:bg-orange-50"
        >
          View full presentation
        </a>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6 space-y-8">
          <div className="flex gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <Search size={48} className="text-orange-500" />
            </div>
            <div>
              <h3 className="text-orange-500 font-medium mb-2">Problem description</h3>
              <p className="text-gray-600">{solution.problem_description}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <Lightbulb size={48} className="text-orange-500" />
            </div>
            <div>
              <h3 className="text-orange-500 font-medium mb-2">Solution description</h3>
              <p className="text-gray-600">{solution.solution_description}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <Globe2 size={48} className="text-orange-500" />
            </div>
            <div>
              <h3 className="text-orange-500 font-medium mb-2">Impact</h3>
              <p className="text-gray-600">{solution.impact}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <Settings size={48} className="text-orange-500" />
            </div>
            <div>
              <h3 className="text-orange-500 font-medium mb-2">Experts</h3>
              <p className="text-gray-600">{solution.experts}</p>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <img src={solution.diagram_url} alt="Solution diagram" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}