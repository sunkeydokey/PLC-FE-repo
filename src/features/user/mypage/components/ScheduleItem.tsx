import { useState } from 'react';

import { EditSchedule } from '@/features/user/mypage/components/handle-schedule/EditSchedule';

import { Schedule } from '@/features/user/types';

export const ScheduleItem = ({
  date,
  title,
  category,
  id,
  description,
  email,
}: Schedule) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <EditSchedule
          email={email}
          closeModal={closeModal}
          date={date}
          title={title}
          categoryName={category}
          id={id}
          description={description}
        />
      )}
      <button
        onClick={openModal}
        className='w-[95%] trucate self-center overflow-hidden bg-blue-200 mb-0.5'>
        {title}
      </button>
    </>
  );
};
