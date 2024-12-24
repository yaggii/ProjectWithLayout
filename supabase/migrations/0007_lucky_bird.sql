/*
  # Add solution files tables and storage policies

  1. New Tables
    - `solution_files`
      - `id` (uuid, primary key)
      - `solution_id` (uuid, references solutions)
      - `file_path` (text)
      - `file_name` (text)
      - `section` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on solution_files table
    - Add policies for authenticated users to manage their files
*/

-- Create solution files table
CREATE TABLE solution_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  solution_id uuid REFERENCES solutions(id) ON DELETE CASCADE,
  file_path text NOT NULL,
  file_name text NOT NULL,
  section text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE solution_files ENABLE ROW LEVEL SECURITY;

-- Policies for solution_files
CREATE POLICY "Users can read all solution files"
  ON solution_files
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can upload files for their solutions"
  ON solution_files
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM solutions 
      WHERE id = solution_id 
      AND user_id = auth.uid()
    )
  );

-- Update storage policies for all sections
CREATE POLICY "Allow file upload for all sections"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'solution-files' AND
  (storage.foldername(name))[1] IN (
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