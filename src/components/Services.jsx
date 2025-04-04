'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      color: '#00A870',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-full flex flex-col gap-5 md:px-5 lg:px-56 mb-[180px]">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 md:mx-8 lg:mx-32  gap-6 pt-16 md:px-4"
      >
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl  font-medium text-green-100 cursor-pointer">
            Bid Writing Support
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl font-medium text-green-100 cursor-pointer">
            Government Tenders{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
      </motion.div>
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-6  lg:px-4"
      >
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group lg:col-span-2 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl  md:text-2xl font-medium text-green-100 cursor-pointer">
            Risk Management{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group border-[#F4F4F4] border-[2px] col-span-1 px-3 lg:px-[35px] py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl font-medium text-green-100 cursor-pointer">
            Strategy{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative lg:col-span-2 group border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl font-medium text-green-100 cursor-pointer">
            Funding & Grants{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
      </motion.div>
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5  gap-6  lg:px-4"
      >
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group lg:col-span-2 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl  md:text-2xl font-medium text-green-100 cursor-pointer">
            Contract Wins{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group border-[#F4F4F4] border-[2px] lg:col-span-1 px-3 lg:px-[35px]  py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl font-medium text-green-100 cursor-pointer">
            Innovation{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative lg:col-span-2 group border-[#F4F4F4] border-[2px] px-3 lg:px-[35px]  py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl font-medium text-green-100 cursor-pointer">
            Sustainability{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
      </motion.div>
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 md:mx-8 lg:mx-32  gap-6  md:px-4"
      >
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group border-[#F4F4F4] border-[2px] px-3 lg:px-[35px]  py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl font-medium text-green-100 cursor-pointer">
            Procurement Expertise{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[15px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl font-medium text-green-100 cursor-pointer">
            Industry Insights{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
