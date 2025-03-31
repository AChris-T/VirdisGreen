'use client';
import Image from 'next/image';
import group from '../../public/Mask.png';
import { motion } from 'framer-motion';

export default function Herosection() {
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
      className="flex flex-col gap-[39px] mt-[100px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex justify-between items-center">
        <motion.div
          className="w-full flex-1/2 flex-col"
          variants={itemVariants}
        >
          <motion.h3
            className="text-sm mb-3 text-green-100 tracking-widest uppercase"
            variants={itemVariants}
          >
            Viridis Green
          </motion.h3>
          <motion.h2
            className="font-semibold text-[72px] leading-22 w-[755px] text-green-100"
            variants={titleVariants}
          >
            Transforming Business Challenges Into Competitive Advantages
          </motion.h2>
          <motion.h2
            className="mt-5 w-[644px] text-black-400 text-[20px]"
            variants={itemVariants}
          >
            At Viridis Green, we combine expertise in bid writing,
            sustainability practices, commodity management, and technology
            delivery to help UK businesses thrive in today's competitive
            landscape.
          </motion.h2>
          <motion.div
            className="mt-5 flex gap-[17px]"
            variants={buttonsContainerVariants}
          >
            <motion.button
              className="px-[32px] text-[18px] font-semibold py-4 bg-green-100 cursor-pointer rounded-[12px] text-white"
              custom={0}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book a Consultation
            </motion.button>
            <motion.button
              className="px-[32px] text-[18px] font-semibold py-4 text-green-100 cursor-pointer rounded-[12px] border-[2px] border-green-100"
              custom={1}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore Our Services
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div className="flex-1/4" variants={imageVariants}>
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
      <motion.div
        className="grid grid-cols-3 w-[750px] gap-3"
        variants={badgesContainerVariants}
      >
        <motion.button
          className="bg-yellow-200 text-base font-medium text-green-100 border-2 rounded-full border-green-100 px-4 py-3"
          variants={badgeVariants}
          whileHover="hover"
        >
          🏆 78% Bid Success Rate
        </motion.button>
        <motion.button
          className="bg-yellow-200 text-base font-medium text-green-100 border-2 rounded-full border-green-100 px-4 py-3"
          variants={badgeVariants}
          whileHover="hover"
        >
          🌎 78% Global Experience
        </motion.button>
        <motion.button
          className="bg-yellow-200 text-base font-medium text-green-100 border-2 rounded-full border-green-100 px-4 py-3"
          variants={badgeVariants}
          whileHover="hover"
        >
          ⚖️ Compliance Focused
        </motion.button>
        <motion.button
          className="bg-yellow-200 text-base font-medium text-green-100 border-2 rounded-full border-green-100 px-4 py-3"
          variants={badgeVariants}
          whileHover="hover"
        >
          🔗 Integrated Solutions
        </motion.button>
        <motion.button
          className="bg-yellow-200 text-base font-medium text-green-100 border-2 rounded-full border-green-100 px-4 py-3"
          variants={badgeVariants}
          whileHover="hover"
        >
          📊 IMeasurable Results
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
