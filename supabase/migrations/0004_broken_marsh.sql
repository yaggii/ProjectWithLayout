/*
  # Add experts field to solutions table

  1. Changes
    - Add experts field to store information about subject matter experts
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'experts'
  ) THEN
    ALTER TABLE solutions ADD COLUMN experts text;
  END IF;
END $$;