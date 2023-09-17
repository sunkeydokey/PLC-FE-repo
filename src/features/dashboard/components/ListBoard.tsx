import { useRecoilValue } from 'recoil';
import { Tab } from '@headlessui/react';

import { Misconduct } from '@/features/dashboard/components/charts/Misconduct';
import { Malfunction } from '@/features/dashboard/components/charts/Malfunction';
import { SupplyRun } from '@/features/dashboard/components/charts/SupplyRun';
import { Dice } from '@/features/dashboard/components/charts/Dice';
import { Gas } from '@/features/dashboard/components/charts/Gas';
import { Operation } from '@/features/dashboard/components/charts/Operation';

import {
  parsedGlobalEndDate,
  parsedGlobalStartDate,
} from '@/features/dashboard/store';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const ListBoard = () => {
  const start = useRecoilValue(parsedGlobalStartDate);
  const end = useRecoilValue(parsedGlobalEndDate);

  return (
    <Tab.Group>
      <Tab.List className='w-4/5 flex space-x-1 rounded-xl bg-sky-400/20 p-1 mb-4'>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-stone-200',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-sky-600 shadow'
                : 'text-stone-100 hover:bg-sky-400/[0.12] hover:text-white',
            )
          }>
          일별 공정 불량률
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-stone-200',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-sky-600 shadow'
                : 'text-stone-100 hover:bg-sky-400/[0.12] hover:text-white',
            )
          }>
          일별 3호기 신호 불량률
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-stone-200',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-sky-600 shadow'
                : 'text-stone-100 hover:bg-sky-400/[0.12] hover:text-white',
            )
          }>
          공정별 생산 용량
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-stone-200',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-sky-600 shadow'
                : 'text-stone-100 hover:bg-sky-400/[0.12] hover:text-white',
            )
          }>
          일별 가동률
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-stone-200',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-sky-600 shadow'
                : 'text-stone-100 hover:bg-sky-400/[0.12] hover:text-white',
            )
          }>
          오염도
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-stone-200',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-sky-600 shadow'
                : 'text-stone-100 hover:bg-sky-400/[0.12] hover:text-white',
            )
          }>
          기기별 가동
        </Tab>
      </Tab.List>
      <Tab.Panels className='w-2/5'>
        <Tab.Panel>
          <Misconduct start={start} end={end} height='auto' />
        </Tab.Panel>
        <Tab.Panel>
          <Malfunction start={start} end={end} height='auto' />
        </Tab.Panel>
        <Tab.Panel>
          <Dice start={start} end={end} height='auto' />
        </Tab.Panel>
        <Tab.Panel>
          <SupplyRun start={start} end={end} height='auto' />
        </Tab.Panel>
        <Tab.Panel>
          <Gas start={start} end={end} height='auto' />
        </Tab.Panel>
        <Tab.Panel>
          <Operation start={start} end={end} height='auto' />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
