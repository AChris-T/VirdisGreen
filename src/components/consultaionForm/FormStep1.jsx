'use client';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import React, { useState } from 'react';

export default function FormStep1() {
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showTechnologyForm, setShowTechnologyForm] = useState(false);
  const { setFieldValue } = useFormikContext(); // Formik helper to update values

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-green-100 mb-4 font-semibold">SERVICE TYPE</h3>

      {/* Service Type Select */}
      <div className="flex flex-col gap-2">
        <label className=" text-green-100 font-medium">Service Type</label>
        <div className="border-black-400 border rounded-xl p-4">
          <Field
            name="serviceType"
            as="select"
            onChange={(e) => {
              const selected = e.target.value;
              setFieldValue('serviceType', selected);
              setShowSecondForm(selected === 'Bid-Writing Consulting');
              setShowTechnologyForm(selected === 'Technology Delivery');
            }}
            className="w-full text-green-100 h-full focus:outline-none"
          >
            <option value="">Select Option</option>
            <option value="Bid-Writing Consulting">
              Bid-Writing Consulting
            </option>
            <option value="Sustainability Consulting">
              Sustainability Consulting
            </option>
            <option value="Commodity Management">Commodity Management</option>
            <option value="Technology Delivery">Technology Delivery</option>
          </Field>
        </div>
        <ErrorMessage
          name="serviceType"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Bid-Writing Sector */}
      {showSecondForm && (
        <div className="flex flex-col gap-2">
          <label className="text-green-100 font-medium">
            Bid-Writing Sector
          </label>
          <div className="border-black-400 border rounded-xl p-4">
            <Field
              as="select"
              name="BidWritingSector"
              className="w-full text-green-100 h-full focus:outline-none"
            >
              <option value="">Select Option</option>
              <option value="Construction">Construction</option>
              <option value="Facilities Management ">
                Facilities Management
              </option>
              <option value="Healthcare and Social Care">
                Healthcare and Social Care
              </option>
              <option value="Education & youth services">
                Education & youth services
              </option>
              <option value="Education & youth services">
                Education & youth services
              </option>
              <option value="Commercial and Domestic Cleaning services">
                Commercial and Domestic Cleaning services
              </option>
              <option value="Charity">Charity</option>
              <option value="others">others </option>
            </Field>
          </div>
          <ErrorMessage
            name="BidWritingSector"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
      )}

      {/* Technology Delivery Type */}
      {showTechnologyForm && (
        <div className="flex flex-col gap-2">
          <label className="text-green-100 font-medium">Technology Type</label>
          <div className="border-black-400 border rounded-xl p-4">
            <Field
              as="select"
              name="TechnologyType"
              className="w-full text-green-100 h-full focus:outline-none"
            >
              <option value="">Select a service</option>
              <option value="App Development">App Development</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Website Development">Website Development</option>
              <option value="Cloud Migration">Cloud Migration</option>
              <option value="Process Automation">Process Automation</option>
              <option value="Software Development">Software Development</option>
            </Field>
          </div>
          <ErrorMessage
            name="TechnologyType"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
      )}
    </div>
  );
}
