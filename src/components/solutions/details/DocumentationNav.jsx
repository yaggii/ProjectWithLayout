import React from 'react';

export default function DocumentationNav({ activeSection, onSectionChange }) {
  const sections = [
    { id: 'startup', label: '1. Activity Start-up & Pilot' },
    { id: 'implementation', label: '2. Implementation & Expansion' },
    { id: 'scale', label: '3. Scale & Sustainability' },
    { id: 'lessons', label: '4. Lessons Learned' },
    { id: 'adaptations', label: '5. Adaptations to Date' }
  ];

  const inactiveClasses = [
    'border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white',
    'border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-white',
    'border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
    'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
    'border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white',
  ];

  const activeClasses = [
    'bg-teal-500 text-white border-teal-500',
    'bg-lime-500 text-white border-lime-500',
    'bg-green-500 text-white border-green-500',
    'bg-orange-500 text-white border-orange-500',
    'bg-gray-500 text-white border-gray-500',
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {sections.map(({ id, label }, index) => (
        <button
          key={id}
          onClick={() => onSectionChange(id)}
          className={`px-4 py-2 rounded-3xl text-sm font-medium transition-colors border
            ${activeSection === id ? activeClasses[index] : inactiveClasses[index]}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}