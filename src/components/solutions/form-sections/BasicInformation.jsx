import React from 'react';
import CountrySelect from '../CountrySelect';
import TechnicalAreaSelect from '../TechnicalAreaSelect';
import TagInput from '../TagInput';
import SingleFileUpload from '../SingleFileUpload';

export default function BasicInformation({
  formData,
  onChange,
  onCountryChange,
  onTechnicalAreaChange,
  onTagsChange,
  onFileChange
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Basic Information</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Solution Image</label>
        <SingleFileUpload
          accept="image/*"
          onChange={(file) => onFileChange('image_file', file)}
          currentFile={formData.image_file}
        />
        <p className="mt-1 text-sm text-gray-500">Upload a representative image for your solution (PNG or JPG)</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <CountrySelect
          value={formData.country}
          onChange={onCountryChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Technical Area</label>
        <TechnicalAreaSelect
          value={formData.technical_area}
          onChange={onTechnicalAreaChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          required
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <TagInput
          tags={formData.tags}
          onChange={onTagsChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Presentation</label>
        <SingleFileUpload
          accept=".ppt,.pptx"
          onChange={(file) => onFileChange('presentation_file', file)}
          currentFile={formData.presentation_file}
        />
        <p className="mt-1 text-sm text-gray-500">Upload a PowerPoint presentation (PPT or PPTX)</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Video</label>
        <SingleFileUpload
          accept="video/*"
          onChange={(file) => onFileChange('video_file', file)}
          currentFile={formData.video_file}
        />
        <p className="mt-1 text-sm text-gray-500">Upload a video file (MP4 recommended)</p>
      </div>
    </div>
  );
}