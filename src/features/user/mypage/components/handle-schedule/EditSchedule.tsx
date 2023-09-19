import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Modal } from '@/features/user/mypage/components/handle-schedule/Modal';
import { useInput } from '@ui/inputs/useInput';

import {
  requestDeleteSchedule,
  requestUpdateSchedule,
} from '@/features/user/api/schedule';

export const EditSchedule = ({
  title,
  description,
  categoryName,
  id,
  email,
  closeModal,
  date,
}: {
  title: string;
  description: string;
  categoryName: string;
  id: number;
  email: string;
  closeModal: () => void;
  date: string;
}) => {
  const queryClient = useQueryClient();
  console.log(email);

  const [titleEdit, setTitleEdit] = useInput(title);
  const [descriptionEdit, setDescriptionEdit] = useInput(description);
  const [message, setMessage] = useState('');

  const [selected, setSelected] = useState(categoryName);

  const handleUpdateSchedule = async (
    id: number,
    title: string,
    description: string,
    category: string,
  ) => {
    const newSchedule = {
      id,
      title,
      description,
      category,
    };
    await requestUpdateSchedule(newSchedule);
  };

  const handleDeleteSchedule = async () => {
    const schduleInfo = {
      id: id as number,
      email,
    };
    await requestDeleteSchedule(schduleInfo);
  };

  const { mutate: updateScheduleMutation } = useMutation(
    () => handleUpdateSchedule(id, titleEdit, descriptionEdit, selected),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['ScheduleOfDate', date + email]);
        closeModal();
      },
      onError: () => setMessage('잠시 후에 다시 시도해주세요.'),
    },
  );
  const { mutate: deleteScheduleMutation } = useMutation(handleDeleteSchedule, {
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
      title={titleEdit}
      setTitle={setTitleEdit}
      description={descriptionEdit}
      setDescription={setDescriptionEdit}
      selected={selected}
      setSelected={setSelected}
      message={message}>
      <div className='flex w-full gap-4 justify-center items-center'>
        <button
          onClick={() => updateScheduleMutation()}
          className='text-lg text-inherit bg-slate-400 border border-slate-400 hover:bg-slate-400/50 hover:text-slate-400 rounded-md px-2'>
          수정
        </button>
        <button
          className='text-lg text-slate-400 border border-slate-400 hover:bg-slate-200/50 rounded-md px-2'
          onClick={() => deleteScheduleMutation()}>
          삭제
        </button>
      </div>
    </Modal>
  );
};
