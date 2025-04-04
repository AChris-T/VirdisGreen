'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  'Bid Writing Support',
  'Government Tenders',
  'Risk Management',
  'Strategy',
  'Funding & Grants',
  'Contract Wins',
  'Innovation',
  'Sustainability',
  'Procurement Expertise',
  'Industry Insights'
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      color: "#00A870",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-16 px-4"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover="hover"
          className="relative group"
        >
          <motion.h3 
            className="text-xl md:text-2xl font-medium text-green-100 cursor-pointer"
          >
            {service}
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-100 origin-left"
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 