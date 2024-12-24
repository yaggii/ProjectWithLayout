import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function useEditSolution(solution) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: solution.title || '',
    description: solution.description || '',
    tags: solution.tags || [],
    impact: solution.impact || '',
    problem_description: solution.problem_description || '',
    solution_description: solution.solution_description || '',
    country: solution.country || '',
    technical_area: solution.technical_area || '',
    adoption_startup: solution.adoption_startup || '',
    adoption_implementation: solution.adoption_implementation || '',
    adoption_scale: solution.adoption_scale || '',
    adoption_lessons: solution.adoption_lessons || '',
    adoption_adaptations: solution.adoption_adaptations || '',
    experts: solution.experts || '',
    presentation_file: null,
    video_file: null,
    image_file: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user || user.email !== solution.owner_email) {
        throw new Error('You are not authorized to edit this solution');
      }

      // Handle file uploads if new files are provided
      let updates = { ...formData };
      
      if (formData.presentation_file) {
        const { data: presData, error: presError } = await supabase.storage
          .from('solution-files')
          .upload(`presentations/${Math.random()}.${formData.presentation_file.name.split('.').pop()}`, formData.presentation_file);
        
        if (presError) throw presError;
        updates.presentation_path = presData.path;
      }

      if (formData.video_file) {
        const { data: videoData, error: videoError } = await supabase.storage
          .from('solution-files')
          .upload(`videos/${Math.random()}.${formData.video_file.name.split('.').pop()}`, formData.video_file);
        
        if (videoError) throw videoError;
        updates.video_path = videoData.path;
      }

      if (formData.image_file) {
        const { data: imageData, error: imageError } = await supabase.storage
          .from('solution-files')
          .upload(`images/${Math.random()}.${formData.image_file.name.split('.').pop()}`, formData.image_file);
        
        if (imageError) throw imageError;
        updates.image_path = imageData.path;
      }

      // Remove file objects from updates
      delete updates.presentation_file;
      delete updates.video_file;
      delete updates.image_file;

      // Update solution
      const { error: updateError } = await supabase
        .from('solutions')
        .update(updates)
        .eq('id', solution.id);

      if (updateError) throw updateError;
      
      navigate(`/solutions/${solution.id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    setFormData,
    handleSubmit,
    setError
  };
}