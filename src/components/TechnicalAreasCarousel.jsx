import React, { useRef, useState, useEffect } from 'react';
import { technicalAreas } from '../data/technicalAreas';
import TechnicalAreaCard from './TechnicalAreaCard';

export default function TechnicalAreasCarousel() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);

  useEffect(() => {
    let animationFrame;
    
    if (!isDragging && Math.abs(velocity) > 0.1) {
      const decay = 0.95; // Velocity decay factor
      
      const animate = () => {
        setVelocity(prevVelocity => {
          const newVelocity = prevVelocity * decay;
          if (carouselRef.current) {
            carouselRef.current.scrollLeft -= newVelocity;
          }
          return Math.abs(newVelocity) > 0.1 ? newVelocity : 0;
        });
        
        animationFrame = requestAnimationFrame(animate);
      };
      
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isDragging, velocity]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    setLastX(e.pageX);
    setLastTime(Date.now());
    setVelocity(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const currentX = e.pageX;
    const currentTime = Date.now();
    const deltaX = currentX - lastX;
    const deltaTime = currentTime - lastTime;
    
    // Calculate velocity (pixels per millisecond)
    if (deltaTime > 0) {
      const newVelocity = deltaX / deltaTime * 16; // Scale for 60fps
      setVelocity(newVelocity);
    }

    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;

    setLastX(currentX);
    setLastTime(currentTime);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4 w-full">
          <div>
            <h2 className="text-lg text-lime-600 uppercase tracking-wider mb-2">Explore</h2>
            <p className="text-4xl font-semibold text-gray-900">Technical Areas</p>
          </div>
          <button className="bg-white border border-lime-600 text-lime-600 px-6 py-2 rounded-full hover:bg-lime-50 transition-colors">
            See All Technical Areas
          </button>
        </div>
        <div
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollBehavior: isDragging ? 'auto' : 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex gap-5 pb-4">
            {technicalAreas.map((area) => (
              <div key={area} className="flex-none">
                <TechnicalAreaCard area={area} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}