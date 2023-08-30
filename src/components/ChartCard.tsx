import { ReactNode } from 'react';

export const ChartCard = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      className={`w-full h-full shadow-lg shadow-slate-800 border-none rounded-md`}>
      {children}
    </div>
  );
};
