'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ClientIcon from '../../public/icons/ClientIcon';
import ArrowRight from '../../public/icons/ArrowRight';
import ArrowLeft from '../../public/icons/ArrowLeft';

export default function Stories() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.3,
  });
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get('scrollTo');

    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 200); // Delay to ensure page has rendered
      }
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  const testimonials = [
    {
      id: 1,
      quote:
        'As an industrial, securing capacity and optimizing budget are key. In that perspective, you are looking for a transport partner committed on a long-term vision',
      author: 'Milton Zehino',
      position: 'Behavioral Science',
      company: 'TransGlobal Industries',
    },
    {
      id: 2,
      quote:
        'Viridis Green helped us secure a major government contract with their strategic bid writing approach. Their sustainability consulting has transformed our business model.',
      author: 'Sarah Johnson',
      position: 'Operations Director',
      company: 'EcoTech Systems',
    },
    {
      id: 3,
      quote:
        'Working with Viridis Green was a game-changer for us. Their commodity management strategies saved us 25% on operational costs while improving quality.',
      author: 'James Chen',
      position: 'CEO',
      company: 'Skyline Solutions',
    },
    {
      id: 4,
      quote:
        'Their technology delivery team integrated our new systems flawlessly. The training and support they provided made the transition smooth for our entire team.',
      author: 'Amelia Rodriguez',
      position: 'CTO',
      company: 'Nexus Technologies',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 70,
        delay: i * 0.1,
      },
    }),
    hover: {
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const quoteMarkVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials">
      {' '}
      <motion.div
        ref={sectionRef}
        className="bg-yellow-200 py-16 md:px-12 rounded-lg relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="absolute right-0 -top-12 md:top-0 opacity-50"
          variants={quoteMarkVariants}
        >
          <ClientIcon />{' '}
        </motion.div>

        {/* Heading */}
        <div className="mb-10 flex flex-col items-center w-full relative z-10">
          <motion.h2
            className="text-[30px] md:text-4xl  text-center font-bold text-green-100 mb-4"
            variants={titleVariants}
          >
            Our Clients' Success Stories
          </motion.h2>
          <motion.p
            className="text-black-400 text-center md:w-[570px] text-lg"
            variants={titleVariants}
          >
            Our expertise helps businesses secure contracts, streamline
            operations, and drive success. Here are some key projects.
          </motion.p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-green-100 text-white p-8 rounded-lg flex-shrink-0 w-[300px] md:w-[400px] snap-center"
              whilehover="hover"
            >
              <p className="text-lg font-medium mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-200">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.button
            onClick={scrollLeft}
            className="bg-green-100 cursor-pointer text-white h-10 w-10 rounded-full flex items-center justify-center shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft />
          </motion.button>

          <motion.button
            onClick={scrollRight}
            className="bg-green-100 cursor-pointer text-white h-10 w-10 rounded-full flex items-center justify-center shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
