import React from 'react';
import { Link } from 'react-router-dom';

export default function MainFooter() {
  return (
    <div className="bg-[#666666] text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src='https://s3-alpha-sig.figma.com/img/f9bc/0d84/599d50536f0d15a6d6cd01d8d6eb93d9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXHQ2ISmpoghewrZHdKvmtM78a2UkdensMB5umBVJzRQjhJuM1rPjOaokfeG911lvFMcd2BeHigxuReLozUpcRctFXy5QQlbAcKItHRKSQ4LndeyAvPtASihOBi1huWtS3D~1sMX~NjjBBtZx4SxLJI44a7BEL80BqoyyvOnI5velSgXoNxYNj5b-LsLasccKpDn0LQMCNNRfY0caottTIm6CMALw~6yryrIRthveS9D671YCvOHi~zuvRnBWTxr1kYat-lkmFit9R2ZCzMTBYO2f5A6YemwOmFllA4klIIdGHV2J5ZJ-aYVxXdl4o4OmrbmEWqdO12clqkpvIUpYg__'
              alt="Chemonics Logo"
              className="h-8"
            />
          </Link>
          <div className="text-lg font-medium">
            Solutions Exchange
          </div>
        </div>
      </div>
    </div>
  );
}