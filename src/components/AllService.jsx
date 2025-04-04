'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import ArrowGreen from '../../public/icons/ArrowGreen';

const details = [
  {
    id: 1,
    title: 'Bid Writing Consulting',
    details: 'Win More Contracts with Expert Bid Writing Services.',
    content:
      'Our bid writing specialists help businesses across the UK secure valuable contracts through compelling, compliant, and competitive proposals.',
  },
  {
    id: 2,
    title: 'Sustainability Consulting',
    details:
      'Future-Proof Your Business with Strategic Sustainability Solutions.',
    content:
      'Our sustainability consultants help UK businesses navigate environmental regulations, improve resource efficiency, and build genuine ESG credentials.',
  },
  {
    id: 3,
    title: 'Commodity Management',
    details: 'Optimize Your Supply Chain and Control Costs.',
    content:
      'Our commodity management experts help businesses navigate volatile markets, secure favorable terms, and maintain supply continuity.3',
  },
  {
    id: 4,
    title: 'Technology Delivery Services',
    details:
      'From Strategy to Implementation: Technology That Drives Business Value.',
    content:
      'Our technology delivery team ensures successful implementation of business-critical systems that deliver measurable ROI.',
  },
];

export default function AllService() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
    hover: {
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const linkVariants = {
    hover: {
      x: 3,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="grid gap-7 grid-cols-1 lg:grid-cols-2 mb-[172px]"
    >
      {details.map((detail) => (
        <motion.div
          key={detail.id}
          variants={cardVariants}
          whileHover="hover"
          className="w-full h-[451px] border-[2px] p-[30px] border-black-500 rounded-[2px] flex flex-col justify-between hover:shadow-lg hover:border-green-100 transition-colors duration-300"
        >
          <div>
            <motion.h3
              variants={textVariants}
              className="text-sm uppercase tracking-widest font-normal text-green-100"
            >
              {detail.title}
            </motion.h3>
            <motion.h3
              variants={textVariants}
              className="font-semibold leading-10 text-[32px] mt-[5px] mr-[25px] text-green-100"
            >
              {detail.details}
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="mt-[20px] text-green-400 text-[20px]"
            >
              {detail.content}
            </motion.p>
          </div>
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              href={''}
              className="font-semibold text-[18px] text-green-100 flex gap-2 items-center"
            >
              Learn more <ArrowGreen />
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
