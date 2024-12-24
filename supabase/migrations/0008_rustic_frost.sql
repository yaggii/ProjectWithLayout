/*
  # Add file path columns to solutions table
  
  1. Changes
    - Add presentation_path column
    - Add video_path column
    
  2. Security
    - No changes to existing policies needed
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'presentation_path'
  ) THEN
    ALTER TABLE solutions ADD COLUMN presentation_path text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'video_path'
  ) THEN
    ALTER TABLE solutions ADD COLUMN video_path text;
  END IF;
END $$;