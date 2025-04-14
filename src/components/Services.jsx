'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';
import Image from 'next/image';
import Pen from '../../public/PenBid.png';
import House from '../../public/Board.png';
import roll from '../../public/roll.png';
import risk from '../../public/Risk.png';
import fund from '../../public/fund.png';
import cup from '../../public/Cup.png';
import star from '../../public/star.png';
import leaf from '../../public/leaf.png';
import Chart from '../../public/chart.png';
import Cart from '../../public/cart.png';

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
      scale: 1.01,
      color: '#00A870',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5  mb-[40px] md:mb-[180px] px-10 md:px-0">
      <div className="grid w-full md:w-auto grid-cols-1 md:grid-cols-2 mt-20 gap-5">
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={Pen} alt="" className="w-6" />
            </span>{' '}
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
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={roll} alt="" className="w-6" />
            </span>{' '}
            Government Tenders{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
      </div>
      <div className="grid w-full md:w-auto grid-cols-1 md:grid-cols-3  gap-5">
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={risk} alt="" className="w-6" />
            </span>
            Risk Management
          </motion.h3>

          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={House} alt="" className="w-6" />
            </span>
            Strategy{' '}
          </motion.h3>

          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={fund} alt="" className="w-6" />
            </span>
            Funding & Grants{' '}
          </motion.h3>

          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
      </div>

      <div className="grid w-full md:w-auto grid-cols-1 md:grid-cols-3  gap-5">
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={cup} alt="" className="w-6" />
            </span>
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
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={star} alt="" className="w-6" />
            </span>
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
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={leaf} alt="" className="w-6" />
            </span>
            Sustainability{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
      </div>
      <div className="grid w-full md:w-auto grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={Cart} alt="" className="w-6" />
            </span>{' '}
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
          className="relative group hover:bg-yellow-200 hover:border-[1px] hover:border-green-100 border-[#F4F4F4] border-[2px] px-3 lg:px-[35px] py-[5px] rounded-full"
        >
          <motion.h3 className="text-xl md:text-2xl flex justify-center items-center gap-2 font-medium text-green-100 cursor-pointer">
            <span className="hidden group-hover:inline-block transition-opacity duration-300">
              <Image src={Chart} alt="" className="w-6" />
            </span>{' '}
            Industry Insights{' '}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
      </div>
      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
}
