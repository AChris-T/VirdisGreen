'use client';
import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import BagIcon from '../../public/icons/BagIcon';
import BarIcon from '../../public/icons/BarIcon';
import ProgressIcon from '../../public/icons/ProgressIcon';
import Rocket from '../../public/icons/Rocket';
import Cup from '../../public/Cup.png';
import Glob from '../../public/Glob.png';
import chain from '../../public/chain.png';
import balance from '../../public/balance.png';
import chart from '../../public/chart.png';
import Image from 'next/image';

export default function ChooseUs() {
  // Create animation controls
  const controls = useAnimation();
  const cardControls = useAnimation();

  // Create scroll detection refs
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    fallback: true,
  });

  const isCardsInView = useInView(cardsRef, {
    once: false,
    amount: 0.1,
    fallback: true,
  });

  // Start animations when elements come into view
  React.useEffect(() => {
    if (isSectionInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isSectionInView]);

  React.useEffect(() => {
    if (isCardsInView) {
      cardControls.start('visible');
    } else {
      cardControls.start('hidden');
    }
  }, [cardControls, isCardsInView]);

  // Main section container animations
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Heading and subtitle animations
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 80,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 70,
        delay: i * 0.3,
      },
    }),
    hover: {
      boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.08)',
      borderColor: '#00A870',
      backgroundColor: '#f6f4db',
      scale: 1.01,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 7,
        stiffness: 80,
      },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 8,
      },
    },
  };

  const cardData = [
    {
      icon: Cup.src,
      title: 'Proven Expertise',
      description: '85% bid success – helping businesses win more contracts.',
    },
    {
      icon: Glob.src,
      title: 'Global Experience',
      description: 'UK-based industry experts with global expertise.',
    },
    {
      icon: balance.src,
      title: 'Compliance Focused',
      description: 'Ensuring regulatory excellence in every project.',
    },
    {
      icon: chain.src,
      title: 'Integrated Solutions',
      description: 'An integrated approach to complex business challenges.',
    },
    {
      icon: chart.src,
      title: 'Measurable Results',
      description: 'Measurable ROI on all our service engagements.',
    },
  ];

  return (
    <motion.div
      className="flex flex-col justify-center items-center py-16"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div variants={headingVariants}>
        <motion.h3
          className="font-bold text-center text-[30px] md:text-[42px] text-green-100"
          variants={titleVariants}
        >
          Why Choose Viridis Green?
        </motion.h3>
        <motion.p
          className="text-black-200   md:w-[644px] text-center mt-3"
          variants={titleVariants}
        >
          With a proven track record in bids, sustainability, and business
          growth, we deliver tailored solutions to help businesses secure
          contracts and scale.
        </motion.p>
      </motion.div>

      <div className="w-full mt-[50px] lg:px-[114px]" ref={cardsRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8">
          {cardData.slice(0, 3).map((card, index) => (
            <motion.div
              key={index}
              className="px-[10px]  h-[250px] w-full border-2 rounded-[21px] flex flex-col gap-5 justify-center items-center border-black-500 py-[43px]"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={cardControls}
              whileHover="hover"
            >
              <motion.div variants={iconVariants} whileHover="hover">
                <Image src={card.icon} alt="" priority height={50} width={50} />
              </motion.div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-center text-lg text-green-100 mt-1">
                  {card.title}
                </h3>
                <p className="text-center mt-2 text-base text-black-400">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered second row */}
        <div className="flex md:flex-row flex-col justify-center gap-8">
          <motion.div
            key="row2-card"
            className="px-[10px] h-[250px] w-full md:w-[30%] border-2 rounded-[21px] flex flex-col gap-5 justify-center items-center border-black-500 py-[43px]"
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate={cardControls}
            whileHover="hover"
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <Image
                src={cardData[3].icon}
                alt=""
                priority
                height={50}
                width={50}
              />
            </motion.div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-center text-lg text-green-100 mt-1">
                {cardData[3].title}
              </h3>
              <p className="text-center mt-2 text-base text-black-400">
                {cardData[3].description}
              </p>
            </div>
          </motion.div>
          <motion.div
            key="row3-card "
            className="px-[10px] h-[250px] w-full md:w-[30%] border-2 rounded-[21px] flex flex-col gap-5 justify-center items-center border-black-500 py-[43px]"
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate={cardControls}
            whileHover="hover"
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <Image
                src={cardData[4].icon}
                alt=""
                priority
                height={50}
                width={50}
              />
            </motion.div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-center text-lg text-green-100 mt-1">
                {cardData[4].title}
              </h3>
              <p className="text-center mt-2 text-base text-black-400">
                {cardData[4].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
