'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Star from '../../public/icons/Star';
import Bag from '../../public/icons/Bag';
import Chart from '../../public/icons/Chart';
import LineChart from '../../public/icons/LineChart';
import Rockect from '../../public/icons/Rockect';
import AllService from './AllService';
import BidWriting from './BidWriting';
import Sustainability from './Sustainability';
import Commodity from './Commodity';
import Technoloy from './Technoloy';

export default function ServiceHero() {
  const [activeTab, setActiveTab] = useState(1);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const tabs = [
    {
      id: 1,
      title: 'All',
      icon: <Star />,
      content: (props) => <AllService {...props} />,
    },
    {
      id: 2,
      icon: <Bag />,
      title: 'Bid Writing Consulting',
      content: () => <BidWriting />,
    },
    {
      id: 3,
      title: 'Sustainability Consulting',
      icon: <Chart />,
      content: () => <Sustainability />,
    },
    {
      id: 4,
      title: 'Commodity Management',
      icon: <LineChart />,
      content: () => <Commodity />,
    },
    {
      id: 5,
      title: 'Technology Delivery',
      icon: <Rockect />,
      content: () => <Technoloy />,
    },
  ];

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

  const textVariants = {
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
  };

  const tabsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
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
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
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
      <motion.h3
        variants={textVariants}
        className="w-full md:w-[95%] lg:w-[58%] leading-12 text-center text-green-100 font-semibold flex justify-center text-[35px] md:text-[44px]"
      >
        Strategic Solutions for Lasting Business Growth
      </motion.h3>
      <motion.p
        variants={textVariants}
        className="w-full md:w-[90%] text-center text-green-400 font-normal flex justify-center text-[20px]"
      >
        We provide expert consulting in bid writing, sustainability, commodity
        management, and technology delivery—helping businesses secure contracts,
        optimise operations, and drive long-term success.
      </motion.p>
      <div className="w-full md:px-[38px]">
        <div>
          <motion.div
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="w-full overflow-x-auto no-scrollbar md:p-6"
            variants={tabsContainerVariants}
          >
            <div className="w-[1220px] lg:w-full">
              <div className="flex justify-between">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    variants={tabVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`px-5 hover:border-1 flex hover:bg-yellow-200 hover:border-green-100 hover:rounded-full items-center text-green-100 gap-[5px] py-2 text-base font-medium focus:outline-none transition-all duration-200
                      ${
                        activeTab === tab.id
                          ? 'border-1 bg-yellow-200 border-green-100 rounded-full'
                          : ''
                      }`}
                  >
                    {tab.icon}
                    {tab.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
              className="mt-[53px] px-2"
            >
              {tabs
                .find((tab) => tab.id === activeTab)
                ?.content({ setActiveTab })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
