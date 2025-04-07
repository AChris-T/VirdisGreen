import Image from 'next/image';
import React from 'react';
import Frame from '../../public/tech.png';
import brain from '../../public/app.png';
import pen from '../../public/web.png';
import checked from '../../public/data.png';
import search from '../../public/cloud.png';
import Bridge from '../../public/automation.png';
import Health from '../../public/software.png';
import House from '../../public/Board.png';
import Cup from '../../public/flash.png';
import Tools from '../../public/refresh.png';
import Box from '../../public/tools.png';

const details = [
  {
    id: 1,
    title: 'App Development',
    icon: brain.src,
  },

  {
    id: 2,
    title: 'Data Analytics',
    icon: checked.src,
  },
  {
    id: 3,
    icon: pen.src,
    title: 'Website Development',
  },
  {
    id: 4,
    title: 'Cloud Migration:',
    icon: search.src,
  },
  {
    id: 5,
    title: 'Process Automation',
    icon: Bridge.src,
  },
  {
    id: 6,
    title: 'Software Development',
    icon: Health.src,
  },
];
export default function Technoloy() {
  return (
    <div className="flex flex-col gap-20 mb-[172px]">
      <div className="flex lg:flex-row flex-col-reverse justify-between items-start  gap-[62px]">
        <div className="w-full">
          <Image src={Frame} alt="" className="w-full h-full" />
        </div>
        <div className="w-full ">
          <h3 className="text-sm tracking-widest font-medium text-green-100 uppercase">
            Technology Delivery Services{' '}
          </h3>
          <h3 className="font-semibold lg:w-[518px] leading-10 text-[32px] mt-[5px] mr-[25px] text-green-100 ">
            From Strategy to Implementation: Technology That Drives Business
            Value.{' '}
          </h3>
          <p className="mt-[20px] text-green-400 text-[20px]">
            Our technology delivery team ensures the seamless implementation of
            business-critical systems that drive efficiency, enhance
            productivity, and generate measurable returns on investment. By
            leveraging industry best practices, cutting-edge technologies, and
            strategic project management, we help businesses optimise operations
            and achieve long-term success. Our experts work closely with
            stakeholders to tailor solutions that align with organisational
            goals, ensuring scalability, security, and adaptability in a digital
            landscape.
          </p>
          <p className="font-semibold text-[24px] text-green-100 mt-[20px]">
            Our Technology Solutions{' '}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[10px]">
            {details.map((detail) => (
              <div key={detail.id} className="flex items-center gap-4">
                <Image
                  src={detail.icon}
                  width={50}
                  height={50}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
                <h3 className="text-[20px] font-medium">
                  <span className="text-green-100 font-semibold">
                    {detail.title}
                  </span>{' '}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="font-semibold text-[32px] text-green-100">
          Our Core Services{' '}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-[30px]">
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={House} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold text-center text-[20px] text-green-100">
                Business-First Approach{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                Technology solutions driven by commercial objectives{' '}
              </p>
            </div>
          </div>
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={Cup} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold  text-center text-[20px] text-green-100">
                Agile Implementation{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                Iterative delivery with regular stakeholder feedback.{' '}
              </p>
            </div>
          </div>
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={Tools} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold text-center text-[20px] text-green-100">
                Knowledge Transfer{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                Ensuring your team can maintain and evolve solutions.{' '}
              </p>
            </div>
          </div>
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={Box} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold  text-center text-[20px] text-green-100">
                Ongoing Support{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                Flexible maintenance and enhancement options.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
