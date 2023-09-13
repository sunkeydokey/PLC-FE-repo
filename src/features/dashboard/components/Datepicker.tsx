import { useState } from 'react';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isAfter,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from 'date-fns';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const classNames = (...classes: (boolean | string)[]) =>
  classes.filter((className: string | boolean) => Boolean(className)).join(' ');

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
export const Datepicker = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  return (
    <div className='bg-stone-200'>
      <div className='flex items-center'>
        <h2 className='flex-auto font-semibold text-gray-900'>
          {format(firstDayCurrentMonth, 'yyyy년 MM월')}
        </h2>
        <button
          type='button'
          onClick={previousMonth}
          className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
          <span className='sr-only'>Previous month</span>
          <ChevronLeftIcon className='w-5 h-5' aria-hidden='true' />
        </button>
        <button
          onClick={nextMonth}
          type='button'
          className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
          <span className='sr-only'>Next month</span>
          <ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
        </button>
      </div>
      <div className='grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500'>
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className='grid grid-cols-7 mt-2 text-sm'>
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              'py-1.5',
            )}>
            <button
              type='button'
              onClick={() => setSelectedDay(day)}
              disabled={isAfter(day, today)}
              className={classNames(
                isEqual(day, selectedDay) && 'text-stone-200',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  'text-stone-800',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-400',
                isEqual(day, selectedDay) && 'bg-stone-600',
                !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                (isEqual(day, selectedDay) || isToday(day)) &&
                  'text-sky-400 font-semibold',
                'mx-auto flex h-8 w-8 items-center justify-center rounded-full',
              )}>
              <time dateTime={format(day, 'yyyy-MM-dd')}>
                {format(day, 'd')}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
