import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function useSolutionForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: [],
    impact: '',
    problem_description: '',
    solution_description: '',
    country: '',
    technical_area: '',
    adoption_startup: '',
    adoption_implementation: '',
    adoption_scale: '',
    adoption_lessons: '',
    adoption_adaptations: '',
    experts: '',
    presentation_file: null,
    video_file: null,
    image_file: null
  });

  const [sectionFiles, setSectionFiles] = useState({
    startup_process: [],
    startup_documents: [],
    implementation_process: [],
    implementation_documents: [],
    scale_process: [],
    scale_documents: [],
    lessons_documents: [],
    adaptations_documents: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (name, file) => {
    setFormData(prev => ({ ...prev, [name]: file }));
  };

  const handleCountryChange = (country) => {
    setFormData(prev => ({ ...prev, country }));
  };

  const handleTechnicalAreaChange = (technical_area) => {
    setFormData(prev => ({ ...prev, technical_area }));
  };

  const handleTagsChange = (tags) => {
    setFormData(prev => ({ ...prev, tags }));
  };

  const handleFileUpload = (section, newFiles) => {
    setSectionFiles(prev => ({
      ...prev,
      [section]: [...prev[section], ...newFiles]
    }));
  };

  const handleFileRemove = (section, fileToRemove) => {
    setSectionFiles(prev => ({
      ...prev,
      [section]: prev[section].filter(file => file.filePath !== fileToRemove.filePath)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('You must be logged in to submit a solution');
      }

      // Upload files
      let presentationPath = null;
      let videoPath = null;
      let imagePath = null;

      if (formData.presentation_file) {
        const { data: presData, error: presError } = await supabase.storage
          .from('solution-files')
          .upload(`presentations/${Math.random()}.${formData.presentation_file.name.split('.').pop()}`, formData.presentation_file);
        
        if (presError) throw presError;
        presentationPath = presData.path;
      }

      if (formData.video_file) {
        const { data: videoData, error: videoError } = await supabase.storage
          .from('solution-files')
          .upload(`videos/${Math.random()}.${formData.video_file.name.split('.').pop()}`, formData.video_file);
        
        if (videoError) throw videoError;
        videoPath = videoData.path;
      }

      if (formData.image_file) {
        const { data: imageData, error: imageError } = await supabase.storage
          .from('solution-files')
          .upload(`images/${Math.random()}.${formData.image_file.name.split('.').pop()}`, formData.image_file);
        
        if (imageError) throw imageError;
        imagePath = imageData.path;
      }

      // Prepare solution data
      const solutionData = {
        ...formData,
        presentation_path: presentationPath,
        video_path: videoPath,
        image_path: imagePath,
        user_id: user.id,
        owner_email: user.email // Add the user's email as owner_email
      };

      // Remove file objects as they're not needed in the database
      delete solutionData.presentation_file;
      delete solutionData.video_file;
      delete solutionData.image_file;

      // Insert solution
      const { data: solution, error: solutionError } = await supabase
        .from('solutions')
        .insert([solutionData])
        .select()
        .single();

      if (solutionError) throw solutionError;

      // Insert files
      const filePromises = Object.entries(sectionFiles).flatMap(([section, files]) =>
        files.map(file => 
          supabase
            .from('solution_files')
            .insert({
              solution_id: solution.id,
              file_path: file.filePath,
              file_name: file.fileName,
              section
            })
        )
      );

      await Promise.all(filePromises);
      
      // Navigate to home page after successful submission
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
  };
}