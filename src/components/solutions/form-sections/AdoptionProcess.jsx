import React from 'react';
import SectionFileUpload from '../SectionFileUpload';

export default function AdoptionProcess({
  formData,
  sectionFiles,
  onChange,
  onFileUpload,
  onFileRemove,
  onError
}) {
  const sections = [
    {
      id: 'startup',
      title: '1. Activity Start-up & Pilot',
      description: 'adoption_startup',
      files: ['startup_process', 'startup_documents']
    },
    {
      id: 'implementation',
      title: '2. Implementation & Expansion',
      description: 'adoption_implementation',
      files: ['implementation_process', 'implementation_documents']
    },
    {
      id: 'scale',
      title: '3. Scale & Sustainability',
      description: 'adoption_scale',
      files: ['scale_process', 'scale_documents']
    },
    {
      id: 'lessons',
      title: '4. Lessons Learned',
      description: 'adoption_lessons',
      files: ['lessons_documents']
    },
    {
      id: 'adaptations',
      title: '5. Adaptations to Date',
      description: 'adoption_adaptations',
      files: ['adaptations_documents']
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold text-gray-900">Adoption Process</h2>

      {sections.map(section => (
        <div key={section.id} className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {section.files.length > 1 ? 'Process Description' : 'Description'}
            </label>
            <textarea
              name={section.description}
              value={formData[section.description]}
              onChange={onChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          {section.files.map(fileSection => (
            <div key={fileSection}>
              <label className="block text-sm font-medium text-gray-700">
                {fileSection.includes('process') ? 'Process Documents' : 'Phase Documents'}
              </label>
              <SectionFileUpload
                section={fileSection}
                files={sectionFiles[fileSection]}
                onUpload={onFileUpload}
                onRemove={onFileRemove}
                onError={onError}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}