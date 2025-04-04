'use client';
import Image from 'next/image';
import group from '../../public/Mask.png';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Herosection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (window.innerWidth <= 768 && container) {
      let animationFrameId;
      let scrollSpeed = 0.5; // px per frame — adjust this for speed

      const autoScroll = () => {
        container.scrollLeft += scrollSpeed;

        // Reset to beginning if it reaches the end
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }

        animationFrameId = requestAnimationFrame(autoScroll);
      };

      animationFrameId = requestAnimationFrame(autoScroll);

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 90,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 1.2,
      },
    },
  };

  const buttonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        delay: i * 0.1,
      },
    }),
    hover: {
      scale: 1.02,
      boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.08)',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  const badgesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2,
        duration: 0.3,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.03,
      y: -2,
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-[39px] mt-[30px] md:mt-[100px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <motion.div
          className="w-full flex justify-center items-center  lg:items-start flex-1/2 flex-col"
          variants={itemVariants}
        >
          <motion.h3
            className="text-sm mb-3 text-green-100 tracking-widest uppercase"
            variants={itemVariants}
          >
            Viridis Green
          </motion.h3>
          <motion.h2
            className="font-semibold text-[38px] md:text-[72px] text-center lg:text-start leading-14 md:leading-22 md:w-[755px] text-green-100"
            variants={titleVariants}
          >
            Transforming Business Challenges Into Competitive Advantages
          </motion.h2>
          <motion.h2
            className="mt-5 md:w-[644px] text-black-400 text-[18px] md:text-start text-center md:text-[20px]"
            variants={itemVariants}
          >
            At Viridis Green, we combine expertise in bid writing,
            sustainability practices, commodity management, and technology
            delivery to help UK businesses thrive in today's competitive
            landscape.
          </motion.h2>
          <motion.div
            className="mt-5 flex gap-2 md:gap-[17px]"
            variants={buttonsContainerVariants}
          >
            <motion.button
              className="px-4 md:px-[32px] text-[14px] md:text-[18px] font-semibold py-4 bg-green-100 cursor-pointer rounded-[12px] text-white"
              custom={0}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book a Consultation
            </motion.button>
            <motion.button
              className="px-4 md:px-[32px] text-[14px] md:text-[18px] font-semibold py-4 text-green-100 cursor-pointer rounded-[12px] border-[2px] border-green-100"
              custom={1}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore Our Services
            </motion.button>
          </motion.div>
          <div
            ref={scrollRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className=" w-full overflow-x-auto no-scrollbar "
          >
            <motion.div
              className="grid mt-[50px] grid-cols-5 lg:grid-cols-3  w-[1200px] lg:w-[750px] gap-3"
              variants={badgesContainerVariants}
            >
              <motion.button
                className="text-base font-medium text-green-100 border-[1.5px] rounded-full border-black-500 px-4 py-3"
                variants={badgeVariants}
                whileHover="hover"
              >
                🏆 78% Bid Success Rate
              </motion.button>
              <motion.button
                className="text-base font-medium text-green-100 border-[1.5px] rounded-full border-black-500 px-4 py-3"
                variants={badgeVariants}
                whileHover="hover"
              >
                🌎 78% Global Experience
              </motion.button>
              <motion.button
                className="text-base font-medium text-green-100 border-[1.5px] rounded-full border-black-500 px-4 py-3"
                variants={badgeVariants}
                whileHover="hover"
              >
                ⚖️ Compliance Focused
              </motion.button>
              <motion.button
                className="text-base font-medium text-green-100 border-[1.5px] rounded-full border-black-500 px-4 py-3"
                variants={badgeVariants}
                whileHover="hover"
              >
                🔗 Integrated Solutions
              </motion.button>
              <motion.button
                className="text-base font-medium text-green-100 border-2 rounded-full border-black-500 px-4 py-3"
                variants={badgeVariants}
                whileHover="hover"
              >
                📊 Measurable Results
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="flex-1/4 mt-10 lg:mt-0" variants={imageVariants}>
          <Image
            src={group}
            alt="Group Logo"
            width={1000}
            height={976}
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
