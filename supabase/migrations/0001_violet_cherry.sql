/*
  # Create solutions table

  1. New Tables
    - `solutions`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `description` (text, required)
      - `tags` (text array)
      - `impact` (text)
      - `problem_description` (text)
      - `solution_description` (text)
      - `created_at` (timestamp with timezone)
      - `user_id` (uuid, foreign key to auth.users)

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE solutions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  tags text[] DEFAULT '{}',
  impact text,
  problem_description text,
  solution_description text,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE solutions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all solutions"
  ON solutions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert their own solutions"
  ON solutions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own solutions"
  ON solutions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);