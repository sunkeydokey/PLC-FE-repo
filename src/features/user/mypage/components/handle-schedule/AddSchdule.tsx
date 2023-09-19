import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
  const queryClient = useQueryClient();

  const [title, setTitle] = useInput('');
  const [description, setDescription] = useInput('');
  const [message, setMessage] = useState('');

  const [selected, setSelected] = useState(category[0]);

  const handlePostSchedule = async () => {
    const { data } = await requestPostSchedule({
      email: email,
      date: date,
      title: title || '제목 없음',
      description,
      category: selected,
    });
    if (data == 'SUCCESS') closeModal();
  };

  const { mutate: postScheduleMutation } = useMutation(handlePostSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries(['ScheduleOfDate', date + email]);
      closeModal();
    },
    onError: () => setMessage('잠시 후에 다시 시도해주세요.'),
  });

  return (
    <Modal
      closeModal={closeModal}
      date={date}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      selected={selected}
      setSelected={setSelected}
      message={message}>
      <div className='flex w-full gap-4 justify-center items-center'>
        <button
          className='text-lg text-inherit bg-slate-400 border border-slate-400 hover:bg-slate-400/50 hover:text-slate-400 rounded-md px-2'
          onClick={() => postScheduleMutation()}>
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
