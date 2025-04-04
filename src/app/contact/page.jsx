'use client';
import React from 'react';
import FacebookIcon from '../../../public/icons/FacebookIcon';
import TwitterIcon from '../../../public/icons/TwitterIcon';
import LinkdinIcon from '../../../public/icons/LinkdinIcon';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Vector from '../../../public/Vector.png';
import Image from 'next/image';

export default function page() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      inquiryType: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      inquiryType: Yup.string().required('Please select an inquiry type'),
      message: Yup.string().required('Message cannot be empty'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form Submitted', values);
      alert('Message sent successfully!');
      resetForm();
    },
  });
  return (
    <div className="py-[75px] px-2 md:px-[39px] gap-[10px] flex flex-col">
      <div className="flex w-full  justify-between  flex-col lg:flex-row mt-[30px] md:mt-[105px] gap-[30px] lg:gap-[222px]">
        <div className="flex flex-col justify-center gap-[50px]  ">
          <h3 className="text-[38px] md:text-[80px] w-full font-semibold md:leading-24 text-green-100 lg:w-[647px] flex justify-center items-center text-center lg:text-start ">
            Your Next Big Opportunity Starts Here! 🚀
          </h3>
          <div className="grid grid-cols-1 px-3 md:grid-cols-2 justify-center gap-8 md:gap-20 md:mx-20 lg:mx-0">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[24px] text-green-100">
                Direct Contact
              </h3>
              <h3 className="flex gap-3 items-center font-semibold text-base text-green-100">
                Email:
                <span className="text-black-400 font-normal">
                  collab@viridusgreen.co
                </span>
              </h3>
              <h3 className="flex gap-8 items-center font-semibold text-base text-green-100">
                Tel:
                <span className="text-black-400 font-normal">
                  +44 20 7946 XXXX
                </span>
              </h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                Office:
                <span className="text-black-400 w-full md:w-[163px] font-normal">
                  123 Business Centre, Innovation Park, London, EC2A 1NT, United
                  Kingdom{' '}
                </span>
              </h3>
            </div>
            <div className="flex flex-col gap-4 ]">
              <h3 className="font-semibold text-[24px] text-green-100">
                Social Media
              </h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                <FacebookIcon />
                <span className="text-black-400 w-[163px] font-normal">
                  @viridusgreen
                </span>
              </h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                <TwitterIcon />
                <span className="text-black-400 w-[163px] font-normal">
                  @viridusgreen.co{' '}
                </span>
              </h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                <LinkdinIcon />
                <span className="text-black-400 w-[163px] font-normal">
                  @viridusgreen
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end border-[2px] border-black-500 shadow-2xl">
          <div className="flex flex-col   w-full p-[32px]">
            <h3 className="text-[24px] font-bold text-green-100 justify-center flex w-full ">
              Contact Us
            </h3>
            <p className="text-sm text-black-400 justify-center flex w-full">
              Get in touch with us, we will reach you within 24 hours
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 mt-[32px]"
            >
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="block font-bold text-green-100 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                  {...formik.getFieldProps('fullName')}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.fullName}
                  </p>
                ) : null}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="block font-bold text-green-100 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                ) : null}
              </div>

              {/* Inquiry Type */}
              <div className="flex flex-col gap-2">
                <label className="block font-bold text-green-100 text-sm">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                  {...formik.getFieldProps('inquiryType')}
                >
                  <option value="">Select Option</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>
                {formik.touched.inquiryType && formik.errors.inquiryType ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.inquiryType}
                  </p>
                ) : null}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="block font-bold text-green-100 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                  {...formik.getFieldProps('message')}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.message}
                  </p>
                ) : null}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-100 text-yellow-200 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
              >
                Send Us A Message{' '}
                <Image src={Vector} alt="" width={20} height={20} priority />
              </button>
            </form>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
