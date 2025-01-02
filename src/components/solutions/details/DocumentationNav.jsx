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
    'border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white',
    'border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white',
    'border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white',
    'border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white',
    'border-[#4c4e4c] text-[#4c4e4c] hover:bg-[#4c4e4c] hover:text-white',
  ];

  const activeClasses = [
    'bg-rose-500 text-white border-rose-500',
    'bg-emerald-700 text-white border-emerald-700',
    'bg-teal-700 text-white border-teal-700',
    'bg-slate-600 text-white border-slate-600',
    'bg-[#4c4e4c] text-white border-[#4c4e4c]',
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