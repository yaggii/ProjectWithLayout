import React, { useState } from 'react';
import { uploadFile } from '../../lib/storage';

export default function FileUpload({ onUpload, onError }) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    try {
      setUploading(true);
      const files = Array.from(e.target.files);
      
      const uploadPromises = files.map(file => 
        uploadFile(file, 'startup-process')
      );

      const results = await Promise.all(uploadPromises);
      onUpload(results);
    } catch (error) {
      onError(error.message);
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mt-1">
      <input
        type="file"
        accept=".pdf"
        multiple
        onChange={handleFileChange}
        disabled={uploading}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-primary file:text-white
          hover:file:bg-primary/90"
      />
      {uploading && (
        <p className="mt-2 text-sm text-gray-500">Uploading files...</p>
      )}
    </div>
  );
}