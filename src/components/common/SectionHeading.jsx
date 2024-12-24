import React from 'react';

export default function SectionHeading({ children, color }) {
  const headingColor = color || '#F3AE48';
  
  return (
    <h3 className={`text-xl font-semibold mb-4`} style={{ color: headingColor }}>
      {children}
    </h3>
  );
}