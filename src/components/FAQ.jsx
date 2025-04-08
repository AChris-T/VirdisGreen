'use client';
import React, { useState } from 'react';
import ArrowUp from '../../public/icons/ArrowUp';
import ArrowDown from '../../public/icons/ArrowDown';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: 'How can Viridis Green help my business secure contracts?',
      content:
        'We are committed to helping businesses secure contracts through strategic bid writing, procurement expertise, and compliance support. Our tailored approach maximises success rates, ensuring clients stay competitive in their industries.',
    },
    {
      title:
        'What industries do you specialise in for bid writing and procurement?',
      content:
        'We specialise in a wide range of industries, including construction, healthcare, IT, public sector, and more. Our team has extensive experience tailoring bid writing and procurement strategies to meet the unique needs of each sector.',
    },
    {
      title: 'What makes your sustainability consulting different?',
      content:
        'Our sustainability consulting is distinguished by a holistic, tailored approach that aligns with your business objectives. We focus on practical, actionable solutions to ensure compliance with environmental regulations while enhancing long-term business success.',
    },
    {
      title: 'How do you ensure compliance with contract requirements?',
      content:
        'We ensure compliance by meticulously reviewing all contract requirements, supporting businesses in understanding their obligations, and guiding them through the necessary documentation and processes. Our expert team also offers training and support to ensure ongoing compliance.',
    },
    {
      title: 'Do you offer ongoing support after bid submission?',
      content:
        'Yes, we offer continuous support after bid submission to address any clarifications, questions, or adjustments that may arise. Our team stays engaged throughout the evaluation process, ensuring your business remains informed and prepared.',
    },
    {
      title: 'How can I get started with your services?',
      content:
        'Getting started with our services is simple. Just reach out to us through our contact page, and one of our consultants will schedule an initial consultation to discuss your business needs and how we can assist you with bid writing, procurement, or sustainability consulting.',
    },
  ];
  return (
    <div className="bg-green-100 text-white px-3 md:px-[43px] py-[100px]">
      <h3 className="md:text-[58px] text-[38px]">Got a question?</h3>
      <h3 className="md:text-[58px] text-[38px]">FAQ</h3>
      <div className="w-full mt-10 ">
        {items.map((item, index) => (
          <div
            key={index}
            className={` overflow-hidden py-5 text-white border-b-1 border-gray-100 ${
              openIndex === index ? '' : ''
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-start  py-4 text-base md:text-[24px] font-normal text-yellow-200 focus:outline-none"
            >
              {item.title}
              {openIndex === index ? (
                <FaArrowUp className="text-yellow-200" />
              ) : (
                <FaArrowDown />
              )}
            </button>

            {/* Content */}
            <div>
              {openIndex === index && item.content && (
                <div className=" flex gap-2  w-full items-center ">
                  <div className="mb-4 border-green-100 md:w-[70%] w-[70%] text-black-400">
                    {item.content}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
