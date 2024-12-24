import React from 'react';

export default function Solution({ solution }) {
  const tags = solution ? [
    solution.country,
    solution.technical_area,
    ...(solution.tags || [])
  ] : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-orange-500 font-semibold mb-4">SOLUTION</h2>
        <h3 className="text-3xl font-bold mb-4">{solution?.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600">
          {solution?.description}
        </p>
      </div>
    </div>
  );
}