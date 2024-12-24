import React from 'react';

export default function SingleFileUpload({ accept, onChange, currentFile }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
    }
  };

  const handleRemove = () => {
    onChange(null);
  };

  return (
    <div className="mt-1 space-y-2">
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-primary file:text-white
          hover:file:bg-primary/90"
      />
      {currentFile && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{currentFile.name}</span>
          <button
            type="button"
            onClick={handleRemove}
            className="text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}