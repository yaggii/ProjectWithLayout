import React from 'react';

export default function LoadingSpinner({ message }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">{message}</p>
    </div>
  );
}