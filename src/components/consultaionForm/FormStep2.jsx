import { Field, useFormikContext } from 'formik';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DayPicker } from 'react-day-picker';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import 'react-day-picker/style.css';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  subMonths,
  addMonths,
  isBefore,
  isSameMonth,
  isSameDay,
} from 'date-fns';

export default function FormStep2() {
  const { setFieldValue } = useFormikContext(); // <-- This line fixes the issue
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('00:00');

  const prevMonth = (e) => {
    e.preventDefault();
    if (!isBefore(subMonths(currentMonth, 1), today)) {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
  };

  const nextMonth = (e) => {
    e.preventDefault();
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const selectDate = (day) => {
    if (!isBefore(day, today)) {
      setSelectedDate(day);
      setFieldValue('date', format(day, 'yyyy-MM-dd'));
    }
    console.log(selectDate);
  };

  const generateDates = () => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 0 });
    const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 0 });
    let days = [];
    let day = start;
    while (day <= end) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  return (
    <div>
      <div className="rounded-md ">
        <h2 className="text-xl  font-semibold  text-green-100 mb-4">
          DATE & TIME
        </h2>
        {/*   <DayPicker
          mode="single"
          selected={values.date}
          onSelect={(date) => setFieldValue('date', date)}
          disabled={(date) =>
            isBefore(date, startOfToday()) || isSameDay(date, startOfToday())
          }
          modifiersClassNames={{
            selected:
              ' text-green-100 bg-yellow-200 text-[20px]  border-green-100 font-semibold rounded-full',
            today: 'text-green-100 font-semibold',
            disabled:
              'text-green-100 line-through cursor-not-allowed opacity-40',
          }}
          className="rounded-lg text-black-400 px-2 py-4  shadow-lg  md:py-6 mx-auto  text-lg w-full"
          classNames={{
            table: '', // Ensures equal column widths
            head: 'text-green-100',
            head_row: 'w-full text-[35px] text-green-100',
            head_cell: 'text-green-100 font-bold text-base  text-center',
            cell: 'text-center  h-12',
            day: 'h-full text-base p-[4px] md:py-2 md:px-1',
            caption_label: 'text-green-100 font-bold text-xl',
            nav_button: 'text-green-600 hover:text-green-800 text-[10px]', // The class will still work for other styles
          }}
        /> */}

        <div className="bg-white rounded-[20px]  border-[#EBEBEB] border p-[20px] shadow-lg w-full">
          <div className="flex justify-between  items-center mb-4">
            <h2 className="text-base text-green-100 font-semibold">
              {format(currentMonth, 'MMMM yyyy')}{' '}
            </h2>
            <div>
              <button
                onClick={prevMonth}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <IoIosArrowBack />
              </button>

              <button
                onClick={nextMonth}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 mb-8 gap-2 text-start text-green-100  font-semibold">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 space-x-12 gap-2  text-center ">
            {generateDates().map((day) => (
              <div
                key={day}
                onClick={() => selectDate(day)}
                className={`w-10 h-10  ${
                  isBefore(day, today)
                    ? 'text-gray-400 line-through cursor-not-allowed'
                    : 'hover:bg-gray-200 text-green-400 cursor-pointer'
                }  flex justify-center font-medium  items-center rounded-full  ${
                  format(day, 'yyyy-MM-dd') ===
                  format(selectedDate, 'yyyy-MM-dd')
                    ? 'bg-yellow-200 border-2 border-green-100 text-green-100'
                    : ''
                }`}
              >
                {format(day, 'd')}
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-between">
            <h3 className="text-[18px] font-semibold text-green-100">Time</h3>
            <div className="flex items-center gap-2">
              <input
                type="time"
                name="time"
                value={selectedTime || ''}
                onChange={(e) => {
                  setSelectedTime(e.target.value);
                  setFieldValue('time', e.target.value);
                }}
                className="p-2  rounded-lg focus:outline-none "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
