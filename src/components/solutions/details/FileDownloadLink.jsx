import React, { useState } from 'react';
import { downloadFile } from '../../../lib/fileDownload';

export default function FileDownloadLink({ file }) {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);
  
  const fileUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/${file.file_path}`;

  const handleClick = async (e) => {
    e.preventDefault();
    if (downloading) return;

    try {
      setError(null);
      setDownloading(true);
      await downloadFile(fileUrl, file.file_name);
    } catch (error) {
      setError(error.message);
      console.error('Failed to download:', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="group relative">
      <a
        href={fileUrl}
        onClick={handleClick}
        className={`text-primary hover:text-primary-dark flex items-center gap-2 ${
          downloading ? 'opacity-50 cursor-wait' : ''
        } ${error ? 'text-red-600 hover:text-red-700' : ''}`}
      >
        <svg 
          className={`w-4 h-4 ${downloading ? 'animate-spin' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {downloading ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
            />
          ) : error ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"
            />
          )}
        </svg>
        {file.file_name}
      </a>
      {error && (
        <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block">
          <div className="bg-red-50 text-red-600 text-sm p-2 rounded shadow-lg">
            {error}
          </div>
        </div>
      )}
    </div>
  );
}