import Image from 'next/image';
import React from 'react';
import Frame from '../../public/Commodity.png';
import brain from '../../public/company.png';
import pen from '../../public/Glob.png';
import checked from '../../public/cutlery.png';
import search from '../../public/Retail.png';
import Bridge from '../../public/bridge.png';
import Health from '../../public/Health.png';
import House from '../../public/Big.png';
import Cup from '../../public/sheild.png';
import Tools from '../../public/Bar.png';
import Box from '../../public/Box.png';

const details = [
  {
    id: 1,
    title: 'Manufacturing',
    icon: brain.src,
  },
  {
    id: 2,
    icon: pen.src,
    title: 'Energy',
  },
  {
    id: 3,
    title: 'Food and beverage',
    icon: checked.src,
  },
  {
    id: 4,
    title: 'Retail',
    icon: search.src,
  },
  {
    id: 5,
    title: 'Construction',
    icon: Bridge.src,
  },
  {
    id: 6,
    title: 'Healthcare',
    icon: Health.src,
  },
];
export default function Commodity() {
  return (
    <div className="flex flex-col gap-20 mb-[172px]">
      <div className="flex lg:flex-row flex-col-reverse justify-between items-start  gap-[62px]">
        <div className="w-full">
          <Image src={Frame} alt="" className="w-full h-full" />
        </div>
        <div className="w-full ">
          <h3 className="text-sm tracking-widest font-medium text-green-100 uppercase">
            Commodity Management{' '}
          </h3>
          <h3 className="font-semibold lg:w-[518px] leading-10 text-[32px] mt-[5px] mr-[25px] text-green-100 ">
            Optimize Your Supply Chain and Control Costs.{' '}
          </h3>
          <p className="mt-[20px] text-green-400 text-[20px]">
            Our commodity management experts provide businesses with the
            strategic guidance needed to navigate volatile markets, mitigate
            risks, and capitalize on emerging opportunities. Through meticulous
            market analysis and negotiation, we help secure favorable terms that
            enhance profitability and long-term stability. Additionally, we
            ensure seamless supply continuity by implementing proactive
            procurement strategies, fostering strong supplier relationships, and
            adapting to ever-changing market conditions.
          </p>
          <p className="font-semibold text-[24px] text-green-100 mt-[20px]">
            Industries Served{' '}
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
              <h3 className="font-semibold text-[20px] text-green-100">
                Strategic Sourcing{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                Identifying optimal suppliers and negotiating favorable terms.
              </p>
            </div>
          </div>
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={Cup} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold text-[20px] text-green-100">
                Risk Management{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                Developing hedging strategies and contingency planning.{' '}
              </p>
            </div>
          </div>
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={Tools} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold text-[20px] text-green-100">
                Market Analysis{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                Providing timely insights on price trends and market dynamics.
              </p>
            </div>
          </div>
          <div className="bg-black-500 rounded-[20px] flex flex-col gap-5 items-center py-5">
            <Image src={Box} alt="" width={60} height={60} />
            <div className="flex flex-col gap-1 items-center px-[40px]">
              <h3 className="font-semibold text-[20px] text-green-100">
                Inventory Optimization{' '}
              </h3>
              <p className="font-normal text-base text-black-400 text-center">
                Balancing stock levels with cash flow considerations{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
