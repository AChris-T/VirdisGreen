import React from 'react';
import group from '../../public/Group.png';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '../../public/icons/FacebookIcon';
import TwitterIcon from '../../public/icons/TwitterIcon';
import InstagramIcon from '../../public/icons/InstagramIcon';
import LinkdinIcon from '../../public/icons/LinkdinIcon';

export default function Footer() {
  return (
    <div>
      <div className="footer w-full px-[134px] gap-5 flex flex-col justify-center items-center ">
        <Image
          src={group}
          alt="Group Logo"
          width={117}
          height={70}
          priority
          className="object-cover"
        />
        <h3 className="font-semibold text-green-100 leading-20  text-[68px] text-center">
          Let’s Work Together to Secure Your Next Big Opportunity
        </h3>
        <p className="text-green-300 text-lg font-medium">
          We’re ready to help you win more contracts and optimize your business
          strategy.
        </p>
      </div>
      <div className="bg-yellow-200 h-[285px] flex-col flex justify-center items-center">
        <Image
          src={group}
          alt="Group Logo"
          width={117}
          height={70}
          priority
          className="object-cover"
        />
        <div className="mt-6 flex gap-4 justify-center items-center">
          <Link href="/" className="text-black-300 text-base ">
            Home
          </Link>
          <Link href="/" className="text-black-300 text-base ">
            Our Service
          </Link>
          <Link href="/" className="text-black-300 text-base ">
            Testimonials
          </Link>
          <Link href="/" className="text-black-300 text-base ">
            About Us
          </Link>
          <Link href="/" className="text-black-300 text-base ">
            Cantact
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
