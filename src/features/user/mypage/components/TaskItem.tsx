import { useState } from 'react';

import { EditSchedule } from '@/features/user/mypage/components/handle-schedule/EditSchedule';

import { receivedSchedule } from '@/features/user/types';

export const TaskItem = ({
  date,
  title,
  category,
  id,
  description,
  email,
}: receivedSchedule) => {
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
        className='border rounded-md px-1 text-stone-800 font-bold mb-0.5 bg-slate-100'>
        {title}
      </button>
    </>
  );
};
