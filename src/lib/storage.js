import { supabase } from './supabase';

export async function uploadFile(file, section) {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${section}/${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('solution-files')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) throw uploadError;

    return {
      filePath,
      fileName: file.name,
      url: data.path
    };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}