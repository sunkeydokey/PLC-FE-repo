import { useState } from 'react';

import { Modal } from '@/features/user/mypage/components/handle-schedule/Modal';
import { useInput } from '@ui/inputs/useInput';

import { requestPostSchedule } from '@/features/user/api/schedule';
import { category } from '@/utils/config';

export const AddSchdule = ({
  email,
  closeModal,
  date,
}: {
  email: string;
  closeModal: () => void;
  date: string;
}) => {
  const [title, setTitle] = useInput('');
  const [description, setDescription] = useInput('');
  const [selected, setSelected] = useState(category[0]);

  const handlePostSchedule = async () => {
    const { data } = await requestPostSchedule({
      email: email,
      date: date,
      title: title || '제목 없음',
      description,
      category: selected.name,
    });
    if (data == 'SUCCESS') closeModal();
  };

  return (
    <Modal
      closeModal={closeModal}
      date={date}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      selected={selected}
      setSelected={setSelected}>
      <div className='flex w-full gap-4 justify-center items-center'>
        <button
          className='text-lg text-inherit bg-slate-400 border border-slate-400 hover:bg-slate-400/50 hover:text-slate-400 rounded-md px-2'
          onClick={handlePostSchedule}>
          추가
        </button>
        <button
          className='text-lg text-slate-400 border border-slate-400 hover:bg-slate-200/50 rounded-md px-2'
          onClick={closeModal}>
          취소
        </button>
      </div>
    </Modal>
  );
};
