import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className="bg-[#F4863B] text-white mx-auto rounded-[30px] px-4 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="space-y-4">
            <h2 className="text-[19.4px] font-medium tracking-wide">SCALE WITH US</h2>
            <h3 className="text-4xl font-bold max-w-xl">
              Submit your Solution to enhance your impact
            </h3>
            <div className="flex gap-4 pt-4">
              <Link
                to="/submit-solution"
                className="bg-white text-[#F4863B] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Submit your Solution
              </Link>
              <Link
                to="/contact"
                className="bg-transparent text-white px-8 py-3 rounded-full font-medium border-2 border-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src='https://s3-alpha-sig.figma.com/img/2175/0a4b/3cf5f7a88097ed10ac701bd9f3c7750d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7ELF0hK7uN6LtdItOcuXCaQpSAt7yOx1Wm3M7bRZF3XWp4IsRuGftAtFpeNr1GbJsBdrkXldXM9nDuoU4nT-r05MRGVvqRn20qubHAPFzvcTceovEJ-OJ23a0KkjRphZOYuTbQmJ2XcxzCBB2b86ekQ5-7putspnoBJCoq2HVn3Xi88poChPWcy-oEUsGsDbJ~GKMoH6-6BWXVEeZZTy8ALDMuTxAOdRj23KOPj~3b24X41dZwt66VTEdYpRDvdqNMsPkjxh9FWz31UlQk2EQHN1NTMXHy6Cm4OV19IchO-2LpPI5ZUT00y~cmH2t6FTiAbcbrCGL4GjBEt0~JgnA__'
              alt="Chemonics Symbol"
              className="w-32 h-32 p-2 rounded-lg drop-shadow-lg"
              style={{
                filter: 'brightness(1.2) saturate(1) hue-rotate(-10deg)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}