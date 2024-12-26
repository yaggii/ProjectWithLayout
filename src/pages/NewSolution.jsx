import React from 'react';
import SolutionForm from '../components/solutions/SolutionForm';

export default function NewSolution() {
  return (

    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Submit New Solution</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <footer className="space-y-4">
            <SolutionForm />
          </footer>
        </div>
      </div>
    </div>

    // <div className="max-w-3xl mx-auto px-4 py-12">
    //   <h1 className="text-3xl font-bold mb-8">Submit New Solution</h1>
    //   <div className="bg-white shadow rounded-lg p-6">
    //     <SolutionForm />
    //   </div>
    // </div>
  );
}