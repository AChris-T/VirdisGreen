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
        'We are committed to helping businesses secure contracts through strategic bid writing, procurement expertise, and compliance support. Our tailored approach maximizes success rates, ensuring clients stay competitive in their industries.',
    },
    {
      title:
        'What industries do you specialize in for bid writing and procurement?s',
      content: '',
    },
    {
      title: 'What makes your sustainability consulting different?',
      content: '',
    },
    {
      title: 'How do you ensure compliance with contract requirements?',
      content: '',
    },
    {
      title: 'Do you offer ongoing support after bid submission?',
      content: '',
    },
    {
      title: 'How can I get started with your services?',
      content: '',
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
              className="w-full flex justify-between items-center text-start  py-4 text-[24px] font-normal text-yellow-200 focus:outline-none"
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
                  <div className="mb-4 border-green-100 text-black-400">
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
