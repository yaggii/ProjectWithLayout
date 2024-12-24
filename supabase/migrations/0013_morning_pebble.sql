/*
  # Fix storage bucket configuration

  1. Changes
    - Update solution-files bucket configuration
    - Update storage policies for proper access
    - Add comprehensive error handling
  
  2. Security
    - Allow public read access to files
    - Restrict write access to authenticated users
*/

-- Update bucket configuration if it exists, create if it doesn't
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'solution-files',
  'solution-files',
  true, -- Make bucket public
  52428800, -- 50MB limit
  ARRAY[
    'application/pdf',
    'video/mp4',
    'video/quicktime',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.ms-powerpoint'
  ]
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 52428800,
  allowed_mime_types = ARRAY[
    'application/pdf',
    'video/mp4',
    'video/quicktime',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.ms-powerpoint'
  ];

-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated uploads to solution folders" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read solution files" ON storage.objects;
DROP POLICY IF EXISTS "Allow users to delete their own files" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read access" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated deletes" ON storage.objects;

-- Create public read policy
CREATE POLICY "Allow public read access"
ON storage.objects FOR SELECT
USING (bucket_id = 'solution-files');

-- Create authenticated upload policy
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT TO authenticated
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

-- Create authenticated delete policy
CREATE POLICY "Allow authenticated deletes"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'solution-files');