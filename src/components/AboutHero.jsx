'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import flower from '../../public/floweer.png';
import frame from '../../public/AboutFrame.png';
import Services from './Services';
import CoreValues from './CoreValues';

export default function AboutHero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0.7 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const decorativeImageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="flex w-full items-center justify-center mt-[30px] md:mt-[105px] gap-[30px] flex-col"
    >
      <div className="flex flex-col lg:flex-row justify-between px-2 md:px-[39px] w-full relative">
        <motion.div
          variants={textVariants}
          className="w-full flex flex-col gap-5 z-10"
        >
          <motion.h3
            variants={textVariants}
            className=" px-3 lg:pr-18 w-full lg:w-[800px] text-center leading-12 md:leading-18 lg:text-start text-green-100 font-semibold flex justify-center md:text-[64px] text-[30px]"
          >
            Your Trusted Partner in Bidding, Sustainability, & Business Growth
          </motion.h3>
          <motion.p
            variants={textVariants}
            className="text-[18px] text-center lg:text-start text-black-400"
          >
            Viridis Green specializes in bid writing, sustainability consulting,
            commodity management, and technology solutions, providing businesses
            with the strategic expertise, compliance guidance, and innovative
            approaches needed to secure high-value contracts, optimize
            operations, and achieve long-term success in competitive markets.
          </motion.p>
        </motion.div>

        <motion.div
          variants={decorativeImageVariants}
          className="flex w-full lg:-mt-16 items-center justify-center right-0 top-0 lg:relative"
        >
          <Image
            src={flower}
            alt=""
            className="object-contain w-[500px] h-[460px]"
            priority
          />
        </motion.div>
      </div>

      <motion.div variants={imageVariants} className="w-full md:-mt-8 -mt-20">
        <Image
          src={frame}
          alt=""
          className="w-full h-[300px] md:h-full object-cover"
          priority
        />
      </motion.div>
      <div className="mt-[30px] md:mt-[111px] flex flex-col justify-center items-center">
        <h3 className="text-[30px] leading-12 md:text-[64px] text-green-100 lg:w-[800px] text-center w-full md:leading-16">
          Viridis Green is not just{' '}
          <p className="relative line-through  text-yellow-100 inline-block">
            another
          </p>{' '}
          business consulting firm.
        </h3>
        <p className="lg:w-[800px] text-green-400 text-[18px] mt-[30px] leading-8 text-center w-full">
          Viridis Green is more than a business consulting firm—we help
          companies win contracts, optimize operations, and implement
          sustainable, tech-driven solutions to stay competitive and grow.
        </p>
        <div></div>
      </div>
    </motion.div>
  );
}
