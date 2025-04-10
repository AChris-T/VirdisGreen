import { ErrorMessage, Field } from 'formik';
import React from 'react';

export default function FormStep1() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-green-100 mb-4 font-semibold">SERVICE TYPE</h3>
      <div className="flex flex-col gap-2">
        <label className=" text-green-100 font-medium">Service Type</label>
        <div className="border-black-400 border   rounded-xl p-4">
          <Field
            name="serviceType"
            as="select"
            type="text"
            className="w-full text-green-100 h-full focus:outline-none "
            placeholder="Enter your name"
          >
            <option value="">Select a service</option>
            <option value="cleaning">Cleaning</option>
            <option value="delivery">Delivery</option>
            <option value="maintenance">Maintenance</option>
          </Field>
        </div>
        <ErrorMessage
          name="serviceType"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="block  text-green-100 font-medium">
          Bid-Writing Sector{' '}
        </label>
        <div className="border-black-400 border   rounded-xl p-4">
          <Field
            as="select"
            name="BidWritingSector"
            className="w-full text-green-100 h-full focus:outline-none "
          >
            <option value="">Select a service</option>
            <option value="cleaning">Cleaning</option>
            <option value="delivery">Delivery</option>
            <option value="maintenance">Maintenance</option>
          </Field>
        </div>
        <ErrorMessage
          name="BidWritingSector"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
}
