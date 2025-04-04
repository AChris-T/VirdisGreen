'use client';
import React, { useState, useEffect } from 'react';
import group from '../../public/Group.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Menubar from '../../public/icons/Menubar';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/service' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll events and body scroll lock
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMobileMenuOpen]);

  // Handle mobile menu open/close
  useEffect(() => {
    if (isMobileMenuOpen) {
      setScrollPosition(window.pageYOffset);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen, scrollPosition]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`px-4 md:px-[39px] max-w-[1512px] mx-auto py-[16px] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          <div className="hidden lg:flex gap-4">
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
            className={`px-[32px] hidden lg:flex text-[18px] font-semibold py-4 bg-green-100 rounded-[12px] text-yellow-200 transition-all duration-300 ${
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
          <motion.button
            className={`lg:hidden flex transition-all duration-300 ${
              scrolled ? 'py-3 text-[16px]' : ''
            }`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
            }}
            onClick={handleMobileMenuToggle}
          >
            <Menubar />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden fixed top-0 right-0 w-full h-screen bg-white z-50 overflow-y-auto"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <Image
                    src={group}
                    alt="Group Logo"
                    width={100}
                    height={60}
                    priority
                  />
                  <motion.button
                    className="p-2"
                    onClick={handleMobileMenuToggle}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-6 h-6 text-green-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
                <div className="flex flex-col gap-6">
                  {NAV_LINKS.map(({ name, href }, index) => (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={href}
                        className={`text-[18px] font-medium text-green-100 ${
                          pathname === href
                            ? 'text-green-100 font-semibold'
                            : ''
                        }`}
                        onClick={handleMobileMenuToggle}
                      >
                        {name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.button
                    className="mt-4 px-8 py-4 bg-green-100 rounded-[12px] text-yellow-200 text-[18px] font-semibold w-full"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleMobileMenuToggle}
                  >
                    Book a Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
