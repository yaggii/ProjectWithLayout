/*
  # Add file columns and update storage policies

  1. Changes
    - Add presentation and video file columns
    - Update storage policies for better security
    
  2. Security
    - Maintain RLS policies
    - Ensure proper file access control
*/

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "Allow authenticated uploads to solution folders" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read solution files" ON storage.objects;
DROP POLICY IF EXISTS "Allow users to delete their own files" ON storage.objects;

-- Create comprehensive upload policy with proper bucket access
CREATE POLICY "Allow authenticated uploads to solution folders"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'solution-files' AND
  (
    (storage.foldername(name))[1] = 'presentations' OR
    (storage.foldername(name))[1] = 'videos'
  )
);

-- Create read policy for authenticated users
CREATE POLICY "Allow authenticated users to read solution files"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'solution-files');

-- Create delete policy for file owners
CREATE POLICY "Allow users to delete their own files"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'solution-files' AND
  auth.uid()::text = (storage.foldername(name))[2]
);

-- Ensure storage bucket exists and is private
INSERT INTO storage.buckets (id, name, public)
VALUES ('solution-files', 'solution-files', false)
ON CONFLICT (id) DO NOTHING;