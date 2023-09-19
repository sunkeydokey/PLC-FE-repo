import { useState } from 'react';

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';

import { MonthDirection } from '@ui/calendar-items/MonthDirection';
import { Head } from '@ui/calendar-items/Head';
import { ScheduleButton } from './ScheduleButton';

export const Calendar = ({ email }: { email: string | undefined }) => {
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
    <section className='grow w-full flex flex-col bg-slate-700 mx-auto rounded-xl'>
      <MonthDirection
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        text={format(firstDayCurrentMonth, 'yyyy년 MM월 스케쥴')}
      />

      <div className='relative flex flex-col mx-2 mb-4 h-full'>
        <Head />
        <div className='grow grid grid-cols-7 text-xs leading-6 text-center border border-stone-300'>
          {email &&
            days.map((day) => (
              <ScheduleButton
                key={day.toString()}
                email={email}
                day={day}
                today={today}
                firstDayCurrentMonth={firstDayCurrentMonth}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
