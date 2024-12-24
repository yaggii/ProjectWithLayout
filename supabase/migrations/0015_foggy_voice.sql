/*
  # Add owner_email to solutions table

  1. Changes
    - Add nullable owner_email column
    - Update existing rows with user email from auth.users
    - Make owner_email NOT NULL after data migration
    - Add index for better query performance

  2. Security
    - No additional RLS policies needed as existing policies cover access control
*/

DO $$ 
BEGIN
  -- First add the column as nullable
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'solutions' AND column_name = 'owner_email'
  ) THEN
    -- Add column as nullable first
    ALTER TABLE solutions ADD COLUMN owner_email text;

    -- Update existing solutions with user emails from auth.users
    UPDATE solutions s
    SET owner_email = u.email
    FROM auth.users u
    WHERE s.user_id = u.id;

    -- Now make it NOT NULL
    ALTER TABLE solutions 
    ALTER COLUMN owner_email SET NOT NULL;

    -- Create index for owner_email
    CREATE INDEX IF NOT EXISTS solutions_owner_email_idx ON solutions(owner_email);
  END IF;
END $$;