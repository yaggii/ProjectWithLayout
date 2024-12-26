import React from 'react';
import BasicInformation from './form-sections/BasicInformation';
import ProblemSolution from './form-sections/ProblemSolution';
import AdoptionProcess from './form-sections/AdoptionProcess';
import { useSolutionForm } from '../../hooks/useSolutionForm';

export default function SolutionForm() {
  const {
    formData,
    sectionFiles,
    isSubmitting,
    error,
    handleSubmit,
    handleChange,
    handleFileChange,
    handleCountryChange,
    handleTechnicalAreaChange,
    handleTagsChange,
    handleFileUpload,
    handleFileRemove,
    setError
  } = useSolutionForm();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">Submit New Solution</h1>
        <p className="text-gray-600">Share your innovative solution to enhance impact and sustainability.</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-12 mt-8">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md">
            {error}
          </div>
        )}

        {/* Basic Information Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">Basic Information</h2>
          <p className="text-gray-500">Provide general details about your solution.</p>
          <BasicInformation
            formData={formData}
            onChange={handleChange}
            onCountryChange={handleCountryChange}
            onTechnicalAreaChange={handleTechnicalAreaChange}
            onTagsChange={handleTagsChange}
            onFileChange={handleFileChange}
          />
        </section>

        {/* Problem and Solution Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">Problem and Solution</h2>
          <p className="text-gray-500">Describe the problem your solution addresses and its impact.</p>
          <ProblemSolution
            formData={formData}
            onChange={handleChange}
          />
        </section>

        {/* Adoption Process Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">Adoption Process</h2>
          <p className="text-gray-500">Outline the stages of adoption and upload relevant documents for each stage.</p>
          <AdoptionProcess
            formData={formData}
            sectionFiles={sectionFiles}
            onChange={handleChange}
            onFileUpload={handleFileUpload}
            onFileRemove={handleFileRemove}
            onError={setError}
          />
        </section>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full max-w-xs py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Solution'}
          </button>
        </div>
      </form>
    </div>
  );
}
