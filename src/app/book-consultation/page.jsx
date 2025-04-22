import React from 'react';
import FacebookIcon from '../../../public/icons/FacebookIcon';
import TwitterIcon from '../../../public/icons/TwitterIcon';
import LinkdinIcon from '../../../public/icons/LinkdinIcon';
import Stepper from '@/components/consultaionForm/Stepper';
import Script from 'next/script';

export default function page() {
  return (
    <div className="py-[75px] px-2 md:px-[39px] gap-[10px] flex flex-col">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="beforeInteractive"
      />
      <div className="flex w-full items-start  justify-between  flex-col lg:flex-row mt-[30px] md:mt-[85px] gap-[30px] ">
        <div className="flex flex-col justify-center gap-[50px]  ">
          <h3 className="text-[30px] flex flex-col md:text-[80px] leading-12  w-full font-semibold md:leading-24 text-green-100 lg:w-[647px] md:text-start  text-center lg:text-start ">
            Your Next
            <p>Big Opportunity </p> Starts Here! 🚀
          </h3>
          <div className="lg:grid grid-cols-1 hidden px-3 md:grid-cols-2 justify-center gap-8 md:gap-20 md:mx-20 lg:mx-0">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[24px] text-green-100">
                Direct Contact
              </h3>
              <h3 className="flex gap-3 items-center font-semibold text-base text-green-100">
                Email:
                <span className="text-black-400 font-normal">
                  collab@viridusgreen.co
                </span>
              </h3>
              <h3 className="flex gap-8 items-center font-semibold text-base text-green-100">
                Tel:
                <span className="text-black-400 font-normal">
                  +44 20 7946 XXXX
                </span>
              </h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                Office:
                <span className="text-black-400 w-full md:w-[163px] font-normal">
                  123 Business Centre, Innovation Park, London, EC2A 1NT, United
                  Kingdom{' '}
                </span>
              </h3>
            </div>
            <div className="flex flex-col gap-4 ]">
              <h3 className="font-semibold text-[24px] text-green-100">
                Social Media
              </h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                <FacebookIcon />
                <span className="text-black-400 w-[163px] font-normal">
                  @viridusgreen
                </span>
              </h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                <TwitterIcon />
                <span className="text-black-400 w-[163px] font-normal">
                  @viridusgreen.co{' '}
                </span>
              </h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                <LinkdinIcon />
                <span className="text-black-400 w-[163px] font-normal">
                  @viridusgreen
                </span>
              </h3>
            </div>
          </div>
        </div>
        <Stepper />
      </div>
      <div className="grid   grid-cols-1 lg:hidden px-3 md:grid-cols-2 justify-center gap-8 md:gap-20 w-full mt-10 lg:mx-0">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-[20px] text-green-100">
            Direct Contact
          </h3>
          <h3 className="flex gap-3 items-center font-semibold text-base text-green-100">
            Email:
            <span className="text-black-400 font-normal">
              collab@viridusgreen.co
            </span>
          </h3>
          <h3 className="flex gap-8 items-center font-semibold text-base text-green-100">
            Tel:
            <span className="text-black-400 font-normal">+44 20 7946 XXXX</span>
          </h3>
          <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
            Office:
            <span className="text-black-400 w-full  font-normal">
              123 Business Centre, Innovation Park, London, EC2A 1NT, United
              Kingdom{' '}
            </span>
          </h3>
        </div>
        <div className="flex flex-col gap-4 ]">
          <h3 className="font-semibold text-[20px] text-green-100">
            Social Media
          </h3>
          <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
            <FacebookIcon />
            <span className="text-black-400 w-[163px] font-normal">
              @viridusgreen
            </span>
          </h3>
          <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
            <TwitterIcon />
            <span className="text-black-400 w-[163px] font-normal">
              @viridusgreen.co{' '}
            </span>
          </h3>
          <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
            <LinkdinIcon />
            <span className="text-black-400 w-[163px] font-normal">
              @viridusgreen
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
