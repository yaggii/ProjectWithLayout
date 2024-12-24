/*
  # Add country field to solutions table

  1. Changes
    - Add required `country` column to `solutions` table
    - Add check constraint to ensure country is not empty

  2. Notes
    - Uses DO block for safe column addition
    - Adds NOT NULL constraint to ensure data integrity
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'country'
  ) THEN
    ALTER TABLE solutions ADD COLUMN country text NOT NULL;
    ALTER TABLE solutions ADD CONSTRAINT solutions_country_not_empty CHECK (country <> '');
  END IF;
END $$;