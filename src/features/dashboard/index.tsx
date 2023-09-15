import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  Squares2X2Icon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline';

import { Datepicker } from '@/features/dashboard/components/Datepicker';
import { GridBoard } from '@/features/dashboard/components/GridBoard';
import { ListBoard } from '@/features/dashboard/components/ListBoard';

import { showAllAtom } from '@/features/dashboard/store';

export const Main = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [showAll, setShowAll] = useRecoilState(showAllAtom);

  return (
    <div
      className='flex flex-col justify-start items-center relative'
      onClick={() => setIsCalendarVisible(false)}>
      <Datepicker
        isCalendarVisible={isCalendarVisible}
        setIsCalendarVisible={setIsCalendarVisible}
      />
      <section className='absolute self-end mr-10 mb-2 top-[-8px] overflow-hidden border border-stone-200 rounded-md flex justify-around items-center'>
        <button
          onClick={() => setShowAll(true)}
          className={`border-r border-stone-200 px-2 py-2 ${
            showAll ? 'bg-sky-600' : 'bg-stone-800'
          }`}>
          <Squares2X2Icon className={`w-6 h-6 stroke-stone-200`} />
        </button>
        <button
          onClick={() => setShowAll(false)}
          className={`border-l border-stone-200 px-2 py-2 ${
            !showAll ? 'bg-sky-600' : 'bg-stone-800'
          }`}>
          <ArrowsPointingOutIcon className={`w-6 h-6 stroke-stone-200`} />
        </button>
      </section>
      {showAll ? <GridBoard /> : <ListBoard />}
    </div>
  );
};
