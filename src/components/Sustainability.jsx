import Image from 'next/image';
import React from 'react';
import Frame from '../../public/Sustain.png';
import brain from '../../public/brain.png';
import pen from '../../public/pen.png';
import checked from '../../public/checked.png';
import search from '../../public/search.png';
import House from '../../public/House.png';
import Cup from '../../public/Cup.png';
import Tools from '../../public/tools.png';

const details = [
  {
    id: 1,
    title: 'ESG Strategy Development: ',
    icon: brain.src,
    content:
      'Creating practical roadmaps aligned with your business objectives.',
  },
  {
    id: 2,
    icon: pen.src,
    title: 'Carbon Footprint Assessment: ',
    content: 'Measuring and managing your environmental impact.',
  },
  {
    id: 3,
    title: 'Sustainability Reporting:',
    icon: checked.src,
    content: ' Meeting TCFD, GRI, and other disclosure requirements.',
  },
  {
    id: 4,
    title: 'Sustainable Supply Chain Management:',
    icon: search.src,
    content: 'Ensuring ethical and environmental compliance.',
  },
];
export default function Sustainability() {
  return (
    <div className="flex flex-col gap-20 mb-[172px]">
      <div className="flex lg:flex-row flex-col-reverse justify-between items-start  gap-[62px]">
        <div className="w-full">
          <Image src={Frame} alt="" className="w-full h-full" />
        </div>
        <div className="w-full ">
          <h3 className="text-sm tracking-widest font-medium text-green-100 uppercase">
            Sustainability Consulting{' '}
          </h3>
          <h3 className="font-semibold lg:w-[518px] leading-10 text-[26px] md:text-[32px] mt-[5px] mr-[25px] text-green-100 ">
            Future-Proof Your Business with Strategic Sustainability Solutions.{' '}
          </h3>
          <p className="mt-[20px] text-green-400 text-[20px]">
            Our team of sustainability consultants assists UK businesses in
            navigating environmental regulations, enhancing resource efficiency,
            and developing authentic ESG credentials. We ensure every strategy
            is impactful, fully compliant with industry standards, and
            competitively positioned. With our expertise, businesses confidently
            adopt sustainable practices, increasing their resilience,
            reputation, and long-term success in a rapidly evolving marketplace.
          </p>
          <p className="font-semibold text-[20px] md:text-[24px] text-green-100 mt-[20px]">
            Our Services Include{' '}
          </p>
          <div className="flex flex-col gap-5 mt-[10px]">
            {details.map((detail) => (
              <div key={detail.id} className="flex items-center gap-4">
                <Image
                  src={detail.icon}
                  width={50}
                  height={50}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
                <h3 className="text-[18px] md:text-[20px] font-medium">
                  <span className="text-green-100 font-semibold">
                    {detail.title}
                  </span>{' '}
                  {detail.content}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="font-semibold text-[26px] text-center md:text-[32px] text-green-100">
          The Strategic Solutions Difference{' '}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-[30px]">
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={House} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold text-[20px] text-green-100">
                Sector-Specific Expertise
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                Writers specialising in public sector, construction, healthcare,
                IT, and more
              </p>
            </div>
          </div>
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={Cup} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold text-[20px] text-green-100">
                Proven Track Record{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                85% success rate across all sectors, demonstrating consistency.
              </p>
            </div>
          </div>
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={Tools} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold text-[20px] text-green-100">
                Full-Service Support{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                From opportunity identification to post-submission
                clarifications.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
