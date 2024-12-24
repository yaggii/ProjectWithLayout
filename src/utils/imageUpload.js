import { supabase } from '../lib/supabase';

export async function uploadImage(file, folder = 'images') {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('solution-files')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    return {
      path: filePath,
      url: `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/${filePath}`
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}