import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { format, startOfToday } from 'date-fns';

import { TaskItem } from '@/features/user/mypage/components/TaskItem';

import { requestScheduleOfDate } from '../../api/schedule';

export const TodayTask = ({ email }: { email: string }) => {
  const today = startOfToday();
  const DATE = format(today, 'yyyy-MM-dd');
  const { data, isError } = useQuery(
    ['ScheduleOfDate', DATE + email],
    () => requestScheduleOfDate(DATE, email as string),
    {},
  );

  if (isError) return <Navigate to='/error' />;

  return (
    <div className='grow flex flex-col w-full rounded-lg bg-slate-600'>
      <article className='flex flex-col w-full h-full items-start px-2 mt-1 border-b'>
        <p className='bg-pink-400 w-1/4 text-center rounded-md mb-2 text-stone-200 font-bold'>
          중요
        </p>
        {data &&
          !!data.length &&
          data
            .filter(({ category }) => category === '중요')
            .map((schedule) => {
              return (
                <TaskItem
                  key={schedule.id}
                  date={DATE}
                  title={schedule.title}
                  category={schedule.category}
                  id={schedule.id}
                  description={schedule.description}
                  email={email}
                />
              );
            })}
      </article>
      <article className='flex flex-col w-full h-full items-start px-2 mt-1 border-b'>
        <p className='bg-sky-500 w-1/4 text-center rounded-md mb-2 text-stone-200 font-bold'>
          행사
        </p>
        {data &&
          !!data.length &&
          data
            .filter(({ category }) => category === '행사')
            .map((schedule) => {
              return (
                <TaskItem
                  key={schedule.id}
                  date={DATE}
                  title={schedule.title}
                  category={schedule.category}
                  id={schedule.id}
                  description={schedule.description}
                  email={email}
                />
              );
            })}
      </article>
      <article className='flex flex-col w-full h-full items-start px-2 mt-1 border-b'>
        <p className='bg-amber-600 w-1/4 text-center rounded-md mb-2 text-stone-200 font-bold'>
          회의
        </p>
        {data &&
          !!data.length &&
          data
            .filter(({ category }) => category === '회의')
            .map((schedule) => {
              return (
                <TaskItem
                  key={schedule.id}
                  date={DATE}
                  title={schedule.title}
                  category={schedule.category}
                  id={schedule.id}
                  description={schedule.description}
                  email={email}
                />
              );
            })}
      </article>
      <article className='flex flex-col w-full h-full items-start px-2 mt-1 border-b'>
        <p className='bg-green-700 w-1/4 text-center rounded-md mb-2 text-stone-200 font-bold'>
          일정
        </p>
        {data &&
          !!data.length &&
          data
            .filter(({ category }) => category === '일정')
            .map((schedule) => {
              return (
                <TaskItem
                  key={schedule.id}
                  date={DATE}
                  title={schedule.title}
                  category={schedule.category}
                  id={schedule.id}
                  description={schedule.description}
                  email={email}
                />
              );
            })}
      </article>
      <article className='flex flex-col w-full h-full items-start px-2 mt-1'>
        <p className='bg-gray-700 w-1/4 text-center rounded-md mb-2 text-stone-200 font-bold'>
          완료
        </p>
        {data &&
          !!data.length &&
          data
            .filter(({ category }) => category === '완료')
            .map((schedule) => {
              return (
                <TaskItem
                  key={schedule.id}
                  date={DATE}
                  title={schedule.title}
                  category={schedule.category}
                  id={schedule.id}
                  description={schedule.description}
                  email={email}
                />
              );
            })}
      </article>
    </div>
  );
};
