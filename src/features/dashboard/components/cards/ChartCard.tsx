import type { ReactNode } from 'react';

export const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <article
      className={`shadow-xl flex flex-col justify-start items-center w-full h-full bg-stone-100/10 shadow-stone-800 border border-opacity-30 border-stone-700 rounded-md`}>
      <div className='w-full basis-1/4 mt-1'>
        <h3 className='text-center text-stone-200 font-semibold'>{title}</h3>
      </div>
      <div className='basis-3/4 w-4/5'>{children}</div>
    </article>
  );
};
