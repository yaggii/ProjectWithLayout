import React, { useState } from 'react';
import { downloadFile } from '../../../lib/fileDownload';
import { FileIcon, defaultStyles } from 'react-file-icon';

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

  const getFileProps = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    
    const typeConfig = {
      pdf: { color: '#FF0000', type: 'acrobat' },
      doc: { color: '#2B579A', type: 'document' },
      docx: { color: '#2B579A', type: 'document' },
      xls: { color: '#217346', type: 'spreadsheet' },
      xlsx: { color: '#217346', type: 'spreadsheet' },
      csv: { color: '#217346', type: 'spreadsheet' },
      zip: { color: '#FDB900', type: 'compressed' },
      rar: { color: '#FDB900', type: 'compressed' },
      jpg: { color: '#DD4B4B', type: 'image' },
      jpeg: { color: '#DD4B4B', type: 'image' },
      png: { color: '#DD4B4B', type: 'image' },
      default: { color: '#95A5A6', type: 'document' }
    };

    return {
      extension: ext,
      ...(defaultStyles[ext] || defaultStyles.default)
    };
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
        <div className="w-5 h-5">
          <FileIcon {...getFileProps(file.file_name)} />
        </div>
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