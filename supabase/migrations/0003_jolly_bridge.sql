/*
  # Add technical and adoption fields to solutions table

  1. Changes
    - Add technical_area field
    - Add adoption fields for different stages
    - All fields are optional text fields to allow detailed descriptions
*/

DO $$ 
BEGIN
  -- Add technical_area field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'technical_area'
  ) THEN
    ALTER TABLE solutions ADD COLUMN technical_area text;
  END IF;

  -- Add adoption fields
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'adoption_startup'
  ) THEN
    ALTER TABLE solutions ADD COLUMN adoption_startup text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'adoption_implementation'
  ) THEN
    ALTER TABLE solutions ADD COLUMN adoption_implementation text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'adoption_scale'
  ) THEN
    ALTER TABLE solutions ADD COLUMN adoption_scale text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'adoption_lessons'
  ) THEN
    ALTER TABLE solutions ADD COLUMN adoption_lessons text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'adoption_adaptations'
  ) THEN
    ALTER TABLE solutions ADD COLUMN adoption_adaptations text;
  END IF;
END $$;