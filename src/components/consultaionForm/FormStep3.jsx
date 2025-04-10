import { ErrorMessage, Field } from 'formik';
import React from 'react';

export default function FormStep3() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label className=" text-green-100 font-medium">Full Name</label>
        <div className="border-black-400 border   rounded-xl p-4">
          <Field
            name="name"
            type="text"
            className="w-full text-green-100 h-full focus:outline-none "
            placeholder="Enter your name"
          />
        </div>
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className=" text-green-100 font-medium">Phone Number</label>
        <div className="border-black-400 border   rounded-xl p-4">
          <Field
            name="phoneNumber"
            type="text"
            className="w-full text-green-100 h-full focus:outline-none "
            placeholder="Enter your name"
          />
        </div>
        <ErrorMessage
          name="phoneNumber"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className=" text-green-100 font-medium">Email</label>
        <div className="border-black-400 border   rounded-xl p-4">
          <Field
            name="email"
            type="email"
            className="w-full text-green-100 h-full focus:outline-none "
            placeholder="Enter your name"
          />
        </div>
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className=" text-green-100 font-medium">Message</label>
        <div className="border-black-400 border   rounded-xl p-4">
          <Field
            name="message"
            type="textarea"
            className="w-full text-green-100 h-full focus:outline-none "
            placeholder="Enter your name"
          />
        </div>
        <ErrorMessage
          name="message"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
}
