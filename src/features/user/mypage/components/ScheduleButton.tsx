import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { format, isEqual, isSameMonth } from 'date-fns';
import { PlusIcon } from '@heroicons/react/24/solid';

import { AddSchdule } from '@/features/user/mypage/components/handle-schedule/AddSchdule';
import { requestScheduleOfDate } from '@/features/user/api/schedule';
import { ScheduleItem } from './ScheduleItem';

export const ScheduleButton = ({
  email,
  day,
  today,
  firstDayCurrentMonth,
}: {
  email: string;
  day: Date;
  today: Date;
  firstDayCurrentMonth: Date;
}) => {
  if (!email) return;

  const [isOpen, setIsOpen] = useState(false);
  const DATE = format(day, 'yyyy-MM-dd');
  const { data, isLoading, isError } = useQuery(
    ['ScheduleOfDate', DATE + email],
    () => requestScheduleOfDate(DATE, email),
  );

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  if (isLoading) <div>loading</div>;
  if (isError) <div>error</div>;

  return (
    <div className={`flex flex-col border w-full h-full overflow-hidden`}>
      {isOpen && (
        <AddSchdule
          email={email}
          closeModal={closeModal}
          date={format(day, 'yyyy-MM-dd')}
        />
      )}
      <time
        className='border-b font-semibold border-stone-300 w-full flex justify-between items-center'
        dateTime={format(day, 'yyyy-MM-dd')}>
        <p
          className={`${
            (isEqual(today, day) && 'text-pink-500') ||
            (isSameMonth(day, firstDayCurrentMonth) && 'text-stone-200') ||
            'text-gray-500'
          } px-2 text-start`}>
          {isEqual(today, day) ? 'Today' : format(day, 'd')}
        </p>
        <button
          onClick={openModal}
          className='mr-1 border border-cyan-200 rounded bg-cyan-200/20 hover:bg-cyan-200/40'>
          <PlusIcon className='w-4 h-4 fill-stone-200' aria-hidden='true' />
        </button>
      </time>
      <div className='w-full min-h-[48px] flex flex-col justify-start mt-0.5'>
        {data &&
          !!data.length &&
          data.map((schedule) => (
            <ScheduleItem
              key={schedule.id}
              date={DATE}
              title={schedule.title}
              category={schedule.category}
              id={schedule.id}
              description={schedule.description}
              email={email}
            />
          ))}
      </div>
    </div>
  );
};
