import React from 'react';
import SolutionsList from '../components/solutions/SolutionsList';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Solutions Dashboard</h1>
      </div>
      <SolutionsList />
    </div>
  );
}