import React, { useRef, useEffect } from 'react';

export default function VideoPlayer({ videoPath }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoPath]);

  if (!videoPath) return null;

  const videoUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/${videoPath}`;

  return (
    <div className="relative aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        controls
        className="absolute inset-0 w-full h-full object-contain"
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}