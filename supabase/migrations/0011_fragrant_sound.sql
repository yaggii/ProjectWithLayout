/*
  # Fix storage policies for file uploads

  1. Changes
    - Update storage policies to allow file uploads
    - Add proper folder structure support
    - Fix RLS policies
    
  2. Security
    - Maintain bucket privacy
    - Ensure proper access control
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated uploads to solution folders" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read solution files" ON storage.objects;
DROP POLICY IF EXISTS "Allow users to delete their own files" ON storage.objects;

-- Create upload policy for all solution folders
CREATE POLICY "Allow authenticated uploads to solution folders"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'solution-files' AND
  (
    (storage.foldername(name))[1] IN (
      'presentations',
      'videos',
      'startup-process',
      'startup-documents',
      'implementation-process',
      'implementation-documents',
      'scale-process',
      'scale-documents',
      'lessons-documents',
      'adaptations-documents'
    )
  )
);

-- Create read policy
CREATE POLICY "Allow authenticated users to read solution files"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'solution-files');

-- Create delete policy
CREATE POLICY "Allow users to delete their own files"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'solution-files');

-- Ensure storage bucket exists and is properly configured
DO $$
BEGIN
  INSERT INTO storage.buckets (id, name, public)
  VALUES ('solution-files', 'solution-files', false)
  ON CONFLICT (id) DO UPDATE
  SET public = false;
END $$;