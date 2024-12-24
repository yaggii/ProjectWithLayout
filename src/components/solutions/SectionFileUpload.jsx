import React from 'react';
import FileUpload from './FileUpload';
import FileList from './FileList';

export default function SectionFileUpload({ 
  section, 
  files, 
  onUpload, 
  onRemove, 
  onError 
}) {
  const handleUpload = (newFiles) => {
    onUpload(section, newFiles);
  };

  const handleRemove = (file) => {
    onRemove(section, file);
  };

  return (
    <div className="space-y-2">
      <FileUpload 
        onUpload={handleUpload}
        onError={onError}
      />
      <FileList 
        files={files}
        onRemove={handleRemove}
      />
    </div>
  );
}