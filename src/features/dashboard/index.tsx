import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  Squares2X2Icon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline';

import { Datepicker } from '@/features/dashboard/components/Datepicker';
import { GridBoard } from '@/features/dashboard/components/GridBoard';
import { ListBoard } from '@/features/dashboard/components/ListBoard';

import { showAllAtom } from '@/features/dashboard/store';

import { useUser } from '@/features/user/hooks/useUser';

export const Main = () => {
  const user = useUser();
  if (!user) return <Navigate to='/login' />;

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [showAll, setShowAll] = useRecoilState(showAllAtom);

  return (
    <div
      className='flex flex-col justify-start items-center'
      onClick={() => setIsCalendarVisible(false)}>
      <Datepicker
        isCalendarVisible={isCalendarVisible}
        setIsCalendarVisible={setIsCalendarVisible}
      />
      <section className='self-end mb-4 mr-10 max-h-[40px] min-h-[40px] overflow-hidden border border-stone-200 rounded-md flex divide-x items-center'>
        <button
          onClick={() => setShowAll(true)}
          className={`px-2 py-2 ${showAll ? 'bg-sky-600' : 'bg-stone-800'}`}>
          <Squares2X2Icon className={`w-6 h-6 stroke-stone-200`} />
        </button>
        <button
          onClick={() => setShowAll(false)}
          className={`px-2 py-2 ${!showAll ? 'bg-sky-600' : 'bg-stone-800'}`}>
          <ArrowsPointingOutIcon className={`w-6 h-6 stroke-stone-200`} />
        </button>
      </section>
      {showAll ? <GridBoard /> : <ListBoard />}
    </div>
  );
};
