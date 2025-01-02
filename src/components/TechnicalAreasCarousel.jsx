import React from 'react';
import { technicalAreas } from '../data/technicalAreas';
import TechnicalAreaCard from './TechnicalAreaCard';
import useEmblaCarousel from 'embla-carousel-react';

export default function TechnicalAreasCarousel() {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    loop: true,
    slidesToScroll: 2,
    containScroll: 'trimSnaps'
  });

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="space-y-4">
            <h2 className="text-lg text-lime-600 uppercase tracking-wider mb-2">Explore</h2>
            <p className="text-4xl font-semibold text-gray-900">Technical Areas</p>
          </div>
          <button className="bg-white border border-lime-600 text-lime-600 px-6 py-2 rounded-full hover:bg-lime-50 transition-colors">
            See All Technical Areas
          </button>
        </div>
        <div 
          ref={emblaRef}
          className="overflow-x-hidden"
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