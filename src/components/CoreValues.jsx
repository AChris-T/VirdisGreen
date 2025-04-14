'use client';
import { useState } from 'react';
import ArrowDown from '../../public/icons/ArrowDown';
import ArrowUp from '../../public/icons/ArrowUp';

export default function CoreValues() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: 'Excellence in Bid Success',
      content:
        'We are committed to helping businesses secure contracts through strategic bid writing, procurement expertise, and compliance support. Our tailored approach maximizes success rates, ensuring clients stay competitive in their industries.',
    },
    { title: 'Sustainable & Ethical Practices', content: '' },
    { title: 'Innovation & Growth', content: '' },
  ];
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-[30px] md:text-[42px] font-bold text-green-100">
        Our Core Values
      </h3>
      <h3 className="text-[18px] text-green-400 w-full lg:w-[644px] text-center mt-[10px] px-2">
        With a proven track record in bids, sustainability, and business growth,
        we deliver tailored solutions to help companies secure contracts and
        scale.
      </h3>
      <div className="w-full px-3 lg:px-[100px] my-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden mb-3 ${
              openIndex === index ? 'bg-[#E6EFE3]' : 'bg-gray-100'
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex text-start justify-between items-center px-6 py-4 text-[24px] font-normal text-green-100 focus:outline-none"
            >
              {item.title}
              <div
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 ' : 'rotate-0'
                }`}
              >
                <ArrowDown />
              </div>{' '}
            </button>

            {/* Content */}
            <div>
              {openIndex === index && item.content && (
                <div className=" flex gap-2  w-full items-center px-8">
                  <div className="mb-4 border-l-3 pl-3 border-green-100 text-black-400">
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
