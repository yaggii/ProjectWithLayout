-- Create storage bucket for solution files
INSERT INTO storage.buckets (id, name, public)
VALUES ('solution-files', 'solution-files', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policy to allow authenticated users to upload files
CREATE POLICY "Allow authenticated users to upload files"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'solution-files' AND
  (storage.foldername(name))[1] = 'startup-process'
);

-- Allow authenticated users to read files
CREATE POLICY "Allow authenticated users to read files"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'solution-files');