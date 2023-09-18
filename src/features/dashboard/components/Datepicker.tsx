import { useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isEqual,
  isSameMonth,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';

import { CalendarDaysIcon } from '@heroicons/react/24/solid';

import { MonthDirection } from '@ui/calendar-items/MonthDirection';
import { Head } from '@ui/calendar-items/Head';

import {
  globalEndDate,
  globalStartDate,
  parsedGlobalEndDate,
  parsedGlobalStartDate,
} from '@/features/dashboard/store';

export const Datepicker = ({
  isCalendarVisible,
  setIsCalendarVisible,
}: {
  isCalendarVisible: boolean;
  setIsCalendarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // recoil selector -> date type -> string
  const parsedStart = useRecoilValue(parsedGlobalStartDate);
  const parsedEnd = useRecoilValue(parsedGlobalEndDate);

  // recoil atom
  const [RecoilStartDate, setGlobalStartDate] = useRecoilState(globalStartDate);
  const [RecoilEndDate, setGlobalEndDate] = useRecoilState(globalEndDate);

  // State for controlling DatePicker Component
  const [startDate, setStartDate] = useState(RecoilStartDate);
  const [endDate, setEndDate] = useState(RecoilEndDate);
  const [isPickingStart, setIsPickingStart] = useState(true);

  // variable disable selecting future days
  const today = startOfToday();

  // get Month
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));

  // get this month's Callendar
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  // direction function to prev or next month
  const previousMonth = () => {
    const firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPreviousMonth, 'MMM-yyyy'));
  };
  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className='w-1/3 mx-auto relative'>
      {/* display period of datas */}
      <div
        className={`${
          isCalendarVisible ? 'rounded-t-lg' : 'rounded-lg'
        } w-full relative bg-slate-700 overflow-hidden flex justify-center items-center`}>
        <p className='text-center py-2 text-stone-200'>
          <span>
            {isCalendarVisible ? format(startDate, 'yyyy-MM-dd') : parsedStart}
          </span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;{'-'}&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>
            {isCalendarVisible ? format(endDate, 'yyyy-MM-dd') : parsedEnd}
          </span>
        </p>

        {/* button opens the calendar */}
        <button
          onClick={() => setIsCalendarVisible(!isCalendarVisible)}
          className='absolute right-0 bg-stone-400 rounded-none'>
          <span className='sr-only'>Calendar</span>
          <CalendarDaysIcon className='w-10 h-full' />
        </button>
      </div>

      {/* Calendar */}
      {isCalendarVisible && (
        <div className='absolute w-full z-50'>
          <div className='bg-stone-400 w-full h-full mx-auto rounded-b-xl py-4'>
            {/* buttons to decide select start date or end date */}
            <div className='flex items-center justify-center gap-8 mb-2'>
              {/* select start date*/}
              <button
                onClick={() => setIsPickingStart(true)}
                className={`${
                  isPickingStart
                    ? 'text-stone-200 bg-slate-600 border-slate-600'
                    : 'text-slate-600 border-slate-600'
                } border-2 rounded-md px-2  font-semibold`}>
                시작일 선택
              </button>

              {/* select end date */}
              <button
                onClick={() => setIsPickingStart(false)}
                className={`${
                  !isPickingStart
                    ? 'text-stone-200 bg-slate-600 border-slate-600'
                    : 'text-slate-600 border-slate-600'
                } border-2 rounded-md px-2 font-semibold`}>
                종료일 선택
              </button>
            </div>

            {/* <(prev)  YYYY-MM  (next)> */}
            <MonthDirection
              previousMonth={previousMonth}
              nextMonth={nextMonth}
              text={format(firstDayCurrentMonth, 'yyyy년 MM월')}
            />

            {/* days header (weekdays) */}
            <Head />

            {/* day buttons for calendar */}
            <div className='grid grid-cols-7 text-sm'>
              {days.map((day) => (
                <div
                  key={day.toString()}
                  className={`${
                    isEqual(day, startDate) && 'bg-slate-600 rounded-l-full'
                  } ${isEqual(day, endDate) && 'bg-slate-600 rounded-r-full'} ${
                    isAfter(day, startDate) &&
                    isAfter(endDate, day) &&
                    'bg-slate-600'
                  } py-1.5`}>
                  <button
                    type='button'
                    onClick={() => {
                      // when selecting start date
                      if (isPickingStart) {
                        // if selected date overed end date
                        if (isAfter(day, endDate)) {
                          // this snap's end date will be next snap's start date
                          setStartDate(endDate);
                          // selected date will be next snap's start date
                          setEndDate(day);
                        } else {
                          // normal way selection
                          setStartDate(day);
                        }
                      }
                      // when selecting end date opposite logic will be applied
                      if (!isPickingStart) {
                        if (isAfter(startDate, day)) {
                          setEndDate(startDate);
                          setStartDate(day);
                        } else {
                          setEndDate(day);
                        }
                      }
                    }}
                    // can't select future dates
                    disabled={isAfter(day, today)}
                    className={`${
                      !(isAfter(endDate, day) && isAfter(day, startDate)) &&
                      !isEqual(day, startDate) &&
                      !isEqual(day, endDate) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      'text-stone-800'
                    } ${
                      !(isAfter(endDate, day) && isAfter(day, startDate)) &&
                      !isEqual(day, startDate) &&
                      !isEqual(day, endDate) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-600'
                    } ${isEqual(day, startDate) && 'text-stone-200'} ${
                      isEqual(day, endDate) && 'text-stone-200'
                    } ${
                      isAfter(endDate, day) &&
                      isAfter(day, startDate) &&
                      'text-stone-200'
                    }  mx-auto flex h-8 w-8 items-center justify-center rounded-full disabled:text-red-900`}>
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </div>
              ))}
            </div>

            <div className='flex items-center justify-center gap-8 mt-4'>
              {/* if calcel button is clicked reset local states */}
              <button
                className='px-2 py-1 border border-pink-900 bg-pink-900 rounded-md text-stone-200'
                onClick={() => {
                  setStartDate(RecoilStartDate);
                  setEndDate(RecoilEndDate);
                  setIsCalendarVisible(false);
                }}>
                취소
              </button>

              {/* if apply button is clicked apply local state to global states */}
              <button
                className='px-2 py-1 border border-slate-600 bg-slate-600 rounded-md text-stone-200'
                onClick={() => {
                  setGlobalStartDate(startDate);
                  setGlobalEndDate(endDate);
                  setIsCalendarVisible(false);
                }}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
