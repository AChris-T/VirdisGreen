'use client';
import React from 'react';
import group from '../../public/Group.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/service' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname(); // Get the current route

  return (
    <div className=" px-[39px] pt-[32px] ">
      <div className="flex justify-between items-center ">
        <div>
          <Image
            src={group}
            alt="Group Logo"
            width={117}
            height={70}
            priority
            className="object-cover"
          />
        </div>
        <div className="flex gap-4">
          {NAV_LINKS.map(({ name, href }) => (
            <NavLink key={href} href={href} pathname={pathname}>
              {name}
            </NavLink>
          ))}
        </div>
        <button className="px-[32px] text-[18px] font-semibold py-4 bg-green-100 rounded-[12px]  text-yellow-200">
          Book a Consultation
        </button>
      </div>
    </div>
  );
}

const NavLink = ({ href, pathname, children }) => {
  const isActive = pathname === href;

  return (
    <div className="flex">
      <Link
        href={href}
        className={`relative text-base transition text-green-100  ${
          isActive
            ? 'text-green-100 font-semibold after:block after:h-[3px] after:rounded after:bg-yellow-100 after:w-full after:mt-[0px]'
            : ''
        }`}
      >
        {children}
      </Link>
    </div>
  );
};
