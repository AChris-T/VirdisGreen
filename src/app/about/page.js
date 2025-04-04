import AboutHero from '@/components/AboutHero';
import CoreValues from '@/components/CoreValues';
import Services from '@/components/Services';
import React from 'react';

export default function page() {
  return (
    <div className="flex w-full flex-col   mt-[100px]">
      <AboutHero />
      <Services />
      <CoreValues />
    </div>
  );
}
