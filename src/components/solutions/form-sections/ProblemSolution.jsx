import React from 'react';

export default function ProblemSolution({ formData, onChange }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Problem and Solution</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Problem Description</label>
        <textarea
          name="problem_description"
          value={formData.problem_description}
          onChange={onChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Solution Description</label>
        <textarea
          name="solution_description"
          value={formData.solution_description}
          onChange={onChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Impact</label>
        <textarea
          name="impact"
          value={formData.impact}
          onChange={onChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Experts</label>
        <textarea
          name="experts"
          value={formData.experts}
          onChange={onChange}
          rows={4}
          placeholder="List the experts involved in this solution"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>
    </div>
  );
}