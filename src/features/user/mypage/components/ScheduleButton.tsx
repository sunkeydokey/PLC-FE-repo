import { useState } from 'react';
import { format, isEqual, isSameMonth } from 'date-fns';
import { PlusIcon } from '@heroicons/react/24/solid';

import { AddSchduleModal } from '@/features/user/mypage/components/AddSchduleModal';

export const ScheduleButton = ({
  day,
  today,
  firstDayCurrentMonth,
}: {
  day: Date;
  today: Date;
  firstDayCurrentMonth: Date;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`flex flex-col border w-full h-full overflow-hidden`}>
      {isOpen && (
        <AddSchduleModal
          closeModal={closeModal}
          date={format(day, 'yyyy년 MM월 dd일')}
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
      <div className='w-full min-h-[48px] flex flex-col justify-start mt-0.5'></div>
    </div>
  );
};
