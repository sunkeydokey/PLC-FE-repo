import type { Children } from '@ui/types';

export const ChartCard = ({ children }: Children) => {
  return (
    <div
      className={`w-full h-full shadow-lg shadow-slate-800 border-none rounded-md`}>
      {children}
    </div>
  );
};
