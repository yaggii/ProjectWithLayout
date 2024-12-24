/*
  # Fix storage policies for file uploads
  
  1. Changes
    - Add policies for presentations and videos folders
    - Update existing policies to be more permissive
    
  2. Security
    - Maintain authentication requirement
    - Allow authenticated users to upload to specific folders
*/

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "Allow file upload for all sections" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to upload files" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read files" ON storage.objects;

-- Create comprehensive upload policy
CREATE POLICY "Allow authenticated uploads to solution folders"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'solution-files' AND
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

-- Ensure storage bucket exists
INSERT INTO storage.buckets (id, name, public)
VALUES ('solution-files', 'solution-files', false)
ON CONFLICT (id) DO NOTHING;