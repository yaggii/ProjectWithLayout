import React, { useState } from 'react';
import FileDownloadLink from './FileDownloadLink';
import DocumentationNav from './DocumentationNav';

export default function SolutionFiles({ solution }) {
  const [activeSection, setActiveSection] = useState('startup');

  if (!solution.solution_files?.length) return null;

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

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-8">Adoption Guide</h2>
      <DocumentationNav 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(groupedFiles).map(([section, files]) => (
          <div key={section} className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              {section.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
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
  );
}