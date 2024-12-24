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
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          {error}
        </div>
      )}

      <BasicInformation
        formData={formData}
        onChange={handleChange}
        onCountryChange={handleCountryChange}
        onTechnicalAreaChange={handleTechnicalAreaChange}
        onTagsChange={handleTagsChange}
        onFileChange={handleFileChange}
      />

      <ProblemSolution
        formData={formData}
        onChange={handleChange}
      />

      <AdoptionProcess
        formData={formData}
        sectionFiles={sectionFiles}
        onChange={handleChange}
        onFileUpload={handleFileUpload}
        onFileRemove={handleFileRemove}
        onError={setError}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Solution'}
      </button>
    </form>
  );
}