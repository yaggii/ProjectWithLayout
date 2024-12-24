import React from 'react';

export default function FileList({ files, onRemove }) {
  if (!files.length) return null;

  return (
    <ul className="mt-2 divide-y divide-gray-200">
      {files.map((file, index) => (
        <li key={index} className="py-2 flex justify-between items-center">
          <span className="text-sm text-gray-600">{file.fileName}</span>
          {onRemove && (
            <button
              onClick={() => onRemove(file)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}