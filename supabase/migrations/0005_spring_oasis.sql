/*
  # Add startup process files support
  
  1. New Tables
    - `startup_process_files`
      - `id` (uuid, primary key)
      - `solution_id` (uuid, references solutions)
      - `file_path` (text)
      - `file_name` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Add policies for file access
*/

CREATE TABLE startup_process_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  solution_id uuid REFERENCES solutions(id) ON DELETE CASCADE,
  file_path text NOT NULL,
  file_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE startup_process_files ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all startup files"
  ON startup_process_files
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can upload files for their solutions"
  ON startup_process_files
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM solutions 
      WHERE id = solution_id 
      AND user_id = auth.uid()
    )
  );