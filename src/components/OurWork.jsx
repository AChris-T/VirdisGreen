'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BagIcon from '../../public/icons/BagIcon';
import BarIcon from '../../public/icons/BarIcon';
import ProgressIcon from '../../public/icons/ProgressIcon';
import Rocket from '../../public/icons/Rocket';
import ArrowWhite from '../../public/icons/ArrowWhite';

export default function OurWork() {
  // Create refs for scroll detection
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const isContentInView = useInView(contentRef, { once: false, amount: 0.5 });
  const isCardsInView = useInView(cardsRef, { once: false, amount: 0.3 });

  // Content animations
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 80,
        duration: 0.8,
      },
    },
  };

  // Text animations with staggering
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 70,
      },
    },
  };

  // Card container animations
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Individual card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
    hover: {
      y: -8,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      borderColor: '#00A870',
      backgroundColor: '#f6f4db',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  // Icon animations
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 150,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="py-14 flex lg:flex-row flex-col justify-between lg:items-center gap-4"
      ref={sectionRef}
      initial="hidden"
      animate={isSectionInView ? 'visible' : 'hidden'}
      variants={contentVariants}
    >
      <motion.div
        className="lg:w-[52%]"
        ref={contentRef}
        variants={textVariants}
        initial="hidden"
        animate={isContentInView ? 'visible' : 'hidden'}
      >
        <motion.h3
          className="text-sm mb-3 tracking-widest text-green-100  uppercase"
          variants={textItemVariants}
        >
          What We Do{' '}
        </motion.h3>
        <motion.h2
          className="font-semibold text-[42px] md:text-[70px] leading-14 md:leading-22 w-full lg:w-[700px] text-green-100"
          variants={textItemVariants}
        >
          Comprehensive Solutions for Business Success.{' '}
        </motion.h2>
        <motion.h2
          className="mt-5 w-full lg:w-[85%] text-black-400 text-[18px]"
          variants={textItemVariants}
        >
          We simplify and optimize the bidding and consulting process, providing
          businesses with the expertise, strategy, and support needed to secure
          high-value contracts, stay compliant, and achieve sustainable growth.
        </motion.h2>
        <motion.button
          className="px-[32px] flex items-center gap-2 mt-10 text-[18px] font-semibold py-4 bg-green-100 cursor-pointer rounded-[12px] text-white"
          variants={textItemVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
          <ArrowWhite />
        </motion.button>
      </motion.div>
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        ref={cardsRef}
        variants={cardContainerVariants}
        initial="hidden"
        animate={isCardsInView ? 'visible' : 'hidden'}
      >
        <motion.div
          className="px-[10px] w-full border-2 rounded-[21px] flex flex-col gap-5 justify-center items-center border-black-500 py-[43px]"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div variants={iconVariants} whileHover="hover">
            <BagIcon />
          </motion.div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-center text-lg text-green-100 mt-1">
              Bid Writing Excellence
            </h3>
            <p className="text-center mt-2 text-base text-black-400">
              Winning proposals that secure valuable contracts.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="px-[10px] w-full border-2 rounded-[21px] flex flex-col gap-5 justify-center items-center border-black-500 py-[43px]"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div variants={iconVariants} whileHover="hover">
            <BarIcon />
          </motion.div>
          <div className="">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-center text-lg text-green-100 mt-1">
                Sustainability Consulting
              </h3>
              <p className="text-center mt-2 text-base text-black-400">
                Future-proof strategies that align with global standards.{' '}
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="px-[10px] w-full border-2 rounded-[21px] flex flex-col gap-5 justify-center items-center border-black-500 py-[43px]"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div variants={iconVariants} whileHover="hover">
            <ProgressIcon />
          </motion.div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-center text-lg text-green-100 mt-1">
              Commodity Management{' '}
            </h3>
            <p className="text-center mt-2 text-base text-black-400">
              Strategic sourcing and supply chain optimization.{' '}
            </p>
          </div>
        </motion.div>
        <motion.div
          className="px-[10px] w-full border-2 rounded-[21px] flex flex-col gap-5 justify-center items-center border-black-500 py-[43px]"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div variants={iconVariants} whileHover="hover">
            <Rocket />
          </motion.div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-center text-lg text-green-100 mt-1">
              Technology Delivery{' '}
            </h3>
            <p className="text-center mt-2 text-base text-black-400">
              Seamless implementation of business-critical systems{' '}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
