'use client';
import React, { useState, useEffect } from 'react';
import group from '../../public/Group.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/service' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname(); // Get the current route
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = prevScrollPos < currentScrollPos;

      setScrolled(currentScrollPos > 20);

      if (scrollingDown && currentScrollPos > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`px-[39px] max-w-[1512px]  mx-auto1 py-[16px] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-[12px]' : 'bg-transparent pt-[32px]'
        }`}
        initial="visible"
        animate={visible ? 'visible' : 'hidden'}
        variants={navbarVariants}
      >
        <div className="flex justify-between items-center w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={group}
              alt="Group Logo"
              width={scrolled ? 100 : 117}
              height={scrolled ? 60 : 70}
              priority
              className="object-cover transition-all duration-300"
            />
          </motion.div>
          <div className="flex gap-4">
            {NAV_LINKS.map(({ name, href }, index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <NavLink href={href} pathname={pathname} scrolled={scrolled}>
                  {name}
                </NavLink>
              </motion.div>
            ))}
          </div>
          <motion.button
            className={`px-[32px] text-[18px] font-semibold py-4 bg-green-100 rounded-[12px] text-yellow-200 transition-all duration-300 ${
              scrolled ? 'py-3 text-[16px]' : ''
            }`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Consultation
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const NavLink = ({ href, pathname, children, scrolled }) => {
  const isActive = pathname === href;

  return (
    <div className="flex">
      <Link
        href={href}
        className={`relative text-base transition-all duration-300 text-green-100 ${
          scrolled ? 'text-[15px]' : 'text-base'
        } ${
          isActive
            ? 'text-green-100 font-semibold after:block after:h-[3px] after:rounded after:bg-yellow-100 after:w-full after:mt-[0px]'
            : ''
        }`}
      >
        <motion.span
          whileHover={{
            scale: 1.05,
            color: '#00A870',
          }}
        >
          {children}
        </motion.span>
      </Link>
    </div>
  );
};
