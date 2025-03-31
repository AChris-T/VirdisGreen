import ChooseUs from '@/components/ChooseUs';
import Herosection from '@/components/Herosection';
import OurWork from '@/components/OurWork';
import Stories from '@/components/Stories';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="py-[75px] gap-10 flex flex-col">
      <Herosection />
      <OurWork />
      <ChooseUs />
      <Stories />
    </div>
  );
}
