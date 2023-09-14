import type { Children } from '@ui/types';

export const ChartCard = ({ children }: Children) => {
  return (
    <article
      className={`shadow-xl w-full h-full bg-stone-100/10 shadow-stone-800 border border-opacity-30 border-stone-700 rounded-md`}>
      {children}
    </article>
  );
};
