'use client';
import simple from '../../public/Simplification.png';
import axis from '../../public/axis.png';
import cambel from '../../public/cambel.png';
import ston from '../../public/ston.png';
import hollis from '../../public/hollis.png';
import btu from '../../public/btu.png';
import build from '../../public/build.png';
import trew from '../../public/trew.png';

const Partner = [
  { id: 1, img: simple.src },
  { id: 2, img: axis.src },
  { id: 3, img: cambel.src },
  { id: 4, img: ston.src },
  { id: 5, img: hollis.src },
  { id: 6, img: btu.src },
  { id: 7, img: build.src },
  { id: 8, img: trew.src },
];

export default function Partners() {
  return (
    <div className="overflow-hidden mt-10 mb-[80px] whitespace-nowrap w-full">
      <h3 className="flex text-green-100 font-bold text-[30px] mb-10 md:text-[42px] w-full justify-center">
        Our Trusted Partners
      </h3>
      <div className="flex animate-scroll gap-20">
        {[...Partner, ...Partner].map((pat, index) => (
          <img
            key={index}
            src={pat.img}
            alt={`partner-${index}`}
            className="w-32 h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
