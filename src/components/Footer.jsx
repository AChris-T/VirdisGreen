import React from 'react';
import group from '../../public/Log.png';
import vary from '../../public/var.png';
import arrow from '../../public/arrow.png';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '../../public/icons/FacebookIcon';
import TwitterIcon from '../../public/icons/TwitterIcon';
import InstagramIcon from '../../public/icons/InstagramIcon';
import LinkdinIcon from '../../public/icons/LinkdinIcon';
import Arrow from '../../public/icons/Arrow';

export default function Footer() {
  return (
    <div>
      <div className="footer w-full md:px-[134px] gap-5 flex flex-col justify-center items-center ">
        <Image
          src={group}
          alt="Group Logo"
          width={117}
          height={70}
          priority
          className="object-cover z-10"
        />
        <h3 className="font-semibold z-10 text-green-100 lg:leading-20 leading-12 text-[30px] lg:text-[68px] text-center">
          Let’s Work Together to Secure Your Next Big Opportunity
        </h3>
        <p className="text-green-300 px-2 z-10 text-lg font-medium text-center">
          We’re ready to help you secure more contracts and optimise your
          business strategy.
        </p>
        <button className="z-10 px-[30px] py-[15px] text-white bg-green-100 rounded-[10px] font-semibold text-[18px] gap-2 flex items-center">
          Get Started
          <Arrow />
        </button>
      </div>
      <div className="bg-yellow-200 py-10 md:h-[285px] flex-col flex justify-center items-center">
        <Image
          src={group}
          alt="Group Logo"
          width={117}
          height={70}
          priority
          className="object-cover"
        />
        <div className="mt-6 flex md:flex-row flex-col gap-4 justify-center items-center">
          <Link href="/" className="text-black-300 text-base ">
            Home
          </Link>
          <Link href="/about" className="text-black-300 text-base ">
            About Us
          </Link>
          <Link href="/service" className="text-black-300 text-base ">
            Our Service
          </Link>
          <Link href="/#testimonials" className="text-black-300 text-base ">
            Testimonials
          </Link>

          <Link href="/contact" className="text-black-300 text-base ">
            Contact
          </Link>
        </div>
        <div className="mt-[48px] flex gap-6 items-center">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkdinIcon />
        </div>
      </div>
    </div>
  );
}
