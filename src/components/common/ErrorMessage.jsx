import React from 'react';

export default function ErrorMessage({ message }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-red-50 text-red-600 p-4 rounded-md">
        {message}
      </div>
    </div>
  );
}