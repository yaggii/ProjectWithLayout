import React, { useState } from 'react';
import FileDownloadLink from './FileDownloadLink';
import DocumentationNav from './DocumentationNav';

export default function SolutionFiles({ solution }) {
  const [activeSection, setActiveSection] = useState('startup');

  if (!solution.solution_files?.length) return null;

  // Section navigation
  const sections = [
    { id: 'startup', label: 'Activity Start-up & Pilot' },
    { id: 'implementation', label: 'Implementation & Expansion' },
    { id: 'scale', label: 'Scale & Sustainability' },
    { id: 'lessons', label: 'Lessons Learned' },
    { id: 'adaptations', label: 'Adaptations to Date' }
  ];

  // Map section IDs to their corresponding file section prefixes
  const sectionPrefixes = {
    startup: ['startup_process', 'startup_documents'],
    implementation: ['implementation_process', 'implementation_documents'],
    scale: ['scale_process', 'scale_documents'],
    lessons: ['lessons_documents'],
    adaptations: ['adaptations_documents']
  };

  // Filter files based on active section
  const filteredFiles = solution.solution_files.filter(file => 
    sectionPrefixes[activeSection].includes(file.section)
  );

  // Group filtered files by section
  const groupedFiles = filteredFiles.reduce((acc, file) => {
    if (!acc[file.section]) {
      acc[file.section] = [];
    }
    acc[file.section].push(file);
    return acc;
  }, {});

  // Section Navigation Title
  const getSectionNavigationTitle = (id) => {
    return sections.find(section => section.id === id).label;
  }

  // File section title
  const getSectionTitle = (sectionId) => {
    if (sectionId.toLowerCase().includes('process')) {
      return 'Process';
    }
    if (sectionId.toLowerCase().includes('documents')) {
      return 'Phase Documents';
    }
    return sectionId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  // Get active section color
  const getActiveSectionColor = (activeSection) => {
    const sectionIndex = sections.findIndex(section => section.id === activeSection);
    const colors = ['rose-500', 'emerald-700', 'teal-700', 'slate-600', '[#4c4e4c]'];
    return colors[sectionIndex] || 'gray';
  };

  return (
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-4xl font-semibold mb-8">Adoption Guide</h2>
      <DocumentationNav 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <div className="rounded-[30px] border border-black/20 border-[0.5px] shadow-[0_10px_10px_rgba(0,0,0,0.2)] p-6">
        {getSectionNavigationTitle(activeSection) && (
          <div className="prose max-w-none">
            <p className={`text-2xl font-semibold text-${getActiveSectionColor(activeSection)}`}>
              {getSectionNavigationTitle(activeSection)}
            </p>
          </div>
        )}
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedFiles)
            .sort(([sectionA], [sectionB]) => {
              if (sectionA.toLowerCase().includes('process')) return -1;
              if (sectionB.toLowerCase().includes('process')) return 1;
              return 0;
            })
            .map(([section, files]) => (
              <div key={section} className="space-y-4">
                <h3 className="text-2xl font-normal text-[#4e4c4e]">
                  {getSectionTitle(section)}
                </h3>
                <ul className="space-y-2">
                  {files.map((file) => (
                    <li key={file.id}>
                      <FileDownloadLink file={file} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}