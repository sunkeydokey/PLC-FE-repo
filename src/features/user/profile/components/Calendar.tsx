import { useState } from 'react';

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameMonth,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';

import { PlusIcon } from '@heroicons/react/24/solid';

import { MonthDirection } from '@ui/calendar-items/MonthDirection';
import { Head } from '@ui/calendar-items/Head';

export const Calendar = () => {
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
    <div className='basis-1/2 flex flex-col gap-4 mb-6'>
      <section className='w-11/12 flex flex-col bg-slate-700  mx-auto rounded-xl'>
        <MonthDirection
          previousMonth={previousMonth}
          nextMonth={nextMonth}
          text={format(firstDayCurrentMonth, 'yyyy년 MM월 스케쥴')}
        />

        <div className='flex flex-col mx-2 mb-4'>
          <Head />
          <div className='grid grid-cols-7 text-xs leading-6 text-center border border-stone-300'>
            {days.map((day) => (
              <div
                key={day.toString()}
                className={`flex flex-col border w-full h-full overflow-hidden`}>
                <time
                  className='border-b font-semibold border-stone-300 w-full flex justify-between items-center'
                  dateTime={format(day, 'yyyy-MM-dd')}>
                  <p
                    className={`${
                      (isEqual(today, day) && 'text-pink-500') ||
                      (isSameMonth(day, firstDayCurrentMonth) &&
                        'text-stone-200') ||
                      'text-gray-500'
                    } px-2 text-start`}>
                    {isEqual(today, day) ? 'Today' : format(day, 'd')}
                  </p>
                  <button className='mr-1 border border-cyan-200 rounded'>
                    <PlusIcon
                      className='w-4 h-4 fill-cyan-200'
                      aria-hidden='true'
                    />
                  </button>
                </time>
                <div className='w-full min-h-[64px] flex flex-col gap-1 justify-start mt-1'></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
