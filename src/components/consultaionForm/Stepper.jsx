'use client';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import ArrowL from '../../../public/icons/ArrowL';
import { format, parseISO } from 'date-fns';
import Checked from '../../../public/icons/Checked';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';

const steps = [1, 2, 3];
const validationSchemas = [
  Yup.object({
    serviceType: Yup.string().required('Service type is required'),
  }),
  Yup.object({
    date: Yup.date().required('Please select a date'),
    time: Yup.string().required('Please select a time'),
  }),
  Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Please enter your message'),
  }),
];

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const generateBookingCode = () => {
    const randomLetters = Array.from({ length: 3 }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26))
    ).join('');
    const randomNumber = Math.floor(1000000 + Math.random() * 9000000);
    return `${randomLetters}${randomNumber}`;
  };

  const sendBookingEmail = (valuesWithCode) => {
    setIsLoading(true);
    const templateParams = {
      booking_code: valuesWithCode.bookingCode,
      service_type: valuesWithCode.serviceType,
      technology_type: valuesWithCode.TechnologyType || 'N/A',
      bid_sector: valuesWithCode.BidWritingSector || 'N/A',
      full_name: valuesWithCode.name,
      email: valuesWithCode.email,
      phone_number: valuesWithCode.phoneNumber,
      date: valuesWithCode.date
        ? format(parseISO(valuesWithCode.date), 'PPP')
        : '',
      time: valuesWithCode.time,
      message: valuesWithCode.message,
    };

    emailjs
      .send(
        'service_08znqmi',
        'template_fzhl5qc',
        templateParams,
        'vQtKQClsm9qFgsIo0'
      )
      .then(
        (result) => {
          console.log('Booking email sent successfully!', result.text);
          toast.success('Booking confirmed! Check your email for details.', {
            position: 'top-right',
            duration: 4000,
            style: {
              backgroundColor: '#4CAF50',
              color: 'white',
            },
          });
          setFormData(valuesWithCode);
          setBookingCode(valuesWithCode.bookingCode);
          setCompleted(true);
        },
        (error) => {
          console.error('Email sending failed:', error);
          toast.error(
            'Failed to send booking confirmation. Please try again.',
            {
              position: 'top-right',
              duration: 4000,
              style: {
                backgroundColor: 'red',
                color: 'white',
              },
            }
          );
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full  mx-auto lg:mx-0  md:w-[506px] mr-10 border-2 rounded-[22px] border-black-500 px-2 py-6 md:p-[25px]">
      <Toaster />
      {!completed && (
        <div className="flex flex-col items-center w-full space-x-4 py-6">
          <h3 className="text-[24px] text-green-100 font-bold">
            Book Consultation
          </h3>
          <p className="mt-[4px] text-green-400 text-center ">
            Get in touch with us, we will reach you within 24 hours
          </p>
          <div className="flex flex-col mt-[24px]">
            <div className="flex justify-center mb-10 space-x-2">
              {steps.map((label, index) => (
                <div key={index} className="flex items-center w-full">
                  <div
                    className={`w-14 md:w-20 h-10 rounded-full flex items-center justify-center border 
                  ${
                    currentStep === index
                      ? 'bg-yellow-200 border-[2px] border-green-100'
                      : 'bg-white border-[#F0F2F5]'
                  }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium 
                    ${currentStep === index ? 'bg-green-100' : 'bg-[#A9B5CB]'}`}
                    >
                      {index + 1}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-16 h-0.5 bg-gray-300 mx-2" />
                  )}
                </div>
              ))}
            </div>
            <Formik
              initialValues={{
                name: '',
                email: '',
                serviceType: '',
                TechnologyType: '',
                BidWritingSector: '',
                phoneNumber: '',
                message: '',
                time: '',
                date: null,
              }}
              validationSchema={validationSchemas[currentStep]}
              onSubmit={(values, actions) => {
                if (isLastStep) {
                  const code = generateBookingCode();
                  const valuesWithCode = { ...values, bookingCode: code };

                  console.log('Final Values:', valuesWithCode);
                  sendBookingEmail(valuesWithCode);
                } else {
                  handleNext();
                  actions.setTouched({});
                }
              }}
            >
              {({ values }) => (
                <Form className="space-y-4 w-full">
                  {currentStep === 0 && <FormStep1 />}
                  {currentStep === 1 && <FormStep2 />}
                  {currentStep === 2 && <FormStep3 />}

                  <div className="flex flex-col-reverse gap-4 justify-between mt-6">
                    {currentStep > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center cursor-pointer justify-center gap-3 text-black px-2 py-2 rounded"
                      >
                        <ArrowL />
                        Go Back
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`bg-green-100 font-semibold  text-white px-4 py-4 w-full rounded-[12px] ${
                        isLoading
                          ? 'cursor-not-allowed opacity-70'
                          : 'cursor-pointer'
                      }`}
                    >
                      {isLoading
                        ? 'Submitting...'
                        : isLastStep
                          ? 'Submit'
                          : 'Proceed'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
      {completed ? (
        <div className="text-center flex-col flex justify-center items-center py-10">
          <div className="bg-yellow-200 w-[80px] h-[80px] flex justify-center items-center rounded-full">
            <Checked />
          </div>
          <h3 className="mt-[24px] text-2xl font-bold text-green-100">
            Booking Confirmed
          </h3>
          <p className="mt-6 text-gray-600">Your booking has been completed </p>
          <div className="bg-yellow-200 w-full flex flex-col gap-5 items-start mt-[24px] rounded-[20px] p-4">
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-black-400 font-medium text-sm">
                  Service Type:
                </h3>
                <p className="text-green-100">{formData?.serviceType}</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-black-400 font-medium text-sm">
                  Date & Time:
                </h3>
                <p className="text-green-100">
                  {formData?.date ? format(parseISO(formData.date), 'PPP') : ''}{' '}
                  {formData?.time || ''}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-black-400 font-medium text-sm">
                Booking Number:
              </h3>
              <p className="text-green-100">{formData?.bookingCode}</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-black-400 font-medium text-sm">
                Our Office:
              </h3>
              <p className="text-green-100 text-start pr-20">
                123 Business Centre, Innovation Park, London, EC2A 1NT, United
                Kingdom
              </p>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
