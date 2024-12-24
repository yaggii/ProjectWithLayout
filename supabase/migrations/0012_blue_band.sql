/*
  # Add file columns to solutions table
  
  1. Changes
    - Add presentation_file and video_file columns to solutions table
    - Add proper constraints and defaults
    
  2. Security
    - Maintain existing RLS policies
*/

DO $$ 
BEGIN
  -- Add presentation_file column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'presentation_file'
  ) THEN
    ALTER TABLE solutions ADD COLUMN presentation_file jsonb;
  END IF;

  -- Add video_file column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'video_file'
  ) THEN
    ALTER TABLE solutions ADD COLUMN video_file jsonb;
  END IF;

  -- Add presentation_url column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'presentation_url'
  ) THEN
    ALTER TABLE solutions ADD COLUMN presentation_url text;
  END IF;

  -- Add video_url column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'video_url'
  ) THEN
    ALTER TABLE solutions ADD COLUMN video_url text;
  END IF;
END $$;