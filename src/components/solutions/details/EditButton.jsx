import React from 'react';
import { Link } from 'react-router-dom';

export default function EditButton({ solutionId, isOwner }) {
  if (!isOwner) return null;

  return (
    <Link
      to={`/solutions/${solutionId}/edit`}
      className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
      Edit Solution
    </Link>
  );
}