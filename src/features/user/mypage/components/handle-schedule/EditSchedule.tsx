import { useState } from 'react';

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
  id: number | undefined;
  email: string;
  closeModal: () => void;
  date: string;
}) => {
  const [titleEdit, setTitleEdit] = useInput(title);
  const [descriptionEdit, setDescriptionEdit] = useInput(description);
  const [selected, setSelected] = useState(categoryName);

  const handleUpdateSchedule = async () => {
    const newSchedule = {
      id: id,
      title: titleEdit,
      description: descriptionEdit,
      cateory: selected,
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

  return (
    <Modal
      closeModal={closeModal}
      date={date}
      title={titleEdit}
      setTitle={setTitleEdit}
      description={descriptionEdit}
      setDescription={setDescriptionEdit}
      selected={selected}
      setSelected={setSelected}>
      <div className='flex w-full gap-4 justify-center items-center'>
        <button
          onClick={handleUpdateSchedule}
          className='text-lg text-inherit bg-slate-400 border border-slate-400 hover:bg-slate-400/50 hover:text-slate-400 rounded-md px-2'>
          수정
        </button>
        <button
          className='text-lg text-slate-400 border border-slate-400 hover:bg-slate-200/50 rounded-md px-2'
          onClick={handleDeleteSchedule}>
          삭제
        </button>
      </div>
    </Modal>
  );
};
