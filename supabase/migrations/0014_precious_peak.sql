/*
  # Fix storage permissions for solution images

  1. Changes
    - Add 'images' to allowed folders in storage policy
    - Add image MIME types to allowed types
    - Update bucket configuration
  
  2. Security
    - Maintain RLS policies
    - Keep bucket public for read access
    - Restrict uploads to authenticated users
*/

-- Update bucket configuration with image MIME types
UPDATE storage.buckets
SET allowed_mime_types = array_cat(
  allowed_mime_types,
  ARRAY[
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp'
  ]
)
WHERE id = 'solution-files';

-- Drop existing upload policy
DROP POLICY IF EXISTS "Allow authenticated uploads to solution folders" ON storage.objects;

-- Create updated upload policy including images folder
CREATE POLICY "Allow authenticated uploads to solution folders"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'solution-files' AND
  (storage.foldername(name))[1] IN (
    'presentations',
    'videos',
    'images',
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

-- Add image_path column to solutions table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'image_path'
  ) THEN
    ALTER TABLE solutions ADD COLUMN image_path text;
  END IF;
END $$;